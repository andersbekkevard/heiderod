import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Configuration
const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID || '';
const CREDENTIALS_PATH = process.env.GOOGLE_CREDENTIALS_PATH || './client_secret.json';

interface SheetData {
  fieldKey: string;
  currentText: string;
  newText: string;
  locationDescription: string;
}

function unflattenTexts(data: SheetData[]): any {
  const result: any = {};
  
  for (const item of data) {
    const keys = item.fieldKey.split('.');
    let current = result;
    
    for (let i = 0; i < keys.length - 1; i++) {
      const key = keys[i];
      if (!(key in current)) {
        current[key] = {};
      }
      current = current[key];
    }
    
    const finalKey = keys[keys.length - 1];
    // Use new text if provided, otherwise keep current text
    current[finalKey] = item.newText.trim() || item.currentText;
  }
  
  return result;
}

async function importFromGoogleSheet() {
  try {
    // Check if required environment variables are set
    if (!SPREADSHEET_ID) {
      console.error('❌ GOOGLE_SHEET_ID environment variable not set');
      console.log('📝 Please set GOOGLE_SHEET_ID to your Google Sheet ID');
      process.exit(1);
    }

    if (!fs.existsSync(CREDENTIALS_PATH)) {
      console.error(`❌ Google credentials file not found at: ${CREDENTIALS_PATH}`);
      console.log('📝 Please place your Google service account credentials JSON file at the specified path');
      process.exit(1);
    }

    // Setup Google Sheets API - support both OAuth2 and Service Account
    const credentials = JSON.parse(fs.readFileSync(CREDENTIALS_PATH, 'utf8'));
    let auth;
    
    // Check if this is a service account (has private_key) or OAuth2 credentials
    if (credentials.private_key) {
      // Service Account authentication
      console.log('🔑 Using service account authentication');
      auth = new google.auth.GoogleAuth({
        keyFile: CREDENTIALS_PATH,
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      });
    } else {
      // OAuth2 authentication (fallback)
      console.log('🔑 Using OAuth2 authentication');
      const { client_secret, client_id, redirect_uris } = credentials.web || credentials.installed;
      
      const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);
      
      // Check for stored token
      const tokenPath = './token.json';
      if (fs.existsSync(tokenPath)) {
        const token = JSON.parse(fs.readFileSync(tokenPath, 'utf8'));
        oAuth2Client.setCredentials(token);
        auth = oAuth2Client;
      } else {
        console.error('❌ No OAuth2 token found. Please run authentication first.');
        console.log('📝 Run: npm run content:auth');
        process.exit(1);
      }
    }

    const sheets = google.sheets({ version: 'v4', auth });

    // Read data from Google Sheet
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: 'A2:D', // Skip header row
    });

    const rows = response.data.values;
    if (!rows || rows.length === 0) {
      console.error('❌ No data found in Google Sheet');
      process.exit(1);
    }

    // Parse sheet data
    const sheetData: SheetData[] = rows.map(row => ({
      fieldKey: row[0] || '',
      currentText: row[1] || '',
      newText: row[2] || '',
      locationDescription: row[3] || ''
    }));

    // Check for any new text updates
    const updatedFields = sheetData.filter(item => item.newText.trim());
    
    if (updatedFields.length === 0) {
      console.log('ℹ️  No new text updates found in the sheet');
      console.log('👩‍💻 Make sure your mother has filled in the "Ny tekst" column');
      return;
    }

    console.log(`📝 Found ${updatedFields.length} text updates:`);
    updatedFields.forEach(item => {
      console.log(`  • ${item.fieldKey}: "${item.currentText}" → "${item.newText}"`);
    });

    // Create backup of current texts
    const textsPath = path.join(process.cwd(), 'src/content/texts.json');
    const backupPath = path.join(process.cwd(), `src/content/texts.backup.${Date.now()}.json`);
    fs.copyFileSync(textsPath, backupPath);
    console.log(`📦 Backup created: ${path.basename(backupPath)}`);

    // Convert flattened data back to hierarchical structure
    const newTexts = unflattenTexts(sheetData);

    // Write updated texts to file
    fs.writeFileSync(textsPath, JSON.stringify(newTexts, null, 2));
    console.log('✅ texts.json updated successfully!');

    // Now update the Google Sheet to move "New Text" to "Current Text" and clear "New Text"
    const updatedSheetValues = [
      ['Felt ID', 'Nåværende tekst', 'Ny tekst (REDIGER DENNE)', 'Hvor teksten vises'],
      ...sheetData.map(item => [
        item.fieldKey,
        item.newText.trim() || item.currentText, // Move new text to current text
        '', // Clear new text column
        item.locationDescription
      ])
    ];

    await sheets.spreadsheets.values.clear({
      spreadsheetId: SPREADSHEET_ID,
      range: 'A:D',
    });

    await sheets.spreadsheets.values.update({
      spreadsheetId: SPREADSHEET_ID,
      range: 'A1',
      valueInputOption: 'RAW',
      requestBody: {
        values: updatedSheetValues,
      },
    });

    console.log('✅ Google Sheet updated - "New Text" moved to "Current Text"');
    console.log('🚀 Content sync complete! You can now deploy the changes.');
  } catch (error) {
    console.error('❌ Error importing from Google Sheet:', error);
    process.exit(1);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  importFromGoogleSheet();
}

export { importFromGoogleSheet };