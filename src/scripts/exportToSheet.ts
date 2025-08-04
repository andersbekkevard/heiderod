import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Configuration
const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID || '';
const CREDENTIALS_PATH = process.env.GOOGLE_CREDENTIALS_PATH || './client_secret.json';

// Field descriptions organized by page/section for mother to understand where text appears
const FIELD_DESCRIPTIONS: Record<string, string> = {
  // Navigation
  'navigation.logo': 'Logo/nettstedsnavn (øverst til venstre)',
  'navigation.home': 'Menylenke: Hjem',
  'navigation.ourStory': 'Menylenke: Vår historie',
  'navigation.shop': 'Menylenke: Butikk',
  'navigation.photos': 'Menylenke: Bilder',
  'navigation.contact': 'Menylenke: Kontakt',
  
  // Homepage Hero Section
  'hero.title': 'FORSIDE: Hovedoverskrift (stor tekst øverst)',
  'hero.subtitle': 'FORSIDE: Undertekst under hovedoverskriften',
  'hero.button': 'FORSIDE: Tekst på knapp som leder til "vår historie"',
  'hero.imageAlt': 'FORSIDE: Bildetekst for hovedbildet (ikke synlig)',
  
  // Homepage About Section  
  'about.title': 'FORSIDE: Overskrift i "Om oss" seksjonen',
  'about.description': 'FORSIDE: Beskrivelse av gården i "Om oss" seksjonen',
  'about.imageAlt': 'FORSIDE: Bildetekst for blomstbildet (ikke synlig)',
  
  // Homepage Intro Section
  'homepage.intro.title': 'FORSIDE: Overskrift i "Hva vi gjør" seksjonen',
  'homepage.intro.description': 'FORSIDE: Beskrivelse under "Hva vi gjør"',
  
  // Our Story Page
  'ourStory.title': 'VÅR HISTORIE: Sidetittel',
  'ourStory.newBeginning.title': 'VÅR HISTORIE: Overskrift "En ny begynnelse"',
  'ourStory.newBeginning.description': 'VÅR HISTORIE: Tekst under "En ny begynnelse"',
  'ourStory.newBeginning.imageAlt': 'VÅR HISTORIE: Bildetekst gårdsbilde (ikke synlig)',
  'ourStory.findingFarm.title': 'VÅR HISTORIE: Overskrift "Å finne gården"',
  'ourStory.findingFarm.description': 'VÅR HISTORIE: Tekst under "Å finne gården"',
  'ourStory.findingFarm.imageAlt': 'VÅR HISTORIE: Bildetekst kjøkkenhage 1 (ikke synlig)',
  'ourStory.rebuilding.title': 'VÅR HISTORIE: Overskrift "Gjenoppbygging og planting"',
  'ourStory.rebuilding.description': 'VÅR HISTORIE: Tekst under "Gjenoppbygging og planting"',
  'ourStory.rebuilding.imageAlt': 'VÅR HISTORIE: Bildetekst kjøkkenhage 2 (ikke synlig)',
  'ourStory.community.title': 'VÅR HISTORIE: Overskrift "Velkommen til samfunnet"',
  'ourStory.community.description': 'VÅR HISTORIE: Tekst under "Velkommen til samfunnet"',
  'ourStory.community.imageAlt': 'VÅR HISTORIE: Bildetekst kirsebær (ikke synlig)',
  
  // Shop Page
  'shop.title': 'BUTIKK: Sidetittel',
  'shop.buyButton': 'BUTIKK: Tekst på kjøp-knapp',
  'shop.products.eggs': 'BUTIKK: Produktnavn "Egg"',
  'shop.products.rhubarb': 'BUTIKK: Produktnavn "Rabarbra"',
  'shop.products.apples': 'BUTIKK: Produktnavn "Epler"',
  'shop.products.potatoes': 'BUTIKK: Produktnavn "Poteter"',
  
  // Photos Page
  'photos.title': 'BILDER: Sidetittel',
  'photos.descriptions.blomst1': 'BILDER: Beskrivelse av blomstbilde 1',
  'photos.descriptions.robert': 'BILDER: Beskrivelse av Robert-bilde',
  'photos.descriptions.eplekart': 'BILDER: Beskrivelse av eplekart-bilde',
  'photos.descriptions.kirsebaerInne': 'BILDER: Beskrivelse av kirsebær inne-bilde',
  'photos.descriptions.kongle': 'BILDER: Beskrivelse av kongle-bilde',
  'photos.descriptions.laaveVinter': 'BILDER: Beskrivelse av låve vinter-bilde',
  'photos.descriptions.skudd': 'BILDER: Beskrivelse av skudd-bilde',
  'photos.descriptions.steingjerde': 'BILDER: Beskrivelse av steingjerde-bilde',
  
  // Carousel Navigation
  'carousel.previous': 'BILDER: Tekst for "forrige bilde" knapp (ikke synlig)',
  'carousel.next': 'BILDER: Tekst for "neste bilde" knapp (ikke synlig)',
  
  // Contact Section
  'contact.title': 'KONTAKT: Overskrift i kontakt-seksjonen',
  'contact.description': 'KONTAKT: Beskrivelse i kontakt-seksjonen',
  'contact.email': 'KONTAKT: E-postadresse (vises som tekst og lenke)',
  'contact.phone': 'KONTAKT: Telefonnummer (vises som tekst og lenke)',
  'contact.imageAlt': 'KONTAKT: Bildetekst for ved-bildet (ikke synlig)',
  
  // Footer
  'footer.email': 'FOOTER: E-postadresse i bunntekst',
  'footer.phone': 'FOOTER: Telefonnummer i bunntekst',
  'footer.copyright': 'FOOTER: Copyright-tekst (uten årstall og "Heiderød")'
};

