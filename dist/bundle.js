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
    document.querySelector(`.vis-logo"${className}`).innerHTML = visLogo;
}

function setLandingPageCardDetails(className, data){
    setCityName(className, (0,_home_page_getters__WEBPACK_IMPORTED_MODULE_1__.getCityName)(data))
    setCurrentTemp(className, (0,_home_page_getters__WEBPACK_IMPORTED_MODULE_1__.getCurrentTempInC)(data))
    setCurrentConditionsTxt(className, (0,_home_page_getters__WEBPACK_IMPORTED_MODULE_1__.getCurrentConditionText)(data))
    setVisTxt(className, (0,_home_page_getters__WEBPACK_IMPORTED_MODULE_1__.getCurrentVisInKm)(data));
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








// bindLocationSuggestionsDropDownEvents();
// bindLocationSuggestionSelectEvent();
// bindGetDeviceGeolocationEvent();
// getDeviceGeolocationAndCallApi();
// fetchIpData();
// getWeatherData("jerusalem");
(0,_landing_page__WEBPACK_IMPORTED_MODULE_3__["default"])();


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

// document.querySelector("#location-search-form").addEventListener("submit", callGetWeatherData)
// document.querySelector("#location-search").addEventListener("input", callGetLocationSuggestions)

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDcUI7QUFDb0k7QUFDekQ7QUFDbkQ7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0ZBQXNCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUseUVBQWM7QUFDaEI7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9mb3JlY2FzdC1kYXRhLWZldGNoLWZucy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9ob21lLXBhZ2UtZ2V0dGVycy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9ob21lLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbGFuZGluZy1wYWdlLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2xvY2F0aW9uLXN1Z2dlc3Rpb25zLWRyb3AtZG93bi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9yZW5kZXItbG9jYXRpb24tc3VnZ2VzdGlvbnMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvdXRpbGl0eS1mbnMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIEJveCBzaXppbmcgcnVsZXMgKi9cclxuKixcclxuKjo6YmVmb3JlLFxyXG4qOjphZnRlciB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLyogUmVtb3ZlIGRlZmF1bHQgbWFyZ2luICovXHJcbmJvZHksXHJcbmgxLFxyXG5oMixcclxuaDMsXHJcbmg0LFxyXG5wLFxyXG5maWd1cmUsXHJcbmJsb2NrcXVvdGUsXHJcbmRsLFxyXG5kZCB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4vKiBSZW1vdmUgbGlzdCBzdHlsZXMgb24gdWwsIG9sIGVsZW1lbnRzIHdpdGggYSBsaXN0IHJvbGUsIHdoaWNoIHN1Z2dlc3RzIGRlZmF1bHQgc3R5bGluZyB3aWxsIGJlIHJlbW92ZWQgKi9cclxudWxbcm9sZT0nbGlzdCddLFxyXG5vbFtyb2xlPSdsaXN0J10sXHJcbnVsLFxyXG5vbCxcclxubGkge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi8qIFNldCBjb3JlIHJvb3QgZGVmYXVsdHMgKi9cclxuaHRtbDpmb2N1cy13aXRoaW4ge1xyXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG59XHJcblxyXG4vKiBTZXQgY29yZSBib2R5IGRlZmF1bHRzICovXHJcbmJvZHkge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZVNwZWVkO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbn1cclxuXHJcbi8qIEEgZWxlbWVudHMgdGhhdCBkb24ndCBoYXZlIGEgY2xhc3MgZ2V0IGRlZmF1bHQgc3R5bGVzICovXHJcbmE6bm90KFtjbGFzc10pIHtcclxuICB0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6IGF1dG87XHJcbn1cclxuXHJcbi8qIE1ha2UgaW1hZ2VzIGVhc2llciB0byB3b3JrIHdpdGggKi9cclxuaW1nLFxyXG5waWN0dXJlIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi8qIEluaGVyaXQgZm9udHMgZm9yIGlucHV0cyBhbmQgYnV0dG9ucyAqL1xyXG5pbnB1dCxcclxuYnV0dG9uLFxyXG50ZXh0YXJlYSxcclxuc2VsZWN0IHtcclxuICBmb250OiBpbmhlcml0O1xyXG59XHJcblxyXG4vKiBSZW1vdmUgYWxsIGFuaW1hdGlvbnMsIHRyYW5zaXRpb25zIGFuZCBzbW9vdGggc2Nyb2xsIGZvciBwZW9wbGUgdGhhdCBwcmVmZXIgbm90IHRvIHNlZSB0aGVtICovXHJcbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XHJcbiAgaHRtbDpmb2N1cy13aXRoaW4ge1xyXG4gICBzY3JvbGwtYmVoYXZpb3I6IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gICosXHJcbiAgKjo6YmVmb3JlLFxyXG4gICo6OmFmdGVyIHtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XHJcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcclxuICAgIHNjcm9sbC1iZWhhdmlvcjogYXV0byAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbmJvZHkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uc2VhcmNoLXN1Z2dlc3Rpb25zLWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5zZWFyY2gtc3VnZ2VzdGlvbnMtY29udGFpbmVyLmFjdGl2ZXtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyOiBibGFjayAwLjNweCBzb2xpZDtcclxufVxyXG5cclxuLyogLS0tLS0tLS0tLS0tLUxhbmRpbmcgUGFnZS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuLmxhbmRpbmctcGFnZXtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gIGdhcDogMXJlbTtcclxufVxyXG5cclxuLnNldC1sb2NhdGlvbi1jb250YWluZXJ7XHJcbiAgYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHBhZGRpbmc6IDAuOHJlbSAxLjVyZW07XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHFCQUFxQjtBQUNyQjs7O0VBR0Usc0JBQXNCO0FBQ3hCOztBQUVBLDBCQUEwQjtBQUMxQjs7Ozs7Ozs7OztFQVVFLFNBQVM7QUFDWDs7QUFFQSwyR0FBMkc7QUFDM0c7Ozs7O0VBS0UsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUEsMkJBQTJCO0FBQzNCO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBLDJCQUEyQjtBQUMzQjtFQUNFLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0FBQ2xCOztBQUVBLDBEQUEwRDtBQUMxRDtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQSxvQ0FBb0M7QUFDcEM7O0VBRUUsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUEseUNBQXlDO0FBQ3pDOzs7O0VBSUUsYUFBYTtBQUNmOztBQUVBLGdHQUFnRztBQUNoRztFQUNFO0dBQ0MscUJBQXFCO0VBQ3RCOztFQUVBOzs7SUFHRSxxQ0FBcUM7SUFDckMsdUNBQXVDO0lBQ3ZDLHNDQUFzQztJQUN0QyxnQ0FBZ0M7RUFDbEM7QUFDRjs7QUFFQSxpREFBaUQ7O0FBRWpEO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0FBQzdCOztBQUVBLG9EQUFvRDtBQUNwRDtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEJveCBzaXppbmcgcnVsZXMgKi9cXHJcXG4qLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBSZW1vdmUgZGVmYXVsdCBtYXJnaW4gKi9cXHJcXG5ib2R5LFxcclxcbmgxLFxcclxcbmgyLFxcclxcbmgzLFxcclxcbmg0LFxcclxcbnAsXFxyXFxuZmlndXJlLFxcclxcbmJsb2NrcXVvdGUsXFxyXFxuZGwsXFxyXFxuZGQge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBSZW1vdmUgbGlzdCBzdHlsZXMgb24gdWwsIG9sIGVsZW1lbnRzIHdpdGggYSBsaXN0IHJvbGUsIHdoaWNoIHN1Z2dlc3RzIGRlZmF1bHQgc3R5bGluZyB3aWxsIGJlIHJlbW92ZWQgKi9cXHJcXG51bFtyb2xlPSdsaXN0J10sXFxyXFxub2xbcm9sZT0nbGlzdCddLFxcclxcbnVsLFxcclxcbm9sLFxcclxcbmxpIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTZXQgY29yZSByb290IGRlZmF1bHRzICovXFxyXFxuaHRtbDpmb2N1cy13aXRoaW4ge1xcclxcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxyXFxufVxcclxcblxcclxcbi8qIFNldCBjb3JlIGJvZHkgZGVmYXVsdHMgKi9cXHJcXG5ib2R5IHtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplU3BlZWQ7XFxyXFxuICBsaW5lLWhlaWdodDogMS41O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBBIGVsZW1lbnRzIHRoYXQgZG9uJ3QgaGF2ZSBhIGNsYXNzIGdldCBkZWZhdWx0IHN0eWxlcyAqL1xcclxcbmE6bm90KFtjbGFzc10pIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbi1za2lwLWluazogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLyogTWFrZSBpbWFnZXMgZWFzaWVyIHRvIHdvcmsgd2l0aCAqL1xcclxcbmltZyxcXHJcXG5waWN0dXJlIHtcXHJcXG4gIG1heC13aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBJbmhlcml0IGZvbnRzIGZvciBpbnB1dHMgYW5kIGJ1dHRvbnMgKi9cXHJcXG5pbnB1dCxcXHJcXG5idXR0b24sXFxyXFxudGV4dGFyZWEsXFxyXFxuc2VsZWN0IHtcXHJcXG4gIGZvbnQ6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbi8qIFJlbW92ZSBhbGwgYW5pbWF0aW9ucywgdHJhbnNpdGlvbnMgYW5kIHNtb290aCBzY3JvbGwgZm9yIHBlb3BsZSB0aGF0IHByZWZlciBub3QgdG8gc2VlIHRoZW0gKi9cXHJcXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xcclxcbiAgaHRtbDpmb2N1cy13aXRoaW4ge1xcclxcbiAgIHNjcm9sbC1iZWhhdmlvcjogYXV0bztcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgKixcXHJcXG4gICo6OmJlZm9yZSxcXHJcXG4gICo6OmFmdGVyIHtcXHJcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcXHJcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMSAhaW1wb3J0YW50O1xcclxcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcXHJcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBhdXRvICFpbXBvcnRhbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLXN1Z2dlc3Rpb25zLWNvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1zdWdnZXN0aW9ucy1jb250YWluZXIuYWN0aXZle1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgYm9yZGVyOiBibGFjayAwLjNweCBzb2xpZDtcXHJcXG59XFxyXFxuXFxyXFxuLyogLS0tLS0tLS0tLS0tLUxhbmRpbmcgUGFnZS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXHJcXG4ubGFuZGluZy1wYWdle1xcclxcbiAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5zZXQtbG9jYXRpb24tY29udGFpbmVye1xcclxcbiAgYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBwYWRkaW5nOiAwLjhyZW0gMS41cmVtO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHJlbmRlckxvY2F0aW9uU3VnZ2VzdGlvbnMgZnJvbSBcIi4vcmVuZGVyLWxvY2F0aW9uLXN1Z2dlc3Rpb25zXCI7XHJcbmltcG9ydCBjdXJyZW50V2VhdGhlclBhZ2VDb250cm9sbGVyIGZyb20gXCIuL2hvbWUtcGFnZVwiO1xyXG5cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGZldGNoV2VhdGhlckZvcmVjYXN0KGxvY2F0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT1lMGYyNzZlMDY1NDQ0MGM2YjRhMjEyOTExMjMyMTA3JnE9JHtsb2NhdGlvbn0mZGF5cz0zJmFxaT15ZXMmYWxlcnRzPXllc2AsIHsgbW9kZTogXCJjb3JzXCIgfSk7XHJcbiAgXHJcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hJcERhdGEoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2lwLWFwaS5jb20vanNvbi8/ZmllbGRzPTExMDYxNDFcIiwgeyBtb2RlOiBcImNvcnNcIiB9KTtcclxuICBcclxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgXHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hMb2NhdGlvblN1Z2dlc3Rpb25zKGxvY2F0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9zZWFyY2guanNvbj9rZXk9ZTBmMjc2ZTA2NTQ0NDBjNmI0YTIxMjkxMTIzMjEwNyZxPSR7bG9jYXRpb259YCwgeyBtb2RlOiBcImNvcnNcIiB9KTtcclxuICBcclxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgZXhwb3J0ICBhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyRGF0YShsb2NhdGlvbikge1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hXZWF0aGVyRm9yZWNhc3QobG9jYXRpb24pO1xyXG4gICAgICBjb25zb2xlLmxvZyhcImRhdGEgaW4gZ2V0IHdlYXRoZXIgZGF0YVwiKVxyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAvLyBjdXJyZW50V2VhdGhlclBhZ2VDb250cm9sbGVyKGRhdGEpO1xyXG4gICAgICAvLyBpbml0SG9tZVBhZ2UoZGF0YSlcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG4gIFxyXG4gIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRMb2NhdGlvblN1Z2dlc3Rpb25zKGxvY2F0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hMb2NhdGlvblN1Z2dlc3Rpb25zKGxvY2F0aW9uKTtcclxuICAgICAgLy8gY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgcmVuZGVyTG9jYXRpb25TdWdnZXN0aW9ucyhkYXRhKVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuICAiLCJleHBvcnQgZnVuY3Rpb24gZ2V0Q2l0eU5hbWUoZGF0YSl7XHJcbiAgICByZXR1cm4gZGF0YS5sb2NhdGlvbi5uYW1lXHJcbn07XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDb3VudHJ5TmFtZShkYXRhKXtcclxuICAgIHJldHVybiBkYXRhLmN1cnJlbnQuY2xvdWRcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50Q2xvdWQoZGF0YSl7XHJcbiAgICByZXR1cm4gZGF0YS5jdXJyZW50LmNsb3VkXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudENvbmRpdGlvbkNvZGUoZGF0YSl7XHJcbiAgICByZXR1cm4gZGF0YS5jdXJyZW50LmNvbmRpdGlvbi5jb2RlXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudENvbmRpdGlvblRleHQoZGF0YSl7XHJcbiAgICByZXR1cm4gZGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudEZlZWxzTGlrZVRlbXBJbkMoZGF0YSl7XHJcbiAgICByZXR1cm4gZGF0YS5jdXJyZW50LmZlZWxzbGlrZV9jXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudEZlZWxzTGlrZVRlbXBJbkYoZGF0YSl7XHJcbiAgICByZXR1cm4gZGF0YS5jdXJyZW50LmZlZWxzbGlrZV9mXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudEh1bWlkaXR5KGRhdGEpe1xyXG4gICAgcmV0dXJuIGRhdGEuY3VycmVudC5odW1pZGl0eVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRJc0RheShkYXRhKXtcclxuICAgIHJldHVybiBkYXRhLmN1cnJlbnQuaXNfZGF5XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudExhc3RVcGRhdGVkRXBvY2goZGF0YSl7XHJcbiAgICByZXR1cm4gZGF0YS5jdXJyZW50Lmxhc3RfdXBkYXRlZF9lcG9jaFxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRQcmVjaXBJbihkYXRhKXtcclxuICAgIHJldHVybiBkYXRhLmN1cnJlbnQucHJlY2lwX2luXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudFByZWNpcE1tKGRhdGEpe1xyXG4gICAgcmV0dXJuIGRhdGEuY3VycmVudC5wcmVjaXBfbW0gICAgXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudFByZXNzdXJlSW4oZGF0YSl7XHJcbiAgICByZXR1cm4gZGF0YS5jdXJyZW50LnByZXNzdXJlX0luICAgIFxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRQcmVzc3VyZU1iKGRhdGEpe1xyXG4gICAgcmV0dXJuIGRhdGEuY3VycmVudC5wcmVzc3VyZV9tYiAgICBcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50VGVtcEluQyhkYXRhKXtcclxuICAgIHJldHVybiBkYXRhLmN1cnJlbnQudGVtcF9jXHJcbn07XHJcbiAgICBcclxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRUZW1wSW5GKGRhdGEpe1xyXG4gICAgcmV0dXJuIGRhdGEuY3VycmVudC50ZW1wX2ZcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50VXYoZGF0YSl7XHJcbiAgICByZXR1cm4gZGF0YS5jdXJyZW50LnV2ICAgIFxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRWaXNJbkttKGRhdGEpe1xyXG4gICAgcmV0dXJuIGRhdGEuY3VycmVudC52aXNfa20gICBcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50VmlzSW5NaWxlcyhkYXRhKXtcclxuICAgIHJldHVybiBkYXRhLmN1cnJlbnQudmlzX21pbGVzICAgXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudFdpbmREaXJlY3Rpb24oZGF0YSl7XHJcbiAgICByZXR1cm4gZGF0YS5jdXJyZW50LndpbmRfZGlyXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudFdpbmRTcGVlZEluS3BoKGRhdGEpe1xyXG4gICAgcmV0dXJuIGRhdGEuY3VycmVudC53aW5kX2twaFxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRXaW5kU3BlZWRJbk1waChkYXRhKXtcclxuICAgIHJldHVybiBkYXRhLmN1cnJlbnQud2luZF9tcGhcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRGb3JlY2FzdFN1bnJpc2UoZGF0YSwgZGF5KXtcclxuICAgIHJldHVybiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2RheV0uYXN0cm8uc3VucmlzZVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEZvcmVjYXN0U3Vuc2V0KGRhdGEsIGRheSl7XHJcbiAgICByZXR1cm4gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtkYXldLmFzdHJvLnN1bnNldFxyXG59OyIsImltcG9ydCB7IGdldEN1cnJlbnRGZWVsc0xpa2VUZW1wSW5DLCBnZXRDdXJyZW50RmVlbHNMaWtlVGVtcEluRiwgZ2V0Q3VycmVudEh1bWlkaXR5IH0gZnJvbSBcIi4vaG9tZS1wYWdlLWdldHRlcnNcIjtcclxuaW1wb3J0IHsgc2V0RWxlbWVudElubmVyVGV4dCB9IGZyb20gXCIuL3V0aWxpdHktZm5zXCJcclxuXHJcbmZ1bmN0aW9uIGZvcm1hdFJlc3BvbnNlVG9Mb2NhbFRpbWVBbmREYXRlKGxvY2F0aW9uRGF0YSl7XHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgIHdlZWtkYXk6IFwic2hvcnRcIixcclxuICAgICAgICBkYXk6IFwibnVtZXJpY1wiLFxyXG4gICAgICAgIG1vbnRoOiBcImxvbmdcIixcclxuICAgICAgICB5ZWFyOiBcIm51bWVyaWNcIixcclxuICAgICAgICBob3VyOiBcIm51bWVyaWNcIixcclxuICAgICAgICBtaW51dGU6IFwibnVtZXJpY1wiLCBcclxuICAgICAgICBob3VyMTI6IHRydWUsXHJcbiAgICAgICAgdGltZVpvbmU6IGAke2xvY2F0aW9uRGF0YS50el9pZH1gLFxyXG4gICAgICAgIHRpbWVab25lTmFtZTogXCJzaG9ydFwiIFxyXG4gICAgfVxyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGxvY2F0aW9uRGF0YS5sb2NhbHRpbWVfZXBvY2ggKiAxMDAwKTtcclxuICAgIGNvbnN0IGxvY2FsVGltZUFuZERhdGUgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChcImVuLUdCXCIsIG9wdGlvbnMpLmZvcm1hdChkYXRlKTtcclxuICAgIHJldHVybiBsb2NhbFRpbWVBbmREYXRlXHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3VycmVudFdlYXRoZXJQYWdlQ29udHJvbGxlcihkYXRhKXtcclxuICAgIGNvbnN0IGN1cnJlbnREYXRhID0gZGF0YS5jdXJyZW50O1xyXG4gICAgY29uc3QgbG9jYXRpb25EYXRhID0gZGF0YS5sb2NhdGlvbjtcclxuXHJcbiAgICBcclxuICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICBjb25zb2xlLmxvZyhnZXRDdXJyZW50RmVlbHNMaWtlVGVtcEluRihkYXRhKSwgZ2V0Q3VycmVudEZlZWxzTGlrZVRlbXBJbkMoZGF0YSksIGdldEN1cnJlbnRIdW1pZGl0eShkYXRhKSlcclxuICAgIFxyXG5cclxuICAgIC8vIHNldEVsZW1lbnRJbm5lclRleHQoXCJuYW1lLXR4dFwiLCBsb2NhdGlvbkRhdGEubmFtZSk7XHJcbiAgICAvLyBzZXRFbGVtZW50SW5uZXJUZXh0KFwiY291bnRyeS10eHRcIiwgbG9jYXRpb25EYXRhLmNvdW50cnkpO1xyXG4gICAgLy8gc2V0RWxlbWVudElubmVyVGV4dChcInJlZ2lvbi10eHRcIiwgbG9jYXRpb25EYXRhLnJlZ2lvbik7XHJcbiAgICAvLyBzZXRFbGVtZW50SW5uZXJUZXh0KFwibG9jYWwtdGltZS10eHRcIiwgZm9ybWF0UmVzcG9uc2VUb0xvY2FsVGltZUFuZERhdGUobG9jYXRpb25EYXRhKSk7XHJcbiAgICAvLyBzZXRFbGVtZW50SW5uZXJUZXh0KFwibG9jYWwtZGF0ZS10eHRcIiwgZm9ybWF0RGF0ZShsb2NhdGlvbkRhdGUpKTtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7IGdldFdlYXRoZXJEYXRhIH0gZnJvbSBcIi4vZm9yZWNhc3QtZGF0YS1mZXRjaC1mbnNcIjtcclxuaW1wb3J0IHsgZ2V0Q2l0eU5hbWUsIGdldEN1cnJlbnRDb25kaXRpb25UZXh0LCBnZXRDdXJyZW50VGVtcEluQywgZ2V0Q3VycmVudFZpc0luS20gfSBmcm9tIFwiLi9ob21lLXBhZ2UtZ2V0dGVyc1wiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHNldENpdHlOYW1lKGNsYXNzTmFtZSwgbmFtZSl7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY2l0eS1uYW1lJHtjbGFzc05hbWV9YCkuaW5uZXJUZXh0ID0gbmFtZTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0Q3VycmVudFRlbXAoY2xhc3NOYW1lLCB0ZW1wKXtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jdXJyZW50LXRlbXAke2NsYXNzTmFtZX1gKS5pbm5lclRleHQgPSB0ZW1wO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRDdXJyZW50Q29uZGl0aW9uc1R4dChjbGFzc05hbWUsIGN1cnJlbnRDb25kaXRpb25zVHh0KXtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jdXJyZW50LWNvbmRpdGlvbnMtdHh0JHtjbGFzc05hbWV9YCkuaW5uZXJUZXh0ID0gY3VycmVudENvbmRpdGlvbnNUeHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldEN1cnJlbnRDb25kaXRpb25zTG9nbyhjbGFzc05hbWUsIGN1cnJlbnRDb25kaXRpb25zTG9nbyl7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY3VycmVudC1jb25kaXRpb25zLWxvZ28uJHtjbGFzc05hbWV9YCkuaW5uZXJUZXh0ID0gY3VycmVudENvbmRpdGlvbnNMb2dvO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRWaXNUeHQoY2xhc3NOYW1lLCB2aXNUeHQgKXtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC52aXMtdHh0JHtjbGFzc05hbWV9YCkuaW5uZXJUZXh0ID0gdmlzVHh0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRWaXNMb2dvKGNsYXNzTmFtZSwgdmlzTG9nbyApe1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnZpcy1sb2dvXCIke2NsYXNzTmFtZX1gKS5pbm5lckhUTUwgPSB2aXNMb2dvO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRMYW5kaW5nUGFnZUNhcmREZXRhaWxzKGNsYXNzTmFtZSwgZGF0YSl7XHJcbiAgICBzZXRDaXR5TmFtZShjbGFzc05hbWUsIGdldENpdHlOYW1lKGRhdGEpKVxyXG4gICAgc2V0Q3VycmVudFRlbXAoY2xhc3NOYW1lLCBnZXRDdXJyZW50VGVtcEluQyhkYXRhKSlcclxuICAgIHNldEN1cnJlbnRDb25kaXRpb25zVHh0KGNsYXNzTmFtZSwgZ2V0Q3VycmVudENvbmRpdGlvblRleHQoZGF0YSkpXHJcbiAgICBzZXRWaXNUeHQoY2xhc3NOYW1lLCBnZXRDdXJyZW50VmlzSW5LbShkYXRhKSk7XHJcbn1cclxuXHJcblxyXG5hc3luYyBmdW5jdGlvbiBjYWxsQXBpV2l0Y2hDSXR5QW5kQ291bnRyeShjaXR5QW5kQ291bnRyeSl7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0V2VhdGhlckRhdGEoY2l0eUFuZENvdW50cnkpO1xyXG4gICAgcmV0dXJuIGRhdGFcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gbGFuZGluZ1BhZ2VJbml0KCl7XHJcblxyXG4gICAgY29uc3QgZHViYWlEYXRhID0gYXdhaXQgY2FsbEFwaVdpdGNoQ0l0eUFuZENvdW50cnkoXCJEdWJhaSwgRW1pcmF0ZSBvZiBEdWJhaVwiKTtcclxuICAgIHNldExhbmRpbmdQYWdlQ2FyZERldGFpbHMoXCIuZHViYWlcIiwgZHViYWlEYXRhKTtcclxuXHJcbiAgICBjb25zdCBsb25kb25EYXRhID0gYXdhaXQgY2FsbEFwaVdpdGNoQ0l0eUFuZENvdW50cnkoXCJMb25kb24sIFVLXCIpO1xyXG4gICAgc2V0TGFuZGluZ1BhZ2VDYXJkRGV0YWlscyhcIi5sb25kb25cIiwgbG9uZG9uRGF0YSk7XHJcbiAgICBcclxuICAgIGNvbnN0IHN5ZG5leURhdGEgPSBhd2FpdCBjYWxsQXBpV2l0Y2hDSXR5QW5kQ291bnRyeShcIlN5ZG5leSwgQXVzdHJhbGlhXCIpO1xyXG4gICAgc2V0TGFuZGluZ1BhZ2VDYXJkRGV0YWlscyhcIi5zeWRuZXlcIiwgc3lkbmV5RGF0YSk7XHJcblxyXG4gICAgY29uc3QgbmV3WW9ya0RhdGEgPSBhd2FpdCBjYWxsQXBpV2l0Y2hDSXR5QW5kQ291bnRyeShcIk5ldy1Zb3JrLCBVU0FcIik7XHJcbiAgICBzZXRMYW5kaW5nUGFnZUNhcmREZXRhaWxzKFwiLm5ldy15b3JrXCIsIG5ld1lvcmtEYXRhKTtcclxuICAgIFxyXG5cclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgeyBnZXRXZWF0aGVyRGF0YSB9IGZyb20gXCIuL2ZvcmVjYXN0LWRhdGEtZmV0Y2gtZm5zXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gY2FsbEFwaVdpdGhEZXZpY2VMb2NhdGlvbihsYXQsIGxvbmcpe1xyXG4gICAgY29uc29sZS5sb2cobGF0LCBsb25nKVxyXG4gICAgZ2V0V2VhdGhlckRhdGEoYCR7bGF0fSwke2xvbmd9YClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldERldmljZUdlb2xvY2F0aW9uQW5kQ2FsbEFwaSgpe1xyXG4gICAgaWYgKFwiZ2VvbG9jYXRpb25cIiBpbiBuYXZpZ2F0b3IpIHtcclxuICAgICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKFxyXG4gICAgICAgICAgcG9zaXRpb24gPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB7bGF0aXR1ZGV9ID0gcG9zaXRpb24uY29vcmRzO1xyXG4gICAgICAgICAgICBjb25zdCB7bG9uZ2l0dWRlfSA9IHBvc2l0aW9uLmNvb3JkcztcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJMYXRpdHVkZTpcIiwgbGF0aXR1ZGUpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkxvbmdpdHVkZTpcIiwgbG9uZ2l0dWRlKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocG9zaXRpb24pXHJcbiAgICAgICAgICAgIGNhbGxBcGlXaXRoRGV2aWNlTG9jYXRpb24obGF0aXR1ZGUsIGxvbmdpdHVkZSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGdldHRpbmcgbG9jYXRpb246XCIsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkdlb2xvY2F0aW9uIGlzIG5vdCBhdmFpbGFibGUgaW4gdGhpcyBicm93c2VyLlwiKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJpbmRHZXREZXZpY2VHZW9sb2NhdGlvbkV2ZW50KCl7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVzZS1jdXJyZW50LWxvY2F0aW9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnZXREZXZpY2VHZW9sb2NhdGlvbkFuZENhbGxBcGkpXHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gc2VsZWN0QW5kQ2FsbEFwaVdpdGhTdWdnZXN0aW9uKGUpe1xyXG4gICAgY29uc29sZS5sb2coZS50YXJnZXQuaW5uZXJUZXh0KVxyXG4gICAgZ2V0V2VhdGhlckRhdGEoZS50YXJnZXQuaW5uZXJUZXh0KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYmluZExvY2F0aW9uU3VnZ2VzdGlvblNlbGVjdEV2ZW50KCl7XHJcbiAgICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc3VnZ2VzdGlvblwiKSkuZm9yRWFjaChzdWdnZXN0aW9uID0+e1xyXG4gICAgICAgIHN1Z2dlc3Rpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNlbGVjdEFuZENhbGxBcGlXaXRoU3VnZ2VzdGlvbilcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gaGFuZGxlRm9jdXMoKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2gtc3VnZ2VzdGlvbnMtY29udGFpbmVyXCIpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICB9LFwiMTAwXCIpO1xyXG59XHJcbiAgXHJcbmZ1bmN0aW9uIGhhbmRsZUJsdXIoKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2gtc3VnZ2VzdGlvbnMtY29udGFpbmVyXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2gtc3VnZ2VzdGlvbnMtbGlzdFwiKS5pbm5lclRleHQgPSBcIlwiO1xyXG4gICAgfSxcIjIwMFwiKTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBiaW5kTG9jYXRpb25TdWdnZXN0aW9uc0Ryb3BEb3duRXZlbnRzKCl7XHJcbiAgICBjb25zdCBsb2NhdGlvblNlYXJjaEJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG9jYXRpb24tc2VhcmNoXCIpO1xyXG5cclxuICAgIGxvY2F0aW9uU2VhcmNoQmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCBoYW5kbGVGb2N1cyk7XHJcbiAgICBsb2NhdGlvblNlYXJjaEJhci5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCBoYW5kbGVCbHVyKTtcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50QW5kQWRkQ2xhc3MgfSBmcm9tIFwiLi91dGlsaXR5LWZuc1wiXHJcbmltcG9ydCB7IGJpbmRMb2NhdGlvblN1Z2dlc3Rpb25TZWxlY3RFdmVudCB9IGZyb20gXCIuL2xvY2F0aW9uLXN1Z2dlc3Rpb25zLWRyb3AtZG93blwiXHJcblxyXG5mdW5jdGlvbiBmaWx0ZXJMb2NhdGlvblN1Z2dlc3Rpb25zRGF0YShkYXRhKXtcclxuICAgIGNvbnN0IGxvY2F0aW9uU3VnZ2VzdGlvbnNBcnJheSA9IFtdXHJcbiAgICBkYXRhLmZvckVhY2goZWxlbSA9PntcclxuICAgICAgICBsb2NhdGlvblN1Z2dlc3Rpb25zQXJyYXkucHVzaChbZWxlbS5uYW1lLCBlbGVtLnJlZ2lvbiwgZWxlbS5jb3VudHJ5XSkgICAgICAgICAgICAgICBcclxuICAgIH0pXHJcbiAgICByZXR1cm4gbG9jYXRpb25TdWdnZXN0aW9uc0FycmF5XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlckxvY2F0aW9uU3VnZ2VzdGlvbnMoZGF0YSl7XHJcbiAgICBcclxuICAgIGNvbnN0IHNlYXJjaFN1Z2dlc3Rpb25zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2gtc3VnZ2VzdGlvbnMtbGlzdFwiKTtcclxuICAgIHNlYXJjaFN1Z2dlc3Rpb25zQ29udGFpbmVyLmlubmVyVGV4dCA9XCJcIjtcclxuICAgIFxyXG4gICAgaWYgKGRhdGEubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgY29uc3QgZm9ybWF0dGVkU3VnZ2VzdGlvbnNBcnJheSA9IGZpbHRlckxvY2F0aW9uU3VnZ2VzdGlvbnNEYXRhKGRhdGEpXHJcbiAgICAgICAgZm9ybWF0dGVkU3VnZ2VzdGlvbnNBcnJheS5mb3JFYWNoKGVsZW1lbnQgPT57XHJcbiAgICAgICAgICAgIGNvbnN0IGxpID0gY3JlYXRlRWxlbWVudEFuZEFkZENsYXNzKFwibGlcIiwgXCJzdWdnZXN0aW9uXCIpXHJcbiAgICAgICAgICAgIGxpLmlubmVyVGV4dCA9IGVsZW1lbnQuam9pbihcIiwgXCIpO1xyXG4gICAgICAgICAgICBzZWFyY2hTdWdnZXN0aW9uc0NvbnRhaW5lci5hcHBlbmQobGkpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgYmluZExvY2F0aW9uU3VnZ2VzdGlvblNlbGVjdEV2ZW50KCk7XHJcbn1cclxuIiwiZnVuY3Rpb24gY3JlYXRlRWxlbWVudEFuZEFkZENsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSl7XHJcbiAgICBjb25zdCBjcmVhdGVkRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XHJcbiAgICBjcmVhdGVkRWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSlcclxuICAgIHJldHVybiBjcmVhdGVkRWxlbWVudFxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRFbGVtZW50SW5uZXJUZXh0KGVsZW1lbnQsIHRleHQpe1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7ZWxlbWVudH1gKS5pbm5lclRleHQgPSB0ZXh0O1xyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVFbGVtZW50QW5kQWRkQ2xhc3MsIHNldEVsZW1lbnRJbm5lclRleHQgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xyXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBiaW5kR2V0RGV2aWNlR2VvbG9jYXRpb25FdmVudCwgYmluZExvY2F0aW9uU3VnZ2VzdGlvbnNEcm9wRG93bkV2ZW50cywgZ2V0RGV2aWNlR2VvbG9jYXRpb25BbmRDYWxsQXBpICB9IGZyb20gXCIuL2xvY2F0aW9uLXN1Z2dlc3Rpb25zLWRyb3AtZG93blwiO1xyXG5pbXBvcnQgeyBnZXRXZWF0aGVyRGF0YSwgZ2V0TG9jYXRpb25TdWdnZXN0aW9ucywgZmV0Y2hJcERhdGEgfSBmcm9tIFwiLi9mb3JlY2FzdC1kYXRhLWZldGNoLWZuc1wiO1xyXG5pbXBvcnQgbGFuZGluZ1BhZ2VJbml0IGZyb20gXCIuL2xhbmRpbmctcGFnZVwiO1xyXG5cclxuXHJcblxyXG5cclxuLy8gYmluZExvY2F0aW9uU3VnZ2VzdGlvbnNEcm9wRG93bkV2ZW50cygpO1xyXG4vLyBiaW5kTG9jYXRpb25TdWdnZXN0aW9uU2VsZWN0RXZlbnQoKTtcclxuLy8gYmluZEdldERldmljZUdlb2xvY2F0aW9uRXZlbnQoKTtcclxuLy8gZ2V0RGV2aWNlR2VvbG9jYXRpb25BbmRDYWxsQXBpKCk7XHJcbi8vIGZldGNoSXBEYXRhKCk7XHJcbi8vIGdldFdlYXRoZXJEYXRhKFwiamVydXNhbGVtXCIpO1xyXG5sYW5kaW5nUGFnZUluaXQoKTtcclxuXHJcblxyXG5mdW5jdGlvbiBjYWxsR2V0TG9jYXRpb25TdWdnZXN0aW9ucyhlKXtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3QgdXNlcklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsb2NhdGlvbi1zZWFyY2hcIikudmFsdWVcclxuICBpZiAodXNlcklucHV0ICE9PSBcIlwiKXtcclxuICAgIGdldExvY2F0aW9uU3VnZ2VzdGlvbnModXNlcklucHV0KVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2FsbEdldFdlYXRoZXJEYXRhKGUpe1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBjb25zdCB1c2VySW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvY2F0aW9uLXNlYXJjaFwiKS52YWx1ZVxyXG4gIGdldFdlYXRoZXJEYXRhKHVzZXJJbnB1dCk7XHJcbn1cclxuXHJcbi8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG9jYXRpb24tc2VhcmNoLWZvcm1cIikuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBjYWxsR2V0V2VhdGhlckRhdGEpXHJcbi8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG9jYXRpb24tc2VhcmNoXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBjYWxsR2V0TG9jYXRpb25TdWdnZXN0aW9ucylcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9