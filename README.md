# Site Scanner Chrome Extension

A simple Chrome extension that displays "Hello World" when opened.

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
- Run `npm run build` to compile
- Refresh the extension in Chrome (`chrome://extensions/` and click the refresh icon on the extension)

## Structure
- `src/`: Source code
- `dist/`: Compiled code (generated after build)
- `src/popup.html` and `src/popup.ts`: The popup UI
- `src/background.ts`: Background script
- `src/manifest.json`: Extension manifest file 