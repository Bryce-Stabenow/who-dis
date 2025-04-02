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
        resultsContainer.innerHTML = '<p>Scanning site technologies... (Not implemented yet)</p>';
        // Set to default state since not implemented
        updateItemStatus('site-technology', 'success');
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
                        return !!(window.Vue ||
                            document.querySelector('[data-v-]') ||
                            document.querySelector('[v-cloak]') ||
                            document.querySelector('[v-if]') ||
                            document.querySelector('[v-for]') ||
                            document.querySelector('[v-show]'));
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
                                // Try to extract version from Svelte's internals
                                try {
                                    // Look for version in the devtools hook
                                    if (window.__svelte__ && window.__svelte__.version) {
                                        version = window.__svelte__.version;
                                    }
                                    else {
                                        // SvelteKit might have different version structure
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
                                    // Try to get Next.js version from runtime
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
                return results;
            }
        })
            .then(injectionResults => {
            if (!injectionResults || injectionResults.length === 0) {
                resultsContainer.innerHTML = '<div class="error-message">Failed to inject detection script</div>';
                updateItemStatus('javascript-libraries', 'error');
                return;
            }
            const libraries = injectionResults[0].result;
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
        resultsContainer.innerHTML = '<p>Detecting CMS... (Not implemented yet)</p>';
        // Set to default state since not implemented
        updateItemStatus('cms', 'success');
    }
    return true;
}
function identifyAnalyticsTools() {
    console.log('Identifying analytics tools...');
    // Get the results container for this item
    const resultsContainer = document.getElementById('results-analytics');
    if (resultsContainer) {
        resultsContainer.innerHTML = '<p>Identifying analytics tools... (Not implemented yet)</p>';
        // Set to default state since not implemented
        updateItemStatus('analytics', 'success');
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
        }, 100);
    }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLE9BQU8sdUZBQXVGLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8s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QUN2Qyx1QkFBdUIsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQzVDLENBQUMsQ0FBQyxDQUFDO1lBRUgseUJBQXlCO1lBQ3pCLFFBQVEsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDakMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ3ZDLFNBQVMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQUM7UUFFSCxHQUFHLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRTNCLHdEQUF3RDtRQUN4RCxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsMkJBQTJCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN6QyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDbEIsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDVixDQUFDO0FBQ0gsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aG8tZGlzLXNpdGUtc2Nhbm5lci8uL3NyYy9wb3B1cC5jc3MiLCJ3ZWJwYWNrOi8vd2hvLWRpcy1zaXRlLXNjYW5uZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3doby1kaXMtc2l0ZS1zY2FubmVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2hvLWRpcy1zaXRlLXNjYW5uZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2hvLWRpcy1zaXRlLXNjYW5uZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3doby1kaXMtc2l0ZS1zY2FubmVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3doby1kaXMtc2l0ZS1zY2FubmVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3doby1kaXMtc2l0ZS1zY2FubmVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2hvLWRpcy1zaXRlLXNjYW5uZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93aG8tZGlzLXNpdGUtc2Nhbm5lci8uL3NyYy9wb3B1cC5jc3M/NTlmOSIsIndlYnBhY2s6Ly93aG8tZGlzLXNpdGUtc2Nhbm5lci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93aG8tZGlzLXNpdGUtc2Nhbm5lci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93aG8tZGlzLXNpdGUtc2Nhbm5lci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2hvLWRpcy1zaXRlLXNjYW5uZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93aG8tZGlzLXNpdGUtc2Nhbm5lci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3doby1kaXMtc2l0ZS1zY2FubmVyL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93aG8tZGlzLXNpdGUtc2Nhbm5lci8uL3NyYy9wb3B1cC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogUG9wdXAgU3R5bGVzICovXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAyMHB4O1xuICB3aWR0aDogNDgwcHg7XG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xuICBjb2xvcjogIzMzMztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmFmYztcbn1cblxuI2FwcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG5oMSB7XG4gIG1hcmdpbjogMCAwIDE1cHggMDtcbiAgY29sb3I6ICMyYzNlNTA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwwLDAsMC4wNSk7XG59XG5cbmgzIHtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIGNvbG9yOiAjMmMzZTUwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5jaGVja2xpc3Qge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbi5jaGVja2xpc3QtaXRlbS1jb250YWluZXIge1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMDUpO1xufVxuXG4uY2hlY2tsaXN0LWl0ZW0tY29udGFpbmVyLmFjdGl2ZSB7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDUyLCAxNTIsIDIxOSwgMC4zKTtcbn1cblxuLmNoZWNrbGlzdC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNoZWNrbGlzdC1oZWFkZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmOWZmO1xufVxuXG4uY2hlY2tsaXN0LWl0ZW0tY29udGFpbmVyLmFjdGl2ZSAuY2hlY2tsaXN0LWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmY1ZmY7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDUyLCAxNTIsIDIxOSwgMC4yKTtcbn1cblxuLmNoZWNrbWFyayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiAyNHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi8qIFN0YXR1cy1zcGVjaWZpYyBjaGVja21hcmsgc3R5bGVzICovXG4uY2hlY2ttYXJrLnN1Y2Nlc3Mge1xuICBjb2xvcjogIzRDQUY1MDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NiwgMTc1LCA4MCwgMC4xKTtcbn1cblxuLmNoZWNrbWFyay53YXJuaW5nIHtcbiAgY29sb3I6ICNGRjk4MDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxNTIsIDAsIDAuMSk7XG59XG5cbi5jaGVja21hcmsuZXJyb3Ige1xuICBjb2xvcjogI0Y0NDMzNjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDQsIDY3LCA1NCwgMC4xKTtcbn1cblxuLmNoZWNrbGlzdC1pdGVtIHtcbiAgZmxleDogMTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzQ0NDtcbn1cblxuLmV4cGFuZC1pY29uIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICM2NjY7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4wNSk7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5jaGVja2xpc3QtaXRlbS1jb250YWluZXIuYWN0aXZlIC5leHBhbmQtaWNvbiB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTIsIDE1MiwgMjE5LCAwLjIpO1xuICBjb2xvcjogIzM0OThkYjtcbn1cblxuLyogUmVzdWx0cyBDb250YWluZXIgU3R5bGluZyAqL1xuLnJlc3VsdHMtY29udGFpbmVyIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4wNSk7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4zcyBlYXNlLWluLW91dDtcbn1cblxuLnJlc3VsdHMtY29udGFpbmVyLnZpc2libGUge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuXG4ucmVzdWx0LWl0ZW0ge1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuICBwYWRkaW5nOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgI2NjYztcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwwLDAsMC4wNSk7XG59XG5cbi5yZXN1bHQtaXRlbTpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLnJlc3VsdC1pdGVtLnByZXNlbnQge1xuICBib3JkZXItbGVmdC1jb2xvcjogIzRDQUY1MDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjhlOTtcbn1cblxuLnJlc3VsdC1pdGVtLm1pc3Npbmcge1xuICBib3JkZXItbGVmdC1jb2xvcjogI0ZGOTgwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjhlMTtcbn1cblxuLnJlc3VsdC1pdGVtLmVycm9yIHtcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICNGNDQzMzY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmViZWU7XG59XG5cbi5oZWFkZXItbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbiAgY29sb3I6ICMyYzNlNTA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnN0YXR1cyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogM3B4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5zdGF0dXMuc3VjY2VzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnN0YXR1cy53YXJuaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGOTgwMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc3RhdHVzLmVycm9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y0NDMzNjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZGV0YWlscyB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gIGNvbG9yOiAjNTU1O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMDIpO1xuICBwYWRkaW5nOiA2cHggOHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM3Nzc7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLmVycm9yLW1lc3NhZ2Uge1xuICBjb2xvcjogI0Y0NDMzNjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZzogMTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWJlZTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI0NCwgNjcsIDU0LCAwLjIpO1xufVxuXG4uaW5mby1tZXNzYWdlIHtcbiAgY29sb3I6ICMyMTk2RjM7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlM2YyZmQ7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgzMywgMTUwLCAyNDMsIDAuMik7XG59IGAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3BvcHVwLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxpQkFBaUI7QUFDakI7RUFDRSx3SUFBd0k7RUFDeEksU0FBUztFQUNULGFBQWE7RUFDYixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIseUNBQXlDO0VBQ3pDLHlCQUF5QjtFQUN6QixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSwwQ0FBMEM7RUFDMUMscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGdEQUFnRDtBQUNsRDs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGNBQWM7RUFDZCxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQSxxQ0FBcUM7QUFDckM7RUFDRSxjQUFjO0VBQ2Qsd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsY0FBYztFQUNkLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGNBQWM7RUFDZCx3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsK0JBQStCO0VBQy9CLGVBQWU7RUFDZixXQUFXO0VBQ1gsa0NBQWtDO0VBQ2xDLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHlDQUF5QztFQUN6QyxjQUFjO0FBQ2hCOztBQUVBLDhCQUE4QjtBQUM5QjtFQUNFLHNDQUFzQztFQUN0QyxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0Isc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLDRCQUE0QjtFQUM1QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIseUNBQXlDO0FBQzNDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIFBvcHVwIFN0eWxlcyAqL1xcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICB3aWR0aDogNDgwcHg7XFxuICBtaW4taGVpZ2h0OiA0MDBweDtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmFmYztcXG59XFxuXFxuI2FwcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuaDEge1xcbiAgbWFyZ2luOiAwIDAgMTVweCAwO1xcbiAgY29sb3I6ICMyYzNlNTA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcXG4gIHRleHQtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLDAsMCwwLjA1KTtcXG59XFxuXFxuaDMge1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxuICBjb2xvcjogIzJjM2U1MDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5jaGVja2xpc3Qge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5jaGVja2xpc3QtaXRlbS1jb250YWluZXIge1xcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjA1KTtcXG59XFxuXFxuLmNoZWNrbGlzdC1pdGVtLWNvbnRhaW5lci5hY3RpdmUge1xcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDUyLCAxNTIsIDIxOSwgMC4zKTtcXG59XFxuXFxuLmNoZWNrbGlzdC1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxNHB4IDE2cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5jaGVja2xpc3QtaGVhZGVyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY5ZmY7XFxufVxcblxcbi5jaGVja2xpc3QtaXRlbS1jb250YWluZXIuYWN0aXZlIC5jaGVja2xpc3QtaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmY1ZmY7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSg1MiwgMTUyLCAyMTksIDAuMik7XFxufVxcblxcbi5jaGVja21hcmsge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1yaWdodDogMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICB3aWR0aDogMjRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLyogU3RhdHVzLXNwZWNpZmljIGNoZWNrbWFyayBzdHlsZXMgKi9cXG4uY2hlY2ttYXJrLnN1Y2Nlc3Mge1xcbiAgY29sb3I6ICM0Q0FGNTA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc2LCAxNzUsIDgwLCAwLjEpO1xcbn1cXG5cXG4uY2hlY2ttYXJrLndhcm5pbmcge1xcbiAgY29sb3I6ICNGRjk4MDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTUyLCAwLCAwLjEpO1xcbn1cXG5cXG4uY2hlY2ttYXJrLmVycm9yIHtcXG4gIGNvbG9yOiAjRjQ0MzM2O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDQsIDY3LCA1NCwgMC4xKTtcXG59XFxuXFxuLmNoZWNrbGlzdC1pdGVtIHtcXG4gIGZsZXg6IDE7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgY29sb3I6ICM0NDQ7XFxufVxcblxcbi5leHBhbmQtaWNvbiB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XFxuICBmb250LXNpemU6IDEwcHg7XFxuICBjb2xvcjogIzY2NjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4wNSk7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5jaGVja2xpc3QtaXRlbS1jb250YWluZXIuYWN0aXZlIC5leHBhbmQtaWNvbiB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1MiwgMTUyLCAyMTksIDAuMik7XFxuICBjb2xvcjogIzM0OThkYjtcXG59XFxuXFxuLyogUmVzdWx0cyBDb250YWluZXIgU3R5bGluZyAqL1xcbi5yZXN1bHRzLWNvbnRhaW5lciB7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjA1KTtcXG4gIHBhZGRpbmc6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnJlc3VsdHMtY29udGFpbmVyLnZpc2libGUge1xcbiAgcGFkZGluZzogMTZweDtcXG59XFxuXFxuLnJlc3VsdC1pdGVtIHtcXG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjY2NjO1xcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwwLDAsMC4wNSk7XFxufVxcblxcbi5yZXN1bHQtaXRlbTpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblxcbi5yZXN1bHQtaXRlbS5wcmVzZW50IHtcXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjNENBRjUwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjhlOTtcXG59XFxuXFxuLnJlc3VsdC1pdGVtLm1pc3Npbmcge1xcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICNGRjk4MDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOGUxO1xcbn1cXG5cXG4ucmVzdWx0LWl0ZW0uZXJyb3Ige1xcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICNGNDQzMzY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYmVlO1xcbn1cXG5cXG4uaGVhZGVyLW5hbWUge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIG1hcmdpbi1ib3R0b206IDZweDtcXG4gIGNvbG9yOiAjMmMzZTUwO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4uc3RhdHVzIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIHBhZGRpbmc6IDNweCA4cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLnN0YXR1cy5zdWNjZXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5zdGF0dXMud2FybmluZyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY5ODAwO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc3RhdHVzLmVycm9yIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNDQzMzY7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5kZXRhaWxzIHtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG4gIG1hcmdpbi1ib3R0b206IDZweDtcXG4gIGNvbG9yOiAjNTU1O1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjAyKTtcXG4gIHBhZGRpbmc6IDZweCA4cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgY29sb3I6ICM3Nzc7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5lcnJvci1tZXNzYWdlIHtcXG4gIGNvbG9yOiAjRjQ0MzM2O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYmVlO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjQ0LCA2NywgNTQsIDAuMik7XFxufVxcblxcbi5pbmZvLW1lc3NhZ2Uge1xcbiAgY29sb3I6ICMyMTk2RjM7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgcGFkZGluZzogMTJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlM2YyZmQ7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgzMywgMTUwLCAyNDMsIDAuMik7XFxufSBcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3BvcHVwLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3BvcHVwLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9wb3B1cC5jc3MnO1xuXG4vLyBGdW5jdGlvbnMgZm9yIGNoZWNrbGlzdCBpdGVtc1xuZnVuY3Rpb24gc2NhblNpdGVUZWNobm9sb2d5KCkge1xuICBjb25zb2xlLmxvZygnU2Nhbm5pbmcgc2l0ZSB0ZWNobm9sb2dpZXMuLi4nKTtcbiAgLy8gR2V0IHRoZSByZXN1bHRzIGNvbnRhaW5lciBmb3IgdGhpcyBpdGVtXG4gIGNvbnN0IHJlc3VsdHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0cy1zaXRlLXRlY2hub2xvZ3knKTtcbiAgaWYgKHJlc3VsdHNDb250YWluZXIpIHtcbiAgICByZXN1bHRzQ29udGFpbmVyLmlubmVySFRNTCA9ICc8cD5TY2FubmluZyBzaXRlIHRlY2hub2xvZ2llcy4uLiAoTm90IGltcGxlbWVudGVkIHlldCk8L3A+JztcbiAgICAvLyBTZXQgdG8gZGVmYXVsdCBzdGF0ZSBzaW5jZSBub3QgaW1wbGVtZW50ZWRcbiAgICB1cGRhdGVJdGVtU3RhdHVzKCdzaXRlLXRlY2hub2xvZ3knLCAnc3VjY2VzcycpO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBjaGVja1NlY3VyaXR5SGVhZGVycygpIHtcbiAgY29uc29sZS5sb2coJ0NoZWNraW5nIHNlY3VyaXR5IGhlYWRlcnMuLi4nKTtcbiAgXG4gIC8vIEdldCB0aGUgcmVzdWx0cyBjb250YWluZXIgZm9yIHRoaXMgaXRlbVxuICBjb25zdCByZXN1bHRzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdHMtc2VjdXJpdHktaGVhZGVycycpO1xuICBpZiAoIXJlc3VsdHNDb250YWluZXIpIHJldHVybiBmYWxzZTtcbiAgXG4gIC8vIFNob3cgbG9hZGluZyBpbmRpY2F0b3JcbiAgcmVzdWx0c0NvbnRhaW5lci5pbm5lckhUTUwgPSAnPHA+TG9hZGluZyBzZWN1cml0eSBoZWFkZXJzIGRhdGEuLi48L3A+JztcbiAgXG4gIC8vIEdldCB0aGUgY3VycmVudCBhY3RpdmUgdGFiXG4gIGNocm9tZS50YWJzLnF1ZXJ5KHthY3RpdmU6IHRydWUsIGN1cnJlbnRXaW5kb3c6IHRydWV9LCAodGFicykgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRUYWIgPSB0YWJzWzBdO1xuICAgIGlmICghY3VycmVudFRhYiB8fCAhY3VycmVudFRhYi51cmwpIHtcbiAgICAgIHJlc3VsdHNDb250YWluZXIuaW5uZXJIVE1MID0gJzxkaXYgY2xhc3M9XCJlcnJvci1tZXNzYWdlXCI+Q2Fubm90IGFjY2VzcyBjdXJyZW50IHRhYiBpbmZvcm1hdGlvbjwvZGl2Pic7XG4gICAgICB1cGRhdGVJdGVtU3RhdHVzKCdzZWN1cml0eS1oZWFkZXJzJywgJ2Vycm9yJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIC8vIENoZWNrIGlmIHdlIGNhbiBhbmFseXplIHRoaXMgVVJMIChtdXN0IGJlIGh0dHAgb3IgaHR0cHMpXG4gICAgY29uc3QgdXJsID0gY3VycmVudFRhYi51cmw7XG4gICAgaWYgKCF1cmwuc3RhcnRzV2l0aCgnaHR0cDovLycpICYmICF1cmwuc3RhcnRzV2l0aCgnaHR0cHM6Ly8nKSkge1xuICAgICAgcmVzdWx0c0NvbnRhaW5lci5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cImVycm9yLW1lc3NhZ2VcIj5DYW4gb25seSBhbmFseXplIEhUVFAvSFRUUFMgcGFnZXM8L2Rpdj4nO1xuICAgICAgdXBkYXRlSXRlbVN0YXR1cygnc2VjdXJpdHktaGVhZGVycycsICdlcnJvcicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICAvLyBGZXRjaCBoZWFkZXJzIHVzaW5nIGJhY2tncm91bmQgc2NyaXB0IChuZWVkZWQgZm9yIENPUlMpXG4gICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe2FjdGlvbjogJ2ZldGNoSGVhZGVycycsIHVybDogdXJsfSwgKHJlc3BvbnNlKSA9PiB7XG4gICAgICBpZiAocmVzcG9uc2UuZXJyb3IpIHtcbiAgICAgICAgcmVzdWx0c0NvbnRhaW5lci5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cImVycm9yLW1lc3NhZ2VcIj4ke3Jlc3BvbnNlLmVycm9yfTwvZGl2PmA7XG4gICAgICAgIHVwZGF0ZUl0ZW1TdGF0dXMoJ3NlY3VyaXR5LWhlYWRlcnMnLCAnZXJyb3InKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgXG4gICAgICByZXN1bHRzQ29udGFpbmVyLmlubmVySFRNTCA9ICc8aDM+U2VjdXJpdHkgSGVhZGVycyBBbmFseXNpczwvaDM+JztcbiAgICAgIGNvbnN0IGhlYWRlcnMgPSByZXNwb25zZS5oZWFkZXJzO1xuICAgICAgXG4gICAgICAvLyBJbXBvcnRhbnQgc2VjdXJpdHkgaGVhZGVycyB0byBjaGVja1xuICAgICAgY29uc3Qgc2VjdXJpdHlIZWFkZXJzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ0NvbnRlbnQtU2VjdXJpdHktUG9saWN5JyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0hlbHBzIHByZXZlbnQgWFNTIGFuZCBkYXRhIGluamVjdGlvbiBhdHRhY2tzJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ1gtQ29udGVudC1UeXBlLU9wdGlvbnMnLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUHJldmVudHMgTUlNRSB0eXBlIHNuaWZmaW5nJyxcbiAgICAgICAgICByZWNvbW1lbmRlZDogJ25vc25pZmYnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnWC1GcmFtZS1PcHRpb25zJyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ1Byb3RlY3RzIGFnYWluc3QgY2xpY2tqYWNraW5nJyxcbiAgICAgICAgICByZWNvbW1lbmRlZDogJ0RFTlkgb3IgU0FNRU9SSUdJTidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdTdHJpY3QtVHJhbnNwb3J0LVNlY3VyaXR5JyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0VuZm9yY2VzIEhUVFBTIGNvbm5lY3Rpb25zJyxcbiAgICAgICAgICByZWNvbW1lbmRlZDogJ21heC1hZ2U9MzE1MzYwMDA7IGluY2x1ZGVTdWJEb21haW5zJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ1gtWFNTLVByb3RlY3Rpb24nLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUHJvdmlkZXMgWFNTIHByb3RlY3Rpb24gaW4gb2xkZXIgYnJvd3NlcnMnLFxuICAgICAgICAgIHJlY29tbWVuZGVkOiAnMTsgbW9kZT1ibG9jaydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdSZWZlcnJlci1Qb2xpY3knLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQ29udHJvbHMgaW5mb3JtYXRpb24gaW4gdGhlIFJlZmVyZXIgaGVhZGVyJyxcbiAgICAgICAgICByZWNvbW1lbmRlZDogJ3N0cmljdC1vcmlnaW4td2hlbi1jcm9zcy1vcmlnaW4nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnUGVybWlzc2lvbnMtUG9saWN5JyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0NvbnRyb2xzIGJyb3dzZXIgZmVhdHVyZXMgYW5kIEFQSXMnLFxuICAgICAgICAgIGFsdGVybmF0ZTogJ0ZlYXR1cmUtUG9saWN5J1xuICAgICAgICB9XG4gICAgICBdO1xuICAgICAgXG4gICAgICAvLyBDaGVjayBlYWNoIHNlY3VyaXR5IGhlYWRlclxuICAgICAgbGV0IG1pc3NpbmdIZWFkZXJzID0gMDtcbiAgICAgIHNlY3VyaXR5SGVhZGVycy5mb3JFYWNoKGhlYWRlciA9PiB7XG4gICAgICAgIGNvbnN0IGhlYWRlclZhbHVlID0gZ2V0SGVhZGVyVmFsdWUoaGVhZGVycywgaGVhZGVyLm5hbWUpIHx8IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKGhlYWRlci5hbHRlcm5hdGUgPyBnZXRIZWFkZXJWYWx1ZShoZWFkZXJzLCBoZWFkZXIuYWx0ZXJuYXRlKSA6IG51bGwpO1xuICAgICAgICBcbiAgICAgICAgY29uc3Qgc3RhdHVzID0gaGVhZGVyVmFsdWUgPyAnUHJlc2VudCcgOiAnTWlzc2luZyc7XG4gICAgICAgIGNvbnN0IGRldGFpbHMgPSBoZWFkZXJWYWx1ZSB8fCBcbiAgICAgICAgICAgICAgICAgICAgICAgKGhlYWRlci5yZWNvbW1lbmRlZCA/IGBSZWNvbW1lbmRlZDogJHtoZWFkZXIucmVjb21tZW5kZWR9YCA6ICdOb3QgaW1wbGVtZW50ZWQnKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChzdGF0dXMgPT09ICdNaXNzaW5nJykgbWlzc2luZ0hlYWRlcnMrKztcbiAgICAgICAgXG4gICAgICAgIGRpc3BsYXlSZXN1bHQocmVzdWx0c0NvbnRhaW5lciwgaGVhZGVyLm5hbWUsIHN0YXR1cywgZGV0YWlscywgaGVhZGVyLmRlc2NyaXB0aW9uKTtcbiAgICAgIH0pO1xuICAgICAgXG4gICAgICAvLyBVcGRhdGUgdGhlIGNoZWNrbGlzdCBpdGVtIHN0YXR1cyBiYXNlZCBvbiBtaXNzaW5nIGhlYWRlcnNcbiAgICAgIGlmIChtaXNzaW5nSGVhZGVycyA+IDApIHtcbiAgICAgICAgdXBkYXRlSXRlbVN0YXR1cygnc2VjdXJpdHktaGVhZGVycycsICd3YXJuaW5nJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB1cGRhdGVJdGVtU3RhdHVzKCdzZWN1cml0eS1oZWFkZXJzJywgJ3N1Y2Nlc3MnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIFxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gZGV0ZWN0SmF2YVNjcmlwdExpYnJhcmllcygpIHtcbiAgY29uc29sZS5sb2coJ0RldGVjdGluZyBKYXZhU2NyaXB0IGxpYnJhcmllcy4uLicpO1xuICBcbiAgLy8gR2V0IHRoZSByZXN1bHRzIGNvbnRhaW5lciBmb3IgdGhpcyBpdGVtXG4gIGNvbnN0IHJlc3VsdHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0cy1qYXZhc2NyaXB0LWxpYnJhcmllcycpO1xuICBpZiAoIXJlc3VsdHNDb250YWluZXIpIHJldHVybiBmYWxzZTtcbiAgXG4gIC8vIFNob3cgbG9hZGluZyBpbmRpY2F0b3JcbiAgcmVzdWx0c0NvbnRhaW5lci5pbm5lckhUTUwgPSAnPHA+TG9hZGluZyBKYXZhU2NyaXB0IGxpYnJhcmllcyBkYXRhLi4uPC9wPic7XG4gIFxuICAvLyBHZXQgdGhlIGN1cnJlbnQgYWN0aXZlIHRhYlxuICBjaHJvbWUudGFicy5xdWVyeSh7YWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlfSwgKHRhYnMpID0+IHtcbiAgICBjb25zdCBjdXJyZW50VGFiID0gdGFic1swXTtcbiAgICBpZiAoIWN1cnJlbnRUYWIgfHwgIWN1cnJlbnRUYWIudXJsKSB7XG4gICAgICByZXN1bHRzQ29udGFpbmVyLmlubmVySFRNTCA9ICc8ZGl2IGNsYXNzPVwiZXJyb3ItbWVzc2FnZVwiPkNhbm5vdCBhY2Nlc3MgY3VycmVudCB0YWIgaW5mb3JtYXRpb248L2Rpdj4nO1xuICAgICAgdXBkYXRlSXRlbVN0YXR1cygnamF2YXNjcmlwdC1saWJyYXJpZXMnLCAnZXJyb3InKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgLy8gQ2hlY2sgaWYgd2UgY2FuIGFuYWx5emUgdGhpcyBVUkwgKG11c3QgYmUgaHR0cCBvciBodHRwcylcbiAgICBjb25zdCB1cmwgPSBjdXJyZW50VGFiLnVybDtcbiAgICBpZiAoIXVybC5zdGFydHNXaXRoKCdodHRwOi8vJykgJiYgIXVybC5zdGFydHNXaXRoKCdodHRwczovLycpKSB7XG4gICAgICByZXN1bHRzQ29udGFpbmVyLmlubmVySFRNTCA9ICc8ZGl2IGNsYXNzPVwiZXJyb3ItbWVzc2FnZVwiPkNhbiBvbmx5IGFuYWx5emUgSFRUUC9IVFRQUyBwYWdlczwvZGl2Pic7XG4gICAgICB1cGRhdGVJdGVtU3RhdHVzKCdqYXZhc2NyaXB0LWxpYnJhcmllcycsICdlcnJvcicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICAvLyBFeGVjdXRlIHNjcmlwdCBpbiB0aGUgY3VycmVudCB0YWIgdG8gZGV0ZWN0IGxpYnJhcmllc1xuICAgIGNocm9tZS5zY3JpcHRpbmcuZXhlY3V0ZVNjcmlwdCh7XG4gICAgICB0YXJnZXQ6IHsgdGFiSWQ6IGN1cnJlbnRUYWIuaWQgYXMgbnVtYmVyIH0sXG4gICAgICBmdW5jOiAoKSA9PiB7XG4gICAgICAgIC8vIFR5cGVzIGZvciBnbG9iYWwgbGlicmFyaWVzXG4gICAgICAgIGludGVyZmFjZSBXaW5kb3cge1xuICAgICAgICAgIFJlYWN0PzogYW55O1xuICAgICAgICAgIFZ1ZT86IGFueTtcbiAgICAgICAgICBhbmd1bGFyPzogYW55O1xuICAgICAgICAgIGpRdWVyeT86IGFueTtcbiAgICAgICAgICAkPzogYW55O1xuICAgICAgICAgIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXz86IGFueTtcbiAgICAgICAgICBfX3N2ZWx0ZV9fPzogYW55O1xuICAgICAgICAgIF9fTkVYVF9EQVRBX18/OiBhbnk7XG4gICAgICAgICAgX19HQVRTQlk/OiBhbnk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIERlZmluZSBsaWJyYXJ5IGRldGVjdGlvbiBmdW5jdGlvbnNcbiAgICAgICAgY29uc3QgbGlicmFyeURldGVjdG9ycyA9IHtcbiAgICAgICAgICAnUmVhY3QnOiAoKSA9PiB7XG4gICAgICAgICAgICAvLyBNdWx0aXBsZSBkZXRlY3Rpb24gYXBwcm9hY2hlcyBmb3IgbW9kZXJuIFJlYWN0XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAvLyAxLiBDaGVjayBmb3IgUmVhY3QgaW4gd2luZG93XG4gICAgICAgICAgICAgIGlmICgod2luZG93IGFzIFdpbmRvdykuUmVhY3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLy8gMi4gQ2hlY2sgZm9yIFJlYWN0IERldlRvb2xzIGhvb2tcbiAgICAgICAgICAgICAgaWYgKCh3aW5kb3cgYXMgV2luZG93KS5fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLy8gMy4gQ2hlY2sgZm9yIFJlYWN0IDE2KyBmaWJlciBub2Rlc1xuICAgICAgICAgICAgICBjb25zdCByb290RWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1yZWFjdHJvb3RdJyk7XG4gICAgICAgICAgICAgIGlmIChyb290RWxlbWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAvLyA0LiBDaGVjayBmb3Igb2xkIFJlYWN0IChwcmUtMTYpIGF0dHJpYnV0ZXNcbiAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXJlYWN0aWRdJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLy8gNS4gRmluZCBSZWFjdCAxNysgcm9vdCBjb250YWluZXJzIG9yIGZpYmVyIG5vZGVzIChtb3N0IGNvbW1vbiBtb2Rlcm4gYXBwcm9hY2gpXG4gICAgICAgICAgICAgIGNvbnN0IGFsbEVsZW1lbnRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcqJykpO1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLy8gNWEuIExvb2sgZm9yIFJlYWN0IDE3KyByb290IGNvbnRhaW5lclxuICAgICAgICAgICAgICBjb25zdCBoYXNSZWFjdFJvb3RDb250YWluZXIgPSBhbGxFbGVtZW50cy5zb21lKGVsID0+IFxuICAgICAgICAgICAgICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlbCwgJ19yZWFjdFJvb3RDb250YWluZXInKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBpZiAoaGFzUmVhY3RSb290Q29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC8vIDViLiBMb29rIGZvciBSZWFjdCAxOCsgY29udGFpbmVyIHByb3BlcnR5IHBhdHRlcm5cbiAgICAgICAgICAgICAgY29uc3QgaGFzUmVhY3RDb250YWluZXIgPSBhbGxFbGVtZW50cy5zb21lKGVsID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoZWwpLnNvbWUoa2V5ID0+IFxuICAgICAgICAgICAgICAgICAga2V5LnN0YXJ0c1dpdGgoJ19fcmVhY3RDb250YWluZXInKSB8fCBcbiAgICAgICAgICAgICAgICAgIGtleS5zdGFydHNXaXRoKCdfX3JlYWN0RmliZXInKSB8fCBcbiAgICAgICAgICAgICAgICAgIGtleS5zdGFydHNXaXRoKCdfX3JlYWN0UHJvcHMnKSB8fCBcbiAgICAgICAgICAgICAgICAgIGtleS5zdGFydHNXaXRoKCdfX3JlYWN0RXZlbnRzJykgfHxcbiAgICAgICAgICAgICAgICAgIGtleS5zdGFydHNXaXRoKCdfX3JlYWN0SW50ZXJuYWxJbnN0YW5jZScpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIGlmIChoYXNSZWFjdENvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAvLyA2LiBDaGVjayBmb3IgUmVhY3QgcHJvZmlsZXJcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiAod2luZG93IGFzIGFueSkuX19SRUFDVF9ERVZUT09MU19QUk9GSUxFUl9IT09LX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC8vIDcuIExvb2sgZm9yIFJlYWN0LXNwZWNpZmljIGNvbXBvbmVudCBuYW1lIHBhdHRlcm5zXG4gICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudE5hbWVQYXR0ZXJuID0gL15bQS1aXVtBLVphLXpdKyhcXC5bQS1aXVtBLVphLXpdKykqJC87XG4gICAgICAgICAgICAgIGNvbnN0IHJlYWN0Q29tcG9uZW50cyA9IGFsbEVsZW1lbnRzLnNvbWUoZWwgPT4ge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIGVsKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoa2V5LnN0YXJ0c1dpdGgoJ19fcmVhY3RQcm9wcyQnKSAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAoZWwgYXMgYW55KVtrZXldICYmIFxuICAgICAgICAgICAgICAgICAgICAgIChlbCBhcyBhbnkpW2tleV0uY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZiAoa2V5LnN0YXJ0c1dpdGgoJ19yZWFjdExpc3RlbmluZycpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgaWYgKHJlYWN0Q29tcG9uZW50cykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRldGVjdGluZyBSZWFjdDonLCBlKTtcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgJ1Z1ZS5qcyc6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAhIShcbiAgICAgICAgICAgICAgKHdpbmRvdyBhcyBXaW5kb3cpLlZ1ZSB8fCBcbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdi1dJykgfHxcbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW3YtY2xvYWtdJykgfHxcbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW3YtaWZdJykgfHxcbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW3YtZm9yXScpIHx8XG4gICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1t2LXNob3ddJylcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICAnQW5ndWxhcic6ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAhIShcbiAgICAgICAgICAgICAgKHdpbmRvdyBhcyBXaW5kb3cpLmFuZ3VsYXIgfHwgXG4gICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuZy1hcHBdJykgfHxcbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25nLWNvbnRyb2xsZXJdJykgfHxcbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25nLW1vZGVsXScpIHx8XG4gICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuZy1yZXBlYXRdJykgfHxcbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25nLXZpZXddJykgfHxcbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25nLWlmXScpIHx8XG4gICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuZy1zaG93XScpIHx8XG4gICAgICAgICAgICAgIC8vIEFuZ3VsYXIgMitcbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW19uZ2hvc3RdJykgfHxcbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW19uZ2NvbnRlbnRdJykgfHxcbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYXBwLXJvb3QnKSB8fFxuICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmctdmVyc2lvbl0nKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgICdqUXVlcnknOiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gISEoXG4gICAgICAgICAgICAgICh3aW5kb3cgYXMgV2luZG93KS5qUXVlcnkgfHwgXG4gICAgICAgICAgICAgICh3aW5kb3cgYXMgV2luZG93KS4kICYmICh3aW5kb3cgYXMgV2luZG93KS4kLmZuICYmICh3aW5kb3cgYXMgV2luZG93KS4kLmZuLmpxdWVyeVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgICdTdmVsdGUnOiAoKSA9PiB7XG4gICAgICAgICAgICAvLyBTdmVsdGUgY29tcG9uZW50cyBoYXZlIGNsYXNzIG5hbWVzIGxpa2UgXCJzdmVsdGUtYWJjMTIzXCJcbiAgICAgICAgICAgIGNvbnN0IGhhc1N2ZWx0ZUNsYXNzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcqJykpLnNvbWUoZWwgPT4ge1xuICAgICAgICAgICAgICBpZiAoZWwuY2xhc3NOYW1lICYmIHR5cGVvZiBlbC5jbGFzc05hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC9zdmVsdGUtW2EtejAtOV0rLy50ZXN0KGVsLmNsYXNzTmFtZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIENoZWNrIGZvciBTdmVsdGUgZGV2dG9vbHMgaG9va1xuICAgICAgICAgICAgY29uc3QgaGFzU3ZlbHRlSG9vayA9ICEhKHdpbmRvdyBhcyBXaW5kb3cpLl9fc3ZlbHRlX187XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIENoZWNrIGZvciBIVE1MIGVsZW1lbnRzIHdpdGggU3ZlbHRlLXNwZWNpZmljIGF0dHJpYnV0ZXNcbiAgICAgICAgICAgIGNvbnN0IGhhc1N2ZWx0ZUF0dHJpYnV0ZXMgPSAhIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tzdmVsdGUtZnJhZ21lbnRdJykgfHwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tzdmVsdGVraXRcXFxcOnByZWZldGNoXScpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBDaGVjayBpZiBhbnkgY3VzdG9tIGVsZW1lbnRzIChXZWIgQ29tcG9uZW50cykgYXJlIFN2ZWx0ZS1yZWxhdGVkXG4gICAgICAgICAgICBjb25zdCBoYXNTdmVsdGVFbGVtZW50cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnKicpKS5zb21lKGVsID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIGVsLnRhZ05hbWUgJiYgZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdzdmVsdGUnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gISEoaGFzU3ZlbHRlQ2xhc3MgfHwgaGFzU3ZlbHRlSG9vayB8fCBoYXNTdmVsdGVBdHRyaWJ1dGVzIHx8IGhhc1N2ZWx0ZUVsZW1lbnRzKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgICdOZXh0LmpzJzogKCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgLy8gQ2hlY2sgZm9yIE5leHQuanMgZGF0YSBzY3JpcHQgdGFnXG4gICAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzY3JpcHQjX19ORVhUX0RBVEFfXycpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC8vIENoZWNrIGZvciBOZXh0LmpzIHNwZWNpZmljIGF0dHJpYnV0ZXNcbiAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW5leHQtaHlkcmF0ZV0nKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAvLyBDaGVjayBmb3IgTmV4dC5qcyBydW50aW1lXG4gICAgICAgICAgICAgIGlmICgod2luZG93IGFzIFdpbmRvdykuX19ORVhUX0RBVEFfXykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAvLyBDaGVjayBmb3IgbmV4dCBwYWdlIENTU1xuICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dCcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZGV0ZWN0aW5nIE5leHQuanM6JywgZSk7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgICdHYXRzYnkuanMnOiAoKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAvLyBDaGVjayBmb3IgR2F0c2J5IHNwZWNpZmljIGVsZW1lbnRzXG4gICAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19fZ2F0c2J5JykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLy8gQ2hlY2sgZm9yIEdhdHNieSBwYWdlIGRhdGFcbiAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NjcmlwdFtpZCo9XCJnYXRzYnktY2h1bmtcIl0nKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAvLyBDaGVjayBmb3Igd2luZG93Ll9fR0FUU0JZXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgKHdpbmRvdyBhcyBhbnkpLl9fR0FUU0JZICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRldGVjdGluZyBHYXRzYnkuanM6JywgZSk7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICAvLyBSdW4gZGV0ZWN0aW9uc1xuICAgICAgICBjb25zdCByZXN1bHRzOiBSZWNvcmQ8c3RyaW5nLCB7IGRldGVjdGVkOiBib29sZWFuLCB2ZXJzaW9uOiBzdHJpbmcgfCBudWxsIH0+ID0ge307XG4gICAgICAgIFxuICAgICAgICBmb3IgKGNvbnN0IFtsaWJyYXJ5LCBkZXRlY3Rvcl0gb2YgT2JqZWN0LmVudHJpZXMobGlicmFyeURldGVjdG9ycykpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZGV0ZWN0ZWQgPSBkZXRlY3RvcigpO1xuICAgICAgICAgICAgbGV0IHZlcnNpb24gPSBudWxsO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBHZXQgdmVyc2lvbiBpZiBhdmFpbGFibGVcbiAgICAgICAgICAgIGlmIChkZXRlY3RlZCkge1xuICAgICAgICAgICAgICBpZiAobGlicmFyeSA9PT0gJ2pRdWVyeScgJiYgKHdpbmRvdyBhcyBXaW5kb3cpLiQgJiYgKHdpbmRvdyBhcyBXaW5kb3cpLiQuZm4pIHtcbiAgICAgICAgICAgICAgICB2ZXJzaW9uID0gKHdpbmRvdyBhcyBXaW5kb3cpLiQuZm4uanF1ZXJ5O1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxpYnJhcnkgPT09ICdWdWUuanMnICYmICh3aW5kb3cgYXMgV2luZG93KS5WdWUpIHtcbiAgICAgICAgICAgICAgICB2ZXJzaW9uID0gKHdpbmRvdyBhcyBXaW5kb3cpLlZ1ZS52ZXJzaW9uO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxpYnJhcnkgPT09ICdSZWFjdCcgJiYgKHdpbmRvdyBhcyBXaW5kb3cpLlJlYWN0KSB7XG4gICAgICAgICAgICAgICAgdmVyc2lvbiA9ICh3aW5kb3cgYXMgV2luZG93KS5SZWFjdC52ZXJzaW9uO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxpYnJhcnkgPT09ICdBbmd1bGFyJyAmJiAod2luZG93IGFzIFdpbmRvdykuYW5ndWxhcikge1xuICAgICAgICAgICAgICAgIHZlcnNpb24gPSAod2luZG93IGFzIFdpbmRvdykuYW5ndWxhci52ZXJzaW9uICYmICh3aW5kb3cgYXMgV2luZG93KS5hbmd1bGFyLnZlcnNpb24uZnVsbDtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChsaWJyYXJ5ID09PSAnU3ZlbHRlJyAmJiAod2luZG93IGFzIFdpbmRvdykuX19zdmVsdGVfXykge1xuICAgICAgICAgICAgICAgIC8vIFRyeSB0byBleHRyYWN0IHZlcnNpb24gZnJvbSBTdmVsdGUncyBpbnRlcm5hbHNcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgLy8gTG9vayBmb3IgdmVyc2lvbiBpbiB0aGUgZGV2dG9vbHMgaG9va1xuICAgICAgICAgICAgICAgICAgaWYgKCh3aW5kb3cgYXMgV2luZG93KS5fX3N2ZWx0ZV9fICYmICh3aW5kb3cgYXMgV2luZG93KS5fX3N2ZWx0ZV9fLnZlcnNpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgdmVyc2lvbiA9ICh3aW5kb3cgYXMgV2luZG93KS5fX3N2ZWx0ZV9fLnZlcnNpb247XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBTdmVsdGVLaXQgbWlnaHQgaGF2ZSBkaWZmZXJlbnQgdmVyc2lvbiBzdHJ1Y3R1cmVcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ZlbHRlS2l0RGF0YUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzY3JpcHRbZGF0YS1zdmVsdGVraXQtaHlkcmF0ZV0nKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN2ZWx0ZUtpdERhdGFFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmVyc2lvbiA9IFwiU3ZlbHRlS2l0XCI7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmVyc2lvbiA9IFwiVW5rbm93biB2ZXJzaW9uXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICB2ZXJzaW9uID0gXCJEZXRlY3RlZFwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChsaWJyYXJ5ID09PSAnTmV4dC5qcycgJiYgKHdpbmRvdyBhcyBXaW5kb3cpLl9fTkVYVF9EQVRBX18pIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgLy8gVHJ5IHRvIGdldCBOZXh0LmpzIHZlcnNpb24gZnJvbSBydW50aW1lXG4gICAgICAgICAgICAgICAgICBpZiAoKHdpbmRvdyBhcyBhbnkpLm5leHQgJiYgKHdpbmRvdyBhcyBhbnkpLm5leHQudmVyc2lvbikge1xuICAgICAgICAgICAgICAgICAgICB2ZXJzaW9uID0gKHdpbmRvdyBhcyBhbnkpLm5leHQudmVyc2lvbjtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZlcnNpb24gPSBcIkRldGVjdGVkXCI7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgdmVyc2lvbiA9IFwiRGV0ZWN0ZWRcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAobGlicmFyeSA9PT0gJ0dhdHNieS5qcycgJiYgKHdpbmRvdyBhcyBhbnkpLl9fR0FUU0JZKSB7XG4gICAgICAgICAgICAgICAgdmVyc2lvbiA9IFwiRGV0ZWN0ZWRcIjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXN1bHRzW2xpYnJhcnldID0geyBkZXRlY3RlZCwgdmVyc2lvbiB9O1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJlc3VsdHNbbGlicmFyeV0gPSB7IGRldGVjdGVkOiBmYWxzZSwgdmVyc2lvbjogbnVsbCB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICB9XG4gICAgfSlcbiAgICAudGhlbihpbmplY3Rpb25SZXN1bHRzID0+IHtcbiAgICAgIGlmICghaW5qZWN0aW9uUmVzdWx0cyB8fCBpbmplY3Rpb25SZXN1bHRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXN1bHRzQ29udGFpbmVyLmlubmVySFRNTCA9ICc8ZGl2IGNsYXNzPVwiZXJyb3ItbWVzc2FnZVwiPkZhaWxlZCB0byBpbmplY3QgZGV0ZWN0aW9uIHNjcmlwdDwvZGl2Pic7XG4gICAgICAgIHVwZGF0ZUl0ZW1TdGF0dXMoJ2phdmFzY3JpcHQtbGlicmFyaWVzJywgJ2Vycm9yJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgY29uc3QgbGlicmFyaWVzID0gaW5qZWN0aW9uUmVzdWx0c1swXS5yZXN1bHQgYXMgUmVjb3JkPHN0cmluZywgeyBkZXRlY3RlZDogYm9vbGVhbiwgdmVyc2lvbjogc3RyaW5nIHwgbnVsbCB9PjtcbiAgICAgIHJlc3VsdHNDb250YWluZXIuaW5uZXJIVE1MID0gJzxoMz5KYXZhU2NyaXB0IExpYnJhcmllczwvaDM+JztcbiAgICAgIFxuICAgICAgbGV0IGRldGVjdGVkQ291bnQgPSAwO1xuICAgICAgZm9yIChjb25zdCBbbGlicmFyeSwgaW5mb10gb2YgT2JqZWN0LmVudHJpZXMobGlicmFyaWVzKSkge1xuICAgICAgICBjb25zdCBzdGF0dXMgPSBpbmZvLmRldGVjdGVkID8gJ1ByZXNlbnQnIDogJ01pc3NpbmcnO1xuICAgICAgICBsZXQgZGV0YWlscyA9ICcnO1xuICAgICAgICBcbiAgICAgICAgaWYgKGluZm8uZGV0ZWN0ZWQpIHtcbiAgICAgICAgICBkZXRlY3RlZENvdW50Kys7XG4gICAgICAgICAgZGV0YWlscyA9IGluZm8udmVyc2lvbiA/IGBWZXJzaW9uOiAke2luZm8udmVyc2lvbn1gIDogJ1ZlcnNpb246IHVua25vd24nO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBkaXNwbGF5UmVzdWx0KFxuICAgICAgICAgIHJlc3VsdHNDb250YWluZXIsIFxuICAgICAgICAgIGxpYnJhcnksIFxuICAgICAgICAgIHN0YXR1cywgXG4gICAgICAgICAgZGV0YWlscywgXG4gICAgICAgICAgYCR7bGlicmFyeX0gSmF2YVNjcmlwdCBmcmFtZXdvcmsvbGlicmFyeWBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLy8gSWYgbm8gbGlicmFyaWVzIHdlcmUgZGV0ZWN0ZWQsIGFkZCBhIG1lc3NhZ2VcbiAgICAgIGlmIChkZXRlY3RlZENvdW50ID09PSAwKSB7XG4gICAgICAgIGNvbnN0IG5vTGlicmFyaWVzTXNnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5vTGlicmFyaWVzTXNnLmNsYXNzTmFtZSA9ICdpbmZvLW1lc3NhZ2UnO1xuICAgICAgICBub0xpYnJhcmllc01zZy50ZXh0Q29udGVudCA9ICdObyBjb21tb24gSmF2YVNjcmlwdCBsaWJyYXJpZXMgZGV0ZWN0ZWQuIFRoZSBwYWdlIG1heSBiZSB1c2luZyB2YW5pbGxhIEphdmFTY3JpcHQgb3IgbGVzcyBjb21tb24gbGlicmFyaWVzLic7XG4gICAgICAgIHJlc3VsdHNDb250YWluZXIuYXBwZW5kQ2hpbGQobm9MaWJyYXJpZXNNc2cpO1xuICAgICAgfVxuICAgICAgXG4gICAgICAvLyBTZXQgc3RhdHVzOiB3YXJuaW5nIGlmIG5vIGxpYnJhcmllcyBkZXRlY3RlZCwgc3VjY2VzcyBvdGhlcndpc2VcbiAgICAgIHVwZGF0ZUl0ZW1TdGF0dXMoJ2phdmFzY3JpcHQtbGlicmFyaWVzJywgZGV0ZWN0ZWRDb3VudCA+IDAgPyAnc3VjY2VzcycgOiAnd2FybmluZycpO1xuICAgIH0pXG4gICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0xpYnJhcnkgZGV0ZWN0aW9uIGVycm9yOicsIGVycm9yKTtcbiAgICAgIHJlc3VsdHNDb250YWluZXIuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJlcnJvci1tZXNzYWdlXCI+RXJyb3IgZGV0ZWN0aW5nIGxpYnJhcmllczogJHtlcnJvci5tZXNzYWdlfTwvZGl2PmA7XG4gICAgICB1cGRhdGVJdGVtU3RhdHVzKCdqYXZhc2NyaXB0LWxpYnJhcmllcycsICdlcnJvcicpO1xuICAgIH0pO1xuICB9KTtcbiAgXG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBkZXRlY3RDb250ZW50TWFuYWdlbWVudFN5c3RlbSgpIHtcbiAgY29uc29sZS5sb2coJ0RldGVjdGluZyBjb250ZW50IG1hbmFnZW1lbnQgc3lzdGVtLi4uJyk7XG4gIC8vIEdldCB0aGUgcmVzdWx0cyBjb250YWluZXIgZm9yIHRoaXMgaXRlbVxuICBjb25zdCByZXN1bHRzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdHMtY21zJyk7XG4gIGlmIChyZXN1bHRzQ29udGFpbmVyKSB7XG4gICAgcmVzdWx0c0NvbnRhaW5lci5pbm5lckhUTUwgPSAnPHA+RGV0ZWN0aW5nIENNUy4uLiAoTm90IGltcGxlbWVudGVkIHlldCk8L3A+JztcbiAgICAvLyBTZXQgdG8gZGVmYXVsdCBzdGF0ZSBzaW5jZSBub3QgaW1wbGVtZW50ZWRcbiAgICB1cGRhdGVJdGVtU3RhdHVzKCdjbXMnLCAnc3VjY2VzcycpO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBpZGVudGlmeUFuYWx5dGljc1Rvb2xzKCkge1xuICBjb25zb2xlLmxvZygnSWRlbnRpZnlpbmcgYW5hbHl0aWNzIHRvb2xzLi4uJyk7XG4gIC8vIEdldCB0aGUgcmVzdWx0cyBjb250YWluZXIgZm9yIHRoaXMgaXRlbVxuICBjb25zdCByZXN1bHRzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdHMtYW5hbHl0aWNzJyk7XG4gIGlmIChyZXN1bHRzQ29udGFpbmVyKSB7XG4gICAgcmVzdWx0c0NvbnRhaW5lci5pbm5lckhUTUwgPSAnPHA+SWRlbnRpZnlpbmcgYW5hbHl0aWNzIHRvb2xzLi4uIChOb3QgaW1wbGVtZW50ZWQgeWV0KTwvcD4nO1xuICAgIC8vIFNldCB0byBkZWZhdWx0IHN0YXRlIHNpbmNlIG5vdCBpbXBsZW1lbnRlZFxuICAgIHVwZGF0ZUl0ZW1TdGF0dXMoJ2FuYWx5dGljcycsICdzdWNjZXNzJyk7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8vIFRvZ2dsZSB2aXNpYmlsaXR5IG9mIHJlc3VsdHMgY29udGFpbmVyXG5mdW5jdGlvbiB0b2dnbGVSZXN1bHRzVmlzaWJpbGl0eShjb250YWluZXI6IEhUTUxFbGVtZW50KSB7XG4gIGlmIChjb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCd2aXNpYmxlJykpIHtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgIGNvbnRhaW5lci5zdHlsZS5tYXhIZWlnaHQgPSAnMHB4JztcbiAgfSBlbHNlIHtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICAgIGNvbnRhaW5lci5zdHlsZS5tYXhIZWlnaHQgPSBjb250YWluZXIuc2Nyb2xsSGVpZ2h0ICsgJ3B4JztcbiAgICBcbiAgICAvLyBVcGRhdGUgbWF4IGhlaWdodCBvbiBjb250ZW50IGNoYW5nZXNcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+IHtcbiAgICAgIGlmIChjb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCd2aXNpYmxlJykpIHtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLm1heEhlaWdodCA9IGNvbnRhaW5lci5zY3JvbGxIZWlnaHQgKyAncHgnO1xuICAgICAgfVxuICAgIH0pO1xuICAgIFxuICAgIG9ic2VydmVyLm9ic2VydmUoY29udGFpbmVyLCB7IFxuICAgICAgY2hpbGRMaXN0OiB0cnVlLCBcbiAgICAgIHN1YnRyZWU6IHRydWUsXG4gICAgICBjaGFyYWN0ZXJEYXRhOiB0cnVlXG4gICAgfSk7XG4gICAgXG4gICAgLy8gRGlzY29ubmVjdCBhZnRlciBhIHNob3J0IHRpbWUgdG8gYXZvaWQgbWVtb3J5IGxlYWtzXG4gICAgc2V0VGltZW91dCgoKSA9PiBvYnNlcnZlci5kaXNjb25uZWN0KCksIDIwMDApO1xuICB9XG59XG5cbi8vIEhlbHBlciBmdW5jdGlvbiB0byBnZXQgaGVhZGVyIHZhbHVlIChjYXNlLWluc2Vuc2l0aXZlKVxuZnVuY3Rpb24gZ2V0SGVhZGVyVmFsdWUoaGVhZGVyczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiwgaGVhZGVyTmFtZTogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XG4gIGNvbnN0IGhlYWRlcktleSA9IE9iamVjdC5rZXlzKGhlYWRlcnMpLmZpbmQoa2V5ID0+IFxuICAgIGtleS50b0xvd2VyQ2FzZSgpID09PSBoZWFkZXJOYW1lLnRvTG93ZXJDYXNlKClcbiAgKTtcbiAgXG4gIHJldHVybiBoZWFkZXJLZXkgPyBoZWFkZXJzW2hlYWRlcktleV0gOiBudWxsO1xufVxuXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gZGlzcGxheSByZXN1bHRzXG5mdW5jdGlvbiBkaXNwbGF5UmVzdWx0KFxuICBjb250YWluZXI6IEhUTUxFbGVtZW50LCBcbiAgaGVhZGVyTmFtZTogc3RyaW5nLCBcbiAgc3RhdHVzOiBzdHJpbmcsIFxuICBkZXRhaWxzOiBzdHJpbmcgPSAnJywgXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmcgPSAnJ1xuKSB7XG4gIGNvbnN0IHJlc3VsdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcmVzdWx0SXRlbS5jbGFzc05hbWUgPSBgcmVzdWx0LWl0ZW0gJHtzdGF0dXMudG9Mb3dlckNhc2UoKX1gO1xuICBcbiAgY29uc3Qgc3RhdHVzQ2xhc3MgPSBzdGF0dXMgPT09ICdQcmVzZW50JyA/ICdzdWNjZXNzJyA6IFxuICAgICAgICAgICAgICAgICAgICAgKHN0YXR1cyA9PT0gJ0Vycm9yJyA/ICdlcnJvcicgOiAnd2FybmluZycpO1xuICBcbiAgcmVzdWx0SXRlbS5pbm5lckhUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz1cImhlYWRlci1uYW1lXCI+JHtoZWFkZXJOYW1lfTwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJzdGF0dXMgJHtzdGF0dXNDbGFzc31cIj4ke3N0YXR1c308L2Rpdj5cbiAgICAke2RldGFpbHMgPyBgPGRpdiBjbGFzcz1cImRldGFpbHNcIj4ke2RldGFpbHN9PC9kaXY+YCA6ICcnfVxuICAgICR7ZGVzY3JpcHRpb24gPyBgPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uXCI+JHtkZXNjcmlwdGlvbn08L2Rpdj5gIDogJyd9XG4gIGA7XG4gIFxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQocmVzdWx0SXRlbSk7XG59XG5cbi8vIEhlbHBlciBmdW5jdGlvbiB0byB1cGRhdGUgdGhlIGNoZWNrbGlzdCBpdGVtIHN0YXR1c1xuZnVuY3Rpb24gdXBkYXRlSXRlbVN0YXR1cyhpdGVtSWQ6IHN0cmluZywgc3RhdHVzOiAnc3VjY2VzcycgfCAnd2FybmluZycgfCAnZXJyb3InKSB7XG4gIGNvbnN0IGNoZWNrbGlzdEl0ZW1QYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcmVzdWx0cy0ke2l0ZW1JZH1gKTtcbiAgaWYgKCFjaGVja2xpc3RJdGVtUGFyZW50KSByZXR1cm47XG4gIFxuICBjb25zdCBjaGVja2xpc3RJdGVtID0gY2hlY2tsaXN0SXRlbVBhcmVudC5wYXJlbnRFbGVtZW50O1xuICBpZiAoIWNoZWNrbGlzdEl0ZW0pIHJldHVybjtcbiAgXG4gIGNvbnN0IGNoZWNrbWFyayA9IGNoZWNrbGlzdEl0ZW0ucXVlcnlTZWxlY3RvcignLmNoZWNrbWFyaycpO1xuICBpZiAoIWNoZWNrbWFyaykgcmV0dXJuO1xuICBcbiAgLy8gUmVzZXQgZXhpc3RpbmcgY2xhc3Nlc1xuICBjaGVja21hcmsuY2xhc3NMaXN0LnJlbW92ZSgnc3VjY2VzcycsICd3YXJuaW5nJywgJ2Vycm9yJyk7XG4gIGNoZWNrbWFyay5jbGFzc0xpc3QuYWRkKHN0YXR1cyk7XG4gIFxuICAvLyBVcGRhdGUgaWNvbiBiYXNlZCBvbiBzdGF0dXNcbiAgaWYgKHN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgY2hlY2ttYXJrLmlubmVySFRNTCA9ICfinJMnO1xuICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gJ3dhcm5pbmcnKSB7XG4gICAgY2hlY2ttYXJrLmlubmVySFRNTCA9ICfimqAnO1xuICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gJ2Vycm9yJykge1xuICAgIGNoZWNrbWFyay5pbm5lckhUTUwgPSAn4pyXJztcbiAgfVxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBjb25zdCBhcHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJyk7XG4gIGlmIChhcHApIHtcbiAgICAvLyBDcmVhdGUgaGVhZGVyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSAnV2hvIERpcz8nO1xuICAgIGFwcC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIFxuICAgIC8vIENyZWF0ZSBjaGVja2xpc3Qgd2l0aCBjb3JyZXNwb25kaW5nIGZ1bmN0aW9uc1xuICAgIGNvbnN0IGNoZWNrbGlzdEl0ZW1zV2l0aEZ1bmN0aW9ucyA9IFtcbiAgICAgIHsgXG4gICAgICAgIGlkOiAnc2l0ZS10ZWNobm9sb2d5JyxcbiAgICAgICAgbmFtZTogJ1NpdGUgdGVjaG5vbG9neSBzY2FuJywgXG4gICAgICAgIGZ1bmN0aW9uOiBzY2FuU2l0ZVRlY2hub2xvZ3kgXG4gICAgICB9LFxuICAgICAgeyBcbiAgICAgICAgaWQ6ICdzZWN1cml0eS1oZWFkZXJzJyxcbiAgICAgICAgbmFtZTogJ1NlY3VyaXR5IGhlYWRlcnMgY2hlY2snLCBcbiAgICAgICAgZnVuY3Rpb246IGNoZWNrU2VjdXJpdHlIZWFkZXJzIFxuICAgICAgfSxcbiAgICAgIHsgXG4gICAgICAgIGlkOiAnamF2YXNjcmlwdC1saWJyYXJpZXMnLFxuICAgICAgICBuYW1lOiAnSmF2YVNjcmlwdCBsaWJyYXJ5IGRldGVjdGlvbicsIFxuICAgICAgICBmdW5jdGlvbjogZGV0ZWN0SmF2YVNjcmlwdExpYnJhcmllcyBcbiAgICAgIH0sXG4gICAgICB7IFxuICAgICAgICBpZDogJ2NtcycsXG4gICAgICAgIG5hbWU6ICdDb250ZW50IG1hbmFnZW1lbnQgc3lzdGVtIGRldGVjdGlvbicsIFxuICAgICAgICBmdW5jdGlvbjogZGV0ZWN0Q29udGVudE1hbmFnZW1lbnRTeXN0ZW0gXG4gICAgICB9LFxuICAgICAgeyBcbiAgICAgICAgaWQ6ICdhbmFseXRpY3MnLFxuICAgICAgICBuYW1lOiAnQW5hbHl0aWNzIHRvb2xzIGlkZW50aWZpY2F0aW9uJywgXG4gICAgICAgIGZ1bmN0aW9uOiBpZGVudGlmeUFuYWx5dGljc1Rvb2xzIFxuICAgICAgfVxuICAgIF07XG4gICAgXG4gICAgY29uc3QgY2hlY2tsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBjaGVja2xpc3QuY2xhc3NOYW1lID0gJ2NoZWNrbGlzdCc7XG4gICAgXG4gICAgY2hlY2tsaXN0SXRlbXNXaXRoRnVuY3Rpb25zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAvLyBDcmVhdGUgbGlzdCBpdGVtIGNvbnRhaW5lclxuICAgICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgbGlzdEl0ZW0uY2xhc3NOYW1lID0gJ2NoZWNrbGlzdC1pdGVtLWNvbnRhaW5lcic7XG4gICAgICBcbiAgICAgIC8vIENyZWF0ZSBoZWFkZXIgd2l0aCBjaGVja21hcmsgYW5kIHRpdGxlXG4gICAgICBjb25zdCBpdGVtSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBpdGVtSGVhZGVyLmNsYXNzTmFtZSA9ICdjaGVja2xpc3QtaGVhZGVyJztcbiAgICAgIFxuICAgICAgY29uc3QgY2hlY2ttYXJrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgY2hlY2ttYXJrLmNsYXNzTmFtZSA9ICdjaGVja21hcmsgc3VjY2Vzcyc7XG4gICAgICBjaGVja21hcmsuaW5uZXJIVE1MID0gJ+Kckyc7XG4gICAgICBcbiAgICAgIGNvbnN0IGl0ZW1UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgaXRlbVRleHQuY2xhc3NOYW1lID0gJ2NoZWNrbGlzdC1pdGVtJztcbiAgICAgIGl0ZW1UZXh0LnRleHRDb250ZW50ID0gaXRlbS5uYW1lO1xuICAgICAgXG4gICAgICBjb25zdCBleHBhbmRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgZXhwYW5kSWNvbi5jbGFzc05hbWUgPSAnZXhwYW5kLWljb24nO1xuICAgICAgZXhwYW5kSWNvbi5pbm5lckhUTUwgPSAn4pa8JztcbiAgICAgIFxuICAgICAgaXRlbUhlYWRlci5hcHBlbmRDaGlsZChjaGVja21hcmspO1xuICAgICAgaXRlbUhlYWRlci5hcHBlbmRDaGlsZChpdGVtVGV4dCk7XG4gICAgICBpdGVtSGVhZGVyLmFwcGVuZENoaWxkKGV4cGFuZEljb24pO1xuICAgICAgXG4gICAgICAvLyBDcmVhdGUgcmVzdWx0cyBjb250YWluZXIgKGluaXRpYWxseSBoaWRkZW4pXG4gICAgICBjb25zdCByZXN1bHRzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICByZXN1bHRzQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdyZXN1bHRzLWNvbnRhaW5lcic7XG4gICAgICByZXN1bHRzQ29udGFpbmVyLmlkID0gYHJlc3VsdHMtJHtpdGVtLmlkfWA7XG4gICAgICByZXN1bHRzQ29udGFpbmVyLnN0eWxlLm1heEhlaWdodCA9ICcwcHgnO1xuICAgICAgcmVzdWx0c0NvbnRhaW5lci5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgICAgXG4gICAgICAvLyBBZGQgY2xpY2sgZXZlbnQgdG8gaGVhZGVyIHRvIHRvZ2dsZSB2aXNpYmlsaXR5XG4gICAgICBpdGVtSGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAvLyBUb2dnbGUgYWN0aXZlIHN0YXRlIGZvciB2aXN1YWwgZmVlZGJhY2tcbiAgICAgICAgbGlzdEl0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgICAgIC8vIFRvZ2dsZSB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgcmVzdWx0c1xuICAgICAgICB0b2dnbGVSZXN1bHRzVmlzaWJpbGl0eShyZXN1bHRzQ29udGFpbmVyKTtcbiAgICAgIH0pO1xuICAgICAgXG4gICAgICAvLyBBc3NlbWJsZSB0aGUgbGlzdCBpdGVtXG4gICAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChpdGVtSGVhZGVyKTtcbiAgICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKHJlc3VsdHNDb250YWluZXIpO1xuICAgICAgY2hlY2tsaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgICB9KTtcbiAgICBcbiAgICBhcHAuYXBwZW5kQ2hpbGQoY2hlY2tsaXN0KTtcbiAgICBcbiAgICAvLyBSdW4gYWxsIHNjYW4gZnVuY3Rpb25zIGF1dG9tYXRpY2FsbHkgd2hlbiBwb3B1cCBsb2Fkc1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY2hlY2tsaXN0SXRlbXNXaXRoRnVuY3Rpb25zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGl0ZW0uZnVuY3Rpb24oKTtcbiAgICAgIH0pO1xuICAgIH0sIDEwMCk7XG4gIH1cbn0pOyAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=