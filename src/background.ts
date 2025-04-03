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
  
  // Handle library detection
  if (request.action === 'detectLibraries') {
    detectLibraries(request.tabId, request.url)
      .then(libraries => {
        sendResponse({ libraries });
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

// Function to detect JavaScript libraries used on a page
async function detectLibraries(tabId: number, url: string): Promise<Record<string, { detected: boolean, version: string | null }>> {
  try {
    // Execute script in the tab to detect libraries
    const injectionResults = await chrome.scripting.executeScript({
      target: { tabId: tabId },
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
              console.log((window as Window).__VUE__);
              
              // Vue DevTools hooks and internal properties
              if (
                (window as Window).__VUE__ || 
                (window as Window).__VUE_OPTIONS__ ||
                (window as Window).__VUE_DEVTOOLS_GLOBAL_HOOK__ ||
                (window as Window).__VUE_DEVTOOLS_TOAST__
              ) {
                return true;
              }
              
              // Check for Vue instance property in various patterns
              const vuePropsToCheck = [
                '__vue', '__vue__', '__vue_app__', '__NUXT__', '__VUE__',
                'Vue', '$nuxt', '$store', '$q', // Nuxt, Vuex, Quasar
                '__nuxt_page_meta__', '__INITIAL_STATE__', 'VuexStore', 'Vuex'
              ];
              
              for (const prop of vuePropsToCheck) {
                if (prop in window) {
                  return true;
                }
              }
              
              // Check for Vue methods
              try {
                const potentialVueMethods = ['$nextTick', '$mount', '$set', '$delete'];
                for (const method of potentialVueMethods) {
                  if (typeof (window as any)[method] === 'function') {
                    return true;
                  }
                }
              } catch (e) {
                console.log("Error checking Vue methods:", e);
              }
              
              // Detect Vue 3 by searching for app instance in document elements
              const allElements = Array.from(document.querySelectorAll('*'));
              const hasVueInstance = allElements.some(el => {
                try {
                  // Check for Vue 3 instance properties
                  const elementProps = Object.keys(el);
                  return elementProps.some(key => 
                    key.startsWith('__vue') || 
                    key.startsWith('__vue_') || 
                    key === '__vue'
                  );
                } catch (e) {
                  return false;
                }
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
                try {
                  const attributeNames = el.getAttributeNames();
                  // Check for v-bind shorthand (:) or v-on shorthand (@)
                  return attributeNames.some(attr => attr.startsWith(':') || attr.startsWith('@'));
                } catch (e) {
                  return false;
                }
              });
              
              if (hasShorthandDirectives) {
                return true;
              }
              
              // Check for Vue app root elements (common conventions)
              if (
                document.querySelector('#app[data-v-app]') ||
                document.querySelector('#app > [data-v-]') ||
                document.querySelector('.vue-app') ||
                document.querySelector('#q-app') || // Quasar
                document.querySelector('#__nuxt') || // Nuxt
                document.querySelector('#__layout') || // Nuxt
                document.querySelector('[data-server-rendered]') // SSR indicator
              ) {
                return true;
              }
              
              // Look for common CSS classes used by Vue frameworks 
              const vueFrameworkClasses = [
                'q-btn', 'q-page', // Quasar  
                'nuxt-link', 'nuxt-progress', // Nuxt
                'v-btn', 'v-app', // Vuetify
                'el-button', 'el-container', // Element UI
                'ant-btn', 'ant-layout' // Ant Design Vue
              ];
              
              for (const className of vueFrameworkClasses) {
                if (document.querySelector(`.${className}`)) {
                  return true;
                }
              }
              
              // Check for Vue-related script tags
              const scriptSrc = Array.from(document.querySelectorAll('script[src]'))
                .map(script => script.getAttribute('src') || '');
              
              if (scriptSrc.some(src => 
                src.includes('vue') || 
                src.includes('nuxt') || 
                src.includes('quasar'))) {
                return true;
              }
              
              // Check inline scripts for Vue references
              const hasVueInScripts = Array.from(document.querySelectorAll('script:not([src])'))
                .some(script => script.textContent && (
                  script.textContent.includes('new Vue') || 
                  script.textContent.includes('createApp') ||
                  script.textContent.includes('Vue.') ||
                  script.textContent.includes('_Vue')
                ));
              
              if (hasVueInScripts) {
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
              (window as Window).$
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
    });
    
    if (!injectionResults || injectionResults.length === 0) {
      throw new Error('Failed to inject detection script');
    }
    
    const result = injectionResults[0].result;
    
    // Check if there was an error in the detection script
    if (result && typeof result === 'object' && 'error' in result) {
      throw new Error(`Error in detection script: ${result.error}`);
    }
    
    // Return the detection results
    return result as Record<string, { detected: boolean, version: string | null }>;
  } catch (error: any) {
    console.error('Library detection error:', error);
    throw new Error(`Error detecting libraries: ${error.message}`);
  }
} 