interface TextRow {
  fieldKey: string;
  currentText: string;
  newText: string;
  locationDescription: string;
  section?: string;
}

function flattenTexts(obj: any, prefix = ''): TextRow[] {
  const rows: TextRow[] = [];
  
  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    
    if (typeof value === 'string') {
      // Determine section from field key
      let section = 'DIVERSE';
      if (fullKey.startsWith('navigation.')) section = 'NAVIGASJON';
      else if (fullKey.startsWith('hero.') || fullKey.startsWith('about.') || fullKey.startsWith('homepage.')) section = 'FORSIDE';
      else if (fullKey.startsWith('ourStory.')) section = 'VÅR HISTORIE';
      else if (fullKey.startsWith('shop.')) section = 'BUTIKK';
      else if (fullKey.startsWith('photos.') || fullKey.startsWith('carousel.')) section = 'BILDER';
      else if (fullKey.startsWith('contact.')) section = 'KONTAKT';
      else if (fullKey.startsWith('footer.')) section = 'FOOTER';
      
      rows.push({
        fieldKey: fullKey,
        currentText: value,
        newText: '', // Empty for mother to fill in
        locationDescription: FIELD_DESCRIPTIONS[fullKey] || 'Ukjent plassering',
        section: section
      });
    } else if (typeof value === 'object' && value !== null) {
      rows.push(...flattenTexts(value, fullKey));
    }
  }
  
  return rows;
}

async function exportToGoogleSheet() {
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

    // Load current texts
    const textsPath = path.join(process.cwd(), 'src/content/texts.json');
    const textsContent = fs.readFileSync(textsPath, 'utf8');
    const texts = JSON.parse(textsContent);

    // Flatten texts to rows and organize by section
    const rows = flattenTexts(texts);
    
    // Group by section and create organized data with section headers
    const sections = ['NAVIGASJON', 'FORSIDE', 'VÅR HISTORIE', 'BUTIKK', 'BILDER', 'KONTAKT', 'FOOTER'];
    const organizedData: (string | TextRow)[] = [];
    
    sections.forEach(sectionName => {
      const sectionRows = rows.filter(row => row.section === sectionName);
      if (sectionRows.length > 0) {
        // Add section header
        organizedData.push(`=== ${sectionName} ===`);
        organizedData.push(...sectionRows);
      }
    });

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

    // Prepare data for Google Sheets with section headers
    const values = [
      ['Felt ID', 'Nåværende tekst', 'Ny tekst (REDIGER DENNE)', 'Hvor teksten vises'],
    ];
    
    organizedData.forEach(item => {
      if (typeof item === 'string') {
        // Section header - merge across all columns
        values.push([item, '', '', '']);
      } else {
        // Regular text row
        values.push([item.fieldKey, item.currentText, item.newText, item.locationDescription]);
      }
    });

    // Clear existing content and add new data
    await sheets.spreadsheets.values.clear({
      spreadsheetId: SPREADSHEET_ID,
      range: 'A:D',
    });

    await sheets.spreadsheets.values.update({
      spreadsheetId: SPREADSHEET_ID,
      range: 'A1',
      valueInputOption: 'RAW',
      requestBody: {
        values: values,
      },
    });

    // Format the header row
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId: SPREADSHEET_ID,
      requestBody: {
        requests: [
          {
            repeatCell: {
              range: {
                startRowIndex: 0,
                endRowIndex: 1,
                startColumnIndex: 0,
                endColumnIndex: 4,
              },
              cell: {
                userEnteredFormat: {
                  backgroundColor: { red: 0.9, green: 0.9, blue: 0.9 },
                  textFormat: { bold: true },
                },
              },
              fields: 'userEnteredFormat(backgroundColor,textFormat)',
            },
          },
          {
            updateDimensionProperties: {
              range: {
                dimension: 'COLUMNS',
                startIndex: 0,
                endIndex: 4,
              },
              properties: {
                pixelSize: 200,
              },
              fields: 'pixelSize',
            },
          },
        ],
      },
    });

    console.log('✅ Successfully exported content to Google Sheet!');
    console.log(`📊 Sheet URL: https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/edit`);
    console.log(`📝 ${rows.length} text fields exported across ${sections.length} sections`);
    console.log('📋 Sections: ' + sections.join(', '));
    console.log('👩‍💻 Your mother can now edit the "Ny tekst" column');
    console.log('🗂️  Content is organized by page sections for easy navigation');
  } catch (error) {
    console.error('❌ Error exporting to Google Sheet:', error);
    process.exit(1);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  exportToGoogleSheet();
}

export { exportToGoogleSheet };