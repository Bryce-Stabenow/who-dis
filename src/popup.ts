import './popup.css';

// Functions for checklist items
function scanSiteTechnology() {
  console.log('Scanning site technologies...');
  // Get the results container for this item
  const resultsContainer = document.getElementById('results-site-technology');
  if (resultsContainer) {
    resultsContainer.innerHTML = '<p>Loading site technologies data...</p>';
    
    // Add delay to ensure page is fully loaded
    setTimeout(() => {
      resultsContainer.innerHTML = '<p>Scanning site technologies... (Not implemented yet)</p>';
      // Set to default state since not implemented
      updateItemStatus('site-technology', 'success');
    }, 1000);
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
  
  // Add a delay to ensure page is fully loaded
  setTimeout(() => {
    // Get the current active tab
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      const currentTab = tabs[0];
      if (!currentTab || !currentTab.url) {
        resultsContainer.innerHTML = '<div class="error-message">Cannot access current tab information</div>';
        updateItemStatus('security-headers', 'error');
        return;
      }
      
      // Check if we can analyze this URL (must be http or https)
      const url = currentTab.url;
      if (!url.startsWith('http://') && !url.startsWith('https://')) {
        resultsContainer.innerHTML = '<div class="error-message">Can only analyze HTTP/HTTPS pages</div>';
        updateItemStatus('security-headers', 'error');
        return;
      }
      
      // Fetch headers using background script (needed for CORS)
      chrome.runtime.sendMessage({action: 'fetchHeaders', url: url}, (response) => {
        if (response.error) {
          resultsContainer.innerHTML = `<div class="error-message">${response.error}</div>`;
          updateItemStatus('security-headers', 'error');
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
        let missingHeaders = 0;
        securityHeaders.forEach(header => {
          const headerValue = getHeaderValue(headers, header.name) || 
                           (header.alternate ? getHeaderValue(headers, header.alternate) : null);
          
          const status = headerValue ? 'Present' : 'Missing';
          const details = headerValue || 
                       (header.recommended ? `Recommended: ${header.recommended}` : 'Not implemented');
          
          if (status === 'Missing') missingHeaders++;
          
          displayResult(resultsContainer, header.name, status, details, header.description);
        });
        
        // Update the checklist item status based on missing headers
        if (missingHeaders > 0) {
          updateItemStatus('security-headers', 'warning');
        } else {
          updateItemStatus('security-headers', 'success');
        }
      });
    });
  }, 1000); // Wait 1 second to ensure page is loaded
  
  return true;
}

