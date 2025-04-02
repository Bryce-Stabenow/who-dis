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
  color: #4CAF50;
  font-weight: bold;
  font-size: 16px;
  flex-shrink: 0;
  height: 24px;
  width: 24px;
  border-radius: 50%;
  background-color: rgba(76, 175, 80, 0.1);
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
} `, "",{"version":3,"sources":["webpack://./src/popup.css"],"names":[],"mappings":"AAAA,iBAAiB;AACjB;EACE,wIAAwI;EACxI,SAAS;EACT,aAAa;EACb,YAAY;EACZ,iBAAiB;EACjB,WAAW;EACX,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,cAAc;EACd,kBAAkB;EAClB,eAAe;EACf,gBAAgB;EAChB,sBAAsB;EACtB,uCAAuC;AACzC;;AAEA;EACE,cAAc;EACd,cAAc;EACd,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,UAAU;EACV,SAAS;AACX;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,yBAAyB;EACzB,gBAAgB;EAChB,yCAAyC;EACzC,yBAAyB;EACzB,kCAAkC;AACpC;;AAEA;EACE,0CAA0C;EAC1C,qCAAqC;AACvC;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,kBAAkB;EAClB,eAAe;EACf,yBAAyB;EACzB,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,gDAAgD;AAClD;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,cAAc;EACd,iBAAiB;EACjB,eAAe;EACf,cAAc;EACd,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,wCAAwC;AAC1C;;AAEA;EACE,OAAO;EACP,eAAe;EACf,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,iBAAiB;EACjB,+BAA+B;EAC/B,eAAe;EACf,WAAW;EACX,kCAAkC;EAClC,YAAY;EACZ,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;EACzB,yCAAyC;EACzC,cAAc;AAChB;;AAEA,8BAA8B;AAC9B;EACE,sCAAsC;EACtC,UAAU;EACV,sBAAsB;EACtB,gBAAgB;EAChB,uCAAuC;AACzC;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,kBAAkB;EAClB,2BAA2B;EAC3B,sCAAsC;AACxC;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,0BAA0B;EAC1B,yBAAyB;AAC3B;;AAEA;EACE,0BAA0B;EAC1B,yBAAyB;AAC3B;;AAEA;EACE,0BAA0B;EAC1B,yBAAyB;AAC3B;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,mBAAmB;EACnB,qBAAqB;EACrB,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,eAAe;EACf,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;EACX,4BAA4B;EAC5B,gBAAgB;EAChB,kBAAkB;EAClB,sBAAsB;AACxB;;AAEA;EACE,eAAe;EACf,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,gBAAgB;EAChB,aAAa;EACb,yBAAyB;EACzB,kBAAkB;EAClB,mBAAmB;EACnB,wCAAwC;AAC1C","sourcesContent":["/* Popup Styles */\nbody {\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  margin: 0;\n  padding: 20px;\n  width: 480px;\n  min-height: 400px;\n  color: #333;\n  background-color: #f9fafc;\n}\n\n#app {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  max-width: 100%;\n}\n\nh1 {\n  margin: 0 0 15px 0;\n  color: #2c3e50;\n  text-align: center;\n  font-size: 28px;\n  font-weight: 600;\n  letter-spacing: -0.5px;\n  text-shadow: 0 1px 2px rgba(0,0,0,0.05);\n}\n\nh3 {\n  margin: 10px 0;\n  color: #2c3e50;\n  font-size: 16px;\n  font-weight: 600;\n}\n\n.checklist {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.checklist-item-container {\n  margin-bottom: 12px;\n  border-radius: 8px;\n  background-color: #ffffff;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  transition: all 0.3s ease;\n  border: 1px solid rgba(0,0,0,0.05);\n}\n\n.checklist-item-container.active {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);\n  border-color: rgba(52, 152, 219, 0.3);\n}\n\n.checklist-header {\n  display: flex;\n  align-items: center;\n  padding: 14px 16px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  user-select: none;\n  position: relative;\n}\n\n.checklist-header:hover {\n  background-color: #f5f9ff;\n}\n\n.checklist-item-container.active .checklist-header {\n  background-color: #ebf5ff;\n  border-bottom: 1px solid rgba(52, 152, 219, 0.2);\n}\n\n.checkmark {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 12px;\n  color: #4CAF50;\n  font-weight: bold;\n  font-size: 16px;\n  flex-shrink: 0;\n  height: 24px;\n  width: 24px;\n  border-radius: 50%;\n  background-color: rgba(76, 175, 80, 0.1);\n}\n\n.checklist-item {\n  flex: 1;\n  font-size: 15px;\n  font-weight: 500;\n  color: #444;\n}\n\n.expand-icon {\n  margin-left: 10px;\n  transition: transform 0.3s ease;\n  font-size: 10px;\n  color: #666;\n  background-color: rgba(0,0,0,0.05);\n  height: 20px;\n  width: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n}\n\n.checklist-item-container.active .expand-icon {\n  transform: rotate(180deg);\n  background-color: rgba(52, 152, 219, 0.2);\n  color: #3498db;\n}\n\n/* Results Container Styling */\n.results-container {\n  border-top: 1px solid rgba(0,0,0,0.05);\n  padding: 0;\n  background-color: #fff;\n  overflow: hidden;\n  transition: max-height 0.3s ease-in-out;\n}\n\n.results-container.visible {\n  padding: 16px;\n}\n\n.result-item {\n  margin-bottom: 14px;\n  padding: 12px;\n  border-radius: 6px;\n  border-left: 4px solid #ccc;\n  box-shadow: 0 1px 3px rgba(0,0,0,0.05);\n}\n\n.result-item:last-child {\n  margin-bottom: 0;\n}\n\n.result-item.present {\n  border-left-color: #4CAF50;\n  background-color: #f1f8e9;\n}\n\n.result-item.missing {\n  border-left-color: #FF9800;\n  background-color: #fff8e1;\n}\n\n.result-item.error {\n  border-left-color: #F44336;\n  background-color: #ffebee;\n}\n\n.header-name {\n  font-weight: 600;\n  margin-bottom: 6px;\n  color: #2c3e50;\n  font-size: 14px;\n}\n\n.status {\n  font-size: 12px;\n  padding: 3px 8px;\n  border-radius: 12px;\n  display: inline-block;\n  margin-bottom: 6px;\n  font-weight: 500;\n}\n\n.status.success {\n  background-color: #4CAF50;\n  color: white;\n}\n\n.status.warning {\n  background-color: #FF9800;\n  color: white;\n}\n\n.status.error {\n  background-color: #F44336;\n  color: white;\n}\n\n.details {\n  font-size: 13px;\n  word-break: break-all;\n  margin-bottom: 6px;\n  color: #555;\n  background: rgba(0,0,0,0.02);\n  padding: 6px 8px;\n  border-radius: 4px;\n  font-family: monospace;\n}\n\n.description {\n  font-size: 12px;\n  color: #777;\n  font-style: italic;\n}\n\n.error-message {\n  color: #F44336;\n  font-weight: 500;\n  padding: 12px;\n  background-color: #ffebee;\n  border-radius: 6px;\n  margin-bottom: 10px;\n  border: 1px solid rgba(244, 67, 54, 0.2);\n} "],"sourceRoot":""}]);
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
        toggleResultsVisibility(resultsContainer);
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
    toggleResultsVisibility(resultsContainer);
    // Get the current active tab
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
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
        chrome.runtime.sendMessage({ action: 'fetchHeaders', url: url }, (response) => {
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
                }
                else {
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxPQUFPLHVGQUF1RixNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFL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QUM7WUFDakQsZ0JBQWdCLENBQUMsRUFBRSxHQUFHLFdBQVcsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzNDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3pDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBRTNDLDRCQUE0QjtZQUM1QixVQUFVLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtnQkFDeEMsMENBQTBDO2dCQUMxQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDcEMsa0NBQWtDO2dCQUNsQyxJQUFJLGdCQUFnQixDQUFDLFNBQVMsS0FBSyxFQUFFLEVBQUUsQ0FBQztvQkFDdEMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNsQixDQUFDO3FCQUFNLENBQUM7b0JBQ04sdUJBQXVCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQkFDNUMsQ0FBQztZQUNILENBQUMsQ0FBQyxDQUFDO1lBRUgseUJBQXlCO1lBQ3pCLFFBQVEsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDakMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ3ZDLFNBQVMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQUM7UUFFSCxHQUFHLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzdCLENBQUM7QUFDSCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3doby1kaXMtc2l0ZS1zY2FubmVyLy4vc3JjL3BvcHVwLmNzcyIsIndlYnBhY2s6Ly93aG8tZGlzLXNpdGUtc2Nhbm5lci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2hvLWRpcy1zaXRlLXNjYW5uZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93aG8tZGlzLXNpdGUtc2Nhbm5lci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93aG8tZGlzLXNpdGUtc2Nhbm5lci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2hvLWRpcy1zaXRlLXNjYW5uZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2hvLWRpcy1zaXRlLXNjYW5uZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2hvLWRpcy1zaXRlLXNjYW5uZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93aG8tZGlzLXNpdGUtc2Nhbm5lci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3doby1kaXMtc2l0ZS1zY2FubmVyLy4vc3JjL3BvcHVwLmNzcz81OWY5Iiwid2VicGFjazovL3doby1kaXMtc2l0ZS1zY2FubmVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3doby1kaXMtc2l0ZS1zY2FubmVyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3doby1kaXMtc2l0ZS1zY2FubmVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93aG8tZGlzLXNpdGUtc2Nhbm5lci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3doby1kaXMtc2l0ZS1zY2FubmVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2hvLWRpcy1zaXRlLXNjYW5uZXIvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3doby1kaXMtc2l0ZS1zY2FubmVyLy4vc3JjL3BvcHVwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBQb3B1cCBTdHlsZXMgKi9cbmJvZHkge1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHdpZHRoOiA0ODBweDtcbiAgbWluLWhlaWdodDogNDAwcHg7XG4gIGNvbG9yOiAjMzMzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmYWZjO1xufVxuXG4jYXBwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyMHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbmgxIHtcbiAgbWFyZ2luOiAwIDAgMTVweCAwO1xuICBjb2xvcjogIzJjM2U1MDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XG4gIHRleHQtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLDAsMCwwLjA1KTtcbn1cblxuaDMge1xuICBtYXJnaW46IDEwcHggMDtcbiAgY29sb3I6ICMyYzNlNTA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmNoZWNrbGlzdCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuLmNoZWNrbGlzdC1pdGVtLWNvbnRhaW5lciB7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4wNSk7XG59XG5cbi5jaGVja2xpc3QtaXRlbS1jb250YWluZXIuYWN0aXZlIHtcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBib3JkZXItY29sb3I6IHJnYmEoNTIsIDE1MiwgMjE5LCAwLjMpO1xufVxuXG4uY2hlY2tsaXN0LWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE0cHggMTZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY2hlY2tsaXN0LWhlYWRlcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY5ZmY7XG59XG5cbi5jaGVja2xpc3QtaXRlbS1jb250YWluZXIuYWN0aXZlIC5jaGVja2xpc3QtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViZjVmZjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoNTIsIDE1MiwgMjE5LCAwLjIpO1xufVxuXG4uY2hlY2ttYXJrIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbiAgY29sb3I6ICM0Q0FGNTA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiAyNHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzYsIDE3NSwgODAsIDAuMSk7XG59XG5cbi5jaGVja2xpc3QtaXRlbSB7XG4gIGZsZXg6IDE7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICM0NDQ7XG59XG5cbi5leHBhbmQtaWNvbiB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiAjNjY2O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMDUpO1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uY2hlY2tsaXN0LWl0ZW0tY29udGFpbmVyLmFjdGl2ZSAuZXhwYW5kLWljb24ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUyLCAxNTIsIDIxOSwgMC4yKTtcbiAgY29sb3I6ICMzNDk4ZGI7XG59XG5cbi8qIFJlc3VsdHMgQ29udGFpbmVyIFN0eWxpbmcgKi9cbi5yZXN1bHRzLWNvbnRhaW5lciB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMDUpO1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbi5yZXN1bHRzLWNvbnRhaW5lci52aXNpYmxlIHtcbiAgcGFkZGluZzogMTZweDtcbn1cblxuLnJlc3VsdC1pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcbiAgcGFkZGluZzogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkICNjY2M7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsMCwwLDAuMDUpO1xufVxuXG4ucmVzdWx0LWl0ZW06bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5yZXN1bHQtaXRlbS5wcmVzZW50IHtcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICM0Q0FGNTA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWY4ZTk7XG59XG5cbi5yZXN1bHQtaXRlbS5taXNzaW5nIHtcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICNGRjk4MDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY4ZTE7XG59XG5cbi5yZXN1bHQtaXRlbS5lcnJvciB7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjRjQ0MzM2O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYmVlO1xufVxuXG4uaGVhZGVyLW5hbWUge1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gIGNvbG9yOiAjMmMzZTUwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5zdGF0dXMge1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmc6IDNweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uc3RhdHVzLnN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5zdGF0dXMud2FybmluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjk4MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnN0YXR1cy5lcnJvciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNDQzMzY7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmRldGFpbHMge1xuICBmb250LXNpemU6IDEzcHg7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICBjb2xvcjogIzU1NTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjAyKTtcbiAgcGFkZGluZzogNnB4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNzc3O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5lcnJvci1tZXNzYWdlIHtcbiAgY29sb3I6ICNGNDQzMzY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmViZWU7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNDQsIDY3LCA1NCwgMC4yKTtcbn0gYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcG9wdXAuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGlCQUFpQjtBQUNqQjtFQUNFLHdJQUF3STtFQUN4SSxTQUFTO0VBQ1QsYUFBYTtFQUNiLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsV0FBVztFQUNYLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0Qix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQix5Q0FBeUM7RUFDekMseUJBQXlCO0VBQ3pCLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLDBDQUEwQztFQUMxQyxxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZ0RBQWdEO0FBQ2xEOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGNBQWM7RUFDZCxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQix3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsK0JBQStCO0VBQy9CLGVBQWU7RUFDZixXQUFXO0VBQ1gsa0NBQWtDO0VBQ2xDLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHlDQUF5QztFQUN6QyxjQUFjO0FBQ2hCOztBQUVBLDhCQUE4QjtBQUM5QjtFQUNFLHNDQUFzQztFQUN0QyxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0Isc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLDRCQUE0QjtFQUM1QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsd0NBQXdDO0FBQzFDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIFBvcHVwIFN0eWxlcyAqL1xcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICB3aWR0aDogNDgwcHg7XFxuICBtaW4taGVpZ2h0OiA0MDBweDtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmFmYztcXG59XFxuXFxuI2FwcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuaDEge1xcbiAgbWFyZ2luOiAwIDAgMTVweCAwO1xcbiAgY29sb3I6ICMyYzNlNTA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcXG4gIHRleHQtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLDAsMCwwLjA1KTtcXG59XFxuXFxuaDMge1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxuICBjb2xvcjogIzJjM2U1MDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5jaGVja2xpc3Qge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5jaGVja2xpc3QtaXRlbS1jb250YWluZXIge1xcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjA1KTtcXG59XFxuXFxuLmNoZWNrbGlzdC1pdGVtLWNvbnRhaW5lci5hY3RpdmUge1xcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDUyLCAxNTIsIDIxOSwgMC4zKTtcXG59XFxuXFxuLmNoZWNrbGlzdC1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxNHB4IDE2cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5jaGVja2xpc3QtaGVhZGVyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY5ZmY7XFxufVxcblxcbi5jaGVja2xpc3QtaXRlbS1jb250YWluZXIuYWN0aXZlIC5jaGVja2xpc3QtaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmY1ZmY7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSg1MiwgMTUyLCAyMTksIDAuMik7XFxufVxcblxcbi5jaGVja21hcmsge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1yaWdodDogMTJweDtcXG4gIGNvbG9yOiAjNENBRjUwO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmbGV4LXNocmluazogMDtcXG4gIGhlaWdodDogMjRweDtcXG4gIHdpZHRoOiAyNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NiwgMTc1LCA4MCwgMC4xKTtcXG59XFxuXFxuLmNoZWNrbGlzdC1pdGVtIHtcXG4gIGZsZXg6IDE7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgY29sb3I6ICM0NDQ7XFxufVxcblxcbi5leHBhbmQtaWNvbiB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XFxuICBmb250LXNpemU6IDEwcHg7XFxuICBjb2xvcjogIzY2NjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4wNSk7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5jaGVja2xpc3QtaXRlbS1jb250YWluZXIuYWN0aXZlIC5leHBhbmQtaWNvbiB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1MiwgMTUyLCAyMTksIDAuMik7XFxuICBjb2xvcjogIzM0OThkYjtcXG59XFxuXFxuLyogUmVzdWx0cyBDb250YWluZXIgU3R5bGluZyAqL1xcbi5yZXN1bHRzLWNvbnRhaW5lciB7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjA1KTtcXG4gIHBhZGRpbmc6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnJlc3VsdHMtY29udGFpbmVyLnZpc2libGUge1xcbiAgcGFkZGluZzogMTZweDtcXG59XFxuXFxuLnJlc3VsdC1pdGVtIHtcXG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjY2NjO1xcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwwLDAsMC4wNSk7XFxufVxcblxcbi5yZXN1bHQtaXRlbTpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblxcbi5yZXN1bHQtaXRlbS5wcmVzZW50IHtcXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjNENBRjUwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjhlOTtcXG59XFxuXFxuLnJlc3VsdC1pdGVtLm1pc3Npbmcge1xcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICNGRjk4MDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOGUxO1xcbn1cXG5cXG4ucmVzdWx0LWl0ZW0uZXJyb3Ige1xcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICNGNDQzMzY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYmVlO1xcbn1cXG5cXG4uaGVhZGVyLW5hbWUge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIG1hcmdpbi1ib3R0b206IDZweDtcXG4gIGNvbG9yOiAjMmMzZTUwO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4uc3RhdHVzIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIHBhZGRpbmc6IDNweCA4cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLnN0YXR1cy5zdWNjZXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5zdGF0dXMud2FybmluZyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY5ODAwO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc3RhdHVzLmVycm9yIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNDQzMzY7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5kZXRhaWxzIHtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG4gIG1hcmdpbi1ib3R0b206IDZweDtcXG4gIGNvbG9yOiAjNTU1O1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjAyKTtcXG4gIHBhZGRpbmc6IDZweCA4cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgY29sb3I6ICM3Nzc7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5lcnJvci1tZXNzYWdlIHtcXG4gIGNvbG9yOiAjRjQ0MzM2O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYmVlO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjQ0LCA2NywgNTQsIDAuMik7XFxufSBcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3BvcHVwLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3BvcHVwLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9wb3B1cC5jc3MnO1xuXG4vLyBGdW5jdGlvbnMgZm9yIGNoZWNrbGlzdCBpdGVtc1xuZnVuY3Rpb24gc2NhblNpdGVUZWNobm9sb2d5KCkge1xuICBjb25zb2xlLmxvZygnU2Nhbm5pbmcgc2l0ZSB0ZWNobm9sb2dpZXMuLi4nKTtcbiAgLy8gR2V0IHRoZSByZXN1bHRzIGNvbnRhaW5lciBmb3IgdGhpcyBpdGVtXG4gIGNvbnN0IHJlc3VsdHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0cy1zaXRlLXRlY2hub2xvZ3knKTtcbiAgaWYgKHJlc3VsdHNDb250YWluZXIpIHtcbiAgICByZXN1bHRzQ29udGFpbmVyLmlubmVySFRNTCA9ICc8cD5TY2FubmluZyBzaXRlIHRlY2hub2xvZ2llcy4uLiAoTm90IGltcGxlbWVudGVkIHlldCk8L3A+JztcbiAgICB0b2dnbGVSZXN1bHRzVmlzaWJpbGl0eShyZXN1bHRzQ29udGFpbmVyKTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gY2hlY2tTZWN1cml0eUhlYWRlcnMoKSB7XG4gIGNvbnNvbGUubG9nKCdDaGVja2luZyBzZWN1cml0eSBoZWFkZXJzLi4uJyk7XG4gIFxuICAvLyBHZXQgdGhlIHJlc3VsdHMgY29udGFpbmVyIGZvciB0aGlzIGl0ZW1cbiAgY29uc3QgcmVzdWx0c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHRzLXNlY3VyaXR5LWhlYWRlcnMnKTtcbiAgaWYgKCFyZXN1bHRzQ29udGFpbmVyKSByZXR1cm4gZmFsc2U7XG4gIFxuICAvLyBTaG93IGxvYWRpbmcgaW5kaWNhdG9yXG4gIHJlc3VsdHNDb250YWluZXIuaW5uZXJIVE1MID0gJzxwPkxvYWRpbmcgc2VjdXJpdHkgaGVhZGVycyBkYXRhLi4uPC9wPic7XG4gIHRvZ2dsZVJlc3VsdHNWaXNpYmlsaXR5KHJlc3VsdHNDb250YWluZXIpO1xuICBcbiAgLy8gR2V0IHRoZSBjdXJyZW50IGFjdGl2ZSB0YWJcbiAgY2hyb21lLnRhYnMucXVlcnkoe2FjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZX0sICh0YWJzKSA9PiB7XG4gICAgY29uc3QgY3VycmVudFRhYiA9IHRhYnNbMF07XG4gICAgaWYgKCFjdXJyZW50VGFiIHx8ICFjdXJyZW50VGFiLnVybCkge1xuICAgICAgcmVzdWx0c0NvbnRhaW5lci5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cImVycm9yLW1lc3NhZ2VcIj5DYW5ub3QgYWNjZXNzIGN1cnJlbnQgdGFiIGluZm9ybWF0aW9uPC9kaXY+JztcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgLy8gQ2hlY2sgaWYgd2UgY2FuIGFuYWx5emUgdGhpcyBVUkwgKG11c3QgYmUgaHR0cCBvciBodHRwcylcbiAgICBjb25zdCB1cmwgPSBjdXJyZW50VGFiLnVybDtcbiAgICBpZiAoIXVybC5zdGFydHNXaXRoKCdodHRwOi8vJykgJiYgIXVybC5zdGFydHNXaXRoKCdodHRwczovLycpKSB7XG4gICAgICByZXN1bHRzQ29udGFpbmVyLmlubmVySFRNTCA9ICc8ZGl2IGNsYXNzPVwiZXJyb3ItbWVzc2FnZVwiPkNhbiBvbmx5IGFuYWx5emUgSFRUUC9IVFRQUyBwYWdlczwvZGl2Pic7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIC8vIEZldGNoIGhlYWRlcnMgdXNpbmcgYmFja2dyb3VuZCBzY3JpcHQgKG5lZWRlZCBmb3IgQ09SUylcbiAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7YWN0aW9uOiAnZmV0Y2hIZWFkZXJzJywgdXJsOiB1cmx9LCAocmVzcG9uc2UpID0+IHtcbiAgICAgIGlmIChyZXNwb25zZS5lcnJvcikge1xuICAgICAgICByZXN1bHRzQ29udGFpbmVyLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwiZXJyb3ItbWVzc2FnZVwiPiR7cmVzcG9uc2UuZXJyb3J9PC9kaXY+YDtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgXG4gICAgICByZXN1bHRzQ29udGFpbmVyLmlubmVySFRNTCA9ICc8aDM+U2VjdXJpdHkgSGVhZGVycyBBbmFseXNpczwvaDM+JztcbiAgICAgIGNvbnN0IGhlYWRlcnMgPSByZXNwb25zZS5oZWFkZXJzO1xuICAgICAgXG4gICAgICAvLyBJbXBvcnRhbnQgc2VjdXJpdHkgaGVhZGVycyB0byBjaGVja1xuICAgICAgY29uc3Qgc2VjdXJpdHlIZWFkZXJzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ0NvbnRlbnQtU2VjdXJpdHktUG9saWN5JyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0hlbHBzIHByZXZlbnQgWFNTIGFuZCBkYXRhIGluamVjdGlvbiBhdHRhY2tzJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ1gtQ29udGVudC1UeXBlLU9wdGlvbnMnLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUHJldmVudHMgTUlNRSB0eXBlIHNuaWZmaW5nJyxcbiAgICAgICAgICByZWNvbW1lbmRlZDogJ25vc25pZmYnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnWC1GcmFtZS1PcHRpb25zJyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ1Byb3RlY3RzIGFnYWluc3QgY2xpY2tqYWNraW5nJyxcbiAgICAgICAgICByZWNvbW1lbmRlZDogJ0RFTlkgb3IgU0FNRU9SSUdJTidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdTdHJpY3QtVHJhbnNwb3J0LVNlY3VyaXR5JyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0VuZm9yY2VzIEhUVFBTIGNvbm5lY3Rpb25zJyxcbiAgICAgICAgICByZWNvbW1lbmRlZDogJ21heC1hZ2U9MzE1MzYwMDA7IGluY2x1ZGVTdWJEb21haW5zJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ1gtWFNTLVByb3RlY3Rpb24nLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUHJvdmlkZXMgWFNTIHByb3RlY3Rpb24gaW4gb2xkZXIgYnJvd3NlcnMnLFxuICAgICAgICAgIHJlY29tbWVuZGVkOiAnMTsgbW9kZT1ibG9jaydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdSZWZlcnJlci1Qb2xpY3knLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQ29udHJvbHMgaW5mb3JtYXRpb24gaW4gdGhlIFJlZmVyZXIgaGVhZGVyJyxcbiAgICAgICAgICByZWNvbW1lbmRlZDogJ3N0cmljdC1vcmlnaW4td2hlbi1jcm9zcy1vcmlnaW4nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnUGVybWlzc2lvbnMtUG9saWN5JyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0NvbnRyb2xzIGJyb3dzZXIgZmVhdHVyZXMgYW5kIEFQSXMnLFxuICAgICAgICAgIGFsdGVybmF0ZTogJ0ZlYXR1cmUtUG9saWN5J1xuICAgICAgICB9XG4gICAgICBdO1xuICAgICAgXG4gICAgICAvLyBDaGVjayBlYWNoIHNlY3VyaXR5IGhlYWRlclxuICAgICAgc2VjdXJpdHlIZWFkZXJzLmZvckVhY2goaGVhZGVyID0+IHtcbiAgICAgICAgY29uc3QgaGVhZGVyVmFsdWUgPSBnZXRIZWFkZXJWYWx1ZShoZWFkZXJzLCBoZWFkZXIubmFtZSkgfHwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAoaGVhZGVyLmFsdGVybmF0ZSA/IGdldEhlYWRlclZhbHVlKGhlYWRlcnMsIGhlYWRlci5hbHRlcm5hdGUpIDogbnVsbCk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBzdGF0dXMgPSBoZWFkZXJWYWx1ZSA/ICdQcmVzZW50JyA6ICdNaXNzaW5nJztcbiAgICAgICAgY29uc3QgZGV0YWlscyA9IGhlYWRlclZhbHVlIHx8IFxuICAgICAgICAgICAgICAgICAgICAgICAoaGVhZGVyLnJlY29tbWVuZGVkID8gYFJlY29tbWVuZGVkOiAke2hlYWRlci5yZWNvbW1lbmRlZH1gIDogJ05vdCBpbXBsZW1lbnRlZCcpO1xuICAgICAgICBcbiAgICAgICAgZGlzcGxheVJlc3VsdChyZXN1bHRzQ29udGFpbmVyLCBoZWFkZXIubmFtZSwgc3RhdHVzLCBkZXRhaWxzLCBoZWFkZXIuZGVzY3JpcHRpb24pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuICBcbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGRldGVjdEphdmFTY3JpcHRMaWJyYXJpZXMoKSB7XG4gIGNvbnNvbGUubG9nKCdEZXRlY3RpbmcgSmF2YVNjcmlwdCBsaWJyYXJpZXMuLi4nKTtcbiAgLy8gR2V0IHRoZSByZXN1bHRzIGNvbnRhaW5lciBmb3IgdGhpcyBpdGVtXG4gIGNvbnN0IHJlc3VsdHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0cy1qYXZhc2NyaXB0LWxpYnJhcmllcycpO1xuICBpZiAocmVzdWx0c0NvbnRhaW5lcikge1xuICAgIHJlc3VsdHNDb250YWluZXIuaW5uZXJIVE1MID0gJzxwPkRldGVjdGluZyBKYXZhU2NyaXB0IGxpYnJhcmllcy4uLiAoTm90IGltcGxlbWVudGVkIHlldCk8L3A+JztcbiAgICB0b2dnbGVSZXN1bHRzVmlzaWJpbGl0eShyZXN1bHRzQ29udGFpbmVyKTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gZGV0ZWN0Q29udGVudE1hbmFnZW1lbnRTeXN0ZW0oKSB7XG4gIGNvbnNvbGUubG9nKCdEZXRlY3RpbmcgY29udGVudCBtYW5hZ2VtZW50IHN5c3RlbS4uLicpO1xuICAvLyBHZXQgdGhlIHJlc3VsdHMgY29udGFpbmVyIGZvciB0aGlzIGl0ZW1cbiAgY29uc3QgcmVzdWx0c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHRzLWNtcycpO1xuICBpZiAocmVzdWx0c0NvbnRhaW5lcikge1xuICAgIHJlc3VsdHNDb250YWluZXIuaW5uZXJIVE1MID0gJzxwPkRldGVjdGluZyBDTVMuLi4gKE5vdCBpbXBsZW1lbnRlZCB5ZXQpPC9wPic7XG4gICAgdG9nZ2xlUmVzdWx0c1Zpc2liaWxpdHkocmVzdWx0c0NvbnRhaW5lcik7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGlkZW50aWZ5QW5hbHl0aWNzVG9vbHMoKSB7XG4gIGNvbnNvbGUubG9nKCdJZGVudGlmeWluZyBhbmFseXRpY3MgdG9vbHMuLi4nKTtcbiAgLy8gR2V0IHRoZSByZXN1bHRzIGNvbnRhaW5lciBmb3IgdGhpcyBpdGVtXG4gIGNvbnN0IHJlc3VsdHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0cy1hbmFseXRpY3MnKTtcbiAgaWYgKHJlc3VsdHNDb250YWluZXIpIHtcbiAgICByZXN1bHRzQ29udGFpbmVyLmlubmVySFRNTCA9ICc8cD5JZGVudGlmeWluZyBhbmFseXRpY3MgdG9vbHMuLi4gKE5vdCBpbXBsZW1lbnRlZCB5ZXQpPC9wPic7XG4gICAgdG9nZ2xlUmVzdWx0c1Zpc2liaWxpdHkocmVzdWx0c0NvbnRhaW5lcik7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8vIFRvZ2dsZSB2aXNpYmlsaXR5IG9mIHJlc3VsdHMgY29udGFpbmVyXG5mdW5jdGlvbiB0b2dnbGVSZXN1bHRzVmlzaWJpbGl0eShjb250YWluZXI6IEhUTUxFbGVtZW50KSB7XG4gIGlmIChjb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCd2aXNpYmxlJykpIHtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgIGNvbnRhaW5lci5zdHlsZS5tYXhIZWlnaHQgPSAnMHB4JztcbiAgfSBlbHNlIHtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICAgIGNvbnRhaW5lci5zdHlsZS5tYXhIZWlnaHQgPSBjb250YWluZXIuc2Nyb2xsSGVpZ2h0ICsgJ3B4JztcbiAgICBcbiAgICAvLyBVcGRhdGUgbWF4IGhlaWdodCBvbiBjb250ZW50IGNoYW5nZXNcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+IHtcbiAgICAgIGlmIChjb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCd2aXNpYmxlJykpIHtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLm1heEhlaWdodCA9IGNvbnRhaW5lci5zY3JvbGxIZWlnaHQgKyAncHgnO1xuICAgICAgfVxuICAgIH0pO1xuICAgIFxuICAgIG9ic2VydmVyLm9ic2VydmUoY29udGFpbmVyLCB7IFxuICAgICAgY2hpbGRMaXN0OiB0cnVlLCBcbiAgICAgIHN1YnRyZWU6IHRydWUsXG4gICAgICBjaGFyYWN0ZXJEYXRhOiB0cnVlXG4gICAgfSk7XG4gICAgXG4gICAgLy8gRGlzY29ubmVjdCBhZnRlciBhIHNob3J0IHRpbWUgdG8gYXZvaWQgbWVtb3J5IGxlYWtzXG4gICAgc2V0VGltZW91dCgoKSA9PiBvYnNlcnZlci5kaXNjb25uZWN0KCksIDIwMDApO1xuICB9XG59XG5cbi8vIEhlbHBlciBmdW5jdGlvbiB0byBnZXQgaGVhZGVyIHZhbHVlIChjYXNlLWluc2Vuc2l0aXZlKVxuZnVuY3Rpb24gZ2V0SGVhZGVyVmFsdWUoaGVhZGVyczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiwgaGVhZGVyTmFtZTogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XG4gIGNvbnN0IGhlYWRlcktleSA9IE9iamVjdC5rZXlzKGhlYWRlcnMpLmZpbmQoa2V5ID0+IFxuICAgIGtleS50b0xvd2VyQ2FzZSgpID09PSBoZWFkZXJOYW1lLnRvTG93ZXJDYXNlKClcbiAgKTtcbiAgXG4gIHJldHVybiBoZWFkZXJLZXkgPyBoZWFkZXJzW2hlYWRlcktleV0gOiBudWxsO1xufVxuXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gZGlzcGxheSByZXN1bHRzXG5mdW5jdGlvbiBkaXNwbGF5UmVzdWx0KFxuICBjb250YWluZXI6IEhUTUxFbGVtZW50LCBcbiAgaGVhZGVyTmFtZTogc3RyaW5nLCBcbiAgc3RhdHVzOiBzdHJpbmcsIFxuICBkZXRhaWxzOiBzdHJpbmcgPSAnJywgXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmcgPSAnJ1xuKSB7XG4gIGNvbnN0IHJlc3VsdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcmVzdWx0SXRlbS5jbGFzc05hbWUgPSBgcmVzdWx0LWl0ZW0gJHtzdGF0dXMudG9Mb3dlckNhc2UoKX1gO1xuICBcbiAgY29uc3Qgc3RhdHVzQ2xhc3MgPSBzdGF0dXMgPT09ICdQcmVzZW50JyA/ICdzdWNjZXNzJyA6IFxuICAgICAgICAgICAgICAgICAgICAgKHN0YXR1cyA9PT0gJ0Vycm9yJyA/ICdlcnJvcicgOiAnd2FybmluZycpO1xuICBcbiAgcmVzdWx0SXRlbS5pbm5lckhUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz1cImhlYWRlci1uYW1lXCI+JHtoZWFkZXJOYW1lfTwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJzdGF0dXMgJHtzdGF0dXNDbGFzc31cIj4ke3N0YXR1c308L2Rpdj5cbiAgICAke2RldGFpbHMgPyBgPGRpdiBjbGFzcz1cImRldGFpbHNcIj4ke2RldGFpbHN9PC9kaXY+YCA6ICcnfVxuICAgICR7ZGVzY3JpcHRpb24gPyBgPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uXCI+JHtkZXNjcmlwdGlvbn08L2Rpdj5gIDogJyd9XG4gIGA7XG4gIFxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQocmVzdWx0SXRlbSk7XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGNvbnN0IGFwcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKTtcbiAgaWYgKGFwcCkge1xuICAgIC8vIENyZWF0ZSBoZWFkZXJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9ICdXaG8gRGlzPyc7XG4gICAgYXBwLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgXG4gICAgLy8gQ3JlYXRlIGNoZWNrbGlzdCB3aXRoIGNvcnJlc3BvbmRpbmcgZnVuY3Rpb25zXG4gICAgY29uc3QgY2hlY2tsaXN0SXRlbXNXaXRoRnVuY3Rpb25zID0gW1xuICAgICAgeyBcbiAgICAgICAgaWQ6ICdzaXRlLXRlY2hub2xvZ3knLFxuICAgICAgICBuYW1lOiAnU2l0ZSB0ZWNobm9sb2d5IHNjYW4nLCBcbiAgICAgICAgZnVuY3Rpb246IHNjYW5TaXRlVGVjaG5vbG9neSBcbiAgICAgIH0sXG4gICAgICB7IFxuICAgICAgICBpZDogJ3NlY3VyaXR5LWhlYWRlcnMnLFxuICAgICAgICBuYW1lOiAnU2VjdXJpdHkgaGVhZGVycyBjaGVjaycsIFxuICAgICAgICBmdW5jdGlvbjogY2hlY2tTZWN1cml0eUhlYWRlcnMgXG4gICAgICB9LFxuICAgICAgeyBcbiAgICAgICAgaWQ6ICdqYXZhc2NyaXB0LWxpYnJhcmllcycsXG4gICAgICAgIG5hbWU6ICdKYXZhU2NyaXB0IGxpYnJhcnkgZGV0ZWN0aW9uJywgXG4gICAgICAgIGZ1bmN0aW9uOiBkZXRlY3RKYXZhU2NyaXB0TGlicmFyaWVzIFxuICAgICAgfSxcbiAgICAgIHsgXG4gICAgICAgIGlkOiAnY21zJyxcbiAgICAgICAgbmFtZTogJ0NvbnRlbnQgbWFuYWdlbWVudCBzeXN0ZW0gZGV0ZWN0aW9uJywgXG4gICAgICAgIGZ1bmN0aW9uOiBkZXRlY3RDb250ZW50TWFuYWdlbWVudFN5c3RlbSBcbiAgICAgIH0sXG4gICAgICB7IFxuICAgICAgICBpZDogJ2FuYWx5dGljcycsXG4gICAgICAgIG5hbWU6ICdBbmFseXRpY3MgdG9vbHMgaWRlbnRpZmljYXRpb24nLCBcbiAgICAgICAgZnVuY3Rpb246IGlkZW50aWZ5QW5hbHl0aWNzVG9vbHMgXG4gICAgICB9XG4gICAgXTtcbiAgICBcbiAgICBjb25zdCBjaGVja2xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGNoZWNrbGlzdC5jbGFzc05hbWUgPSAnY2hlY2tsaXN0JztcbiAgICBcbiAgICBjaGVja2xpc3RJdGVtc1dpdGhGdW5jdGlvbnMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIC8vIENyZWF0ZSBsaXN0IGl0ZW0gY29udGFpbmVyXG4gICAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICBsaXN0SXRlbS5jbGFzc05hbWUgPSAnY2hlY2tsaXN0LWl0ZW0tY29udGFpbmVyJztcbiAgICAgIFxuICAgICAgLy8gQ3JlYXRlIGhlYWRlciB3aXRoIGNoZWNrbWFyayBhbmQgdGl0bGVcbiAgICAgIGNvbnN0IGl0ZW1IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGl0ZW1IZWFkZXIuY2xhc3NOYW1lID0gJ2NoZWNrbGlzdC1oZWFkZXInO1xuICAgICAgXG4gICAgICBjb25zdCBjaGVja21hcmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBjaGVja21hcmsuY2xhc3NOYW1lID0gJ2NoZWNrbWFyayc7XG4gICAgICBjaGVja21hcmsuaW5uZXJIVE1MID0gJ+Kckyc7XG4gICAgICBcbiAgICAgIGNvbnN0IGl0ZW1UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgaXRlbVRleHQuY2xhc3NOYW1lID0gJ2NoZWNrbGlzdC1pdGVtJztcbiAgICAgIGl0ZW1UZXh0LnRleHRDb250ZW50ID0gaXRlbS5uYW1lO1xuICAgICAgXG4gICAgICBjb25zdCBleHBhbmRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgZXhwYW5kSWNvbi5jbGFzc05hbWUgPSAnZXhwYW5kLWljb24nO1xuICAgICAgZXhwYW5kSWNvbi5pbm5lckhUTUwgPSAn4pa8JztcbiAgICAgIFxuICAgICAgaXRlbUhlYWRlci5hcHBlbmRDaGlsZChjaGVja21hcmspO1xuICAgICAgaXRlbUhlYWRlci5hcHBlbmRDaGlsZChpdGVtVGV4dCk7XG4gICAgICBpdGVtSGVhZGVyLmFwcGVuZENoaWxkKGV4cGFuZEljb24pO1xuICAgICAgXG4gICAgICAvLyBDcmVhdGUgcmVzdWx0cyBjb250YWluZXIgKGluaXRpYWxseSBoaWRkZW4pXG4gICAgICBjb25zdCByZXN1bHRzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICByZXN1bHRzQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdyZXN1bHRzLWNvbnRhaW5lcic7XG4gICAgICByZXN1bHRzQ29udGFpbmVyLmlkID0gYHJlc3VsdHMtJHtpdGVtLmlkfWA7XG4gICAgICByZXN1bHRzQ29udGFpbmVyLnN0eWxlLm1heEhlaWdodCA9ICcwcHgnO1xuICAgICAgcmVzdWx0c0NvbnRhaW5lci5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgICAgXG4gICAgICAvLyBBZGQgY2xpY2sgZXZlbnQgdG8gaGVhZGVyXG4gICAgICBpdGVtSGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAvLyBUb2dnbGUgYWN0aXZlIHN0YXRlIGZvciB2aXN1YWwgZmVlZGJhY2tcbiAgICAgICAgbGlzdEl0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgICAgIC8vIFJ1biBmdW5jdGlvbiBpZiBub3QgYWxyZWFkeSBydW5cbiAgICAgICAgaWYgKHJlc3VsdHNDb250YWluZXIuaW5uZXJIVE1MID09PSAnJykge1xuICAgICAgICAgIGl0ZW0uZnVuY3Rpb24oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0b2dnbGVSZXN1bHRzVmlzaWJpbGl0eShyZXN1bHRzQ29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBcbiAgICAgIC8vIEFzc2VtYmxlIHRoZSBsaXN0IGl0ZW1cbiAgICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGl0ZW1IZWFkZXIpO1xuICAgICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQocmVzdWx0c0NvbnRhaW5lcik7XG4gICAgICBjaGVja2xpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICAgIH0pO1xuICAgIFxuICAgIGFwcC5hcHBlbmRDaGlsZChjaGVja2xpc3QpO1xuICB9XG59KTsgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9