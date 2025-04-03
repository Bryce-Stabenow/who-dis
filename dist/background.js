/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/background.ts":
/*!***************************!*\
  !*** ./src/background.ts ***!
  \***************************/
/***/ (function() {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
function fetchHeaders(url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(url, {
                method: 'HEAD',
                credentials: 'omit',
                // Use mode: 'no-cors' as a fallback if cors fails, but headers will be limited
                mode: 'cors'
            });
            // Convert headers to an object
            const headers = {};
            response.headers.forEach((value, key) => {
                headers[key] = value;
            });
            return headers;
        }
        catch (error) {
            // Fallback to using XMLHttpRequest which might work in some cases
            return new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                xhr.open('HEAD', url);
                xhr.onload = function () {
                    const headers = {};
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
                xhr.onerror = function () {
                    reject(new Error('Failed to fetch headers'));
                };
                xhr.send();
            });
        }
    });
}
// Function to detect JavaScript libraries used on a page
function detectLibraries(tabId, url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Execute script in the tab to detect libraries
            const injectionResults = yield chrome.scripting.executeScript({
                target: { tabId: tabId },
                func: () => {
                    // Define library detection functions
                    const libraryDetectors = {
                        'React': () => {
                            // Multiple detection approaches for modern React
                            try {
                                // 1. Check for React in window
                                if (window.React) {
                                    return true;
                                }
                                // 2. Check for React DevTools hook
                                if (window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
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
                                const hasReactRootContainer = allElements.some(el => Object.prototype.hasOwnProperty.call(el, '_reactRootContainer'));
                                if (hasReactRootContainer) {
                                    return true;
                                }
                                // 5b. Look for React 18+ container property pattern
                                const hasReactContainer = allElements.some(el => {
                                    return Object.keys(el).some(key => key.startsWith('__reactContainer') ||
                                        key.startsWith('__reactFiber') ||
                                        key.startsWith('__reactProps') ||
                                        key.startsWith('__reactEvents') ||
                                        key.startsWith('__reactInternalInstance'));
                                });
                                if (hasReactContainer) {
                                    return true;
                                }
                                // 6. Check for React profiler
                                if (typeof window.__REACT_DEVTOOLS_PROFILER_HOOK__ !== 'undefined') {
                                    return true;
                                }
                                // 7. Look for React-specific component name patterns
                                const reactComponents = allElements.some(el => {
                                    for (const key in el) {
                                        if (key.startsWith('__reactProps$') &&
                                            el[key] &&
                                            el[key].children) {
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
                            }
                            catch (e) {
                                console.error('Error detecting React:', e);
                                return false;
                            }
                        },
                        'Vue.js': () => {
                            try {
                                // Direct global Vue detection (mostly Vue 2)
                                if (window.Vue) {
                                    return true;
                                }
                                console.log(window.__VUE__);
                                // Vue DevTools hooks and internal properties
                                if (window.__VUE__ ||
                                    window.__VUE_OPTIONS__ ||
                                    window.__VUE_DEVTOOLS_GLOBAL_HOOK__ ||
                                    window.__VUE_DEVTOOLS_TOAST__) {
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
                                        if (typeof window[method] === 'function') {
                                            return true;
                                        }
                                    }
                                }
                                catch (e) {
                                    console.log("Error checking Vue methods:", e);
                                }
                                // Detect Vue 3 by searching for app instance in document elements
                                const allElements = Array.from(document.querySelectorAll('*'));
                                const hasVueInstance = allElements.some(el => {
                                    try {
                                        // Check for Vue 3 instance properties
                                        const elementProps = Object.keys(el);
                                        return elementProps.some(key => key.startsWith('__vue') ||
                                            key.startsWith('__vue_') ||
                                            key === '__vue');
                                    }
                                    catch (e) {
                                        return false;
                                    }
                                });
                                if (hasVueInstance) {
                                    return true;
                                }
                                // Common Vue directive attributes (works for both Vue 2 and Vue 3)
                                if (document.querySelector('[data-v-]') || // Scoped CSS indicator
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
                                    document.querySelector('[v-pre]')) {
                                    return true;
                                }
                                // Check for shorthand directives
                                const hasShorthandDirectives = allElements.some(el => {
                                    try {
                                        const attributeNames = el.getAttributeNames();
                                        // Check for v-bind shorthand (:) or v-on shorthand (@)
                                        return attributeNames.some(attr => attr.startsWith(':') || attr.startsWith('@'));
                                    }
                                    catch (e) {
                                        return false;
                                    }
                                });
                                if (hasShorthandDirectives) {
                                    return true;
                                }
                                // Check for Vue app root elements (common conventions)
                                if (document.querySelector('#app[data-v-app]') ||
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
                                if (scriptSrc.some(src => src.includes('vue') ||
                                    src.includes('nuxt') ||
                                    src.includes('quasar'))) {
                                    return true;
                                }
                                // Check inline scripts for Vue references
                                const hasVueInScripts = Array.from(document.querySelectorAll('script:not([src])'))
                                    .some(script => script.textContent && (script.textContent.includes('new Vue') ||
                                    script.textContent.includes('createApp') ||
                                    script.textContent.includes('Vue.') ||
                                    script.textContent.includes('_Vue')));
                                if (hasVueInScripts) {
                                    return true;
                                }
                                return false;
                            }
                            catch (e) {
                                console.error('Error detecting Vue.js:', e);
                                return false;
                            }
                        },
                        'Angular': () => {
                            return !!(window.angular ||
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
                                document.querySelector('[ng-version]'));
                        },
                        'jQuery': () => {
                            return !!(window.jQuery ||
                                window.$);
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
                            const hasSvelteHook = !!window.__svelte__;
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
                                if (window.__NEXT_DATA__) {
                                    return true;
                                }
                                // Check for next page CSS
                                if (document.querySelector('#__next')) {
                                    return true;
                                }
                                return false;
                            }
                            catch (e) {
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
                                if (typeof window.__GATSBY !== 'undefined') {
                                    return true;
                                }
                                return false;
                            }
                            catch (e) {
                                console.error('Error detecting Gatsby.js:', e);
                                return false;
                            }
                        }
                    };
                    // Run detections
                    const results = {};
                    // Helper function to wait for page to be fully loaded
                    const waitForPageLoad = () => {
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
                                            if (library === 'jQuery' && window.$ && window.$.fn) {
                                                version = window.$.fn.jquery;
                                            }
                                            else if (library === 'Vue.js' && window.Vue) {
                                                version = window.Vue.version;
                                            }
                                            else if (library === 'React' && window.React) {
                                                version = window.React.version;
                                            }
                                            else if (library === 'Angular' && window.angular) {
                                                version = window.angular.version && window.angular.version.full;
                                            }
                                            else if (library === 'Svelte' && window.__svelte__) {
                                                try {
                                                    if (window.__svelte__ && window.__svelte__.version) {
                                                        version = window.__svelte__.version;
                                                    }
                                                    else {
                                                        const svelteKitDataElement = document.querySelector('script[data-sveltekit-hydrate]');
                                                        if (svelteKitDataElement) {
                                                            version = "SvelteKit";
                                                        }
                                                        else {
                                                            version = "Unknown version";
                                                        }
                                                    }
                                                }
                                                catch (e) {
                                                    version = "Detected";
                                                }
                                            }
                                            else if (library === 'Next.js' && window.__NEXT_DATA__) {
                                                try {
                                                    if (window.next && window.next.version) {
                                                        version = window.next.version;
                                                    }
                                                    else {
                                                        version = "Detected";
                                                    }
                                                }
                                                catch (e) {
                                                    version = "Detected";
                                                }
                                            }
                                            else if (library === 'Gatsby.js' && window.__GATSBY) {
                                                version = "Detected";
                                            }
                                        }
                                        results[library] = { detected, version };
                                    }
                                    catch (e) {
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
            return result;
        }
        catch (error) {
            console.error('Library detection error:', error);
            throw new Error(`Error detecting libraries: ${error.message}`);
        }
    });
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/background.ts"]();
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2pELE1BQU0sSUFBSSxLQUFLLENBQUMsOEJBQThCLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ2pFLENBQUM7SUFDSCxDQUFDO0NBQUE7Ozs7Ozs7O1VFbGlCRDtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2hvLWRpcy1zaXRlLXNjYW5uZXIvLi9zcmMvYmFja2dyb3VuZC50cyIsIndlYnBhY2s6Ly93aG8tZGlzLXNpdGUtc2Nhbm5lci93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3doby1kaXMtc2l0ZS1zY2FubmVyL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly93aG8tZGlzLXNpdGUtc2Nhbm5lci93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBiYWNrZ3JvdW5kIHNjcmlwdCB3aWxsIHJ1biB3aGVuIHRoZSBleHRlbnNpb24gaXMgbG9hZGVkXG5jb25zb2xlLmxvZygnQmFja2dyb3VuZCBzY3JpcHQgbG9hZGVkIScpO1xuXG4vLyBMaXN0ZW4gZm9yIG1lc3NhZ2VzIGZyb20gdGhlIHBvcHVwXG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKHJlcXVlc3QsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XG4gIC8vIEhhbmRsZSBmZXRjaGluZyBoZWFkZXJzXG4gIGlmIChyZXF1ZXN0LmFjdGlvbiA9PT0gJ2ZldGNoSGVhZGVycycpIHtcbiAgICBmZXRjaEhlYWRlcnMocmVxdWVzdC51cmwpXG4gICAgICAudGhlbihoZWFkZXJzID0+IHtcbiAgICAgICAgc2VuZFJlc3BvbnNlKHsgaGVhZGVycyB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBzZW5kUmVzcG9uc2UoeyBlcnJvcjogZXJyb3IubWVzc2FnZSB9KTtcbiAgICAgIH0pO1xuICAgICAgXG4gICAgLy8gUmV0dXJuIHRydWUgdG8gaW5kaWNhdGUgdGhhdCB0aGUgcmVzcG9uc2Ugd2lsbCBiZSBzZW50IGFzeW5jaHJvbm91c2x5XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgXG4gIC8vIEhhbmRsZSBsaWJyYXJ5IGRldGVjdGlvblxuICBpZiAocmVxdWVzdC5hY3Rpb24gPT09ICdkZXRlY3RMaWJyYXJpZXMnKSB7XG4gICAgZGV0ZWN0TGlicmFyaWVzKHJlcXVlc3QudGFiSWQsIHJlcXVlc3QudXJsKVxuICAgICAgLnRoZW4obGlicmFyaWVzID0+IHtcbiAgICAgICAgc2VuZFJlc3BvbnNlKHsgbGlicmFyaWVzIH0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIHNlbmRSZXNwb25zZSh7IGVycm9yOiBlcnJvci5tZXNzYWdlIH0pO1xuICAgICAgfSk7XG4gICAgXG4gICAgLy8gUmV0dXJuIHRydWUgdG8gaW5kaWNhdGUgdGhhdCB0aGUgcmVzcG9uc2Ugd2lsbCBiZSBzZW50IGFzeW5jaHJvbm91c2x5XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn0pO1xuXG4vLyBGdW5jdGlvbiB0byBmZXRjaCBoZWFkZXJzIGZyb20gYSBVUkxcbmFzeW5jIGZ1bmN0aW9uIGZldGNoSGVhZGVycyh1cmw6IHN0cmluZyk6IFByb21pc2U8UmVjb3JkPHN0cmluZywgc3RyaW5nPj4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICBtZXRob2Q6ICdIRUFEJyxcbiAgICAgIGNyZWRlbnRpYWxzOiAnb21pdCcsXG4gICAgICAvLyBVc2UgbW9kZTogJ25vLWNvcnMnIGFzIGEgZmFsbGJhY2sgaWYgY29ycyBmYWlscywgYnV0IGhlYWRlcnMgd2lsbCBiZSBsaW1pdGVkXG4gICAgICBtb2RlOiAnY29ycydcbiAgICB9KTtcbiAgICBcbiAgICAvLyBDb252ZXJ0IGhlYWRlcnMgdG8gYW4gb2JqZWN0XG4gICAgY29uc3QgaGVhZGVyczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9O1xuICAgIHJlc3BvbnNlLmhlYWRlcnMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgaGVhZGVyc1trZXldID0gdmFsdWU7XG4gICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIGhlYWRlcnM7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgLy8gRmFsbGJhY2sgdG8gdXNpbmcgWE1MSHR0cFJlcXVlc3Qgd2hpY2ggbWlnaHQgd29yayBpbiBzb21lIGNhc2VzXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgeGhyLm9wZW4oJ0hFQUQnLCB1cmwpO1xuICAgICAgXG4gICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGhlYWRlcnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fTtcbiAgICAgICAgY29uc3QgcmF3SGVhZGVycyA9IHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKS50cmltKCkuc3BsaXQoL1tcXHJcXG5dKy8pO1xuICAgICAgICBcbiAgICAgICAgcmF3SGVhZGVycy5mb3JFYWNoKGxpbmUgPT4ge1xuICAgICAgICAgIGNvbnN0IHBhcnRzID0gbGluZS5zcGxpdCgnOiAnKTtcbiAgICAgICAgICBjb25zdCBoZWFkZXIgPSBwYXJ0cy5zaGlmdCgpO1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gcGFydHMuam9pbignOiAnKTtcbiAgICAgICAgICBpZiAoaGVhZGVyKSB7XG4gICAgICAgICAgICBoZWFkZXJzW2hlYWRlcl0gPSB2YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgcmVzb2x2ZShoZWFkZXJzKTtcbiAgICAgIH07XG4gICAgICBcbiAgICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCBoZWFkZXJzJykpO1xuICAgICAgfTtcbiAgICAgIFxuICAgICAgeGhyLnNlbmQoKTtcbiAgICB9KTtcbiAgfVxufVxuXG4vLyBGdW5jdGlvbiB0byBkZXRlY3QgSmF2YVNjcmlwdCBsaWJyYXJpZXMgdXNlZCBvbiBhIHBhZ2VcbmFzeW5jIGZ1bmN0aW9uIGRldGVjdExpYnJhcmllcyh0YWJJZDogbnVtYmVyLCB1cmw6IHN0cmluZyk6IFByb21pc2U8UmVjb3JkPHN0cmluZywgeyBkZXRlY3RlZDogYm9vbGVhbiwgdmVyc2lvbjogc3RyaW5nIHwgbnVsbCB9Pj4ge1xuICB0cnkge1xuICAgIC8vIEV4ZWN1dGUgc2NyaXB0IGluIHRoZSB0YWIgdG8gZGV0ZWN0IGxpYnJhcmllc1xuICAgIGNvbnN0IGluamVjdGlvblJlc3VsdHMgPSBhd2FpdCBjaHJvbWUuc2NyaXB0aW5nLmV4ZWN1dGVTY3JpcHQoe1xuICAgICAgdGFyZ2V0OiB7IHRhYklkOiB0YWJJZCB9LFxuICAgICAgZnVuYzogKCkgPT4ge1xuICAgICAgICAvLyBUeXBlcyBmb3IgZ2xvYmFsIGxpYnJhcmllc1xuICAgICAgICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICAgICAgICBSZWFjdD86IGFueTtcbiAgICAgICAgICBWdWU/OiBhbnk7XG4gICAgICAgICAgYW5ndWxhcj86IGFueTtcbiAgICAgICAgICBqUXVlcnk/OiBhbnk7XG4gICAgICAgICAgJD86IGFueTtcbiAgICAgICAgICBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18/OiBhbnk7XG4gICAgICAgICAgX19zdmVsdGVfXz86IGFueTtcbiAgICAgICAgICBfX05FWFRfREFUQV9fPzogYW55O1xuICAgICAgICAgIF9fR0FUU0JZPzogYW55O1xuICAgICAgICAgIF9fVlVFX18/OiBhbnk7XG4gICAgICAgICAgX19WVUVfT1BUSU9OU19fPzogYW55O1xuICAgICAgICAgIF9fVlVFX0RFVlRPT0xTX0dMT0JBTF9IT09LX18/OiBhbnk7XG4gICAgICAgICAgX19WVUVfREVWVE9PTFNfVE9BU1RfXz86IGFueTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gRGVmaW5lIGxpYnJhcnkgZGV0ZWN0aW9uIGZ1bmN0aW9uc1xuICAgICAgICBjb25zdCBsaWJyYXJ5RGV0ZWN0b3JzID0ge1xuICAgICAgICAgICdSZWFjdCc6ICgpID0+IHtcbiAgICAgICAgICAgIC8vIE11bHRpcGxlIGRldGVjdGlvbiBhcHByb2FjaGVzIGZvciBtb2Rlcm4gUmVhY3RcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIC8vIDEuIENoZWNrIGZvciBSZWFjdCBpbiB3aW5kb3dcbiAgICAgICAgICAgICAgaWYgKCh3aW5kb3cgYXMgV2luZG93KS5SZWFjdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAvLyAyLiBDaGVjayBmb3IgUmVhY3QgRGV2VG9vbHMgaG9va1xuICAgICAgICAgICAgICBpZiAoKHdpbmRvdyBhcyBXaW5kb3cpLl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAvLyAzLiBDaGVjayBmb3IgUmVhY3QgMTYrIGZpYmVyIG5vZGVzXG4gICAgICAgICAgICAgIGNvbnN0IHJvb3RFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXJlYWN0cm9vdF0nKTtcbiAgICAgICAgICAgICAgaWYgKHJvb3RFbGVtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC8vIDQuIENoZWNrIGZvciBvbGQgUmVhY3QgKHByZS0xNikgYXR0cmlidXRlc1xuICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcmVhY3RpZF0nKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAvLyA1LiBGaW5kIFJlYWN0IDE3KyByb290IGNvbnRhaW5lcnMgb3IgZmliZXIgbm9kZXMgKG1vc3QgY29tbW9uIG1vZGVybiBhcHByb2FjaClcbiAgICAgICAgICAgICAgY29uc3QgYWxsRWxlbWVudHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyonKSk7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAvLyA1YS4gTG9vayBmb3IgUmVhY3QgMTcrIHJvb3QgY29udGFpbmVyXG4gICAgICAgICAgICAgIGNvbnN0IGhhc1JlYWN0Um9vdENvbnRhaW5lciA9IGFsbEVsZW1lbnRzLnNvbWUoZWwgPT4gXG4gICAgICAgICAgICAgICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGVsLCAnX3JlYWN0Um9vdENvbnRhaW5lcicpXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGlmIChoYXNSZWFjdFJvb3RDb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLy8gNWIuIExvb2sgZm9yIFJlYWN0IDE4KyBjb250YWluZXIgcHJvcGVydHkgcGF0dGVyblxuICAgICAgICAgICAgICBjb25zdCBoYXNSZWFjdENvbnRhaW5lciA9IGFsbEVsZW1lbnRzLnNvbWUoZWwgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhlbCkuc29tZShrZXkgPT4gXG4gICAgICAgICAgICAgICAgICBrZXkuc3RhcnRzV2l0aCgnX19yZWFjdENvbnRhaW5lcicpIHx8IFxuICAgICAgICAgICAgICAgICAga2V5LnN0YXJ0c1dpdGgoJ19fcmVhY3RGaWJlcicpIHx8IFxuICAgICAgICAgICAgICAgICAga2V5LnN0YXJ0c1dpdGgoJ19fcmVhY3RQcm9wcycpIHx8IFxuICAgICAgICAgICAgICAgICAga2V5LnN0YXJ0c1dpdGgoJ19fcmVhY3RFdmVudHMnKSB8fFxuICAgICAgICAgICAgICAgICAga2V5LnN0YXJ0c1dpdGgoJ19fcmVhY3RJbnRlcm5hbEluc3RhbmNlJylcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgaWYgKGhhc1JlYWN0Q29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC8vIDYuIENoZWNrIGZvciBSZWFjdCBwcm9maWxlclxuICAgICAgICAgICAgICBpZiAodHlwZW9mICh3aW5kb3cgYXMgYW55KS5fX1JFQUNUX0RFVlRPT0xTX1BST0ZJTEVSX0hPT0tfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLy8gNy4gTG9vayBmb3IgUmVhY3Qtc3BlY2lmaWMgY29tcG9uZW50IG5hbWUgcGF0dGVybnNcbiAgICAgICAgICAgICAgY29uc3QgcmVhY3RDb21wb25lbnRzID0gYWxsRWxlbWVudHMuc29tZShlbCA9PiB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZWwpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChrZXkuc3RhcnRzV2l0aCgnX19yZWFjdFByb3BzJCcpICYmIFxuICAgICAgICAgICAgICAgICAgICAgIChlbCBhcyBhbnkpW2tleV0gJiYgXG4gICAgICAgICAgICAgICAgICAgICAgKGVsIGFzIGFueSlba2V5XS5jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmIChrZXkuc3RhcnRzV2l0aCgnX3JlYWN0TGlzdGVuaW5nJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBpZiAocmVhY3RDb21wb25lbnRzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZGV0ZWN0aW5nIFJlYWN0OicsIGUpO1xuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICAnVnVlLmpzJzogKCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgLy8gRGlyZWN0IGdsb2JhbCBWdWUgZGV0ZWN0aW9uIChtb3N0bHkgVnVlIDIpXG4gICAgICAgICAgICAgIGlmICgod2luZG93IGFzIFdpbmRvdykuVnVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY29uc29sZS5sb2coKHdpbmRvdyBhcyBXaW5kb3cpLl9fVlVFX18pO1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLy8gVnVlIERldlRvb2xzIGhvb2tzIGFuZCBpbnRlcm5hbCBwcm9wZXJ0aWVzXG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAod2luZG93IGFzIFdpbmRvdykuX19WVUVfXyB8fCBcbiAgICAgICAgICAgICAgICAod2luZG93IGFzIFdpbmRvdykuX19WVUVfT1BUSU9OU19fIHx8XG4gICAgICAgICAgICAgICAgKHdpbmRvdyBhcyBXaW5kb3cpLl9fVlVFX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gfHxcbiAgICAgICAgICAgICAgICAod2luZG93IGFzIFdpbmRvdykuX19WVUVfREVWVE9PTFNfVE9BU1RfX1xuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLy8gQ2hlY2sgZm9yIFZ1ZSBpbnN0YW5jZSBwcm9wZXJ0eSBpbiB2YXJpb3VzIHBhdHRlcm5zXG4gICAgICAgICAgICAgIGNvbnN0IHZ1ZVByb3BzVG9DaGVjayA9IFtcbiAgICAgICAgICAgICAgICAnX192dWUnLCAnX192dWVfXycsICdfX3Z1ZV9hcHBfXycsICdfX05VWFRfXycsICdfX1ZVRV9fJyxcbiAgICAgICAgICAgICAgICAnVnVlJywgJyRudXh0JywgJyRzdG9yZScsICckcScsIC8vIE51eHQsIFZ1ZXgsIFF1YXNhclxuICAgICAgICAgICAgICAgICdfX251eHRfcGFnZV9tZXRhX18nLCAnX19JTklUSUFMX1NUQVRFX18nLCAnVnVleFN0b3JlJywgJ1Z1ZXgnXG4gICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBmb3IgKGNvbnN0IHByb3Agb2YgdnVlUHJvcHNUb0NoZWNrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3AgaW4gd2luZG93KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC8vIENoZWNrIGZvciBWdWUgbWV0aG9kc1xuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBvdGVudGlhbFZ1ZU1ldGhvZHMgPSBbJyRuZXh0VGljaycsICckbW91bnQnLCAnJHNldCcsICckZGVsZXRlJ107XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBtZXRob2Qgb2YgcG90ZW50aWFsVnVlTWV0aG9kcykge1xuICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAod2luZG93IGFzIGFueSlbbWV0aG9kXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGNoZWNraW5nIFZ1ZSBtZXRob2RzOlwiLCBlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLy8gRGV0ZWN0IFZ1ZSAzIGJ5IHNlYXJjaGluZyBmb3IgYXBwIGluc3RhbmNlIGluIGRvY3VtZW50IGVsZW1lbnRzXG4gICAgICAgICAgICAgIGNvbnN0IGFsbEVsZW1lbnRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcqJykpO1xuICAgICAgICAgICAgICBjb25zdCBoYXNWdWVJbnN0YW5jZSA9IGFsbEVsZW1lbnRzLnNvbWUoZWwgPT4ge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAvLyBDaGVjayBmb3IgVnVlIDMgaW5zdGFuY2UgcHJvcGVydGllc1xuICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudFByb3BzID0gT2JqZWN0LmtleXMoZWwpO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRQcm9wcy5zb21lKGtleSA9PiBcbiAgICAgICAgICAgICAgICAgICAga2V5LnN0YXJ0c1dpdGgoJ19fdnVlJykgfHwgXG4gICAgICAgICAgICAgICAgICAgIGtleS5zdGFydHNXaXRoKCdfX3Z1ZV8nKSB8fCBcbiAgICAgICAgICAgICAgICAgICAga2V5ID09PSAnX192dWUnXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgaWYgKGhhc1Z1ZUluc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC8vIENvbW1vbiBWdWUgZGlyZWN0aXZlIGF0dHJpYnV0ZXMgKHdvcmtzIGZvciBib3RoIFZ1ZSAyIGFuZCBWdWUgMylcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXYtXScpIHx8IC8vIFNjb3BlZCBDU1MgaW5kaWNhdG9yXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW3YtY2xvYWtdJykgfHxcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbdi1pZl0nKSB8fFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1t2LWZvcl0nKSB8fFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1t2LXNob3ddJykgfHxcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbdi1iaW5kXScpIHx8XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW3YtbW9kZWxdJykgfHxcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbdi1vbl0nKSB8fFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1t2LW9uY2VdJykgfHxcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbdi1odG1sXScpIHx8XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW3YtdGV4dF0nKSB8fFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1t2LXByZV0nKVxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLy8gQ2hlY2sgZm9yIHNob3J0aGFuZCBkaXJlY3RpdmVzXG4gICAgICAgICAgICAgIGNvbnN0IGhhc1Nob3J0aGFuZERpcmVjdGl2ZXMgPSBhbGxFbGVtZW50cy5zb21lKGVsID0+IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlTmFtZXMgPSBlbC5nZXRBdHRyaWJ1dGVOYW1lcygpO1xuICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgZm9yIHYtYmluZCBzaG9ydGhhbmQgKDopIG9yIHYtb24gc2hvcnRoYW5kIChAKVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIGF0dHJpYnV0ZU5hbWVzLnNvbWUoYXR0ciA9PiBhdHRyLnN0YXJ0c1dpdGgoJzonKSB8fCBhdHRyLnN0YXJ0c1dpdGgoJ0AnKSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBpZiAoaGFzU2hvcnRoYW5kRGlyZWN0aXZlcykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAvLyBDaGVjayBmb3IgVnVlIGFwcCByb290IGVsZW1lbnRzIChjb21tb24gY29udmVudGlvbnMpXG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwW2RhdGEtdi1hcHBdJykgfHxcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwID4gW2RhdGEtdi1dJykgfHxcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudnVlLWFwcCcpIHx8XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3EtYXBwJykgfHwgLy8gUXVhc2FyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbnV4dCcpIHx8IC8vIE51eHRcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19sYXlvdXQnKSB8fCAvLyBOdXh0XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtc2VydmVyLXJlbmRlcmVkXScpIC8vIFNTUiBpbmRpY2F0b3JcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC8vIExvb2sgZm9yIGNvbW1vbiBDU1MgY2xhc3NlcyB1c2VkIGJ5IFZ1ZSBmcmFtZXdvcmtzIFxuICAgICAgICAgICAgICBjb25zdCB2dWVGcmFtZXdvcmtDbGFzc2VzID0gW1xuICAgICAgICAgICAgICAgICdxLWJ0bicsICdxLXBhZ2UnLCAvLyBRdWFzYXIgIFxuICAgICAgICAgICAgICAgICdudXh0LWxpbmsnLCAnbnV4dC1wcm9ncmVzcycsIC8vIE51eHRcbiAgICAgICAgICAgICAgICAndi1idG4nLCAndi1hcHAnLCAvLyBWdWV0aWZ5XG4gICAgICAgICAgICAgICAgJ2VsLWJ1dHRvbicsICdlbC1jb250YWluZXInLCAvLyBFbGVtZW50IFVJXG4gICAgICAgICAgICAgICAgJ2FudC1idG4nLCAnYW50LWxheW91dCcgLy8gQW50IERlc2lnbiBWdWVcbiAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIGZvciAoY29uc3QgY2xhc3NOYW1lIG9mIHZ1ZUZyYW1ld29ya0NsYXNzZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y2xhc3NOYW1lfWApKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC8vIENoZWNrIGZvciBWdWUtcmVsYXRlZCBzY3JpcHQgdGFnc1xuICAgICAgICAgICAgICBjb25zdCBzY3JpcHRTcmMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NjcmlwdFtzcmNdJykpXG4gICAgICAgICAgICAgICAgLm1hcChzY3JpcHQgPT4gc2NyaXB0LmdldEF0dHJpYnV0ZSgnc3JjJykgfHwgJycpO1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgaWYgKHNjcmlwdFNyYy5zb21lKHNyYyA9PiBcbiAgICAgICAgICAgICAgICBzcmMuaW5jbHVkZXMoJ3Z1ZScpIHx8IFxuICAgICAgICAgICAgICAgIHNyYy5pbmNsdWRlcygnbnV4dCcpIHx8IFxuICAgICAgICAgICAgICAgIHNyYy5pbmNsdWRlcygncXVhc2FyJykpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC8vIENoZWNrIGlubGluZSBzY3JpcHRzIGZvciBWdWUgcmVmZXJlbmNlc1xuICAgICAgICAgICAgICBjb25zdCBoYXNWdWVJblNjcmlwdHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NjcmlwdDpub3QoW3NyY10pJykpXG4gICAgICAgICAgICAgICAgLnNvbWUoc2NyaXB0ID0+IHNjcmlwdC50ZXh0Q29udGVudCAmJiAoXG4gICAgICAgICAgICAgICAgICBzY3JpcHQudGV4dENvbnRlbnQuaW5jbHVkZXMoJ25ldyBWdWUnKSB8fCBcbiAgICAgICAgICAgICAgICAgIHNjcmlwdC50ZXh0Q29udGVudC5pbmNsdWRlcygnY3JlYXRlQXBwJykgfHxcbiAgICAgICAgICAgICAgICAgIHNjcmlwdC50ZXh0Q29udGVudC5pbmNsdWRlcygnVnVlLicpIHx8XG4gICAgICAgICAgICAgICAgICBzY3JpcHQudGV4dENvbnRlbnQuaW5jbHVkZXMoJ19WdWUnKVxuICAgICAgICAgICAgICAgICkpO1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgaWYgKGhhc1Z1ZUluU2NyaXB0cykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRldGVjdGluZyBWdWUuanM6JywgZSk7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgICdBbmd1bGFyJzogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICEhKFxuICAgICAgICAgICAgICAod2luZG93IGFzIFdpbmRvdykuYW5ndWxhciB8fCBcbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25nLWFwcF0nKSB8fFxuICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmctY29udHJvbGxlcl0nKSB8fFxuICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmctbW9kZWxdJykgfHxcbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25nLXJlcGVhdF0nKSB8fFxuICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmctdmlld10nKSB8fFxuICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmctaWZdJykgfHxcbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25nLXNob3ddJykgfHxcbiAgICAgICAgICAgICAgLy8gQW5ndWxhciAyK1xuICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbX25naG9zdF0nKSB8fFxuICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbX25nY29udGVudF0nKSB8fFxuICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdhcHAtcm9vdCcpIHx8XG4gICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuZy12ZXJzaW9uXScpXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgJ2pRdWVyeSc6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAhIShcbiAgICAgICAgICAgICAgKHdpbmRvdyBhcyBXaW5kb3cpLmpRdWVyeSB8fCBcbiAgICAgICAgICAgICAgKHdpbmRvdyBhcyBXaW5kb3cpLiRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICAnU3ZlbHRlJzogKCkgPT4ge1xuICAgICAgICAgICAgLy8gU3ZlbHRlIGNvbXBvbmVudHMgaGF2ZSBjbGFzcyBuYW1lcyBsaWtlIFwic3ZlbHRlLWFiYzEyM1wiXG4gICAgICAgICAgICBjb25zdCBoYXNTdmVsdGVDbGFzcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnKicpKS5zb21lKGVsID0+IHtcbiAgICAgICAgICAgICAgaWYgKGVsLmNsYXNzTmFtZSAmJiB0eXBlb2YgZWwuY2xhc3NOYW1lID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHJldHVybiAvc3ZlbHRlLVthLXowLTldKy8udGVzdChlbC5jbGFzc05hbWUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBDaGVjayBmb3IgU3ZlbHRlIGRldnRvb2xzIGhvb2tcbiAgICAgICAgICAgIGNvbnN0IGhhc1N2ZWx0ZUhvb2sgPSAhISh3aW5kb3cgYXMgV2luZG93KS5fX3N2ZWx0ZV9fO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBDaGVjayBmb3IgSFRNTCBlbGVtZW50cyB3aXRoIFN2ZWx0ZS1zcGVjaWZpYyBhdHRyaWJ1dGVzXG4gICAgICAgICAgICBjb25zdCBoYXNTdmVsdGVBdHRyaWJ1dGVzID0gISFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbc3ZlbHRlLWZyYWdtZW50XScpIHx8IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgISFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbc3ZlbHRla2l0XFxcXDpwcmVmZXRjaF0nKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgYW55IGN1c3RvbSBlbGVtZW50cyAoV2ViIENvbXBvbmVudHMpIGFyZSBTdmVsdGUtcmVsYXRlZFxuICAgICAgICAgICAgY29uc3QgaGFzU3ZlbHRlRWxlbWVudHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyonKSkuc29tZShlbCA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBlbC50YWdOYW1lICYmIGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnc3ZlbHRlJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuICEhKGhhc1N2ZWx0ZUNsYXNzIHx8IGhhc1N2ZWx0ZUhvb2sgfHwgaGFzU3ZlbHRlQXR0cmlidXRlcyB8fCBoYXNTdmVsdGVFbGVtZW50cyk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICAnTmV4dC5qcyc6ICgpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIC8vIENoZWNrIGZvciBOZXh0LmpzIGRhdGEgc2NyaXB0IHRhZ1xuICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2NyaXB0I19fTkVYVF9EQVRBX18nKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAvLyBDaGVjayBmb3IgTmV4dC5qcyBzcGVjaWZpYyBhdHRyaWJ1dGVzXG4gICAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1uZXh0LWh5ZHJhdGVdJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLy8gQ2hlY2sgZm9yIE5leHQuanMgcnVudGltZVxuICAgICAgICAgICAgICBpZiAoKHdpbmRvdyBhcyBXaW5kb3cpLl9fTkVYVF9EQVRBX18pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLy8gQ2hlY2sgZm9yIG5leHQgcGFnZSBDU1NcbiAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHQnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRldGVjdGluZyBOZXh0LmpzOicsIGUpO1xuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICAnR2F0c2J5LmpzJzogKCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgLy8gQ2hlY2sgZm9yIEdhdHNieSBzcGVjaWZpYyBlbGVtZW50c1xuICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fX2dhdHNieScpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC8vIENoZWNrIGZvciBHYXRzYnkgcGFnZSBkYXRhXG4gICAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzY3JpcHRbaWQqPVwiZ2F0c2J5LWNodW5rXCJdJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLy8gQ2hlY2sgZm9yIHdpbmRvdy5fX0dBVFNCWVxuICAgICAgICAgICAgICBpZiAodHlwZW9mICh3aW5kb3cgYXMgYW55KS5fX0dBVFNCWSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZXRlY3RpbmcgR2F0c2J5LmpzOicsIGUpO1xuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgLy8gUnVuIGRldGVjdGlvbnNcbiAgICAgICAgY29uc3QgcmVzdWx0czogUmVjb3JkPHN0cmluZywgeyBkZXRlY3RlZDogYm9vbGVhbiwgdmVyc2lvbjogc3RyaW5nIHwgbnVsbCB9PiA9IHt9O1xuICAgICAgICBcbiAgICAgICAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIHdhaXQgZm9yIHBhZ2UgdG8gYmUgZnVsbHkgbG9hZGVkXG4gICAgICAgIGNvbnN0IHdhaXRGb3JQYWdlTG9hZCA9ICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAvLyBJZiBkb2N1bWVudCBpcyBhbHJlYWR5IGNvbXBsZXRlLCByZXNvbHZlIGltbWVkaWF0ZWx5XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xuICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIHdhaXQgZm9yIGxvYWQgZXZlbnRcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4gcmVzb2x2ZSgpLCB7IG9uY2U6IHRydWUgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIEFsc28gc2V0IGEgdGltZW91dCBhcyBmYWxsYmFjayAoMyBzZWNvbmRzKVxuICAgICAgICAgICAgc2V0VGltZW91dChyZXNvbHZlLCAzMDAwKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIC8vIFVzZSBwcm9taXNlcyBpbnN0ZWFkIG9mIGFzeW5jL2F3YWl0IHRvIGF2b2lkIFR5cGVTY3JpcHQgaGVscGVyc1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgLy8gRmlyc3Qgd2FpdCBmb3IgcGFnZSB0byBiZSBmdWxseSBsb2FkZWRcbiAgICAgICAgICB3YWl0Rm9yUGFnZUxvYWQoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIC8vIEFkZCBhIHNtYWxsIGFkZGl0aW9uYWwgZGVsYXkgdG8gYWxsb3cgZm9yIEpTIGZyYW1ld29ya3MgdG8gaW5pdGlhbGl6ZVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIC8vIFJ1biBhbGwgdGhlIGRldGVjdG9yc1xuICAgICAgICAgICAgICBmb3IgKGNvbnN0IFtsaWJyYXJ5LCBkZXRlY3Rvcl0gb2YgT2JqZWN0LmVudHJpZXMobGlicmFyeURldGVjdG9ycykpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgY29uc3QgZGV0ZWN0ZWQgPSBkZXRlY3RvcigpO1xuICAgICAgICAgICAgICAgICAgbGV0IHZlcnNpb24gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAvLyBHZXQgdmVyc2lvbiBpZiBhdmFpbGFibGVcbiAgICAgICAgICAgICAgICAgIGlmIChkZXRlY3RlZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobGlicmFyeSA9PT0gJ2pRdWVyeScgJiYgKHdpbmRvdyBhcyBXaW5kb3cpLiQgJiYgKHdpbmRvdyBhcyBXaW5kb3cpLiQuZm4pIHtcbiAgICAgICAgICAgICAgICAgICAgICB2ZXJzaW9uID0gKHdpbmRvdyBhcyBXaW5kb3cpLiQuZm4uanF1ZXJ5O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxpYnJhcnkgPT09ICdWdWUuanMnICYmICh3aW5kb3cgYXMgV2luZG93KS5WdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2ZXJzaW9uID0gKHdpbmRvdyBhcyBXaW5kb3cpLlZ1ZS52ZXJzaW9uO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxpYnJhcnkgPT09ICdSZWFjdCcgJiYgKHdpbmRvdyBhcyBXaW5kb3cpLlJlYWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmVyc2lvbiA9ICh3aW5kb3cgYXMgV2luZG93KS5SZWFjdC52ZXJzaW9uO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxpYnJhcnkgPT09ICdBbmd1bGFyJyAmJiAod2luZG93IGFzIFdpbmRvdykuYW5ndWxhcikge1xuICAgICAgICAgICAgICAgICAgICAgIHZlcnNpb24gPSAod2luZG93IGFzIFdpbmRvdykuYW5ndWxhci52ZXJzaW9uICYmICh3aW5kb3cgYXMgV2luZG93KS5hbmd1bGFyLnZlcnNpb24uZnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChsaWJyYXJ5ID09PSAnU3ZlbHRlJyAmJiAod2luZG93IGFzIFdpbmRvdykuX19zdmVsdGVfXykge1xuICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHdpbmRvdyBhcyBXaW5kb3cpLl9fc3ZlbHRlX18gJiYgKHdpbmRvdyBhcyBXaW5kb3cpLl9fc3ZlbHRlX18udmVyc2lvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJzaW9uID0gKHdpbmRvdyBhcyBXaW5kb3cpLl9fc3ZlbHRlX18udmVyc2lvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN2ZWx0ZUtpdERhdGFFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2NyaXB0W2RhdGEtc3ZlbHRla2l0LWh5ZHJhdGVdJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdmVsdGVLaXREYXRhRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnNpb24gPSBcIlN2ZWx0ZUtpdFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnNpb24gPSBcIlVua25vd24gdmVyc2lvblwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmVyc2lvbiA9IFwiRGV0ZWN0ZWRcIjtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobGlicmFyeSA9PT0gJ05leHQuanMnICYmICh3aW5kb3cgYXMgV2luZG93KS5fX05FWFRfREFUQV9fKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgod2luZG93IGFzIGFueSkubmV4dCAmJiAod2luZG93IGFzIGFueSkubmV4dC52ZXJzaW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnNpb24gPSAod2luZG93IGFzIGFueSkubmV4dC52ZXJzaW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmVyc2lvbiA9IFwiRGV0ZWN0ZWRcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJzaW9uID0gXCJEZXRlY3RlZFwiO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChsaWJyYXJ5ID09PSAnR2F0c2J5LmpzJyAmJiAod2luZG93IGFzIGFueSkuX19HQVRTQlkpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2ZXJzaW9uID0gXCJEZXRlY3RlZFwiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIHJlc3VsdHNbbGlicmFyeV0gPSB7IGRldGVjdGVkLCB2ZXJzaW9uIH07XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgcmVzdWx0c1tsaWJyYXJ5XSA9IHsgZGV0ZWN0ZWQ6IGZhbHNlLCB2ZXJzaW9uOiBudWxsIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAvLyBSZXR1cm4gdGhlIHJlc3VsdHNcbiAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHRzKTtcbiAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGluIHBhZ2UgbG9hZCB3YWl0aW5nOlwiLCBlcnJvcik7XG4gICAgICAgICAgICByZXNvbHZlKHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfHwgXCJFcnJvciB3YWl0aW5nIGZvciBwYWdlIGxvYWRcIiB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgXG4gICAgaWYgKCFpbmplY3Rpb25SZXN1bHRzIHx8IGluamVjdGlvblJlc3VsdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBpbmplY3QgZGV0ZWN0aW9uIHNjcmlwdCcpO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCByZXN1bHQgPSBpbmplY3Rpb25SZXN1bHRzWzBdLnJlc3VsdDtcbiAgICBcbiAgICAvLyBDaGVjayBpZiB0aGVyZSB3YXMgYW4gZXJyb3IgaW4gdGhlIGRldGVjdGlvbiBzY3JpcHRcbiAgICBpZiAocmVzdWx0ICYmIHR5cGVvZiByZXN1bHQgPT09ICdvYmplY3QnICYmICdlcnJvcicgaW4gcmVzdWx0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9yIGluIGRldGVjdGlvbiBzY3JpcHQ6ICR7cmVzdWx0LmVycm9yfWApO1xuICAgIH1cbiAgICBcbiAgICAvLyBSZXR1cm4gdGhlIGRldGVjdGlvbiByZXN1bHRzXG4gICAgcmV0dXJuIHJlc3VsdCBhcyBSZWNvcmQ8c3RyaW5nLCB7IGRldGVjdGVkOiBib29sZWFuLCB2ZXJzaW9uOiBzdHJpbmcgfCBudWxsIH0+O1xuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgY29uc29sZS5lcnJvcignTGlicmFyeSBkZXRlY3Rpb24gZXJyb3I6JywgZXJyb3IpO1xuICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3IgZGV0ZWN0aW5nIGxpYnJhcmllczogJHtlcnJvci5tZXNzYWdlfWApO1xuICB9XG59ICIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0ge307XG5fX3dlYnBhY2tfbW9kdWxlc19fW1wiLi9zcmMvYmFja2dyb3VuZC50c1wiXSgpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9