function detectJavaScriptLibraries() {
  console.log('Detecting JavaScript libraries...');
  
  // Get the results container for this item
  const resultsContainer = document.getElementById('results-javascript-libraries');
  if (!resultsContainer) return false;
  
  // Show loading indicator
  resultsContainer.innerHTML = '<p>Loading JavaScript libraries data...</p>';
  
  // Get the current active tab
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    const currentTab = tabs[0];
    if (!currentTab || !currentTab.url) {
      resultsContainer.innerHTML = '<div class="error-message">Cannot access current tab information</div>';
      updateItemStatus('javascript-libraries', 'error');
      return;
    }
    
    // Check if we can analyze this URL (must be http or https)
    const url = currentTab.url;
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      resultsContainer.innerHTML = '<div class="error-message">Can only analyze HTTP/HTTPS pages</div>';
      updateItemStatus('javascript-libraries', 'error');
      return;
    }
    
    // Execute script in the current tab to detect libraries
    chrome.scripting.executeScript({
      target: { tabId: currentTab.id as number },
      func: () => {
        // Types for global libraries
        interface Window {
          React?: any;
          Vue?: any;
          angular?: any;
          jQuery?: any;
          $?: any;
          __REACT_DEVTOOLS_GLOBAL_HOOK__?: any;
          __svelte__?: any;
          __NEXT_DATA__?: any;
          __GATSBY?: any;
          __VUE__?: any;
          __VUE_OPTIONS__?: any;
          __VUE_DEVTOOLS_GLOBAL_HOOK__?: any;
          __VUE_DEVTOOLS_TOAST__?: any;
        }
        
        // Define library detection functions
        const libraryDetectors = {
          'React': () => {
            // Multiple detection approaches for modern React
            try {
              // 1. Check for React in window
              if ((window as Window).React) {
                return true;
              }
              
              // 2. Check for React DevTools hook
              if ((window as Window).__REACT_DEVTOOLS_GLOBAL_HOOK__) {
                return true;
              }
              
              // 3. Check for React 16+ fiber nodes
              const rootElements = document.querySelectorAll('[data-reactroot]');
              if (rootElements.length > 0) {
                return true;
              }
              
              // 4. Check for old React (pre-16) attributes
              if (document.querySelector('[data-reactid]')) {
                return true;
              }
              
              // 5. Find React 17+ root containers or fiber nodes (most common modern approach)
              const allElements = Array.from(document.querySelectorAll('*'));
              
              // 5a. Look for React 17+ root container
              const hasReactRootContainer = allElements.some(el => 
                Object.prototype.hasOwnProperty.call(el, '_reactRootContainer')
              );
              if (hasReactRootContainer) {
                return true;
              }
              
              // 5b. Look for React 18+ container property pattern
              const hasReactContainer = allElements.some(el => {
                return Object.keys(el).some(key => 
                  key.startsWith('__reactContainer') || 
                  key.startsWith('__reactFiber') || 
                  key.startsWith('__reactProps') || 
                  key.startsWith('__reactEvents') ||
                  key.startsWith('__reactInternalInstance')
                );
              });
              if (hasReactContainer) {
                return true;
              }
              
              // 6. Check for React profiler
              if (typeof (window as any).__REACT_DEVTOOLS_PROFILER_HOOK__ !== 'undefined') {
                return true;
              }
              
              // 7. Look for React-specific component name patterns
              const componentNamePattern = /^[A-Z][A-Za-z]+(\.[A-Z][A-Za-z]+)*$/;
              const reactComponents = allElements.some(el => {
                for (const key in el) {
                  if (key.startsWith('__reactProps$') && 
                      (el as any)[key] && 
                      (el as any)[key].children) {
                    return true;
                  }
                  if (key.startsWith('_reactListening')) {
                    return true;
                  }
                }
                return false;
              });
              
              if (reactComponents) {
                return true;
              }
              
              return false;
            } catch (e) {
              console.error('Error detecting React:', e);
              return false;
            }
          },
          'Vue.js': () => {
            try {
              // Direct global Vue detection (mostly Vue 2)
              if ((window as Window).Vue) {
                return true;
              }
              
              // Vue DevTools hooks and internal properties
              if (
                (window as Window).__VUE__ || 
                (window as Window).__VUE_OPTIONS__ ||
                (window as Window).__VUE_DEVTOOLS_GLOBAL_HOOK__ ||
                (window as Window).__VUE_DEVTOOLS_TOAST__
              ) {
                return true;
              }
              
              // Detect Vue 3 by searching for app instance in document elements
              const allElements = Array.from(document.querySelectorAll('*'));
              const hasVueInstance = allElements.some(el => {
                // Check for Vue 3 instance properties
                return Object.keys(el).some(key => 
                  key.startsWith('__vue') || 
                  key.startsWith('__vue_') || 
                  key === '__vue'
                );
              });
              
              if (hasVueInstance) {
                return true;
              }
              
              // Common Vue directive attributes (works for both Vue 2 and Vue 3)
              if (
                document.querySelector('[data-v-]') || // Scoped CSS indicator
                document.querySelector('[v-cloak]') ||
                document.querySelector('[v-if]') ||
                document.querySelector('[v-for]') ||
                document.querySelector('[v-show]') ||
                document.querySelector('[v-bind]') ||
                document.querySelector('[v-model]') ||
                document.querySelector('[v-on]') ||
                document.querySelector('[v-once]') ||
                document.querySelector('[v-html]') ||
                document.querySelector('[v-text]') ||
                document.querySelector('[v-pre]')
              ) {
                return true;
              }
              
              // Check for shorthand directives
              const hasShorthandDirectives = allElements.some(el => {
                const attributeNames = el.getAttributeNames();
                // Check for v-bind shorthand (:) or v-on shorthand (@)
                return attributeNames.some(attr => attr.startsWith(':') || attr.startsWith('@'));
              });
              
              if (hasShorthandDirectives) {
                return true;
              }
              
              // Check for Vue app root elements (common conventions)
              if (
                document.querySelector('#app[data-v-app]') ||
                document.querySelector('#app > [data-v-]') ||
                document.querySelector('.vue-app')
              ) {
                return true;
              }
              
              return false;
            } catch (e) {
              console.error('Error detecting Vue.js:', e);
              return false;
            }
          },
          'Angular': () => {
            return !!(
              (window as Window).angular || 
              document.querySelector('[ng-app]') ||
              document.querySelector('[ng-controller]') ||
              document.querySelector('[ng-model]') ||
              document.querySelector('[ng-repeat]') ||
              document.querySelector('[ng-view]') ||
              document.querySelector('[ng-if]') ||
              document.querySelector('[ng-show]') ||
              // Angular 2+
              document.querySelector('[_nghost]') ||
              document.querySelector('[_ngcontent]') ||
              document.querySelector('app-root') ||
              document.querySelector('[ng-version]')
            );
          },
          'jQuery': () => {
            return !!(
              (window as Window).jQuery || 
              (window as Window).$ && (window as Window).$.fn && (window as Window).$.fn.jquery
            );
          },
          'Svelte': () => {
            // Svelte components have class names like "svelte-abc123"
            const hasSvelteClass = Array.from(document.querySelectorAll('*')).some(el => {
              if (el.className && typeof el.className === 'string') {
                return /svelte-[a-z0-9]+/.test(el.className);
              }
              return false;
            });
            
            // Check for Svelte devtools hook
            const hasSvelteHook = !!(window as Window).__svelte__;
            
            // Check for HTML elements with Svelte-specific attributes
            const hasSvelteAttributes = !!document.querySelector('[svelte-fragment]') || 
                                       !!document.querySelector('[sveltekit\\:prefetch]');
            
            // Check if any custom elements (Web Components) are Svelte-related
            const hasSvelteElements = Array.from(document.querySelectorAll('*')).some(el => {
              return el.tagName && el.tagName.toLowerCase().includes('svelte');
            });
            
            return !!(hasSvelteClass || hasSvelteHook || hasSvelteAttributes || hasSvelteElements);
          },
          'Next.js': () => {
            try {
              // Check for Next.js data script tag
              if (document.querySelector('script#__NEXT_DATA__')) {
                return true;
              }
              
              // Check for Next.js specific attributes
              if (document.querySelector('[data-next-hydrate]')) {
                return true;
              }
              
              // Check for Next.js runtime
              if ((window as Window).__NEXT_DATA__) {
                return true;
              }
              
              // Check for next page CSS
              if (document.querySelector('#__next')) {
                return true;
              }
              
              return false;
            } catch (e) {
              console.error('Error detecting Next.js:', e);
              return false;
            }
          },
          'Gatsby.js': () => {
            try {
              // Check for Gatsby specific elements
              if (document.querySelector('#___gatsby')) {
                return true;
              }
              
              // Check for Gatsby page data
              if (document.querySelector('script[id*="gatsby-chunk"]')) {
                return true;
              }
              
              // Check for window.__GATSBY
              if (typeof (window as any).__GATSBY !== 'undefined') {
                return true;
              }
              
              return false;
            } catch (e) {
              console.error('Error detecting Gatsby.js:', e);
              return false;
            }
          }
        };
        
        // Run detections
        const results: Record<string, { detected: boolean, version: string | null }> = {};
        
        // Helper function to wait for page to be fully loaded
        const waitForPageLoad = (): Promise<void> => {
          return new Promise(resolve => {
            // If document is already complete, resolve immediately
            if (document.readyState === 'complete') {
              resolve();
              return;
            }
            
            // Otherwise wait for load event
            window.addEventListener('load', () => resolve(), { once: true });
            
            // Also set a timeout as fallback (3 seconds)
            setTimeout(resolve, 3000);
          });
        };
        
        // Use promises instead of async/await to avoid TypeScript helpers
        return new Promise(resolve => {
          // First wait for page to be fully loaded
          waitForPageLoad().then(() => {
            // Add a small additional delay to allow for JS frameworks to initialize
            setTimeout(() => {
              // Run all the detectors
              for (const [library, detector] of Object.entries(libraryDetectors)) {
                try {
                  const detected = detector();
                  let version = null;
                  
                  // Get version if available
                  if (detected) {
                    if (library === 'jQuery' && (window as Window).$ && (window as Window).$.fn) {
                      version = (window as Window).$.fn.jquery;
                    } else if (library === 'Vue.js' && (window as Window).Vue) {
                      version = (window as Window).Vue.version;
                    } else if (library === 'React' && (window as Window).React) {
                      version = (window as Window).React.version;
                    } else if (library === 'Angular' && (window as Window).angular) {
                      version = (window as Window).angular.version && (window as Window).angular.version.full;
                    } else if (library === 'Svelte' && (window as Window).__svelte__) {
                      try {
                        if ((window as Window).__svelte__ && (window as Window).__svelte__.version) {
                          version = (window as Window).__svelte__.version;
                        } else {
                          const svelteKitDataElement = document.querySelector('script[data-sveltekit-hydrate]');
                          if (svelteKitDataElement) {
                            version = "SvelteKit";
                          } else {
                            version = "Unknown version";
                          }
                        }
                      } catch (e) {
                        version = "Detected";
                      }
                    } else if (library === 'Next.js' && (window as Window).__NEXT_DATA__) {
                      try {
                        if ((window as any).next && (window as any).next.version) {
                          version = (window as any).next.version;
                        } else {
                          version = "Detected";
                        }
                      } catch (e) {
                        version = "Detected";
                      }
                    } else if (library === 'Gatsby.js' && (window as any).__GATSBY) {
                      version = "Detected";
                    }
                  }
                  
                  results[library] = { detected, version };
                } catch (e) {
                  results[library] = { detected: false, version: null };
                }
              }
              
              // Return the results
              resolve(results);
            }, 500);
          }).catch(error => {
            console.error("Error in page load waiting:", error);
            resolve({ error: error.message || "Error waiting for page load" });
          });
        });
      }
    })
    .then(injectionResults => {
      if (!injectionResults || injectionResults.length === 0) {
        resultsContainer.innerHTML = '<div class="error-message">Failed to inject detection script</div>';
        updateItemStatus('javascript-libraries', 'error');
        return;
      }
      
      try {
        const result = injectionResults[0].result;
        
        // Check if there was an error in the detection script
        if (result && typeof result === 'object' && 'error' in result) {
          resultsContainer.innerHTML = `<div class="error-message">Error in detection script: ${result.error}</div>`;
          updateItemStatus('javascript-libraries', 'error');
          return;
        }
        
        // Cast to the expected type
        const libraries = result as Record<string, { detected: boolean, version: string | null }>;
        
        // Check if libraries is undefined or not an object
        if (!libraries || typeof libraries !== 'object') {
          resultsContainer.innerHTML = '<div class="error-message">Invalid result from detection script</div>';
          updateItemStatus('javascript-libraries', 'error');
          return;
        }
        
        resultsContainer.innerHTML = '<h3>JavaScript Libraries</h3>';
        
        let detectedCount = 0;
        for (const [library, info] of Object.entries(libraries)) {
          const status = info.detected ? 'Present' : 'Missing';
          let details = '';
          
          if (info.detected) {
            detectedCount++;
            details = info.version ? `Version: ${info.version}` : 'Version: unknown';
          }
          
          displayResult(
            resultsContainer, 
            library, 
            status, 
            details, 
            `${library} JavaScript framework/library`
          );
        }
        
        // If no libraries were detected, add a message
        if (detectedCount === 0) {
          const noLibrariesMsg = document.createElement('div');
          noLibrariesMsg.className = 'info-message';
          noLibrariesMsg.textContent = 'No common JavaScript libraries detected. The page may be using vanilla JavaScript or less common libraries.';
          resultsContainer.appendChild(noLibrariesMsg);
        }
        
        // Set status: warning if no libraries detected, success otherwise
        updateItemStatus('javascript-libraries', detectedCount > 0 ? 'success' : 'warning');
      } catch (err: any) {
        console.error('Error processing library detection results:', err);
        resultsContainer.innerHTML = `<div class="error-message">Error processing results: ${err.message || 'Unknown error'}</div>`;
        updateItemStatus('javascript-libraries', 'error');
      }
    })
    .catch(error => {
      console.error('Library detection error:', error);
      resultsContainer.innerHTML = `<div class="error-message">Error detecting libraries: ${error.message}</div>`;
      updateItemStatus('javascript-libraries', 'error');
    });
  });
  
  return true;
}

