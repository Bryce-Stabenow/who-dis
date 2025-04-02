// This background script will run when the extension is loaded
console.log('Background script loaded!');

// Listen for messages from the popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  // Handle fetching headers
  if (request.action === 'fetchHeaders') {
    fetchHeaders(request.url)
      .then(headers => {
        sendResponse({ headers });
      })
      .catch(error => {
        sendResponse({ error: error.message });
      });
      
    // Return true to indicate that the response will be sent asynchronously
    return true;
  }
});

// Function to fetch headers from a URL
async function fetchHeaders(url: string): Promise<Record<string, string>> {
  try {
    const response = await fetch(url, {
      method: 'HEAD',
      credentials: 'omit',
      // Use mode: 'no-cors' as a fallback if cors fails, but headers will be limited
      mode: 'cors'
    });
    
    // Convert headers to an object
    const headers: Record<string, string> = {};
    response.headers.forEach((value, key) => {
      headers[key] = value;
    });
    
    return headers;
  } catch (error) {
    // Fallback to using XMLHttpRequest which might work in some cases
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('HEAD', url);
      
      xhr.onload = function() {
        const headers: Record<string, string> = {};
        const rawHeaders = xhr.getAllResponseHeaders().trim().split(/[\r\n]+/);
        
        rawHeaders.forEach(line => {
          const parts = line.split(': ');
          const header = parts.shift();
          const value = parts.join(': ');
          if (header) {
            headers[header] = value;
          }
        });
        
        resolve(headers);
      };
      
      xhr.onerror = function() {
        reject(new Error('Failed to fetch headers'));
      };
      
      xhr.send();
    });
  }
} 