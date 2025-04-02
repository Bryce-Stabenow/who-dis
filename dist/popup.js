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
        // Execute script in the current tab to detect libraries
        chrome.scripting.executeScript({
            target: { tabId: currentTab.id },
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
                            const componentNamePattern = /^[A-Z][A-Za-z]+(\.[A-Z][A-Za-z]+)*$/;
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
                            window.$ && window.$.fn && window.$.fn.jquery);
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
                const libraries = result;
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLE9BQU8sdUZBQXVGLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8s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SyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDekMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7WUFFM0MsaURBQWlEO1lBQ2pELFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO2dCQUN4QywwQ0FBMEM7Z0JBQzFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNwQyx1Q0FBdUM7Z0JBQ3ZDLHVCQUF1QixDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDNUMsQ0FBQyxDQUFDLENBQUM7WUFFSCx5QkFBeUI7WUFDekIsUUFBUSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNqQyxRQUFRLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDdkMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FBQztRQUVILEdBQUcsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFM0Isd0RBQXdEO1FBQ3hELFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCwyQkFBMkIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3pDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNsQixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLDBEQUEwRDtJQUNyRSxDQUFDO0FBQ0gsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aG8tZGlzLXNpdGUtc2Nhbm5lci8uL3NyYy9wb3B1cC5jc3MiLCJ3ZWJwYWNrOi8vd2hvLWRpcy1zaXRlLXNjYW5uZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3doby1kaXMtc2l0ZS1zY2FubmVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2hvLWRpcy1zaXRlLXNjYW5uZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2hvLWRpcy1zaXRlLXNjYW5uZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3doby1kaXMtc2l0ZS1zY2FubmVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3doby1kaXMtc2l0ZS1zY2FubmVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3doby1kaXMtc2l0ZS1zY2FubmVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2hvLWRpcy1zaXRlLXNjYW5uZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93aG8tZGlzLXNpdGUtc2Nhbm5lci8uL3NyYy9wb3B1cC5jc3M/NTlmOSIsIndlYnBhY2s6Ly93aG8tZGlzLXNpdGUtc2Nhbm5lci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93aG8tZGlzLXNpdGUtc2Nhbm5lci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93aG8tZGlzLXNpdGUtc2Nhbm5lci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2hvLWRpcy1zaXRlLXNjYW5uZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93aG8tZGlzLXNpdGUtc2Nhbm5lci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3doby1kaXMtc2l0ZS1zY2FubmVyL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93aG8tZGlzLXNpdGUtc2Nhbm5lci8uL3NyYy9wb3B1cC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogUG9wdXAgU3R5bGVzICovXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAyMHB4O1xuICB3aWR0aDogNDgwcHg7XG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xuICBjb2xvcjogIzMzMztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmFmYztcbn1cblxuI2FwcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG5oMSB7XG4gIG1hcmdpbjogMCAwIDE1cHggMDtcbiAgY29sb3I6ICMyYzNlNTA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwwLDAsMC4wNSk7XG59XG5cbmgzIHtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIGNvbG9yOiAjMmMzZTUwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5jaGVja2xpc3Qge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbi5jaGVja2xpc3QtaXRlbS1jb250YWluZXIge1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMDUpO1xufVxuXG4uY2hlY2tsaXN0LWl0ZW0tY29udGFpbmVyLmFjdGl2ZSB7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDUyLCAxNTIsIDIxOSwgMC4zKTtcbn1cblxuLmNoZWNrbGlzdC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNoZWNrbGlzdC1oZWFkZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmOWZmO1xufVxuXG4uY2hlY2tsaXN0LWl0ZW0tY29udGFpbmVyLmFjdGl2ZSAuY2hlY2tsaXN0LWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmY1ZmY7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDUyLCAxNTIsIDIxOSwgMC4yKTtcbn1cblxuLmNoZWNrbWFyayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiAyNHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi8qIFN0YXR1cy1zcGVjaWZpYyBjaGVja21hcmsgc3R5bGVzICovXG4uY2hlY2ttYXJrLnN1Y2Nlc3Mge1xuICBjb2xvcjogIzRDQUY1MDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NiwgMTc1LCA4MCwgMC4xKTtcbn1cblxuLmNoZWNrbWFyay53YXJuaW5nIHtcbiAgY29sb3I6ICNGRjk4MDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxNTIsIDAsIDAuMSk7XG59XG5cbi5jaGVja21hcmsuZXJyb3Ige1xuICBjb2xvcjogI0Y0NDMzNjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDQsIDY3LCA1NCwgMC4xKTtcbn1cblxuLmNoZWNrbGlzdC1pdGVtIHtcbiAgZmxleDogMTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzQ0NDtcbn1cblxuLmV4cGFuZC1pY29uIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICM2NjY7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4wNSk7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5jaGVja2xpc3QtaXRlbS1jb250YWluZXIuYWN0aXZlIC5leHBhbmQtaWNvbiB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTIsIDE1MiwgMjE5LCAwLjIpO1xuICBjb2xvcjogIzM0OThkYjtcbn1cblxuLyogUmVzdWx0cyBDb250YWluZXIgU3R5bGluZyAqL1xuLnJlc3VsdHMtY29udGFpbmVyIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4wNSk7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4zcyBlYXNlLWluLW91dDtcbn1cblxuLnJlc3VsdHMtY29udGFpbmVyLnZpc2libGUge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuXG4ucmVzdWx0LWl0ZW0ge1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuICBwYWRkaW5nOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgI2NjYztcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwwLDAsMC4wNSk7XG59XG5cbi5yZXN1bHQtaXRlbTpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLnJlc3VsdC1pdGVtLnByZXNlbnQge1xuICBib3JkZXItbGVmdC1jb2xvcjogIzRDQUY1MDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjhlOTtcbn1cblxuLnJlc3VsdC1pdGVtLm1pc3Npbmcge1xuICBib3JkZXItbGVmdC1jb2xvcjogI0ZGOTgwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjhlMTtcbn1cblxuLnJlc3VsdC1pdGVtLmVycm9yIHtcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICNGNDQzMzY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmViZWU7XG59XG5cbi5oZWFkZXItbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbiAgY29sb3I6ICMyYzNlNTA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnN0YXR1cyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogM3B4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5zdGF0dXMuc3VjY2VzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnN0YXR1cy53YXJuaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGOTgwMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc3RhdHVzLmVycm9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y0NDMzNjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZGV0YWlscyB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gIGNvbG9yOiAjNTU1O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMDIpO1xuICBwYWRkaW5nOiA2cHggOHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM3Nzc7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLmVycm9yLW1lc3NhZ2Uge1xuICBjb2xvcjogI0Y0NDMzNjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZzogMTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWJlZTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI0NCwgNjcsIDU0LCAwLjIpO1xufVxuXG4uaW5mby1tZXNzYWdlIHtcbiAgY29sb3I6ICMyMTk2RjM7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlM2YyZmQ7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgzMywgMTUwLCAyNDMsIDAuMik7XG59IGAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3BvcHVwLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxpQkFBaUI7QUFDakI7RUFDRSx3SUFBd0k7RUFDeEksU0FBUztFQUNULGFBQWE7RUFDYixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsY0FBYztF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eWxlcyAqL1xcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICB3aWR0aDogNDgwcHg7XFxuICBtaW4taGVpZ2h0OiA0MDBweDtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmFmYztcXG59XFxuXFxuI2FwcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuaDEge1xcbiAgbWFyZ2luOiAwIDAgMTVweCAwO1xcbiAgY29sb3I6ICMyYzNlNTA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcXG4gIHRleHQtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLDAsMCwwLjA1KTtcXG59XFxuXFxuaDMge1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxuICBjb2xvcjogIzJjM2U1MDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5jaGVja2xpc3Qge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5jaGVja2xpc3QtaXRlbS1jb250YWluZXIge1xcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjA1KTtcXG59XFxuXFxuLmNoZWNrbGlzdC1pdGVtLWNvbnRhaW5lci5hY3RpdmUge1xcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDUyLCAxNTIsIDIxOSwgMC4zKTtcXG59XFxuXFxuLmNoZWNrbGlzdC1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxNHB4IDE2cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5jaGVja2xpc3QtaGVhZGVyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY5ZmY7XFxufVxcblxcbi5jaGVja2xpc3QtaXRlbS1jb250YWluZXIuYWN0aXZlIC5jaGVja2xpc3QtaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmY1ZmY7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSg1MiwgMTUyLCAyMTksIDAuMik7XFxufVxcblxcbi5jaGVja21hcmsge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1yaWdodDogMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICB3aWR0aDogMjRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLyogU3RhdHVzLXNwZWNpZmljIGNoZWNrbWFyayBzdHlsZXMgKi9cXG4uY2hlY2ttYXJrLnN1Y2Nlc3Mge1xcbiAgY29sb3I6ICM0Q0FGNTA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc2LCAxNzUsIDgwLCAwLjEpO1xcbn1cXG5cXG4uY2hlY2ttYXJrLndhcm5pbmcge1xcbiAgY29sb3I6ICNGRjk4MDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTUyLCAwLCAwLjEpO1xcbn1cXG5cXG4uY2hlY2ttYXJrLmVycm9yIHtcXG4gIGNvbG9yOiAjRjQ0MzM2O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDQsIDY3LCA1NCwgMC4xKTtcXG59XFxuXFxuLmNoZWNrbGlzdC1pdGVtIHtcXG4gIGZsZXg6IDE7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgY29sb3I6ICM0NDQ7XFxufVxcblxcbi5leHBhbmQtaWNvbiB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XFxuICBmb250LXNpemU6IDEwcHg7XFxuICBjb2xvcjogIzY2NjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4wNSk7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5jaGVja2xpc3QtaXRlbS1jb250YWluZXIuYWN0aXZlIC5leHBhbmQtaWNvbiB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1MiwgMTUyLCAyMTksIDAuMik7XFxuICBjb2xvcjogIzM0OThkYjtcXG59XFxuXFxuLyogUmVzdWx0cyBDb250YWluZXIgU3R5bGluZyAqL1xcbi5yZXN1bHRzLWNvbnRhaW5lciB7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjA1KTtcXG4gIHBhZGRpbmc6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnJlc3VsdHMtY29udGFpbmVyLnZpc2libGUge1xcbiAgcGFkZGluZzogMTZweDtcXG59XFxuXFxuLnJlc3VsdC1pdGVtIHtcXG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjY2NjO1xcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwwLDAsMC4wNSk7XFxufVxcblxcbi5yZXN1bHQtaXRlbTpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblxcbi5yZXN1bHQtaXRlbS5wcmVzZW50IHtcXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjNENBRjUwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjhlOTtcXG59XFxuXFxuLnJlc3VsdC1pdGVtLm1pc3Npbmcge1xcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICNGRjk4MDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOGUxO1xcbn1cXG5cXG4ucmVzdWx0LWl0ZW0uZXJyb3Ige1xcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICNGNDQzMzY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYmVlO1xcbn1cXG5cXG4uaGVhZGVyLW5hbWUge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIG1hcmdpbi1ib3R0b206IDZweDtcXG4gIGNvbG9yOiAjMmMzZTUwO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4uc3RhdHVzIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIHBhZGRpbmc6IDNweCA4cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLnN0YXR1cy5zdWNjZXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5zdGF0dXMud2FybmluZyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY5ODAwO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc3RhdHVzLmVycm9yIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNDQzMzY7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5kZXRhaWxzIHtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG4gIG1hcmdpbi1ib3R0b206IDZweDtcXG4gIGNvbG9yOiAjNTU1O1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjAyKTtcXG4gIHBhZGRpbmc6IDZweCA4cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgY29sb3I6ICM3Nzc7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5lcnJvci1tZXNzYWdlIHtcXG4gIGNvbG9yOiAjRjQ0MzM2O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYmVlO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjQ0LCA2NywgNTQsIDAuMik7XFxufVxcblxcbi5pbmZvLW1lc3NhZ2Uge1xcbiAgY29sb3I6ICMyMTk2RjM7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgcGFkZGluZzogMTJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlM2YyZmQ7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgzMywgMTUwLCAyNDMsIDAuMik7XFxufSBcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3BvcHVwLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3BvcHVwLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9wb3B1cC5jc3MnO1xuXG4vLyBGdW5jdGlvbnMgZm9yIGNoZWNrbGlzdCBpdGVtc1xuZnVuY3Rpb24gc2NhblNpdGVUZWNobm9sb2d5KCkge1xuICBjb25zb2xlLmxvZygnU2Nhbm5pbmcgc2l0ZSB0ZWNobm9sb2dpZXMuLi4nKTtcbiAgLy8gR2V0IHRoZSByZXN1bHRzIGNvbnRhaW5lciBmb3IgdGhpcyBpdGVtXG4gIGNvbnN0IHJlc3VsdHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0cy1zaXRlLXRlY2hub2xvZ3knKTtcbiAgaWYgKHJlc3VsdHNDb250YWluZXIpIHtcbiAgICByZXN1bHRzQ29udGFpbmVyLmlubmVySFRNTCA9ICc8cD5Mb2FkaW5nIHNpdGUgdGVjaG5vbG9naWVzIGRhdGEuLi48L3A+JztcbiAgICBcbiAgICAvLyBBZGQgZGVsYXkgdG8gZW5zdXJlIHBhZ2UgaXMgZnVsbHkgbG9hZGVkXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICByZXN1bHRzQ29udGFpbmVyLmlubmVySFRNTCA9ICc8cD5TY2FubmluZyBzaXRlIHRlY2hub2xvZ2llcy4uLiAoTm90IGltcGxlbWVudGVkIHlldCk8L3A+JztcbiAgICAgIC8vIFNldCB0byBkZWZhdWx0IHN0YXRlIHNpbmNlIG5vdCBpbXBsZW1lbnRlZFxuICAgICAgdXBkYXRlSXRlbVN0YXR1cygnc2l0ZS10ZWNobm9sb2d5JywgJ3N1Y2Nlc3MnKTtcbiAgICB9LCAxMDAwKTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gY2hlY2tTZWN1cml0eUhlYWRlcnMoKSB7XG4gIGNvbnNvbGUubG9nKCdDaGVja2luZyBzZWN1cml0eSBoZWFkZXJzLi4uJyk7XG4gIFxuICAvLyBHZXQgdGhlIHJlc3VsdHMgY29udGFpbmVyIGZvciB0aGlzIGl0ZW1cbiAgY29uc3QgcmVzdWx0c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHRzLXNlY3VyaXR5LWhlYWRlcnMnKTtcbiAgaWYgKCFyZXN1bHRzQ29udGFpbmVyKSByZXR1cm4gZmFsc2U7XG4gIFxuICAvLyBTaG93IGxvYWRpbmcgaW5kaWNhdG9yXG4gIHJlc3VsdHNDb250YWluZXIuaW5uZXJIVE1MID0gJzxwPkxvYWRpbmcgc2VjdXJpdHkgaGVhZGVycyBkYXRhLi4uPC9wPic7XG4gIFxuICAvLyBBZGQgYSBkZWxheSB0byBlbnN1cmUgcGFnZSBpcyBmdWxseSBsb2FkZWRcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgLy8gR2V0IHRoZSBjdXJyZW50IGFjdGl2ZSB0YWJcbiAgICBjaHJvbWUudGFicy5xdWVyeSh7YWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlfSwgKHRhYnMpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRUYWIgPSB0YWJzWzBdO1xuICAgICAgaWYgKCFjdXJyZW50VGFiIHx8ICFjdXJyZW50VGFiLnVybCkge1xuICAgICAgICByZXN1bHRzQ29udGFpbmVyLmlubmVySFRNTCA9ICc8ZGl2IGNsYXNzPVwiZXJyb3ItbWVzc2FnZVwiPkNhbm5vdCBhY2Nlc3MgY3VycmVudCB0YWIgaW5mb3JtYXRpb248L2Rpdj4nO1xuICAgICAgICB1cGRhdGVJdGVtU3RhdHVzKCdzZWN1cml0eS1oZWFkZXJzJywgJ2Vycm9yJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLy8gQ2hlY2sgaWYgd2UgY2FuIGFuYWx5emUgdGhpcyBVUkwgKG11c3QgYmUgaHR0cCBvciBodHRwcylcbiAgICAgIGNvbnN0IHVybCA9IGN1cnJlbnRUYWIudXJsO1xuICAgICAgaWYgKCF1cmwuc3RhcnRzV2l0aCgnaHR0cDovLycpICYmICF1cmwuc3RhcnRzV2l0aCgnaHR0cHM6Ly8nKSkge1xuICAgICAgICByZXN1bHRzQ29udGFpbmVyLmlubmVySFRNTCA9ICc8ZGl2IGNsYXNzPVwiZXJyb3ItbWVzc2FnZVwiPkNhbiBvbmx5IGFuYWx5emUgSFRUUC9IVFRQUyBwYWdlczwvZGl2Pic7XG4gICAgICAgIHVwZGF0ZUl0ZW1TdGF0dXMoJ3NlY3VyaXR5LWhlYWRlcnMnLCAnZXJyb3InKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgXG4gICAgICAvLyBGZXRjaCBoZWFkZXJzIHVzaW5nIGJhY2tncm91bmQgc2NyaXB0IChuZWVkZWQgZm9yIENPUlMpXG4gICAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7YWN0aW9uOiAnZmV0Y2hIZWFkZXJzJywgdXJsOiB1cmx9LCAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLmVycm9yKSB7XG4gICAgICAgICAgcmVzdWx0c0NvbnRhaW5lci5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cImVycm9yLW1lc3NhZ2VcIj4ke3Jlc3BvbnNlLmVycm9yfTwvZGl2PmA7XG4gICAgICAgICAgdXBkYXRlSXRlbVN0YXR1cygnc2VjdXJpdHktaGVhZGVycycsICdlcnJvcicpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmVzdWx0c0NvbnRhaW5lci5pbm5lckhUTUwgPSAnPGgzPlNlY3VyaXR5IEhlYWRlcnMgQW5hbHlzaXM8L2gzPic7XG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSByZXNwb25zZS5oZWFkZXJzO1xuICAgICAgICBcbiAgICAgICAgLy8gSW1wb3J0YW50IHNlY3VyaXR5IGhlYWRlcnMgdG8gY2hlY2tcbiAgICAgICAgY29uc3Qgc2VjdXJpdHlIZWFkZXJzID0gW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdDb250ZW50LVNlY3VyaXR5LVBvbGljeScsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0hlbHBzIHByZXZlbnQgWFNTIGFuZCBkYXRhIGluamVjdGlvbiBhdHRhY2tzJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ1gtQ29udGVudC1UeXBlLU9wdGlvbnMnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdQcmV2ZW50cyBNSU1FIHR5cGUgc25pZmZpbmcnLFxuICAgICAgICAgICAgcmVjb21tZW5kZWQ6ICdub3NuaWZmJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ1gtRnJhbWUtT3B0aW9ucycsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1Byb3RlY3RzIGFnYWluc3QgY2xpY2tqYWNraW5nJyxcbiAgICAgICAgICAgIHJlY29tbWVuZGVkOiAnREVOWSBvciBTQU1FT1JJR0lOJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ1N0cmljdC1UcmFuc3BvcnQtU2VjdXJpdHknLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdFbmZvcmNlcyBIVFRQUyBjb25uZWN0aW9ucycsXG4gICAgICAgICAgICByZWNvbW1lbmRlZDogJ21heC1hZ2U9MzE1MzYwMDA7IGluY2x1ZGVTdWJEb21haW5zJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ1gtWFNTLVByb3RlY3Rpb24nLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdQcm92aWRlcyBYU1MgcHJvdGVjdGlvbiBpbiBvbGRlciBicm93c2VycycsXG4gICAgICAgICAgICByZWNvbW1lbmRlZDogJzE7IG1vZGU9YmxvY2snXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnUmVmZXJyZXItUG9saWN5JyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQ29udHJvbHMgaW5mb3JtYXRpb24gaW4gdGhlIFJlZmVyZXIgaGVhZGVyJyxcbiAgICAgICAgICAgIHJlY29tbWVuZGVkOiAnc3RyaWN0LW9yaWdpbi13aGVuLWNyb3NzLW9yaWdpbidcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdQZXJtaXNzaW9ucy1Qb2xpY3knLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdDb250cm9scyBicm93c2VyIGZlYXR1cmVzIGFuZCBBUElzJyxcbiAgICAgICAgICAgIGFsdGVybmF0ZTogJ0ZlYXR1cmUtUG9saWN5J1xuICAgICAgICAgIH1cbiAgICAgICAgXTtcbiAgICAgICAgXG4gICAgICAgIC8vIENoZWNrIGVhY2ggc2VjdXJpdHkgaGVhZGVyXG4gICAgICAgIGxldCBtaXNzaW5nSGVhZGVycyA9IDA7XG4gICAgICAgIHNlY3VyaXR5SGVhZGVycy5mb3JFYWNoKGhlYWRlciA9PiB7XG4gICAgICAgICAgY29uc3QgaGVhZGVyVmFsdWUgPSBnZXRIZWFkZXJWYWx1ZShoZWFkZXJzLCBoZWFkZXIubmFtZSkgfHwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAoaGVhZGVyLmFsdGVybmF0ZSA/IGdldEhlYWRlclZhbHVlKGhlYWRlcnMsIGhlYWRlci5hbHRlcm5hdGUpIDogbnVsbCk7XG4gICAgICAgICAgXG4gICAgICAgICAgY29uc3Qgc3RhdHVzID0gaGVhZGVyVmFsdWUgPyAnUHJlc2VudCcgOiAnTWlzc2luZyc7XG4gICAgICAgICAgY29uc3QgZGV0YWlscyA9IGhlYWRlclZhbHVlIHx8IFxuICAgICAgICAgICAgICAgICAgICAgICAoaGVhZGVyLnJlY29tbWVuZGVkID8gYFJlY29tbWVuZGVkOiAke2hlYWRlci5yZWNvbW1lbmRlZH1gIDogJ05vdCBpbXBsZW1lbnRlZCcpO1xuICAgICAgICAgIFxuICAgICAgICAgIGlmIChzdGF0dXMgPT09ICdNaXNzaW5nJykgbWlzc2luZ0hlYWRlcnMrKztcbiAgICAgICAgICBcbiAgICAgICAgICBkaXNwbGF5UmVzdWx0KHJlc3VsdHNDb250YWluZXIsIGhlYWRlci5uYW1lLCBzdGF0dXMsIGRldGFpbHMsIGhlYWRlci5kZXNjcmlwdGlvbik7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgLy8gVXBkYXRlIHRoZSBjaGVja2xpc3QgaXRlbSBzdGF0dXMgYmFzZWQgb24gbWlzc2luZyBoZWFkZXJzXG4gICAgICAgIGlmIChtaXNzaW5nSGVhZGVycyA+IDApIHtcbiAgICAgICAgICB1cGRhdGVJdGVtU3RhdHVzKCdzZWN1cml0eS1oZWFkZXJzJywgJ3dhcm5pbmcnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB1cGRhdGVJdGVtU3RhdHVzKCdzZWN1cml0eS1oZWFkZXJzJywgJ3N1Y2Nlc3MnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sIDEwMDApOyAvLyBXYWl0IDEgc2Vjb25kIHRvIGVuc3VyZSBwYWdlIGlzIGxvYWRlZFxuICBcbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGRldGVjdEphdmFTY3JpcHRMaWJyYXJpZXMoKSB7XG4gIGNvbnNvbGUubG9nKCdEZXRlY3RpbmcgSmF2YVNjcmlwdCBsaWJyYXJpZXMuLi4nKTtcbiAgXG4gIC8vIEdldCB0aGUgcmVzdWx0cyBjb250YWluZXIgZm9yIHRoaXMgaXRlbVxuICBjb25zdCByZXN1bHRzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdHMtamF2YXNjcmlwdC1saWJyYXJpZXMnKTtcbiAgaWYgKCFyZXN1bHRzQ29udGFpbmVyKSByZXR1cm4gZmFsc2U7XG4gIFxuICAvLyBTaG93IGxvYWRpbmcgaW5kaWNhdG9yXG4gIHJlc3VsdHNDb250YWluZXIuaW5uZXJIVE1MID0gJzxwPkxvYWRpbmcgSmF2YVNjcmlwdCBsaWJyYXJpZXMgZGF0YS4uLjwvcD4nO1xuICBcbiAgLy8gR2V0IHRoZSBjdXJyZW50IGFjdGl2ZSB0YWJcbiAgY2hyb21lLnRhYnMucXVlcnkoe2FjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZX0sICh0YWJzKSA9PiB7XG4gICAgY29uc3QgY3VycmVudFRhYiA9IHRhYnNbMF07XG4gICAgaWYgKCFjdXJyZW50VGFiIHx8ICFjdXJyZW50VGFiLnVybCkge1xuICAgICAgcmVzdWx0c0NvbnRhaW5lci5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cImVycm9yLW1lc3NhZ2VcIj5DYW5ub3QgYWNjZXNzIGN1cnJlbnQgdGFiIGluZm9ybWF0aW9uPC9kaXY+JztcbiAgICAgIHVwZGF0ZUl0ZW1TdGF0dXMoJ2phdmFzY3JpcHQtbGlicmFyaWVzJywgJ2Vycm9yJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIC8vIENoZWNrIGlmIHdlIGNhbiBhbmFseXplIHRoaXMgVVJMIChtdXN0IGJlIGh0dHAgb3IgaHR0cHMpXG4gICAgY29uc3QgdXJsID0gY3VycmVudFRhYi51cmw7XG4gICAgaWYgKCF1cmwuc3RhcnRzV2l0aCgnaHR0cDovLycpICYmICF1cmwuc3RhcnRzV2l0aCgnaHR0cHM6Ly8nKSkge1xuICAgICAgcmVzdWx0c0NvbnRhaW5lci5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cImVycm9yLW1lc3NhZ2VcIj5DYW4gb25seSBhbmFseXplIEhUVFAvSFRUUFMgcGFnZXM8L2Rpdj4nO1xuICAgICAgdXBkYXRlSXRlbVN0YXR1cygnamF2YXNjcmlwdC1saWJyYXJpZXMnLCAnZXJyb3InKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgLy8gRXhlY3V0ZSBzY3JpcHQgaW4gdGhlIGN1cnJlbnQgdGFiIHRvIGRldGVjdCBsaWJyYXJpZXNcbiAgICBjaHJvbWUuc2NyaXB0aW5nLmV4ZWN1dGVTY3JpcHQoe1xuICAgICAgdGFyZ2V0OiB7IHRhYklkOiBjdXJyZW50VGFiLmlkIGFzIG51bWJlciB9LFxuICAgICAgZnVuYzogKCkgPT4ge1xuICAgICAgICAvLyBUeXBlcyBmb3IgZ2xvYmFsIGxpYnJhcmllc1xuICAgICAgICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICAgICAgICBSZWFjdD86IGFueTtcbiAgICAgICAgICBWdWU/OiBhbnk7XG4gICAgICAgICAgYW5ndWxhcj86IGFueTtcbiAgICAgICAgICBqUXVlcnk/OiBhbnk7XG4gICAgICAgICAgJD86IGFueTtcbiAgICAgICAgICBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18/OiBhbnk7XG4gICAgICAgICAgX19zdmVsdGVfXz86IGFueTtcbiAgICAgICAgICBfX05FWFRfREFUQV9fPzogYW55O1xuICAgICAgICAgIF9fR0FUU0JZPzogYW55O1xuICAgICAgICAgIF9fVlVFX18/OiBhbnk7XG4gICAgICAgICAgX19WVUVfT1BUSU9OU19fPzogYW55O1xuICAgICAgICAgIF9fVlVFX0RFVlRPT0xTX0dMT0JBTF9IT09LX18/OiBhbnk7XG4gICAgICAgICAgX19WVUVfREVWVE9PTFNfVE9BU1RfXz86IGFueTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gRGVmaW5lIGxpYnJhcnkgZGV0ZWN0aW9uIGZ1bmN0aW9uc1xuICAgICAgICBjb25zdCBsaWJyYXJ5RGV0ZWN0b3JzID0ge1xuICAgICAgICAgICdSZWFjdCc6ICgpID0+IHtcbiAgICAgICAgICAgIC8vIE11bHRpcGxlIGRldGVjdGlvbiBhcHByb2FjaGVzIGZvciBtb2Rlcm4gUmVhY3RcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIC8vIDEuIENoZWNrIGZvciBSZWFjdCBpbiB3aW5kb3dcbiAgICAgICAgICAgICAgaWYgKCh3aW5kb3cgYXMgV2luZG93KS5SZWFjdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAvLyAyLiBDaGVjayBmb3IgUmVhY3QgRGV2VG9vbHMgaG9va1xuICAgICAgICAgICAgICBpZiAoKHdpbmRvdyBhcyBXaW5kb3cpLl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAvLyAzLiBDaGVjayBmb3IgUmVhY3QgMTYrIGZpYmVyIG5vZGVzXG4gICAgICAgICAgICAgIGNvbnN0IHJvb3RFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXJlYWN0cm9vdF0nKTtcbiAgICAgICAgICAgICAgaWYgKHJvb3RFbGVtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC8vIDQuIENoZWNrIGZvciBvbGQgUmVhY3QgKHByZS0xNikgYXR0cmlidXRlc1xuICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcmVhY3RpZF0nKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAvLyA1LiBGaW5kIFJlYWN0IDE3KyByb290IGNvbnRhaW5lcnMgb3IgZmliZXIgbm9kZXMgKG1vc3QgY29tbW9uIG1vZGVybiBhcHByb2FjaClcbiAgICAgICAgICAgICAgY29uc3QgYWxsRWxlbWVudHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyonKSk7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAvLyA1YS4gTG9vayBmb3IgUmVhY3QgMTcrIHJvb3QgY29udGFpbmVyXG4gICAgICAgICAgICAgIGNvbnN0IGhhc1JlYWN0Um9vdENvbnRhaW5lciA9IGFsbEVsZW1lbnRzLnNvbWUoZWwgPT4gXG4gICAgICAgICAgICAgICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGVsLCAnX3JlYWN0Um9vdENvbnRhaW5lcicpXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGlmIChoYXNSZWFjdFJvb3RDb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLy8gNWIuIExvb2sgZm9yIFJlYWN0IDE4KyBjb250YWluZXIgcHJvcGVydHkgcGF0dGVyblxuICAgICAgICAgICAgICBjb25zdCBoYXNSZWFjdENvbnRhaW5lciA9IGFsbEVsZW1lbnRzLnNvbWUoZWwgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhlbCkuc29tZShrZXkgPT4gXG4gICAgICAgICAgICAgICAgICBrZXkuc3RhcnRzV2l0aCgnX19yZWFjdENvbnRhaW5lcicpIHx8IFxuICAgICAgICAgICAgICAgICAga2V5LnN0YXJ0c1dpdGgoJ19fcmVhY3RGaWJlcicpIHx8IFxuICAgICAgICAgICAgICAgICAga2V5LnN0YXJ0c1dpdGgoJ19fcmVhY3RQcm9wcycpIHx8IFxuICAgICAgICAgICAgICAgICAga2V5LnN0YXJ0c1dpdGgoJ19fcmVhY3RFdmVudHMnKSB8fFxuICAgICAgICAgICAgICAgICAga2V5LnN0YXJ0c1dpdGgoJ19fcmVhY3RJbnRlcm5hbEluc3RhbmNlJylcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgaWYgKGhhc1JlYWN0Q29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC8vIDYuIENoZWNrIGZvciBSZWFjdCBwcm9maWxlclxuICAgICAgICAgICAgICBpZiAodHlwZW9mICh3aW5kb3cgYXMgYW55KS5fX1JFQUNUX0RFVlRPT0xTX1BST0ZJTEVSX0hPT0tfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLy8gNy4gTG9vayBmb3IgUmVhY3Qtc3BlY2lmaWMgY29tcG9uZW50IG5hbWUgcGF0dGVybnNcbiAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50TmFtZVBhdHRlcm4gPSAvXltBLVpdW0EtWmEtel0rKFxcLltBLVpdW0EtWmEtel0rKSokLztcbiAgICAgICAgICAgICAgY29uc3QgcmVhY3RDb21wb25lbnRzID0gYWxsRWxlbWVudHMuc29tZShlbCA9PiB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZWwpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChrZXkuc3RhcnRzV2l0aCgnX19yZWFjdFByb3BzJCcpICYmIFxuICAgICAgICAgICAgICAgICAgICAgIChlbCBhcyBhbnkpW2tleV0gJiYgXG4gICAgICAgICAgICAgICAgICAgICAgKGVsIGFzIGFueSlba2V5XS5jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmIChrZXkuc3RhcnRzV2l0aCgnX3JlYWN0TGlzdGVuaW5nJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBpZiAocmVhY3RDb21wb25lbnRzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZGV0ZWN0aW5nIFJlYWN0OicsIGUpO1xuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICAnVnVlLmpzJzogKCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgLy8gRGlyZWN0IGdsb2JhbCBWdWUgZGV0ZWN0aW9uIChtb3N0bHkgVnVlIDIpXG4gICAgICAgICAgICAgIGlmICgod2luZG93IGFzIFdpbmRvdykuVnVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC8vIFZ1ZSBEZXZUb29scyBob29rcyBhbmQgaW50ZXJuYWwgcHJvcGVydGllc1xuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgKHdpbmRvdyBhcyBXaW5kb3cpLl9fVlVFX18gfHwgXG4gICAgICAgICAgICAgICAgKHdpbmRvdyBhcyBXaW5kb3cpLl9fVlVFX09QVElPTlNfXyB8fFxuICAgICAgICAgICAgICAgICh3aW5kb3cgYXMgV2luZG93KS5fX1ZVRV9ERVZUT09MU19HTE9CQUxfSE9PS19fIHx8XG4gICAgICAgICAgICAgICAgKHdpbmRvdyBhcyBXaW5kb3cpLl9fVlVFX0RFVlRPT0xTX1RPQVNUX19cbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC8vIENoZWNrIGZvciBWdWUgaW5zdGFuY2UgcHJvcGVydHkgaW4gdmFyaW91cyBwYXR0ZXJuc1xuICAgICAgICAgICAgICBjb25zdCB2dWVQcm9wc1RvQ2hlY2sgPSBbXG4gICAgICAgICAgICAgICAgJ19fdnVlJywgJ19fdnVlX18nLCAnX192dWVfYXBwX18nLCAnX19OVVhUX18nLCAnX19WVUVfXycsXG4gICAgICAgICAgICAgICAgJ1Z1ZScsICckbnV4dCcsICckc3RvcmUnLCAnJHEnLCAvLyBOdXh0LCBWdWV4LCBRdWFzYXJcbiAgICAgICAgICAgICAgICAnX19udXh0X3BhZ2VfbWV0YV9fJywgJ19fSU5JVElBTF9TVEFURV9fJywgJ1Z1ZXhTdG9yZScsICdWdWV4J1xuICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgZm9yIChjb25zdCBwcm9wIG9mIHZ1ZVByb3BzVG9DaGVjaykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wIGluIHdpbmRvdykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAvLyBDaGVjayBmb3IgVnVlIG1ldGhvZHNcbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwb3RlbnRpYWxWdWVNZXRob2RzID0gWyckbmV4dFRpY2snLCAnJG1vdW50JywgJyRzZXQnLCAnJGRlbGV0ZSddO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgbWV0aG9kIG9mIHBvdGVudGlhbFZ1ZU1ldGhvZHMpIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKHdpbmRvdyBhcyBhbnkpW21ldGhvZF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBjaGVja2luZyBWdWUgbWV0aG9kczpcIiwgZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC8vIERldGVjdCBWdWUgMyBieSBzZWFyY2hpbmcgZm9yIGFwcCBpbnN0YW5jZSBpbiBkb2N1bWVudCBlbGVtZW50c1xuICAgICAgICAgICAgICBjb25zdCBhbGxFbGVtZW50cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnKicpKTtcbiAgICAgICAgICAgICAgY29uc3QgaGFzVnVlSW5zdGFuY2UgPSBhbGxFbGVtZW50cy5zb21lKGVsID0+IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgZm9yIFZ1ZSAzIGluc3RhbmNlIHByb3BlcnRpZXNcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRQcm9wcyA9IE9iamVjdC5rZXlzKGVsKTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50UHJvcHMuc29tZShrZXkgPT4gXG4gICAgICAgICAgICAgICAgICAgIGtleS5zdGFydHNXaXRoKCdfX3Z1ZScpIHx8IFxuICAgICAgICAgICAgICAgICAgICBrZXkuc3RhcnRzV2l0aCgnX192dWVfJykgfHwgXG4gICAgICAgICAgICAgICAgICAgIGtleSA9PT0gJ19fdnVlJ1xuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIGlmIChoYXNWdWVJbnN0YW5jZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAvLyBDb21tb24gVnVlIGRpcmVjdGl2ZSBhdHRyaWJ1dGVzICh3b3JrcyBmb3IgYm90aCBWdWUgMiBhbmQgVnVlIDMpXG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS12LV0nKSB8fCAvLyBTY29wZWQgQ1NTIGluZGljYXRvclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1t2LWNsb2FrXScpIHx8XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW3YtaWZdJykgfHxcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbdi1mb3JdJykgfHxcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbdi1zaG93XScpIHx8XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW3YtYmluZF0nKSB8fFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1t2LW1vZGVsXScpIHx8XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW3Ytb25dJykgfHxcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbdi1vbmNlXScpIHx8XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW3YtaHRtbF0nKSB8fFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1t2LXRleHRdJykgfHxcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbdi1wcmVdJylcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC8vIENoZWNrIGZvciBzaG9ydGhhbmQgZGlyZWN0aXZlc1xuICAgICAgICAgICAgICBjb25zdCBoYXNTaG9ydGhhbmREaXJlY3RpdmVzID0gYWxsRWxlbWVudHMuc29tZShlbCA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWVzID0gZWwuZ2V0QXR0cmlidXRlTmFtZXMoKTtcbiAgICAgICAgICAgICAgICAgIC8vIENoZWNrIGZvciB2LWJpbmQgc2hvcnRoYW5kICg6KSBvciB2LW9uIHNob3J0aGFuZCAoQClcbiAgICAgICAgICAgICAgICAgIHJldHVybiBhdHRyaWJ1dGVOYW1lcy5zb21lKGF0dHIgPT4gYXR0ci5zdGFydHNXaXRoKCc6JykgfHwgYXR0ci5zdGFydHNXaXRoKCdAJykpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgaWYgKGhhc1Nob3J0aGFuZERpcmVjdGl2ZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLy8gQ2hlY2sgZm9yIFZ1ZSBhcHAgcm9vdCBlbGVtZW50cyAoY29tbW9uIGNvbnZlbnRpb25zKVxuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcFtkYXRhLXYtYXBwXScpIHx8XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcCA+IFtkYXRhLXYtXScpIHx8XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZ1ZS1hcHAnKSB8fFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNxLWFwcCcpIHx8IC8vIFF1YXNhclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX251eHQnKSB8fCAvLyBOdXh0XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbGF5b3V0JykgfHwgLy8gTnV4dFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXNlcnZlci1yZW5kZXJlZF0nKSAvLyBTU1IgaW5kaWNhdG9yXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAvLyBMb29rIGZvciBjb21tb24gQ1NTIGNsYXNzZXMgdXNlZCBieSBWdWUgZnJhbWV3b3JrcyBcbiAgICAgICAgICAgICAgY29uc3QgdnVlRnJhbWV3b3JrQ2xhc3NlcyA9IFtcbiAgICAgICAgICAgICAgICAncS1idG4nLCAncS1wYWdlJywgLy8gUXVhc2FyICBcbiAgICAgICAgICAgICAgICAnbnV4dC1saW5rJywgJ251eHQtcHJvZ3Jlc3MnLCAvLyBOdXh0XG4gICAgICAgICAgICAgICAgJ3YtYnRuJywgJ3YtYXBwJywgLy8gVnVldGlmeVxuICAgICAgICAgICAgICAgICdlbC1idXR0b24nLCAnZWwtY29udGFpbmVyJywgLy8gRWxlbWVudCBVSVxuICAgICAgICAgICAgICAgICdhbnQtYnRuJywgJ2FudC1sYXlvdXQnIC8vIEFudCBEZXNpZ24gVnVlXG4gICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBmb3IgKGNvbnN0IGNsYXNzTmFtZSBvZiB2dWVGcmFtZXdvcmtDbGFzc2VzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2NsYXNzTmFtZX1gKSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAvLyBDaGVjayBmb3IgVnVlLXJlbGF0ZWQgc2NyaXB0IHRhZ3NcbiAgICAgICAgICAgICAgY29uc3Qgc2NyaXB0U3JjID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzY3JpcHRbc3JjXScpKVxuICAgICAgICAgICAgICAgIC5tYXAoc2NyaXB0ID0+IHNjcmlwdC5nZXRBdHRyaWJ1dGUoJ3NyYycpIHx8ICcnKTtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIGlmIChzY3JpcHRTcmMuc29tZShzcmMgPT4gXG4gICAgICAgICAgICAgICAgc3JjLmluY2x1ZGVzKCd2dWUnKSB8fCBcbiAgICAgICAgICAgICAgICBzcmMuaW5jbHVkZXMoJ251eHQnKSB8fCBcbiAgICAgICAgICAgICAgICBzcmMuaW5jbHVkZXMoJ3F1YXNhcicpKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAvLyBDaGVjayBpbmxpbmUgc2NyaXB0cyBmb3IgVnVlIHJlZmVyZW5jZXNcbiAgICAgICAgICAgICAgY29uc3QgaGFzVnVlSW5TY3JpcHRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzY3JpcHQ6bm90KFtzcmNdKScpKVxuICAgICAgICAgICAgICAgIC5zb21lKHNjcmlwdCA9PiBzY3JpcHQudGV4dENvbnRlbnQgJiYgKFxuICAgICAgICAgICAgICAgICAgc2NyaXB0LnRleHRDb250ZW50LmluY2x1ZGVzKCduZXcgVnVlJykgfHwgXG4gICAgICAgICAgICAgICAgICBzY3JpcHQudGV4dENvbnRlbnQuaW5jbHVkZXMoJ2NyZWF0ZUFwcCcpIHx8XG4gICAgICAgICAgICAgICAgICBzY3JpcHQudGV4dENvbnRlbnQuaW5jbHVkZXMoJ1Z1ZS4nKSB8fFxuICAgICAgICAgICAgICAgICAgc2NyaXB0LnRleHRDb250ZW50LmluY2x1ZGVzKCdfVnVlJylcbiAgICAgICAgICAgICAgICApKTtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIGlmIChoYXNWdWVJblNjcmlwdHMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZXRlY3RpbmcgVnVlLmpzOicsIGUpO1xuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICAnQW5ndWxhcic6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAhIShcbiAgICAgICAgICAgICAgKHdpbmRvdyBhcyBXaW5kb3cpLmFuZ3VsYXIgfHwgXG4gICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuZy1hcHBdJykgfHxcbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25nLWNvbnRyb2xsZXJdJykgfHxcbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25nLW1vZGVsXScpIHx8XG4gICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuZy1yZXBlYXRdJykgfHxcbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25nLXZpZXddJykgfHxcbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25nLWlmXScpIHx8XG4gICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuZy1zaG93XScpIHx8XG4gICAgICAgICAgICAgIC8vIEFuZ3VsYXIgMitcbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW19uZ2hvc3RdJykgfHxcbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW19uZ2NvbnRlbnRdJykgfHxcbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYXBwLXJvb3QnKSB8fFxuICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmctdmVyc2lvbl0nKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgICdqUXVlcnknOiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gISEoXG4gICAgICAgICAgICAgICh3aW5kb3cgYXMgV2luZG93KS5qUXVlcnkgfHwgXG4gICAgICAgICAgICAgICh3aW5kb3cgYXMgV2luZG93KS4kICYmICh3aW5kb3cgYXMgV2luZG93KS4kLmZuICYmICh3aW5kb3cgYXMgV2luZG93KS4kLmZuLmpxdWVyeVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgICdTdmVsdGUnOiAoKSA9PiB7XG4gICAgICAgICAgICAvLyBTdmVsdGUgY29tcG9uZW50cyBoYXZlIGNsYXNzIG5hbWVzIGxpa2UgXCJzdmVsdGUtYWJjMTIzXCJcbiAgICAgICAgICAgIGNvbnN0IGhhc1N2ZWx0ZUNsYXNzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcqJykpLnNvbWUoZWwgPT4ge1xuICAgICAgICAgICAgICBpZiAoZWwuY2xhc3NOYW1lICYmIHR5cGVvZiBlbC5jbGFzc05hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC9zdmVsdGUtW2EtejAtOV0rLy50ZXN0KGVsLmNsYXNzTmFtZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIENoZWNrIGZvciBTdmVsdGUgZGV2dG9vbHMgaG9va1xuICAgICAgICAgICAgY29uc3QgaGFzU3ZlbHRlSG9vayA9ICEhKHdpbmRvdyBhcyBXaW5kb3cpLl9fc3ZlbHRlX187XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIENoZWNrIGZvciBIVE1MIGVsZW1lbnRzIHdpdGggU3ZlbHRlLXNwZWNpZmljIGF0dHJpYnV0ZXNcbiAgICAgICAgICAgIGNvbnN0IGhhc1N2ZWx0ZUF0dHJpYnV0ZXMgPSAhIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tzdmVsdGUtZnJhZ21lbnRdJykgfHwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tzdmVsdGVraXRcXFxcOnByZWZldGNoXScpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBDaGVjayBpZiBhbnkgY3VzdG9tIGVsZW1lbnRzIChXZWIgQ29tcG9uZW50cykgYXJlIFN2ZWx0ZS1yZWxhdGVkXG4gICAgICAgICAgICBjb25zdCBoYXNTdmVsdGVFbGVtZW50cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnKicpKS5zb21lKGVsID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIGVsLnRhZ05hbWUgJiYgZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdzdmVsdGUnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gISEoaGFzU3ZlbHRlQ2xhc3MgfHwgaGFzU3ZlbHRlSG9vayB8fCBoYXNTdmVsdGVBdHRyaWJ1dGVzIHx8IGhhc1N2ZWx0ZUVsZW1lbnRzKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgICdOZXh0LmpzJzogKCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgLy8gQ2hlY2sgZm9yIE5leHQuanMgZGF0YSBzY3JpcHQgdGFnXG4gICAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzY3JpcHQjX19ORVhUX0RBVEFfXycpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC8vIENoZWNrIGZvciBOZXh0LmpzIHNwZWNpZmljIGF0dHJpYnV0ZXNcbiAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW5leHQtaHlkcmF0ZV0nKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAvLyBDaGVjayBmb3IgTmV4dC5qcyBydW50aW1lXG4gICAgICAgICAgICAgIGlmICgod2luZG93IGFzIFdpbmRvdykuX19ORVhUX0RBVEFfXykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAvLyBDaGVjayBmb3IgbmV4dCBwYWdlIENTU1xuICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dCcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZGV0ZWN0aW5nIE5leHQuanM6JywgZSk7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgICdHYXRzYnkuanMnOiAoKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAvLyBDaGVjayBmb3IgR2F0c2J5IHNwZWNpZmljIGVsZW1lbnRzXG4gICAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19fZ2F0c2J5JykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLy8gQ2hlY2sgZm9yIEdhdHNieSBwYWdlIGRhdGFcbiAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NjcmlwdFtpZCo9XCJnYXRzYnktY2h1bmtcIl0nKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAvLyBDaGVjayBmb3Igd2luZG93Ll9fR0FUU0JZXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgKHdpbmRvdyBhcyBhbnkpLl9fR0FUU0JZICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRldGVjdGluZyBHYXRzYnkuanM6JywgZSk7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICAvLyBSdW4gZGV0ZWN0aW9uc1xuICAgICAgICBjb25zdCByZXN1bHRzOiBSZWNvcmQ8c3RyaW5nLCB7IGRldGVjdGVkOiBib29sZWFuLCB2ZXJzaW9uOiBzdHJpbmcgfCBudWxsIH0+ID0ge307XG4gICAgICAgIFxuICAgICAgICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gd2FpdCBmb3IgcGFnZSB0byBiZSBmdWxseSBsb2FkZWRcbiAgICAgICAgY29uc3Qgd2FpdEZvclBhZ2VMb2FkID0gKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgIC8vIElmIGRvY3VtZW50IGlzIGFscmVhZHkgY29tcGxldGUsIHJlc29sdmUgaW1tZWRpYXRlbHlcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBPdGhlcndpc2Ugd2FpdCBmb3IgbG9hZCBldmVudFxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiByZXNvbHZlKCksIHsgb25jZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gQWxzbyBzZXQgYSB0aW1lb3V0IGFzIGZhbGxiYWNrICgzIHNlY29uZHMpXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJlc29sdmUsIDMwMDApO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgLy8gVXNlIHByb21pc2VzIGluc3RlYWQgb2YgYXN5bmMvYXdhaXQgdG8gYXZvaWQgVHlwZVNjcmlwdCBoZWxwZXJzXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAvLyBGaXJzdCB3YWl0IGZvciBwYWdlIHRvIGJlIGZ1bGx5IGxvYWRlZFxuICAgICAgICAgIHdhaXRGb3JQYWdlTG9hZCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgLy8gQWRkIGEgc21hbGwgYWRkaXRpb25hbCBkZWxheSB0byBhbGxvdyBmb3IgSlMgZnJhbWV3b3JrcyB0byBpbml0aWFsaXplXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgLy8gUnVuIGFsbCB0aGUgZGV0ZWN0b3JzXG4gICAgICAgICAgICAgIGZvciAoY29uc3QgW2xpYnJhcnksIGRldGVjdG9yXSBvZiBPYmplY3QuZW50cmllcyhsaWJyYXJ5RGV0ZWN0b3JzKSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBkZXRlY3RlZCA9IGRldGVjdG9yKCk7XG4gICAgICAgICAgICAgICAgICBsZXQgdmVyc2lvbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIC8vIEdldCB2ZXJzaW9uIGlmIGF2YWlsYWJsZVxuICAgICAgICAgICAgICAgICAgaWYgKGRldGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsaWJyYXJ5ID09PSAnalF1ZXJ5JyAmJiAod2luZG93IGFzIFdpbmRvdykuJCAmJiAod2luZG93IGFzIFdpbmRvdykuJC5mbikge1xuICAgICAgICAgICAgICAgICAgICAgIHZlcnNpb24gPSAod2luZG93IGFzIFdpbmRvdykuJC5mbi5qcXVlcnk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobGlicmFyeSA9PT0gJ1Z1ZS5qcycgJiYgKHdpbmRvdyBhcyBXaW5kb3cpLlZ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgIHZlcnNpb24gPSAod2luZG93IGFzIFdpbmRvdykuVnVlLnZlcnNpb247XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobGlicmFyeSA9PT0gJ1JlYWN0JyAmJiAod2luZG93IGFzIFdpbmRvdykuUmVhY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2ZXJzaW9uID0gKHdpbmRvdyBhcyBXaW5kb3cpLlJlYWN0LnZlcnNpb247XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobGlicmFyeSA9PT0gJ0FuZ3VsYXInICYmICh3aW5kb3cgYXMgV2luZG93KS5hbmd1bGFyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmVyc2lvbiA9ICh3aW5kb3cgYXMgV2luZG93KS5hbmd1bGFyLnZlcnNpb24gJiYgKHdpbmRvdyBhcyBXaW5kb3cpLmFuZ3VsYXIudmVyc2lvbi5mdWxsO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxpYnJhcnkgPT09ICdTdmVsdGUnICYmICh3aW5kb3cgYXMgV2luZG93KS5fX3N2ZWx0ZV9fKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgod2luZG93IGFzIFdpbmRvdykuX19zdmVsdGVfXyAmJiAod2luZG93IGFzIFdpbmRvdykuX19zdmVsdGVfXy52ZXJzaW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnNpb24gPSAod2luZG93IGFzIFdpbmRvdykuX19zdmVsdGVfXy52ZXJzaW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ZlbHRlS2l0RGF0YUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzY3JpcHRbZGF0YS1zdmVsdGVraXQtaHlkcmF0ZV0nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN2ZWx0ZUtpdERhdGFFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVyc2lvbiA9IFwiU3ZlbHRlS2l0XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVyc2lvbiA9IFwiVW5rbm93biB2ZXJzaW9uXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJzaW9uID0gXCJEZXRlY3RlZFwiO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChsaWJyYXJ5ID09PSAnTmV4dC5qcycgJiYgKHdpbmRvdyBhcyBXaW5kb3cpLl9fTkVYVF9EQVRBX18pIHtcbiAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCh3aW5kb3cgYXMgYW55KS5uZXh0ICYmICh3aW5kb3cgYXMgYW55KS5uZXh0LnZlcnNpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmVyc2lvbiA9ICh3aW5kb3cgYXMgYW55KS5uZXh0LnZlcnNpb247XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJzaW9uID0gXCJEZXRlY3RlZFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnNpb24gPSBcIkRldGVjdGVkXCI7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxpYnJhcnkgPT09ICdHYXRzYnkuanMnICYmICh3aW5kb3cgYXMgYW55KS5fX0dBVFNCWSkge1xuICAgICAgICAgICAgICAgICAgICAgIHZlcnNpb24gPSBcIkRldGVjdGVkXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgcmVzdWx0c1tsaWJyYXJ5XSA9IHsgZGV0ZWN0ZWQsIHZlcnNpb24gfTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICByZXN1bHRzW2xpYnJhcnldID0geyBkZXRlY3RlZDogZmFsc2UsIHZlcnNpb246IG51bGwgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC8vIFJldHVybiB0aGUgcmVzdWx0c1xuICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdHMpO1xuICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgaW4gcGFnZSBsb2FkIHdhaXRpbmc6XCIsIGVycm9yKTtcbiAgICAgICAgICAgIHJlc29sdmUoeyBlcnJvcjogZXJyb3IubWVzc2FnZSB8fCBcIkVycm9yIHdhaXRpbmcgZm9yIHBhZ2UgbG9hZFwiIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KVxuICAgIC50aGVuKGluamVjdGlvblJlc3VsdHMgPT4ge1xuICAgICAgaWYgKCFpbmplY3Rpb25SZXN1bHRzIHx8IGluamVjdGlvblJlc3VsdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJlc3VsdHNDb250YWluZXIuaW5uZXJIVE1MID0gJzxkaXYgY2xhc3M9XCJlcnJvci1tZXNzYWdlXCI+RmFpbGVkIHRvIGluamVjdCBkZXRlY3Rpb24gc2NyaXB0PC9kaXY+JztcbiAgICAgICAgdXBkYXRlSXRlbVN0YXR1cygnamF2YXNjcmlwdC1saWJyYXJpZXMnLCAnZXJyb3InKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBpbmplY3Rpb25SZXN1bHRzWzBdLnJlc3VsdDtcbiAgICAgICAgXG4gICAgICAgIC8vIENoZWNrIGlmIHRoZXJlIHdhcyBhbiBlcnJvciBpbiB0aGUgZGV0ZWN0aW9uIHNjcmlwdFxuICAgICAgICBpZiAocmVzdWx0ICYmIHR5cGVvZiByZXN1bHQgPT09ICdvYmplY3QnICYmICdlcnJvcicgaW4gcmVzdWx0KSB7XG4gICAgICAgICAgcmVzdWx0c0NvbnRhaW5lci5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cImVycm9yLW1lc3NhZ2VcIj5FcnJvciBpbiBkZXRlY3Rpb24gc2NyaXB0OiAke3Jlc3VsdC5lcnJvcn08L2Rpdj5gO1xuICAgICAgICAgIHVwZGF0ZUl0ZW1TdGF0dXMoJ2phdmFzY3JpcHQtbGlicmFyaWVzJywgJ2Vycm9yJyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBDYXN0IHRvIHRoZSBleHBlY3RlZCB0eXBlXG4gICAgICAgIGNvbnN0IGxpYnJhcmllcyA9IHJlc3VsdCBhcyBSZWNvcmQ8c3RyaW5nLCB7IGRldGVjdGVkOiBib29sZWFuLCB2ZXJzaW9uOiBzdHJpbmcgfCBudWxsIH0+O1xuICAgICAgICBcbiAgICAgICAgLy8gQ2hlY2sgaWYgbGlicmFyaWVzIGlzIHVuZGVmaW5lZCBvciBub3QgYW4gb2JqZWN0XG4gICAgICAgIGlmICghbGlicmFyaWVzIHx8IHR5cGVvZiBsaWJyYXJpZXMgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgcmVzdWx0c0NvbnRhaW5lci5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cImVycm9yLW1lc3NhZ2VcIj5JbnZhbGlkIHJlc3VsdCBmcm9tIGRldGVjdGlvbiBzY3JpcHQ8L2Rpdj4nO1xuICAgICAgICAgIHVwZGF0ZUl0ZW1TdGF0dXMoJ2phdmFzY3JpcHQtbGlicmFyaWVzJywgJ2Vycm9yJyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXN1bHRzQ29udGFpbmVyLmlubmVySFRNTCA9ICc8aDM+SmF2YVNjcmlwdCBMaWJyYXJpZXM8L2gzPic7XG4gICAgICAgIFxuICAgICAgICBsZXQgZGV0ZWN0ZWRDb3VudCA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgW2xpYnJhcnksIGluZm9dIG9mIE9iamVjdC5lbnRyaWVzKGxpYnJhcmllcykpIHtcbiAgICAgICAgICBjb25zdCBzdGF0dXMgPSBpbmZvLmRldGVjdGVkID8gJ1ByZXNlbnQnIDogJ01pc3NpbmcnO1xuICAgICAgICAgIGxldCBkZXRhaWxzID0gJyc7XG4gICAgICAgICAgXG4gICAgICAgICAgaWYgKGluZm8uZGV0ZWN0ZWQpIHtcbiAgICAgICAgICAgIGRldGVjdGVkQ291bnQrKztcbiAgICAgICAgICAgIGRldGFpbHMgPSBpbmZvLnZlcnNpb24gPyBgVmVyc2lvbjogJHtpbmZvLnZlcnNpb259YCA6ICdWZXJzaW9uOiB1bmtub3duJztcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgZGlzcGxheVJlc3VsdChcbiAgICAgICAgICAgIHJlc3VsdHNDb250YWluZXIsIFxuICAgICAgICAgICAgbGlicmFyeSwgXG4gICAgICAgICAgICBzdGF0dXMsIFxuICAgICAgICAgICAgZGV0YWlscywgXG4gICAgICAgICAgICBgJHtsaWJyYXJ5fSBKYXZhU2NyaXB0IGZyYW1ld29yay9saWJyYXJ5YFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIElmIG5vIGxpYnJhcmllcyB3ZXJlIGRldGVjdGVkLCBhZGQgYSBtZXNzYWdlXG4gICAgICAgIGlmIChkZXRlY3RlZENvdW50ID09PSAwKSB7XG4gICAgICAgICAgY29uc3Qgbm9MaWJyYXJpZXNNc2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICBub0xpYnJhcmllc01zZy5jbGFzc05hbWUgPSAnaW5mby1tZXNzYWdlJztcbiAgICAgICAgICBub0xpYnJhcmllc01zZy50ZXh0Q29udGVudCA9ICdObyBjb21tb24gSmF2YVNjcmlwdCBsaWJyYXJpZXMgZGV0ZWN0ZWQuIFRoZSBwYWdlIG1heSBiZSB1c2luZyB2YW5pbGxhIEphdmFTY3JpcHQgb3IgbGVzcyBjb21tb24gbGlicmFyaWVzLic7XG4gICAgICAgICAgcmVzdWx0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChub0xpYnJhcmllc01zZyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIFNldCBzdGF0dXM6IHdhcm5pbmcgaWYgbm8gbGlicmFyaWVzIGRldGVjdGVkLCBzdWNjZXNzIG90aGVyd2lzZVxuICAgICAgICB1cGRhdGVJdGVtU3RhdHVzKCdqYXZhc2NyaXB0LWxpYnJhcmllcycsIGRldGVjdGVkQ291bnQgPiAwID8gJ3N1Y2Nlc3MnIDogJ3dhcm5pbmcnKTtcbiAgICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHByb2Nlc3NpbmcgbGlicmFyeSBkZXRlY3Rpb24gcmVzdWx0czonLCBlcnIpO1xuICAgICAgICByZXN1bHRzQ29udGFpbmVyLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwiZXJyb3ItbWVzc2FnZVwiPkVycm9yIHByb2Nlc3NpbmcgcmVzdWx0czogJHtlcnIubWVzc2FnZSB8fCAnVW5rbm93biBlcnJvcid9PC9kaXY+YDtcbiAgICAgICAgdXBkYXRlSXRlbVN0YXR1cygnamF2YXNjcmlwdC1saWJyYXJpZXMnLCAnZXJyb3InKTtcbiAgICAgIH1cbiAgICB9KVxuICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKCdMaWJyYXJ5IGRldGVjdGlvbiBlcnJvcjonLCBlcnJvcik7XG4gICAgICByZXN1bHRzQ29udGFpbmVyLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwiZXJyb3ItbWVzc2FnZVwiPkVycm9yIGRldGVjdGluZyBsaWJyYXJpZXM6ICR7ZXJyb3IubWVzc2FnZX08L2Rpdj5gO1xuICAgICAgdXBkYXRlSXRlbVN0YXR1cygnamF2YXNjcmlwdC1saWJyYXJpZXMnLCAnZXJyb3InKTtcbiAgICB9KTtcbiAgfSk7XG4gIFxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gZGV0ZWN0Q29udGVudE1hbmFnZW1lbnRTeXN0ZW0oKSB7XG4gIGNvbnNvbGUubG9nKCdEZXRlY3RpbmcgY29udGVudCBtYW5hZ2VtZW50IHN5c3RlbS4uLicpO1xuICAvLyBHZXQgdGhlIHJlc3VsdHMgY29udGFpbmVyIGZvciB0aGlzIGl0ZW1cbiAgY29uc3QgcmVzdWx0c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHRzLWNtcycpO1xuICBpZiAocmVzdWx0c0NvbnRhaW5lcikge1xuICAgIHJlc3VsdHNDb250YWluZXIuaW5uZXJIVE1MID0gJzxwPkxvYWRpbmcgQ01TIGRhdGEuLi48L3A+JztcbiAgICBcbiAgICAvLyBBZGQgZGVsYXkgdG8gZW5zdXJlIHBhZ2UgaXMgZnVsbHkgbG9hZGVkXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICByZXN1bHRzQ29udGFpbmVyLmlubmVySFRNTCA9ICc8cD5EZXRlY3RpbmcgQ01TLi4uIChOb3QgaW1wbGVtZW50ZWQgeWV0KTwvcD4nO1xuICAgICAgLy8gU2V0IHRvIGRlZmF1bHQgc3RhdGUgc2luY2Ugbm90IGltcGxlbWVudGVkXG4gICAgICB1cGRhdGVJdGVtU3RhdHVzKCdjbXMnLCAnc3VjY2VzcycpO1xuICAgIH0sIDEwMDApO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBpZGVudGlmeUFuYWx5dGljc1Rvb2xzKCkge1xuICBjb25zb2xlLmxvZygnSWRlbnRpZnlpbmcgYW5hbHl0aWNzIHRvb2xzLi4uJyk7XG4gIC8vIEdldCB0aGUgcmVzdWx0cyBjb250YWluZXIgZm9yIHRoaXMgaXRlbVxuICBjb25zdCByZXN1bHRzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdHMtYW5hbHl0aWNzJyk7XG4gIGlmICghcmVzdWx0c0NvbnRhaW5lcikgcmV0dXJuIGZhbHNlO1xuICBcbiAgLy8gU2hvdyBsb2FkaW5nIGluZGljYXRvclxuICByZXN1bHRzQ29udGFpbmVyLmlubmVySFRNTCA9ICc8cD5Mb2FkaW5nIGFuYWx5dGljcyBkYXRhLi4uPC9wPic7XG4gIFxuICAvLyBHZXQgdGhlIGN1cnJlbnQgYWN0aXZlIHRhYlxuICBjaHJvbWUudGFicy5xdWVyeSh7YWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlfSwgKHRhYnMpID0+IHtcbiAgICBjb25zdCBjdXJyZW50VGFiID0gdGFic1swXTtcbiAgICBpZiAoIWN1cnJlbnRUYWIgfHwgIWN1cnJlbnRUYWIudXJsKSB7XG4gICAgICByZXN1bHRzQ29udGFpbmVyLmlubmVySFRNTCA9ICc8ZGl2IGNsYXNzPVwiZXJyb3ItbWVzc2FnZVwiPkNhbm5vdCBhY2Nlc3MgY3VycmVudCB0YWIgaW5mb3JtYXRpb248L2Rpdj4nO1xuICAgICAgdXBkYXRlSXRlbVN0YXR1cygnYW5hbHl0aWNzJywgJ2Vycm9yJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIC8vIENoZWNrIGlmIHdlIGNhbiBhbmFseXplIHRoaXMgVVJMIChtdXN0IGJlIGh0dHAgb3IgaHR0cHMpXG4gICAgY29uc3QgdXJsID0gY3VycmVudFRhYi51cmw7XG4gICAgaWYgKCF1cmwuc3RhcnRzV2l0aCgnaHR0cDovLycpICYmICF1cmwuc3RhcnRzV2l0aCgnaHR0cHM6Ly8nKSkge1xuICAgICAgcmVzdWx0c0NvbnRhaW5lci5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cImVycm9yLW1lc3NhZ2VcIj5DYW4gb25seSBhbmFseXplIEhUVFAvSFRUUFMgcGFnZXM8L2Rpdj4nO1xuICAgICAgdXBkYXRlSXRlbVN0YXR1cygnYW5hbHl0aWNzJywgJ2Vycm9yJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIC8vIEV4ZWN1dGUgc2NyaXB0IGluIHRoZSBjdXJyZW50IHRhYiB0byBkZXRlY3QgYW5hbHl0aWNzIHRvb2xzXG4gICAgY2hyb21lLnNjcmlwdGluZy5leGVjdXRlU2NyaXB0KHtcbiAgICAgIHRhcmdldDogeyB0YWJJZDogY3VycmVudFRhYi5pZCBhcyBudW1iZXIgfSxcbiAgICAgIGZ1bmM6ICgpID0+IHtcbiAgICAgICAgLy8gVHlwZXMgZm9yIGdsb2JhbCBhbmFseXRpY3MgdG9vbHNcbiAgICAgICAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgICAgICAgZ2E/OiBhbnk7XG4gICAgICAgICAgX2dhPzogYW55O1xuICAgICAgICAgIGd0YWc/OiBhbnk7XG4gICAgICAgICAgZGF0YUxheWVyPzogYW55O1xuICAgICAgICAgIF9nYXE/OiBhbnk7XG4gICAgICAgICAgR29vZ2xlQW5hbHl0aWNzT2JqZWN0PzogYW55O1xuICAgICAgICAgIGZicT86IGFueTtcbiAgICAgICAgICBfZmJxPzogYW55O1xuICAgICAgICAgIEZCPzogYW55O1xuICAgICAgICAgIF9oalNldHRpbmdzPzogYW55O1xuICAgICAgICAgIGhqPzogYW55O1xuICAgICAgICAgIGhlYXA/OiBhbnk7XG4gICAgICAgICAgX2hzcT86IGFueTtcbiAgICAgICAgICBtaXhwYW5lbD86IGFueTtcbiAgICAgICAgICBhbXBsaXR1ZGU/OiBhbnk7XG4gICAgICAgICAgcnVkZGVyYW5hbHl0aWNzPzogYW55O1xuICAgICAgICAgIF9wYXE/OiBhbnk7XG4gICAgICAgICAgSW50ZXJjb20/OiBhbnk7XG4gICAgICAgICAgX2ttcT86IGFueTtcbiAgICAgICAgICBhaG95PzogYW55O1xuICAgICAgICAgIHNlZ21lbnQ/OiBhbnk7XG4gICAgICAgICAgYW5hbHl0aWNzPzogYW55O1xuICAgICAgICAgIF9tdG0/OiBhbnk7XG4gICAgICAgICAgemFyYXo/OiBhbnk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIERlZmluZSBhbmFseXRpY3MgdG9vbCBkZXRlY3Rpb24gZnVuY3Rpb25zXG4gICAgICAgIGNvbnN0IGFuYWx5dGljc0RldGVjdG9ycyA9IHtcbiAgICAgICAgICAnR29vZ2xlIEFuYWx5dGljcyAoVW5pdmVyc2FsKSc6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAhIShcbiAgICAgICAgICAgICAgKHdpbmRvdyBhcyBXaW5kb3cpLmdhIHx8IFxuICAgICAgICAgICAgICAod2luZG93IGFzIFdpbmRvdykuX2dhIHx8IFxuICAgICAgICAgICAgICAod2luZG93IGFzIFdpbmRvdykuR29vZ2xlQW5hbHl0aWNzT2JqZWN0IHx8XG4gICAgICAgICAgICAgICh0eXBlb2YgKHdpbmRvdyBhcyBhbnkpLl9nYXQgIT09ICd1bmRlZmluZWQnKSB8fFxuICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzY3JpcHRbc3JjKj1cImdvb2dsZS1hbmFseXRpY3MuY29tL2FuYWx5dGljcy5qc1wiXScpXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgJ0dvb2dsZSBBbmFseXRpY3MgNCc6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAhIShcbiAgICAgICAgICAgICAgKHdpbmRvdyBhcyBXaW5kb3cpLmd0YWcgfHwgXG4gICAgICAgICAgICAgICh3aW5kb3cgYXMgV2luZG93KS5kYXRhTGF5ZXIgfHxcbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2NyaXB0W3NyYyo9XCJnb29nbGV0YWdtYW5hZ2VyLmNvbS9ndGFnL2pzXCJdJykgfHxcbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2NyaXB0W3NyYyo9XCJnb29nbGUtYW5hbHl0aWNzLmNvbS9nL2NvbGxlY3RcIl0nKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgICdHb29nbGUgQW5hbHl0aWNzIChMZWdhY3kpJzogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICEhKFxuICAgICAgICAgICAgICAod2luZG93IGFzIFdpbmRvdykuX2dhcSB8fFxuICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzY3JpcHRbc3JjKj1cImdvb2dsZS1hbmFseXRpY3MuY29tL2dhLmpzXCJdJylcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICAnRmFjZWJvb2sgUGl4ZWwnOiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gISEoXG4gICAgICAgICAgICAgICh3aW5kb3cgYXMgV2luZG93KS5mYnEgfHwgXG4gICAgICAgICAgICAgICh3aW5kb3cgYXMgV2luZG93KS5fZmJxIHx8XG4gICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NjcmlwdFtzcmMqPVwiY29ubmVjdC5mYWNlYm9vay5uZXQvZW5fVVMvZmJldmVudHMuanNcIl0nKSB8fFxuICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdub3NjcmlwdFtzcmMqPVwiZmFjZWJvb2suY29tL3RyXCJdJylcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICAnSG90amFyJzogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICEhKFxuICAgICAgICAgICAgICAod2luZG93IGFzIFdpbmRvdykuX2hqU2V0dGluZ3MgfHwgXG4gICAgICAgICAgICAgICh3aW5kb3cgYXMgV2luZG93KS5oaiB8fFxuICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzY3JpcHRbc3JjKj1cInN0YXRpYy5ob3RqYXIuY29tXCJdJykgfHxcbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2NyaXB0W3NyYyo9XCJzY3JpcHQuaG90amFyLmNvbVwiXScpXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgJ1NlZ21lbnQnOiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gISEoXG4gICAgICAgICAgICAgICh3aW5kb3cgYXMgV2luZG93KS5hbmFseXRpY3MgfHwgXG4gICAgICAgICAgICAgICh3aW5kb3cgYXMgV2luZG93KS5zZWdtZW50IHx8XG4gICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NjcmlwdFtzcmMqPVwiY2RuLnNlZ21lbnQuY29tL2FuYWx5dGljcy5qc1wiXScpXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgJ01peHBhbmVsJzogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICEhKFxuICAgICAgICAgICAgICAod2luZG93IGFzIFdpbmRvdykubWl4cGFuZWwgfHxcbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2NyaXB0W3NyYyo9XCJjZG4ubXhwbmwuY29tL2xpYnMvbWl4cGFuZWxcIl0nKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgICdBbXBsaXR1ZGUnOiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gISEoXG4gICAgICAgICAgICAgICh3aW5kb3cgYXMgV2luZG93KS5hbXBsaXR1ZGUgfHxcbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2NyaXB0W3NyYyo9XCJjZG4uYW1wbGl0dWRlLmNvbVwiXScpXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgJ0h1YlNwb3QnOiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gISEoXG4gICAgICAgICAgICAgICh3aW5kb3cgYXMgV2luZG93KS5faHNxIHx8XG4gICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NjcmlwdFtzcmMqPVwianMuaHMtc2NyaXB0cy5jb21cIl0nKSB8fFxuICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzY3JpcHRbc3JjKj1cImpzLmh1YnNwb3QuY29tXCJdJylcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICAnSGVhcCc6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAhIShcbiAgICAgICAgICAgICAgKHdpbmRvdyBhcyBXaW5kb3cpLmhlYXAgfHxcbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2NyaXB0W3NyYyo9XCJjZG4uaGVhcGFuYWx5dGljcy5jb21cIl0nKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgICdNYXRvbW8vUGl3aWsnOiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gISEoXG4gICAgICAgICAgICAgICh3aW5kb3cgYXMgV2luZG93KS5fcGFxIHx8XG4gICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NjcmlwdFtzcmMqPVwibWF0b21vLmpzXCJdJykgfHxcbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2NyaXB0W3NyYyo9XCJwaXdpay5qc1wiXScpXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgJ0ludGVyY29tJzogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICEhKFxuICAgICAgICAgICAgICAod2luZG93IGFzIFdpbmRvdykuSW50ZXJjb20gfHxcbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2NyaXB0W3NyYyo9XCJ3aWRnZXQuaW50ZXJjb20uaW9cIl0nKSB8fFxuICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzY3JpcHRbc3JjKj1cImFwcC5pbnRlcmNvbS5pb1wiXScpXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgJ0tpc3NtZXRyaWNzJzogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICEhKFxuICAgICAgICAgICAgICAod2luZG93IGFzIFdpbmRvdykuX2ttcSB8fFxuICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzY3JpcHRbc3JjKj1cInNjcmlwdHMua2lzc21ldHJpY3MuY29tXCJdJylcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICAnQWhveSc6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAhIShcbiAgICAgICAgICAgICAgKHdpbmRvdyBhcyBXaW5kb3cpLmFob3lcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICAnUnVkZGVyU3RhY2snOiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gISEoXG4gICAgICAgICAgICAgICh3aW5kb3cgYXMgV2luZG93KS5ydWRkZXJhbmFseXRpY3MgfHxcbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2NyaXB0W3NyYyo9XCJjZG4ucnVkZGVybGFicy5jb21cIl0nKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgICdNYXRvbW8gVGFnIE1hbmFnZXInOiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gISEoXG4gICAgICAgICAgICAgICh3aW5kb3cgYXMgV2luZG93KS5fbXRtIHx8XG4gICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NjcmlwdFtzcmMqPVwibWF0b21vLmpzXCJdJykgfHxcbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2NyaXB0W3NyYyo9XCJtYXRvbW8tdGFnLW1hbmFnZXJcIl0nKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgICdDbG91ZGZsYXJlIFphcmF6JzogKCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgLy8gQ2hlY2sgZm9yIGRpcmVjdCBnbG9iYWwgb2JqZWN0XG4gICAgICAgICAgICAgIGlmICgod2luZG93IGFzIFdpbmRvdykuemFyYXopIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLy8gQ2hlY2sgZm9yIHNjcmlwdCB0YWdcbiAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NjcmlwdCN6YXJheicpIHx8IFxuICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2NyaXB0W3NyYyo9XCJjZG4tY2dpL3phcmF6XCJdJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLy8gQ2hlY2sgZm9yIHphcmF6IGNvbmZpZyBvYmplY3RcbiAgICAgICAgICAgICAgaWYgKCh3aW5kb3cgYXMgYW55KS56YXJhekRhdGEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLy8gQ2hlY2sgZm9yIG1ldGEgdGFnc1xuICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtodHRwLWVxdWl2PVwib3JpZ2luLXRyaWFsXCJdW2NvbnRlbnQqPVwiemFyYXpcIl0nKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAvLyBDaGVjayBmb3IgaW5saW5lIHNjcmlwdHMgY29udGFpbmluZyB6YXJheiB3aXRob3V0IHVzaW5nIHNjcmlwdCBpbmplY3Rpb25cbiAgICAgICAgICAgICAgY29uc3QgYWxsU2NyaXB0cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2NyaXB0Om5vdChbc3JjXSknKSk7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAvLyBMb29rIGZvciB6YXJheiBpbiBzY3JpcHQgY29udGVudFxuICAgICAgICAgICAgICBjb25zdCBoYXNaYXJhekluSW5saW5lU2NyaXB0ID0gYWxsU2NyaXB0cy5zb21lKHNjcmlwdCA9PiBcbiAgICAgICAgICAgICAgICBzY3JpcHQudGV4dENvbnRlbnQgJiYgc2NyaXB0LnRleHRDb250ZW50LmluY2x1ZGVzKCd6YXJheicpXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBpZiAoaGFzWmFyYXpJbklubGluZVNjcmlwdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAvLyBDaGVjayBmb3IgemFyYXogcHJvcGVydGllcyB3aXRob3V0IHVzaW5nIGV2YWwvaW5saW5lIHNjcmlwdHNcbiAgICAgICAgICAgICAgLy8gTG9vayBmb3IgY29tbW9uIHphcmF6IHByb3BlcnR5IHBhdHRlcm5zXG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgLy8gVXNlIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkgdG8gc2FmZWx5IGNoZWNrIHdpbmRvdyBwcm9wZXJ0aWVzXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gd2luZG93KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSAnemFyYXonIHx8IGtleS5pbmNsdWRlcygnemFyYXonKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgemFyYXogaXMgYXZhaWxhYmxlIGluIGFueSBmb3JtIG9uIHdpbmRvd1xuICAgICAgICAgICAgICAgIHJldHVybiB0eXBlb2YgKHdpbmRvdyBhcyBhbnkpLnphcmF6ICE9PSAndW5kZWZpbmVkJztcbiAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgY2hlY2tpbmcgd2luZG93IHByb3BlcnRpZXM6XCIsIGUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRldGVjdGluZyBDbG91ZGZsYXJlIFphcmF6OicsIGUpO1xuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGNoZWNrIGZvciBHb29nbGUgVGFnIE1hbmFnZXJcbiAgICAgICAgZnVuY3Rpb24gZGV0ZWN0R29vZ2xlVGFnTWFuYWdlcigpIHtcbiAgICAgICAgICByZXR1cm4gISEoXG4gICAgICAgICAgICAod2luZG93IGFzIFdpbmRvdykuZGF0YUxheWVyICYmIFxuICAgICAgICAgICAgdHlwZW9mICh3aW5kb3cgYXMgV2luZG93KS5kYXRhTGF5ZXIucHVzaCA9PT0gJ2Z1bmN0aW9uJyB8fFxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2NyaXB0W3NyYyo9XCJnb29nbGV0YWdtYW5hZ2VyLmNvbS9ndG0uanNcIl0nKSB8fFxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignbm9zY3JpcHQgaWZyYW1lW3NyYyo9XCJnb29nbGV0YWdtYW5hZ2VyLmNvbS9ucy5odG1sXCJdJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gd2FpdCBmb3IgcGFnZSB0byBiZSBmdWxseSBsb2FkZWRcbiAgICAgICAgY29uc3Qgd2FpdEZvclBhZ2VMb2FkID0gKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiByZXNvbHZlKCksIHsgb25jZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgMzAwMCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICAvLyBVc2UgUHJvbWlzZSBpbnN0ZWFkIG9mIGFzeW5jL2F3YWl0XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICB3YWl0Rm9yUGFnZUxvYWQoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAvLyBDaGVjayBmb3IgR29vZ2xlIFRhZyBNYW5hZ2VyIGZpcnN0XG4gICAgICAgICAgICAgIGNvbnN0IGhhc0dUTSA9IGRldGVjdEdvb2dsZVRhZ01hbmFnZXIoKTtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC8vIFJ1biBhbGwgdGhlIGRldGVjdG9yc1xuICAgICAgICAgICAgICBjb25zdCByZXN1bHRzOiBSZWNvcmQ8c3RyaW5nLCBib29sZWFuPiA9IHt9O1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLy8gQWRkIEdUTSByZXN1bHQgc2VwYXJhdGVseVxuICAgICAgICAgICAgICByZXN1bHRzWydHb29nbGUgVGFnIE1hbmFnZXInXSA9IGhhc0dUTTtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC8vIFJ1biBhbGwgb3RoZXIgZGV0ZWN0b3IgZnVuY3Rpb25zXG4gICAgICAgICAgICAgIGZvciAoY29uc3QgW3Rvb2wsIGRldGVjdG9yXSBvZiBPYmplY3QuZW50cmllcyhhbmFseXRpY3NEZXRlY3RvcnMpKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgIHJlc3VsdHNbdG9vbF0gPSBkZXRlY3RvcigpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIGRldGVjdGluZyAke3Rvb2x9OmAsIGUpO1xuICAgICAgICAgICAgICAgICAgcmVzdWx0c1t0b29sXSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLy8gTG9vayBmb3IgYWRkaXRpb25hbCBhbmFseXRpY3MgcmVsYXRlZCBzY3JpcHRzXG4gICAgICAgICAgICAgIGNvbnN0IGFsbFNjcmlwdHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NjcmlwdFtzcmNdJykpO1xuICAgICAgICAgICAgICBjb25zdCBzY3JpcHRTb3VyY2VzID0gYWxsU2NyaXB0cy5tYXAoc2NyaXB0ID0+IHNjcmlwdC5nZXRBdHRyaWJ1dGUoJ3NyYycpIHx8ICcnKTtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC8vIENoZWNrIGZvciBvdGhlciBjb21tb24gYW5hbHl0aWNzIHBhdHRlcm5zIGluIHNjcmlwdCBzb3VyY2VzXG4gICAgICAgICAgICAgIGlmIChzY3JpcHRTb3VyY2VzLnNvbWUoc3JjID0+IHNyYy5pbmNsdWRlcygnYW5hbHl0aWNzJykgJiYgIXNyYy5pbmNsdWRlcygnZ29vZ2xlLWFuYWx5dGljcycpKSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdHNbJ090aGVyIEFuYWx5dGljcyBTY3JpcHQnXSA9IHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC8vIFJldHVybiB0aGUgcmVzdWx0c1xuICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdHMpO1xuICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgaW4gcGFnZSBsb2FkIHdhaXRpbmc6XCIsIGVycm9yKTtcbiAgICAgICAgICAgIHJlc29sdmUoeyBlcnJvcjogZXJyb3IubWVzc2FnZSB8fCBcIkVycm9yIHdhaXRpbmcgZm9yIHBhZ2UgbG9hZFwiIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KVxuICAgIC50aGVuKGluamVjdGlvblJlc3VsdHMgPT4ge1xuICAgICAgaWYgKCFpbmplY3Rpb25SZXN1bHRzIHx8IGluamVjdGlvblJlc3VsdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJlc3VsdHNDb250YWluZXIuaW5uZXJIVE1MID0gJzxkaXYgY2xhc3M9XCJlcnJvci1tZXNzYWdlXCI+RmFpbGVkIHRvIGluamVjdCBkZXRlY3Rpb24gc2NyaXB0PC9kaXY+JztcbiAgICAgICAgdXBkYXRlSXRlbVN0YXR1cygnYW5hbHl0aWNzJywgJ2Vycm9yJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gaW5qZWN0aW9uUmVzdWx0c1swXS5yZXN1bHQ7XG4gICAgICAgIFxuICAgICAgICAvLyBDaGVjayBpZiB0aGVyZSB3YXMgYW4gZXJyb3IgaW4gdGhlIGRldGVjdGlvbiBzY3JpcHRcbiAgICAgICAgaWYgKHJlc3VsdCAmJiB0eXBlb2YgcmVzdWx0ID09PSAnb2JqZWN0JyAmJiAnZXJyb3InIGluIHJlc3VsdCkge1xuICAgICAgICAgIHJlc3VsdHNDb250YWluZXIuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJlcnJvci1tZXNzYWdlXCI+RXJyb3IgaW4gZGV0ZWN0aW9uIHNjcmlwdDogJHtyZXN1bHQuZXJyb3J9PC9kaXY+YDtcbiAgICAgICAgICB1cGRhdGVJdGVtU3RhdHVzKCdhbmFseXRpY3MnLCAnZXJyb3InKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIENhc3QgdG8gdGhlIGV4cGVjdGVkIHR5cGVcbiAgICAgICAgY29uc3QgYW5hbHl0aWNzVG9vbHMgPSByZXN1bHQgYXMgUmVjb3JkPHN0cmluZywgYm9vbGVhbj47XG4gICAgICAgIFxuICAgICAgICAvLyBDaGVjayBpZiBhbmFseXRpY3NUb29scyBpcyB1bmRlZmluZWQgb3Igbm90IGFuIG9iamVjdFxuICAgICAgICBpZiAoIWFuYWx5dGljc1Rvb2xzIHx8IHR5cGVvZiBhbmFseXRpY3NUb29scyAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICByZXN1bHRzQ29udGFpbmVyLmlubmVySFRNTCA9ICc8ZGl2IGNsYXNzPVwiZXJyb3ItbWVzc2FnZVwiPkludmFsaWQgcmVzdWx0IGZyb20gZGV0ZWN0aW9uIHNjcmlwdDwvZGl2Pic7XG4gICAgICAgICAgdXBkYXRlSXRlbVN0YXR1cygnYW5hbHl0aWNzJywgJ2Vycm9yJyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXN1bHRzQ29udGFpbmVyLmlubmVySFRNTCA9ICc8aDM+QW5hbHl0aWNzICYgVHJhY2tpbmcgVG9vbHM8L2gzPic7XG4gICAgICAgIFxuICAgICAgICBsZXQgZGV0ZWN0ZWRDb3VudCA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgW3Rvb2wsIGRldGVjdGVkXSBvZiBPYmplY3QuZW50cmllcyhhbmFseXRpY3NUb29scykpIHtcbiAgICAgICAgICBjb25zdCBzdGF0dXMgPSBkZXRlY3RlZCA/ICdQcmVzZW50JyA6ICdNaXNzaW5nJztcbiAgICAgICAgICBcbiAgICAgICAgICBpZiAoZGV0ZWN0ZWQpIHtcbiAgICAgICAgICAgIGRldGVjdGVkQ291bnQrKztcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBnZXRBbmFseXRpY3NUb29sRGVzY3JpcHRpb24odG9vbCk7XG4gICAgICAgICAgXG4gICAgICAgICAgZGlzcGxheVJlc3VsdChcbiAgICAgICAgICAgIHJlc3VsdHNDb250YWluZXIsIFxuICAgICAgICAgICAgdG9vbCwgXG4gICAgICAgICAgICBzdGF0dXMsIFxuICAgICAgICAgICAgJycsIC8vIE5vIHZlcnNpb24gaW5mbyBmb3IgYW5hbHl0aWNzIHRvb2xzXG4gICAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIElmIG5vIHRvb2xzIHdlcmUgZGV0ZWN0ZWQsIGFkZCBhIG1lc3NhZ2VcbiAgICAgICAgaWYgKGRldGVjdGVkQ291bnQgPT09IDApIHtcbiAgICAgICAgICBjb25zdCBub1Rvb2xzTXNnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgbm9Ub29sc01zZy5jbGFzc05hbWUgPSAnaW5mby1tZXNzYWdlJztcbiAgICAgICAgICBub1Rvb2xzTXNnLnRleHRDb250ZW50ID0gJ05vIGNvbW1vbiBhbmFseXRpY3Mgb3IgdHJhY2tpbmcgdG9vbHMgZGV0ZWN0ZWQuIFRoZSBzaXRlIG1heSBiZSB1c2luZyBjdXN0b20gYW5hbHl0aWNzIG9yIHByaXZhY3ktZm9jdXNlZCBhbHRlcm5hdGl2ZXMuJztcbiAgICAgICAgICByZXN1bHRzQ29udGFpbmVyLmFwcGVuZENoaWxkKG5vVG9vbHNNc2cpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBTZXQgc3RhdHVzOiB3YXJuaW5nIGlmIHRvb2xzIGRldGVjdGVkIChwcml2YWN5IGltcGxpY2F0aW9ucyksIHN1Y2Nlc3Mgb3RoZXJ3aXNlXG4gICAgICAgIHVwZGF0ZUl0ZW1TdGF0dXMoJ2FuYWx5dGljcycsIGRldGVjdGVkQ291bnQgPiAwID8gJ3dhcm5pbmcnIDogJ3N1Y2Nlc3MnKTtcbiAgICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHByb2Nlc3NpbmcgYW5hbHl0aWNzIGRldGVjdGlvbiByZXN1bHRzOicsIGVycik7XG4gICAgICAgIHJlc3VsdHNDb250YWluZXIuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJlcnJvci1tZXNzYWdlXCI+RXJyb3IgcHJvY2Vzc2luZyByZXN1bHRzOiAke2Vyci5tZXNzYWdlIHx8ICdVbmtub3duIGVycm9yJ308L2Rpdj5gO1xuICAgICAgICB1cGRhdGVJdGVtU3RhdHVzKCdhbmFseXRpY3MnLCAnZXJyb3InKTtcbiAgICAgIH1cbiAgICB9KVxuICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKCdBbmFseXRpY3MgZGV0ZWN0aW9uIGVycm9yOicsIGVycm9yKTtcbiAgICAgIHJlc3VsdHNDb250YWluZXIuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJlcnJvci1tZXNzYWdlXCI+RXJyb3IgZGV0ZWN0aW5nIGFuYWx5dGljcyB0b29sczogJHtlcnJvci5tZXNzYWdlfTwvZGl2PmA7XG4gICAgICB1cGRhdGVJdGVtU3RhdHVzKCdhbmFseXRpY3MnLCAnZXJyb3InKTtcbiAgICB9KTtcbiAgfSk7XG4gIFxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGdldCBkZXNjcmlwdGlvbnMgZm9yIGFuYWx5dGljcyB0b29sc1xuZnVuY3Rpb24gZ2V0QW5hbHl0aWNzVG9vbERlc2NyaXB0aW9uKHRvb2w6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IGRlc2NyaXB0aW9uczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgICAnR29vZ2xlIEFuYWx5dGljcyAoVW5pdmVyc2FsKSc6ICdUcmFkaXRpb25hbCB3ZWIgYW5hbHl0aWNzIHNlcnZpY2UgZnJvbSBHb29nbGUnLFxuICAgICdHb29nbGUgQW5hbHl0aWNzIDQnOiAnTmV4dC1nZW5lcmF0aW9uIGFuYWx5dGljcyBzZXJ2aWNlIGZyb20gR29vZ2xlJyxcbiAgICAnR29vZ2xlIEFuYWx5dGljcyAoTGVnYWN5KSc6ICdPbGRlciB2ZXJzaW9uIG9mIEdvb2dsZSBBbmFseXRpY3MnLFxuICAgICdHb29nbGUgVGFnIE1hbmFnZXInOiAnQ29udGFpbmVyIGZvciBtYW5hZ2luZyBtYXJrZXRpbmcgYW5kIHRyYWNraW5nIHRhZ3MnLFxuICAgICdGYWNlYm9vayBQaXhlbCc6ICdGYWNlYm9vay9NZXRhIHRyYWNraW5nIHRvb2wgZm9yIGFkdmVydGlzaW5nJyxcbiAgICAnSG90amFyJzogJ0hlYXRtYXBzLCBzZXNzaW9uIHJlY29yZGluZ3MsIGFuZCBmZWVkYmFjayB0b29scycsXG4gICAgJ1NlZ21lbnQnOiAnQ3VzdG9tZXIgZGF0YSBwbGF0Zm9ybSBmb3IgY29sbGVjdGluZyBhbmFseXRpY3MnLFxuICAgICdNaXhwYW5lbCc6ICdQcm9kdWN0IGFuYWx5dGljcyBwbGF0Zm9ybScsXG4gICAgJ0FtcGxpdHVkZSc6ICdQcm9kdWN0IGFuYWx5dGljcyBmb3IgZGlnaXRhbCBvcHRpbWl6YXRpb24nLFxuICAgICdIdWJTcG90JzogJ01hcmtldGluZywgc2FsZXMsIGFuZCBzZXJ2aWNlIHBsYXRmb3JtJyxcbiAgICAnSGVhcCc6ICdBdXRvbWF0aWMgZXZlbnQgY2FwdHVyZSBhbmFseXRpY3MgcGxhdGZvcm0nLFxuICAgICdNYXRvbW8vUGl3aWsnOiAnT3Blbi1zb3VyY2UgYW5hbHl0aWNzIHBsYXRmb3JtJyxcbiAgICAnSW50ZXJjb20nOiAnQ3VzdG9tZXIgbWVzc2FnaW5nIHBsYXRmb3JtJyxcbiAgICAnS2lzc21ldHJpY3MnOiAnQ3VzdG9tZXIgYW5hbHl0aWNzIHBsYXRmb3JtJyxcbiAgICAnQWhveSc6ICdTaW1wbGUsIHBvd2VyZnVsIGFuYWx5dGljcyBmb3IgUmFpbHMnLFxuICAgICdSdWRkZXJTdGFjayc6ICdDdXN0b21lciBkYXRhIHBsYXRmb3JtJyxcbiAgICAnTWF0b21vIFRhZyBNYW5hZ2VyJzogJ1RhZyBtYW5hZ2VtZW50IGZvciBNYXRvbW8nLFxuICAgICdDbG91ZGZsYXJlIFphcmF6JzogJ1NlcnZlci1zaWRlIHRoaXJkLXBhcnR5IHRvb2wgbWFuYWdlciBieSBDbG91ZGZsYXJlJyxcbiAgICAnT3RoZXIgQW5hbHl0aWNzIFNjcmlwdCc6ICdVbmlkZW50aWZpZWQgYW5hbHl0aWNzIG9yIHRyYWNraW5nIHNjcmlwdCdcbiAgfTtcbiAgXG4gIHJldHVybiBkZXNjcmlwdGlvbnNbdG9vbF0gfHwgJ0FuYWx5dGljcyBvciB0cmFja2luZyB0b29sJztcbn1cblxuLy8gVG9nZ2xlIHZpc2liaWxpdHkgb2YgcmVzdWx0cyBjb250YWluZXJcbmZ1bmN0aW9uIHRvZ2dsZVJlc3VsdHNWaXNpYmlsaXR5KGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpIHtcbiAgaWYgKGNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ3Zpc2libGUnKSkge1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gICAgY29udGFpbmVyLnN0eWxlLm1heEhlaWdodCA9ICcwcHgnO1xuICB9IGVsc2Uge1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgY29udGFpbmVyLnN0eWxlLm1heEhlaWdodCA9IGNvbnRhaW5lci5zY3JvbGxIZWlnaHQgKyAncHgnO1xuICAgIFxuICAgIC8vIFVwZGF0ZSBtYXggaGVpZ2h0IG9uIGNvbnRlbnQgY2hhbmdlc1xuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4ge1xuICAgICAgaWYgKGNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ3Zpc2libGUnKSkge1xuICAgICAgICBjb250YWluZXIuc3R5bGUubWF4SGVpZ2h0ID0gY29udGFpbmVyLnNjcm9sbEhlaWdodCArICdweCc7XG4gICAgICB9XG4gICAgfSk7XG4gICAgXG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShjb250YWluZXIsIHsgXG4gICAgICBjaGlsZExpc3Q6IHRydWUsIFxuICAgICAgc3VidHJlZTogdHJ1ZSxcbiAgICAgIGNoYXJhY3RlckRhdGE6IHRydWVcbiAgICB9KTtcbiAgICBcbiAgICAvLyBEaXNjb25uZWN0IGFmdGVyIGEgc2hvcnQgdGltZSB0byBhdm9pZCBtZW1vcnkgbGVha3NcbiAgICBzZXRUaW1lb3V0KCgpID0+IG9ic2VydmVyLmRpc2Nvbm5lY3QoKSwgMjAwMCk7XG4gIH1cbn1cblxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGdldCBoZWFkZXIgdmFsdWUgKGNhc2UtaW5zZW5zaXRpdmUpXG5mdW5jdGlvbiBnZXRIZWFkZXJWYWx1ZShoZWFkZXJzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+LCBoZWFkZXJOYW1lOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcbiAgY29uc3QgaGVhZGVyS2V5ID0gT2JqZWN0LmtleXMoaGVhZGVycykuZmluZChrZXkgPT4gXG4gICAga2V5LnRvTG93ZXJDYXNlKCkgPT09IGhlYWRlck5hbWUudG9Mb3dlckNhc2UoKVxuICApO1xuICBcbiAgcmV0dXJuIGhlYWRlcktleSA/IGhlYWRlcnNbaGVhZGVyS2V5XSA6IG51bGw7XG59XG5cbi8vIEhlbHBlciBmdW5jdGlvbiB0byBkaXNwbGF5IHJlc3VsdHNcbmZ1bmN0aW9uIGRpc3BsYXlSZXN1bHQoXG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIFxuICBoZWFkZXJOYW1lOiBzdHJpbmcsIFxuICBzdGF0dXM6IHN0cmluZywgXG4gIGRldGFpbHM6IHN0cmluZyA9ICcnLCBcbiAgZGVzY3JpcHRpb246IHN0cmluZyA9ICcnXG4pIHtcbiAgY29uc3QgcmVzdWx0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICByZXN1bHRJdGVtLmNsYXNzTmFtZSA9IGByZXN1bHQtaXRlbSAke3N0YXR1cy50b0xvd2VyQ2FzZSgpfWA7XG4gIFxuICBjb25zdCBzdGF0dXNDbGFzcyA9IHN0YXR1cyA9PT0gJ1ByZXNlbnQnID8gJ3N1Y2Nlc3MnIDogXG4gICAgICAgICAgICAgICAgICAgICAoc3RhdHVzID09PSAnRXJyb3InID8gJ2Vycm9yJyA6ICd3YXJuaW5nJyk7XG4gIFxuICByZXN1bHRJdGVtLmlubmVySFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLW5hbWVcIj4ke2hlYWRlck5hbWV9PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInN0YXR1cyAke3N0YXR1c0NsYXNzfVwiPiR7c3RhdHVzfTwvZGl2PlxuICAgICR7ZGV0YWlscyA/IGA8ZGl2IGNsYXNzPVwiZGV0YWlsc1wiPiR7ZGV0YWlsc308L2Rpdj5gIDogJyd9XG4gICAgJHtkZXNjcmlwdGlvbiA/IGA8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb25cIj4ke2Rlc2NyaXB0aW9ufTwvZGl2PmAgOiAnJ31cbiAgYDtcbiAgXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyZXN1bHRJdGVtKTtcbn1cblxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgY2hlY2tsaXN0IGl0ZW0gc3RhdHVzXG5mdW5jdGlvbiB1cGRhdGVJdGVtU3RhdHVzKGl0ZW1JZDogc3RyaW5nLCBzdGF0dXM6ICdzdWNjZXNzJyB8ICd3YXJuaW5nJyB8ICdlcnJvcicpIHtcbiAgY29uc3QgY2hlY2tsaXN0SXRlbVBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNyZXN1bHRzLSR7aXRlbUlkfWApO1xuICBpZiAoIWNoZWNrbGlzdEl0ZW1QYXJlbnQpIHJldHVybjtcbiAgXG4gIGNvbnN0IGNoZWNrbGlzdEl0ZW0gPSBjaGVja2xpc3RJdGVtUGFyZW50LnBhcmVudEVsZW1lbnQ7XG4gIGlmICghY2hlY2tsaXN0SXRlbSkgcmV0dXJuO1xuICBcbiAgY29uc3QgY2hlY2ttYXJrID0gY2hlY2tsaXN0SXRlbS5xdWVyeVNlbGVjdG9yKCcuY2hlY2ttYXJrJyk7XG4gIGlmICghY2hlY2ttYXJrKSByZXR1cm47XG4gIFxuICAvLyBSZXNldCBleGlzdGluZyBjbGFzc2VzXG4gIGNoZWNrbWFyay5jbGFzc0xpc3QucmVtb3ZlKCdzdWNjZXNzJywgJ3dhcm5pbmcnLCAnZXJyb3InKTtcbiAgY2hlY2ttYXJrLmNsYXNzTGlzdC5hZGQoc3RhdHVzKTtcbiAgXG4gIC8vIFVwZGF0ZSBpY29uIGJhc2VkIG9uIHN0YXR1c1xuICBpZiAoc3RhdHVzID09PSAnc3VjY2VzcycpIHtcbiAgICBjaGVja21hcmsuaW5uZXJIVE1MID0gJ+Kckyc7XG4gIH0gZWxzZSBpZiAoc3RhdHVzID09PSAnd2FybmluZycpIHtcbiAgICBjaGVja21hcmsuaW5uZXJIVE1MID0gJ+KaoCc7XG4gIH0gZWxzZSBpZiAoc3RhdHVzID09PSAnZXJyb3InKSB7XG4gICAgY2hlY2ttYXJrLmlubmVySFRNTCA9ICfinJcnO1xuICB9XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGNvbnN0IGFwcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKTtcbiAgaWYgKGFwcCkge1xuICAgIC8vIENyZWF0ZSBoZWFkZXJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9ICdXaG8gRGlzPyc7XG4gICAgYXBwLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgXG4gICAgLy8gQ3JlYXRlIGNoZWNrbGlzdCB3aXRoIGNvcnJlc3BvbmRpbmcgZnVuY3Rpb25zXG4gICAgY29uc3QgY2hlY2tsaXN0SXRlbXNXaXRoRnVuY3Rpb25zID0gW1xuICAgICAgeyBcbiAgICAgICAgaWQ6ICdzaXRlLXRlY2hub2xvZ3knLFxuICAgICAgICBuYW1lOiAnU2l0ZSB0ZWNobm9sb2d5IHNjYW4nLCBcbiAgICAgICAgZnVuY3Rpb246IHNjYW5TaXRlVGVjaG5vbG9neSBcbiAgICAgIH0sXG4gICAgICB7IFxuICAgICAgICBpZDogJ3NlY3VyaXR5LWhlYWRlcnMnLFxuICAgICAgICBuYW1lOiAnU2VjdXJpdHkgaGVhZGVycyBjaGVjaycsIFxuICAgICAgICBmdW5jdGlvbjogY2hlY2tTZWN1cml0eUhlYWRlcnMgXG4gICAgICB9LFxuICAgICAgeyBcbiAgICAgICAgaWQ6ICdqYXZhc2NyaXB0LWxpYnJhcmllcycsXG4gICAgICAgIG5hbWU6ICdKYXZhU2NyaXB0IGxpYnJhcnkgZGV0ZWN0aW9uJywgXG4gICAgICAgIGZ1bmN0aW9uOiBkZXRlY3RKYXZhU2NyaXB0TGlicmFyaWVzIFxuICAgICAgfSxcbiAgICAgIHsgXG4gICAgICAgIGlkOiAnY21zJyxcbiAgICAgICAgbmFtZTogJ0NvbnRlbnQgbWFuYWdlbWVudCBzeXN0ZW0gZGV0ZWN0aW9uJywgXG4gICAgICAgIGZ1bmN0aW9uOiBkZXRlY3RDb250ZW50TWFuYWdlbWVudFN5c3RlbSBcbiAgICAgIH0sXG4gICAgICB7IFxuICAgICAgICBpZDogJ2FuYWx5dGljcycsXG4gICAgICAgIG5hbWU6ICdBbmFseXRpY3MgdG9vbHMgaWRlbnRpZmljYXRpb24nLCBcbiAgICAgICAgZnVuY3Rpb246IGlkZW50aWZ5QW5hbHl0aWNzVG9vbHMgXG4gICAgICB9XG4gICAgXTtcbiAgICBcbiAgICBjb25zdCBjaGVja2xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGNoZWNrbGlzdC5jbGFzc05hbWUgPSAnY2hlY2tsaXN0JztcbiAgICBcbiAgICBjaGVja2xpc3RJdGVtc1dpdGhGdW5jdGlvbnMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIC8vIENyZWF0ZSBsaXN0IGl0ZW0gY29udGFpbmVyXG4gICAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICBsaXN0SXRlbS5jbGFzc05hbWUgPSAnY2hlY2tsaXN0LWl0ZW0tY29udGFpbmVyJztcbiAgICAgIFxuICAgICAgLy8gQ3JlYXRlIGhlYWRlciB3aXRoIGNoZWNrbWFyayBhbmQgdGl0bGVcbiAgICAgIGNvbnN0IGl0ZW1IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGl0ZW1IZWFkZXIuY2xhc3NOYW1lID0gJ2NoZWNrbGlzdC1oZWFkZXInO1xuICAgICAgXG4gICAgICBjb25zdCBjaGVja21hcmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBjaGVja21hcmsuY2xhc3NOYW1lID0gJ2NoZWNrbWFyayBzdWNjZXNzJztcbiAgICAgIGNoZWNrbWFyay5pbm5lckhUTUwgPSAn4pyTJztcbiAgICAgIFxuICAgICAgY29uc3QgaXRlbVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBpdGVtVGV4dC5jbGFzc05hbWUgPSAnY2hlY2tsaXN0LWl0ZW0nO1xuICAgICAgaXRlbVRleHQudGV4dENvbnRlbnQgPSBpdGVtLm5hbWU7XG4gICAgICBcbiAgICAgIGNvbnN0IGV4cGFuZEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBleHBhbmRJY29uLmNsYXNzTmFtZSA9ICdleHBhbmQtaWNvbic7XG4gICAgICBleHBhbmRJY29uLmlubmVySFRNTCA9ICfilrwnO1xuICAgICAgXG4gICAgICBpdGVtSGVhZGVyLmFwcGVuZENoaWxkKGNoZWNrbWFyayk7XG4gICAgICBpdGVtSGVhZGVyLmFwcGVuZENoaWxkKGl0ZW1UZXh0KTtcbiAgICAgIGl0ZW1IZWFkZXIuYXBwZW5kQ2hpbGQoZXhwYW5kSWNvbik7XG4gICAgICBcbiAgICAgIC8vIENyZWF0ZSByZXN1bHRzIGNvbnRhaW5lciAoaW5pdGlhbGx5IGhpZGRlbilcbiAgICAgIGNvbnN0IHJlc3VsdHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHJlc3VsdHNDb250YWluZXIuY2xhc3NOYW1lID0gJ3Jlc3VsdHMtY29udGFpbmVyJztcbiAgICAgIHJlc3VsdHNDb250YWluZXIuaWQgPSBgcmVzdWx0cy0ke2l0ZW0uaWR9YDtcbiAgICAgIHJlc3VsdHNDb250YWluZXIuc3R5bGUubWF4SGVpZ2h0ID0gJzBweCc7XG4gICAgICByZXN1bHRzQ29udGFpbmVyLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICBcbiAgICAgIC8vIEFkZCBjbGljayBldmVudCB0byBoZWFkZXIgdG8gdG9nZ2xlIHZpc2liaWxpdHlcbiAgICAgIGl0ZW1IZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIC8vIFRvZ2dsZSBhY3RpdmUgc3RhdGUgZm9yIHZpc3VhbCBmZWVkYmFja1xuICAgICAgICBsaXN0SXRlbS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICAgICAgLy8gVG9nZ2xlIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSByZXN1bHRzXG4gICAgICAgIHRvZ2dsZVJlc3VsdHNWaXNpYmlsaXR5KHJlc3VsdHNDb250YWluZXIpO1xuICAgICAgfSk7XG4gICAgICBcbiAgICAgIC8vIEFzc2VtYmxlIHRoZSBsaXN0IGl0ZW1cbiAgICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGl0ZW1IZWFkZXIpO1xuICAgICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQocmVzdWx0c0NvbnRhaW5lcik7XG4gICAgICBjaGVja2xpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICAgIH0pO1xuICAgIFxuICAgIGFwcC5hcHBlbmRDaGlsZChjaGVja2xpc3QpO1xuICAgIFxuICAgIC8vIFJ1biBhbGwgc2NhbiBmdW5jdGlvbnMgYXV0b21hdGljYWxseSB3aGVuIHBvcHVwIGxvYWRzXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjaGVja2xpc3RJdGVtc1dpdGhGdW5jdGlvbnMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaXRlbS5mdW5jdGlvbigpO1xuICAgICAgfSk7XG4gICAgfSwgNTAwKTsgLy8gSW5jcmVhc2VkIGZyb20gMTAwbXMgdG8gNTAwbXMgZm9yIGJldHRlciBpbml0aWFsaXphdGlvblxuICB9XG59KTsgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9