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
                            // Check for Vue ecosystem libraries in the global scope
                            if (window.Vuex ||
                                window.$vuetify ||
                                window.$nuxt) {
                                return true;
                            }
                            // Check for Vue in debug mode (Vue 3 sets this)
                            if (window.__VUE_PROD_DEVTOOLS__) {
                                return true;
                            }
                            // Detect Vue 3 by searching for app instance in document elements
                            const allElements = Array.from(document.querySelectorAll('*'));
                            // Check for Vue 3 instance properties on DOM elements
                            const hasVueInstance = allElements.some(el => {
                                try {
                                    // Vue 3 instance properties
                                    const keys = Object.keys(el);
                                    const hasVue = keys.some(key => key.startsWith('__vue') ||
                                        key.startsWith('__vue_') ||
                                        key === '__vue' ||
                                        key.includes('__vue'));
                                    // Vue 3 also adds properties to DOM elements called __vueParentComponent
                                    if (hasVue ||
                                        el.__vueParentComponent ||
                                        el.__vnode ||
                                        el._vnode ||
                                        el._vueEl) {
                                        return true;
                                    }
                                    // Check if element has property that looks like Vue's reactivity system
                                    for (const key in el) {
                                        if (key.startsWith('_') &&
                                            typeof el[key] === 'object' &&
                                            el[key] !== null &&
                                            typeof el[key].then === 'function') {
                                            // Vue 3 suspense uses Promises for async components
                                            return true;
                                        }
                                        if (key.startsWith('_') &&
                                            typeof el[key] === 'object' &&
                                            el[key] !== null &&
                                            (el[key].__ob__ || el[key].__v_isRef)) {
                                            // Vue 2 & 3 reactivity indicators
                                            return true;
                                        }
                                    }
                                    return false;
                                }
                                catch (e) {
                                    // Some elements may throw when accessing properties
                                    return false;
                                }
                            });
                            if (hasVueInstance) {
                                return true;
                            }
                            // Check for meta tags with vue-specific content
                            const metaTags = document.querySelectorAll('meta');
                            for (let i = 0; i < metaTags.length; i++) {
                                const content = metaTags[i].getAttribute('content') || '';
                                if (content.includes('vue') &&
                                    (content.includes('framework') || content.includes('generator'))) {
                                    return true;
                                }
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
                                const attributeNames = el.getAttributeNames();
                                // Check for v-bind shorthand (:) or v-on shorthand (@)
                                return attributeNames.some(attr => attr.startsWith(':') || attr.startsWith('@'));
                            });
                            if (hasShorthandDirectives) {
                                return true;
                            }
                            // Check for Vue app root elements (common conventions)
                            if (document.querySelector('#app[data-v-app]') ||
                                document.querySelector('#app > [data-v-]') ||
                                document.querySelector('.vue-app') ||
                                document.querySelector('#q-app') || // Quasar framework
                                document.querySelector('#nuxt-app') || // Nuxt.js
                                document.querySelector('#__nuxt') || // Nuxt.js
                                document.querySelector('#__layout') || // Nuxt.js
                                document.querySelector('[data-server-rendered]') // Vue SSR
                            ) {
                                return true;
                            }
                            // Look for common Vue component naming in classes
                            const vueClassPattern = /-(vue|v)-/;
                            const hasVueClasses = allElements.some(el => {
                                return el.className &&
                                    typeof el.className === 'string' &&
                                    vueClassPattern.test(el.className);
                            });
                            if (hasVueClasses) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLE9BQU8sdUZBQXVGLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8s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QyxLQUFLLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN6QyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztZQUUzQyxpREFBaUQ7WUFDakQsVUFBVSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7Z0JBQ3hDLDBDQUEwQztnQkFDMUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3BDLHVDQUF1QztnQkFDdkMsdUJBQXVCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUM1QyxDQUFDLENBQUMsQ0FBQztZQUVILHlCQUF5QjtZQUN6QixRQUFRLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2pDLFFBQVEsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUN2QyxTQUFTLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxDQUFDO1FBRUgsR0FBRyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUUzQix3REFBd0Q7UUFDeEQsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLDJCQUEyQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDekMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2xCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsMERBQTBEO0lBQ3JFLENBQUM7QUFDSCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3doby1kaXMtc2l0ZS1zY2FubmVyLy4vc3JjL3BvcHVwLmNzcyIsIndlYnBhY2s6Ly93aG8tZGlzLXNpdGUtc2Nhbm5lci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2hvLWRpcy1zaXRlLXNjYW5uZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93aG8tZGlzLXNpdGUtc2Nhbm5lci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93aG8tZGlzLXNpdGUtc2Nhbm5lci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2hvLWRpcy1zaXRlLXNjYW5uZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2hvLWRpcy1zaXRlLXNjYW5uZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2hvLWRpcy1zaXRlLXNjYW5uZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93aG8tZGlzLXNpdGUtc2Nhbm5lci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3doby1kaXMtc2l0ZS1zY2FubmVyLy4vc3JjL3BvcHVwLmNzcz81OWY5Iiwid2VicGFjazovL3doby1kaXMtc2l0ZS1zY2FubmVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3doby1kaXMtc2l0ZS1zY2FubmVyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3doby1kaXMtc2l0ZS1zY2FubmVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93aG8tZGlzLXNpdGUtc2Nhbm5lci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3doby1kaXMtc2l0ZS1zY2FubmVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2hvLWRpcy1zaXRlLXNjYW5uZXIvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3doby1kaXMtc2l0ZS1zY2FubmVyLy4vc3JjL3BvcHVwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBQb3B1cCBTdHlsZXMgKi9cbmJvZHkge1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHdpZHRoOiA0ODBweDtcbiAgbWluLWhlaWdodDogNDAwcHg7XG4gIGNvbG9yOiAjMzMzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmYWZjO1xufVxuXG4jYXBwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyMHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbmgxIHtcbiAgbWFyZ2luOiAwIDAgMTVweCAwO1xuICBjb2xvcjogIzJjM2U1MDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XG4gIHRleHQtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLDAsMCwwLjA1KTtcbn1cblxuaDMge1xuICBtYXJnaW46IDEwcHggMDtcbiAgY29sb3I6ICMyYzNlNTA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmNoZWNrbGlzdCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuLmNoZWNrbGlzdC1pdGVtLWNvbnRhaW5lciB7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4wNSk7XG59XG5cbi5jaGVja2xpc3QtaXRlbS1jb250YWluZXIuYWN0aXZlIHtcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBib3JkZXItY29sb3I6IHJnYmEoNTIsIDE1MiwgMjE5LCAwLjMpO1xufVxuXG4uY2hlY2tsaXN0LWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE0cHggMTZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY2hlY2tsaXN0LWhlYWRlcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY5ZmY7XG59XG5cbi5jaGVja2xpc3QtaXRlbS1jb250YWluZXIuYWN0aXZlIC5jaGVja2xpc3QtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViZjVmZjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoNTIsIDE1MiwgMjE5LCAwLjIpO1xufVxuXG4uY2hlY2ttYXJrIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGhlaWdodDogMjRweDtcbiAgd2lkdGg6IDI0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLyogU3RhdHVzLXNwZWNpZmljIGNoZWNrbWFyayBzdHlsZXMgKi9cbi5jaGVja21hcmsuc3VjY2VzcyB7XG4gIGNvbG9yOiAjNENBRjUwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc2LCAxNzUsIDgwLCAwLjEpO1xufVxuXG4uY2hlY2ttYXJrLndhcm5pbmcge1xuICBjb2xvcjogI0ZGOTgwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE1MiwgMCwgMC4xKTtcbn1cblxuLmNoZWNrbWFyay5lcnJvciB7XG4gIGNvbG9yOiAjRjQ0MzM2O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NCwgNjcsIDU0LCAwLjEpO1xufVxuXG4uY2hlY2tsaXN0LWl0ZW0ge1xuICBmbGV4OiAxO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjNDQ0O1xufVxuXG4uZXhwYW5kLWljb24ge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogIzY2NjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjA1KTtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmNoZWNrbGlzdC1pdGVtLWNvbnRhaW5lci5hY3RpdmUgLmV4cGFuZC1pY29uIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1MiwgMTUyLCAyMTksIDAuMik7XG4gIGNvbG9yOiAjMzQ5OGRiO1xufVxuXG4vKiBSZXN1bHRzIENvbnRhaW5lciBTdHlsaW5nICovXG4ucmVzdWx0cy1jb250YWluZXIge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjA1KTtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuXG4ucmVzdWx0cy1jb250YWluZXIudmlzaWJsZSB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbi5yZXN1bHQtaXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjY2NjO1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLDAsMCwwLjA1KTtcbn1cblxuLnJlc3VsdC1pdGVtOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4ucmVzdWx0LWl0ZW0ucHJlc2VudCB7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjNENBRjUwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmOGU5O1xufVxuXG4ucmVzdWx0LWl0ZW0ubWlzc2luZyB7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjRkY5ODAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOGUxO1xufVxuXG4ucmVzdWx0LWl0ZW0uZXJyb3Ige1xuICBib3JkZXItbGVmdC1jb2xvcjogI0Y0NDMzNjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWJlZTtcbn1cblxuLmhlYWRlci1uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICBjb2xvcjogIzJjM2U1MDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uc3RhdHVzIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nOiAzcHggOHB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnN0YXR1cy5zdWNjZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc3RhdHVzLndhcm5pbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY5ODAwO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5zdGF0dXMuZXJyb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjQ0MzM2O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5kZXRhaWxzIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbiAgY29sb3I6ICM1NTU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4wMik7XG4gIHBhZGRpbmc6IDZweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzc3NztcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gIGNvbG9yOiAjRjQ0MzM2O1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nOiAxMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYmVlO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjQ0LCA2NywgNTQsIDAuMik7XG59XG5cbi5pbmZvLW1lc3NhZ2Uge1xuICBjb2xvcjogIzIxOTZGMztcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZzogMTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UzZjJmZDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDMzLCAxNTAsIDI0MywgMC4yKTtcbn0gYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcG9wdXAuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGlCQUFpQjtBQUNqQjtFQUNFLHdJQUF3STtFQUN4SSxTQUFTO0VBQ1QsYUFBYTtFQUNiLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsV0FBVztFQUNYLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0Qix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxj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dXAgU3R5bGVzICovXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIHdpZHRoOiA0ODBweDtcXG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xcbiAgY29sb3I6ICMzMzM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmYWZjO1xcbn1cXG5cXG4jYXBwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyMHB4O1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG5oMSB7XFxuICBtYXJnaW46IDAgMCAxNXB4IDA7XFxuICBjb2xvcjogIzJjM2U1MDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsMCwwLDAuMDUpO1xcbn1cXG5cXG5oMyB7XFxuICBtYXJnaW46IDEwcHggMDtcXG4gIGNvbG9yOiAjMmMzZTUwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmNoZWNrbGlzdCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmNoZWNrbGlzdC1pdGVtLWNvbnRhaW5lciB7XFxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMDUpO1xcbn1cXG5cXG4uY2hlY2tsaXN0LWl0ZW0tY29udGFpbmVyLmFjdGl2ZSB7XFxuICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XFxuICBib3JkZXItY29sb3I6IHJnYmEoNTIsIDE1MiwgMjE5LCAwLjMpO1xcbn1cXG5cXG4uY2hlY2tsaXN0LWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDE0cHggMTZweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmNoZWNrbGlzdC1oZWFkZXI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjlmZjtcXG59XFxuXFxuLmNoZWNrbGlzdC1pdGVtLWNvbnRhaW5lci5hY3RpdmUgLmNoZWNrbGlzdC1oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViZjVmZjtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDUyLCAxNTIsIDIxOSwgMC4yKTtcXG59XFxuXFxuLmNoZWNrbWFyayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmbGV4LXNocmluazogMDtcXG4gIGhlaWdodDogMjRweDtcXG4gIHdpZHRoOiAyNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4vKiBTdGF0dXMtc3BlY2lmaWMgY2hlY2ttYXJrIHN0eWxlcyAqL1xcbi5jaGVja21hcmsuc3VjY2VzcyB7XFxuICBjb2xvcjogIzRDQUY1MDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzYsIDE3NSwgODAsIDAuMSk7XFxufVxcblxcbi5jaGVja21hcmsud2FybmluZyB7XFxuICBjb2xvcjogI0ZGOTgwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxNTIsIDAsIDAuMSk7XFxufVxcblxcbi5jaGVja21hcmsuZXJyb3Ige1xcbiAgY29sb3I6ICNGNDQzMzY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NCwgNjcsIDU0LCAwLjEpO1xcbn1cXG5cXG4uY2hlY2tsaXN0LWl0ZW0ge1xcbiAgZmxleDogMTtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBjb2xvcjogIzQ0NDtcXG59XFxuXFxuLmV4cGFuZC1pY29uIHtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG4gIGNvbG9yOiAjNjY2O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjA1KTtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLmNoZWNrbGlzdC1pdGVtLWNvbnRhaW5lci5hY3RpdmUgLmV4cGFuZC1pY29uIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUyLCAxNTIsIDIxOSwgMC4yKTtcXG4gIGNvbG9yOiAjMzQ5OGRiO1xcbn1cXG5cXG4vKiBSZXN1bHRzIENvbnRhaW5lciBTdHlsaW5nICovXFxuLnJlc3VsdHMtY29udGFpbmVyIHtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMDUpO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ucmVzdWx0cy1jb250YWluZXIudmlzaWJsZSB7XFxuICBwYWRkaW5nOiAxNnB4O1xcbn1cXG5cXG4ucmVzdWx0LWl0ZW0ge1xcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBib3JkZXItbGVmdDogNHB4IHNvbGlkICNjY2M7XFxuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLDAsMCwwLjA1KTtcXG59XFxuXFxuLnJlc3VsdC1pdGVtOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuXFxuLnJlc3VsdC1pdGVtLnByZXNlbnQge1xcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICM0Q0FGNTA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmOGU5O1xcbn1cXG5cXG4ucmVzdWx0LWl0ZW0ubWlzc2luZyB7XFxuICBib3JkZXItbGVmdC1jb2xvcjogI0ZGOTgwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY4ZTE7XFxufVxcblxcbi5yZXN1bHQtaXRlbS5lcnJvciB7XFxuICBib3JkZXItbGVmdC1jb2xvcjogI0Y0NDMzNjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmViZWU7XFxufVxcblxcbi5oZWFkZXItbmFtZSB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xcbiAgY29sb3I6ICMyYzNlNTA7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbi5zdGF0dXMge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgcGFkZGluZzogM3B4IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tYm90dG9tOiA2cHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4uc3RhdHVzLnN1Y2Nlc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnN0YXR1cy53YXJuaW5nIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjk4MDA7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5zdGF0dXMuZXJyb3Ige1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y0NDMzNjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmRldGFpbHMge1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xcbiAgY29sb3I6ICM1NTU7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMDIpO1xcbiAgcGFkZGluZzogNnB4IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxufVxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBjb2xvcjogIzc3NztcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLmVycm9yLW1lc3NhZ2Uge1xcbiAgY29sb3I6ICNGNDQzMzY7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgcGFkZGluZzogMTJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmViZWU7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNDQsIDY3LCA1NCwgMC4yKTtcXG59XFxuXFxuLmluZm8tbWVzc2FnZSB7XFxuICBjb2xvcjogIzIxOTZGMztcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UzZjJmZDtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDMzLCAxNTAsIDI0MywgMC4yKTtcXG59IFwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcG9wdXAuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcG9wdXAuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3BvcHVwLmNzcyc7XG5cbi8vIEZ1bmN0aW9ucyBmb3IgY2hlY2tsaXN0IGl0ZW1zXG5mdW5jdGlvbiBzY2FuU2l0ZVRlY2hub2xvZ3koKSB7XG4gIGNvbnNvbGUubG9nKCdTY2FubmluZyBzaXRlIHRlY2hub2xvZ2llcy4uLicpO1xuICAvLyBHZXQgdGhlIHJlc3VsdHMgY29udGFpbmVyIGZvciB0aGlzIGl0ZW1cbiAgY29uc3QgcmVzdWx0c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHRzLXNpdGUtdGVjaG5vbG9neScpO1xuICBpZiAocmVzdWx0c0NvbnRhaW5lcikge1xuICAgIHJlc3VsdHNDb250YWluZXIuaW5uZXJIVE1MID0gJzxwPkxvYWRpbmcgc2l0ZSB0ZWNobm9sb2dpZXMgZGF0YS4uLjwvcD4nO1xuICAgIFxuICAgIC8vIEFkZCBkZWxheSB0byBlbnN1cmUgcGFnZSBpcyBmdWxseSBsb2FkZWRcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHJlc3VsdHNDb250YWluZXIuaW5uZXJIVE1MID0gJzxwPlNjYW5uaW5nIHNpdGUgdGVjaG5vbG9naWVzLi4uIChOb3QgaW1wbGVtZW50ZWQgeWV0KTwvcD4nO1xuICAgICAgLy8gU2V0IHRvIGRlZmF1bHQgc3RhdGUgc2luY2Ugbm90IGltcGxlbWVudGVkXG4gICAgICB1cGRhdGVJdGVtU3RhdHVzKCdzaXRlLXRlY2hub2xvZ3knLCAnc3VjY2VzcycpO1xuICAgIH0sIDEwMDApO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBjaGVja1NlY3VyaXR5SGVhZGVycygpIHtcbiAgY29uc29sZS5sb2coJ0NoZWNraW5nIHNlY3VyaXR5IGhlYWRlcnMuLi4nKTtcbiAgXG4gIC8vIEdldCB0aGUgcmVzdWx0cyBjb250YWluZXIgZm9yIHRoaXMgaXRlbVxuICBjb25zdCByZXN1bHRzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdHMtc2VjdXJpdHktaGVhZGVycycpO1xuICBpZiAoIXJlc3VsdHNDb250YWluZXIpIHJldHVybiBmYWxzZTtcbiAgXG4gIC8vIFNob3cgbG9hZGluZyBpbmRpY2F0b3JcbiAgcmVzdWx0c0NvbnRhaW5lci5pbm5lckhUTUwgPSAnPHA+TG9hZGluZyBzZWN1cml0eSBoZWFkZXJzIGRhdGEuLi48L3A+JztcbiAgXG4gIC8vIEFkZCBhIGRlbGF5IHRvIGVuc3VyZSBwYWdlIGlzIGZ1bGx5IGxvYWRlZFxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAvLyBHZXQgdGhlIGN1cnJlbnQgYWN0aXZlIHRhYlxuICAgIGNocm9tZS50YWJzLnF1ZXJ5KHthY3RpdmU6IHRydWUsIGN1cnJlbnRXaW5kb3c6IHRydWV9LCAodGFicykgPT4ge1xuICAgICAgY29uc3QgY3VycmVudFRhYiA9IHRhYnNbMF07XG4gICAgICBpZiAoIWN1cnJlbnRUYWIgfHwgIWN1cnJlbnRUYWIudXJsKSB7XG4gICAgICAgIHJlc3VsdHNDb250YWluZXIuaW5uZXJIVE1MID0gJzxkaXYgY2xhc3M9XCJlcnJvci1tZXNzYWdlXCI+Q2Fubm90IGFjY2VzcyBjdXJyZW50IHRhYiBpbmZvcm1hdGlvbjwvZGl2Pic7XG4gICAgICAgIHVwZGF0ZUl0ZW1TdGF0dXMoJ3NlY3VyaXR5LWhlYWRlcnMnLCAnZXJyb3InKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgXG4gICAgICAvLyBDaGVjayBpZiB3ZSBjYW4gYW5hbHl6ZSB0aGlzIFVSTCAobXVzdCBiZSBodHRwIG9yIGh0dHBzKVxuICAgICAgY29uc3QgdXJsID0gY3VycmVudFRhYi51cmw7XG4gICAgICBpZiAoIXVybC5zdGFydHNXaXRoKCdodHRwOi8vJykgJiYgIXVybC5zdGFydHNXaXRoKCdodHRwczovLycpKSB7XG4gICAgICAgIHJlc3VsdHNDb250YWluZXIuaW5uZXJIVE1MID0gJzxkaXYgY2xhc3M9XCJlcnJvci1tZXNzYWdlXCI+Q2FuIG9ubHkgYW5hbHl6ZSBIVFRQL0hUVFBTIHBhZ2VzPC9kaXY+JztcbiAgICAgICAgdXBkYXRlSXRlbVN0YXR1cygnc2VjdXJpdHktaGVhZGVycycsICdlcnJvcicpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8vIEZldGNoIGhlYWRlcnMgdXNpbmcgYmFja2dyb3VuZCBzY3JpcHQgKG5lZWRlZCBmb3IgQ09SUylcbiAgICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHthY3Rpb246ICdmZXRjaEhlYWRlcnMnLCB1cmw6IHVybH0sIChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2UuZXJyb3IpIHtcbiAgICAgICAgICByZXN1bHRzQ29udGFpbmVyLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwiZXJyb3ItbWVzc2FnZVwiPiR7cmVzcG9uc2UuZXJyb3J9PC9kaXY+YDtcbiAgICAgICAgICB1cGRhdGVJdGVtU3RhdHVzKCdzZWN1cml0eS1oZWFkZXJzJywgJ2Vycm9yJyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXN1bHRzQ29udGFpbmVyLmlubmVySFRNTCA9ICc8aDM+U2VjdXJpdHkgSGVhZGVycyBBbmFseXNpczwvaDM+JztcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IHJlc3BvbnNlLmhlYWRlcnM7XG4gICAgICAgIFxuICAgICAgICAvLyBJbXBvcnRhbnQgc2VjdXJpdHkgaGVhZGVycyB0byBjaGVja1xuICAgICAgICBjb25zdCBzZWN1cml0eUhlYWRlcnMgPSBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ0NvbnRlbnQtU2VjdXJpdHktUG9saWN5JyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnSGVscHMgcHJldmVudCBYU1MgYW5kIGRhdGEgaW5qZWN0aW9uIGF0dGFja3MnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnWC1Db250ZW50LVR5cGUtT3B0aW9ucycsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1ByZXZlbnRzIE1JTUUgdHlwZSBzbmlmZmluZycsXG4gICAgICAgICAgICByZWNvbW1lbmRlZDogJ25vc25pZmYnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnWC1GcmFtZS1PcHRpb25zJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUHJvdGVjdHMgYWdhaW5zdCBjbGlja2phY2tpbmcnLFxuICAgICAgICAgICAgcmVjb21tZW5kZWQ6ICdERU5ZIG9yIFNBTUVPUklHSU4nXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnU3RyaWN0LVRyYW5zcG9ydC1TZWN1cml0eScsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0VuZm9yY2VzIEhUVFBTIGNvbm5lY3Rpb25zJyxcbiAgICAgICAgICAgIHJlY29tbWVuZGVkOiAnbWF4LWFnZT0zMTUzNjAwMDsgaW5jbHVkZVN1YkRvbWFpbnMnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnWC1YU1MtUHJvdGVjdGlvbicsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1Byb3ZpZGVzIFhTUyBwcm90ZWN0aW9uIGluIG9sZGVyIGJyb3dzZXJzJyxcbiAgICAgICAgICAgIHJlY29tbWVuZGVkOiAnMTsgbW9kZT1ibG9jaydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdSZWZlcnJlci1Qb2xpY3knLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdDb250cm9scyBpbmZvcm1hdGlvbiBpbiB0aGUgUmVmZXJlciBoZWFkZXInLFxuICAgICAgICAgICAgcmVjb21tZW5kZWQ6ICdzdHJpY3Qtb3JpZ2luLXdoZW4tY3Jvc3Mtb3JpZ2luJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ1Blcm1pc3Npb25zLVBvbGljeScsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0NvbnRyb2xzIGJyb3dzZXIgZmVhdHVyZXMgYW5kIEFQSXMnLFxuICAgICAgICAgICAgYWx0ZXJuYXRlOiAnRmVhdHVyZS1Qb2xpY3knXG4gICAgICAgICAgfVxuICAgICAgICBdO1xuICAgICAgICBcbiAgICAgICAgLy8gQ2hlY2sgZWFjaCBzZWN1cml0eSBoZWFkZXJcbiAgICAgICAgbGV0IG1pc3NpbmdIZWFkZXJzID0gMDtcbiAgICAgICAgc2VjdXJpdHlIZWFkZXJzLmZvckVhY2goaGVhZGVyID0+IHtcbiAgICAgICAgICBjb25zdCBoZWFkZXJWYWx1ZSA9IGdldEhlYWRlclZhbHVlKGhlYWRlcnMsIGhlYWRlci5uYW1lKSB8fCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIChoZWFkZXIuYWx0ZXJuYXRlID8gZ2V0SGVhZGVyVmFsdWUoaGVhZGVycywgaGVhZGVyLmFsdGVybmF0ZSkgOiBudWxsKTtcbiAgICAgICAgICBcbiAgICAgICAgICBjb25zdCBzdGF0dXMgPSBoZWFkZXJWYWx1ZSA/ICdQcmVzZW50JyA6ICdNaXNzaW5nJztcbiAgICAgICAgICBjb25zdCBkZXRhaWxzID0gaGVhZGVyVmFsdWUgfHwgXG4gICAgICAgICAgICAgICAgICAgICAgIChoZWFkZXIucmVjb21tZW5kZWQgPyBgUmVjb21tZW5kZWQ6ICR7aGVhZGVyLnJlY29tbWVuZGVkfWAgOiAnTm90IGltcGxlbWVudGVkJyk7XG4gICAgICAgICAgXG4gICAgICAgICAgaWYgKHN0YXR1cyA9PT0gJ01pc3NpbmcnKSBtaXNzaW5nSGVhZGVycysrO1xuICAgICAgICAgIFxuICAgICAgICAgIGRpc3BsYXlSZXN1bHQocmVzdWx0c0NvbnRhaW5lciwgaGVhZGVyLm5hbWUsIHN0YXR1cywgZGV0YWlscywgaGVhZGVyLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICAvLyBVcGRhdGUgdGhlIGNoZWNrbGlzdCBpdGVtIHN0YXR1cyBiYXNlZCBvbiBtaXNzaW5nIGhlYWRlcnNcbiAgICAgICAgaWYgKG1pc3NpbmdIZWFkZXJzID4gMCkge1xuICAgICAgICAgIHVwZGF0ZUl0ZW1TdGF0dXMoJ3NlY3VyaXR5LWhlYWRlcnMnLCAnd2FybmluZycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHVwZGF0ZUl0ZW1TdGF0dXMoJ3NlY3VyaXR5LWhlYWRlcnMnLCAnc3VjY2VzcycpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSwgMTAwMCk7IC8vIFdhaXQgMSBzZWNvbmQgdG8gZW5zdXJlIHBhZ2UgaXMgbG9hZGVkXG4gIFxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gZGV0ZWN0SmF2YVNjcmlwdExpYnJhcmllcygpIHtcbiAgY29uc29sZS5sb2coJ0RldGVjdGluZyBKYXZhU2NyaXB0IGxpYnJhcmllcy4uLicpO1xuICBcbiAgLy8gR2V0IHRoZSByZXN1bHRzIGNvbnRhaW5lciBmb3IgdGhpcyBpdGVtXG4gIGNvbnN0IHJlc3VsdHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0cy1qYXZhc2NyaXB0LWxpYnJhcmllcycpO1xuICBpZiAoIXJlc3VsdHNDb250YWluZXIpIHJldHVybiBmYWxzZTtcbiAgXG4gIC8vIFNob3cgbG9hZGluZyBpbmRpY2F0b3JcbiAgcmVzdWx0c0NvbnRhaW5lci5pbm5lckhUTUwgPSAnPHA+TG9hZGluZyBKYXZhU2NyaXB0IGxpYnJhcmllcyBkYXRhLi4uPC9wPic7XG4gIFxuICAvLyBHZXQgdGhlIGN1cnJlbnQgYWN0aXZlIHRhYlxuICBjaHJvbWUudGFicy5xdWVyeSh7YWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlfSwgKHRhYnMpID0+IHtcbiAgICBjb25zdCBjdXJyZW50VGFiID0gdGFic1swXTtcbiAgICBpZiAoIWN1cnJlbnRUYWIgfHwgIWN1cnJlbnRUYWIudXJsKSB7XG4gICAgICByZXN1bHRzQ29udGFpbmVyLmlubmVySFRNTCA9ICc8ZGl2IGNsYXNzPVwiZXJyb3ItbWVzc2FnZVwiPkNhbm5vdCBhY2Nlc3MgY3VycmVudCB0YWIgaW5mb3JtYXRpb248L2Rpdj4nO1xuICAgICAgdXBkYXRlSXRlbVN0YXR1cygnamF2YXNjcmlwdC1saWJyYXJpZXMnLCAnZXJyb3InKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgLy8gQ2hlY2sgaWYgd2UgY2FuIGFuYWx5emUgdGhpcyBVUkwgKG11c3QgYmUgaHR0cCBvciBodHRwcylcbiAgICBjb25zdCB1cmwgPSBjdXJyZW50VGFiLnVybDtcbiAgICBpZiAoIXVybC5zdGFydHNXaXRoKCdodHRwOi8vJykgJiYgIXVybC5zdGFydHNXaXRoKCdodHRwczovLycpKSB7XG4gICAgICByZXN1bHRzQ29udGFpbmVyLmlubmVySFRNTCA9ICc8ZGl2IGNsYXNzPVwiZXJyb3ItbWVzc2FnZVwiPkNhbiBvbmx5IGFuYWx5emUgSFRUUC9IVFRQUyBwYWdlczwvZGl2Pic7XG4gICAgICB1cGRhdGVJdGVtU3RhdHVzKCdqYXZhc2NyaXB0LWxpYnJhcmllcycsICdlcnJvcicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICAvLyBFeGVjdXRlIHNjcmlwdCBpbiB0aGUgY3VycmVudCB0YWIgdG8gZGV0ZWN0IGxpYnJhcmllc1xuICAgIGNocm9tZS5zY3JpcHRpbmcuZXhlY3V0ZVNjcmlwdCh7XG4gICAgICB0YXJnZXQ6IHsgdGFiSWQ6IGN1cnJlbnRUYWIuaWQgYXMgbnVtYmVyIH0sXG4gICAgICBmdW5jOiAoKSA9PiB7XG4gICAgICAgIC8vIFR5cGVzIGZvciBnbG9iYWwgbGlicmFyaWVzXG4gICAgICAgIGludGVyZmFjZSBXaW5kb3cge1xuICAgICAgICAgIFJlYWN0PzogYW55O1xuICAgICAgICAgIFZ1ZT86IGFueTtcbiAgICAgICAgICBhbmd1bGFyPzogYW55O1xuICAgICAgICAgIGpRdWVyeT86IGFueTtcbiAgICAgICAgICAkPzogYW55O1xuICAgICAgICAgIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXz86IGFueTtcbiAgICAgICAgICBfX3N2ZWx0ZV9fPzogYW55O1xuICAgICAgICAgIF9fTkVYVF9EQVRBX18/OiBhbnk7XG4gICAgICAgICAgX19HQVRTQlk/OiBhbnk7XG4gICAgICAgICAgX19WVUVfXz86IGFueTtcbiAgICAgICAgICBfX1ZVRV9PUFRJT05TX18/OiBhbnk7XG4gICAgICAgICAgX19WVUVfREVWVE9PTFNfR0xPQkFMX0hPT0tfXz86IGFueTtcbiAgICAgICAgICBfX1ZVRV9ERVZUT09MU19UT0FTVF9fPzogYW55O1xuICAgICAgICAgIFZ1ZXg/OiBhbnk7XG4gICAgICAgICAgJHZ1ZXRpZnk/OiBhbnk7XG4gICAgICAgICAgJG51eHQ/OiBhbnk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIERlZmluZSBsaWJyYXJ5IGRldGVjdGlvbiBmdW5jdGlvbnNcbiAgICAgICAgY29uc3QgbGlicmFyeURldGVjdG9ycyA9IHtcbiAgICAgICAgICAnUmVhY3QnOiAoKSA9PiB7XG4gICAgICAgICAgICAvLyBNdWx0aXBsZSBkZXRlY3Rpb24gYXBwcm9hY2hlcyBmb3IgbW9kZXJuIFJlYWN0XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAvLyAxLiBDaGVjayBmb3IgUmVhY3QgaW4gd2luZG93XG4gICAgICAgICAgICAgIGlmICgod2luZG93IGFzIFdpbmRvdykuUmVhY3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLy8gMi4gQ2hlY2sgZm9yIFJlYWN0IERldlRvb2xzIGhvb2tcbiAgICAgICAgICAgICAgaWYgKCh3aW5kb3cgYXMgV2luZG93KS5fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLy8gMy4gQ2hlY2sgZm9yIFJlYWN0IDE2KyBmaWJlciBub2Rlc1xuICAgICAgICAgICAgICBjb25zdCByb290RWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1yZWFjdHJvb3RdJyk7XG4gICAgICAgICAgICAgIGlmIChyb290RWxlbWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAvLyA0LiBDaGVjayBmb3Igb2xkIFJlYWN0IChwcmUtMTYpIGF0dHJpYnV0ZXNcbiAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXJlYWN0aWRdJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLy8gNS4gRmluZCBSZWFjdCAxNysgcm9vdCBjb250YWluZXJzIG9yIGZpYmVyIG5vZGVzIChtb3N0IGNvbW1vbiBtb2Rlcm4gYXBwcm9hY2gpXG4gICAgICAgICAgICAgIGNvbnN0IGFsbEVsZW1lbnRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcqJykpO1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLy8gNWEuIExvb2sgZm9yIFJlYWN0IDE3KyByb290IGNvbnRhaW5lclxuICAgICAgICAgICAgICBjb25zdCBoYXNSZWFjdFJvb3RDb250YWluZXIgPSBhbGxFbGVtZW50cy5zb21lKGVsID0+IFxuICAgICAgICAgICAgICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlbCwgJ19yZWFjdFJvb3RDb250YWluZXInKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBpZiAoaGFzUmVhY3RSb290Q29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC8vIDViLiBMb29rIGZvciBSZWFjdCAxOCsgY29udGFpbmVyIHByb3BlcnR5IHBhdHRlcm5cbiAgICAgICAgICAgICAgY29uc3QgaGFzUmVhY3RDb250YWluZXIgPSBhbGxFbGVtZW50cy5zb21lKGVsID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoZWwpLnNvbWUoa2V5ID0+IFxuICAgICAgICAgICAgICAgICAga2V5LnN0YXJ0c1dpdGgoJ19fcmVhY3RDb250YWluZXInKSB8fCBcbiAgICAgICAgICAgICAgICAgIGtleS5zdGFydHNXaXRoKCdfX3JlYWN0RmliZXInKSB8fCBcbiAgICAgICAgICAgICAgICAgIGtleS5zdGFydHNXaXRoKCdfX3JlYWN0UHJvcHMnKSB8fCBcbiAgICAgICAgICAgICAgICAgIGtleS5zdGFydHNXaXRoKCdfX3JlYWN0RXZlbnRzJykgfHxcbiAgICAgICAgICAgICAgICAgIGtleS5zdGFydHNXaXRoKCdfX3JlYWN0SW50ZXJuYWxJbnN0YW5jZScpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIGlmIChoYXNSZWFjdENvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAvLyA2LiBDaGVjayBmb3IgUmVhY3QgcHJvZmlsZXJcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiAod2luZG93IGFzIGFueSkuX19SRUFDVF9ERVZUT09MU19QUk9GSUxFUl9IT09LX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC8vIDcuIExvb2sgZm9yIFJlYWN0LXNwZWNpZmljIGNvbXBvbmVudCBuYW1lIHBhdHRlcm5zXG4gICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudE5hbWVQYXR0ZXJuID0gL15bQS1aXVtBLVphLXpdKyhcXC5bQS1aXVtBLVphLXpdKykqJC87XG4gICAgICAgICAgICAgIGNvbnN0IHJlYWN0Q29tcG9uZW50cyA9IGFsbEVsZW1lbnRzLnNvbWUoZWwgPT4ge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIGVsKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoa2V5LnN0YXJ0c1dpdGgoJ19fcmVhY3RQcm9wcyQnKSAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAoZWwgYXMgYW55KVtrZXldICYmIFxuICAgICAgICAgICAgICAgICAgICAgIChlbCBhcyBhbnkpW2tleV0uY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZiAoa2V5LnN0YXJ0c1dpdGgoJ19yZWFjdExpc3RlbmluZycpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgaWYgKHJlYWN0Q29tcG9uZW50cykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRldGVjdGluZyBSZWFjdDonLCBlKTtcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgJ1Z1ZS5qcyc6ICgpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIC8vIERpcmVjdCBnbG9iYWwgVnVlIGRldGVjdGlvbiAobW9zdGx5IFZ1ZSAyKVxuICAgICAgICAgICAgICBpZiAoKHdpbmRvdyBhcyBXaW5kb3cpLlZ1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAvLyBWdWUgRGV2VG9vbHMgaG9va3MgYW5kIGludGVybmFsIHByb3BlcnRpZXNcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICh3aW5kb3cgYXMgV2luZG93KS5fX1ZVRV9fIHx8IFxuICAgICAgICAgICAgICAgICh3aW5kb3cgYXMgV2luZG93KS5fX1ZVRV9PUFRJT05TX18gfHxcbiAgICAgICAgICAgICAgICAod2luZG93IGFzIFdpbmRvdykuX19WVUVfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyB8fFxuICAgICAgICAgICAgICAgICh3aW5kb3cgYXMgV2luZG93KS5fX1ZVRV9ERVZUT09MU19UT0FTVF9fXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLy8gQ2hlY2sgZm9yIFZ1ZSBlY29zeXN0ZW0gbGlicmFyaWVzIGluIHRoZSBnbG9iYWwgc2NvcGVcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICh3aW5kb3cgYXMgV2luZG93KS5WdWV4IHx8XG4gICAgICAgICAgICAgICAgKHdpbmRvdyBhcyBXaW5kb3cpLiR2dWV0aWZ5IHx8XG4gICAgICAgICAgICAgICAgKHdpbmRvdyBhcyBXaW5kb3cpLiRudXh0XG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAvLyBDaGVjayBmb3IgVnVlIGluIGRlYnVnIG1vZGUgKFZ1ZSAzIHNldHMgdGhpcylcbiAgICAgICAgICAgICAgaWYgKCh3aW5kb3cgYXMgYW55KS5fX1ZVRV9QUk9EX0RFVlRPT0xTX18pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLy8gRGV0ZWN0IFZ1ZSAzIGJ5IHNlYXJjaGluZyBmb3IgYXBwIGluc3RhbmNlIGluIGRvY3VtZW50IGVsZW1lbnRzXG4gICAgICAgICAgICAgIGNvbnN0IGFsbEVsZW1lbnRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcqJykpO1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLy8gQ2hlY2sgZm9yIFZ1ZSAzIGluc3RhbmNlIHByb3BlcnRpZXMgb24gRE9NIGVsZW1lbnRzXG4gICAgICAgICAgICAgIGNvbnN0IGhhc1Z1ZUluc3RhbmNlID0gYWxsRWxlbWVudHMuc29tZShlbCA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgIC8vIFZ1ZSAzIGluc3RhbmNlIHByb3BlcnRpZXNcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhlbCk7XG4gICAgICAgICAgICAgICAgICBjb25zdCBoYXNWdWUgPSBrZXlzLnNvbWUoa2V5ID0+IFxuICAgICAgICAgICAgICAgICAgICBrZXkuc3RhcnRzV2l0aCgnX192dWUnKSB8fCBcbiAgICAgICAgICAgICAgICAgICAga2V5LnN0YXJ0c1dpdGgoJ19fdnVlXycpIHx8IFxuICAgICAgICAgICAgICAgICAgICBrZXkgPT09ICdfX3Z1ZScgfHxcbiAgICAgICAgICAgICAgICAgICAga2V5LmluY2x1ZGVzKCdfX3Z1ZScpXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAvLyBWdWUgMyBhbHNvIGFkZHMgcHJvcGVydGllcyB0byBET00gZWxlbWVudHMgY2FsbGVkIF9fdnVlUGFyZW50Q29tcG9uZW50XG4gICAgICAgICAgICAgICAgICBpZiAoaGFzVnVlIHx8IFxuICAgICAgICAgICAgICAgICAgICAgIChlbCBhcyBhbnkpLl9fdnVlUGFyZW50Q29tcG9uZW50IHx8IFxuICAgICAgICAgICAgICAgICAgICAgIChlbCBhcyBhbnkpLl9fdm5vZGUgfHwgXG4gICAgICAgICAgICAgICAgICAgICAgKGVsIGFzIGFueSkuX3Zub2RlIHx8IFxuICAgICAgICAgICAgICAgICAgICAgIChlbCBhcyBhbnkpLl92dWVFbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgZWxlbWVudCBoYXMgcHJvcGVydHkgdGhhdCBsb29rcyBsaWtlIFZ1ZSdzIHJlYWN0aXZpdHkgc3lzdGVtXG4gICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBlbCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5LnN0YXJ0c1dpdGgoJ18nKSAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVvZiAoZWwgYXMgYW55KVtrZXldID09PSAnb2JqZWN0JyAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgIChlbCBhcyBhbnkpW2tleV0gIT09IG51bGwgJiYgXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlb2YgKGVsIGFzIGFueSlba2V5XS50aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gVnVlIDMgc3VzcGVuc2UgdXNlcyBQcm9taXNlcyBmb3IgYXN5bmMgY29tcG9uZW50c1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5LnN0YXJ0c1dpdGgoJ18nKSAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVvZiAoZWwgYXMgYW55KVtrZXldID09PSAnb2JqZWN0JyAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgIChlbCBhcyBhbnkpW2tleV0gIT09IG51bGwgJiYgXG4gICAgICAgICAgICAgICAgICAgICAgICAoKGVsIGFzIGFueSlba2V5XS5fX29iX18gfHwgKGVsIGFzIGFueSlba2V5XS5fX3ZfaXNSZWYpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gVnVlIDIgJiAzIHJlYWN0aXZpdHkgaW5kaWNhdG9yc1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAvLyBTb21lIGVsZW1lbnRzIG1heSB0aHJvdyB3aGVuIGFjY2Vzc2luZyBwcm9wZXJ0aWVzXG4gICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIGlmIChoYXNWdWVJbnN0YW5jZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAvLyBDaGVjayBmb3IgbWV0YSB0YWdzIHdpdGggdnVlLXNwZWNpZmljIGNvbnRlbnRcbiAgICAgICAgICAgICAgY29uc3QgbWV0YVRhZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdtZXRhJyk7XG4gICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWV0YVRhZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb250ZW50ID0gbWV0YVRhZ3NbaV0uZ2V0QXR0cmlidXRlKCdjb250ZW50JykgfHwgJyc7XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRlbnQuaW5jbHVkZXMoJ3Z1ZScpICYmIFxuICAgICAgICAgICAgICAgICAgICAoY29udGVudC5pbmNsdWRlcygnZnJhbWV3b3JrJykgfHwgY29udGVudC5pbmNsdWRlcygnZ2VuZXJhdG9yJykpKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC8vIENvbW1vbiBWdWUgZGlyZWN0aXZlIGF0dHJpYnV0ZXMgKHdvcmtzIGZvciBib3RoIFZ1ZSAyIGFuZCBWdWUgMylcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXYtXScpIHx8IC8vIFNjb3BlZCBDU1MgaW5kaWNhdG9yXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW3YtY2xvYWtdJykgfHxcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbdi1pZl0nKSB8fFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1t2LWZvcl0nKSB8fFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1t2LXNob3ddJykgfHxcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbdi1iaW5kXScpIHx8XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW3YtbW9kZWxdJykgfHxcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbdi1vbl0nKSB8fFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1t2LW9uY2VdJykgfHxcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbdi1odG1sXScpIHx8XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW3YtdGV4dF0nKSB8fFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1t2LXByZV0nKVxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLy8gQ2hlY2sgZm9yIHNob3J0aGFuZCBkaXJlY3RpdmVzXG4gICAgICAgICAgICAgIGNvbnN0IGhhc1Nob3J0aGFuZERpcmVjdGl2ZXMgPSBhbGxFbGVtZW50cy5zb21lKGVsID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVOYW1lcyA9IGVsLmdldEF0dHJpYnV0ZU5hbWVzKCk7XG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgZm9yIHYtYmluZCBzaG9ydGhhbmQgKDopIG9yIHYtb24gc2hvcnRoYW5kIChAKVxuICAgICAgICAgICAgICAgIHJldHVybiBhdHRyaWJ1dGVOYW1lcy5zb21lKGF0dHIgPT4gYXR0ci5zdGFydHNXaXRoKCc6JykgfHwgYXR0ci5zdGFydHNXaXRoKCdAJykpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIGlmIChoYXNTaG9ydGhhbmREaXJlY3RpdmVzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC8vIENoZWNrIGZvciBWdWUgYXBwIHJvb3QgZWxlbWVudHMgKGNvbW1vbiBjb252ZW50aW9ucylcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHBbZGF0YS12LWFwcF0nKSB8fFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHAgPiBbZGF0YS12LV0nKSB8fFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52dWUtYXBwJykgfHxcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcS1hcHAnKSB8fCAvLyBRdWFzYXIgZnJhbWV3b3JrXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI251eHQtYXBwJykgfHwgLy8gTnV4dC5qc1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX251eHQnKSB8fCAvLyBOdXh0LmpzXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbGF5b3V0JykgfHwgLy8gTnV4dC5qc1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXNlcnZlci1yZW5kZXJlZF0nKSAvLyBWdWUgU1NSXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLy8gTG9vayBmb3IgY29tbW9uIFZ1ZSBjb21wb25lbnQgbmFtaW5nIGluIGNsYXNzZXNcbiAgICAgICAgICAgICAgY29uc3QgdnVlQ2xhc3NQYXR0ZXJuID0gLy0odnVlfHYpLS87XG4gICAgICAgICAgICAgIGNvbnN0IGhhc1Z1ZUNsYXNzZXMgPSBhbGxFbGVtZW50cy5zb21lKGVsID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWwuY2xhc3NOYW1lICYmIFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGVvZiBlbC5jbGFzc05hbWUgPT09ICdzdHJpbmcnICYmIFxuICAgICAgICAgICAgICAgICAgICAgIHZ1ZUNsYXNzUGF0dGVybi50ZXN0KGVsLmNsYXNzTmFtZSk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgaWYgKGhhc1Z1ZUNsYXNzZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZXRlY3RpbmcgVnVlLmpzOicsIGUpO1xuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICAnQW5ndWxhcic6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAhIShcbiAgICAgICAgICAgICAgKHdpbmRvdyBhcyBXaW5kb3cpLmFuZ3VsYXIgfHwgXG4gICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuZy1hcHBdJykgfHxcbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25nLWNvbnRyb2xsZXJdJykgfHxcbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25nLW1vZGVsXScpIHx8XG4gICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuZy1yZXBlYXRdJykgfHxcbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25nLXZpZXddJykgfHxcbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25nLWlmXScpIHx8XG4gICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuZy1zaG93XScpIHx8XG4gICAgICAgICAgICAgIC8vIEFuZ3VsYXIgMitcbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW19uZ2hvc3RdJykgfHxcbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW19uZ2NvbnRlbnRdJykgfHxcbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYXBwLXJvb3QnKSB8fFxuICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmctdmVyc2lvbl0nKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgICdqUXVlcnknOiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gISEoXG4gICAgICAgICAgICAgICh3aW5kb3cgYXMgV2luZG93KS5qUXVlcnkgfHwgXG4gICAgICAgICAgICAgICh3aW5kb3cgYXMgV2luZG93KS4kICYmICh3aW5kb3cgYXMgV2luZG93KS4kLmZuICYmICh3aW5kb3cgYXMgV2luZG93KS4kLmZuLmpxdWVyeVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgICdTdmVsdGUnOiAoKSA9PiB7XG4gICAgICAgICAgICAvLyBTdmVsdGUgY29tcG9uZW50cyBoYXZlIGNsYXNzIG5hbWVzIGxpa2UgXCJzdmVsdGUtYWJjMTIzXCJcbiAgICAgICAgICAgIGNvbnN0IGhhc1N2ZWx0ZUNsYXNzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcqJykpLnNvbWUoZWwgPT4ge1xuICAgICAgICAgICAgICBpZiAoZWwuY2xhc3NOYW1lICYmIHR5cGVvZiBlbC5jbGFzc05hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC9zdmVsdGUtW2EtejAtOV0rLy50ZXN0KGVsLmNsYXNzTmFtZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIENoZWNrIGZvciBTdmVsdGUgZGV2dG9vbHMgaG9va1xuICAgICAgICAgICAgY29uc3QgaGFzU3ZlbHRlSG9vayA9ICEhKHdpbmRvdyBhcyBXaW5kb3cpLl9fc3ZlbHRlX187XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIENoZWNrIGZvciBIVE1MIGVsZW1lbnRzIHdpdGggU3ZlbHRlLXNwZWNpZmljIGF0dHJpYnV0ZXNcbiAgICAgICAgICAgIGNvbnN0IGhhc1N2ZWx0ZUF0dHJpYnV0ZXMgPSAhIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tzdmVsdGUtZnJhZ21lbnRdJykgfHwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tzdmVsdGVraXRcXFxcOnByZWZldGNoXScpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBDaGVjayBpZiBhbnkgY3VzdG9tIGVsZW1lbnRzIChXZWIgQ29tcG9uZW50cykgYXJlIFN2ZWx0ZS1yZWxhdGVkXG4gICAgICAgICAgICBjb25zdCBoYXNTdmVsdGVFbGVtZW50cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnKicpKS5zb21lKGVsID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIGVsLnRhZ05hbWUgJiYgZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdzdmVsdGUnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gISEoaGFzU3ZlbHRlQ2xhc3MgfHwgaGFzU3ZlbHRlSG9vayB8fCBoYXNTdmVsdGVBdHRyaWJ1dGVzIHx8IGhhc1N2ZWx0ZUVsZW1lbnRzKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgICdOZXh0LmpzJzogKCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgLy8gQ2hlY2sgZm9yIE5leHQuanMgZGF0YSBzY3JpcHQgdGFnXG4gICAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzY3JpcHQjX19ORVhUX0RBVEFfXycpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC8vIENoZWNrIGZvciBOZXh0LmpzIHNwZWNpZmljIGF0dHJpYnV0ZXNcbiAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW5leHQtaHlkcmF0ZV0nKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAvLyBDaGVjayBmb3IgTmV4dC5qcyBydW50aW1lXG4gICAgICAgICAgICAgIGlmICgod2luZG93IGFzIFdpbmRvdykuX19ORVhUX0RBVEFfXykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAvLyBDaGVjayBmb3IgbmV4dCBwYWdlIENTU1xuICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dCcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZGV0ZWN0aW5nIE5leHQuanM6JywgZSk7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgICdHYXRzYnkuanMnOiAoKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAvLyBDaGVjayBmb3IgR2F0c2J5IHNwZWNpZmljIGVsZW1lbnRzXG4gICAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19fZ2F0c2J5JykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLy8gQ2hlY2sgZm9yIEdhdHNieSBwYWdlIGRhdGFcbiAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NjcmlwdFtpZCo9XCJnYXRzYnktY2h1bmtcIl0nKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAvLyBDaGVjayBmb3Igd2luZG93Ll9fR0FUU0JZXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgKHdpbmRvdyBhcyBhbnkpLl9fR0FUU0JZICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRldGVjdGluZyBHYXRzYnkuanM6JywgZSk7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICAvLyBSdW4gZGV0ZWN0aW9uc1xuICAgICAgICBjb25zdCByZXN1bHRzOiBSZWNvcmQ8c3RyaW5nLCB7IGRldGVjdGVkOiBib29sZWFuLCB2ZXJzaW9uOiBzdHJpbmcgfCBudWxsIH0+ID0ge307XG4gICAgICAgIFxuICAgICAgICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gd2FpdCBmb3IgcGFnZSB0byBiZSBmdWxseSBsb2FkZWRcbiAgICAgICAgY29uc3Qgd2FpdEZvclBhZ2VMb2FkID0gKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgIC8vIElmIGRvY3VtZW50IGlzIGFscmVhZHkgY29tcGxldGUsIHJlc29sdmUgaW1tZWRpYXRlbHlcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBPdGhlcndpc2Ugd2FpdCBmb3IgbG9hZCBldmVudFxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiByZXNvbHZlKCksIHsgb25jZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gQWxzbyBzZXQgYSB0aW1lb3V0IGFzIGZhbGxiYWNrICgzIHNlY29uZHMpXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJlc29sdmUsIDMwMDApO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgLy8gVXNlIHByb21pc2VzIGluc3RlYWQgb2YgYXN5bmMvYXdhaXQgdG8gYXZvaWQgVHlwZVNjcmlwdCBoZWxwZXJzXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAvLyBGaXJzdCB3YWl0IGZvciBwYWdlIHRvIGJlIGZ1bGx5IGxvYWRlZFxuICAgICAgICAgIHdhaXRGb3JQYWdlTG9hZCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgLy8gQWRkIGEgc21hbGwgYWRkaXRpb25hbCBkZWxheSB0byBhbGxvdyBmb3IgSlMgZnJhbWV3b3JrcyB0byBpbml0aWFsaXplXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgLy8gUnVuIGFsbCB0aGUgZGV0ZWN0b3JzXG4gICAgICAgICAgICAgIGZvciAoY29uc3QgW2xpYnJhcnksIGRldGVjdG9yXSBvZiBPYmplY3QuZW50cmllcyhsaWJyYXJ5RGV0ZWN0b3JzKSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBkZXRlY3RlZCA9IGRldGVjdG9yKCk7XG4gICAgICAgICAgICAgICAgICBsZXQgdmVyc2lvbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIC8vIEdldCB2ZXJzaW9uIGlmIGF2YWlsYWJsZVxuICAgICAgICAgICAgICAgICAgaWYgKGRldGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsaWJyYXJ5ID09PSAnalF1ZXJ5JyAmJiAod2luZG93IGFzIFdpbmRvdykuJCAmJiAod2luZG93IGFzIFdpbmRvdykuJC5mbikge1xuICAgICAgICAgICAgICAgICAgICAgIHZlcnNpb24gPSAod2luZG93IGFzIFdpbmRvdykuJC5mbi5qcXVlcnk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobGlicmFyeSA9PT0gJ1Z1ZS5qcycgJiYgKHdpbmRvdyBhcyBXaW5kb3cpLlZ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgIHZlcnNpb24gPSAod2luZG93IGFzIFdpbmRvdykuVnVlLnZlcnNpb247XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobGlicmFyeSA9PT0gJ1JlYWN0JyAmJiAod2luZG93IGFzIFdpbmRvdykuUmVhY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2ZXJzaW9uID0gKHdpbmRvdyBhcyBXaW5kb3cpLlJlYWN0LnZlcnNpb247XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobGlicmFyeSA9PT0gJ0FuZ3VsYXInICYmICh3aW5kb3cgYXMgV2luZG93KS5hbmd1bGFyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmVyc2lvbiA9ICh3aW5kb3cgYXMgV2luZG93KS5hbmd1bGFyLnZlcnNpb24gJiYgKHdpbmRvdyBhcyBXaW5kb3cpLmFuZ3VsYXIudmVyc2lvbi5mdWxsO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxpYnJhcnkgPT09ICdTdmVsdGUnICYmICh3aW5kb3cgYXMgV2luZG93KS5fX3N2ZWx0ZV9fKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgod2luZG93IGFzIFdpbmRvdykuX19zdmVsdGVfXyAmJiAod2luZG93IGFzIFdpbmRvdykuX19zdmVsdGVfXy52ZXJzaW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnNpb24gPSAod2luZG93IGFzIFdpbmRvdykuX19zdmVsdGVfXy52ZXJzaW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ZlbHRlS2l0RGF0YUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzY3JpcHRbZGF0YS1zdmVsdGVraXQtaHlkcmF0ZV0nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN2ZWx0ZUtpdERhdGFFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVyc2lvbiA9IFwiU3ZlbHRlS2l0XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVyc2lvbiA9IFwiVW5rbm93biB2ZXJzaW9uXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJzaW9uID0gXCJEZXRlY3RlZFwiO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChsaWJyYXJ5ID09PSAnTmV4dC5qcycgJiYgKHdpbmRvdyBhcyBXaW5kb3cpLl9fTkVYVF9EQVRBX18pIHtcbiAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCh3aW5kb3cgYXMgYW55KS5uZXh0ICYmICh3aW5kb3cgYXMgYW55KS5uZXh0LnZlcnNpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmVyc2lvbiA9ICh3aW5kb3cgYXMgYW55KS5uZXh0LnZlcnNpb247XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJzaW9uID0gXCJEZXRlY3RlZFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnNpb24gPSBcIkRldGVjdGVkXCI7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxpYnJhcnkgPT09ICdHYXRzYnkuanMnICYmICh3aW5kb3cgYXMgYW55KS5fX0dBVFNCWSkge1xuICAgICAgICAgICAgICAgICAgICAgIHZlcnNpb24gPSBcIkRldGVjdGVkXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgcmVzdWx0c1tsaWJyYXJ5XSA9IHsgZGV0ZWN0ZWQsIHZlcnNpb24gfTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICByZXN1bHRzW2xpYnJhcnldID0geyBkZXRlY3RlZDogZmFsc2UsIHZlcnNpb246IG51bGwgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC8vIFJldHVybiB0aGUgcmVzdWx0c1xuICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdHMpO1xuICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgaW4gcGFnZSBsb2FkIHdhaXRpbmc6XCIsIGVycm9yKTtcbiAgICAgICAgICAgIHJlc29sdmUoeyBlcnJvcjogZXJyb3IubWVzc2FnZSB8fCBcIkVycm9yIHdhaXRpbmcgZm9yIHBhZ2UgbG9hZFwiIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KVxuICAgIC50aGVuKGluamVjdGlvblJlc3VsdHMgPT4ge1xuICAgICAgaWYgKCFpbmplY3Rpb25SZXN1bHRzIHx8IGluamVjdGlvblJlc3VsdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJlc3VsdHNDb250YWluZXIuaW5uZXJIVE1MID0gJzxkaXYgY2xhc3M9XCJlcnJvci1tZXNzYWdlXCI+RmFpbGVkIHRvIGluamVjdCBkZXRlY3Rpb24gc2NyaXB0PC9kaXY+JztcbiAgICAgICAgdXBkYXRlSXRlbVN0YXR1cygnamF2YXNjcmlwdC1saWJyYXJpZXMnLCAnZXJyb3InKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBpbmplY3Rpb25SZXN1bHRzWzBdLnJlc3VsdDtcbiAgICAgICAgXG4gICAgICAgIC8vIENoZWNrIGlmIHRoZXJlIHdhcyBhbiBlcnJvciBpbiB0aGUgZGV0ZWN0aW9uIHNjcmlwdFxuICAgICAgICBpZiAocmVzdWx0ICYmIHR5cGVvZiByZXN1bHQgPT09ICdvYmplY3QnICYmICdlcnJvcicgaW4gcmVzdWx0KSB7XG4gICAgICAgICAgcmVzdWx0c0NvbnRhaW5lci5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cImVycm9yLW1lc3NhZ2VcIj5FcnJvciBpbiBkZXRlY3Rpb24gc2NyaXB0OiAke3Jlc3VsdC5lcnJvcn08L2Rpdj5gO1xuICAgICAgICAgIHVwZGF0ZUl0ZW1TdGF0dXMoJ2phdmFzY3JpcHQtbGlicmFyaWVzJywgJ2Vycm9yJyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBDYXN0IHRvIHRoZSBleHBlY3RlZCB0eXBlXG4gICAgICAgIGNvbnN0IGxpYnJhcmllcyA9IHJlc3VsdCBhcyBSZWNvcmQ8c3RyaW5nLCB7IGRldGVjdGVkOiBib29sZWFuLCB2ZXJzaW9uOiBzdHJpbmcgfCBudWxsIH0+O1xuICAgICAgICBcbiAgICAgICAgLy8gQ2hlY2sgaWYgbGlicmFyaWVzIGlzIHVuZGVmaW5lZCBvciBub3QgYW4gb2JqZWN0XG4gICAgICAgIGlmICghbGlicmFyaWVzIHx8IHR5cGVvZiBsaWJyYXJpZXMgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgcmVzdWx0c0NvbnRhaW5lci5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cImVycm9yLW1lc3NhZ2VcIj5JbnZhbGlkIHJlc3VsdCBmcm9tIGRldGVjdGlvbiBzY3JpcHQ8L2Rpdj4nO1xuICAgICAgICAgIHVwZGF0ZUl0ZW1TdGF0dXMoJ2phdmFzY3JpcHQtbGlicmFyaWVzJywgJ2Vycm9yJyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXN1bHRzQ29udGFpbmVyLmlubmVySFRNTCA9ICc8aDM+SmF2YVNjcmlwdCBMaWJyYXJpZXM8L2gzPic7XG4gICAgICAgIFxuICAgICAgICBsZXQgZGV0ZWN0ZWRDb3VudCA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgW2xpYnJhcnksIGluZm9dIG9mIE9iamVjdC5lbnRyaWVzKGxpYnJhcmllcykpIHtcbiAgICAgICAgICBjb25zdCBzdGF0dXMgPSBpbmZvLmRldGVjdGVkID8gJ1ByZXNlbnQnIDogJ01pc3NpbmcnO1xuICAgICAgICAgIGxldCBkZXRhaWxzID0gJyc7XG4gICAgICAgICAgXG4gICAgICAgICAgaWYgKGluZm8uZGV0ZWN0ZWQpIHtcbiAgICAgICAgICAgIGRldGVjdGVkQ291bnQrKztcbiAgICAgICAgICAgIGRldGFpbHMgPSBpbmZvLnZlcnNpb24gPyBgVmVyc2lvbjogJHtpbmZvLnZlcnNpb259YCA6ICdWZXJzaW9uOiB1bmtub3duJztcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgZGlzcGxheVJlc3VsdChcbiAgICAgICAgICAgIHJlc3VsdHNDb250YWluZXIsIFxuICAgICAgICAgICAgbGlicmFyeSwgXG4gICAgICAgICAgICBzdGF0dXMsIFxuICAgICAgICAgICAgZGV0YWlscywgXG4gICAgICAgICAgICBgJHtsaWJyYXJ5fSBKYXZhU2NyaXB0IGZyYW1ld29yay9saWJyYXJ5YFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIElmIG5vIGxpYnJhcmllcyB3ZXJlIGRldGVjdGVkLCBhZGQgYSBtZXNzYWdlXG4gICAgICAgIGlmIChkZXRlY3RlZENvdW50ID09PSAwKSB7XG4gICAgICAgICAgY29uc3Qgbm9MaWJyYXJpZXNNc2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICBub0xpYnJhcmllc01zZy5jbGFzc05hbWUgPSAnaW5mby1tZXNzYWdlJztcbiAgICAgICAgICBub0xpYnJhcmllc01zZy50ZXh0Q29udGVudCA9ICdObyBjb21tb24gSmF2YVNjcmlwdCBsaWJyYXJpZXMgZGV0ZWN0ZWQuIFRoZSBwYWdlIG1heSBiZSB1c2luZyB2YW5pbGxhIEphdmFTY3JpcHQgb3IgbGVzcyBjb21tb24gbGlicmFyaWVzLic7XG4gICAgICAgICAgcmVzdWx0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChub0xpYnJhcmllc01zZyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIFNldCBzdGF0dXM6IHdhcm5pbmcgaWYgbm8gbGlicmFyaWVzIGRldGVjdGVkLCBzdWNjZXNzIG90aGVyd2lzZVxuICAgICAgICB1cGRhdGVJdGVtU3RhdHVzKCdqYXZhc2NyaXB0LWxpYnJhcmllcycsIGRldGVjdGVkQ291bnQgPiAwID8gJ3N1Y2Nlc3MnIDogJ3dhcm5pbmcnKTtcbiAgICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHByb2Nlc3NpbmcgbGlicmFyeSBkZXRlY3Rpb24gcmVzdWx0czonLCBlcnIpO1xuICAgICAgICByZXN1bHRzQ29udGFpbmVyLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwiZXJyb3ItbWVzc2FnZVwiPkVycm9yIHByb2Nlc3NpbmcgcmVzdWx0czogJHtlcnIubWVzc2FnZSB8fCAnVW5rbm93biBlcnJvcid9PC9kaXY+YDtcbiAgICAgICAgdXBkYXRlSXRlbVN0YXR1cygnamF2YXNjcmlwdC1saWJyYXJpZXMnLCAnZXJyb3InKTtcbiAgICAgIH1cbiAgICB9KVxuICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKCdMaWJyYXJ5IGRldGVjdGlvbiBlcnJvcjonLCBlcnJvcik7XG4gICAgICByZXN1bHRzQ29udGFpbmVyLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwiZXJyb3ItbWVzc2FnZVwiPkVycm9yIGRldGVjdGluZyBsaWJyYXJpZXM6ICR7ZXJyb3IubWVzc2FnZX08L2Rpdj5gO1xuICAgICAgdXBkYXRlSXRlbVN0YXR1cygnamF2YXNjcmlwdC1saWJyYXJpZXMnLCAnZXJyb3InKTtcbiAgICB9KTtcbiAgfSk7XG4gIFxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gZGV0ZWN0Q29udGVudE1hbmFnZW1lbnRTeXN0ZW0oKSB7XG4gIGNvbnNvbGUubG9nKCdEZXRlY3RpbmcgY29udGVudCBtYW5hZ2VtZW50IHN5c3RlbS4uLicpO1xuICAvLyBHZXQgdGhlIHJlc3VsdHMgY29udGFpbmVyIGZvciB0aGlzIGl0ZW1cbiAgY29uc3QgcmVzdWx0c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHRzLWNtcycpO1xuICBpZiAocmVzdWx0c0NvbnRhaW5lcikge1xuICAgIHJlc3VsdHNDb250YWluZXIuaW5uZXJIVE1MID0gJzxwPkxvYWRpbmcgQ01TIGRhdGEuLi48L3A+JztcbiAgICBcbiAgICAvLyBBZGQgZGVsYXkgdG8gZW5zdXJlIHBhZ2UgaXMgZnVsbHkgbG9hZGVkXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICByZXN1bHRzQ29udGFpbmVyLmlubmVySFRNTCA9ICc8cD5EZXRlY3RpbmcgQ01TLi4uIChOb3QgaW1wbGVtZW50ZWQgeWV0KTwvcD4nO1xuICAgICAgLy8gU2V0IHRvIGRlZmF1bHQgc3RhdGUgc2luY2Ugbm90IGltcGxlbWVudGVkXG4gICAgICB1cGRhdGVJdGVtU3RhdHVzKCdjbXMnLCAnc3VjY2VzcycpO1xuICAgIH0sIDEwMDApO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBpZGVudGlmeUFuYWx5dGljc1Rvb2xzKCkge1xuICBjb25zb2xlLmxvZygnSWRlbnRpZnlpbmcgYW5hbHl0aWNzIHRvb2xzLi4uJyk7XG4gIC8vIEdldCB0aGUgcmVzdWx0cyBjb250YWluZXIgZm9yIHRoaXMgaXRlbVxuICBjb25zdCByZXN1bHRzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdHMtYW5hbHl0aWNzJyk7XG4gIGlmIChyZXN1bHRzQ29udGFpbmVyKSB7XG4gICAgcmVzdWx0c0NvbnRhaW5lci5pbm5lckhUTUwgPSAnPHA+TG9hZGluZyBhbmFseXRpY3MgZGF0YS4uLjwvcD4nO1xuICAgIFxuICAgIC8vIEFkZCBkZWxheSB0byBlbnN1cmUgcGFnZSBpcyBmdWxseSBsb2FkZWRcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHJlc3VsdHNDb250YWluZXIuaW5uZXJIVE1MID0gJzxwPklkZW50aWZ5aW5nIGFuYWx5dGljcyB0b29scy4uLiAoTm90IGltcGxlbWVudGVkIHlldCk8L3A+JztcbiAgICAgIC8vIFNldCB0byBkZWZhdWx0IHN0YXRlIHNpbmNlIG5vdCBpbXBsZW1lbnRlZFxuICAgICAgdXBkYXRlSXRlbVN0YXR1cygnYW5hbHl0aWNzJywgJ3N1Y2Nlc3MnKTtcbiAgICB9LCAxMDAwKTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLy8gVG9nZ2xlIHZpc2liaWxpdHkgb2YgcmVzdWx0cyBjb250YWluZXJcbmZ1bmN0aW9uIHRvZ2dsZVJlc3VsdHNWaXNpYmlsaXR5KGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpIHtcbiAgaWYgKGNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ3Zpc2libGUnKSkge1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gICAgY29udGFpbmVyLnN0eWxlLm1heEhlaWdodCA9ICcwcHgnO1xuICB9IGVsc2Uge1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgY29udGFpbmVyLnN0eWxlLm1heEhlaWdodCA9IGNvbnRhaW5lci5zY3JvbGxIZWlnaHQgKyAncHgnO1xuICAgIFxuICAgIC8vIFVwZGF0ZSBtYXggaGVpZ2h0IG9uIGNvbnRlbnQgY2hhbmdlc1xuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4ge1xuICAgICAgaWYgKGNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ3Zpc2libGUnKSkge1xuICAgICAgICBjb250YWluZXIuc3R5bGUubWF4SGVpZ2h0ID0gY29udGFpbmVyLnNjcm9sbEhlaWdodCArICdweCc7XG4gICAgICB9XG4gICAgfSk7XG4gICAgXG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShjb250YWluZXIsIHsgXG4gICAgICBjaGlsZExpc3Q6IHRydWUsIFxuICAgICAgc3VidHJlZTogdHJ1ZSxcbiAgICAgIGNoYXJhY3RlckRhdGE6IHRydWVcbiAgICB9KTtcbiAgICBcbiAgICAvLyBEaXNjb25uZWN0IGFmdGVyIGEgc2hvcnQgdGltZSB0byBhdm9pZCBtZW1vcnkgbGVha3NcbiAgICBzZXRUaW1lb3V0KCgpID0+IG9ic2VydmVyLmRpc2Nvbm5lY3QoKSwgMjAwMCk7XG4gIH1cbn1cblxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGdldCBoZWFkZXIgdmFsdWUgKGNhc2UtaW5zZW5zaXRpdmUpXG5mdW5jdGlvbiBnZXRIZWFkZXJWYWx1ZShoZWFkZXJzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+LCBoZWFkZXJOYW1lOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcbiAgY29uc3QgaGVhZGVyS2V5ID0gT2JqZWN0LmtleXMoaGVhZGVycykuZmluZChrZXkgPT4gXG4gICAga2V5LnRvTG93ZXJDYXNlKCkgPT09IGhlYWRlck5hbWUudG9Mb3dlckNhc2UoKVxuICApO1xuICBcbiAgcmV0dXJuIGhlYWRlcktleSA/IGhlYWRlcnNbaGVhZGVyS2V5XSA6IG51bGw7XG59XG5cbi8vIEhlbHBlciBmdW5jdGlvbiB0byBkaXNwbGF5IHJlc3VsdHNcbmZ1bmN0aW9uIGRpc3BsYXlSZXN1bHQoXG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIFxuICBoZWFkZXJOYW1lOiBzdHJpbmcsIFxuICBzdGF0dXM6IHN0cmluZywgXG4gIGRldGFpbHM6IHN0cmluZyA9ICcnLCBcbiAgZGVzY3JpcHRpb246IHN0cmluZyA9ICcnXG4pIHtcbiAgY29uc3QgcmVzdWx0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICByZXN1bHRJdGVtLmNsYXNzTmFtZSA9IGByZXN1bHQtaXRlbSAke3N0YXR1cy50b0xvd2VyQ2FzZSgpfWA7XG4gIFxuICBjb25zdCBzdGF0dXNDbGFzcyA9IHN0YXR1cyA9PT0gJ1ByZXNlbnQnID8gJ3N1Y2Nlc3MnIDogXG4gICAgICAgICAgICAgICAgICAgICAoc3RhdHVzID09PSAnRXJyb3InID8gJ2Vycm9yJyA6ICd3YXJuaW5nJyk7XG4gIFxuICByZXN1bHRJdGVtLmlubmVySFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLW5hbWVcIj4ke2hlYWRlck5hbWV9PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInN0YXR1cyAke3N0YXR1c0NsYXNzfVwiPiR7c3RhdHVzfTwvZGl2PlxuICAgICR7ZGV0YWlscyA/IGA8ZGl2IGNsYXNzPVwiZGV0YWlsc1wiPiR7ZGV0YWlsc308L2Rpdj5gIDogJyd9XG4gICAgJHtkZXNjcmlwdGlvbiA/IGA8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb25cIj4ke2Rlc2NyaXB0aW9ufTwvZGl2PmAgOiAnJ31cbiAgYDtcbiAgXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyZXN1bHRJdGVtKTtcbn1cblxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgY2hlY2tsaXN0IGl0ZW0gc3RhdHVzXG5mdW5jdGlvbiB1cGRhdGVJdGVtU3RhdHVzKGl0ZW1JZDogc3RyaW5nLCBzdGF0dXM6ICdzdWNjZXNzJyB8ICd3YXJuaW5nJyB8ICdlcnJvcicpIHtcbiAgY29uc3QgY2hlY2tsaXN0SXRlbVBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNyZXN1bHRzLSR7aXRlbUlkfWApO1xuICBpZiAoIWNoZWNrbGlzdEl0ZW1QYXJlbnQpIHJldHVybjtcbiAgXG4gIGNvbnN0IGNoZWNrbGlzdEl0ZW0gPSBjaGVja2xpc3RJdGVtUGFyZW50LnBhcmVudEVsZW1lbnQ7XG4gIGlmICghY2hlY2tsaXN0SXRlbSkgcmV0dXJuO1xuICBcbiAgY29uc3QgY2hlY2ttYXJrID0gY2hlY2tsaXN0SXRlbS5xdWVyeVNlbGVjdG9yKCcuY2hlY2ttYXJrJyk7XG4gIGlmICghY2hlY2ttYXJrKSByZXR1cm47XG4gIFxuICAvLyBSZXNldCBleGlzdGluZyBjbGFzc2VzXG4gIGNoZWNrbWFyay5jbGFzc0xpc3QucmVtb3ZlKCdzdWNjZXNzJywgJ3dhcm5pbmcnLCAnZXJyb3InKTtcbiAgY2hlY2ttYXJrLmNsYXNzTGlzdC5hZGQoc3RhdHVzKTtcbiAgXG4gIC8vIFVwZGF0ZSBpY29uIGJhc2VkIG9uIHN0YXR1c1xuICBpZiAoc3RhdHVzID09PSAnc3VjY2VzcycpIHtcbiAgICBjaGVja21hcmsuaW5uZXJIVE1MID0gJ+Kckyc7XG4gIH0gZWxzZSBpZiAoc3RhdHVzID09PSAnd2FybmluZycpIHtcbiAgICBjaGVja21hcmsuaW5uZXJIVE1MID0gJ+KaoCc7XG4gIH0gZWxzZSBpZiAoc3RhdHVzID09PSAnZXJyb3InKSB7XG4gICAgY2hlY2ttYXJrLmlubmVySFRNTCA9ICfinJcnO1xuICB9XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGNvbnN0IGFwcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKTtcbiAgaWYgKGFwcCkge1xuICAgIC8vIENyZWF0ZSBoZWFkZXJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9ICdXaG8gRGlzPyc7XG4gICAgYXBwLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgXG4gICAgLy8gQ3JlYXRlIGNoZWNrbGlzdCB3aXRoIGNvcnJlc3BvbmRpbmcgZnVuY3Rpb25zXG4gICAgY29uc3QgY2hlY2tsaXN0SXRlbXNXaXRoRnVuY3Rpb25zID0gW1xuICAgICAgeyBcbiAgICAgICAgaWQ6ICdzaXRlLXRlY2hub2xvZ3knLFxuICAgICAgICBuYW1lOiAnU2l0ZSB0ZWNobm9sb2d5IHNjYW4nLCBcbiAgICAgICAgZnVuY3Rpb246IHNjYW5TaXRlVGVjaG5vbG9neSBcbiAgICAgIH0sXG4gICAgICB7IFxuICAgICAgICBpZDogJ3NlY3VyaXR5LWhlYWRlcnMnLFxuICAgICAgICBuYW1lOiAnU2VjdXJpdHkgaGVhZGVycyBjaGVjaycsIFxuICAgICAgICBmdW5jdGlvbjogY2hlY2tTZWN1cml0eUhlYWRlcnMgXG4gICAgICB9LFxuICAgICAgeyBcbiAgICAgICAgaWQ6ICdqYXZhc2NyaXB0LWxpYnJhcmllcycsXG4gICAgICAgIG5hbWU6ICdKYXZhU2NyaXB0IGxpYnJhcnkgZGV0ZWN0aW9uJywgXG4gICAgICAgIGZ1bmN0aW9uOiBkZXRlY3RKYXZhU2NyaXB0TGlicmFyaWVzIFxuICAgICAgfSxcbiAgICAgIHsgXG4gICAgICAgIGlkOiAnY21zJyxcbiAgICAgICAgbmFtZTogJ0NvbnRlbnQgbWFuYWdlbWVudCBzeXN0ZW0gZGV0ZWN0aW9uJywgXG4gICAgICAgIGZ1bmN0aW9uOiBkZXRlY3RDb250ZW50TWFuYWdlbWVudFN5c3RlbSBcbiAgICAgIH0sXG4gICAgICB7IFxuICAgICAgICBpZDogJ2FuYWx5dGljcycsXG4gICAgICAgIG5hbWU6ICdBbmFseXRpY3MgdG9vbHMgaWRlbnRpZmljYXRpb24nLCBcbiAgICAgICAgZnVuY3Rpb246IGlkZW50aWZ5QW5hbHl0aWNzVG9vbHMgXG4gICAgICB9XG4gICAgXTtcbiAgICBcbiAgICBjb25zdCBjaGVja2xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGNoZWNrbGlzdC5jbGFzc05hbWUgPSAnY2hlY2tsaXN0JztcbiAgICBcbiAgICBjaGVja2xpc3RJdGVtc1dpdGhGdW5jdGlvbnMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIC8vIENyZWF0ZSBsaXN0IGl0ZW0gY29udGFpbmVyXG4gICAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICBsaXN0SXRlbS5jbGFzc05hbWUgPSAnY2hlY2tsaXN0LWl0ZW0tY29udGFpbmVyJztcbiAgICAgIFxuICAgICAgLy8gQ3JlYXRlIGhlYWRlciB3aXRoIGNoZWNrbWFyayBhbmQgdGl0bGVcbiAgICAgIGNvbnN0IGl0ZW1IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGl0ZW1IZWFkZXIuY2xhc3NOYW1lID0gJ2NoZWNrbGlzdC1oZWFkZXInO1xuICAgICAgXG4gICAgICBjb25zdCBjaGVja21hcmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBjaGVja21hcmsuY2xhc3NOYW1lID0gJ2NoZWNrbWFyayBzdWNjZXNzJztcbiAgICAgIGNoZWNrbWFyay5pbm5lckhUTUwgPSAn4pyTJztcbiAgICAgIFxuICAgICAgY29uc3QgaXRlbVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBpdGVtVGV4dC5jbGFzc05hbWUgPSAnY2hlY2tsaXN0LWl0ZW0nO1xuICAgICAgaXRlbVRleHQudGV4dENvbnRlbnQgPSBpdGVtLm5hbWU7XG4gICAgICBcbiAgICAgIGNvbnN0IGV4cGFuZEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBleHBhbmRJY29uLmNsYXNzTmFtZSA9ICdleHBhbmQtaWNvbic7XG4gICAgICBleHBhbmRJY29uLmlubmVySFRNTCA9ICfilrwnO1xuICAgICAgXG4gICAgICBpdGVtSGVhZGVyLmFwcGVuZENoaWxkKGNoZWNrbWFyayk7XG4gICAgICBpdGVtSGVhZGVyLmFwcGVuZENoaWxkKGl0ZW1UZXh0KTtcbiAgICAgIGl0ZW1IZWFkZXIuYXBwZW5kQ2hpbGQoZXhwYW5kSWNvbik7XG4gICAgICBcbiAgICAgIC8vIENyZWF0ZSByZXN1bHRzIGNvbnRhaW5lciAoaW5pdGlhbGx5IGhpZGRlbilcbiAgICAgIGNvbnN0IHJlc3VsdHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHJlc3VsdHNDb250YWluZXIuY2xhc3NOYW1lID0gJ3Jlc3VsdHMtY29udGFpbmVyJztcbiAgICAgIHJlc3VsdHNDb250YWluZXIuaWQgPSBgcmVzdWx0cy0ke2l0ZW0uaWR9YDtcbiAgICAgIHJlc3VsdHNDb250YWluZXIuc3R5bGUubWF4SGVpZ2h0ID0gJzBweCc7XG4gICAgICByZXN1bHRzQ29udGFpbmVyLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICBcbiAgICAgIC8vIEFkZCBjbGljayBldmVudCB0byBoZWFkZXIgdG8gdG9nZ2xlIHZpc2liaWxpdHlcbiAgICAgIGl0ZW1IZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIC8vIFRvZ2dsZSBhY3RpdmUgc3RhdGUgZm9yIHZpc3VhbCBmZWVkYmFja1xuICAgICAgICBsaXN0SXRlbS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICAgICAgLy8gVG9nZ2xlIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSByZXN1bHRzXG4gICAgICAgIHRvZ2dsZVJlc3VsdHNWaXNpYmlsaXR5KHJlc3VsdHNDb250YWluZXIpO1xuICAgICAgfSk7XG4gICAgICBcbiAgICAgIC8vIEFzc2VtYmxlIHRoZSBsaXN0IGl0ZW1cbiAgICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGl0ZW1IZWFkZXIpO1xuICAgICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQocmVzdWx0c0NvbnRhaW5lcik7XG4gICAgICBjaGVja2xpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICAgIH0pO1xuICAgIFxuICAgIGFwcC5hcHBlbmRDaGlsZChjaGVja2xpc3QpO1xuICAgIFxuICAgIC8vIFJ1biBhbGwgc2NhbiBmdW5jdGlvbnMgYXV0b21hdGljYWxseSB3aGVuIHBvcHVwIGxvYWRzXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjaGVja2xpc3RJdGVtc1dpdGhGdW5jdGlvbnMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaXRlbS5mdW5jdGlvbigpO1xuICAgICAgfSk7XG4gICAgfSwgNTAwKTsgLy8gSW5jcmVhc2VkIGZyb20gMTAwbXMgdG8gNTAwbXMgZm9yIGJldHRlciBpbml0aWFsaXphdGlvblxuICB9XG59KTsgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9