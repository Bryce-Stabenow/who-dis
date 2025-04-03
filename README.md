# Who Dis? - Site Scanner Chrome Extension

A browser extension that analyzes websites and provides detailed insights about their technology stack, security headers, JavaScript libraries, and analytics tools.

## Features

- **Site Technology Scan**: Identifies underlying site technologies
- **Security Headers Check**: Analyzes HTTP security headers and provides recommendations
- **JavaScript Library Detection**: Detects common JavaScript frameworks and libraries such as:
  - React
  - Vue.js
  - Angular
  - jQuery
  - Svelte
  - Next.js
  - Gatsby.js
- **Analytics Tools Identification**: Discovers analytics and tracking scripts on websites, including:
  - Google Analytics (Universal and GA4)
  - Google Tag Manager
  - Facebook Pixel
  - Hotjar
  - And many other common analytics tools

## How It Works

When you click on the extension while visiting a website, it runs a series of checks by analyzing the current page's DOM, JavaScript objects, and HTTP headers. The results are presented in an easy-to-read checklist format with expandable sections for detailed information.

## Development

### Prerequisites
- Node.js and npm

### Setup
1. Clone this repository
2. Install dependencies:
```
npm install
```
3. Build the extension:
```
npm run build
```

### Loading the extension in Chrome
1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode" by toggling the switch in the top right corner
3. Click "Load unpacked" and select the `dist` directory from this project
4. The extension should now be installed and visible in your browser toolbar

### Development workflow
- Make changes to the code
- Run `npm run build` to compile (or `npm run watch` for continuous building)
- Refresh the extension in Chrome (`chrome://extensions/` and click the refresh icon on the extension)

## Structure
- `src/`: Source code
  - `popup.html` and `popup.ts`: The popup UI and interaction logic
  - `popup.css`: Styles for the popup UI
  - `background.ts`: Background script that handles API calls and content script injection
  - `manifest.json`: Extension manifest file
- `dist/`: Compiled code (generated after build)

## Permissions
The extension requires the following permissions:
- `activeTab`: To access the content of the currently active tab
- `tabs`: To get information about the current tab
- `scripting`: To inject and execute detection scripts
- Access to all HTTP/HTTPS URLs for analyzing website properties 