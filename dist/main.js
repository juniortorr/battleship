/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `h1 {
  color: red;
}

.gameboard-container {
  display: flex;
  justify-content: center;
  gap: 50px;
}
.board-row {
  display: flex;
  justify-content: center;
}
.board-unit {
  width: 50px;
  height: 50px;
  border: 2px solid black;
  position: relative;
  overflow: none;
}
.computer:hover {
  background-color: lightcyan;
}

.ship {
  background-color: #4b5320;
}

.missed {
  background-color: grey;
}
.hit {
  background-color: rebeccapurple;
}
.game-piece-container {
  display: flex;
  justify-content: center;
  margin: 0 auto;
  gap: 20px;
}
.ship-container {
  display: flex;
  width: 400px;
  align-items: center;
  flex-direction: column;
  height: 300px;
}
.slider-container {
  position: relative;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  width: 200px;
  box-sizing: border-box;
}

.slider {
  position: absolute;
  height: 100%;
  width: 50%;
  background-color: lightblue;
  transition: all 1s ease-in-out;
}

.direction {
  z-index: 1;
  width: 50%;
  text-align: center;
}

.horizontal {
  left: 0;
}
.vertical {
  right: 0;
}

.hide {
  display: none;
}

.battleship {
  position: absolute;
  bottom: 0;
  left: 0;
}

.smallShip {
  height: 108px;
  width: 54px;
}
.medShip {
  height: 162px;
  width: 54px;
}
.largeShip {
  height: 270px;
  width: 54px;
}

.rotate {
  transform: rotate(90deg);
}

.ship-container-vertical {
  flex-direction: row;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,SAAS;AACX;AACA;EACE,aAAa;EACb,uBAAuB;AACzB;AACA;EACE,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,kBAAkB;EAClB,cAAc;AAChB;AACA;EACE,2BAA2B;AAC7B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,sBAAsB;AACxB;AACA;EACE,+BAA+B;AACjC;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,cAAc;EACd,SAAS;AACX;AACA;EACE,aAAa;EACb,YAAY;EACZ,mBAAmB;EACnB,sBAAsB;EACtB,aAAa;AACf;AACA;EACE,kBAAkB;EAClB,aAAa;EACb,SAAS;EACT,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,UAAU;EACV,2BAA2B;EAC3B,8BAA8B;AAChC;;AAEA;EACE,UAAU;EACV,UAAU;EACV,kBAAkB;AACpB;;AAEA;EACE,OAAO;AACT;AACA;EACE,QAAQ;AACV;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,OAAO;AACT;;AAEA;EACE,aAAa;EACb,WAAW;AACb;AACA;EACE,aAAa;EACb,WAAW;AACb;AACA;EACE,aAAa;EACb,WAAW;AACb;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,mBAAmB;AACrB","sourcesContent":["h1 {\r\n  color: red;\r\n}\r\n\r\n.gameboard-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 50px;\r\n}\r\n.board-row {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n.board-unit {\r\n  width: 50px;\r\n  height: 50px;\r\n  border: 2px solid black;\r\n  position: relative;\r\n  overflow: none;\r\n}\r\n.computer:hover {\r\n  background-color: lightcyan;\r\n}\r\n\r\n.ship {\r\n  background-color: #4b5320;\r\n}\r\n\r\n.missed {\r\n  background-color: grey;\r\n}\r\n.hit {\r\n  background-color: rebeccapurple;\r\n}\r\n.game-piece-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin: 0 auto;\r\n  gap: 20px;\r\n}\r\n.ship-container {\r\n  display: flex;\r\n  width: 400px;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  height: 300px;\r\n}\r\n.slider-container {\r\n  position: relative;\r\n  display: flex;\r\n  gap: 20px;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 200px;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.slider {\r\n  position: absolute;\r\n  height: 100%;\r\n  width: 50%;\r\n  background-color: lightblue;\r\n  transition: all 1s ease-in-out;\r\n}\r\n\r\n.direction {\r\n  z-index: 1;\r\n  width: 50%;\r\n  text-align: center;\r\n}\r\n\r\n.horizontal {\r\n  left: 0;\r\n}\r\n.vertical {\r\n  right: 0;\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n\r\n.battleship {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n}\r\n\r\n.smallShip {\r\n  height: 108px;\r\n  width: 54px;\r\n}\r\n.medShip {\r\n  height: 162px;\r\n  width: 54px;\r\n}\r\n.largeShip {\r\n  height: 270px;\r\n  width: 54px;\r\n}\r\n\r\n.rotate {\r\n  transform: rotate(90deg);\r\n}\r\n\r\n.ship-container-vertical {\r\n  flex-direction: row;\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gameLoop: () => (/* binding */ gameLoop),
/* harmony export */   handleComputerAttack: () => (/* binding */ handleComputerAttack),
/* harmony export */   handleDragStart: () => (/* binding */ handleDragStart),
/* harmony export */   handleDrop: () => (/* binding */ handleDrop),
/* harmony export */   handleGameOver: () => (/* binding */ handleGameOver),
/* harmony export */   handleSendAttack: () => (/* binding */ handleSendAttack),
/* harmony export */   handleSliderToggle: () => (/* binding */ handleSliderToggle),
/* harmony export */   randomlyPlaceShips: () => (/* binding */ randomlyPlaceShips)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _gameComponents_gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameComponents/gameboard */ "./src/gameComponents/gameboard.js");
/* harmony import */ var _domstuff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domstuff */ "./src/domstuff.js");


// eslint-disable-next-line import/no-cycle


const createPlayer = () => new _gameComponents_gameboard__WEBPACK_IMPORTED_MODULE_1__["default"]();
let computer = createPlayer();
let player1 = createPlayer();
let currentDirection = 'horizontal';

const randomDirection = () => {
  if (Math.floor(Math.random() * 10) < 5) {
    return 'horizontal';
  }
  return 'vertical';
};

const randomCoordinates = (ship, board) => {
  const x = Math.floor(Math.random() * 10);
  const y = Math.floor(Math.random() * 10);
  const direction = randomDirection();
  let results;
  if (board[y][x] !== null) {
    return randomCoordinates(ship, board);
  }
  if (direction === 'horizontal' && x + (ship.length - 1) <= 9) {
    results = [x, y, direction];
  } else if (direction === 'vertical' && y + (ship.length - 1) <= 9) {
    results = [x, y, direction];
  } else {
    return randomCoordinates(ship, board);
  }
  return results;
};

const randomlyPlaceShips = (player) => {
  const allShips = [player.smallShip, player.medShip, player.lrgShip];
  allShips.forEach((ship) => {
    const coordinates = randomCoordinates(ship, player.board);
    player.placeShip(coordinates[0], coordinates[1], ship, coordinates[2]);
  });
  return 'success';
};

const gameLoop = () => {
  randomlyPlaceShips(computer);
  computer.setComputerChoiceBank();
  _domstuff__WEBPACK_IMPORTED_MODULE_2__["default"].createPlayerBoard(player1.board);
  _domstuff__WEBPACK_IMPORTED_MODULE_2__["default"].createPlayerBoard(computer.board, true);
  _domstuff__WEBPACK_IMPORTED_MODULE_2__["default"].createShipList(player1);
};

const handleGameOver = () => {
  computer = createPlayer();
  player1 = createPlayer();
  _domstuff__WEBPACK_IMPORTED_MODULE_2__["default"].reset();
  gameLoop();
};

const checkHitResults = (results, spot) => {
  if (results.includes('hit!')) {
    _domstuff__WEBPACK_IMPORTED_MODULE_2__["default"].targetHit(spot);
    return console.log('player 1 hit');
  }
  if (results.includes('miss')) {
    _domstuff__WEBPACK_IMPORTED_MODULE_2__["default"].targetMissed(spot);
    return console.log('computer missed ya nerd');
  }
  if (results === 'game over') {
    return handleGameOver();
  }
  return results;
};

// Event Handlers ======>

function handleDrop(e) {
  e.preventDefault();
  const coordinates = e.target.getAttribute('data-set').split(',');
  const data = e.dataTransfer.getData('text');
  const shipIcon = document.getElementById(data);
  const length = Number(shipIcon.getAttribute('id'));

  player1.allShips.forEach((boat) => {
    if (boat.length === length) {
      if (
        player1
          .placeShip(Number(coordinates[0]), Number(coordinates[1]), boat, currentDirection)
          .includes('invalid coordinates')
      ) {
        console.log('error! cannot place ship');
        console.log(player1.board);
      } else {
        e.target.appendChild(shipIcon);
        shipIcon.setAttribute('draggable', false);
        shipIcon.setAttribute('data-set', coordinates);
        shipIcon.classList.add('battleship');
        console.log(player1.board);
      }
    }
  });
  if (player1.getShipsToPlace() < 1) {
    _domstuff__WEBPACK_IMPORTED_MODULE_2__["default"].removeHiddenClass();
  }
}

function handleSliderToggle() {
  if (currentDirection === 'horizontal') {
    currentDirection = 'vertical';
  } else {
    currentDirection = 'horizontal';
  }
  _domstuff__WEBPACK_IMPORTED_MODULE_2__["default"].toggleSlider();
}

function handleDragStart(e) {
  e.dataTransfer.setData('text', e.target.id);
}

function handleComputerAttack() {
  const choice = computer.getComputerChoice();
  const spot = _domstuff__WEBPACK_IMPORTED_MODULE_2__["default"].getSpot(choice);
  const hitResults = player1.receiveAttack(choice[0], choice[1]);
  console.log('player ships alive:', player1.checkShipsAlive());
  return checkHitResults(hitResults, spot);
}

function handleSendAttack(e) {
  const selectedSpot = e.target;
  if (selectedSpot.hasAttribute('data-targeted')) {
    return alert('dont do this');
  }
  const coordinatesString = selectedSpot.getAttribute('data-set');
  const coordinates = coordinatesString.split(',');
  const hitResults = computer.receiveAttack(coordinates[0], coordinates[1]);
  console.log('computer ships alive:', computer.checkShipsAlive());
  handleComputerAttack();
  return checkHitResults(hitResults, selectedSpot);
}

gameLoop();




/***/ }),

/***/ "./src/domstuff.js":
/*!*************************!*\
  !*** ./src/domstuff.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/app.js");
/* harmony import */ var _images_boat2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/boat2.png */ "./src/images/boat2.png");
/* harmony import */ var _images_boat_horizontal_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/boat-horizontal.png */ "./src/images/boat-horizontal.png");
// eslint-disable-next-line import/no-cycle




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function domstuff() {
  const boardContainer = document.querySelector('.gameboard-container');
  const sliderContainer = document.querySelector('.slider-container');

  const reset = () => {
    const gridRow = document.querySelector('.board-row');
    const playerContainer = document.querySelector('.player-container');
    while (gridRow.firstChild) {
      gridRow.removeChild(gridRow.firstChild);
    }
    while (playerContainer.firstChild) {
      playerContainer.removeChild(playerContainer.lastChild);
    }
    boardContainer.innerHTML = '';
  };

  const createPlayerBoard = (board, computer = false) => {
    const playerContainer = document.createElement('div');
    playerContainer.classList.add('player-container');
    boardContainer.append(playerContainer);
    board.forEach((row) => {
      const gridRow = document.createElement('div');
      const rowIndex = board.indexOf(row);
      gridRow.classList.add('board-row');
      playerContainer.prepend(gridRow);
      gridRow.setAttribute('data-row', board.indexOf(row));
      for (let i = 0; i < row.length; i += 1) {
        const gridUnit = document.createElement('div');
        const spotIndex = i;
        if (row[i] !== null) {
          gridUnit.classList.add('ship');
        }
        gridUnit.classList.add('board-unit');
        gridUnit.setAttribute('data-set', [spotIndex, rowIndex]);

        gridUnit.addEventListener('drop', _app__WEBPACK_IMPORTED_MODULE_0__.handleDrop);
        if (computer === true) {
          playerContainer.classList.add('computer-container', 'hide');
          gridUnit.addEventListener('click', _app__WEBPACK_IMPORTED_MODULE_0__.handleSendAttack);
        } else {
          gridUnit.addEventListener('dragover', (e) => {
            e.preventDefault();
          });
        }
        gridRow.append(gridUnit);
      }
    });
  };

  const removeHiddenClass = () => {
    const computerContainer = document.querySelector('.computer-container');
    computerContainer.classList.remove('hide');
    sliderContainer.classList.add('hide');
  };

  const createShipList = (player) => {
    const shipContainer = document.querySelector('.ship-container');
    const shipClasses = ['smallShip', 'medShip', 'largeShip'];
    player.allShips.forEach((boat) => {
      const shipIcon = document.createElement('img');
      shipIcon.src = _images_boat2_png__WEBPACK_IMPORTED_MODULE_1__;
      shipIcon.classList.add(shipClasses[0], 'player-1-ship', 'rotate');
      shipIcon.setAttribute('id', boat.length);
      shipIcon.setAttribute('draggable', true);
      shipIcon.addEventListener('dragstart', _app__WEBPACK_IMPORTED_MODULE_0__.handleDragStart);
      shipContainer.append(_images_boat_horizontal_png__WEBPACK_IMPORTED_MODULE_2__);
      shipClasses.splice(0, 1);
    });
  };

  const targetMissed = (unit) => {
    unit.classList.add('missed');
    unit.setAttribute('data-targeted', true);
  };

  const targetHit = (unit) => {
    unit.classList.add('hit');
    unit.setAttribute('data-targeted', true);
  };

  const getSpot = (coordinates) => {
    const spot = document.querySelector(`[data-set="${coordinates[0]},${coordinates[1]}"]`);
    return spot;
  };

  const turnShips = () => {
    const ships = document.querySelectorAll('.player-1-ship');
    const container = document.querySelector('.ship-container');
    ships.forEach((boat) => {
      console.log(boat);
      if (boat.classList.contains('rotate')) {
        boat.classList.remove('rotate');
      } else {
        boat.classList.add('rotate');
        container.classList.add('ship-container-vertical');
      }
    });
  };

  const toggleSlider = () => {
    const slider = document.querySelector('#slider');
    if (slider.classList.contains('horizontal')) {
      slider.classList.remove('horizontal');
      slider.classList.add('vertical');
    } else {
      slider.classList.remove('vertical');
      slider.classList.add('horizontal');
    }
    turnShips();
  };

  sliderContainer.addEventListener('click', _app__WEBPACK_IMPORTED_MODULE_0__.handleSliderToggle);

  return {
    handleSendAttack: _app__WEBPACK_IMPORTED_MODULE_0__.handleSendAttack,
    createPlayerBoard,
    reset,
    targetMissed,
    targetHit,
    getSpot,
    createShipList,
    toggleSlider,
    removeHiddenClass,
  };
})());


/***/ }),

/***/ "./src/gameComponents/gameboard.js":
/*!*****************************************!*\
  !*** ./src/gameComponents/gameboard.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameBoard)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/gameComponents/ship.js");


class GameBoard {
  constructor() {
    this.board = [...new Array(10)].map(() => new Array(10).fill(null));
    this.isTurn = false;
    this.missedAttacks = 0;
    this.computerChoiceBank = null;
    this.computerChoiceOpts = 100;
    this.shipsAlive = 3;
    this.smallShip = new _ship__WEBPACK_IMPORTED_MODULE_0__["default"](2);
    this.medShip = new _ship__WEBPACK_IMPORTED_MODULE_0__["default"](3);
    this.lrgShip = new _ship__WEBPACK_IMPORTED_MODULE_0__["default"](5);
    this.allShips = [this.smallShip, this.medShip, this.lrgShip];
    this.shipsToPlace = 3;
  }

  // eslint-disable-next-line class-methods-use-this
  setComputerChoiceBank() {
    const copy = [];
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        copy.push([i, j]);
      }
    }
    this.computerChoiceBank = copy;
  }

  horizontalShipPlace(x, y, ship, coordinatesArr) {
    let xInt = x;
    let { length } = ship;
    while (length !== 0) {
      if (xInt + (length - 1) > 9 || xInt < 0) {
        console.log('invalid coordinates', x, y, ship);
        return 'invalid coordinates';
      }
      this.board[y][xInt] = ship;
      coordinatesArr.push([xInt, y]);
      length -= 1;
      xInt += 1;
    }
    return 'success!';
  }

  verticalShipPlace(x, y, ship, coordinatesArr) {
    let yInt = y;
    let { length } = ship;
    while (length !== 0) {
      if (yInt + (length - 1) > 9 || yInt < 0) {
        console.log('invalid coordinates', x, y, ship);
        return 'invalid coordinates';
      }
      this.board[yInt][x] = ship;
      coordinatesArr.push([yInt, x]);
      length -= 1;
      yInt += 1;
    }
    return 'success!';
  }

  placeShip(x, y, ship, direction) {
    const coordinatesArr = [];
    let results;
    if (this.board[y][x] !== null) {
      return 'invalid coordinates';
    }
    if (direction === 'horizontal') {
      results = this.horizontalShipPlace(x, y, ship, coordinatesArr);
    } else if (direction === 'vertical') {
      results = this.verticalShipPlace(x, y, ship, coordinatesArr);
    }
    if (results !== 'invalid coordinates') {
      this.shipsToPlace -= 1;
      console.log(this.shipsToPlace);
    }
    return results;
  }

  receiveAttack(x, y) {
    if (x > 9 || x < 0 || y > 9 || y < 0) {
      return 'invalid coordinates';
    }
    if (this.board[y][x] === null) {
      this.missedAttacks += 1;
      return `missed! ${this.missedAttacks}`;
    }
    const ship = this.board[y][x];
    const hitResults = ship.hit();
    if (hitResults === 'sunk!') {
      this.shipsAlive -= 1;
    }
    return `hit! ${hitResults}`;
  }

  checkShipsAlive() {
    if (this.shipsAlive === 0) {
      return 'game over';
    }
    return this.shipsAlive;
  }

  getShipsToPlace() {
    return this.shipsToPlace;
  }

  // eslint-disable-next-line class-methods-use-this
  getComputerChoice() {
    const randomInt = Math.floor(Math.random() * this.computerChoiceOpts);
    const choice = this.computerChoiceBank[randomInt];
    const removeChoice = this.computerChoiceBank.splice(randomInt, 1);
    this.computerChoiceOpts -= 1;
    console.log(removeChoice, this.computerChoiceBank);
    return choice;
  }
}


/***/ }),

/***/ "./src/gameComponents/ship.js":
/*!************************************!*\
  !*** ./src/gameComponents/ship.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
  constructor(length) {
    this.length = length;
    this.hitTracker = 0;
    this.sunk = false;
  }

  hit() {
    this.hitTracker += 1;
    this.isSunk();
    if (this.sunk === true) {
      return 'sunk!';
    }
    return this.hitTracker;
  }

  isSunk() {
    if (this.hitTracker === this.length) {
      this.sunk = true;
      return true;
    }
    return false;
  }
}


/***/ }),

/***/ "./src/images/boat-horizontal.png":
/*!****************************************!*\
  !*** ./src/images/boat-horizontal.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/boat-horizontal";

/***/ }),

/***/ "./src/images/boat2.png":
/*!******************************!*\
  !*** ./src/images/boat2.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/boat2";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Jhc2ljcHJvamVjdHNldHVwLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vYmFzaWNwcm9qZWN0c2V0dXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2Jhc2ljcHJvamVjdHNldHVwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmFzaWNwcm9qZWN0c2V0dXAvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL2Jhc2ljcHJvamVjdHNldHVwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2Jhc2ljcHJvamVjdHNldHVwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXNpY3Byb2plY3RzZXR1cC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXNpY3Byb2plY3RzZXR1cC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXNpY3Byb2plY3RzZXR1cC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2Jhc2ljcHJvamVjdHNldHVwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmFzaWNwcm9qZWN0c2V0dXAvLi9zcmMvYXBwLmpzIiwid2VicGFjazovL2Jhc2ljcHJvamVjdHNldHVwLy4vc3JjL2RvbXN0dWZmLmpzIiwid2VicGFjazovL2Jhc2ljcHJvamVjdHNldHVwLy4vc3JjL2dhbWVDb21wb25lbnRzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXNpY3Byb2plY3RzZXR1cC8uL3NyYy9nYW1lQ29tcG9uZW50cy9zaGlwLmpzIiwid2VicGFjazovL2Jhc2ljcHJvamVjdHNldHVwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Jhc2ljcHJvamVjdHNldHVwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2Jhc2ljcHJvamVjdHNldHVwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXNpY3Byb2plY3RzZXR1cC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2Jhc2ljcHJvamVjdHNldHVwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmFzaWNwcm9qZWN0c2V0dXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXNpY3Byb2plY3RzZXR1cC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXNpY3Byb2plY3RzZXR1cC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmFzaWNwcm9qZWN0c2V0dXAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXNpY3Byb2plY3RzZXR1cC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmFzaWNwcm9qZWN0c2V0dXAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBoMSB7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLmdhbWVib2FyZC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiA1MHB4O1xyXG59XHJcbi5ib2FyZC1yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmJvYXJkLXVuaXQge1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IG5vbmU7XHJcbn1cclxuLmNvbXB1dGVyOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGN5YW47XHJcbn1cclxuXHJcbi5zaGlwIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGI1MzIwO1xyXG59XHJcblxyXG4ubWlzc2VkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xyXG59XHJcbi5oaXQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlYmVjY2FwdXJwbGU7XHJcbn1cclxuLmdhbWUtcGllY2UtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGdhcDogMjBweDtcclxufVxyXG4uc2hpcC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG59XHJcbi5zbGlkZXItY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDIwcHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLnNsaWRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogNTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5kaXJlY3Rpb24ge1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgd2lkdGg6IDUwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ob3Jpem9udGFsIHtcclxuICBsZWZ0OiAwO1xyXG59XHJcbi52ZXJ0aWNhbCB7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5oaWRlIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uYmF0dGxlc2hpcCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG59XHJcblxyXG4uc21hbGxTaGlwIHtcclxuICBoZWlnaHQ6IDEwOHB4O1xyXG4gIHdpZHRoOiA1NHB4O1xyXG59XHJcbi5tZWRTaGlwIHtcclxuICBoZWlnaHQ6IDE2MnB4O1xyXG4gIHdpZHRoOiA1NHB4O1xyXG59XHJcbi5sYXJnZVNoaXAge1xyXG4gIGhlaWdodDogMjcwcHg7XHJcbiAgd2lkdGg6IDU0cHg7XHJcbn1cclxuXHJcbi5yb3RhdGUge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxufVxyXG5cclxuLnNoaXAtY29udGFpbmVyLXZlcnRpY2FsIHtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFNBQVM7QUFDWDtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsK0JBQStCO0FBQ2pDO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxTQUFTO0FBQ1g7QUFDQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsU0FBUztFQUNULHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osVUFBVTtFQUNWLDJCQUEyQjtFQUMzQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLE9BQU87QUFDVDtBQUNBO0VBQ0UsUUFBUTtBQUNWOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztBQUNiO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsV0FBVztBQUNiO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImgxIHtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbi5nYW1lYm9hcmQtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogNTBweDtcXHJcXG59XFxyXFxuLmJvYXJkLXJvdyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbi5ib2FyZC11bml0IHtcXHJcXG4gIHdpZHRoOiA1MHB4O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBvdmVyZmxvdzogbm9uZTtcXHJcXG59XFxyXFxuLmNvbXB1dGVyOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y3lhbjtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRiNTMyMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1pc3NlZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcclxcbn1cXHJcXG4uaGl0IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlYmVjY2FwdXJwbGU7XFxyXFxufVxcclxcbi5nYW1lLXBpZWNlLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGdhcDogMjBweDtcXHJcXG59XFxyXFxuLnNoaXAtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB3aWR0aDogNDAwcHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGhlaWdodDogMzAwcHg7XFxyXFxufVxcclxcbi5zbGlkZXItY29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMjAwcHg7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5kaXJlY3Rpb24ge1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ob3Jpem9udGFsIHtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxufVxcclxcbi52ZXJ0aWNhbCB7XFxyXFxuICByaWdodDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmJhdHRsZXNoaXAge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNtYWxsU2hpcCB7XFxyXFxuICBoZWlnaHQ6IDEwOHB4O1xcclxcbiAgd2lkdGg6IDU0cHg7XFxyXFxufVxcclxcbi5tZWRTaGlwIHtcXHJcXG4gIGhlaWdodDogMTYycHg7XFxyXFxuICB3aWR0aDogNTRweDtcXHJcXG59XFxyXFxuLmxhcmdlU2hpcCB7XFxyXFxuICBoZWlnaHQ6IDI3MHB4O1xcclxcbiAgd2lkdGg6IDU0cHg7XFxyXFxufVxcclxcblxcclxcbi5yb3RhdGUge1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1jb250YWluZXItdmVydGljYWwge1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLypcclxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xyXG4gIHZhciBsaXN0ID0gW107XHJcblxyXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcclxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xyXG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XHJcbiAgICAgIGlmIChpdGVtWzRdKSB7XHJcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpdGVtWzJdKSB7XHJcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAobmVlZExheWVyKSB7XHJcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcclxuICAgICAgaWYgKG5lZWRMYXllcikge1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGl0ZW1bMl0pIHtcclxuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpdGVtWzRdKSB7XHJcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gY29udGVudDtcclxuICAgIH0pLmpvaW4oXCJcIik7XHJcbiAgfTtcclxuXHJcbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcclxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xyXG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xyXG4gICAgfVxyXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcclxuICAgIGlmIChkZWR1cGUpIHtcclxuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcclxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XHJcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcclxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xyXG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAobWVkaWEpIHtcclxuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcclxuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XHJcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChzdXBwb3J0cykge1xyXG4gICAgICAgIGlmICghaXRlbVs0XSkge1xyXG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcclxuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIGxpc3Q7XHJcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xyXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcclxuICBpZiAoIWNzc01hcHBpbmcpIHtcclxuICAgIHJldHVybiBjb250ZW50O1xyXG4gIH1cclxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xyXG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xyXG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XHJcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XHJcbiAgfVxyXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcclxufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxudmFyIHN0eWxlc0luRE9NID0gW107XHJcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcclxuICB2YXIgcmVzdWx0ID0gLTE7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcclxuICAgICAgcmVzdWx0ID0gaTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcclxuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xyXG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xyXG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XHJcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xyXG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XHJcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcclxuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xyXG4gICAgdmFyIG9iaiA9IHtcclxuICAgICAgY3NzOiBpdGVtWzFdLFxyXG4gICAgICBtZWRpYTogaXRlbVsyXSxcclxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxyXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcclxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cclxuICAgIH07XHJcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XHJcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XHJcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xyXG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xyXG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xyXG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXHJcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcclxuICAgICAgICByZWZlcmVuY2VzOiAxXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcclxuICB9XHJcbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xyXG59XHJcbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcclxuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XHJcbiAgYXBpLnVwZGF0ZShvYmopO1xyXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcclxuICAgIGlmIChuZXdPYmopIHtcclxuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhcGkucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gdXBkYXRlcjtcclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XHJcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcbiAgbGlzdCA9IGxpc3QgfHwgW107XHJcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcclxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcclxuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XHJcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xyXG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xyXG4gICAgfVxyXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcclxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XHJcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XHJcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcclxuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcclxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xyXG4gIH07XHJcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG52YXIgbWVtbyA9IHt9O1xyXG5cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcclxuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xyXG5cclxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXHJcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcclxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xyXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxyXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XHJcbiAgfVxyXG4gIHJldHVybiBtZW1vW3RhcmdldF07XHJcbn1cclxuXHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xyXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcclxuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XHJcbiAgaWYgKCF0YXJnZXQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XHJcbiAgfVxyXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XHJcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XHJcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcclxuICByZXR1cm4gZWxlbWVudDtcclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xyXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XHJcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xyXG4gIGlmIChub25jZSkge1xyXG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcclxuICB9XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcclxuICB2YXIgY3NzID0gXCJcIjtcclxuICBpZiAob2JqLnN1cHBvcnRzKSB7XHJcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xyXG4gIH1cclxuICBpZiAob2JqLm1lZGlhKSB7XHJcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcclxuICB9XHJcbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XHJcbiAgaWYgKG5lZWRMYXllcikge1xyXG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xyXG4gIH1cclxuICBjc3MgKz0gb2JqLmNzcztcclxuICBpZiAobmVlZExheWVyKSB7XHJcbiAgICBjc3MgKz0gXCJ9XCI7XHJcbiAgfVxyXG4gIGlmIChvYmoubWVkaWEpIHtcclxuICAgIGNzcyArPSBcIn1cIjtcclxuICB9XHJcbiAgaWYgKG9iai5zdXBwb3J0cykge1xyXG4gICAgY3NzICs9IFwifVwiO1xyXG4gIH1cclxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcclxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcclxuICB9XHJcblxyXG4gIC8vIEZvciBvbGQgSUVcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXHJcbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcclxufVxyXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XHJcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXHJcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XHJcbn1cclxuXHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xyXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xyXG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXHJcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cclxuICAgIH07XHJcbiAgfVxyXG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcclxuICByZXR1cm4ge1xyXG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XHJcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcclxuICAgIH0sXHJcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcclxuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xyXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xyXG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xyXG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcclxuICB9IGVsc2Uge1xyXG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XHJcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XHJcbiAgICB9XHJcbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XHJcbiAgfVxyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xyXG5pbXBvcnQgR2FtZUJvYXJkIGZyb20gJy4vZ2FtZUNvbXBvbmVudHMvZ2FtZWJvYXJkJztcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1jeWNsZVxyXG5pbXBvcnQgZG9tc3R1ZmYgZnJvbSAnLi9kb21zdHVmZic7XHJcblxyXG5jb25zdCBjcmVhdGVQbGF5ZXIgPSAoKSA9PiBuZXcgR2FtZUJvYXJkKCk7XHJcbmxldCBjb21wdXRlciA9IGNyZWF0ZVBsYXllcigpO1xyXG5sZXQgcGxheWVyMSA9IGNyZWF0ZVBsYXllcigpO1xyXG5sZXQgY3VycmVudERpcmVjdGlvbiA9ICdob3Jpem9udGFsJztcclxuXHJcbmNvbnN0IHJhbmRvbURpcmVjdGlvbiA9ICgpID0+IHtcclxuICBpZiAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApIDwgNSkge1xyXG4gICAgcmV0dXJuICdob3Jpem9udGFsJztcclxuICB9XHJcbiAgcmV0dXJuICd2ZXJ0aWNhbCc7XHJcbn07XHJcblxyXG5jb25zdCByYW5kb21Db29yZGluYXRlcyA9IChzaGlwLCBib2FyZCkgPT4ge1xyXG4gIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgY29uc3QgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICBjb25zdCBkaXJlY3Rpb24gPSByYW5kb21EaXJlY3Rpb24oKTtcclxuICBsZXQgcmVzdWx0cztcclxuICBpZiAoYm9hcmRbeV1beF0gIT09IG51bGwpIHtcclxuICAgIHJldHVybiByYW5kb21Db29yZGluYXRlcyhzaGlwLCBib2FyZCk7XHJcbiAgfVxyXG4gIGlmIChkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJyAmJiB4ICsgKHNoaXAubGVuZ3RoIC0gMSkgPD0gOSkge1xyXG4gICAgcmVzdWx0cyA9IFt4LCB5LCBkaXJlY3Rpb25dO1xyXG4gIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAndmVydGljYWwnICYmIHkgKyAoc2hpcC5sZW5ndGggLSAxKSA8PSA5KSB7XHJcbiAgICByZXN1bHRzID0gW3gsIHksIGRpcmVjdGlvbl07XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiByYW5kb21Db29yZGluYXRlcyhzaGlwLCBib2FyZCk7XHJcbiAgfVxyXG4gIHJldHVybiByZXN1bHRzO1xyXG59O1xyXG5cclxuY29uc3QgcmFuZG9tbHlQbGFjZVNoaXBzID0gKHBsYXllcikgPT4ge1xyXG4gIGNvbnN0IGFsbFNoaXBzID0gW3BsYXllci5zbWFsbFNoaXAsIHBsYXllci5tZWRTaGlwLCBwbGF5ZXIubHJnU2hpcF07XHJcbiAgYWxsU2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xyXG4gICAgY29uc3QgY29vcmRpbmF0ZXMgPSByYW5kb21Db29yZGluYXRlcyhzaGlwLCBwbGF5ZXIuYm9hcmQpO1xyXG4gICAgcGxheWVyLnBsYWNlU2hpcChjb29yZGluYXRlc1swXSwgY29vcmRpbmF0ZXNbMV0sIHNoaXAsIGNvb3JkaW5hdGVzWzJdKTtcclxuICB9KTtcclxuICByZXR1cm4gJ3N1Y2Nlc3MnO1xyXG59O1xyXG5cclxuY29uc3QgZ2FtZUxvb3AgPSAoKSA9PiB7XHJcbiAgcmFuZG9tbHlQbGFjZVNoaXBzKGNvbXB1dGVyKTtcclxuICBjb21wdXRlci5zZXRDb21wdXRlckNob2ljZUJhbmsoKTtcclxuICBkb21zdHVmZi5jcmVhdGVQbGF5ZXJCb2FyZChwbGF5ZXIxLmJvYXJkKTtcclxuICBkb21zdHVmZi5jcmVhdGVQbGF5ZXJCb2FyZChjb21wdXRlci5ib2FyZCwgdHJ1ZSk7XHJcbiAgZG9tc3R1ZmYuY3JlYXRlU2hpcExpc3QocGxheWVyMSk7XHJcbn07XHJcblxyXG5jb25zdCBoYW5kbGVHYW1lT3ZlciA9ICgpID0+IHtcclxuICBjb21wdXRlciA9IGNyZWF0ZVBsYXllcigpO1xyXG4gIHBsYXllcjEgPSBjcmVhdGVQbGF5ZXIoKTtcclxuICBkb21zdHVmZi5yZXNldCgpO1xyXG4gIGdhbWVMb29wKCk7XHJcbn07XHJcblxyXG5jb25zdCBjaGVja0hpdFJlc3VsdHMgPSAocmVzdWx0cywgc3BvdCkgPT4ge1xyXG4gIGlmIChyZXN1bHRzLmluY2x1ZGVzKCdoaXQhJykpIHtcclxuICAgIGRvbXN0dWZmLnRhcmdldEhpdChzcG90KTtcclxuICAgIHJldHVybiBjb25zb2xlLmxvZygncGxheWVyIDEgaGl0Jyk7XHJcbiAgfVxyXG4gIGlmIChyZXN1bHRzLmluY2x1ZGVzKCdtaXNzJykpIHtcclxuICAgIGRvbXN0dWZmLnRhcmdldE1pc3NlZChzcG90KTtcclxuICAgIHJldHVybiBjb25zb2xlLmxvZygnY29tcHV0ZXIgbWlzc2VkIHlhIG5lcmQnKTtcclxuICB9XHJcbiAgaWYgKHJlc3VsdHMgPT09ICdnYW1lIG92ZXInKSB7XHJcbiAgICByZXR1cm4gaGFuZGxlR2FtZU92ZXIoKTtcclxuICB9XHJcbiAgcmV0dXJuIHJlc3VsdHM7XHJcbn07XHJcblxyXG4vLyBFdmVudCBIYW5kbGVycyA9PT09PT0+XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVEcm9wKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3QgY29vcmRpbmF0ZXMgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2V0Jykuc3BsaXQoJywnKTtcclxuICBjb25zdCBkYXRhID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgndGV4dCcpO1xyXG4gIGNvbnN0IHNoaXBJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGF0YSk7XHJcbiAgY29uc3QgbGVuZ3RoID0gTnVtYmVyKHNoaXBJY29uLmdldEF0dHJpYnV0ZSgnaWQnKSk7XHJcblxyXG4gIHBsYXllcjEuYWxsU2hpcHMuZm9yRWFjaCgoYm9hdCkgPT4ge1xyXG4gICAgaWYgKGJvYXQubGVuZ3RoID09PSBsZW5ndGgpIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHBsYXllcjFcclxuICAgICAgICAgIC5wbGFjZVNoaXAoTnVtYmVyKGNvb3JkaW5hdGVzWzBdKSwgTnVtYmVyKGNvb3JkaW5hdGVzWzFdKSwgYm9hdCwgY3VycmVudERpcmVjdGlvbilcclxuICAgICAgICAgIC5pbmNsdWRlcygnaW52YWxpZCBjb29yZGluYXRlcycpXHJcbiAgICAgICkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciEgY2Fubm90IHBsYWNlIHNoaXAnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhwbGF5ZXIxLmJvYXJkKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBlLnRhcmdldC5hcHBlbmRDaGlsZChzaGlwSWNvbik7XHJcbiAgICAgICAgc2hpcEljb24uc2V0QXR0cmlidXRlKCdkcmFnZ2FibGUnLCBmYWxzZSk7XHJcbiAgICAgICAgc2hpcEljb24uc2V0QXR0cmlidXRlKCdkYXRhLXNldCcsIGNvb3JkaW5hdGVzKTtcclxuICAgICAgICBzaGlwSWNvbi5jbGFzc0xpc3QuYWRkKCdiYXR0bGVzaGlwJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocGxheWVyMS5ib2FyZCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuICBpZiAocGxheWVyMS5nZXRTaGlwc1RvUGxhY2UoKSA8IDEpIHtcclxuICAgIGRvbXN0dWZmLnJlbW92ZUhpZGRlbkNsYXNzKCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVTbGlkZXJUb2dnbGUoKSB7XHJcbiAgaWYgKGN1cnJlbnREaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xyXG4gICAgY3VycmVudERpcmVjdGlvbiA9ICd2ZXJ0aWNhbCc7XHJcbiAgfSBlbHNlIHtcclxuICAgIGN1cnJlbnREaXJlY3Rpb24gPSAnaG9yaXpvbnRhbCc7XHJcbiAgfVxyXG4gIGRvbXN0dWZmLnRvZ2dsZVNsaWRlcigpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVEcmFnU3RhcnQoZSkge1xyXG4gIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQnLCBlLnRhcmdldC5pZCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUNvbXB1dGVyQXR0YWNrKCkge1xyXG4gIGNvbnN0IGNob2ljZSA9IGNvbXB1dGVyLmdldENvbXB1dGVyQ2hvaWNlKCk7XHJcbiAgY29uc3Qgc3BvdCA9IGRvbXN0dWZmLmdldFNwb3QoY2hvaWNlKTtcclxuICBjb25zdCBoaXRSZXN1bHRzID0gcGxheWVyMS5yZWNlaXZlQXR0YWNrKGNob2ljZVswXSwgY2hvaWNlWzFdKTtcclxuICBjb25zb2xlLmxvZygncGxheWVyIHNoaXBzIGFsaXZlOicsIHBsYXllcjEuY2hlY2tTaGlwc0FsaXZlKCkpO1xyXG4gIHJldHVybiBjaGVja0hpdFJlc3VsdHMoaGl0UmVzdWx0cywgc3BvdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZVNlbmRBdHRhY2soZSkge1xyXG4gIGNvbnN0IHNlbGVjdGVkU3BvdCA9IGUudGFyZ2V0O1xyXG4gIGlmIChzZWxlY3RlZFNwb3QuaGFzQXR0cmlidXRlKCdkYXRhLXRhcmdldGVkJykpIHtcclxuICAgIHJldHVybiBhbGVydCgnZG9udCBkbyB0aGlzJyk7XHJcbiAgfVxyXG4gIGNvbnN0IGNvb3JkaW5hdGVzU3RyaW5nID0gc2VsZWN0ZWRTcG90LmdldEF0dHJpYnV0ZSgnZGF0YS1zZXQnKTtcclxuICBjb25zdCBjb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzU3RyaW5nLnNwbGl0KCcsJyk7XHJcbiAgY29uc3QgaGl0UmVzdWx0cyA9IGNvbXB1dGVyLnJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZXNbMF0sIGNvb3JkaW5hdGVzWzFdKTtcclxuICBjb25zb2xlLmxvZygnY29tcHV0ZXIgc2hpcHMgYWxpdmU6JywgY29tcHV0ZXIuY2hlY2tTaGlwc0FsaXZlKCkpO1xyXG4gIGhhbmRsZUNvbXB1dGVyQXR0YWNrKCk7XHJcbiAgcmV0dXJuIGNoZWNrSGl0UmVzdWx0cyhoaXRSZXN1bHRzLCBzZWxlY3RlZFNwb3QpO1xyXG59XHJcblxyXG5nYW1lTG9vcCgpO1xyXG5cclxuZXhwb3J0IHtcclxuICByYW5kb21seVBsYWNlU2hpcHMsXHJcbiAgZ2FtZUxvb3AsXHJcbiAgaGFuZGxlU2VuZEF0dGFjayxcclxuICBoYW5kbGVHYW1lT3ZlcixcclxuICBoYW5kbGVDb21wdXRlckF0dGFjayxcclxuICBoYW5kbGVEcmFnU3RhcnQsXHJcbiAgaGFuZGxlRHJvcCxcclxuICBoYW5kbGVTbGlkZXJUb2dnbGUsXHJcbn07XHJcbiIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tY3ljbGVcclxuaW1wb3J0IHsgaGFuZGxlU2VuZEF0dGFjaywgaGFuZGxlRHJhZ1N0YXJ0LCBoYW5kbGVEcm9wLCBoYW5kbGVTbGlkZXJUb2dnbGUgfSBmcm9tICcuL2FwcCc7XHJcbmltcG9ydCBzaGlwSW1nIGZyb20gJy4vaW1hZ2VzL2JvYXQyLnBuZyc7XHJcbmltcG9ydCBzaGlwSG9yaXpvbnRhbCBmcm9tICcuL2ltYWdlcy9ib2F0LWhvcml6b250YWwucG5nJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiBkb21zdHVmZigpIHtcclxuICBjb25zdCBib2FyZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lYm9hcmQtY29udGFpbmVyJyk7XHJcbiAgY29uc3Qgc2xpZGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlci1jb250YWluZXInKTtcclxuXHJcbiAgY29uc3QgcmVzZXQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBncmlkUm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkLXJvdycpO1xyXG4gICAgY29uc3QgcGxheWVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1jb250YWluZXInKTtcclxuICAgIHdoaWxlIChncmlkUm93LmZpcnN0Q2hpbGQpIHtcclxuICAgICAgZ3JpZFJvdy5yZW1vdmVDaGlsZChncmlkUm93LmZpcnN0Q2hpbGQpO1xyXG4gICAgfVxyXG4gICAgd2hpbGUgKHBsYXllckNvbnRhaW5lci5maXJzdENoaWxkKSB7XHJcbiAgICAgIHBsYXllckNvbnRhaW5lci5yZW1vdmVDaGlsZChwbGF5ZXJDb250YWluZXIubGFzdENoaWxkKTtcclxuICAgIH1cclxuICAgIGJvYXJkQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNyZWF0ZVBsYXllckJvYXJkID0gKGJvYXJkLCBjb21wdXRlciA9IGZhbHNlKSA9PiB7XHJcbiAgICBjb25zdCBwbGF5ZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHBsYXllckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItY29udGFpbmVyJyk7XHJcbiAgICBib2FyZENvbnRhaW5lci5hcHBlbmQocGxheWVyQ29udGFpbmVyKTtcclxuICAgIGJvYXJkLmZvckVhY2goKHJvdykgPT4ge1xyXG4gICAgICBjb25zdCBncmlkUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIGNvbnN0IHJvd0luZGV4ID0gYm9hcmQuaW5kZXhPZihyb3cpO1xyXG4gICAgICBncmlkUm93LmNsYXNzTGlzdC5hZGQoJ2JvYXJkLXJvdycpO1xyXG4gICAgICBwbGF5ZXJDb250YWluZXIucHJlcGVuZChncmlkUm93KTtcclxuICAgICAgZ3JpZFJvdy5zZXRBdHRyaWJ1dGUoJ2RhdGEtcm93JywgYm9hcmQuaW5kZXhPZihyb3cpKTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3cubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgICBjb25zdCBncmlkVW5pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IHNwb3RJbmRleCA9IGk7XHJcbiAgICAgICAgaWYgKHJvd1tpXSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgZ3JpZFVuaXQuY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBncmlkVW5pdC5jbGFzc0xpc3QuYWRkKCdib2FyZC11bml0Jyk7XHJcbiAgICAgICAgZ3JpZFVuaXQuc2V0QXR0cmlidXRlKCdkYXRhLXNldCcsIFtzcG90SW5kZXgsIHJvd0luZGV4XSk7XHJcblxyXG4gICAgICAgIGdyaWRVbml0LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBoYW5kbGVEcm9wKTtcclxuICAgICAgICBpZiAoY29tcHV0ZXIgPT09IHRydWUpIHtcclxuICAgICAgICAgIHBsYXllckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb21wdXRlci1jb250YWluZXInLCAnaGlkZScpO1xyXG4gICAgICAgICAgZ3JpZFVuaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVTZW5kQXR0YWNrKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZ3JpZFVuaXQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZ3JpZFJvdy5hcHBlbmQoZ3JpZFVuaXQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW1vdmVIaWRkZW5DbGFzcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNvbXB1dGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXB1dGVyLWNvbnRhaW5lcicpO1xyXG4gICAgY29tcHV0ZXJDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG4gICAgc2xpZGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjcmVhdGVTaGlwTGlzdCA9IChwbGF5ZXIpID0+IHtcclxuICAgIGNvbnN0IHNoaXBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcC1jb250YWluZXInKTtcclxuICAgIGNvbnN0IHNoaXBDbGFzc2VzID0gWydzbWFsbFNoaXAnLCAnbWVkU2hpcCcsICdsYXJnZVNoaXAnXTtcclxuICAgIHBsYXllci5hbGxTaGlwcy5mb3JFYWNoKChib2F0KSA9PiB7XHJcbiAgICAgIGNvbnN0IHNoaXBJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgIHNoaXBJY29uLnNyYyA9IHNoaXBJbWc7XHJcbiAgICAgIHNoaXBJY29uLmNsYXNzTGlzdC5hZGQoc2hpcENsYXNzZXNbMF0sICdwbGF5ZXItMS1zaGlwJywgJ3JvdGF0ZScpO1xyXG4gICAgICBzaGlwSWNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgYm9hdC5sZW5ndGgpO1xyXG4gICAgICBzaGlwSWNvbi5zZXRBdHRyaWJ1dGUoJ2RyYWdnYWJsZScsIHRydWUpO1xyXG4gICAgICBzaGlwSWNvbi5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBoYW5kbGVEcmFnU3RhcnQpO1xyXG4gICAgICBzaGlwQ29udGFpbmVyLmFwcGVuZChzaGlwSG9yaXpvbnRhbCk7XHJcbiAgICAgIHNoaXBDbGFzc2VzLnNwbGljZSgwLCAxKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRhcmdldE1pc3NlZCA9ICh1bml0KSA9PiB7XHJcbiAgICB1bml0LmNsYXNzTGlzdC5hZGQoJ21pc3NlZCcpO1xyXG4gICAgdW5pdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0ZWQnLCB0cnVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCB0YXJnZXRIaXQgPSAodW5pdCkgPT4ge1xyXG4gICAgdW5pdC5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcclxuICAgIHVuaXQuc2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldGVkJywgdHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0U3BvdCA9IChjb29yZGluYXRlcykgPT4ge1xyXG4gICAgY29uc3Qgc3BvdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXNldD1cIiR7Y29vcmRpbmF0ZXNbMF19LCR7Y29vcmRpbmF0ZXNbMV19XCJdYCk7XHJcbiAgICByZXR1cm4gc3BvdDtcclxuICB9O1xyXG5cclxuICBjb25zdCB0dXJuU2hpcHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5ZXItMS1zaGlwJyk7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcC1jb250YWluZXInKTtcclxuICAgIHNoaXBzLmZvckVhY2goKGJvYXQpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coYm9hdCk7XHJcbiAgICAgIGlmIChib2F0LmNsYXNzTGlzdC5jb250YWlucygncm90YXRlJykpIHtcclxuICAgICAgICBib2F0LmNsYXNzTGlzdC5yZW1vdmUoJ3JvdGF0ZScpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGJvYXQuY2xhc3NMaXN0LmFkZCgncm90YXRlJyk7XHJcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NoaXAtY29udGFpbmVyLXZlcnRpY2FsJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRvZ2dsZVNsaWRlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IHNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzbGlkZXInKTtcclxuICAgIGlmIChzbGlkZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdob3Jpem9udGFsJykpIHtcclxuICAgICAgc2xpZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hvcml6b250YWwnKTtcclxuICAgICAgc2xpZGVyLmNsYXNzTGlzdC5hZGQoJ3ZlcnRpY2FsJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzbGlkZXIuY2xhc3NMaXN0LnJlbW92ZSgndmVydGljYWwnKTtcclxuICAgICAgc2xpZGVyLmNsYXNzTGlzdC5hZGQoJ2hvcml6b250YWwnKTtcclxuICAgIH1cclxuICAgIHR1cm5TaGlwcygpO1xyXG4gIH07XHJcblxyXG4gIHNsaWRlckNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVNsaWRlclRvZ2dsZSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBoYW5kbGVTZW5kQXR0YWNrLFxyXG4gICAgY3JlYXRlUGxheWVyQm9hcmQsXHJcbiAgICByZXNldCxcclxuICAgIHRhcmdldE1pc3NlZCxcclxuICAgIHRhcmdldEhpdCxcclxuICAgIGdldFNwb3QsXHJcbiAgICBjcmVhdGVTaGlwTGlzdCxcclxuICAgIHRvZ2dsZVNsaWRlcixcclxuICAgIHJlbW92ZUhpZGRlbkNsYXNzLFxyXG4gIH07XHJcbn0pKCk7XHJcbiIsImltcG9ydCBTaGlwIGZyb20gJy4vc2hpcCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQm9hcmQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5ib2FyZCA9IFsuLi5uZXcgQXJyYXkoMTApXS5tYXAoKCkgPT4gbmV3IEFycmF5KDEwKS5maWxsKG51bGwpKTtcclxuICAgIHRoaXMuaXNUdXJuID0gZmFsc2U7XHJcbiAgICB0aGlzLm1pc3NlZEF0dGFja3MgPSAwO1xyXG4gICAgdGhpcy5jb21wdXRlckNob2ljZUJhbmsgPSBudWxsO1xyXG4gICAgdGhpcy5jb21wdXRlckNob2ljZU9wdHMgPSAxMDA7XHJcbiAgICB0aGlzLnNoaXBzQWxpdmUgPSAzO1xyXG4gICAgdGhpcy5zbWFsbFNoaXAgPSBuZXcgU2hpcCgyKTtcclxuICAgIHRoaXMubWVkU2hpcCA9IG5ldyBTaGlwKDMpO1xyXG4gICAgdGhpcy5scmdTaGlwID0gbmV3IFNoaXAoNSk7XHJcbiAgICB0aGlzLmFsbFNoaXBzID0gW3RoaXMuc21hbGxTaGlwLCB0aGlzLm1lZFNoaXAsIHRoaXMubHJnU2hpcF07XHJcbiAgICB0aGlzLnNoaXBzVG9QbGFjZSA9IDM7XHJcbiAgfVxyXG5cclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2xhc3MtbWV0aG9kcy11c2UtdGhpc1xyXG4gIHNldENvbXB1dGVyQ2hvaWNlQmFuaygpIHtcclxuICAgIGNvbnN0IGNvcHkgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICs9IDEpIHtcclxuICAgICAgICBjb3B5LnB1c2goW2ksIGpdKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5jb21wdXRlckNob2ljZUJhbmsgPSBjb3B5O1xyXG4gIH1cclxuXHJcbiAgaG9yaXpvbnRhbFNoaXBQbGFjZSh4LCB5LCBzaGlwLCBjb29yZGluYXRlc0Fycikge1xyXG4gICAgbGV0IHhJbnQgPSB4O1xyXG4gICAgbGV0IHsgbGVuZ3RoIH0gPSBzaGlwO1xyXG4gICAgd2hpbGUgKGxlbmd0aCAhPT0gMCkge1xyXG4gICAgICBpZiAoeEludCArIChsZW5ndGggLSAxKSA+IDkgfHwgeEludCA8IDApIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnaW52YWxpZCBjb29yZGluYXRlcycsIHgsIHksIHNoaXApO1xyXG4gICAgICAgIHJldHVybiAnaW52YWxpZCBjb29yZGluYXRlcyc7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5ib2FyZFt5XVt4SW50XSA9IHNoaXA7XHJcbiAgICAgIGNvb3JkaW5hdGVzQXJyLnB1c2goW3hJbnQsIHldKTtcclxuICAgICAgbGVuZ3RoIC09IDE7XHJcbiAgICAgIHhJbnQgKz0gMTtcclxuICAgIH1cclxuICAgIHJldHVybiAnc3VjY2VzcyEnO1xyXG4gIH1cclxuXHJcbiAgdmVydGljYWxTaGlwUGxhY2UoeCwgeSwgc2hpcCwgY29vcmRpbmF0ZXNBcnIpIHtcclxuICAgIGxldCB5SW50ID0geTtcclxuICAgIGxldCB7IGxlbmd0aCB9ID0gc2hpcDtcclxuICAgIHdoaWxlIChsZW5ndGggIT09IDApIHtcclxuICAgICAgaWYgKHlJbnQgKyAobGVuZ3RoIC0gMSkgPiA5IHx8IHlJbnQgPCAwKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2ludmFsaWQgY29vcmRpbmF0ZXMnLCB4LCB5LCBzaGlwKTtcclxuICAgICAgICByZXR1cm4gJ2ludmFsaWQgY29vcmRpbmF0ZXMnO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuYm9hcmRbeUludF1beF0gPSBzaGlwO1xyXG4gICAgICBjb29yZGluYXRlc0Fyci5wdXNoKFt5SW50LCB4XSk7XHJcbiAgICAgIGxlbmd0aCAtPSAxO1xyXG4gICAgICB5SW50ICs9IDE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gJ3N1Y2Nlc3MhJztcclxuICB9XHJcblxyXG4gIHBsYWNlU2hpcCh4LCB5LCBzaGlwLCBkaXJlY3Rpb24pIHtcclxuICAgIGNvbnN0IGNvb3JkaW5hdGVzQXJyID0gW107XHJcbiAgICBsZXQgcmVzdWx0cztcclxuICAgIGlmICh0aGlzLmJvYXJkW3ldW3hdICE9PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiAnaW52YWxpZCBjb29yZGluYXRlcyc7XHJcbiAgICB9XHJcbiAgICBpZiAoZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgcmVzdWx0cyA9IHRoaXMuaG9yaXpvbnRhbFNoaXBQbGFjZSh4LCB5LCBzaGlwLCBjb29yZGluYXRlc0Fycik7XHJcbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xyXG4gICAgICByZXN1bHRzID0gdGhpcy52ZXJ0aWNhbFNoaXBQbGFjZSh4LCB5LCBzaGlwLCBjb29yZGluYXRlc0Fycik7XHJcbiAgICB9XHJcbiAgICBpZiAocmVzdWx0cyAhPT0gJ2ludmFsaWQgY29vcmRpbmF0ZXMnKSB7XHJcbiAgICAgIHRoaXMuc2hpcHNUb1BsYWNlIC09IDE7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2hpcHNUb1BsYWNlKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHRzO1xyXG4gIH1cclxuXHJcbiAgcmVjZWl2ZUF0dGFjayh4LCB5KSB7XHJcbiAgICBpZiAoeCA+IDkgfHwgeCA8IDAgfHwgeSA+IDkgfHwgeSA8IDApIHtcclxuICAgICAgcmV0dXJuICdpbnZhbGlkIGNvb3JkaW5hdGVzJztcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmJvYXJkW3ldW3hdID09PSBudWxsKSB7XHJcbiAgICAgIHRoaXMubWlzc2VkQXR0YWNrcyArPSAxO1xyXG4gICAgICByZXR1cm4gYG1pc3NlZCEgJHt0aGlzLm1pc3NlZEF0dGFja3N9YDtcclxuICAgIH1cclxuICAgIGNvbnN0IHNoaXAgPSB0aGlzLmJvYXJkW3ldW3hdO1xyXG4gICAgY29uc3QgaGl0UmVzdWx0cyA9IHNoaXAuaGl0KCk7XHJcbiAgICBpZiAoaGl0UmVzdWx0cyA9PT0gJ3N1bmshJykge1xyXG4gICAgICB0aGlzLnNoaXBzQWxpdmUgLT0gMTtcclxuICAgIH1cclxuICAgIHJldHVybiBgaGl0ISAke2hpdFJlc3VsdHN9YDtcclxuICB9XHJcblxyXG4gIGNoZWNrU2hpcHNBbGl2ZSgpIHtcclxuICAgIGlmICh0aGlzLnNoaXBzQWxpdmUgPT09IDApIHtcclxuICAgICAgcmV0dXJuICdnYW1lIG92ZXInO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuc2hpcHNBbGl2ZTtcclxuICB9XHJcblxyXG4gIGdldFNoaXBzVG9QbGFjZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnNoaXBzVG9QbGFjZTtcclxuICB9XHJcblxyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzXHJcbiAgZ2V0Q29tcHV0ZXJDaG9pY2UoKSB7XHJcbiAgICBjb25zdCByYW5kb21JbnQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmNvbXB1dGVyQ2hvaWNlT3B0cyk7XHJcbiAgICBjb25zdCBjaG9pY2UgPSB0aGlzLmNvbXB1dGVyQ2hvaWNlQmFua1tyYW5kb21JbnRdO1xyXG4gICAgY29uc3QgcmVtb3ZlQ2hvaWNlID0gdGhpcy5jb21wdXRlckNob2ljZUJhbmsuc3BsaWNlKHJhbmRvbUludCwgMSk7XHJcbiAgICB0aGlzLmNvbXB1dGVyQ2hvaWNlT3B0cyAtPSAxO1xyXG4gICAgY29uc29sZS5sb2cocmVtb3ZlQ2hvaWNlLCB0aGlzLmNvbXB1dGVyQ2hvaWNlQmFuayk7XHJcbiAgICByZXR1cm4gY2hvaWNlO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwIHtcclxuICBjb25zdHJ1Y3RvcihsZW5ndGgpIHtcclxuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xyXG4gICAgdGhpcy5oaXRUcmFja2VyID0gMDtcclxuICAgIHRoaXMuc3VuayA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgaGl0KCkge1xyXG4gICAgdGhpcy5oaXRUcmFja2VyICs9IDE7XHJcbiAgICB0aGlzLmlzU3VuaygpO1xyXG4gICAgaWYgKHRoaXMuc3VuayA9PT0gdHJ1ZSkge1xyXG4gICAgICByZXR1cm4gJ3N1bmshJztcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmhpdFRyYWNrZXI7XHJcbiAgfVxyXG5cclxuICBpc1N1bmsoKSB7XHJcbiAgICBpZiAodGhpcy5oaXRUcmFja2VyID09PSB0aGlzLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLnN1bmsgPSB0cnVlO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9hcHAuanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=