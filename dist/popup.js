/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/popup.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/popup.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Popup Styles */
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin: 0;
  padding: 20px;
  width: 480px;
  min-height: 400px;
  color: #333;
  background-color: #f9fafc;
}

#app {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 100%;
}

h1 {
  margin: 0 0 15px 0;
  color: #2c3e50;
  text-align: center;
  font-size: 28px;
  font-weight: 600;
  letter-spacing: -0.5px;
  text-shadow: 0 1px 2px rgba(0,0,0,0.05);
}

h3 {
  margin: 10px 0;
  color: #2c3e50;
  font-size: 16px;
  font-weight: 600;
}

.checklist {
  list-style: none;
  padding: 0;
  margin: 0;
}

.checklist-item-container {
  margin-bottom: 12px;
  border-radius: 8px;
  background-color: #ffffff;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 1px solid rgba(0,0,0,0.05);
}

.checklist-item-container.active {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  border-color: rgba(52, 152, 219, 0.3);
}

.checklist-header {
  display: flex;
  align-items: center;
  padding: 14px 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  user-select: none;
  position: relative;
}

.checklist-header:hover {
  background-color: #f5f9ff;
}

.checklist-item-container.active .checklist-header {
  background-color: #ebf5ff;
  border-bottom: 1px solid rgba(52, 152, 219, 0.2);
}

.checkmark {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
  font-weight: bold;
  font-size: 16px;
  flex-shrink: 0;
  height: 24px;
  width: 24px;
  border-radius: 50%;
}

/* Status-specific checkmark styles */
.checkmark.success {
  color: #4CAF50;
  background-color: rgba(76, 175, 80, 0.1);
}

.checkmark.warning {
  color: #FF9800;
  background-color: rgba(255, 152, 0, 0.1);
}

.checkmark.error {
  color: #F44336;
  background-color: rgba(244, 67, 54, 0.1);
}

.checklist-item {
  flex: 1;
  font-size: 15px;
  font-weight: 500;
  color: #444;
}

