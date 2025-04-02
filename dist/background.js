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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxDQUFDO1FBQ0wsQ0FBQztJQUNILENBQUM7Q0FBQTs7Ozs7Ozs7VUVsRUQ7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3doby1kaXMtc2l0ZS1zY2FubmVyLy4vc3JjL2JhY2tncm91bmQudHMiLCJ3ZWJwYWNrOi8vd2hvLWRpcy1zaXRlLXNjYW5uZXIvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly93aG8tZGlzLXNpdGUtc2Nhbm5lci93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2hvLWRpcy1zaXRlLXNjYW5uZXIvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgYmFja2dyb3VuZCBzY3JpcHQgd2lsbCBydW4gd2hlbiB0aGUgZXh0ZW5zaW9uIGlzIGxvYWRlZFxuY29uc29sZS5sb2coJ0JhY2tncm91bmQgc2NyaXB0IGxvYWRlZCEnKTtcblxuLy8gTGlzdGVuIGZvciBtZXNzYWdlcyBmcm9tIHRoZSBwb3B1cFxuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChyZXF1ZXN0LCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xuICAvLyBIYW5kbGUgZmV0Y2hpbmcgaGVhZGVyc1xuICBpZiAocmVxdWVzdC5hY3Rpb24gPT09ICdmZXRjaEhlYWRlcnMnKSB7XG4gICAgZmV0Y2hIZWFkZXJzKHJlcXVlc3QudXJsKVxuICAgICAgLnRoZW4oaGVhZGVycyA9PiB7XG4gICAgICAgIHNlbmRSZXNwb25zZSh7IGhlYWRlcnMgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgc2VuZFJlc3BvbnNlKHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSk7XG4gICAgICB9KTtcbiAgICAgIFxuICAgIC8vIFJldHVybiB0cnVlIHRvIGluZGljYXRlIHRoYXQgdGhlIHJlc3BvbnNlIHdpbGwgYmUgc2VudCBhc3luY2hyb25vdXNseVxuICAgIHJldHVybiB0cnVlO1xuICB9XG59KTtcblxuLy8gRnVuY3Rpb24gdG8gZmV0Y2ggaGVhZGVycyBmcm9tIGEgVVJMXG5hc3luYyBmdW5jdGlvbiBmZXRjaEhlYWRlcnModXJsOiBzdHJpbmcpOiBQcm9taXNlPFJlY29yZDxzdHJpbmcsIHN0cmluZz4+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgbWV0aG9kOiAnSEVBRCcsXG4gICAgICBjcmVkZW50aWFsczogJ29taXQnLFxuICAgICAgLy8gVXNlIG1vZGU6ICduby1jb3JzJyBhcyBhIGZhbGxiYWNrIGlmIGNvcnMgZmFpbHMsIGJ1dCBoZWFkZXJzIHdpbGwgYmUgbGltaXRlZFxuICAgICAgbW9kZTogJ2NvcnMnXG4gICAgfSk7XG4gICAgXG4gICAgLy8gQ29udmVydCBoZWFkZXJzIHRvIGFuIG9iamVjdFxuICAgIGNvbnN0IGhlYWRlcnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fTtcbiAgICByZXNwb25zZS5oZWFkZXJzLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgIGhlYWRlcnNba2V5XSA9IHZhbHVlO1xuICAgIH0pO1xuICAgIFxuICAgIHJldHVybiBoZWFkZXJzO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIC8vIEZhbGxiYWNrIHRvIHVzaW5nIFhNTEh0dHBSZXF1ZXN0IHdoaWNoIG1pZ2h0IHdvcmsgaW4gc29tZSBjYXNlc1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgIHhoci5vcGVuKCdIRUFEJywgdXJsKTtcbiAgICAgIFxuICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBoZWFkZXJzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge307XG4gICAgICAgIGNvbnN0IHJhd0hlYWRlcnMgPSB4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkudHJpbSgpLnNwbGl0KC9bXFxyXFxuXSsvKTtcbiAgICAgICAgXG4gICAgICAgIHJhd0hlYWRlcnMuZm9yRWFjaChsaW5lID0+IHtcbiAgICAgICAgICBjb25zdCBwYXJ0cyA9IGxpbmUuc3BsaXQoJzogJyk7XG4gICAgICAgICAgY29uc3QgaGVhZGVyID0gcGFydHMuc2hpZnQoKTtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IHBhcnRzLmpvaW4oJzogJyk7XG4gICAgICAgICAgaWYgKGhlYWRlcikge1xuICAgICAgICAgICAgaGVhZGVyc1toZWFkZXJdID0gdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHJlc29sdmUoaGVhZGVycyk7XG4gICAgICB9O1xuICAgICAgXG4gICAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZWplY3QobmV3IEVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggaGVhZGVycycpKTtcbiAgICAgIH07XG4gICAgICBcbiAgICAgIHhoci5zZW5kKCk7XG4gICAgfSk7XG4gIH1cbn0gIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSB7fTtcbl9fd2VicGFja19tb2R1bGVzX19bXCIuL3NyYy9iYWNrZ3JvdW5kLnRzXCJdKCk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=