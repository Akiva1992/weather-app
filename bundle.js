/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
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
___CSS_LOADER_EXPORT___.push([module.id, `/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role='list'],
ol[role='list'],
ul,
ol,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* -------------------------------------------- */

body {
    display: flex;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.search-suggestions-container{
    display: none;
}

.search-suggestions-container.active{
    display: block;
    border: black 0.3px solid;
}

/* -------------Landing Page---------------------- */
.landing-page{
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.set-location-container{
  border: 1px black solid;
  border-radius: 4px;
  padding: 0.8rem 1.5rem;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,qBAAqB;AACrB;;;EAGE,sBAAsB;AACxB;;AAEA,0BAA0B;AAC1B;;;;;;;;;;EAUE,SAAS;AACX;;AAEA,2GAA2G;AAC3G;;;;;EAKE,gBAAgB;EAChB,SAAS;EACT,UAAU;AACZ;;AAEA,2BAA2B;AAC3B;EACE,uBAAuB;AACzB;;AAEA,2BAA2B;AAC3B;EACE,iBAAiB;EACjB,6BAA6B;EAC7B,gBAAgB;AAClB;;AAEA,0DAA0D;AAC1D;EACE,8BAA8B;AAChC;;AAEA,oCAAoC;AACpC;;EAEE,eAAe;EACf,cAAc;AAChB;;AAEA,yCAAyC;AACzC;;;;EAIE,aAAa;AACf;;AAEA,gGAAgG;AAChG;EACE;GACC,qBAAqB;EACtB;;EAEA;;;IAGE,qCAAqC;IACrC,uCAAuC;IACvC,sCAAsC;IACtC,gCAAgC;EAClC;AACF;;AAEA,iDAAiD;;AAEjD;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,cAAc;IACd,yBAAyB;AAC7B;;AAEA,oDAAoD;AACpD;EACE,gBAAgB;EAChB,aAAa;EACb,8BAA8B;EAC9B,SAAS;AACX;;AAEA;EACE,uBAAuB;EACvB,kBAAkB;EAClB,sBAAsB;AACxB","sourcesContent":["/* Box sizing rules */\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\n/* Remove default margin */\r\nbody,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\np,\r\nfigure,\r\nblockquote,\r\ndl,\r\ndd {\r\n  margin: 0;\r\n}\r\n\r\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\r\nul[role='list'],\r\nol[role='list'],\r\nul,\r\nol,\r\nli {\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n/* Set core root defaults */\r\nhtml:focus-within {\r\n  scroll-behavior: smooth;\r\n}\r\n\r\n/* Set core body defaults */\r\nbody {\r\n  min-height: 100vh;\r\n  text-rendering: optimizeSpeed;\r\n  line-height: 1.5;\r\n}\r\n\r\n/* A elements that don't have a class get default styles */\r\na:not([class]) {\r\n  text-decoration-skip-ink: auto;\r\n}\r\n\r\n/* Make images easier to work with */\r\nimg,\r\npicture {\r\n  max-width: 100%;\r\n  display: block;\r\n}\r\n\r\n/* Inherit fonts for inputs and buttons */\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n  font: inherit;\r\n}\r\n\r\n/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */\r\n@media (prefers-reduced-motion: reduce) {\r\n  html:focus-within {\r\n   scroll-behavior: auto;\r\n  }\r\n  \r\n  *,\r\n  *::before,\r\n  *::after {\r\n    animation-duration: 0.01ms !important;\r\n    animation-iteration-count: 1 !important;\r\n    transition-duration: 0.01ms !important;\r\n    scroll-behavior: auto !important;\r\n  }\r\n}\r\n\r\n/* -------------------------------------------- */\r\n\r\nbody {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.search-suggestions-container{\r\n    display: none;\r\n}\r\n\r\n.search-suggestions-container.active{\r\n    display: block;\r\n    border: black 0.3px solid;\r\n}\r\n\r\n/* -------------Landing Page---------------------- */\r\n.landing-page{\r\n  margin-top: 1rem;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  gap: 1rem;\r\n}\r\n\r\n.set-location-container{\r\n  border: 1px black solid;\r\n  border-radius: 4px;\r\n  padding: 0.8rem 1.5rem;\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/forecast-data-fetch-fns.js":
/*!****************************************!*\
  !*** ./src/forecast-data-fetch-fns.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchIpData: () => (/* binding */ fetchIpData),
/* harmony export */   getLocationSuggestions: () => (/* binding */ getLocationSuggestions),
/* harmony export */   getWeatherData: () => (/* binding */ getWeatherData)
/* harmony export */ });
/* harmony import */ var _render_location_suggestions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render-location-suggestions */ "./src/render-location-suggestions.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-page */ "./src/home-page.js");




async function fetchWeatherForecast(location) {
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=e0f276e0654440c6b4a212911232107&q=${location}&days=3&aqi=yes&alerts=yes`, { mode: "cors" });
  
      if (!response.ok) {
        throw new Error(response.statusText);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }


async function fetchIpData() {
    try {
      const response = await fetch("http://ip-api.com/json/?fields=1106141", { mode: "cors" });
  
      if (!response.ok) {
        throw new Error(response.statusText);
      }
  
      const data = await response.json();

      console.log(data)
      
      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }


async function fetchLocationSuggestions(location) {
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/search.json?key=e0f276e0654440c6b4a212911232107&q=${location}`, { mode: "cors" });
  
      if (!response.ok) {
        throw new Error(response.statusText);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }


  async function getWeatherData(location) {
      const data = await fetchWeatherForecast(location);
      console.log("data in get weather data")
      console.log(data)
      // currentWeatherPageController(data);
      // initHomePage(data)
      return data;
  }
  
  async function getLocationSuggestions(location) {
    try {
      const data = await fetchLocationSuggestions(location);
      // console.log(data)
      (0,_render_location_suggestions__WEBPACK_IMPORTED_MODULE_0__["default"])(data)
    } catch (error) {
      console.log(error);
    }
  }
  

/***/ }),

/***/ "./src/home-page-getters.js":
/*!**********************************!*\
  !*** ./src/home-page-getters.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getChanceOfRain: () => (/* binding */ getChanceOfRain),
/* harmony export */   getCityName: () => (/* binding */ getCityName),
/* harmony export */   getCountryName: () => (/* binding */ getCountryName),
/* harmony export */   getCurrentCloud: () => (/* binding */ getCurrentCloud),
/* harmony export */   getCurrentConditionCode: () => (/* binding */ getCurrentConditionCode),
/* harmony export */   getCurrentConditionText: () => (/* binding */ getCurrentConditionText),
/* harmony export */   getCurrentFeelsLikeTempInC: () => (/* binding */ getCurrentFeelsLikeTempInC),
/* harmony export */   getCurrentFeelsLikeTempInF: () => (/* binding */ getCurrentFeelsLikeTempInF),
/* harmony export */   getCurrentHumidity: () => (/* binding */ getCurrentHumidity),
/* harmony export */   getCurrentIsDay: () => (/* binding */ getCurrentIsDay),
/* harmony export */   getCurrentLastUpdatedEpoch: () => (/* binding */ getCurrentLastUpdatedEpoch),
/* harmony export */   getCurrentPrecipIn: () => (/* binding */ getCurrentPrecipIn),
/* harmony export */   getCurrentPrecipMm: () => (/* binding */ getCurrentPrecipMm),
/* harmony export */   getCurrentPressureIn: () => (/* binding */ getCurrentPressureIn),
/* harmony export */   getCurrentPressureMb: () => (/* binding */ getCurrentPressureMb),
/* harmony export */   getCurrentTempInC: () => (/* binding */ getCurrentTempInC),
/* harmony export */   getCurrentTempInF: () => (/* binding */ getCurrentTempInF),
/* harmony export */   getCurrentUv: () => (/* binding */ getCurrentUv),
/* harmony export */   getCurrentVisInKm: () => (/* binding */ getCurrentVisInKm),
/* harmony export */   getCurrentVisInMiles: () => (/* binding */ getCurrentVisInMiles),
/* harmony export */   getCurrentWindDirection: () => (/* binding */ getCurrentWindDirection),
/* harmony export */   getCurrentWindSpeedInKph: () => (/* binding */ getCurrentWindSpeedInKph),
/* harmony export */   getCurrentWindSpeedInMph: () => (/* binding */ getCurrentWindSpeedInMph),
/* harmony export */   getForecastSunrise: () => (/* binding */ getForecastSunrise),
/* harmony export */   getForecastSunset: () => (/* binding */ getForecastSunset)
/* harmony export */ });
function getCityName(data){
    return data.location.name
};
function getCountryName(data){
    return data.current.cloud
};

function getCurrentCloud(data){
    return data.current.cloud
};

function getCurrentConditionCode(data){
    return data.current.condition.code
};

function getCurrentConditionText(data){
    return data.current.condition.text
};

function getCurrentFeelsLikeTempInC(data){
    return data.current.feelslike_c
};

function getCurrentFeelsLikeTempInF(data){
    return data.current.feelslike_f
};

function getCurrentHumidity(data){
    return data.current.humidity
};

function getCurrentIsDay(data){
    return data.current.is_day
};

function getCurrentLastUpdatedEpoch(data){
    return data.current.last_updated_epoch
};

function getCurrentPrecipIn(data){
    return data.current.precip_in
};

function getCurrentPrecipMm(data){
    return data.current.precip_mm    
};

function getCurrentPressureIn(data){
    return data.current.pressure_In    
};

function getCurrentPressureMb(data){
    return data.current.pressure_mb    
};

function getCurrentTempInC(data){
    return data.current.temp_c
};
    
function getCurrentTempInF(data){
    return data.current.temp_f
};

function getCurrentUv(data){
    return data.current.uv    
};

function getCurrentVisInKm(data){
    return data.current.vis_km   
};

function getCurrentVisInMiles(data){
    return data.current.vis_miles   
};

function getCurrentWindDirection(data){
    return data.current.wind_dir
};

function getCurrentWindSpeedInKph(data){
    return data.current.wind_kph
};

function getCurrentWindSpeedInMph(data){
    return data.current.wind_mph
};

function getForecastSunrise(data, day){
    return data.forecast.forecastday[day].astro.sunrise
};

function getForecastSunset(data, day){
    return data.forecast.forecastday[day].astro.sunset
};

function getChanceOfRain(data, day){
    return data.forecast.forecastday[day].day.daily_chance_of_rain
};

/***/ }),

/***/ "./src/home-page.js":
/*!**************************!*\
  !*** ./src/home-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ currentWeatherPageController)
/* harmony export */ });
/* harmony import */ var _home_page_getters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-page-getters */ "./src/home-page-getters.js");
/* harmony import */ var _utility_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utility-fns */ "./src/utility-fns.js");



function formatResponseToLocalTimeAndDate(locationData){
    const options = {
        weekday: "short",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric", 
        hour12: true,
        timeZone: `${locationData.tz_id}`,
        timeZoneName: "short" 
    }
    const date = new Date(locationData.localtime_epoch * 1000);
    const localTimeAndDate = new Intl.DateTimeFormat("en-GB", options).format(date);
    return localTimeAndDate
};


function currentWeatherPageController(data){
    const currentData = data.current;
    const locationData = data.location;

    
    // console.log(data)
    console.log((0,_home_page_getters__WEBPACK_IMPORTED_MODULE_0__.getCurrentFeelsLikeTempInF)(data), (0,_home_page_getters__WEBPACK_IMPORTED_MODULE_0__.getCurrentFeelsLikeTempInC)(data), (0,_home_page_getters__WEBPACK_IMPORTED_MODULE_0__.getCurrentHumidity)(data))
    

    // setElementInnerText("name-txt", locationData.name);
    // setElementInnerText("country-txt", locationData.country);
    // setElementInnerText("region-txt", locationData.region);
    // setElementInnerText("local-time-txt", formatResponseToLocalTimeAndDate(locationData));
    // setElementInnerText("local-date-txt", formatDate(locationDate));

}






/***/ }),

/***/ "./src/landing-page.js":
/*!*****************************!*\
  !*** ./src/landing-page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ landingPageInit)
/* harmony export */ });
/* harmony import */ var _forecast_data_fetch_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forecast-data-fetch-fns */ "./src/forecast-data-fetch-fns.js");
/* harmony import */ var _home_page_getters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-page-getters */ "./src/home-page-getters.js");




function setCityName(className, name){
    document.querySelector(`.city-name${className}`).innerText = name;
}

function setCurrentTemp(className, temp){
    document.querySelector(`.current-temp${className}`).innerText = temp;
}

function setCurrentConditionsTxt(className, currentConditionsTxt){
    document.querySelector(`.current-conditions-txt${className}`).innerText = currentConditionsTxt;
}

function setCurrentConditionsLogo(className, currentConditionsLogo){
    document.querySelector(`.current-conditions-logo.${className}`).innerText = currentConditionsLogo;
}

function setVisTxt(className, visTxt ){
    document.querySelector(`.vis-txt${className}`).innerText = visTxt;
}

function setVisLogo(className, visLogo ){
    document.querySelector(`.vis-logo${className}`).innerHTML = visLogo;
}

function setSunrise(className, sunrise ){
    document.querySelector(`.sunrise${className}`).innerHTML = sunrise;
}

function setSunset(className, sunset ){
    document.querySelector(`.sunset${className}`).innerHTML = sunset;
}

function setChanceOfRain(className, chanceOfRain ){
    document.querySelector(`.daily-chance-of-rain${className}`).innerHTML = chanceOfRain;
}

function setLandingPageCardDetails(className, data){
    setCityName(className, (0,_home_page_getters__WEBPACK_IMPORTED_MODULE_1__.getCityName)(data))
    setCurrentTemp(className, `${(0,_home_page_getters__WEBPACK_IMPORTED_MODULE_1__.getCurrentTempInC)(data)} ℃`)
    setCurrentConditionsTxt(className, (0,_home_page_getters__WEBPACK_IMPORTED_MODULE_1__.getCurrentConditionText)(data))
    setVisTxt(className, `${(0,_home_page_getters__WEBPACK_IMPORTED_MODULE_1__.getCurrentVisInKm)(data)} K`);
    setSunrise(className, (0,_home_page_getters__WEBPACK_IMPORTED_MODULE_1__.getForecastSunrise)(data,0))
    setSunset(className, (0,_home_page_getters__WEBPACK_IMPORTED_MODULE_1__.getForecastSunset)(data,0))
    setChanceOfRain(className, `${(0,_home_page_getters__WEBPACK_IMPORTED_MODULE_1__.getChanceOfRain)(data,0)}% chance of rain`)
}


async function callApiWitchCItyAndCountry(cityAndCountry){
    const data = await (0,_forecast_data_fetch_fns__WEBPACK_IMPORTED_MODULE_0__.getWeatherData)(cityAndCountry);
    return data
}

async function landingPageInit(){

    const dubaiData = await callApiWitchCItyAndCountry("Dubai, Emirate of Dubai");
    setLandingPageCardDetails(".dubai", dubaiData);

    const londonData = await callApiWitchCItyAndCountry("London, UK");
    setLandingPageCardDetails(".london", londonData);
    
    const sydneyData = await callApiWitchCItyAndCountry("Sydney, Australia");
    setLandingPageCardDetails(".sydney", sydneyData);

    const newYorkData = await callApiWitchCItyAndCountry("New-York, USA");
    setLandingPageCardDetails(".new-york", newYorkData);
    
}

/***/ }),

/***/ "./src/location-suggestions-drop-down.js":
/*!***********************************************!*\
  !*** ./src/location-suggestions-drop-down.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bindGetDeviceGeolocationEvent: () => (/* binding */ bindGetDeviceGeolocationEvent),
/* harmony export */   bindLocationSuggestionSelectEvent: () => (/* binding */ bindLocationSuggestionSelectEvent),
/* harmony export */   bindLocationSuggestionsDropDownEvents: () => (/* binding */ bindLocationSuggestionsDropDownEvents),
/* harmony export */   getDeviceGeolocationAndCallApi: () => (/* binding */ getDeviceGeolocationAndCallApi)
/* harmony export */ });
/* harmony import */ var _forecast_data_fetch_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forecast-data-fetch-fns */ "./src/forecast-data-fetch-fns.js");



function callApiWithDeviceLocation(lat, long){
    console.log(lat, long)
    ;(0,_forecast_data_fetch_fns__WEBPACK_IMPORTED_MODULE_0__.getWeatherData)(`${lat},${long}`)
}

function getDeviceGeolocationAndCallApi(){
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          position => {
            const {latitude} = position.coords;
            const {longitude} = position.coords;
            // console.log("Latitude:", latitude);
            // console.log("Longitude:", longitude);
            // console.log(position)
            callApiWithDeviceLocation(latitude, longitude)
        },
        error => {
            console.error("Error getting location:", error);
        }
        );
    } else {
        console.error("Geolocation is not available in this browser.");
    }
}

function bindGetDeviceGeolocationEvent(){
    document.querySelector(".use-current-location").addEventListener("click", getDeviceGeolocationAndCallApi)
}



function selectAndCallApiWithSuggestion(e){
    console.log(e.target.innerText)
    ;(0,_forecast_data_fetch_fns__WEBPACK_IMPORTED_MODULE_0__.getWeatherData)(e.target.innerText)
}

function bindLocationSuggestionSelectEvent(){
    Array.from(document.querySelectorAll(".suggestion")).forEach(suggestion =>{
        suggestion.addEventListener("click", selectAndCallApiWithSuggestion)
    });
}


function handleFocus() {
    setTimeout(()=>{
        document.querySelector(".search-suggestions-container").classList.add("active");
    },"100");
}
  
function handleBlur() {
    setTimeout(()=>{
        document.querySelector(".search-suggestions-container").classList.remove("active");
        document.querySelector(".search-suggestions-list").innerText = "";
    },"200");

}

function bindLocationSuggestionsDropDownEvents(){
    const locationSearchBar = document.querySelector("#location-search");

    locationSearchBar.addEventListener("focus", handleFocus);
    locationSearchBar.addEventListener("blur", handleBlur);
}





/***/ }),

/***/ "./src/render-location-suggestions.js":
/*!********************************************!*\
  !*** ./src/render-location-suggestions.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderLocationSuggestions)
/* harmony export */ });
/* harmony import */ var _utility_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility-fns */ "./src/utility-fns.js");
/* harmony import */ var _location_suggestions_drop_down__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./location-suggestions-drop-down */ "./src/location-suggestions-drop-down.js");



function filterLocationSuggestionsData(data){
    const locationSuggestionsArray = []
    data.forEach(elem =>{
        locationSuggestionsArray.push([elem.name, elem.region, elem.country])               
    })
    return locationSuggestionsArray
}

function renderLocationSuggestions(data){
    
    const searchSuggestionsContainer = document.querySelector(".search-suggestions-list");
    searchSuggestionsContainer.innerText ="";
    
    if (data.length > 0){
        const formattedSuggestionsArray = filterLocationSuggestionsData(data)
        formattedSuggestionsArray.forEach(element =>{
            const li = (0,_utility_fns__WEBPACK_IMPORTED_MODULE_0__.createElementAndAddClass)("li", "suggestion")
            li.innerText = element.join(", ");
            searchSuggestionsContainer.append(li);
        })
    }

    (0,_location_suggestions_drop_down__WEBPACK_IMPORTED_MODULE_1__.bindLocationSuggestionSelectEvent)();
}


/***/ }),

/***/ "./src/utility-fns.js":
/*!****************************!*\
  !*** ./src/utility-fns.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createElementAndAddClass: () => (/* binding */ createElementAndAddClass),
/* harmony export */   setElementInnerText: () => (/* binding */ setElementInnerText)
/* harmony export */ });
function createElementAndAddClass(element, className){
    const createdElement = document.createElement(element);
    createdElement.classList.add(className)
    return createdElement
}

function setElementInnerText(element, text){
    document.querySelector(`.${element}`).innerText = text;
}



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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _location_suggestions_drop_down__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./location-suggestions-drop-down */ "./src/location-suggestions-drop-down.js");
/* harmony import */ var _forecast_data_fetch_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forecast-data-fetch-fns */ "./src/forecast-data-fetch-fns.js");
/* harmony import */ var _landing_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing-page */ "./src/landing-page.js");
/* eslint-disable import/no-cycle */









// fetchIpData();
// getWeatherData("jerusalem");


function callGetLocationSuggestions(e){
  e.preventDefault();
  const userInput = document.querySelector("#location-search").value
  if (userInput !== ""){
    (0,_forecast_data_fetch_fns__WEBPACK_IMPORTED_MODULE_2__.getLocationSuggestions)(userInput)
  }
}

function callGetWeatherData(e){
  e.preventDefault();
  const userInput = document.querySelector("#location-search").value
  ;(0,_forecast_data_fetch_fns__WEBPACK_IMPORTED_MODULE_2__.getWeatherData)(userInput);
}

function initSearchSuggestions(){
  document.querySelector("#location-search-form").addEventListener("submit", callGetWeatherData)
  document.querySelector("#location-search").addEventListener("input", callGetLocationSuggestions)

  ;(0,_location_suggestions_drop_down__WEBPACK_IMPORTED_MODULE_1__.bindLocationSuggestionsDropDownEvents)();
  (0,_location_suggestions_drop_down__WEBPACK_IMPORTED_MODULE_1__.bindLocationSuggestionsDropDownEvents)();
}

function initDeviceLocationOption(){
  (0,_location_suggestions_drop_down__WEBPACK_IMPORTED_MODULE_1__.bindGetDeviceGeolocationEvent)();
  (0,_location_suggestions_drop_down__WEBPACK_IMPORTED_MODULE_1__.getDeviceGeolocationAndCallApi)();
}

(0,_landing_page__WEBPACK_IMPORTED_MODULE_3__["default"])();
initDeviceLocationOption();
initSearchSuggestions();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBdUIsc0VBQXdCO0FBQy9DO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLElBQUksa0dBQWlDO0FBQ3JDOzs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLFFBQVE7QUFDdkM7QUFDQTs7Ozs7OztVQ1RBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNxQjtBQUNvSTtBQUN6RDtBQUNuRDtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0ZBQXNCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUseUVBQWM7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSx1R0FBcUM7QUFDdkMsRUFBRSxzR0FBcUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsRUFBRSw4RkFBNkI7QUFDL0IsRUFBRSwrRkFBOEI7QUFDaEM7QUFDQTtBQUNBLHlEQUFlO0FBQ2Y7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2ZvcmVjYXN0LWRhdGEtZmV0Y2gtZm5zLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2hvbWUtcGFnZS1nZXR0ZXJzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2hvbWUtcGFnZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9sYW5kaW5nLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbG9jYXRpb24tc3VnZ2VzdGlvbnMtZHJvcC1kb3duLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3JlbmRlci1sb2NhdGlvbi1zdWdnZXN0aW9ucy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy91dGlsaXR5LWZucy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogQm94IHNpemluZyBydWxlcyAqL1xyXG4qLFxyXG4qOjpiZWZvcmUsXHJcbio6OmFmdGVyIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4vKiBSZW1vdmUgZGVmYXVsdCBtYXJnaW4gKi9cclxuYm9keSxcclxuaDEsXHJcbmgyLFxyXG5oMyxcclxuaDQsXHJcbnAsXHJcbmZpZ3VyZSxcclxuYmxvY2txdW90ZSxcclxuZGwsXHJcbmRkIHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi8qIFJlbW92ZSBsaXN0IHN0eWxlcyBvbiB1bCwgb2wgZWxlbWVudHMgd2l0aCBhIGxpc3Qgcm9sZSwgd2hpY2ggc3VnZ2VzdHMgZGVmYXVsdCBzdHlsaW5nIHdpbGwgYmUgcmVtb3ZlZCAqL1xyXG51bFtyb2xlPSdsaXN0J10sXHJcbm9sW3JvbGU9J2xpc3QnXSxcclxudWwsXHJcbm9sLFxyXG5saSB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLyogU2V0IGNvcmUgcm9vdCBkZWZhdWx0cyAqL1xyXG5odG1sOmZvY3VzLXdpdGhpbiB7XHJcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbn1cclxuXHJcbi8qIFNldCBjb3JlIGJvZHkgZGVmYXVsdHMgKi9cclxuYm9keSB7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplU3BlZWQ7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxufVxyXG5cclxuLyogQSBlbGVtZW50cyB0aGF0IGRvbid0IGhhdmUgYSBjbGFzcyBnZXQgZGVmYXVsdCBzdHlsZXMgKi9cclxuYTpub3QoW2NsYXNzXSkge1xyXG4gIHRleHQtZGVjb3JhdGlvbi1za2lwLWluazogYXV0bztcclxufVxyXG5cclxuLyogTWFrZSBpbWFnZXMgZWFzaWVyIHRvIHdvcmsgd2l0aCAqL1xyXG5pbWcsXHJcbnBpY3R1cmUge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLyogSW5oZXJpdCBmb250cyBmb3IgaW5wdXRzIGFuZCBidXR0b25zICovXHJcbmlucHV0LFxyXG5idXR0b24sXHJcbnRleHRhcmVhLFxyXG5zZWxlY3Qge1xyXG4gIGZvbnQ6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi8qIFJlbW92ZSBhbGwgYW5pbWF0aW9ucywgdHJhbnNpdGlvbnMgYW5kIHNtb290aCBzY3JvbGwgZm9yIHBlb3BsZSB0aGF0IHByZWZlciBub3QgdG8gc2VlIHRoZW0gKi9cclxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcclxuICBodG1sOmZvY3VzLXdpdGhpbiB7XHJcbiAgIHNjcm9sbC1iZWhhdmlvcjogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgKixcclxuICAqOjpiZWZvcmUsXHJcbiAgKjo6YWZ0ZXIge1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcclxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDEgIWltcG9ydGFudDtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xyXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuYm9keSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5zZWFyY2gtc3VnZ2VzdGlvbnMtY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnNlYXJjaC1zdWdnZXN0aW9ucy1jb250YWluZXIuYWN0aXZle1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXI6IGJsYWNrIDAuM3B4IHNvbGlkO1xyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tTGFuZGluZyBQYWdlLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4ubGFuZGluZy1wYWdle1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG4uc2V0LWxvY2F0aW9uLWNvbnRhaW5lcntcclxuICBib3JkZXI6IDFweCBibGFjayBzb2xpZDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgcGFkZGluZzogMC44cmVtIDEuNXJlbTtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEscUJBQXFCO0FBQ3JCOzs7RUFHRSxzQkFBc0I7QUFDeEI7O0FBRUEsMEJBQTBCO0FBQzFCOzs7Ozs7Ozs7O0VBVUUsU0FBUztBQUNYOztBQUVBLDJHQUEyRztBQUMzRzs7Ozs7RUFLRSxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQSwyQkFBMkI7QUFDM0I7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUEsMkJBQTJCO0FBQzNCO0VBQ0UsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3QixnQkFBZ0I7QUFDbEI7O0FBRUEsMERBQTBEO0FBQzFEO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBLG9DQUFvQztBQUNwQzs7RUFFRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQSx5Q0FBeUM7QUFDekM7Ozs7RUFJRSxhQUFhO0FBQ2Y7O0FBRUEsZ0dBQWdHO0FBQ2hHO0VBQ0U7R0FDQyxxQkFBcUI7RUFDdEI7O0VBRUE7OztJQUdFLHFDQUFxQztJQUNyQyx1Q0FBdUM7SUFDdkMsc0NBQXNDO0lBQ3RDLGdDQUFnQztFQUNsQztBQUNGOztBQUVBLGlEQUFpRDs7QUFFakQ7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7O0FBRUEsb0RBQW9EO0FBQ3BEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsU0FBUztBQUNYOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogQm94IHNpemluZyBydWxlcyAqL1xcclxcbiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbi8qIFJlbW92ZSBkZWZhdWx0IG1hcmdpbiAqL1xcclxcbmJvZHksXFxyXFxuaDEsXFxyXFxuaDIsXFxyXFxuaDMsXFxyXFxuaDQsXFxyXFxucCxcXHJcXG5maWd1cmUsXFxyXFxuYmxvY2txdW90ZSxcXHJcXG5kbCxcXHJcXG5kZCB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi8qIFJlbW92ZSBsaXN0IHN0eWxlcyBvbiB1bCwgb2wgZWxlbWVudHMgd2l0aCBhIGxpc3Qgcm9sZSwgd2hpY2ggc3VnZ2VzdHMgZGVmYXVsdCBzdHlsaW5nIHdpbGwgYmUgcmVtb3ZlZCAqL1xcclxcbnVsW3JvbGU9J2xpc3QnXSxcXHJcXG5vbFtyb2xlPSdsaXN0J10sXFxyXFxudWwsXFxyXFxub2wsXFxyXFxubGkge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi8qIFNldCBjb3JlIHJvb3QgZGVmYXVsdHMgKi9cXHJcXG5odG1sOmZvY3VzLXdpdGhpbiB7XFxyXFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXHJcXG59XFxyXFxuXFxyXFxuLyogU2V0IGNvcmUgYm9keSBkZWZhdWx0cyAqL1xcclxcbmJvZHkge1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVTcGVlZDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxyXFxufVxcclxcblxcclxcbi8qIEEgZWxlbWVudHMgdGhhdCBkb24ndCBoYXZlIGEgY2xhc3MgZ2V0IGRlZmF1bHQgc3R5bGVzICovXFxyXFxuYTpub3QoW2NsYXNzXSkge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uLXNraXAtaW5rOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNYWtlIGltYWdlcyBlYXNpZXIgdG8gd29yayB3aXRoICovXFxyXFxuaW1nLFxcclxcbnBpY3R1cmUge1xcclxcbiAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi8qIEluaGVyaXQgZm9udHMgZm9yIGlucHV0cyBhbmQgYnV0dG9ucyAqL1xcclxcbmlucHV0LFxcclxcbmJ1dHRvbixcXHJcXG50ZXh0YXJlYSxcXHJcXG5zZWxlY3Qge1xcclxcbiAgZm9udDogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuLyogUmVtb3ZlIGFsbCBhbmltYXRpb25zLCB0cmFuc2l0aW9ucyBhbmQgc21vb3RoIHNjcm9sbCBmb3IgcGVvcGxlIHRoYXQgcHJlZmVyIG5vdCB0byBzZWUgdGhlbSAqL1xcclxcbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XFxyXFxuICBodG1sOmZvY3VzLXdpdGhpbiB7XFxyXFxuICAgc2Nyb2xsLWJlaGF2aW9yOiBhdXRvO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAqLFxcclxcbiAgKjo6YmVmb3JlLFxcclxcbiAgKjo6YWZ0ZXIge1xcclxcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xcclxcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxICFpbXBvcnRhbnQ7XFxyXFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xcclxcbiAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG8gIWltcG9ydGFudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtc3VnZ2VzdGlvbnMtY29udGFpbmVye1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLXN1Z2dlc3Rpb25zLWNvbnRhaW5lci5hY3RpdmV7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBib3JkZXI6IGJsYWNrIDAuM3B4IHNvbGlkO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0tLS0tLS0tLS0tTGFuZGluZyBQYWdlLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcclxcbi5sYW5kaW5nLXBhZ2V7XFxyXFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNldC1sb2NhdGlvbi1jb250YWluZXJ7XFxyXFxuICBib3JkZXI6IDFweCBibGFjayBzb2xpZDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIHBhZGRpbmc6IDAuOHJlbSAxLjVyZW07XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgcmVuZGVyTG9jYXRpb25TdWdnZXN0aW9ucyBmcm9tIFwiLi9yZW5kZXItbG9jYXRpb24tc3VnZ2VzdGlvbnNcIjtcclxuaW1wb3J0IGN1cnJlbnRXZWF0aGVyUGFnZUNvbnRyb2xsZXIgZnJvbSBcIi4vaG9tZS1wYWdlXCI7XHJcblxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hXZWF0aGVyRm9yZWNhc3QobG9jYXRpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PWUwZjI3NmUwNjU0NDQwYzZiNGEyMTI5MTEyMzIxMDcmcT0ke2xvY2F0aW9ufSZkYXlzPTMmYXFpPXllcyZhbGVydHM9eWVzYCwgeyBtb2RlOiBcImNvcnNcIiB9KTtcclxuICBcclxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaElwRGF0YSgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vaXAtYXBpLmNvbS9qc29uLz9maWVsZHM9MTEwNjE0MVwiLCB7IG1vZGU6IFwiY29yc1wiIH0pO1xyXG4gIFxyXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICBcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG5hc3luYyBmdW5jdGlvbiBmZXRjaExvY2F0aW9uU3VnZ2VzdGlvbnMobG9jYXRpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL3NlYXJjaC5qc29uP2tleT1lMGYyNzZlMDY1NDQ0MGM2YjRhMjEyOTExMjMyMTA3JnE9JHtsb2NhdGlvbn1gLCB7IG1vZGU6IFwiY29yc1wiIH0pO1xyXG4gIFxyXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBleHBvcnQgIGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhKGxvY2F0aW9uKSB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaFdlYXRoZXJGb3JlY2FzdChsb2NhdGlvbik7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZGF0YSBpbiBnZXQgd2VhdGhlciBkYXRhXCIpXHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgIC8vIGN1cnJlbnRXZWF0aGVyUGFnZUNvbnRyb2xsZXIoZGF0YSk7XHJcbiAgICAgIC8vIGluaXRIb21lUGFnZShkYXRhKVxyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExvY2F0aW9uU3VnZ2VzdGlvbnMobG9jYXRpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaExvY2F0aW9uU3VnZ2VzdGlvbnMobG9jYXRpb24pO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICByZW5kZXJMb2NhdGlvblN1Z2dlc3Rpb25zKGRhdGEpXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG4gICIsImV4cG9ydCBmdW5jdGlvbiBnZXRDaXR5TmFtZShkYXRhKXtcclxuICAgIHJldHVybiBkYXRhLmxvY2F0aW9uLm5hbWVcclxufTtcclxuZXhwb3J0IGZ1bmN0aW9uIGdldENvdW50cnlOYW1lKGRhdGEpe1xyXG4gICAgcmV0dXJuIGRhdGEuY3VycmVudC5jbG91ZFxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRDbG91ZChkYXRhKXtcclxuICAgIHJldHVybiBkYXRhLmN1cnJlbnQuY2xvdWRcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50Q29uZGl0aW9uQ29kZShkYXRhKXtcclxuICAgIHJldHVybiBkYXRhLmN1cnJlbnQuY29uZGl0aW9uLmNvZGVcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50Q29uZGl0aW9uVGV4dChkYXRhKXtcclxuICAgIHJldHVybiBkYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHRcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50RmVlbHNMaWtlVGVtcEluQyhkYXRhKXtcclxuICAgIHJldHVybiBkYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2NcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50RmVlbHNMaWtlVGVtcEluRihkYXRhKXtcclxuICAgIHJldHVybiBkYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2ZcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50SHVtaWRpdHkoZGF0YSl7XHJcbiAgICByZXR1cm4gZGF0YS5jdXJyZW50Lmh1bWlkaXR5XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudElzRGF5KGRhdGEpe1xyXG4gICAgcmV0dXJuIGRhdGEuY3VycmVudC5pc19kYXlcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50TGFzdFVwZGF0ZWRFcG9jaChkYXRhKXtcclxuICAgIHJldHVybiBkYXRhLmN1cnJlbnQubGFzdF91cGRhdGVkX2Vwb2NoXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudFByZWNpcEluKGRhdGEpe1xyXG4gICAgcmV0dXJuIGRhdGEuY3VycmVudC5wcmVjaXBfaW5cclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50UHJlY2lwTW0oZGF0YSl7XHJcbiAgICByZXR1cm4gZGF0YS5jdXJyZW50LnByZWNpcF9tbSAgICBcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50UHJlc3N1cmVJbihkYXRhKXtcclxuICAgIHJldHVybiBkYXRhLmN1cnJlbnQucHJlc3N1cmVfSW4gICAgXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudFByZXNzdXJlTWIoZGF0YSl7XHJcbiAgICByZXR1cm4gZGF0YS5jdXJyZW50LnByZXNzdXJlX21iICAgIFxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRUZW1wSW5DKGRhdGEpe1xyXG4gICAgcmV0dXJuIGRhdGEuY3VycmVudC50ZW1wX2NcclxufTtcclxuICAgIFxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudFRlbXBJbkYoZGF0YSl7XHJcbiAgICByZXR1cm4gZGF0YS5jdXJyZW50LnRlbXBfZlxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRVdihkYXRhKXtcclxuICAgIHJldHVybiBkYXRhLmN1cnJlbnQudXYgICAgXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudFZpc0luS20oZGF0YSl7XHJcbiAgICByZXR1cm4gZGF0YS5jdXJyZW50LnZpc19rbSAgIFxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRWaXNJbk1pbGVzKGRhdGEpe1xyXG4gICAgcmV0dXJuIGRhdGEuY3VycmVudC52aXNfbWlsZXMgICBcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50V2luZERpcmVjdGlvbihkYXRhKXtcclxuICAgIHJldHVybiBkYXRhLmN1cnJlbnQud2luZF9kaXJcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50V2luZFNwZWVkSW5LcGgoZGF0YSl7XHJcbiAgICByZXR1cm4gZGF0YS5jdXJyZW50LndpbmRfa3BoXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudFdpbmRTcGVlZEluTXBoKGRhdGEpe1xyXG4gICAgcmV0dXJuIGRhdGEuY3VycmVudC53aW5kX21waFxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEZvcmVjYXN0U3VucmlzZShkYXRhLCBkYXkpe1xyXG4gICAgcmV0dXJuIGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbZGF5XS5hc3Ryby5zdW5yaXNlXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Rm9yZWNhc3RTdW5zZXQoZGF0YSwgZGF5KXtcclxuICAgIHJldHVybiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2RheV0uYXN0cm8uc3Vuc2V0XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2hhbmNlT2ZSYWluKGRhdGEsIGRheSl7XHJcbiAgICByZXR1cm4gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtkYXldLmRheS5kYWlseV9jaGFuY2Vfb2ZfcmFpblxyXG59OyIsImltcG9ydCB7IGdldEN1cnJlbnRGZWVsc0xpa2VUZW1wSW5DLCBnZXRDdXJyZW50RmVlbHNMaWtlVGVtcEluRiwgZ2V0Q3VycmVudEh1bWlkaXR5IH0gZnJvbSBcIi4vaG9tZS1wYWdlLWdldHRlcnNcIjtcclxuaW1wb3J0IHsgc2V0RWxlbWVudElubmVyVGV4dCB9IGZyb20gXCIuL3V0aWxpdHktZm5zXCJcclxuXHJcbmZ1bmN0aW9uIGZvcm1hdFJlc3BvbnNlVG9Mb2NhbFRpbWVBbmREYXRlKGxvY2F0aW9uRGF0YSl7XHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgIHdlZWtkYXk6IFwic2hvcnRcIixcclxuICAgICAgICBkYXk6IFwibnVtZXJpY1wiLFxyXG4gICAgICAgIG1vbnRoOiBcImxvbmdcIixcclxuICAgICAgICB5ZWFyOiBcIm51bWVyaWNcIixcclxuICAgICAgICBob3VyOiBcIm51bWVyaWNcIixcclxuICAgICAgICBtaW51dGU6IFwibnVtZXJpY1wiLCBcclxuICAgICAgICBob3VyMTI6IHRydWUsXHJcbiAgICAgICAgdGltZVpvbmU6IGAke2xvY2F0aW9uRGF0YS50el9pZH1gLFxyXG4gICAgICAgIHRpbWVab25lTmFtZTogXCJzaG9ydFwiIFxyXG4gICAgfVxyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGxvY2F0aW9uRGF0YS5sb2NhbHRpbWVfZXBvY2ggKiAxMDAwKTtcclxuICAgIGNvbnN0IGxvY2FsVGltZUFuZERhdGUgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChcImVuLUdCXCIsIG9wdGlvbnMpLmZvcm1hdChkYXRlKTtcclxuICAgIHJldHVybiBsb2NhbFRpbWVBbmREYXRlXHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3VycmVudFdlYXRoZXJQYWdlQ29udHJvbGxlcihkYXRhKXtcclxuICAgIGNvbnN0IGN1cnJlbnREYXRhID0gZGF0YS5jdXJyZW50O1xyXG4gICAgY29uc3QgbG9jYXRpb25EYXRhID0gZGF0YS5sb2NhdGlvbjtcclxuXHJcbiAgICBcclxuICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICBjb25zb2xlLmxvZyhnZXRDdXJyZW50RmVlbHNMaWtlVGVtcEluRihkYXRhKSwgZ2V0Q3VycmVudEZlZWxzTGlrZVRlbXBJbkMoZGF0YSksIGdldEN1cnJlbnRIdW1pZGl0eShkYXRhKSlcclxuICAgIFxyXG5cclxuICAgIC8vIHNldEVsZW1lbnRJbm5lclRleHQoXCJuYW1lLXR4dFwiLCBsb2NhdGlvbkRhdGEubmFtZSk7XHJcbiAgICAvLyBzZXRFbGVtZW50SW5uZXJUZXh0KFwiY291bnRyeS10eHRcIiwgbG9jYXRpb25EYXRhLmNvdW50cnkpO1xyXG4gICAgLy8gc2V0RWxlbWVudElubmVyVGV4dChcInJlZ2lvbi10eHRcIiwgbG9jYXRpb25EYXRhLnJlZ2lvbik7XHJcbiAgICAvLyBzZXRFbGVtZW50SW5uZXJUZXh0KFwibG9jYWwtdGltZS10eHRcIiwgZm9ybWF0UmVzcG9uc2VUb0xvY2FsVGltZUFuZERhdGUobG9jYXRpb25EYXRhKSk7XHJcbiAgICAvLyBzZXRFbGVtZW50SW5uZXJUZXh0KFwibG9jYWwtZGF0ZS10eHRcIiwgZm9ybWF0RGF0ZShsb2NhdGlvbkRhdGUpKTtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7IGdldFdlYXRoZXJEYXRhIH0gZnJvbSBcIi4vZm9yZWNhc3QtZGF0YS1mZXRjaC1mbnNcIjtcclxuaW1wb3J0IHsgZ2V0Q2hhbmNlT2ZSYWluLCBnZXRDaXR5TmFtZSwgZ2V0Q3VycmVudENvbmRpdGlvblRleHQsIGdldEN1cnJlbnRUZW1wSW5DLCBnZXRDdXJyZW50VmlzSW5LbSwgZ2V0Rm9yZWNhc3RTdW5yaXNlLCBnZXRGb3JlY2FzdFN1bnNldCB9IGZyb20gXCIuL2hvbWUtcGFnZS1nZXR0ZXJzXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gc2V0Q2l0eU5hbWUoY2xhc3NOYW1lLCBuYW1lKXtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jaXR5LW5hbWUke2NsYXNzTmFtZX1gKS5pbm5lclRleHQgPSBuYW1lO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRDdXJyZW50VGVtcChjbGFzc05hbWUsIHRlbXApe1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmN1cnJlbnQtdGVtcCR7Y2xhc3NOYW1lfWApLmlubmVyVGV4dCA9IHRlbXA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldEN1cnJlbnRDb25kaXRpb25zVHh0KGNsYXNzTmFtZSwgY3VycmVudENvbmRpdGlvbnNUeHQpe1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmN1cnJlbnQtY29uZGl0aW9ucy10eHQke2NsYXNzTmFtZX1gKS5pbm5lclRleHQgPSBjdXJyZW50Q29uZGl0aW9uc1R4dDtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0Q3VycmVudENvbmRpdGlvbnNMb2dvKGNsYXNzTmFtZSwgY3VycmVudENvbmRpdGlvbnNMb2dvKXtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jdXJyZW50LWNvbmRpdGlvbnMtbG9nby4ke2NsYXNzTmFtZX1gKS5pbm5lclRleHQgPSBjdXJyZW50Q29uZGl0aW9uc0xvZ287XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFZpc1R4dChjbGFzc05hbWUsIHZpc1R4dCApe1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnZpcy10eHQke2NsYXNzTmFtZX1gKS5pbm5lclRleHQgPSB2aXNUeHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFZpc0xvZ28oY2xhc3NOYW1lLCB2aXNMb2dvICl7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudmlzLWxvZ28ke2NsYXNzTmFtZX1gKS5pbm5lckhUTUwgPSB2aXNMb2dvO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRTdW5yaXNlKGNsYXNzTmFtZSwgc3VucmlzZSApe1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnN1bnJpc2Uke2NsYXNzTmFtZX1gKS5pbm5lckhUTUwgPSBzdW5yaXNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRTdW5zZXQoY2xhc3NOYW1lLCBzdW5zZXQgKXtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zdW5zZXQke2NsYXNzTmFtZX1gKS5pbm5lckhUTUwgPSBzdW5zZXQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldENoYW5jZU9mUmFpbihjbGFzc05hbWUsIGNoYW5jZU9mUmFpbiApe1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmRhaWx5LWNoYW5jZS1vZi1yYWluJHtjbGFzc05hbWV9YCkuaW5uZXJIVE1MID0gY2hhbmNlT2ZSYWluO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRMYW5kaW5nUGFnZUNhcmREZXRhaWxzKGNsYXNzTmFtZSwgZGF0YSl7XHJcbiAgICBzZXRDaXR5TmFtZShjbGFzc05hbWUsIGdldENpdHlOYW1lKGRhdGEpKVxyXG4gICAgc2V0Q3VycmVudFRlbXAoY2xhc3NOYW1lLCBgJHtnZXRDdXJyZW50VGVtcEluQyhkYXRhKX0g4oSDYClcclxuICAgIHNldEN1cnJlbnRDb25kaXRpb25zVHh0KGNsYXNzTmFtZSwgZ2V0Q3VycmVudENvbmRpdGlvblRleHQoZGF0YSkpXHJcbiAgICBzZXRWaXNUeHQoY2xhc3NOYW1lLCBgJHtnZXRDdXJyZW50VmlzSW5LbShkYXRhKX0gS2ApO1xyXG4gICAgc2V0U3VucmlzZShjbGFzc05hbWUsIGdldEZvcmVjYXN0U3VucmlzZShkYXRhLDApKVxyXG4gICAgc2V0U3Vuc2V0KGNsYXNzTmFtZSwgZ2V0Rm9yZWNhc3RTdW5zZXQoZGF0YSwwKSlcclxuICAgIHNldENoYW5jZU9mUmFpbihjbGFzc05hbWUsIGAke2dldENoYW5jZU9mUmFpbihkYXRhLDApfSUgY2hhbmNlIG9mIHJhaW5gKVxyXG59XHJcblxyXG5cclxuYXN5bmMgZnVuY3Rpb24gY2FsbEFwaVdpdGNoQ0l0eUFuZENvdW50cnkoY2l0eUFuZENvdW50cnkpe1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldFdlYXRoZXJEYXRhKGNpdHlBbmRDb3VudHJ5KTtcclxuICAgIHJldHVybiBkYXRhXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGxhbmRpbmdQYWdlSW5pdCgpe1xyXG5cclxuICAgIGNvbnN0IGR1YmFpRGF0YSA9IGF3YWl0IGNhbGxBcGlXaXRjaENJdHlBbmRDb3VudHJ5KFwiRHViYWksIEVtaXJhdGUgb2YgRHViYWlcIik7XHJcbiAgICBzZXRMYW5kaW5nUGFnZUNhcmREZXRhaWxzKFwiLmR1YmFpXCIsIGR1YmFpRGF0YSk7XHJcblxyXG4gICAgY29uc3QgbG9uZG9uRGF0YSA9IGF3YWl0IGNhbGxBcGlXaXRjaENJdHlBbmRDb3VudHJ5KFwiTG9uZG9uLCBVS1wiKTtcclxuICAgIHNldExhbmRpbmdQYWdlQ2FyZERldGFpbHMoXCIubG9uZG9uXCIsIGxvbmRvbkRhdGEpO1xyXG4gICAgXHJcbiAgICBjb25zdCBzeWRuZXlEYXRhID0gYXdhaXQgY2FsbEFwaVdpdGNoQ0l0eUFuZENvdW50cnkoXCJTeWRuZXksIEF1c3RyYWxpYVwiKTtcclxuICAgIHNldExhbmRpbmdQYWdlQ2FyZERldGFpbHMoXCIuc3lkbmV5XCIsIHN5ZG5leURhdGEpO1xyXG5cclxuICAgIGNvbnN0IG5ld1lvcmtEYXRhID0gYXdhaXQgY2FsbEFwaVdpdGNoQ0l0eUFuZENvdW50cnkoXCJOZXctWW9yaywgVVNBXCIpO1xyXG4gICAgc2V0TGFuZGluZ1BhZ2VDYXJkRGV0YWlscyhcIi5uZXcteW9ya1wiLCBuZXdZb3JrRGF0YSk7XHJcbiAgICBcclxufSIsImltcG9ydCB7IGdldFdlYXRoZXJEYXRhIH0gZnJvbSBcIi4vZm9yZWNhc3QtZGF0YS1mZXRjaC1mbnNcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBjYWxsQXBpV2l0aERldmljZUxvY2F0aW9uKGxhdCwgbG9uZyl7XHJcbiAgICBjb25zb2xlLmxvZyhsYXQsIGxvbmcpXHJcbiAgICBnZXRXZWF0aGVyRGF0YShgJHtsYXR9LCR7bG9uZ31gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGV2aWNlR2VvbG9jYXRpb25BbmRDYWxsQXBpKCl7XHJcbiAgICBpZiAoXCJnZW9sb2NhdGlvblwiIGluIG5hdmlnYXRvcikge1xyXG4gICAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oXHJcbiAgICAgICAgICBwb3NpdGlvbiA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHtsYXRpdHVkZX0gPSBwb3NpdGlvbi5jb29yZHM7XHJcbiAgICAgICAgICAgIGNvbnN0IHtsb25naXR1ZGV9ID0gcG9zaXRpb24uY29vcmRzO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkxhdGl0dWRlOlwiLCBsYXRpdHVkZSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiTG9uZ2l0dWRlOlwiLCBsb25naXR1ZGUpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwb3NpdGlvbilcclxuICAgICAgICAgICAgY2FsbEFwaVdpdGhEZXZpY2VMb2NhdGlvbihsYXRpdHVkZSwgbG9uZ2l0dWRlKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZ2V0dGluZyBsb2NhdGlvbjpcIiwgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiR2VvbG9jYXRpb24gaXMgbm90IGF2YWlsYWJsZSBpbiB0aGlzIGJyb3dzZXIuXCIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYmluZEdldERldmljZUdlb2xvY2F0aW9uRXZlbnQoKXtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXNlLWN1cnJlbnQtbG9jYXRpb25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdldERldmljZUdlb2xvY2F0aW9uQW5kQ2FsbEFwaSlcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBzZWxlY3RBbmRDYWxsQXBpV2l0aFN1Z2dlc3Rpb24oZSl7XHJcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5pbm5lclRleHQpXHJcbiAgICBnZXRXZWF0aGVyRGF0YShlLnRhcmdldC5pbm5lclRleHQpXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBiaW5kTG9jYXRpb25TdWdnZXN0aW9uU2VsZWN0RXZlbnQoKXtcclxuICAgIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zdWdnZXN0aW9uXCIpKS5mb3JFYWNoKHN1Z2dlc3Rpb24gPT57XHJcbiAgICAgICAgc3VnZ2VzdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2VsZWN0QW5kQ2FsbEFwaVdpdGhTdWdnZXN0aW9uKVxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBoYW5kbGVGb2N1cygpIHtcclxuICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC1zdWdnZXN0aW9ucy1jb250YWluZXJcIikuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgIH0sXCIxMDBcIik7XHJcbn1cclxuICBcclxuZnVuY3Rpb24gaGFuZGxlQmx1cigpIHtcclxuICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC1zdWdnZXN0aW9ucy1jb250YWluZXJcIikuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC1zdWdnZXN0aW9ucy1saXN0XCIpLmlubmVyVGV4dCA9IFwiXCI7XHJcbiAgICB9LFwiMjAwXCIpO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJpbmRMb2NhdGlvblN1Z2dlc3Rpb25zRHJvcERvd25FdmVudHMoKXtcclxuICAgIGNvbnN0IGxvY2F0aW9uU2VhcmNoQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsb2NhdGlvbi1zZWFyY2hcIik7XHJcblxyXG4gICAgbG9jYXRpb25TZWFyY2hCYXIuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIGhhbmRsZUZvY3VzKTtcclxuICAgIGxvY2F0aW9uU2VhcmNoQmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIGhhbmRsZUJsdXIpO1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnRBbmRBZGRDbGFzcyB9IGZyb20gXCIuL3V0aWxpdHktZm5zXCJcclxuaW1wb3J0IHsgYmluZExvY2F0aW9uU3VnZ2VzdGlvblNlbGVjdEV2ZW50IH0gZnJvbSBcIi4vbG9jYXRpb24tc3VnZ2VzdGlvbnMtZHJvcC1kb3duXCJcclxuXHJcbmZ1bmN0aW9uIGZpbHRlckxvY2F0aW9uU3VnZ2VzdGlvbnNEYXRhKGRhdGEpe1xyXG4gICAgY29uc3QgbG9jYXRpb25TdWdnZXN0aW9uc0FycmF5ID0gW11cclxuICAgIGRhdGEuZm9yRWFjaChlbGVtID0+e1xyXG4gICAgICAgIGxvY2F0aW9uU3VnZ2VzdGlvbnNBcnJheS5wdXNoKFtlbGVtLm5hbWUsIGVsZW0ucmVnaW9uLCBlbGVtLmNvdW50cnldKSAgICAgICAgICAgICAgIFxyXG4gICAgfSlcclxuICAgIHJldHVybiBsb2NhdGlvblN1Z2dlc3Rpb25zQXJyYXlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyTG9jYXRpb25TdWdnZXN0aW9ucyhkYXRhKXtcclxuICAgIFxyXG4gICAgY29uc3Qgc2VhcmNoU3VnZ2VzdGlvbnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC1zdWdnZXN0aW9ucy1saXN0XCIpO1xyXG4gICAgc2VhcmNoU3VnZ2VzdGlvbnNDb250YWluZXIuaW5uZXJUZXh0ID1cIlwiO1xyXG4gICAgXHJcbiAgICBpZiAoZGF0YS5sZW5ndGggPiAwKXtcclxuICAgICAgICBjb25zdCBmb3JtYXR0ZWRTdWdnZXN0aW9uc0FycmF5ID0gZmlsdGVyTG9jYXRpb25TdWdnZXN0aW9uc0RhdGEoZGF0YSlcclxuICAgICAgICBmb3JtYXR0ZWRTdWdnZXN0aW9uc0FycmF5LmZvckVhY2goZWxlbWVudCA9PntcclxuICAgICAgICAgICAgY29uc3QgbGkgPSBjcmVhdGVFbGVtZW50QW5kQWRkQ2xhc3MoXCJsaVwiLCBcInN1Z2dlc3Rpb25cIilcclxuICAgICAgICAgICAgbGkuaW5uZXJUZXh0ID0gZWxlbWVudC5qb2luKFwiLCBcIik7XHJcbiAgICAgICAgICAgIHNlYXJjaFN1Z2dlc3Rpb25zQ29udGFpbmVyLmFwcGVuZChsaSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBiaW5kTG9jYXRpb25TdWdnZXN0aW9uU2VsZWN0RXZlbnQoKTtcclxufVxyXG4iLCJmdW5jdGlvbiBjcmVhdGVFbGVtZW50QW5kQWRkQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKXtcclxuICAgIGNvbnN0IGNyZWF0ZWRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcclxuICAgIGNyZWF0ZWRFbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKVxyXG4gICAgcmV0dXJuIGNyZWF0ZWRFbGVtZW50XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldEVsZW1lbnRJbm5lclRleHQoZWxlbWVudCwgdGV4dCl7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtlbGVtZW50fWApLmlubmVyVGV4dCA9IHRleHQ7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNyZWF0ZUVsZW1lbnRBbmRBZGRDbGFzcywgc2V0RWxlbWVudElubmVyVGV4dCB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXHJcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCB7IGJpbmRHZXREZXZpY2VHZW9sb2NhdGlvbkV2ZW50LCBiaW5kTG9jYXRpb25TdWdnZXN0aW9uc0Ryb3BEb3duRXZlbnRzLCBnZXREZXZpY2VHZW9sb2NhdGlvbkFuZENhbGxBcGkgIH0gZnJvbSBcIi4vbG9jYXRpb24tc3VnZ2VzdGlvbnMtZHJvcC1kb3duXCI7XHJcbmltcG9ydCB7IGdldFdlYXRoZXJEYXRhLCBnZXRMb2NhdGlvblN1Z2dlc3Rpb25zLCBmZXRjaElwRGF0YSB9IGZyb20gXCIuL2ZvcmVjYXN0LWRhdGEtZmV0Y2gtZm5zXCI7XHJcbmltcG9ydCBsYW5kaW5nUGFnZUluaXQgZnJvbSBcIi4vbGFuZGluZy1wYWdlXCI7XHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gZmV0Y2hJcERhdGEoKTtcclxuLy8gZ2V0V2VhdGhlckRhdGEoXCJqZXJ1c2FsZW1cIik7XHJcblxyXG5cclxuZnVuY3Rpb24gY2FsbEdldExvY2F0aW9uU3VnZ2VzdGlvbnMoZSl7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGNvbnN0IHVzZXJJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG9jYXRpb24tc2VhcmNoXCIpLnZhbHVlXHJcbiAgaWYgKHVzZXJJbnB1dCAhPT0gXCJcIil7XHJcbiAgICBnZXRMb2NhdGlvblN1Z2dlc3Rpb25zKHVzZXJJbnB1dClcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhbGxHZXRXZWF0aGVyRGF0YShlKXtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3QgdXNlcklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsb2NhdGlvbi1zZWFyY2hcIikudmFsdWVcclxuICBnZXRXZWF0aGVyRGF0YSh1c2VySW5wdXQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0U2VhcmNoU3VnZ2VzdGlvbnMoKXtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvY2F0aW9uLXNlYXJjaC1mb3JtXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgY2FsbEdldFdlYXRoZXJEYXRhKVxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG9jYXRpb24tc2VhcmNoXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBjYWxsR2V0TG9jYXRpb25TdWdnZXN0aW9ucylcclxuXHJcbiAgYmluZExvY2F0aW9uU3VnZ2VzdGlvbnNEcm9wRG93bkV2ZW50cygpO1xyXG4gIGJpbmRMb2NhdGlvblN1Z2dlc3Rpb25zRHJvcERvd25FdmVudHMoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdERldmljZUxvY2F0aW9uT3B0aW9uKCl7XHJcbiAgYmluZEdldERldmljZUdlb2xvY2F0aW9uRXZlbnQoKTtcclxuICBnZXREZXZpY2VHZW9sb2NhdGlvbkFuZENhbGxBcGkoKTtcclxufVxyXG5cclxubGFuZGluZ1BhZ2VJbml0KCk7XHJcbmluaXREZXZpY2VMb2NhdGlvbk9wdGlvbigpO1xyXG5pbml0U2VhcmNoU3VnZ2VzdGlvbnMoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9