function detectContentManagementSystem() {
  console.log('Detecting content management system...');
  // Get the results container for this item
  const resultsContainer = document.getElementById('results-cms');
  if (resultsContainer) {
    resultsContainer.innerHTML = '<p>Loading CMS data...</p>';
    
    // Add delay to ensure page is fully loaded
    setTimeout(() => {
      resultsContainer.innerHTML = '<p>Detecting CMS... (Not implemented yet)</p>';
      // Set to default state since not implemented
      updateItemStatus('cms', 'success');
    }, 1000);
  }
  return true;
}

function identifyAnalyticsTools() {
  console.log('Identifying analytics tools...');
  // Get the results container for this item
  const resultsContainer = document.getElementById('results-analytics');
  if (resultsContainer) {
    resultsContainer.innerHTML = '<p>Loading analytics data...</p>';
    
    // Add delay to ensure page is fully loaded
    setTimeout(() => {
      resultsContainer.innerHTML = '<p>Identifying analytics tools... (Not implemented yet)</p>';
      // Set to default state since not implemented
      updateItemStatus('analytics', 'success');
    }, 1000);
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

// Helper function to update the checklist item status
function updateItemStatus(itemId: string, status: 'success' | 'warning' | 'error') {
  const checklistItemParent = document.querySelector(`#results-${itemId}`);
  if (!checklistItemParent) return;
  
  const checklistItem = checklistItemParent.parentElement;
  if (!checklistItem) return;
  
  const checkmark = checklistItem.querySelector('.checkmark');
  if (!checkmark) return;
  
  // Reset existing classes
  checkmark.classList.remove('success', 'warning', 'error');
  checkmark.classList.add(status);
  
  // Update icon based on status
  if (status === 'success') {
    checkmark.innerHTML = '✓';
  } else if (status === 'warning') {
    checkmark.innerHTML = '⚠';
  } else if (status === 'error') {
    checkmark.innerHTML = '✗';
  }
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
      checkmark.className = 'checkmark success';
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
      
      // Add click event to header to toggle visibility
      itemHeader.addEventListener('click', () => {
        // Toggle active state for visual feedback
        listItem.classList.toggle('active');
        // Toggle the visibility of the results
        toggleResultsVisibility(resultsContainer);
      });
      
      // Assemble the list item
      listItem.appendChild(itemHeader);
      listItem.appendChild(resultsContainer);
      checklist.appendChild(listItem);
    });
    
    app.appendChild(checklist);
    
    // Run all scan functions automatically when popup loads
    setTimeout(() => {
      checklistItemsWithFunctions.forEach(item => {
        item.function();
      });
    }, 500); // Increased from 100ms to 500ms for better initialization
  }
}); 