import './popup.css';

// Functions for checklist items
function scanSiteTechnology() {
  console.log('Scanning site technologies...');
  // Get the results container for this item
  const resultsContainer = document.getElementById('results-site-technology');
  if (resultsContainer) {
    resultsContainer.innerHTML = '<p>Scanning site technologies... (Not implemented yet)</p>';
    toggleResultsVisibility(resultsContainer);
  }
  return true;
}

function checkSecurityHeaders() {
  console.log('Checking security headers...');
  
  // Get the results container for this item
  const resultsContainer = document.getElementById('results-security-headers');
  if (!resultsContainer) return false;
  
  // Show loading indicator
  resultsContainer.innerHTML = '<p>Loading security headers data...</p>';
  toggleResultsVisibility(resultsContainer);
  
  // Get the current active tab
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    const currentTab = tabs[0];
    if (!currentTab || !currentTab.url) {
      resultsContainer.innerHTML = '<div class="error-message">Cannot access current tab information</div>';
      return;
    }
    
    // Check if we can analyze this URL (must be http or https)
    const url = currentTab.url;
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      resultsContainer.innerHTML = '<div class="error-message">Can only analyze HTTP/HTTPS pages</div>';
      return;
    }
    
    // Fetch headers using background script (needed for CORS)
    chrome.runtime.sendMessage({action: 'fetchHeaders', url: url}, (response) => {
      if (response.error) {
        resultsContainer.innerHTML = `<div class="error-message">${response.error}</div>`;
        return;
      }
      
      resultsContainer.innerHTML = '<h3>Security Headers Analysis</h3>';
      const headers = response.headers;
      
      // Important security headers to check
      const securityHeaders = [
        {
          name: 'Content-Security-Policy',
          description: 'Helps prevent XSS and data injection attacks'
        },
        {
          name: 'X-Content-Type-Options',
          description: 'Prevents MIME type sniffing',
          recommended: 'nosniff'
        },
        {
          name: 'X-Frame-Options',
          description: 'Protects against clickjacking',
          recommended: 'DENY or SAMEORIGIN'
        },
        {
          name: 'Strict-Transport-Security',
          description: 'Enforces HTTPS connections',
          recommended: 'max-age=31536000; includeSubDomains'
        },
        {
          name: 'X-XSS-Protection',
          description: 'Provides XSS protection in older browsers',
          recommended: '1; mode=block'
        },
        {
          name: 'Referrer-Policy',
          description: 'Controls information in the Referer header',
          recommended: 'strict-origin-when-cross-origin'
        },
        {
          name: 'Permissions-Policy',
          description: 'Controls browser features and APIs',
          alternate: 'Feature-Policy'
        }
      ];
      
      // Check each security header
      securityHeaders.forEach(header => {
        const headerValue = getHeaderValue(headers, header.name) || 
                           (header.alternate ? getHeaderValue(headers, header.alternate) : null);
        
        const status = headerValue ? 'Present' : 'Missing';
        const details = headerValue || 
                       (header.recommended ? `Recommended: ${header.recommended}` : 'Not implemented');
        
        displayResult(resultsContainer, header.name, status, details, header.description);
      });
    });
  });
  
  return true;
}

function detectJavaScriptLibraries() {
  console.log('Detecting JavaScript libraries...');
  // Get the results container for this item
  const resultsContainer = document.getElementById('results-javascript-libraries');
  if (resultsContainer) {
    resultsContainer.innerHTML = '<p>Detecting JavaScript libraries... (Not implemented yet)</p>';
    toggleResultsVisibility(resultsContainer);
  }
  return true;
}

function detectContentManagementSystem() {
  console.log('Detecting content management system...');
  // Get the results container for this item
  const resultsContainer = document.getElementById('results-cms');
  if (resultsContainer) {
    resultsContainer.innerHTML = '<p>Detecting CMS... (Not implemented yet)</p>';
    toggleResultsVisibility(resultsContainer);
  }
  return true;
}

function identifyAnalyticsTools() {
  console.log('Identifying analytics tools...');
  // Get the results container for this item
  const resultsContainer = document.getElementById('results-analytics');
  if (resultsContainer) {
    resultsContainer.innerHTML = '<p>Identifying analytics tools... (Not implemented yet)</p>';
    toggleResultsVisibility(resultsContainer);
  }
  return true;
}