.expand-icon {
  margin-left: 10px;
  transition: transform 0.3s ease;
  font-size: 10px;
  color: #666;
  background-color: rgba(0,0,0,0.05);
  height: 20px;
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.checklist-item-container.active .expand-icon {
  transform: rotate(180deg);
  background-color: rgba(52, 152, 219, 0.2);
  color: #3498db;
}

/* Results Container Styling */
.results-container {
  border-top: 1px solid rgba(0,0,0,0.05);
  padding: 0;
  background-color: #fff;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
}

.results-container.visible {
  padding: 16px;
}

.result-item {
  margin-bottom: 14px;
  padding: 12px;
  border-radius: 6px;
  border-left: 4px solid #ccc;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
}

.result-item:last-child {
  margin-bottom: 0;
}

.result-item.present {
  border-left-color: #4CAF50;
  background-color: #f1f8e9;
}

.result-item.missing {
  border-left-color: #FF9800;
  background-color: #fff8e1;
}

.result-item.error {
  border-left-color: #F44336;
  background-color: #ffebee;
}

.header-name {
  font-weight: 600;
  margin-bottom: 6px;
  color: #2c3e50;
  font-size: 14px;
}

.status {
  font-size: 12px;
  padding: 3px 8px;
  border-radius: 12px;
  display: inline-block;
  margin-bottom: 6px;
  font-weight: 500;
}

.status.success {
  background-color: #4CAF50;
  color: white;
}

.status.warning {
  background-color: #FF9800;
  color: white;
}

.status.error {
  background-color: #F44336;
  color: white;
}

.details {
  font-size: 13px;
  word-break: break-all;
  margin-bottom: 6px;
  color: #555;
  background: rgba(0,0,0,0.02);
  padding: 6px 8px;
  border-radius: 4px;
  font-family: monospace;
}

.description {
  font-size: 12px;
  color: #777;
  font-style: italic;
}

.error-message {
  color: #F44336;
  font-weight: 500;
  padding: 12px;
  background-color: #ffebee;
  border-radius: 6px;
  margin-bottom: 10px;
  border: 1px solid rgba(244, 67, 54, 0.2);
}

.info-message {
  color: #2196F3;
  font-weight: 500;
  padding: 12px;
  background-color: #e3f2fd;
  border-radius: 6px;
  margin-bottom: 10px;
  border: 1px solid rgba(33, 150, 243, 0.2);
} `, "",{"version":3,"sources":["webpack://./src/popup.css"],"names":[],"mappings":"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","sourcesContent":["/* Popup Styles */\nbody {\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  margin: 0;\n  padding: 20px;\n  width: 480px;\n  min-height: 400px;\n  color: #333;\n  background-color: #f9fafc;\n}\n\n#app {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  max-width: 100%;\n}\n\nh1 {\n  margin: 0 0 15px 0;\n  color: #2c3e50;\n  text-align: center;\n  font-size: 28px;\n  font-weight: 600;\n  letter-spacing: -0.5px;\n  text-shadow: 0 1px 2px rgba(0,0,0,0.05);\n}\n\nh3 {\n  margin: 10px 0;\n  color: #2c3e50;\n  font-size: 16px;\n  font-weight: 600;\n}\n\n.checklist {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.checklist-item-container {\n  margin-bottom: 12px;\n  border-radius: 8px;\n  background-color: #ffffff;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  transition: all 0.3s ease;\n  border: 1px solid rgba(0,0,0,0.05);\n}\n\n.checklist-item-container.active {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);\n  border-color: rgba(52, 152, 219, 0.3);\n}\n\n.checklist-header {\n  display: flex;\n  align-items: center;\n  padding: 14px 16px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  user-select: none;\n  position: relative;\n}\n\n.checklist-header:hover {\n  background-color: #f5f9ff;\n}\n\n.checklist-item-container.active .checklist-header {\n  background-color: #ebf5ff;\n  border-bottom: 1px solid rgba(52, 152, 219, 0.2);\n}\n\n.checkmark {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 12px;\n  font-weight: bold;\n  font-size: 16px;\n  flex-shrink: 0;\n  height: 24px;\n  width: 24px;\n  border-radius: 50%;\n}\n\n/* Status-specific checkmark styles */\n.checkmark.success {\n  color: #4CAF50;\n  background-color: rgba(76, 175, 80, 0.1);\n}\n\n.checkmark.warning {\n  color: #FF9800;\n  background-color: rgba(255, 152, 0, 0.1);\n}\n\n.checkmark.error {\n  color: #F44336;\n  background-color: rgba(244, 67, 54, 0.1);\n}\n\n.checklist-item {\n  flex: 1;\n  font-size: 15px;\n  font-weight: 500;\n  color: #444;\n}\n\n.expand-icon {\n  margin-left: 10px;\n  transition: transform 0.3s ease;\n  font-size: 10px;\n  color: #666;\n  background-color: rgba(0,0,0,0.05);\n  height: 20px;\n  width: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n}\n\n.checklist-item-container.active .expand-icon {\n  transform: rotate(180deg);\n  background-color: rgba(52, 152, 219, 0.2);\n  color: #3498db;\n}\n\n/* Results Container Styling */\n.results-container {\n  border-top: 1px solid rgba(0,0,0,0.05);\n  padding: 0;\n  background-color: #fff;\n  overflow: hidden;\n  transition: max-height 0.3s ease-in-out;\n}\n\n.results-container.visible {\n  padding: 16px;\n}\n\n.result-item {\n  margin-bottom: 14px;\n  padding: 12px;\n  border-radius: 6px;\n  border-left: 4px solid #ccc;\n  box-shadow: 0 1px 3px rgba(0,0,0,0.05);\n}\n\n.result-item:last-child {\n  margin-bottom: 0;\n}\n\n.result-item.present {\n  border-left-color: #4CAF50;\n  background-color: #f1f8e9;\n}\n\n.result-item.missing {\n  border-left-color: #FF9800;\n  background-color: #fff8e1;\n}\n\n.result-item.error {\n  border-left-color: #F44336;\n  background-color: #ffebee;\n}\n\n.header-name {\n  font-weight: 600;\n  margin-bottom: 6px;\n  color: #2c3e50;\n  font-size: 14px;\n}\n\n.status {\n  font-size: 12px;\n  padding: 3px 8px;\n  border-radius: 12px;\n  display: inline-block;\n  margin-bottom: 6px;\n  font-weight: 500;\n}\n\n.status.success {\n  background-color: #4CAF50;\n  color: white;\n}\n\n.status.warning {\n  background-color: #FF9800;\n  color: white;\n}\n\n.status.error {\n  background-color: #F44336;\n  color: white;\n}\n\n.details {\n  font-size: 13px;\n  word-break: break-all;\n  margin-bottom: 6px;\n  color: #555;\n  background: rgba(0,0,0,0.02);\n  padding: 6px 8px;\n  border-radius: 4px;\n  font-family: monospace;\n}\n\n.description {\n  font-size: 12px;\n  color: #777;\n  font-style: italic;\n}\n\n.error-message {\n  color: #F44336;\n  font-weight: 500;\n  padding: 12px;\n  background-color: #ffebee;\n  border-radius: 6px;\n  margin-bottom: 10px;\n  border: 1px solid rgba(244, 67, 54, 0.2);\n}\n\n.info-message {\n  color: #2196F3;\n  font-weight: 500;\n  padding: 12px;\n  background-color: #e3f2fd;\n  border-radius: 6px;\n  margin-bottom: 10px;\n  border: 1px solid rgba(33, 150, 243, 0.2);\n} "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/popup.css":
/*!***********************!*\
  !*** ./src/popup.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./popup.css */ "./node_modules/css-loader/dist/cjs.js!./src/popup.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/popup.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./popup.css */ "./src/popup.css");
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
    if (!resultsContainer)
        return false;
    // Show loading indicator
    resultsContainer.innerHTML = '<p>Loading security headers data...</p>';
    // Add a delay to ensure page is fully loaded
    setTimeout(() => {
        // Get the current active tab
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
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
            chrome.runtime.sendMessage({ action: 'fetchHeaders', url: url }, (response) => {
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
                    if (status === 'Missing')
                        missingHeaders++;
                    displayResult(resultsContainer, header.name, status, details, header.description);
                });
                // Update the checklist item status based on missing headers
                if (missingHeaders > 0) {
                    updateItemStatus('security-headers', 'warning');
                }
                else {
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
    if (!resultsContainer)
        return false;
    // Show loading indicator
    resultsContainer.innerHTML = '<p>Loading JavaScript libraries data...</p>';
    // Get the current active tab
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
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
        // Fetch library data using background script (needed for CORS/execution)
        chrome.runtime.sendMessage({ action: 'detectLibraries', tabId: currentTab.id, url: url }, (response) => {
            if (response.error) {
                resultsContainer.innerHTML = `<div class="error-message">${response.error}</div>`;
                updateItemStatus('javascript-libraries', 'error');
                return;
            }
            try {
                // Get the library data from the response
                const libraries = response.libraries;
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
                    displayResult(resultsContainer, library, status, details, `${library} JavaScript framework/library`);
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
            }
            catch (err) {
                console.error('Error processing library detection results:', err);
                resultsContainer.innerHTML = `<div class="error-message">Error processing results: ${err.message || 'Unknown error'}</div>`;
                updateItemStatus('javascript-libraries', 'error');
            }
        });
    });
    return true;
}
function identifyAnalyticsTools() {
    console.log('Identifying analytics tools...');
    // Get the results container for this item
    const resultsContainer = document.getElementById('results-analytics');
    if (!resultsContainer)
        return false;
    // Show loading indicator
    resultsContainer.innerHTML = '<p>Loading analytics data...</p>';
    // Get the current active tab
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const currentTab = tabs[0];
        if (!currentTab || !currentTab.url) {
            resultsContainer.innerHTML = '<div class="error-message">Cannot access current tab information</div>';
            updateItemStatus('analytics', 'error');
            return;
        }
        // Check if we can analyze this URL (must be http or https)
        const url = currentTab.url;
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            resultsContainer.innerHTML = '<div class="error-message">Can only analyze HTTP/HTTPS pages</div>';
            updateItemStatus('analytics', 'error');
            return;
        }
        // Execute script in the current tab to detect analytics tools
        chrome.scripting.executeScript({
            target: { tabId: currentTab.id },
            func: () => {
                // Define analytics tool detection functions
                const analyticsDetectors = {
                    'Google Analytics (Universal)': () => {
                        return !!(window.ga ||
                            window._ga ||
                            window.GoogleAnalyticsObject ||
                            (typeof window._gat !== 'undefined') ||
                            document.querySelector('script[src*="google-analytics.com/analytics.js"]'));
                    },
                    'Google Analytics 4': () => {
                        return !!(window.gtag ||
                            window.dataLayer ||
                            document.querySelector('script[src*="googletagmanager.com/gtag/js"]') ||
                            document.querySelector('script[src*="google-analytics.com/g/collect"]'));
                    },
                    'Google Analytics (Legacy)': () => {
                        return !!(window._gaq ||
                            document.querySelector('script[src*="google-analytics.com/ga.js"]'));
                    },
                    'Facebook Pixel': () => {
                        return !!(window.fbq ||
                            window._fbq ||
                            document.querySelector('script[src*="connect.facebook.net/en_US/fbevents.js"]') ||
                            document.querySelector('noscript[src*="facebook.com/tr"]'));
                    },
                    'Hotjar': () => {
                        return !!(window._hjSettings ||
                            window.hj ||
                            document.querySelector('script[src*="static.hotjar.com"]') ||
                            document.querySelector('script[src*="script.hotjar.com"]'));
                    },
                    'Segment': () => {
                        return !!(window.analytics ||
                            window.segment ||
                            document.querySelector('script[src*="cdn.segment.com/analytics.js"]'));
                    },
                    'Mixpanel': () => {
                        return !!(window.mixpanel ||
                            document.querySelector('script[src*="cdn.mxpnl.com/libs/mixpanel"]'));
                    },
                    'Amplitude': () => {
                        return !!(window.amplitude ||
                            document.querySelector('script[src*="cdn.amplitude.com"]'));
                    },
                    'HubSpot': () => {
                        return !!(window._hsq ||
                            document.querySelector('script[src*="js.hs-scripts.com"]') ||
                            document.querySelector('script[src*="js.hubspot.com"]'));
                    },
                    'Heap': () => {
                        return !!(window.heap ||
                            document.querySelector('script[src*="cdn.heapanalytics.com"]'));
                    },
                    'Matomo/Piwik': () => {
                        return !!(window._paq ||
                            document.querySelector('script[src*="matomo.js"]') ||
                            document.querySelector('script[src*="piwik.js"]'));
                    },
                    'Intercom': () => {
                        return !!(window.Intercom ||
                            document.querySelector('script[src*="widget.intercom.io"]') ||
                            document.querySelector('script[src*="app.intercom.io"]'));
                    },
                    'Kissmetrics': () => {
                        return !!(window._kmq ||
                            document.querySelector('script[src*="scripts.kissmetrics.com"]'));
                    },
                    'Ahoy': () => {
                        return !!(window.ahoy);
                    },
                    'RudderStack': () => {
                        return !!(window.rudderanalytics ||
                            document.querySelector('script[src*="cdn.rudderlabs.com"]'));
                    },
                    'Matomo Tag Manager': () => {
                        return !!(window._mtm ||
                            document.querySelector('script[src*="matomo.js"]') ||
                            document.querySelector('script[src*="matomo-tag-manager"]'));
                    },
                    'Cloudflare Zaraz': () => {
                        try {
                            // Check for direct global object
                            if (window.zaraz) {
                                return true;
                            }
                            // Check for script tag
                            if (document.querySelector('script#zaraz') ||
                                document.querySelector('script[src*="cdn-cgi/zaraz"]')) {
                                return true;
                            }
                            // Check for zaraz config object
                            if (window.zarazData) {
                                return true;
                            }
                            // Check for meta tags
                            if (document.querySelector('meta[http-equiv="origin-trial"][content*="zaraz"]')) {
                                return true;
                            }
                            // Check for inline scripts containing zaraz without using script injection
                            const allScripts = Array.from(document.querySelectorAll('script:not([src])'));
                            // Look for zaraz in script content
                            const hasZarazInInlineScript = allScripts.some(script => script.textContent && script.textContent.includes('zaraz'));
                            if (hasZarazInInlineScript) {
                                return true;
                            }
                            // Check for zaraz properties without using eval/inline scripts
                            // Look for common zaraz property patterns
                            try {
                                // Use Object.prototype.hasOwnProperty to safely check window properties
                                for (const key in window) {
                                    if (key === 'zaraz' || key.includes('zaraz')) {
                                        return true;
                                    }
                                }
                                // Check if zaraz is available in any form on window
                                return typeof window.zaraz !== 'undefined';
                            }
                            catch (e) {
                                console.log("Error checking window properties:", e);
                            }
                            return false;
                        }
                        catch (e) {
                            console.error('Error detecting Cloudflare Zaraz:', e);
                            return false;
                        }
                    }
                };
                // Helper function to check for Google Tag Manager
                function detectGoogleTagManager() {
                    return !!(window.dataLayer &&
                        typeof window.dataLayer.push === 'function' ||
                        document.querySelector('script[src*="googletagmanager.com/gtm.js"]') ||
                        document.querySelector('noscript iframe[src*="googletagmanager.com/ns.html"]'));
                }
                // Helper function to wait for page to be fully loaded
                const waitForPageLoad = () => {
                    return new Promise(resolve => {
                        if (document.readyState === 'complete') {
                            resolve();
                            return;
                        }
                        window.addEventListener('load', () => resolve(), { once: true });
                        setTimeout(resolve, 3000);
                    });
                };
                // Use Promise instead of async/await
                return new Promise(resolve => {
                    waitForPageLoad().then(() => {
                        setTimeout(() => {
                            // Check for Google Tag Manager first
                            const hasGTM = detectGoogleTagManager();
                            // Run all the detectors
                            const results = {};
                            // Add GTM result separately
                            results['Google Tag Manager'] = hasGTM;
                            // Run all other detector functions
                            for (const [tool, detector] of Object.entries(analyticsDetectors)) {
                                try {
                                    results[tool] = detector();
                                }
                                catch (e) {
                                    console.error(`Error detecting ${tool}:`, e);
                                    results[tool] = false;
                                }
                            }
                            // Look for additional analytics related scripts
                            const allScripts = Array.from(document.querySelectorAll('script[src]'));
                            const scriptSources = allScripts.map(script => script.getAttribute('src') || '');
                            // Check for other common analytics patterns in script sources
                            if (scriptSources.some(src => src.includes('analytics') && !src.includes('google-analytics'))) {
                                results['Other Analytics Script'] = true;
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
                updateItemStatus('analytics', 'error');
                return;
            }
            try {
                const result = injectionResults[0].result;
                // Check if there was an error in the detection script
                if (result && typeof result === 'object' && 'error' in result) {
                    resultsContainer.innerHTML = `<div class="error-message">Error in detection script: ${result.error}</div>`;
                    updateItemStatus('analytics', 'error');
                    return;
                }
                // Cast to the expected type
                const analyticsTools = result;
                // Check if analyticsTools is undefined or not an object
                if (!analyticsTools || typeof analyticsTools !== 'object') {
                    resultsContainer.innerHTML = '<div class="error-message">Invalid result from detection script</div>';
                    updateItemStatus('analytics', 'error');
                    return;
                }
                resultsContainer.innerHTML = '<h3>Analytics & Tracking Tools</h3>';
                let detectedCount = 0;
                for (const [tool, detected] of Object.entries(analyticsTools)) {
                    const status = detected ? 'Present' : 'Missing';
                    if (detected) {
                        detectedCount++;
                    }
                    const description = getAnalyticsToolDescription(tool);
                    displayResult(resultsContainer, tool, status, '', // No version info for analytics tools
                    description);
                }
                // If no tools were detected, add a message
                if (detectedCount === 0) {
                    const noToolsMsg = document.createElement('div');
                    noToolsMsg.className = 'info-message';
                    noToolsMsg.textContent = 'No common analytics or tracking tools detected. The site may be using custom analytics or privacy-focused alternatives.';
                    resultsContainer.appendChild(noToolsMsg);
                }
                // Set status: warning if tools detected (privacy implications), success otherwise
                updateItemStatus('analytics', detectedCount > 0 ? 'warning' : 'success');
            }
            catch (err) {
                console.error('Error processing analytics detection results:', err);
                resultsContainer.innerHTML = `<div class="error-message">Error processing results: ${err.message || 'Unknown error'}</div>`;
                updateItemStatus('analytics', 'error');
            }
        })
            .catch(error => {
            console.error('Analytics detection error:', error);
            resultsContainer.innerHTML = `<div class="error-message">Error detecting analytics tools: ${error.message}</div>`;
            updateItemStatus('analytics', 'error');
        });
    });
    return true;
}
// Helper function to get descriptions for analytics tools
function getAnalyticsToolDescription(tool) {
    const descriptions = {
        'Google Analytics (Universal)': 'Traditional web analytics service from Google',
        'Google Analytics 4': 'Next-generation analytics service from Google',
        'Google Analytics (Legacy)': 'Older version of Google Analytics',
        'Google Tag Manager': 'Container for managing marketing and tracking tags',
        'Facebook Pixel': 'Facebook/Meta tracking tool for advertising',
        'Hotjar': 'Heatmaps, session recordings, and feedback tools',
        'Segment': 'Customer data platform for collecting analytics',
        'Mixpanel': 'Product analytics platform',
        'Amplitude': 'Product analytics for digital optimization',
        'HubSpot': 'Marketing, sales, and service platform',
        'Heap': 'Automatic event capture analytics platform',
        'Matomo/Piwik': 'Open-source analytics platform',
        'Intercom': 'Customer messaging platform',
        'Kissmetrics': 'Customer analytics platform',
        'Ahoy': 'Simple, powerful analytics for Rails',
        'RudderStack': 'Customer data platform',
        'Matomo Tag Manager': 'Tag management for Matomo',
        'Cloudflare Zaraz': 'Server-side third-party tool manager by Cloudflare',
        'Other Analytics Script': 'Unidentified analytics or tracking script'
    };
    return descriptions[tool] || 'Analytics or tracking tool';
}
// Toggle visibility of results container
function toggleResultsVisibility(container) {
    if (container.classList.contains('visible')) {
        container.classList.remove('visible');
        container.style.maxHeight = '0px';
    }
    else {
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
function getHeaderValue(headers, headerName) {
    const headerKey = Object.keys(headers).find(key => key.toLowerCase() === headerName.toLowerCase());
    return headerKey ? headers[headerKey] : null;
}
// Helper function to display results
function displayResult(container, headerName, status, details = '', description = '') {
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
function updateItemStatus(itemId, status) {
    const checklistItemParent = document.querySelector(`#results-${itemId}`);
    if (!checklistItemParent)
        return;
    const checklistItem = checklistItemParent.parentElement;
    if (!checklistItem)
        return;
    const checkmark = checklistItem.querySelector('.checkmark');
    if (!checkmark)
        return;
    // Reset existing classes
    checkmark.classList.remove('success', 'warning', 'error');
    checkmark.classList.add(status);
    // Update icon based on status
    if (status === 'success') {
        checkmark.innerHTML = '✓';
    }
    else if (status === 'warning') {
        checkmark.innerHTML = '⚠';
    }
    else if (status === 'error') {
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLE9BQU8sdUZBQXVGLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8s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LENBQUMsRUFBRSxFQUFFLENBQUM7WUFDM0MsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDekMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7WUFFM0MsaURBQWlEO1lBQ2pELFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO2dCQUN4QywwQ0FBMEM7Z0JBQzFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNwQyx1Q0FBdUM7Z0JBQ3ZDLHVCQUF1QixDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDNUMsQ0FBQyxDQUFDLENBQUM7WUFFSCx5QkFBeUI7WUFDekIsUUFBUSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNqQyxRQUFRLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDdkMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FBQztRQUVILEdBQUcsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFM0Isd0RBQXdEO1FBQ3hELFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCwyQkFBMkIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3pDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNsQixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLDBEQUEwRDtJQUNyRSxDQUFDO0FBQ0gsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aG8tZGlzLXNpdGUtc2Nhbm5lci8uL3NyYy9wb3B1cC5jc3MiLCJ3ZWJwYWNrOi8vd2hvLWRpcy1zaXRlLXNjYW5uZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3doby1kaXMtc2l0ZS1zY2FubmVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2hvLWRpcy1zaXRlLXNjYW5uZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2hvLWRpcy1zaXRlLXNjYW5uZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3doby1kaXMtc2l0ZS1zY2FubmVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3doby1kaXMtc2l0ZS1zY2FubmVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3doby1kaXMtc2l0ZS1zY2FubmVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2hvLWRpcy1zaXRlLXNjYW5uZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93aG8tZGlzLXNpdGUtc2Nhbm5lci8uL3NyYy9wb3B1cC5jc3M/NTlmOSIsIndlYnBhY2s6Ly93aG8tZGlzLXNpdGUtc2Nhbm5lci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93aG8tZGlzLXNpdGUtc2Nhbm5lci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93aG8tZGlzLXNpdGUtc2Nhbm5lci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2hvLWRpcy1zaXRlLXNjYW5uZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93aG8tZGlzLXNpdGUtc2Nhbm5lci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3doby1kaXMtc2l0ZS1zY2FubmVyL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93aG8tZGlzLXNpdGUtc2Nhbm5lci8uL3NyYy9wb3B1cC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogUG9wdXAgU3R5bGVzICovXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAyMHB4O1xuICB3aWR0aDogNDgwcHg7XG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xuICBjb2xvcjogIzMzMztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmFmYztcbn1cblxuI2FwcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG5oMSB7XG4gIG1hcmdpbjogMCAwIDE1cHggMDtcbiAgY29sb3I6ICMyYzNlNTA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwwLDAsMC4wNSk7XG59XG5cbmgzIHtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIGNvbG9yOiAjMmMzZTUwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5jaGVja2xpc3Qge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbi5jaGVja2xpc3QtaXRlbS1jb250YWluZXIge1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMDUpO1xufVxuXG4uY2hlY2tsaXN0LWl0ZW0tY29udGFpbmVyLmFjdGl2ZSB7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDUyLCAxNTIsIDIxOSwgMC4zKTtcbn1cblxuLmNoZWNrbGlzdC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNoZWNrbGlzdC1oZWFkZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmOWZmO1xufVxuXG4uY2hlY2tsaXN0LWl0ZW0tY29udGFpbmVyLmFjdGl2ZSAuY2hlY2tsaXN0LWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmY1ZmY7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDUyLCAxNTIsIDIxOSwgMC4yKTtcbn1cblxuLmNoZWNrbWFyayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiAyNHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi8qIFN0YXR1cy1zcGVjaWZpYyBjaGVja21hcmsgc3R5bGVzICovXG4uY2hlY2ttYXJrLnN1Y2Nlc3Mge1xuICBjb2xvcjogIzRDQUY1MDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NiwgMTc1LCA4MCwgMC4xKTtcbn1cblxuLmNoZWNrbWFyay53YXJuaW5nIHtcbiAgY29sb3I6ICNGRjk4MDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxNTIsIDAsIDAuMSk7XG59XG5cbi5jaGVja21hcmsuZXJyb3Ige1xuICBjb2xvcjogI0Y0NDMzNjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDQsIDY3LCA1NCwgMC4xKTtcbn1cblxuLmNoZWNrbGlzdC1pdGVtIHtcbiAgZmxleDogMTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzQ0NDtcbn1cblxuLmV4cGFuZC1pY29uIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICM2NjY7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4wNSk7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5jaGVja2xpc3QtaXRlbS1jb250YWluZXIuYWN0aXZlIC5leHBhbmQtaWNvbiB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTIsIDE1MiwgMjE5LCAwLjIpO1xuICBjb2xvcjogIzM0OThkYjtcbn1cblxuLyogUmVzdWx0cyBDb250YWluZXIgU3R5bGluZyAqL1xuLnJlc3VsdHMtY29udGFpbmVyIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4wNSk7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4zcyBlYXNlLWluLW91dDtcbn1cblxuLnJlc3VsdHMtY29udGFpbmVyLnZpc2libGUge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuXG4ucmVzdWx0LWl0ZW0ge1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuICBwYWRkaW5nOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgI2NjYztcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwwLDAsMC4wNSk7XG59XG5cbi5yZXN1bHQtaXRlbTpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLnJlc3VsdC1pdGVtLnByZXNlbnQge1xuICBib3JkZXItbGVmdC1jb2xvcjogIzRDQUY1MDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjhlOTtcbn1cblxuLnJlc3VsdC1pdGVtLm1pc3Npbmcge1xuICBib3JkZXItbGVmdC1jb2xvcjogI0ZGOTgwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjhlMTtcbn1cblxuLnJlc3VsdC1pdGVtLmVycm9yIHtcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICNGNDQzMzY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmViZWU7XG59XG5cbi5oZWFkZXItbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbiAgY29sb3I6ICMyYzNlNTA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnN0YXR1cyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogM3B4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5zdGF0dXMuc3VjY2VzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnN0YXR1cy53YXJuaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGOTgwMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc3RhdHVzLmVycm9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y0NDMzNjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZGV0YWlscyB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gIGNvbG9yOiAjNTU1O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMDIpO1xuICBwYWRkaW5nOiA2cHggOHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM3Nzc7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLmVycm9yLW1lc3NhZ2Uge1xuICBjb2xvcjogI0Y0NDMzNjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZzogMTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWJlZTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI0NCwgNjcsIDU0LCAwLjIpO1xufVxuXG4uaW5mby1tZXNzYWdlIHtcbiAgY29sb3I6ICMyMTk2RjM7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlM2YyZmQ7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgzMywgMTUwLCAyNDMsIDAuMik7XG59IGAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3BvcHVwLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxpQkFBaUI7QUFDakI7RUFDRSx3SUFBd0k7RUFDeEksU0FBUztFQUNULGFBQWE7RUFDYixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixz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O0FBQzNDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIFBvcHVwIFN0eWxlcyAqL1xcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICB3aWR0aDogNDgwcHg7XFxuICBtaW4taGVpZ2h0OiA0MDBweDtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmFmYztcXG59XFxuXFxuI2FwcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuaDEge1xcbiAgbWFyZ2luOiAwIDAgMTVweCAwO1xcbiAgY29sb3I6ICMyYzNlNTA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcXG4gIHRleHQtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLDAsMCwwLjA1KTtcXG59XFxuXFxuaDMge1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxuICBjb2xvcjogIzJjM2U1MDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5jaGVja2xpc3Qge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5jaGVja2xpc3QtaXRlbS1jb250YWluZXIge1xcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjA1KTtcXG59XFxuXFxuLmNoZWNrbGlzdC1pdGVtLWNvbnRhaW5lci5hY3RpdmUge1xcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDUyLCAxNTIsIDIxOSwgMC4zKTtcXG59XFxuXFxuLmNoZWNrbGlzdC1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxNHB4IDE2cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5jaGVja2xpc3QtaGVhZGVyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY5ZmY7XFxufVxcblxcbi5jaGVja2xpc3QtaXRlbS1jb250YWluZXIuYWN0aXZlIC5jaGVja2xpc3QtaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmY1ZmY7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSg1MiwgMTUyLCAyMTksIDAuMik7XFxufVxcblxcbi5jaGVja21hcmsge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1yaWdodDogMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICB3aWR0aDogMjRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLyogU3RhdHVzLXNwZWNpZmljIGNoZWNrbWFyayBzdHlsZXMgKi9cXG4uY2hlY2ttYXJrLnN1Y2Nlc3Mge1xcbiAgY29sb3I6ICM0Q0FGNTA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc2LCAxNzUsIDgwLCAwLjEpO1xcbn1cXG5cXG4uY2hlY2ttYXJrLndhcm5pbmcge1xcbiAgY29sb3I6ICNGRjk4MDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTUyLCAwLCAwLjEpO1xcbn1cXG5cXG4uY2hlY2ttYXJrLmVycm9yIHtcXG4gIGNvbG9yOiAjRjQ0MzM2O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDQsIDY3LCA1NCwgMC4xKTtcXG59XFxuXFxuLmNoZWNrbGlzdC1pdGVtIHtcXG4gIGZsZXg6IDE7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgY29sb3I6ICM0NDQ7XFxufVxcblxcbi5leHBhbmQtaWNvbiB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XFxuICBmb250LXNpemU6IDEwcHg7XFxuICBjb2xvcjogIzY2NjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4wNSk7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5jaGVja2xpc3QtaXRlbS1jb250YWluZXIuYWN0aXZlIC5leHBhbmQtaWNvbiB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1MiwgMTUyLCAyMTksIDAuMik7XFxuICBjb2xvcjogIzM0OThkYjtcXG59XFxuXFxuLyogUmVzdWx0cyBDb250YWluZXIgU3R5bGluZyAqL1xcbi5yZXN1bHRzLWNvbnRhaW5lciB7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjA1KTtcXG4gIHBhZGRpbmc6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnJlc3VsdHMtY29udGFpbmVyLnZpc2libGUge1xcbiAgcGFkZGluZzogMTZweDtcXG59XFxuXFxuLnJlc3VsdC1pdGVtIHtcXG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjY2NjO1xcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwwLDAsMC4wNSk7XFxufVxcblxcbi5yZXN1bHQtaXRlbTpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblxcbi5yZXN1bHQtaXRlbS5wcmVzZW50IHtcXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjNENBRjUwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjhlOTtcXG59XFxuXFxuLnJlc3VsdC1pdGVtLm1pc3Npbmcge1xcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICNGRjk4MDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOGUxO1xcbn1cXG5cXG4ucmVzdWx0LWl0ZW0uZXJyb3Ige1xcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICNGNDQzMzY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYmVlO1xcbn1cXG5cXG4uaGVhZGVyLW5hbWUge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIG1hcmdpbi1ib3R0b206IDZweDtcXG4gIGNvbG9yOiAjMmMzZTUwO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4uc3RhdHVzIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIHBhZGRpbmc6IDNweCA4cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLnN0YXR1cy5zdWNjZXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5zdGF0dXMud2FybmluZyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY5ODAwO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc3RhdHVzLmVycm9yIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNDQzMzY7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5kZXRhaWxzIHtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG4gIG1hcmdpbi1ib3R0b206IDZweDtcXG4gIGNvbG9yOiAjNTU1O1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjAyKTtcXG4gIHBhZGRpbmc6IDZweCA4cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgY29sb3I6ICM3Nzc7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5lcnJvci1tZXNzYWdlIHtcXG4gIGNvbG9yOiAjRjQ0MzM2O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYmVlO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjQ0LCA2NywgNTQsIDAuMik7XFxufVxcblxcbi5pbmZvLW1lc3NhZ2Uge1xcbiAgY29sb3I6ICMyMTk2RjM7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgcGFkZGluZzogMTJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlM2YyZmQ7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgzMywgMTUwLCAyNDMsIDAuMik7XFxufSBcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3BvcHVwLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3BvcHVwLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9wb3B1cC5jc3MnO1xuXG4vLyBGdW5jdGlvbnMgZm9yIGNoZWNrbGlzdCBpdGVtc1xuZnVuY3Rpb24gc2NhblNpdGVUZWNobm9sb2d5KCkge1xuICBjb25zb2xlLmxvZygnU2Nhbm5pbmcgc2l0ZSB0ZWNobm9sb2dpZXMuLi4nKTtcbiAgLy8gR2V0IHRoZSByZXN1bHRzIGNvbnRhaW5lciBmb3IgdGhpcyBpdGVtXG4gIGNvbnN0IHJlc3VsdHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0cy1zaXRlLXRlY2hub2xvZ3knKTtcbiAgaWYgKHJlc3VsdHNDb250YWluZXIpIHtcbiAgICByZXN1bHRzQ29udGFpbmVyLmlubmVySFRNTCA9ICc8cD5Mb2FkaW5nIHNpdGUgdGVjaG5vbG9naWVzIGRhdGEuLi48L3A+JztcbiAgICBcbiAgICAvLyBBZGQgZGVsYXkgdG8gZW5zdXJlIHBhZ2UgaXMgZnVsbHkgbG9hZGVkXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICByZXN1bHRzQ29udGFpbmVyLmlubmVySFRNTCA9ICc8cD5TY2FubmluZyBzaXRlIHRlY2hub2xvZ2llcy4uLiAoTm90IGltcGxlbWVudGVkIHlldCk8L3A+JztcbiAgICAgIC8vIFNldCB0byBkZWZhdWx0IHN0YXRlIHNpbmNlIG5vdCBpbXBsZW1lbnRlZFxuICAgICAgdXBkYXRlSXRlbVN0YXR1cygnc2l0ZS10ZWNobm9sb2d5JywgJ3N1Y2Nlc3MnKTtcbiAgICB9LCAxMDAwKTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gY2hlY2tTZWN1cml0eUhlYWRlcnMoKSB7XG4gIGNvbnNvbGUubG9nKCdDaGVja2luZyBzZWN1cml0eSBoZWFkZXJzLi4uJyk7XG4gIFxuICAvLyBHZXQgdGhlIHJlc3VsdHMgY29udGFpbmVyIGZvciB0aGlzIGl0ZW1cbiAgY29uc3QgcmVzdWx0c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHRzLXNlY3VyaXR5LWhlYWRlcnMnKTtcbiAgaWYgKCFyZXN1bHRzQ29udGFpbmVyKSByZXR1cm4gZmFsc2U7XG4gIFxuICAvLyBTaG93IGxvYWRpbmcgaW5kaWNhdG9yXG4gIHJlc3VsdHNDb250YWluZXIuaW5uZXJIVE1MID0gJzxwPkxvYWRpbmcgc2VjdXJpdHkgaGVhZGVycyBkYXRhLi4uPC9wPic7XG4gIFxuICAvLyBBZGQgYSBkZWxheSB0byBlbnN1cmUgcGFnZSBpcyBmdWxseSBsb2FkZWRcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgLy8gR2V0IHRoZSBjdXJyZW50IGFjdGl2ZSB0YWJcbiAgICBjaHJvbWUudGFicy5xdWVyeSh7YWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlfSwgKHRhYnMpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRUYWIgPSB0YWJzWzBdO1xuICAgICAgaWYgKCFjdXJyZW50VGFiIHx8ICFjdXJyZW50VGFiLnVybCkge1xuICAgICAgICByZXN1bHRzQ29udGFpbmVyLmlubmVySFRNTCA9ICc8ZGl2IGNsYXNzPVwiZXJyb3ItbWVzc2FnZVwiPkNhbm5vdCBhY2Nlc3MgY3VycmVudCB0YWIgaW5mb3JtYXRpb248L2Rpdj4nO1xuICAgICAgICB1cGRhdGVJdGVtU3RhdHVzKCdzZWN1cml0eS1oZWFkZXJzJywgJ2Vycm9yJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLy8gQ2hlY2sgaWYgd2UgY2FuIGFuYWx5emUgdGhpcyBVUkwgKG11c3QgYmUgaHR0cCBvciBodHRwcylcbiAgICAgIGNvbnN0IHVybCA9IGN1cnJlbnRUYWIudXJsO1xuICAgICAgaWYgKCF1cmwuc3RhcnRzV2l0aCgnaHR0cDovLycpICYmICF1cmwuc3RhcnRzV2l0aCgnaHR0cHM6Ly8nKSkge1xuICAgICAgICByZXN1bHRzQ29udGFpbmVyLmlubmVySFRNTCA9ICc8ZGl2IGNsYXNzPVwiZXJyb3ItbWVzc2FnZVwiPkNhbiBvbmx5IGFuYWx5emUgSFRUUC9IVFRQUyBwYWdlczwvZGl2Pic7XG4gICAgICAgIHVwZGF0ZUl0ZW1TdGF0dXMoJ3NlY3VyaXR5LWhlYWRlcnMnLCAnZXJyb3InKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgXG4gICAgICAvLyBGZXRjaCBoZWFkZXJzIHVzaW5nIGJhY2tncm91bmQgc2NyaXB0IChuZWVkZWQgZm9yIENPUlMpXG4gICAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7YWN0aW9uOiAnZmV0Y2hIZWFkZXJzJywgdXJsOiB1cmx9LCAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLmVycm9yKSB7XG4gICAgICAgICAgcmVzdWx0c0NvbnRhaW5lci5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cImVycm9yLW1lc3NhZ2VcIj4ke3Jlc3BvbnNlLmVycm9yfTwvZGl2PmA7XG4gICAgICAgICAgdXBkYXRlSXRlbVN0YXR1cygnc2VjdXJpdHktaGVhZGVycycsICdlcnJvcicpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmVzdWx0c0NvbnRhaW5lci5pbm5lckhUTUwgPSAnPGgzPlNlY3VyaXR5IEhlYWRlcnMgQW5hbHlzaXM8L2gzPic7XG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSByZXNwb25zZS5oZWFkZXJzO1xuICAgICAgICBcbiAgICAgICAgLy8gSW1wb3J0YW50IHNlY3VyaXR5IGhlYWRlcnMgdG8gY2hlY2tcbiAgICAgICAgY29uc3Qgc2VjdXJpdHlIZWFkZXJzID0gW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdDb250ZW50LVNlY3VyaXR5LVBvbGljeScsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0hlbHBzIHByZXZlbnQgWFNTIGFuZCBkYXRhIGluamVjdGlvbiBhdHRhY2tzJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ1gtQ29udGVudC1UeXBlLU9wdGlvbnMnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdQcmV2ZW50cyBNSU1FIHR5cGUgc25pZmZpbmcnLFxuICAgICAgICAgICAgcmVjb21tZW5kZWQ6ICdub3NuaWZmJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ1gtRnJhbWUtT3B0aW9ucycsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1Byb3RlY3RzIGFnYWluc3QgY2xpY2tqYWNraW5nJyxcbiAgICAgICAgICAgIHJlY29tbWVuZGVkOiAnREVOWSBvciBTQU1FT1JJR0lOJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ1N0cmljdC1UcmFuc3BvcnQtU2VjdXJpdHknLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdFbmZvcmNlcyBIVFRQUyBjb25uZWN0aW9ucycsXG4gICAgICAgICAgICByZWNvbW1lbmRlZDogJ21heC1hZ2U9MzE1MzYwMDA7IGluY2x1ZGVTdWJEb21haW5zJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ1gtWFNTLVByb3RlY3Rpb24nLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdQcm92aWRlcyBYU1MgcHJvdGVjdGlvbiBpbiBvbGRlciBicm93c2VycycsXG4gICAgICAgICAgICByZWNvbW1lbmRlZDogJzE7IG1vZGU9YmxvY2snXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnUmVmZXJyZXItUG9saWN5JyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQ29udHJvbHMgaW5mb3JtYXRpb24gaW4gdGhlIFJlZmVyZXIgaGVhZGVyJyxcbiAgICAgICAgICAgIHJlY29tbWVuZGVkOiAnc3RyaWN0LW9yaWdpbi13aGVuLWNyb3NzLW9yaWdpbidcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdQZXJtaXNzaW9ucy1Qb2xpY3knLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdDb250cm9scyBicm93c2VyIGZlYXR1cmVzIGFuZCBBUElzJyxcbiAgICAgICAgICAgIGFsdGVybmF0ZTogJ0ZlYXR1cmUtUG9saWN5J1xuICAgICAgICAgIH1cbiAgICAgICAgXTtcbiAgICAgICAgXG4gICAgICAgIC8vIENoZWNrIGVhY2ggc2VjdXJpdHkgaGVhZGVyXG4gICAgICAgIGxldCBtaXNzaW5nSGVhZGVycyA9IDA7XG4gICAgICAgIHNlY3VyaXR5SGVhZGVycy5mb3JFYWNoKGhlYWRlciA9PiB7XG4gICAgICAgICAgY29uc3QgaGVhZGVyVmFsdWUgPSBnZXRIZWFkZXJWYWx1ZShoZWFkZXJzLCBoZWFkZXIubmFtZSkgfHwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAoaGVhZGVyLmFsdGVybmF0ZSA/IGdldEhlYWRlclZhbHVlKGhlYWRlcnMsIGhlYWRlci5hbHRlcm5hdGUpIDogbnVsbCk7XG4gICAgICAgICAgXG4gICAgICAgICAgY29uc3Qgc3RhdHVzID0gaGVhZGVyVmFsdWUgPyAnUHJlc2VudCcgOiAnTWlzc2luZyc7XG4gICAgICAgICAgY29uc3QgZGV0YWlscyA9IGhlYWRlclZhbHVlIHx8IFxuICAgICAgICAgICAgICAgICAgICAgICAoaGVhZGVyLnJlY29tbWVuZGVkID8gYFJlY29tbWVuZGVkOiAke2hlYWRlci5yZWNvbW1lbmRlZH1gIDogJ05vdCBpbXBsZW1lbnRlZCcpO1xuICAgICAgICAgIFxuICAgICAgICAgIGlmIChzdGF0dXMgPT09ICdNaXNzaW5nJykgbWlzc2luZ0hlYWRlcnMrKztcbiAgICAgICAgICBcbiAgICAgICAgICBkaXNwbGF5UmVzdWx0KHJlc3VsdHNDb250YWluZXIsIGhlYWRlci5uYW1lLCBzdGF0dXMsIGRldGFpbHMsIGhlYWRlci5kZXNjcmlwdGlvbik7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgLy8gVXBkYXRlIHRoZSBjaGVja2xpc3QgaXRlbSBzdGF0dXMgYmFzZWQgb24gbWlzc2luZyBoZWFkZXJzXG4gICAgICAgIGlmIChtaXNzaW5nSGVhZGVycyA+IDApIHtcbiAgICAgICAgICB1cGRhdGVJdGVtU3RhdHVzKCdzZWN1cml0eS1oZWFkZXJzJywgJ3dhcm5pbmcnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB1cGRhdGVJdGVtU3RhdHVzKCdzZWN1cml0eS1oZWFkZXJzJywgJ3N1Y2Nlc3MnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sIDEwMDApOyAvLyBXYWl0IDEgc2Vjb25kIHRvIGVuc3VyZSBwYWdlIGlzIGxvYWRlZFxuICBcbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGRldGVjdEphdmFTY3JpcHRMaWJyYXJpZXMoKSB7XG4gIGNvbnNvbGUubG9nKCdEZXRlY3RpbmcgSmF2YVNjcmlwdCBsaWJyYXJpZXMuLi4nKTtcbiAgXG4gIC8vIEdldCB0aGUgcmVzdWx0cyBjb250YWluZXIgZm9yIHRoaXMgaXRlbVxuICBjb25zdCByZXN1bHRzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdHMtamF2YXNjcmlwdC1saWJyYXJpZXMnKTtcbiAgaWYgKCFyZXN1bHRzQ29udGFpbmVyKSByZXR1cm4gZmFsc2U7XG4gIFxuICAvLyBTaG93IGxvYWRpbmcgaW5kaWNhdG9yXG4gIHJlc3VsdHNDb250YWluZXIuaW5uZXJIVE1MID0gJzxwPkxvYWRpbmcgSmF2YVNjcmlwdCBsaWJyYXJpZXMgZGF0YS4uLjwvcD4nO1xuICBcbiAgLy8gR2V0IHRoZSBjdXJyZW50IGFjdGl2ZSB0YWJcbiAgY2hyb21lLnRhYnMucXVlcnkoe2FjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZX0sICh0YWJzKSA9PiB7XG4gICAgY29uc3QgY3VycmVudFRhYiA9IHRhYnNbMF07XG4gICAgaWYgKCFjdXJyZW50VGFiIHx8ICFjdXJyZW50VGFiLnVybCkge1xuICAgICAgcmVzdWx0c0NvbnRhaW5lci5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cImVycm9yLW1lc3NhZ2VcIj5DYW5ub3QgYWNjZXNzIGN1cnJlbnQgdGFiIGluZm9ybWF0aW9uPC9kaXY+JztcbiAgICAgIHVwZGF0ZUl0ZW1TdGF0dXMoJ2phdmFzY3JpcHQtbGlicmFyaWVzJywgJ2Vycm9yJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIC8vIENoZWNrIGlmIHdlIGNhbiBhbmFseXplIHRoaXMgVVJMIChtdXN0IGJlIGh0dHAgb3IgaHR0cHMpXG4gICAgY29uc3QgdXJsID0gY3VycmVudFRhYi51cmw7XG4gICAgaWYgKCF1cmwuc3RhcnRzV2l0aCgnaHR0cDovLycpICYmICF1cmwuc3RhcnRzV2l0aCgnaHR0cHM6Ly8nKSkge1xuICAgICAgcmVzdWx0c0NvbnRhaW5lci5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cImVycm9yLW1lc3NhZ2VcIj5DYW4gb25seSBhbmFseXplIEhUVFAvSFRUUFMgcGFnZXM8L2Rpdj4nO1xuICAgICAgdXBkYXRlSXRlbVN0YXR1cygnamF2YXNjcmlwdC1saWJyYXJpZXMnLCAnZXJyb3InKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgLy8gRmV0Y2ggbGlicmFyeSBkYXRhIHVzaW5nIGJhY2tncm91bmQgc2NyaXB0IChuZWVkZWQgZm9yIENPUlMvZXhlY3V0aW9uKVxuICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHthY3Rpb246ICdkZXRlY3RMaWJyYXJpZXMnLCB0YWJJZDogY3VycmVudFRhYi5pZCwgdXJsOiB1cmx9LCAocmVzcG9uc2UpID0+IHtcbiAgICAgIGlmIChyZXNwb25zZS5lcnJvcikge1xuICAgICAgICByZXN1bHRzQ29udGFpbmVyLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwiZXJyb3ItbWVzc2FnZVwiPiR7cmVzcG9uc2UuZXJyb3J9PC9kaXY+YDtcbiAgICAgICAgdXBkYXRlSXRlbVN0YXR1cygnamF2YXNjcmlwdC1saWJyYXJpZXMnLCAnZXJyb3InKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgXG4gICAgICB0cnkge1xuICAgICAgICAvLyBHZXQgdGhlIGxpYnJhcnkgZGF0YSBmcm9tIHRoZSByZXNwb25zZVxuICAgICAgICBjb25zdCBsaWJyYXJpZXMgPSByZXNwb25zZS5saWJyYXJpZXMgYXMgUmVjb3JkPHN0cmluZywgeyBkZXRlY3RlZDogYm9vbGVhbiwgdmVyc2lvbjogc3RyaW5nIHwgbnVsbCB9PjtcbiAgICAgICAgXG4gICAgICAgIC8vIENoZWNrIGlmIGxpYnJhcmllcyBpcyB1bmRlZmluZWQgb3Igbm90IGFuIG9iamVjdFxuICAgICAgICBpZiAoIWxpYnJhcmllcyB8fCB0eXBlb2YgbGlicmFyaWVzICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHJlc3VsdHNDb250YWluZXIuaW5uZXJIVE1MID0gJzxkaXYgY2xhc3M9XCJlcnJvci1tZXNzYWdlXCI+SW52YWxpZCByZXN1bHQgZnJvbSBkZXRlY3Rpb24gc2NyaXB0PC9kaXY+JztcbiAgICAgICAgICB1cGRhdGVJdGVtU3RhdHVzKCdqYXZhc2NyaXB0LWxpYnJhcmllcycsICdlcnJvcicpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmVzdWx0c0NvbnRhaW5lci5pbm5lckhUTUwgPSAnPGgzPkphdmFTY3JpcHQgTGlicmFyaWVzPC9oMz4nO1xuICAgICAgICBcbiAgICAgICAgbGV0IGRldGVjdGVkQ291bnQgPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IFtsaWJyYXJ5LCBpbmZvXSBvZiBPYmplY3QuZW50cmllcyhsaWJyYXJpZXMpKSB7XG4gICAgICAgICAgY29uc3Qgc3RhdHVzID0gaW5mby5kZXRlY3RlZCA/ICdQcmVzZW50JyA6ICdNaXNzaW5nJztcbiAgICAgICAgICBsZXQgZGV0YWlscyA9ICcnO1xuICAgICAgICAgIFxuICAgICAgICAgIGlmIChpbmZvLmRldGVjdGVkKSB7XG4gICAgICAgICAgICBkZXRlY3RlZENvdW50Kys7XG4gICAgICAgICAgICBkZXRhaWxzID0gaW5mby52ZXJzaW9uID8gYFZlcnNpb246ICR7aW5mby52ZXJzaW9ufWAgOiAnVmVyc2lvbjogdW5rbm93bic7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIGRpc3BsYXlSZXN1bHQoXG4gICAgICAgICAgICByZXN1bHRzQ29udGFpbmVyLCBcbiAgICAgICAgICAgIGxpYnJhcnksIFxuICAgICAgICAgICAgc3RhdHVzLCBcbiAgICAgICAgICAgIGRldGFpbHMsIFxuICAgICAgICAgICAgYCR7bGlicmFyeX0gSmF2YVNjcmlwdCBmcmFtZXdvcmsvbGlicmFyeWBcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBJZiBubyBsaWJyYXJpZXMgd2VyZSBkZXRlY3RlZCwgYWRkIGEgbWVzc2FnZVxuICAgICAgICBpZiAoZGV0ZWN0ZWRDb3VudCA9PT0gMCkge1xuICAgICAgICAgIGNvbnN0IG5vTGlicmFyaWVzTXNnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgbm9MaWJyYXJpZXNNc2cuY2xhc3NOYW1lID0gJ2luZm8tbWVzc2FnZSc7XG4gICAgICAgICAgbm9MaWJyYXJpZXNNc2cudGV4dENvbnRlbnQgPSAnTm8gY29tbW9uIEphdmFTY3JpcHQgbGlicmFyaWVzIGRldGVjdGVkLiBUaGUgcGFnZSBtYXkgYmUgdXNpbmcgdmFuaWxsYSBKYXZhU2NyaXB0IG9yIGxlc3MgY29tbW9uIGxpYnJhcmllcy4nO1xuICAgICAgICAgIHJlc3VsdHNDb250YWluZXIuYXBwZW5kQ2hpbGQobm9MaWJyYXJpZXNNc2cpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBTZXQgc3RhdHVzOiB3YXJuaW5nIGlmIG5vIGxpYnJhcmllcyBkZXRlY3RlZCwgc3VjY2VzcyBvdGhlcndpc2VcbiAgICAgICAgdXBkYXRlSXRlbVN0YXR1cygnamF2YXNjcmlwdC1saWJyYXJpZXMnLCBkZXRlY3RlZENvdW50ID4gMCA/ICdzdWNjZXNzJyA6ICd3YXJuaW5nJyk7XG4gICAgICB9IGNhdGNoIChlcnI6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBwcm9jZXNzaW5nIGxpYnJhcnkgZGV0ZWN0aW9uIHJlc3VsdHM6JywgZXJyKTtcbiAgICAgICAgcmVzdWx0c0NvbnRhaW5lci5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cImVycm9yLW1lc3NhZ2VcIj5FcnJvciBwcm9jZXNzaW5nIHJlc3VsdHM6ICR7ZXJyLm1lc3NhZ2UgfHwgJ1Vua25vd24gZXJyb3InfTwvZGl2PmA7XG4gICAgICAgIHVwZGF0ZUl0ZW1TdGF0dXMoJ2phdmFzY3JpcHQtbGlicmFyaWVzJywgJ2Vycm9yJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuICBcbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGlkZW50aWZ5QW5hbHl0aWNzVG9vbHMoKSB7XG4gIGNvbnNvbGUubG9nKCdJZGVudGlmeWluZyBhbmFseXRpY3MgdG9vbHMuLi4nKTtcbiAgLy8gR2V0IHRoZSByZXN1bHRzIGNvbnRhaW5lciBmb3IgdGhpcyBpdGVtXG4gIGNvbnN0IHJlc3VsdHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0cy1hbmFseXRpY3MnKTtcbiAgaWYgKCFyZXN1bHRzQ29udGFpbmVyKSByZXR1cm4gZmFsc2U7XG4gIFxuICAvLyBTaG93IGxvYWRpbmcgaW5kaWNhdG9yXG4gIHJlc3VsdHNDb250YWluZXIuaW5uZXJIVE1MID0gJzxwPkxvYWRpbmcgYW5hbHl0aWNzIGRhdGEuLi48L3A+JztcbiAgXG4gIC8vIEdldCB0aGUgY3VycmVudCBhY3RpdmUgdGFiXG4gIGNocm9tZS50YWJzLnF1ZXJ5KHthY3RpdmU6IHRydWUsIGN1cnJlbnRXaW5kb3c6IHRydWV9LCAodGFicykgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRUYWIgPSB0YWJzWzBdO1xuICAgIGlmICghY3VycmVudFRhYiB8fCAhY3VycmVudFRhYi51cmwpIHtcbiAgICAgIHJlc3VsdHNDb250YWluZXIuaW5uZXJIVE1MID0gJzxkaXYgY2xhc3M9XCJlcnJvci1tZXNzYWdlXCI+Q2Fubm90IGFjY2VzcyBjdXJyZW50IHRhYiBpbmZvcm1hdGlvbjwvZGl2Pic7XG4gICAgICB1cGRhdGVJdGVtU3RhdHVzKCdhbmFseXRpY3MnLCAnZXJyb3InKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgLy8gQ2hlY2sgaWYgd2UgY2FuIGFuYWx5emUgdGhpcyBVUkwgKG11c3QgYmUgaHR0cCBvciBodHRwcylcbiAgICBjb25zdCB1cmwgPSBjdXJyZW50VGFiLnVybDtcbiAgICBpZiAoIXVybC5zdGFydHNXaXRoKCdodHRwOi8vJykgJiYgIXVybC5zdGFydHNXaXRoKCdodHRwczovLycpKSB7XG4gICAgICByZXN1bHRzQ29udGFpbmVyLmlubmVySFRNTCA9ICc8ZGl2IGNsYXNzPVwiZXJyb3ItbWVzc2FnZVwiPkNhbiBvbmx5IGFuYWx5emUgSFRUUC9IVFRQUyBwYWdlczwvZGl2Pic7XG4gICAgICB1cGRhdGVJdGVtU3RhdHVzKCdhbmFseXRpY3MnLCAnZXJyb3InKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgLy8gRXhlY3V0ZSBzY3JpcHQgaW4gdGhlIGN1cnJlbnQgdGFiIHRvIGRldGVjdCBhbmFseXRpY3MgdG9vbHNcbiAgICBjaHJvbWUuc2NyaXB0aW5nLmV4ZWN1dGVTY3JpcHQoe1xuICAgICAgdGFyZ2V0OiB7IHRhYklkOiBjdXJyZW50VGFiLmlkIGFzIG51bWJlciB9LFxuICAgICAgZnVuYzogKCkgPT4ge1xuICAgICAgICAvLyBUeXBlcyBmb3IgZ2xvYmFsIGFuYWx5dGljcyB0b29sc1xuICAgICAgICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICAgICAgICBnYT86IGFueTtcbiAgICAgICAgICBfZ2E/OiBhbnk7XG4gICAgICAgICAgZ3RhZz86IGFueTtcbiAgICAgICAgICBkYXRhTGF5ZXI/OiBhbnk7XG4gICAgICAgICAgX2dhcT86IGFueTtcbiAgICAgICAgICBHb29nbGVBbmFseXRpY3NPYmplY3Q/OiBhbnk7XG4gICAgICAgICAgZmJxPzogYW55O1xuICAgICAgICAgIF9mYnE/OiBhbnk7XG4gICAgICAgICAgRkI/OiBhbnk7XG4gICAgICAgICAgX2hqU2V0dGluZ3M/OiBhbnk7XG4gICAgICAgICAgaGo/OiBhbnk7XG4gICAgICAgICAgaGVhcD86IGFueTtcbiAgICAgICAgICBfaHNxPzogYW55O1xuICAgICAgICAgIG1peHBhbmVsPzogYW55O1xuICAgICAgICAgIGFtcGxpdHVkZT86IGFueTtcbiAgICAgICAgICBydWRkZXJhbmFseXRpY3M/OiBhbnk7XG4gICAgICAgICAgX3BhcT86IGFueTtcbiAgICAgICAgICBJbnRlcmNvbT86IGFueTtcbiAgICAgICAgICBfa21xPzogYW55O1xuICAgICAgICAgIGFob3k/OiBhbnk7XG4gICAgICAgICAgc2VnbWVudD86IGFueTtcbiAgICAgICAgICBhbmFseXRpY3M/OiBhbnk7XG4gICAgICAgICAgX210bT86IGFueTtcbiAgICAgICAgICB6YXJhej86IGFueTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gRGVmaW5lIGFuYWx5dGljcyB0b29sIGRldGVjdGlvbiBmdW5jdGlvbnNcbiAgICAgICAgY29uc3QgYW5hbHl0aWNzRGV0ZWN0b3JzID0ge1xuICAgICAgICAgICdHb29nbGUgQW5hbHl0aWNzIChVbml2ZXJzYWwpJzogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICEhKFxuICAgICAgICAgICAgICAod2luZG93IGFzIFdpbmRvdykuZ2EgfHwgXG4gICAgICAgICAgICAgICh3aW5kb3cgYXMgV2luZG93KS5fZ2EgfHwgXG4gICAgICAgICAgICAgICh3aW5kb3cgYXMgV2luZG93KS5Hb29nbGVBbmFseXRpY3NPYmplY3QgfHxcbiAgICAgICAgICAgICAgKHR5cGVvZiAod2luZG93IGFzIGFueSkuX2dhdCAhPT0gJ3VuZGVmaW5lZCcpIHx8XG4gICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NjcmlwdFtzcmMqPVwiZ29vZ2xlLWFuYWx5dGljcy5jb20vYW5hbHl0aWNzLmpzXCJdJylcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICAnR29vZ2xlIEFuYWx5dGljcyA0JzogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICEhKFxuICAgICAgICAgICAgICAod2luZG93IGFzIFdpbmRvdykuZ3RhZyB8fCBcbiAgICAgICAgICAgICAgKHdpbmRvdyBhcyBXaW5kb3cpLmRhdGFMYXllciB8fFxuICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzY3JpcHRbc3JjKj1cImdvb2dsZXRhZ21hbmFnZXIuY29tL2d0YWcvanNcIl0nKSB8fFxuICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzY3JpcHRbc3JjKj1cImdvb2dsZS1hbmFseXRpY3MuY29tL2cvY29sbGVjdFwiXScpXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgJ0dvb2dsZSBBbmFseXRpY3MgKExlZ2FjeSknOiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gISEoXG4gICAgICAgICAgICAgICh3aW5kb3cgYXMgV2luZG93KS5fZ2FxIHx8XG4gICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NjcmlwdFtzcmMqPVwiZ29vZ2xlLWFuYWx5dGljcy5jb20vZ2EuanNcIl0nKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgICdGYWNlYm9vayBQaXhlbCc6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAhIShcbiAgICAgICAgICAgICAgKHdpbmRvdyBhcyBXaW5kb3cpLmZicSB8fCBcbiAgICAgICAgICAgICAgKHdpbmRvdyBhcyBXaW5kb3cpLl9mYnEgfHxcbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2NyaXB0W3NyYyo9XCJjb25uZWN0LmZhY2Vib29rLm5ldC9lbl9VUy9mYmV2ZW50cy5qc1wiXScpIHx8XG4gICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ25vc2NyaXB0W3NyYyo9XCJmYWNlYm9vay5jb20vdHJcIl0nKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgICdIb3RqYXInOiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gISEoXG4gICAgICAgICAgICAgICh3aW5kb3cgYXMgV2luZG93KS5faGpTZXR0aW5ncyB8fCBcbiAgICAgICAgICAgICAgKHdpbmRvdyBhcyBXaW5kb3cpLmhqIHx8XG4gICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NjcmlwdFtzcmMqPVwic3RhdGljLmhvdGphci5jb21cIl0nKSB8fFxuICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzY3JpcHRbc3JjKj1cInNjcmlwdC5ob3RqYXIuY29tXCJdJylcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICAnU2VnbWVudCc6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAhIShcbiAgICAgICAgICAgICAgKHdpbmRvdyBhcyBXaW5kb3cpLmFuYWx5dGljcyB8fCBcbiAgICAgICAgICAgICAgKHdpbmRvdyBhcyBXaW5kb3cpLnNlZ21lbnQgfHxcbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2NyaXB0W3NyYyo9XCJjZG4uc2VnbWVudC5jb20vYW5hbHl0aWNzLmpzXCJdJylcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICAnTWl4cGFuZWwnOiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gISEoXG4gICAgICAgICAgICAgICh3aW5kb3cgYXMgV2luZG93KS5taXhwYW5lbCB8fFxuICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzY3JpcHRbc3JjKj1cImNkbi5teHBubC5jb20vbGlicy9taXhwYW5lbFwiXScpXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgJ0FtcGxpdHVkZSc6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAhIShcbiAgICAgICAgICAgICAgKHdpbmRvdyBhcyBXaW5kb3cpLmFtcGxpdHVkZSB8fFxuICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzY3JpcHRbc3JjKj1cImNkbi5hbXBsaXR1ZGUuY29tXCJdJylcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICAnSHViU3BvdCc6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAhIShcbiAgICAgICAgICAgICAgKHdpbmRvdyBhcyBXaW5kb3cpLl9oc3EgfHxcbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2NyaXB0W3NyYyo9XCJqcy5ocy1zY3JpcHRzLmNvbVwiXScpIHx8XG4gICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NjcmlwdFtzcmMqPVwianMuaHVic3BvdC5jb21cIl0nKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgICdIZWFwJzogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICEhKFxuICAgICAgICAgICAgICAod2luZG93IGFzIFdpbmRvdykuaGVhcCB8fFxuICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzY3JpcHRbc3JjKj1cImNkbi5oZWFwYW5hbHl0aWNzLmNvbVwiXScpXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgJ01hdG9tby9QaXdpayc6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAhIShcbiAgICAgICAgICAgICAgKHdpbmRvdyBhcyBXaW5kb3cpLl9wYXEgfHxcbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2NyaXB0W3NyYyo9XCJtYXRvbW8uanNcIl0nKSB8fFxuICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzY3JpcHRbc3JjKj1cInBpd2lrLmpzXCJdJylcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICAnSW50ZXJjb20nOiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gISEoXG4gICAgICAgICAgICAgICh3aW5kb3cgYXMgV2luZG93KS5JbnRlcmNvbSB8fFxuICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzY3JpcHRbc3JjKj1cIndpZGdldC5pbnRlcmNvbS5pb1wiXScpIHx8XG4gICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NjcmlwdFtzcmMqPVwiYXBwLmludGVyY29tLmlvXCJdJylcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICAnS2lzc21ldHJpY3MnOiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gISEoXG4gICAgICAgICAgICAgICh3aW5kb3cgYXMgV2luZG93KS5fa21xIHx8XG4gICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NjcmlwdFtzcmMqPVwic2NyaXB0cy5raXNzbWV0cmljcy5jb21cIl0nKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgICdBaG95JzogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICEhKFxuICAgICAgICAgICAgICAod2luZG93IGFzIFdpbmRvdykuYWhveVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgICdSdWRkZXJTdGFjayc6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAhIShcbiAgICAgICAgICAgICAgKHdpbmRvdyBhcyBXaW5kb3cpLnJ1ZGRlcmFuYWx5dGljcyB8fFxuICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzY3JpcHRbc3JjKj1cImNkbi5ydWRkZXJsYWJzLmNvbVwiXScpXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgJ01hdG9tbyBUYWcgTWFuYWdlcic6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAhIShcbiAgICAgICAgICAgICAgKHdpbmRvdyBhcyBXaW5kb3cpLl9tdG0gfHxcbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2NyaXB0W3NyYyo9XCJtYXRvbW8uanNcIl0nKSB8fFxuICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzY3JpcHRbc3JjKj1cIm1hdG9tby10YWctbWFuYWdlclwiXScpXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgJ0Nsb3VkZmxhcmUgWmFyYXonOiAoKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAvLyBDaGVjayBmb3IgZGlyZWN0IGdsb2JhbCBvYmplY3RcbiAgICAgICAgICAgICAgaWYgKCh3aW5kb3cgYXMgV2luZG93KS56YXJheikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAvLyBDaGVjayBmb3Igc2NyaXB0IHRhZ1xuICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2NyaXB0I3phcmF6JykgfHwgXG4gICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzY3JpcHRbc3JjKj1cImNkbi1jZ2kvemFyYXpcIl0nKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAvLyBDaGVjayBmb3IgemFyYXogY29uZmlnIG9iamVjdFxuICAgICAgICAgICAgICBpZiAoKHdpbmRvdyBhcyBhbnkpLnphcmF6RGF0YSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAvLyBDaGVjayBmb3IgbWV0YSB0YWdzXG4gICAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW2h0dHAtZXF1aXY9XCJvcmlnaW4tdHJpYWxcIl1bY29udGVudCo9XCJ6YXJhelwiXScpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC8vIENoZWNrIGZvciBpbmxpbmUgc2NyaXB0cyBjb250YWluaW5nIHphcmF6IHdpdGhvdXQgdXNpbmcgc2NyaXB0IGluamVjdGlvblxuICAgICAgICAgICAgICBjb25zdCBhbGxTY3JpcHRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzY3JpcHQ6bm90KFtzcmNdKScpKTtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC8vIExvb2sgZm9yIHphcmF6IGluIHNjcmlwdCBjb250ZW50XG4gICAgICAgICAgICAgIGNvbnN0IGhhc1phcmF6SW5JbmxpbmVTY3JpcHQgPSBhbGxTY3JpcHRzLnNvbWUoc2NyaXB0ID0+IFxuICAgICAgICAgICAgICAgIHNjcmlwdC50ZXh0Q29udGVudCAmJiBzY3JpcHQudGV4dENvbnRlbnQuaW5jbHVkZXMoJ3phcmF6JylcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIGlmIChoYXNaYXJhekluSW5saW5lU2NyaXB0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC8vIENoZWNrIGZvciB6YXJheiBwcm9wZXJ0aWVzIHdpdGhvdXQgdXNpbmcgZXZhbC9pbmxpbmUgc2NyaXB0c1xuICAgICAgICAgICAgICAvLyBMb29rIGZvciBjb21tb24gemFyYXogcHJvcGVydHkgcGF0dGVybnNcbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAvLyBVc2UgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSB0byBzYWZlbHkgY2hlY2sgd2luZG93IHByb3BlcnRpZXNcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB3aW5kb3cpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChrZXkgPT09ICd6YXJheicgfHwga2V5LmluY2x1ZGVzKCd6YXJheicpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiB6YXJheiBpcyBhdmFpbGFibGUgaW4gYW55IGZvcm0gb24gd2luZG93XG4gICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiAod2luZG93IGFzIGFueSkuemFyYXogIT09ICd1bmRlZmluZWQnO1xuICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBjaGVja2luZyB3aW5kb3cgcHJvcGVydGllczpcIiwgZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZGV0ZWN0aW5nIENsb3VkZmxhcmUgWmFyYXo6JywgZSk7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gY2hlY2sgZm9yIEdvb2dsZSBUYWcgTWFuYWdlclxuICAgICAgICBmdW5jdGlvbiBkZXRlY3RHb29nbGVUYWdNYW5hZ2VyKCkge1xuICAgICAgICAgIHJldHVybiAhIShcbiAgICAgICAgICAgICh3aW5kb3cgYXMgV2luZG93KS5kYXRhTGF5ZXIgJiYgXG4gICAgICAgICAgICB0eXBlb2YgKHdpbmRvdyBhcyBXaW5kb3cpLmRhdGFMYXllci5wdXNoID09PSAnZnVuY3Rpb24nIHx8XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzY3JpcHRbc3JjKj1cImdvb2dsZXRhZ21hbmFnZXIuY29tL2d0bS5qc1wiXScpIHx8XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdub3NjcmlwdCBpZnJhbWVbc3JjKj1cImdvb2dsZXRhZ21hbmFnZXIuY29tL25zLmh0bWxcIl0nKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIEhlbHBlciBmdW5jdGlvbiB0byB3YWl0IGZvciBwYWdlIHRvIGJlIGZ1bGx5IGxvYWRlZFxuICAgICAgICBjb25zdCB3YWl0Rm9yUGFnZUxvYWQgPSAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScpIHtcbiAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHJlc29sdmUoKSwgeyBvbmNlOiB0cnVlIH0pO1xuICAgICAgICAgICAgc2V0VGltZW91dChyZXNvbHZlLCAzMDAwKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIC8vIFVzZSBQcm9taXNlIGluc3RlYWQgb2YgYXN5bmMvYXdhaXRcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgIHdhaXRGb3JQYWdlTG9hZCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIC8vIENoZWNrIGZvciBHb29nbGUgVGFnIE1hbmFnZXIgZmlyc3RcbiAgICAgICAgICAgICAgY29uc3QgaGFzR1RNID0gZGV0ZWN0R29vZ2xlVGFnTWFuYWdlcigpO1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLy8gUnVuIGFsbCB0aGUgZGV0ZWN0b3JzXG4gICAgICAgICAgICAgIGNvbnN0IHJlc3VsdHM6IFJlY29yZDxzdHJpbmcsIGJvb2xlYW4+ID0ge307XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAvLyBBZGQgR1RNIHJlc3VsdCBzZXBhcmF0ZWx5XG4gICAgICAgICAgICAgIHJlc3VsdHNbJ0dvb2dsZSBUYWcgTWFuYWdlciddID0gaGFzR1RNO1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLy8gUnVuIGFsbCBvdGhlciBkZXRlY3RvciBmdW5jdGlvbnNcbiAgICAgICAgICAgICAgZm9yIChjb25zdCBbdG9vbCwgZGV0ZWN0b3JdIG9mIE9iamVjdC5lbnRyaWVzKGFuYWx5dGljc0RldGVjdG9ycykpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgcmVzdWx0c1t0b29sXSA9IGRldGVjdG9yKCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgZGV0ZWN0aW5nICR7dG9vbH06YCwgZSk7XG4gICAgICAgICAgICAgICAgICByZXN1bHRzW3Rvb2xdID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAvLyBMb29rIGZvciBhZGRpdGlvbmFsIGFuYWx5dGljcyByZWxhdGVkIHNjcmlwdHNcbiAgICAgICAgICAgICAgY29uc3QgYWxsU2NyaXB0cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2NyaXB0W3NyY10nKSk7XG4gICAgICAgICAgICAgIGNvbnN0IHNjcmlwdFNvdXJjZXMgPSBhbGxTY3JpcHRzLm1hcChzY3JpcHQgPT4gc2NyaXB0LmdldEF0dHJpYnV0ZSgnc3JjJykgfHwgJycpO1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLy8gQ2hlY2sgZm9yIG90aGVyIGNvbW1vbiBhbmFseXRpY3MgcGF0dGVybnMgaW4gc2NyaXB0IHNvdXJjZXNcbiAgICAgICAgICAgICAgaWYgKHNjcmlwdFNvdXJjZXMuc29tZShzcmMgPT4gc3JjLmluY2x1ZGVzKCdhbmFseXRpY3MnKSAmJiAhc3JjLmluY2x1ZGVzKCdnb29nbGUtYW5hbHl0aWNzJykpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0c1snT3RoZXIgQW5hbHl0aWNzIFNjcmlwdCddID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLy8gUmV0dXJuIHRoZSByZXN1bHRzXG4gICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0cyk7XG4gICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBpbiBwYWdlIGxvYWQgd2FpdGluZzpcIiwgZXJyb3IpO1xuICAgICAgICAgICAgcmVzb2x2ZSh7IGVycm9yOiBlcnJvci5tZXNzYWdlIHx8IFwiRXJyb3Igd2FpdGluZyBmb3IgcGFnZSBsb2FkXCIgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pXG4gICAgLnRoZW4oaW5qZWN0aW9uUmVzdWx0cyA9PiB7XG4gICAgICBpZiAoIWluamVjdGlvblJlc3VsdHMgfHwgaW5qZWN0aW9uUmVzdWx0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmVzdWx0c0NvbnRhaW5lci5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cImVycm9yLW1lc3NhZ2VcIj5GYWlsZWQgdG8gaW5qZWN0IGRldGVjdGlvbiBzY3JpcHQ8L2Rpdj4nO1xuICAgICAgICB1cGRhdGVJdGVtU3RhdHVzKCdhbmFseXRpY3MnLCAnZXJyb3InKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBpbmplY3Rpb25SZXN1bHRzWzBdLnJlc3VsdDtcbiAgICAgICAgXG4gICAgICAgIC8vIENoZWNrIGlmIHRoZXJlIHdhcyBhbiBlcnJvciBpbiB0aGUgZGV0ZWN0aW9uIHNjcmlwdFxuICAgICAgICBpZiAocmVzdWx0ICYmIHR5cGVvZiByZXN1bHQgPT09ICdvYmplY3QnICYmICdlcnJvcicgaW4gcmVzdWx0KSB7XG4gICAgICAgICAgcmVzdWx0c0NvbnRhaW5lci5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cImVycm9yLW1lc3NhZ2VcIj5FcnJvciBpbiBkZXRlY3Rpb24gc2NyaXB0OiAke3Jlc3VsdC5lcnJvcn08L2Rpdj5gO1xuICAgICAgICAgIHVwZGF0ZUl0ZW1TdGF0dXMoJ2FuYWx5dGljcycsICdlcnJvcicpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gQ2FzdCB0byB0aGUgZXhwZWN0ZWQgdHlwZVxuICAgICAgICBjb25zdCBhbmFseXRpY3NUb29scyA9IHJlc3VsdCBhcyBSZWNvcmQ8c3RyaW5nLCBib29sZWFuPjtcbiAgICAgICAgXG4gICAgICAgIC8vIENoZWNrIGlmIGFuYWx5dGljc1Rvb2xzIGlzIHVuZGVmaW5lZCBvciBub3QgYW4gb2JqZWN0XG4gICAgICAgIGlmICghYW5hbHl0aWNzVG9vbHMgfHwgdHlwZW9mIGFuYWx5dGljc1Rvb2xzICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHJlc3VsdHNDb250YWluZXIuaW5uZXJIVE1MID0gJzxkaXYgY2xhc3M9XCJlcnJvci1tZXNzYWdlXCI+SW52YWxpZCByZXN1bHQgZnJvbSBkZXRlY3Rpb24gc2NyaXB0PC9kaXY+JztcbiAgICAgICAgICB1cGRhdGVJdGVtU3RhdHVzKCdhbmFseXRpY3MnLCAnZXJyb3InKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJlc3VsdHNDb250YWluZXIuaW5uZXJIVE1MID0gJzxoMz5BbmFseXRpY3MgJiBUcmFja2luZyBUb29sczwvaDM+JztcbiAgICAgICAgXG4gICAgICAgIGxldCBkZXRlY3RlZENvdW50ID0gMDtcbiAgICAgICAgZm9yIChjb25zdCBbdG9vbCwgZGV0ZWN0ZWRdIG9mIE9iamVjdC5lbnRyaWVzKGFuYWx5dGljc1Rvb2xzKSkge1xuICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IGRldGVjdGVkID8gJ1ByZXNlbnQnIDogJ01pc3NpbmcnO1xuICAgICAgICAgIFxuICAgICAgICAgIGlmIChkZXRlY3RlZCkge1xuICAgICAgICAgICAgZGV0ZWN0ZWRDb3VudCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGdldEFuYWx5dGljc1Rvb2xEZXNjcmlwdGlvbih0b29sKTtcbiAgICAgICAgICBcbiAgICAgICAgICBkaXNwbGF5UmVzdWx0KFxuICAgICAgICAgICAgcmVzdWx0c0NvbnRhaW5lciwgXG4gICAgICAgICAgICB0b29sLCBcbiAgICAgICAgICAgIHN0YXR1cywgXG4gICAgICAgICAgICAnJywgLy8gTm8gdmVyc2lvbiBpbmZvIGZvciBhbmFseXRpY3MgdG9vbHNcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gSWYgbm8gdG9vbHMgd2VyZSBkZXRlY3RlZCwgYWRkIGEgbWVzc2FnZVxuICAgICAgICBpZiAoZGV0ZWN0ZWRDb3VudCA9PT0gMCkge1xuICAgICAgICAgIGNvbnN0IG5vVG9vbHNNc2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICBub1Rvb2xzTXNnLmNsYXNzTmFtZSA9ICdpbmZvLW1lc3NhZ2UnO1xuICAgICAgICAgIG5vVG9vbHNNc2cudGV4dENvbnRlbnQgPSAnTm8gY29tbW9uIGFuYWx5dGljcyBvciB0cmFja2luZyB0b29scyBkZXRlY3RlZC4gVGhlIHNpdGUgbWF5IGJlIHVzaW5nIGN1c3RvbSBhbmFseXRpY3Mgb3IgcHJpdmFjeS1mb2N1c2VkIGFsdGVybmF0aXZlcy4nO1xuICAgICAgICAgIHJlc3VsdHNDb250YWluZXIuYXBwZW5kQ2hpbGQobm9Ub29sc01zZyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIFNldCBzdGF0dXM6IHdhcm5pbmcgaWYgdG9vbHMgZGV0ZWN0ZWQgKHByaXZhY3kgaW1wbGljYXRpb25zKSwgc3VjY2VzcyBvdGhlcndpc2VcbiAgICAgICAgdXBkYXRlSXRlbVN0YXR1cygnYW5hbHl0aWNzJywgZGV0ZWN0ZWRDb3VudCA+IDAgPyAnd2FybmluZycgOiAnc3VjY2VzcycpO1xuICAgICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgcHJvY2Vzc2luZyBhbmFseXRpY3MgZGV0ZWN0aW9uIHJlc3VsdHM6JywgZXJyKTtcbiAgICAgICAgcmVzdWx0c0NvbnRhaW5lci5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cImVycm9yLW1lc3NhZ2VcIj5FcnJvciBwcm9jZXNzaW5nIHJlc3VsdHM6ICR7ZXJyLm1lc3NhZ2UgfHwgJ1Vua25vd24gZXJyb3InfTwvZGl2PmA7XG4gICAgICAgIHVwZGF0ZUl0ZW1TdGF0dXMoJ2FuYWx5dGljcycsICdlcnJvcicpO1xuICAgICAgfVxuICAgIH0pXG4gICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0FuYWx5dGljcyBkZXRlY3Rpb24gZXJyb3I6JywgZXJyb3IpO1xuICAgICAgcmVzdWx0c0NvbnRhaW5lci5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cImVycm9yLW1lc3NhZ2VcIj5FcnJvciBkZXRlY3RpbmcgYW5hbHl0aWNzIHRvb2xzOiAke2Vycm9yLm1lc3NhZ2V9PC9kaXY+YDtcbiAgICAgIHVwZGF0ZUl0ZW1TdGF0dXMoJ2FuYWx5dGljcycsICdlcnJvcicpO1xuICAgIH0pO1xuICB9KTtcbiAgXG4gIHJldHVybiB0cnVlO1xufVxuXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gZ2V0IGRlc2NyaXB0aW9ucyBmb3IgYW5hbHl0aWNzIHRvb2xzXG5mdW5jdGlvbiBnZXRBbmFseXRpY3NUb29sRGVzY3JpcHRpb24odG9vbDogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgZGVzY3JpcHRpb25zOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICAgICdHb29nbGUgQW5hbHl0aWNzIChVbml2ZXJzYWwpJzogJ1RyYWRpdGlvbmFsIHdlYiBhbmFseXRpY3Mgc2VydmljZSBmcm9tIEdvb2dsZScsXG4gICAgJ0dvb2dsZSBBbmFseXRpY3MgNCc6ICdOZXh0LWdlbmVyYXRpb24gYW5hbHl0aWNzIHNlcnZpY2UgZnJvbSBHb29nbGUnLFxuICAgICdHb29nbGUgQW5hbHl0aWNzIChMZWdhY3kpJzogJ09sZGVyIHZlcnNpb24gb2YgR29vZ2xlIEFuYWx5dGljcycsXG4gICAgJ0dvb2dsZSBUYWcgTWFuYWdlcic6ICdDb250YWluZXIgZm9yIG1hbmFnaW5nIG1hcmtldGluZyBhbmQgdHJhY2tpbmcgdGFncycsXG4gICAgJ0ZhY2Vib29rIFBpeGVsJzogJ0ZhY2Vib29rL01ldGEgdHJhY2tpbmcgdG9vbCBmb3IgYWR2ZXJ0aXNpbmcnLFxuICAgICdIb3RqYXInOiAnSGVhdG1hcHMsIHNlc3Npb24gcmVjb3JkaW5ncywgYW5kIGZlZWRiYWNrIHRvb2xzJyxcbiAgICAnU2VnbWVudCc6ICdDdXN0b21lciBkYXRhIHBsYXRmb3JtIGZvciBjb2xsZWN0aW5nIGFuYWx5dGljcycsXG4gICAgJ01peHBhbmVsJzogJ1Byb2R1Y3QgYW5hbHl0aWNzIHBsYXRmb3JtJyxcbiAgICAnQW1wbGl0dWRlJzogJ1Byb2R1Y3QgYW5hbHl0aWNzIGZvciBkaWdpdGFsIG9wdGltaXphdGlvbicsXG4gICAgJ0h1YlNwb3QnOiAnTWFya2V0aW5nLCBzYWxlcywgYW5kIHNlcnZpY2UgcGxhdGZvcm0nLFxuICAgICdIZWFwJzogJ0F1dG9tYXRpYyBldmVudCBjYXB0dXJlIGFuYWx5dGljcyBwbGF0Zm9ybScsXG4gICAgJ01hdG9tby9QaXdpayc6ICdPcGVuLXNvdXJjZSBhbmFseXRpY3MgcGxhdGZvcm0nLFxuICAgICdJbnRlcmNvbSc6ICdDdXN0b21lciBtZXNzYWdpbmcgcGxhdGZvcm0nLFxuICAgICdLaXNzbWV0cmljcyc6ICdDdXN0b21lciBhbmFseXRpY3MgcGxhdGZvcm0nLFxuICAgICdBaG95JzogJ1NpbXBsZSwgcG93ZXJmdWwgYW5hbHl0aWNzIGZvciBSYWlscycsXG4gICAgJ1J1ZGRlclN0YWNrJzogJ0N1c3RvbWVyIGRhdGEgcGxhdGZvcm0nLFxuICAgICdNYXRvbW8gVGFnIE1hbmFnZXInOiAnVGFnIG1hbmFnZW1lbnQgZm9yIE1hdG9tbycsXG4gICAgJ0Nsb3VkZmxhcmUgWmFyYXonOiAnU2VydmVyLXNpZGUgdGhpcmQtcGFydHkgdG9vbCBtYW5hZ2VyIGJ5IENsb3VkZmxhcmUnLFxuICAgICdPdGhlciBBbmFseXRpY3MgU2NyaXB0JzogJ1VuaWRlbnRpZmllZCBhbmFseXRpY3Mgb3IgdHJhY2tpbmcgc2NyaXB0J1xuICB9O1xuICBcbiAgcmV0dXJuIGRlc2NyaXB0aW9uc1t0b29sXSB8fCAnQW5hbHl0aWNzIG9yIHRyYWNraW5nIHRvb2wnO1xufVxuXG4vLyBUb2dnbGUgdmlzaWJpbGl0eSBvZiByZXN1bHRzIGNvbnRhaW5lclxuZnVuY3Rpb24gdG9nZ2xlUmVzdWx0c1Zpc2liaWxpdHkoY29udGFpbmVyOiBIVE1MRWxlbWVudCkge1xuICBpZiAoY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygndmlzaWJsZScpKSB7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbiAgICBjb250YWluZXIuc3R5bGUubWF4SGVpZ2h0ID0gJzBweCc7XG4gIH0gZWxzZSB7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgICBjb250YWluZXIuc3R5bGUubWF4SGVpZ2h0ID0gY29udGFpbmVyLnNjcm9sbEhlaWdodCArICdweCc7XG4gICAgXG4gICAgLy8gVXBkYXRlIG1heCBoZWlnaHQgb24gY29udGVudCBjaGFuZ2VzXG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XG4gICAgICBpZiAoY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygndmlzaWJsZScpKSB7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5tYXhIZWlnaHQgPSBjb250YWluZXIuc2Nyb2xsSGVpZ2h0ICsgJ3B4JztcbiAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICBvYnNlcnZlci5vYnNlcnZlKGNvbnRhaW5lciwgeyBcbiAgICAgIGNoaWxkTGlzdDogdHJ1ZSwgXG4gICAgICBzdWJ0cmVlOiB0cnVlLFxuICAgICAgY2hhcmFjdGVyRGF0YTogdHJ1ZVxuICAgIH0pO1xuICAgIFxuICAgIC8vIERpc2Nvbm5lY3QgYWZ0ZXIgYSBzaG9ydCB0aW1lIHRvIGF2b2lkIG1lbW9yeSBsZWFrc1xuICAgIHNldFRpbWVvdXQoKCkgPT4gb2JzZXJ2ZXIuZGlzY29ubmVjdCgpLCAyMDAwKTtcbiAgfVxufVxuXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gZ2V0IGhlYWRlciB2YWx1ZSAoY2FzZS1pbnNlbnNpdGl2ZSlcbmZ1bmN0aW9uIGdldEhlYWRlclZhbHVlKGhlYWRlcnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4sIGhlYWRlck5hbWU6IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xuICBjb25zdCBoZWFkZXJLZXkgPSBPYmplY3Qua2V5cyhoZWFkZXJzKS5maW5kKGtleSA9PiBcbiAgICBrZXkudG9Mb3dlckNhc2UoKSA9PT0gaGVhZGVyTmFtZS50b0xvd2VyQ2FzZSgpXG4gICk7XG4gIFxuICByZXR1cm4gaGVhZGVyS2V5ID8gaGVhZGVyc1toZWFkZXJLZXldIDogbnVsbDtcbn1cblxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGRpc3BsYXkgcmVzdWx0c1xuZnVuY3Rpb24gZGlzcGxheVJlc3VsdChcbiAgY29udGFpbmVyOiBIVE1MRWxlbWVudCwgXG4gIGhlYWRlck5hbWU6IHN0cmluZywgXG4gIHN0YXR1czogc3RyaW5nLCBcbiAgZGV0YWlsczogc3RyaW5nID0gJycsIFxuICBkZXNjcmlwdGlvbjogc3RyaW5nID0gJydcbikge1xuICBjb25zdCByZXN1bHRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHJlc3VsdEl0ZW0uY2xhc3NOYW1lID0gYHJlc3VsdC1pdGVtICR7c3RhdHVzLnRvTG93ZXJDYXNlKCl9YDtcbiAgXG4gIGNvbnN0IHN0YXR1c0NsYXNzID0gc3RhdHVzID09PSAnUHJlc2VudCcgPyAnc3VjY2VzcycgOiBcbiAgICAgICAgICAgICAgICAgICAgIChzdGF0dXMgPT09ICdFcnJvcicgPyAnZXJyb3InIDogJ3dhcm5pbmcnKTtcbiAgXG4gIHJlc3VsdEl0ZW0uaW5uZXJIVE1MID0gYFxuICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItbmFtZVwiPiR7aGVhZGVyTmFtZX08L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwic3RhdHVzICR7c3RhdHVzQ2xhc3N9XCI+JHtzdGF0dXN9PC9kaXY+XG4gICAgJHtkZXRhaWxzID8gYDxkaXYgY2xhc3M9XCJkZXRhaWxzXCI+JHtkZXRhaWxzfTwvZGl2PmAgOiAnJ31cbiAgICAke2Rlc2NyaXB0aW9uID8gYDxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvblwiPiR7ZGVzY3JpcHRpb259PC9kaXY+YCA6ICcnfVxuICBgO1xuICBcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJlc3VsdEl0ZW0pO1xufVxuXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gdXBkYXRlIHRoZSBjaGVja2xpc3QgaXRlbSBzdGF0dXNcbmZ1bmN0aW9uIHVwZGF0ZUl0ZW1TdGF0dXMoaXRlbUlkOiBzdHJpbmcsIHN0YXR1czogJ3N1Y2Nlc3MnIHwgJ3dhcm5pbmcnIHwgJ2Vycm9yJykge1xuICBjb25zdCBjaGVja2xpc3RJdGVtUGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Jlc3VsdHMtJHtpdGVtSWR9YCk7XG4gIGlmICghY2hlY2tsaXN0SXRlbVBhcmVudCkgcmV0dXJuO1xuICBcbiAgY29uc3QgY2hlY2tsaXN0SXRlbSA9IGNoZWNrbGlzdEl0ZW1QYXJlbnQucGFyZW50RWxlbWVudDtcbiAgaWYgKCFjaGVja2xpc3RJdGVtKSByZXR1cm47XG4gIFxuICBjb25zdCBjaGVja21hcmsgPSBjaGVja2xpc3RJdGVtLnF1ZXJ5U2VsZWN0b3IoJy5jaGVja21hcmsnKTtcbiAgaWYgKCFjaGVja21hcmspIHJldHVybjtcbiAgXG4gIC8vIFJlc2V0IGV4aXN0aW5nIGNsYXNzZXNcbiAgY2hlY2ttYXJrLmNsYXNzTGlzdC5yZW1vdmUoJ3N1Y2Nlc3MnLCAnd2FybmluZycsICdlcnJvcicpO1xuICBjaGVja21hcmsuY2xhc3NMaXN0LmFkZChzdGF0dXMpO1xuICBcbiAgLy8gVXBkYXRlIGljb24gYmFzZWQgb24gc3RhdHVzXG4gIGlmIChzdGF0dXMgPT09ICdzdWNjZXNzJykge1xuICAgIGNoZWNrbWFyay5pbm5lckhUTUwgPSAn4pyTJztcbiAgfSBlbHNlIGlmIChzdGF0dXMgPT09ICd3YXJuaW5nJykge1xuICAgIGNoZWNrbWFyay5pbm5lckhUTUwgPSAn4pqgJztcbiAgfSBlbHNlIGlmIChzdGF0dXMgPT09ICdlcnJvcicpIHtcbiAgICBjaGVja21hcmsuaW5uZXJIVE1MID0gJ+Kclyc7XG4gIH1cbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgY29uc3QgYXBwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpO1xuICBpZiAoYXBwKSB7XG4gICAgLy8gQ3JlYXRlIGhlYWRlclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gJ1dobyBEaXM/JztcbiAgICBhcHAuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBcbiAgICAvLyBDcmVhdGUgY2hlY2tsaXN0IHdpdGggY29ycmVzcG9uZGluZyBmdW5jdGlvbnNcbiAgICBjb25zdCBjaGVja2xpc3RJdGVtc1dpdGhGdW5jdGlvbnMgPSBbXG4gICAgICB7IFxuICAgICAgICBpZDogJ3NpdGUtdGVjaG5vbG9neScsXG4gICAgICAgIG5hbWU6ICdTaXRlIHRlY2hub2xvZ3kgc2NhbicsIFxuICAgICAgICBmdW5jdGlvbjogc2NhblNpdGVUZWNobm9sb2d5IFxuICAgICAgfSxcbiAgICAgIHsgXG4gICAgICAgIGlkOiAnc2VjdXJpdHktaGVhZGVycycsXG4gICAgICAgIG5hbWU6ICdTZWN1cml0eSBoZWFkZXJzIGNoZWNrJywgXG4gICAgICAgIGZ1bmN0aW9uOiBjaGVja1NlY3VyaXR5SGVhZGVycyBcbiAgICAgIH0sXG4gICAgICB7IFxuICAgICAgICBpZDogJ2phdmFzY3JpcHQtbGlicmFyaWVzJyxcbiAgICAgICAgbmFtZTogJ0phdmFTY3JpcHQgbGlicmFyeSBkZXRlY3Rpb24nLCBcbiAgICAgICAgZnVuY3Rpb246IGRldGVjdEphdmFTY3JpcHRMaWJyYXJpZXMgXG4gICAgICB9LFxuICAgICAgeyBcbiAgICAgICAgaWQ6ICdhbmFseXRpY3MnLFxuICAgICAgICBuYW1lOiAnQW5hbHl0aWNzIHRvb2xzIGlkZW50aWZpY2F0aW9uJywgXG4gICAgICAgIGZ1bmN0aW9uOiBpZGVudGlmeUFuYWx5dGljc1Rvb2xzIFxuICAgICAgfVxuICAgIF07XG4gICAgXG4gICAgY29uc3QgY2hlY2tsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBjaGVja2xpc3QuY2xhc3NOYW1lID0gJ2NoZWNrbGlzdCc7XG4gICAgXG4gICAgY2hlY2tsaXN0SXRlbXNXaXRoRnVuY3Rpb25zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAvLyBDcmVhdGUgbGlzdCBpdGVtIGNvbnRhaW5lclxuICAgICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgbGlzdEl0ZW0uY2xhc3NOYW1lID0gJ2NoZWNrbGlzdC1pdGVtLWNvbnRhaW5lcic7XG4gICAgICBcbiAgICAgIC8vIENyZWF0ZSBoZWFkZXIgd2l0aCBjaGVja21hcmsgYW5kIHRpdGxlXG4gICAgICBjb25zdCBpdGVtSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBpdGVtSGVhZGVyLmNsYXNzTmFtZSA9ICdjaGVja2xpc3QtaGVhZGVyJztcbiAgICAgIFxuICAgICAgY29uc3QgY2hlY2ttYXJrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgY2hlY2ttYXJrLmNsYXNzTmFtZSA9ICdjaGVja21hcmsgc3VjY2Vzcyc7XG4gICAgICBjaGVja21hcmsuaW5uZXJIVE1MID0gJ+Kckyc7XG4gICAgICBcbiAgICAgIGNvbnN0IGl0ZW1UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgaXRlbVRleHQuY2xhc3NOYW1lID0gJ2NoZWNrbGlzdC1pdGVtJztcbiAgICAgIGl0ZW1UZXh0LnRleHRDb250ZW50ID0gaXRlbS5uYW1lO1xuICAgICAgXG4gICAgICBjb25zdCBleHBhbmRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgZXhwYW5kSWNvbi5jbGFzc05hbWUgPSAnZXhwYW5kLWljb24nO1xuICAgICAgZXhwYW5kSWNvbi5pbm5lckhUTUwgPSAn4pa8JztcbiAgICAgIFxuICAgICAgaXRlbUhlYWRlci5hcHBlbmRDaGlsZChjaGVja21hcmspO1xuICAgICAgaXRlbUhlYWRlci5hcHBlbmRDaGlsZChpdGVtVGV4dCk7XG4gICAgICBpdGVtSGVhZGVyLmFwcGVuZENoaWxkKGV4cGFuZEljb24pO1xuICAgICAgXG4gICAgICAvLyBDcmVhdGUgcmVzdWx0cyBjb250YWluZXIgKGluaXRpYWxseSBoaWRkZW4pXG4gICAgICBjb25zdCByZXN1bHRzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICByZXN1bHRzQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdyZXN1bHRzLWNvbnRhaW5lcic7XG4gICAgICByZXN1bHRzQ29udGFpbmVyLmlkID0gYHJlc3VsdHMtJHtpdGVtLmlkfWA7XG4gICAgICByZXN1bHRzQ29udGFpbmVyLnN0eWxlLm1heEhlaWdodCA9ICcwcHgnO1xuICAgICAgcmVzdWx0c0NvbnRhaW5lci5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgICAgXG4gICAgICAvLyBBZGQgY2xpY2sgZXZlbnQgdG8gaGVhZGVyIHRvIHRvZ2dsZSB2aXNpYmlsaXR5XG4gICAgICBpdGVtSGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAvLyBUb2dnbGUgYWN0aXZlIHN0YXRlIGZvciB2aXN1YWwgZmVlZGJhY2tcbiAgICAgICAgbGlzdEl0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgICAgIC8vIFRvZ2dsZSB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgcmVzdWx0c1xuICAgICAgICB0b2dnbGVSZXN1bHRzVmlzaWJpbGl0eShyZXN1bHRzQ29udGFpbmVyKTtcbiAgICAgIH0pO1xuICAgICAgXG4gICAgICAvLyBBc3NlbWJsZSB0aGUgbGlzdCBpdGVtXG4gICAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChpdGVtSGVhZGVyKTtcbiAgICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKHJlc3VsdHNDb250YWluZXIpO1xuICAgICAgY2hlY2tsaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgICB9KTtcbiAgICBcbiAgICBhcHAuYXBwZW5kQ2hpbGQoY2hlY2tsaXN0KTtcbiAgICBcbiAgICAvLyBSdW4gYWxsIHNjYW4gZnVuY3Rpb25zIGF1dG9tYXRpY2FsbHkgd2hlbiBwb3B1cCBsb2Fkc1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY2hlY2tsaXN0SXRlbXNXaXRoRnVuY3Rpb25zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGl0ZW0uZnVuY3Rpb24oKTtcbiAgICAgIH0pO1xuICAgIH0sIDUwMCk7IC8vIEluY3JlYXNlZCBmcm9tIDEwMG1zIHRvIDUwMG1zIGZvciBiZXR0ZXIgaW5pdGlhbGl6YXRpb25cbiAgfVxufSk7ICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==