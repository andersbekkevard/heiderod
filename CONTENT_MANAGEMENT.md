# Content Management System

This system allows your mother to edit website content through Google Sheets.

## Setup (One-time)

### Option 1: Service Account (Recommended for server/automated use)
1. **Configure Google Cloud Console**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select existing one
   - Enable Google Sheets API
   - Go to "Credentials" → "Create Credentials" → "Service account"
   - Create service account (e.g., `default@heiderod.iam.gserviceaccount.com`)
   - Generate and download the JSON key file
   - Save it in the project root (any name ending in `.json`)

2. **Create Google Sheet**
   - Create a new Google Sheet
   - Share it with your service account email (e.g., `default@heiderod.iam.gserviceaccount.com`)
   - Give "Editor" permissions
   - Copy the Sheet ID from the URL

### Option 2: OAuth2 (Fallback for personal use)
1. **Configure Google Cloud Console**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select existing one
   - Enable Google Sheets API
   - Go to "Credentials" → "Create Credentials" → "OAuth client ID"
   - Choose "Desktop application" as application type
   - Download the JSON file and save it as `client_secret.json` in the project root

2. **Create Google Sheet**
   - Create a new Google Sheet
   - Copy the Sheet ID from the URL
   - Make sure the sheet is accessible with your Google account

3. **Authenticate (One-time for OAuth2 only)**
   ```bash
   npm run content:auth
   ```
   - This opens a browser window for Google authentication
   - Grant permissions and copy the authorization code
   - Paste the code in the terminal
   - Authentication token is saved for future use

### Final Configuration
3. **Configure Environment**
   - Copy `.env.example` to `.env`
   - Fill in your Google Sheet ID
   - Set the path to your credentials file

## Workflow

### First Time Setup
1. Run authentication: `npm run content:auth`
2. Initial export: `npm run content:export`

### Regular Use
#### Export Current Content
```bash
npm run content:export
```
This populates the Google Sheet with all current website text.

### Mother Edits Content
- Your mother opens the shared Google Sheet
- She sees current text in column B (for reference)
- She edits the desired new text in column C
- She notifies you when done

### Import Changes
```bash
npm run content:import
```
This:
- Reads the new text from Google Sheet
- Updates the website content
- Moves new text to current text column
- Clears the new text column for next time

### Deploy
After importing, build and deploy as usual:
```bash
npm run build
```

## Google Sheet Structure

| Column A | Column B | Column C | Column D |
|----------|----------|----------|----------|
| Field ID | Current Text | New Text (EDIT THIS) | Location Description |
| hero.title | Velkommen til Heiderød | [mother edits here] | Main heading on homepage |

## Text Locations

- `hero.title` - Main heading on homepage
- `hero.subtitle` - Subtitle under main heading
- `hero.button` - Button text that leads to "our story"
- `about.title` - Heading in "About us" section
- `about.description` - Farm description text
- `homepage.intro.title` - "What we do" section heading
- `homepage.intro.description` - Description under "What we do"
- `contact.title` - Contact section heading
- `contact.description` - Contact section description
- `contact.email` - Email address
- `contact.phone` - Phone number

## Safety Features

- Automatic backup of texts.json before importing
- Fallback text if any field is missing
- Clear error messages if setup is incorrect
- Google Sheet is automatically formatted for easy editing