// Toggle visibility of results container
function toggleResultsVisibility(container: HTMLElement) {
  if (container.classList.contains('visible')) {
    container.classList.remove('visible');
    container.style.maxHeight = '0px';
  } else {
    container.classList.add('visible');
    container.style.maxHeight = container.scrollHeight + 'px';
    
    // Update max height on content changes
    const observer = new MutationObserver(() => {
      if (container.classList.contains('visible')) {
        container.style.maxHeight = container.scrollHeight + 'px';
      }
    });
    
    observer.observe(container, { 
      childList: true, 
      subtree: true,
      characterData: true
    });
    
    // Disconnect after a short time to avoid memory leaks
    setTimeout(() => observer.disconnect(), 2000);
  }
}

// Helper function to get header value (case-insensitive)
function getHeaderValue(headers: Record<string, string>, headerName: string): string | null {
  const headerKey = Object.keys(headers).find(key => 
    key.toLowerCase() === headerName.toLowerCase()
  );
  
  return headerKey ? headers[headerKey] : null;
}

// Helper function to display results
function displayResult(
  container: HTMLElement, 
  headerName: string, 
  status: string, 
  details: string = '', 
  description: string = ''
) {
  const resultItem = document.createElement('div');
  resultItem.className = `result-item ${status.toLowerCase()}`;
  
  const statusClass = status === 'Present' ? 'success' : 
                     (status === 'Error' ? 'error' : 'warning');
  
  resultItem.innerHTML = `
    <div class="header-name">${headerName}</div>
    <div class="status ${statusClass}">${status}</div>
    ${details ? `<div class="details">${details}</div>` : ''}
    ${description ? `<div class="description">${description}</div>` : ''}
  `;
  
  container.appendChild(resultItem);
}

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  if (app) {
    // Create header
    const header = document.createElement('h1');
    header.textContent = 'Who Dis?';
    app.appendChild(header);
    
    // Create checklist with corresponding functions
    const checklistItemsWithFunctions = [
      { 
        id: 'site-technology',
        name: 'Site technology scan', 
        function: scanSiteTechnology 
      },
      { 
        id: 'security-headers',
        name: 'Security headers check', 
        function: checkSecurityHeaders 
      },
      { 
        id: 'javascript-libraries',
        name: 'JavaScript library detection', 
        function: detectJavaScriptLibraries 
      },
      { 
        id: 'cms',
        name: 'Content management system detection', 
        function: detectContentManagementSystem 
      },
      { 
        id: 'analytics',
        name: 'Analytics tools identification', 
        function: identifyAnalyticsTools 
      }
    ];
    
    const checklist = document.createElement('ul');
    checklist.className = 'checklist';
    
    checklistItemsWithFunctions.forEach(item => {
      // Create list item container
      const listItem = document.createElement('li');
      listItem.className = 'checklist-item-container';
      
      // Create header with checkmark and title
      const itemHeader = document.createElement('div');
      itemHeader.className = 'checklist-header';
      
      const checkmark = document.createElement('span');
      checkmark.className = 'checkmark';
      checkmark.innerHTML = '✓';
      
      const itemText = document.createElement('span');
      itemText.className = 'checklist-item';
      itemText.textContent = item.name;
      
      const expandIcon = document.createElement('span');
      expandIcon.className = 'expand-icon';
      expandIcon.innerHTML = '▼';
      
      itemHeader.appendChild(checkmark);
      itemHeader.appendChild(itemText);
      itemHeader.appendChild(expandIcon);
      
      // Create results container (initially hidden)
      const resultsContainer = document.createElement('div');
      resultsContainer.className = 'results-container';
      resultsContainer.id = `results-${item.id}`;
      resultsContainer.style.maxHeight = '0px';
      resultsContainer.style.overflow = 'hidden';
      
      // Add click event to header
      itemHeader.addEventListener('click', () => {
        // Toggle active state for visual feedback
        listItem.classList.toggle('active');
        // Run function if not already run
        if (resultsContainer.innerHTML === '') {
          item.function();
        } else {
          toggleResultsVisibility(resultsContainer);
        }
      });
      
      // Assemble the list item
      listItem.appendChild(itemHeader);
      listItem.appendChild(resultsContainer);
      checklist.appendChild(listItem);
    });
    
    app.appendChild(checklist);
  }
}); 