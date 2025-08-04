import { google } from 'googleapis';
import fs from 'fs';
import readline from 'readline';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const CREDENTIALS_PATH = './client_secret.json';
const TOKEN_PATH = './token.json';
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

async function authenticate() {
  try {
    if (!fs.existsSync(CREDENTIALS_PATH)) {
      console.error(`❌ Credentials file not found at: ${CREDENTIALS_PATH}`);
      console.log('📝 Please place your client_secret.json file in the project root');
      process.exit(1);
    }

    // Load client secrets from a local file
    const credentials = JSON.parse(fs.readFileSync(CREDENTIALS_PATH, 'utf8'));
    const { client_secret, client_id, redirect_uris } = credentials.web || credentials.installed;

    const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

    // Check if we have previously stored a token
    if (fs.existsSync(TOKEN_PATH)) {
      const token = JSON.parse(fs.readFileSync(TOKEN_PATH, 'utf8'));
      oAuth2Client.setCredentials(token);
      console.log('✅ Already authenticated! Token found.');
      return;
    }

    // Get and store new token after prompting for user authorization
    const authUrl = oAuth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: SCOPES,
    });

    console.log('🔐 Authorize this app by visiting this url:', authUrl);
    
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question('Enter the code from that page here: ', (code) => {
      rl.close();
      oAuth2Client.getAccessToken(code, (err, token) => {
        if (err) {
          console.error('❌ Error retrieving access token', err);
          return;
        }
        
        if (token) {
          oAuth2Client.setCredentials(token);
          // Store the token to disk for later program executions
          fs.writeFileSync(TOKEN_PATH, JSON.stringify(token));
          console.log('✅ Token stored to', TOKEN_PATH);
          console.log('🎉 Authentication complete! You can now run content:export and content:import');
        }
      });
    });
  } catch (error) {
    console.error('❌ Error during authentication:', error);
    process.exit(1);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  authenticate();
}

export { authenticate };