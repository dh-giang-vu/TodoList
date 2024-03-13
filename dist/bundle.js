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
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --sidebar-width: 300px;
    --row-height: 48px;
    --std-border: 1px solid black;
}

body {
    margin: 0;
    padding: 0;
}




/* Everything in Sidebar */

.sidebar {
    background-color: black;
    
    /* Fixed on left side */
    position: fixed;
    top: 0;
    left: 0;
    
    height: 100%;
    width: var(--sidebar-width);



    --sidebar-padding-left: 32px;
    --sidebar-font-size: 16px;
    --sidebar-accented-color: #fff;

    font-size: var(--sidebar-font-size);
    color: var(--sidebar-accented-color);
}

.profile-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;

    margin-top: 16px;
    padding-left: 64px;

}

.pfp-container {
    width: 50px;
    height: 50px;
    background-color: var(--sidebar-accented-color);
    border-radius: 100%;

    /* Centre image using flexbox */
    display: flex;
    justify-content: center;
    align-items: center;
}

.pfp-container img {
    max-width: 90%;
    max-height: 90%;
    border-radius: 100%;
}


.sidebar ul {
    list-style-type: none;
    padding: 0;
}

.nav-list {
    margin-top: 64px;
}

.nav-list li {
    height: 48px;
}

.nav-list a {
    max-width: 100%;
    height: 100%;
    
    padding-left: var(--sidebar-padding-left);
    
    /* Vertically center text */
    display: flex;
    align-items: center;
}


.management ul {
    position: absolute;
    margin: 0;
    bottom: 64px;
}

.management ul li {
    padding-left: var(--sidebar-padding-left);
    height: 32px;
}

.sidebar a {
    text-decoration: none;
    color: var(--sidebar-accented-color);
}

.nav-list a:hover, 
a.active{
    background-color: var(--sidebar-accented-color);
    color: black;
}

/* Main content */

.main-content {
    margin-left: var(--sidebar-width);
}

.main-content .active {
    /* Only show active content */
    display: block;
}

.all-projects {
    display: none;
}

.all-tasks {
    display: none;
}

.finished-projects {
    display: none;
}

.finished-tasks {
    display: none;
}


.title-container {
    font-size: 64px;
    font-weight: 700;
    margin-top: 32px;
    height: 80px;

    margin-left: 3%;

    /* title underline */
    width: fit-content;
    height: fit-content;
    border-bottom: 4px solid black;
    padding-right: 24px;

}

.projects-container,
.tasks-container {
    margin: 36px clamp(8px, 10%, 96px);
}

.project {
    margin-top: 16px;
    
    display: grid;
    grid-template-rows: var(--row-height) 1fr;
    grid-template-columns: 2fr 1fr;

    border: var(--std-border);

}

.proj-name-container {
    /* styling for the "table" */
    grid-area: 1 / 1 / 2 / 3;
    border-bottom: var(--std-border);
    
    font-weight: 700;
    font-size: 1.5em;
    padding-left: 8px;

    /* vertically centre project's name */
    display: flex;
    align-items: center;
}

.task-list {
    margin: 0;
    padding: 0;
    list-style-type: none;

    grid-area: 2 / 1 / -1 / 2;

    display: grid;
    grid-row: 1fr;
    grid-template-columns: 1fr;

    border-right: var(--std-border);


}

.proj-note {
    grid-area: 2 / 2 / -1 / 3;

}

.task-item {
    border-bottom: var(--std-border);
    height: var(--row-height);

    /* Checkbox and Task Name in 1 row */
    display: flex;
}

.task-list span {
    height: inherit;
}

.task-item:last-child {
    border-bottom: none;
}

.cb-container {
    height: 100%;
    aspect-ratio: 1 / 1;
    border-right: var(--std-border);

    display: flex;
    align-items: center;
    justify-content: center;
}

input[type=checkbox] {
    transform: scale(2);
}


.task-name {
    display: flex;
    align-items: center;

    padding-left: min(10px,3%);
}



/* -------------------------- ALL TASKS -------------------------- */

#add-task {
    margin-bottom: 6px;
    display: flex;
    justify-content: end;
}

.table,
.table li {
    margin: 0;
    padding: 0;
    list-style-type: none;
}

.table {
    display: grid;
    grid-template-rows: var(--row-height);
}

.tb-row {
    /* divide each row into 4 columns */
    display: grid;
    grid-template-rows: 100%;
    grid-template-columns: var(--row-height) repeat(2, minmax(128px, 3fr)) minmax(90px, 2fr);
    
    /* row styling + border */
    height: var(--row-height);
    border: var(--std-border);
    border-top: none;
    border-right: none;
}

.tb-header {
    border-top: var(--std-border);
    font-weight: 700;
    font-size: 1.5em
}

.tb-row-item {
    display: flex;
    align-items: center;
    border-right: var(--std-border);
}

.task,
.due-date,
.priority {
    padding-left: 8px;
}




/* Media Queries to hide sidebar when page is small */
@media screen and (max-width:800px) {
    .sidebar {
        display: none;
    }

    .main-content {
        margin-left: 0;
    }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n    --sidebar-width: 300px;\r\n    --row-height: 48px;\r\n    --std-border: 1px solid black;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n\r\n\r\n\r\n/* Everything in Sidebar */\r\n\r\n.sidebar {\r\n    background-color: black;\r\n    \r\n    /* Fixed on left side */\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    \r\n    height: 100%;\r\n    width: var(--sidebar-width);\r\n\r\n\r\n\r\n    --sidebar-padding-left: 32px;\r\n    --sidebar-font-size: 16px;\r\n    --sidebar-accented-color: #fff;\r\n\r\n    font-size: var(--sidebar-font-size);\r\n    color: var(--sidebar-accented-color);\r\n}\r\n\r\n.profile-container {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 32px;\r\n\r\n    margin-top: 16px;\r\n    padding-left: 64px;\r\n\r\n}\r\n\r\n.pfp-container {\r\n    width: 50px;\r\n    height: 50px;\r\n    background-color: var(--sidebar-accented-color);\r\n    border-radius: 100%;\r\n\r\n    /* Centre image using flexbox */\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.pfp-container img {\r\n    max-width: 90%;\r\n    max-height: 90%;\r\n    border-radius: 100%;\r\n}\r\n\r\n\r\n.sidebar ul {\r\n    list-style-type: none;\r\n    padding: 0;\r\n}\r\n\r\n.nav-list {\r\n    margin-top: 64px;\r\n}\r\n\r\n.nav-list li {\r\n    height: 48px;\r\n}\r\n\r\n.nav-list a {\r\n    max-width: 100%;\r\n    height: 100%;\r\n    \r\n    padding-left: var(--sidebar-padding-left);\r\n    \r\n    /* Vertically center text */\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n\r\n.management ul {\r\n    position: absolute;\r\n    margin: 0;\r\n    bottom: 64px;\r\n}\r\n\r\n.management ul li {\r\n    padding-left: var(--sidebar-padding-left);\r\n    height: 32px;\r\n}\r\n\r\n.sidebar a {\r\n    text-decoration: none;\r\n    color: var(--sidebar-accented-color);\r\n}\r\n\r\n.nav-list a:hover, \r\na.active{\r\n    background-color: var(--sidebar-accented-color);\r\n    color: black;\r\n}\r\n\r\n/* Main content */\r\n\r\n.main-content {\r\n    margin-left: var(--sidebar-width);\r\n}\r\n\r\n.main-content .active {\r\n    /* Only show active content */\r\n    display: block;\r\n}\r\n\r\n.all-projects {\r\n    display: none;\r\n}\r\n\r\n.all-tasks {\r\n    display: none;\r\n}\r\n\r\n.finished-projects {\r\n    display: none;\r\n}\r\n\r\n.finished-tasks {\r\n    display: none;\r\n}\r\n\r\n\r\n.title-container {\r\n    font-size: 64px;\r\n    font-weight: 700;\r\n    margin-top: 32px;\r\n    height: 80px;\r\n\r\n    margin-left: 3%;\r\n\r\n    /* title underline */\r\n    width: fit-content;\r\n    height: fit-content;\r\n    border-bottom: 4px solid black;\r\n    padding-right: 24px;\r\n\r\n}\r\n\r\n.projects-container,\r\n.tasks-container {\r\n    margin: 36px clamp(8px, 10%, 96px);\r\n}\r\n\r\n.project {\r\n    margin-top: 16px;\r\n    \r\n    display: grid;\r\n    grid-template-rows: var(--row-height) 1fr;\r\n    grid-template-columns: 2fr 1fr;\r\n\r\n    border: var(--std-border);\r\n\r\n}\r\n\r\n.proj-name-container {\r\n    /* styling for the \"table\" */\r\n    grid-area: 1 / 1 / 2 / 3;\r\n    border-bottom: var(--std-border);\r\n    \r\n    font-weight: 700;\r\n    font-size: 1.5em;\r\n    padding-left: 8px;\r\n\r\n    /* vertically centre project's name */\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.task-list {\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style-type: none;\r\n\r\n    grid-area: 2 / 1 / -1 / 2;\r\n\r\n    display: grid;\r\n    grid-row: 1fr;\r\n    grid-template-columns: 1fr;\r\n\r\n    border-right: var(--std-border);\r\n\r\n\r\n}\r\n\r\n.proj-note {\r\n    grid-area: 2 / 2 / -1 / 3;\r\n\r\n}\r\n\r\n.task-item {\r\n    border-bottom: var(--std-border);\r\n    height: var(--row-height);\r\n\r\n    /* Checkbox and Task Name in 1 row */\r\n    display: flex;\r\n}\r\n\r\n.task-list span {\r\n    height: inherit;\r\n}\r\n\r\n.task-item:last-child {\r\n    border-bottom: none;\r\n}\r\n\r\n.cb-container {\r\n    height: 100%;\r\n    aspect-ratio: 1 / 1;\r\n    border-right: var(--std-border);\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\ninput[type=checkbox] {\r\n    transform: scale(2);\r\n}\r\n\r\n\r\n.task-name {\r\n    display: flex;\r\n    align-items: center;\r\n\r\n    padding-left: min(10px,3%);\r\n}\r\n\r\n\r\n\r\n/* -------------------------- ALL TASKS -------------------------- */\r\n\r\n#add-task {\r\n    margin-bottom: 6px;\r\n    display: flex;\r\n    justify-content: end;\r\n}\r\n\r\n.table,\r\n.table li {\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style-type: none;\r\n}\r\n\r\n.table {\r\n    display: grid;\r\n    grid-template-rows: var(--row-height);\r\n}\r\n\r\n.tb-row {\r\n    /* divide each row into 4 columns */\r\n    display: grid;\r\n    grid-template-rows: 100%;\r\n    grid-template-columns: var(--row-height) repeat(2, minmax(128px, 3fr)) minmax(90px, 2fr);\r\n    \r\n    /* row styling + border */\r\n    height: var(--row-height);\r\n    border: var(--std-border);\r\n    border-top: none;\r\n    border-right: none;\r\n}\r\n\r\n.tb-header {\r\n    border-top: var(--std-border);\r\n    font-weight: 700;\r\n    font-size: 1.5em\r\n}\r\n\r\n.tb-row-item {\r\n    display: flex;\r\n    align-items: center;\r\n    border-right: var(--std-border);\r\n}\r\n\r\n.task,\r\n.due-date,\r\n.priority {\r\n    padding-left: 8px;\r\n}\r\n\r\n\r\n\r\n\r\n/* Media Queries to hide sidebar when page is small */\r\n@media screen and (max-width:800px) {\r\n    .sidebar {\r\n        display: none;\r\n    }\r\n\r\n    .main-content {\r\n        margin-left: 0;\r\n    }\r\n}"],"sourceRoot":""}]);
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

/***/ "./src/script/dom.js":
/*!***************************!*\
  !*** ./src/script/dom.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayController: () => (/* binding */ displayController)
/* harmony export */ });
/**
 * Script dedicated to functions for creating/dealing with DOM elements
 */


const tasksTable = document.querySelector(".table");




const createTaskDOM = (task) => {
    const taskItem = document.createElement('li');
    taskItem.className = "tb-row";

    const cbContainer = document.createElement('div');
    cbContainer.classList.add("tb-row-item");
    cbContainer.classList.add("cb-container");

    const cb = document.createElement('input');
    cb.type = "checkbox";
    cbContainer.appendChild(cb);

    const taskName = document.createElement('div');
    taskName.classList.add("tb-row-item");
    taskName.classList.add("task");
    taskName.textContent = task.name;

    const dueDate = document.createElement('div');
    dueDate.classList.add("tb-row-item");
    dueDate.classList.add("due-date");
    dueDate.textContent = task.dueDate;

    const priority = document.createElement('div');
    priority.classList.add("tb-row-item");
    priority.classList.add("priority");
    priority.textContent = task.priority;

    taskItem.appendChild(cbContainer);
    taskItem.appendChild(taskName);
    taskItem.appendChild(dueDate);
    taskItem.appendChild(priority);

    return taskItem;
}


const displayController = (function() {

    /* =============== Sidebar Tab Switching functions =============== */
    let activeIndex = 1;
    const sidebarNavLinks = document.querySelectorAll('.nav-list a');
    const mainContentPgs = document.querySelector(".main-content").children;
    
    const removeActive = () => {
        sidebarNavLinks[activeIndex].classList.remove("active");
        mainContentPgs[activeIndex].classList.remove("active");
    }

    const makeActive = () => {
        sidebarNavLinks[activeIndex].classList.add("active");
        mainContentPgs[activeIndex].classList.add("active");
    }

    const changeActiveTab = (newIndex) => {
        removeActive();
        activeIndex = newIndex;
        makeActive();
    }
    
    // Display page with index === 0 on page load 
    window.onload = makeActive();


    /* Render Task Board Page */
    const renderTaskBoard = (allTasks) => {
        tasksTable.replaceChildren(tasksTable.firstElementChild);
        for (let i = 0; i < allTasks.length; i++) {
            console.log(allTasks[i]);
            tasksTable.appendChild(createTaskDOM(allTasks[i]));
        }
    }

    return {changeActiveTab, renderTaskBoard}
})();




/***/ }),

/***/ "./src/script/global_var.js":
/*!**********************************!*\
  !*** ./src/script/global_var.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PRIORITY: () => (/* binding */ PRIORITY),
/* harmony export */   STATUS: () => (/* binding */ STATUS)
/* harmony export */ });
const PRIORITY = (function() {
    const UNDEFINED = -1;
    const LOW = 0;
    const MED = 1;
    const HIGH = 2;

    return {UNDEFINED, LOW, MED, HIGH};

})();

const STATUS = (function() {
    const NOT_STARTED = "NS";
    const IN_PROGRESS = "IS";
    const DONE = "D";

    return {NOT_STARTED, IN_PROGRESS, DONE};
})();



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
/*!*****************************!*\
  !*** ./src/script/index.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./src/style.css");
/* harmony import */ var _global_var_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global_var.js */ "./src/script/global_var.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom.js */ "./src/script/dom.js");




const sidebarNav = document.querySelector(".nav-list");
const addTaskBtn = document.querySelector("#add-task button");

addTaskBtn.addEventListener("click", function() {
    taskManager.createTask("THis is ANOTHER task name", "due date", _global_var_js__WEBPACK_IMPORTED_MODULE_1__.PRIORITY.HIGH);
    _dom_js__WEBPACK_IMPORTED_MODULE_2__.displayController.renderTaskBoard(taskManager.allTasks);
})

/* Manage all tasks */
const taskManager = (function() {
    const allTasks = [];

    /* Create new task object and add to allTasks array */
    const createTask = (name, dueDate, priority=_global_var_js__WEBPACK_IMPORTED_MODULE_1__.PRIORITY.UNDEFINED) => {
        let status = _global_var_js__WEBPACK_IMPORTED_MODULE_1__.STATUS.NOT_STARTED;
        allTasks.push({name, dueDate, priority, status});
    }

    /* Delete task object from allTasks array */
    const deleteTask = (taskNum) => {
        allTasks.splice(taskNum, 1);
    }

    /* Set priority of task object */
    const setPriority = (task, priority) => {
        task.priority = priority;
    }

    /* Set status of task object - (Not Started, In Progress, Done) */
    const setStatus = (task, status) => {
        task.status = status;
    }

    return {createTask, deleteTask, setPriority, setStatus, allTasks};

})();


/* Manage all projects */
const projectManager = (function() {
    const allProjects = [];

    const createProject = (name) => {
        const tasksArray = [];
        allProjects.push({name, tasksArray});
    }

    return {createProject, allProjects};

})();



sidebarNav.addEventListener("click", function(e) {
    if (e.target.tagName !== 'A') {
        return;
    }
    const newActiveIndex = e.target.getAttribute('index');
    _dom_js__WEBPACK_IMPORTED_MODULE_2__.displayController.changeActiveTab(newActiveIndex);
})





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsU0FBUyxhQUFhLE1BQU0sYUFBYSxhQUFhLFdBQVcsVUFBVSxXQUFXLFVBQVUsZUFBZSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFlBQVksWUFBWSxjQUFjLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxjQUFjLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFFBQVEsS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsV0FBVyxhQUFhLGFBQWEsV0FBVyxZQUFZLFFBQVEsS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxPQUFPLGFBQWEsTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsUUFBUSxLQUFLLFVBQVUsWUFBWSxhQUFhLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGNBQWMsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLGFBQWEsV0FBVyxZQUFZLGNBQWMsY0FBYyxPQUFPLEtBQUssWUFBWSxhQUFhLGNBQWMsYUFBYSxhQUFhLGNBQWMsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxhQUFhLGNBQWMsV0FBVyxVQUFVLGFBQWEsZUFBZSxPQUFPLEtBQUssYUFBYSxPQUFPLEtBQUssWUFBWSxjQUFjLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGNBQWMsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksUUFBUSxLQUFLLFVBQVUsYUFBYSxhQUFhLFNBQVMsYUFBYSxNQUFNLFlBQVksV0FBVyxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxP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QUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQUM2QjtBQUNOO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRUFBb0Usb0RBQVE7QUFDNUUsSUFBSSxzREFBaUI7QUFDckIsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxvREFBUTtBQUN4RCxxQkFBcUIsa0RBQU07QUFDM0IsdUJBQXVCLGdDQUFnQztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsaUJBQWlCO0FBQzNDO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksc0RBQWlCO0FBQ3JCLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0L2RvbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0L2dsb2JhbF92YXIuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xyXG4gICAgLS1zaWRlYmFyLXdpZHRoOiAzMDBweDtcclxuICAgIC0tcm93LWhlaWdodDogNDhweDtcclxuICAgIC0tc3RkLWJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8qIEV2ZXJ5dGhpbmcgaW4gU2lkZWJhciAqL1xyXG5cclxuLnNpZGViYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBcclxuICAgIC8qIEZpeGVkIG9uIGxlZnQgc2lkZSAqL1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIFxyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IHZhcigtLXNpZGViYXItd2lkdGgpO1xyXG5cclxuXHJcblxyXG4gICAgLS1zaWRlYmFyLXBhZGRpbmctbGVmdDogMzJweDtcclxuICAgIC0tc2lkZWJhci1mb250LXNpemU6IDE2cHg7XHJcbiAgICAtLXNpZGViYXItYWNjZW50ZWQtY29sb3I6ICNmZmY7XHJcblxyXG4gICAgZm9udC1zaXplOiB2YXIoLS1zaWRlYmFyLWZvbnQtc2l6ZSk7XHJcbiAgICBjb2xvcjogdmFyKC0tc2lkZWJhci1hY2NlbnRlZC1jb2xvcik7XHJcbn1cclxuXHJcbi5wcm9maWxlLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZ2FwOiAzMnB4O1xyXG5cclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDY0cHg7XHJcblxyXG59XHJcblxyXG4ucGZwLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItYWNjZW50ZWQtY29sb3IpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuXHJcbiAgICAvKiBDZW50cmUgaW1hZ2UgdXNpbmcgZmxleGJveCAqL1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnBmcC1jb250YWluZXIgaW1nIHtcclxuICAgIG1heC13aWR0aDogOTAlO1xyXG4gICAgbWF4LWhlaWdodDogOTAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxufVxyXG5cclxuXHJcbi5zaWRlYmFyIHVsIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5uYXYtbGlzdCB7XHJcbiAgICBtYXJnaW4tdG9wOiA2NHB4O1xyXG59XHJcblxyXG4ubmF2LWxpc3QgbGkge1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG59XHJcblxyXG4ubmF2LWxpc3QgYSB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBcclxuICAgIHBhZGRpbmctbGVmdDogdmFyKC0tc2lkZWJhci1wYWRkaW5nLWxlZnQpO1xyXG4gICAgXHJcbiAgICAvKiBWZXJ0aWNhbGx5IGNlbnRlciB0ZXh0ICovXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi5tYW5hZ2VtZW50IHVsIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJvdHRvbTogNjRweDtcclxufVxyXG5cclxuLm1hbmFnZW1lbnQgdWwgbGkge1xyXG4gICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1zaWRlYmFyLXBhZGRpbmctbGVmdCk7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbn1cclxuXHJcbi5zaWRlYmFyIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IHZhcigtLXNpZGViYXItYWNjZW50ZWQtY29sb3IpO1xyXG59XHJcblxyXG4ubmF2LWxpc3QgYTpob3ZlciwgXHJcbmEuYWN0aXZle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1hY2NlbnRlZC1jb2xvcik7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi8qIE1haW4gY29udGVudCAqL1xyXG5cclxuLm1haW4tY29udGVudCB7XHJcbiAgICBtYXJnaW4tbGVmdDogdmFyKC0tc2lkZWJhci13aWR0aCk7XHJcbn1cclxuXHJcbi5tYWluLWNvbnRlbnQgLmFjdGl2ZSB7XHJcbiAgICAvKiBPbmx5IHNob3cgYWN0aXZlIGNvbnRlbnQgKi9cclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uYWxsLXByb2plY3RzIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5hbGwtdGFza3Mge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmZpbmlzaGVkLXByb2plY3RzIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5maW5pc2hlZC10YXNrcyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5cclxuLnRpdGxlLWNvbnRhaW5lciB7XHJcbiAgICBmb250LXNpemU6IDY0cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbWFyZ2luLXRvcDogMzJweDtcclxuICAgIGhlaWdodDogODBweDtcclxuXHJcbiAgICBtYXJnaW4tbGVmdDogMyU7XHJcblxyXG4gICAgLyogdGl0bGUgdW5kZXJsaW5lICovXHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIGJsYWNrO1xyXG4gICAgcGFkZGluZy1yaWdodDogMjRweDtcclxuXHJcbn1cclxuXHJcbi5wcm9qZWN0cy1jb250YWluZXIsXHJcbi50YXNrcy1jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiAzNnB4IGNsYW1wKDhweCwgMTAlLCA5NnB4KTtcclxufVxyXG5cclxuLnByb2plY3Qge1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgIFxyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogdmFyKC0tcm93LWhlaWdodCkgMWZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xyXG5cclxuICAgIGJvcmRlcjogdmFyKC0tc3RkLWJvcmRlcik7XHJcblxyXG59XHJcblxyXG4ucHJvai1uYW1lLWNvbnRhaW5lciB7XHJcbiAgICAvKiBzdHlsaW5nIGZvciB0aGUgXCJ0YWJsZVwiICovXHJcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDM7XHJcbiAgICBib3JkZXItYm90dG9tOiB2YXIoLS1zdGQtYm9yZGVyKTtcclxuICAgIFxyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuXHJcbiAgICAvKiB2ZXJ0aWNhbGx5IGNlbnRyZSBwcm9qZWN0J3MgbmFtZSAqL1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50YXNrLWxpc3Qge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuXHJcbiAgICBncmlkLWFyZWE6IDIgLyAxIC8gLTEgLyAyO1xyXG5cclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXJvdzogMWZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcblxyXG4gICAgYm9yZGVyLXJpZ2h0OiB2YXIoLS1zdGQtYm9yZGVyKTtcclxuXHJcblxyXG59XHJcblxyXG4ucHJvai1ub3RlIHtcclxuICAgIGdyaWQtYXJlYTogMiAvIDIgLyAtMSAvIDM7XHJcblxyXG59XHJcblxyXG4udGFzay1pdGVtIHtcclxuICAgIGJvcmRlci1ib3R0b206IHZhcigtLXN0ZC1ib3JkZXIpO1xyXG4gICAgaGVpZ2h0OiB2YXIoLS1yb3ctaGVpZ2h0KTtcclxuXHJcbiAgICAvKiBDaGVja2JveCBhbmQgVGFzayBOYW1lIGluIDEgcm93ICovXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4udGFzay1saXN0IHNwYW4ge1xyXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xyXG59XHJcblxyXG4udGFzay1pdGVtOmxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxufVxyXG5cclxuLmNiLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiB2YXIoLS1zdGQtYm9yZGVyKTtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPWNoZWNrYm94XSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDIpO1xyXG59XHJcblxyXG5cclxuLnRhc2stbmFtZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBwYWRkaW5nLWxlZnQ6IG1pbigxMHB4LDMlKTtcclxufVxyXG5cclxuXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBBTEwgVEFTS1MgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbiNhZGQtdGFzayB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XHJcbn1cclxuXHJcbi50YWJsZSxcclxuLnRhYmxlIGxpIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuXHJcbi50YWJsZSB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiB2YXIoLS1yb3ctaGVpZ2h0KTtcclxufVxyXG5cclxuLnRiLXJvdyB7XHJcbiAgICAvKiBkaXZpZGUgZWFjaCByb3cgaW50byA0IGNvbHVtbnMgKi9cclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMCU7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHZhcigtLXJvdy1oZWlnaHQpIHJlcGVhdCgyLCBtaW5tYXgoMTI4cHgsIDNmcikpIG1pbm1heCg5MHB4LCAyZnIpO1xyXG4gICAgXHJcbiAgICAvKiByb3cgc3R5bGluZyArIGJvcmRlciAqL1xyXG4gICAgaGVpZ2h0OiB2YXIoLS1yb3ctaGVpZ2h0KTtcclxuICAgIGJvcmRlcjogdmFyKC0tc3RkLWJvcmRlcik7XHJcbiAgICBib3JkZXItdG9wOiBub25lO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG59XHJcblxyXG4udGItaGVhZGVyIHtcclxuICAgIGJvcmRlci10b3A6IHZhcigtLXN0ZC1ib3JkZXIpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW1cclxufVxyXG5cclxuLnRiLXJvdy1pdGVtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiB2YXIoLS1zdGQtYm9yZGVyKTtcclxufVxyXG5cclxuLnRhc2ssXHJcbi5kdWUtZGF0ZSxcclxuLnByaW9yaXR5IHtcclxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4vKiBNZWRpYSBRdWVyaWVzIHRvIGhpZGUgc2lkZWJhciB3aGVuIHBhZ2UgaXMgc21hbGwgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo4MDBweCkge1xyXG4gICAgLnNpZGViYXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLm1haW4tY29udGVudCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICB9XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7Ozs7O0FBS0EsMEJBQTBCOztBQUUxQjtJQUNJLHVCQUF1Qjs7SUFFdkIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTzs7SUFFUCxZQUFZO0lBQ1osMkJBQTJCOzs7O0lBSTNCLDRCQUE0QjtJQUM1Qix5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QTtJQUNJLDZCQUE2QjtJQUM3QixnQkFBZ0I7SUFDaEI7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsK0JBQStCO0FBQ25DOztBQUVBOzs7SUFHSSxpQkFBaUI7QUFDckI7Ozs7O0FBS0EscURBQXFEO0FBQ3JEO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksY0FBYztJQUNsQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gICAgLS1zaWRlYmFyLXdpZHRoOiAzMDBweDtcXHJcXG4gICAgLS1yb3ctaGVpZ2h0OiA0OHB4O1xcclxcbiAgICAtLXN0ZC1ib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyogRXZlcnl0aGluZyBpbiBTaWRlYmFyICovXFxyXFxuXFxyXFxuLnNpZGViYXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgXFxyXFxuICAgIC8qIEZpeGVkIG9uIGxlZnQgc2lkZSAqL1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgXFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IHZhcigtLXNpZGViYXItd2lkdGgpO1xcclxcblxcclxcblxcclxcblxcclxcbiAgICAtLXNpZGViYXItcGFkZGluZy1sZWZ0OiAzMnB4O1xcclxcbiAgICAtLXNpZGViYXItZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICAtLXNpZGViYXItYWNjZW50ZWQtY29sb3I6ICNmZmY7XFxyXFxuXFxyXFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tc2lkZWJhci1mb250LXNpemUpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tc2lkZWJhci1hY2NlbnRlZC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5wcm9maWxlLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDMycHg7XFxyXFxuXFxyXFxuICAgIG1hcmdpbi10b3A6IDE2cHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogNjRweDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLnBmcC1jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogNTBweDtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWFjY2VudGVkLWNvbG9yKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXHJcXG5cXHJcXG4gICAgLyogQ2VudHJlIGltYWdlIHVzaW5nIGZsZXhib3ggKi9cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wZnAtY29udGFpbmVyIGltZyB7XFxyXFxuICAgIG1heC13aWR0aDogOTAlO1xcclxcbiAgICBtYXgtaGVpZ2h0OiA5MCU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5zaWRlYmFyIHVsIHtcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpc3Qge1xcclxcbiAgICBtYXJnaW4tdG9wOiA2NHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpc3QgbGkge1xcclxcbiAgICBoZWlnaHQ6IDQ4cHg7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGlzdCBhIHtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIFxcclxcbiAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLXNpZGViYXItcGFkZGluZy1sZWZ0KTtcXHJcXG4gICAgXFxyXFxuICAgIC8qIFZlcnRpY2FsbHkgY2VudGVyIHRleHQgKi9cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLm1hbmFnZW1lbnQgdWwge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgYm90dG9tOiA2NHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFuYWdlbWVudCB1bCBsaSB7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogdmFyKC0tc2lkZWJhci1wYWRkaW5nLWxlZnQpO1xcclxcbiAgICBoZWlnaHQ6IDMycHg7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyIGEge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1zaWRlYmFyLWFjY2VudGVkLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saXN0IGE6aG92ZXIsIFxcclxcbmEuYWN0aXZle1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWFjY2VudGVkLWNvbG9yKTtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNYWluIGNvbnRlbnQgKi9cXHJcXG5cXHJcXG4ubWFpbi1jb250ZW50IHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IHZhcigtLXNpZGViYXItd2lkdGgpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1jb250ZW50IC5hY3RpdmUge1xcclxcbiAgICAvKiBPbmx5IHNob3cgYWN0aXZlIGNvbnRlbnQgKi9cXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5hbGwtcHJvamVjdHMge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uYWxsLXRhc2tzIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZpbmlzaGVkLXByb2plY3RzIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZpbmlzaGVkLXRhc2tzIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnRpdGxlLWNvbnRhaW5lciB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNjRweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMzJweDtcXHJcXG4gICAgaGVpZ2h0OiA4MHB4O1xcclxcblxcclxcbiAgICBtYXJnaW4tbGVmdDogMyU7XFxyXFxuXFxyXFxuICAgIC8qIHRpdGxlIHVuZGVybGluZSAqL1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCBibGFjaztcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMjRweDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzLWNvbnRhaW5lcixcXHJcXG4udGFza3MtY29udGFpbmVyIHtcXHJcXG4gICAgbWFyZ2luOiAzNnB4IGNsYW1wKDhweCwgMTAlLCA5NnB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3Qge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xcclxcbiAgICBcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiB2YXIoLS1yb3ctaGVpZ2h0KSAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcXHJcXG5cXHJcXG4gICAgYm9yZGVyOiB2YXIoLS1zdGQtYm9yZGVyKTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLnByb2otbmFtZS1jb250YWluZXIge1xcclxcbiAgICAvKiBzdHlsaW5nIGZvciB0aGUgXFxcInRhYmxlXFxcIiAqL1xcclxcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDM7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IHZhcigtLXN0ZC1ib3JkZXIpO1xcclxcbiAgICBcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XFxyXFxuXFxyXFxuICAgIC8qIHZlcnRpY2FsbHkgY2VudHJlIHByb2plY3QncyBuYW1lICovXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWxpc3Qge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG5cXHJcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMSAvIC0xIC8gMjtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC1yb3c6IDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuXFxyXFxuICAgIGJvcmRlci1yaWdodDogdmFyKC0tc3RkLWJvcmRlcik7XFxyXFxuXFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5wcm9qLW5vdGUge1xcclxcbiAgICBncmlkLWFyZWE6IDIgLyAyIC8gLTEgLyAzO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4udGFzay1pdGVtIHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogdmFyKC0tc3RkLWJvcmRlcik7XFxyXFxuICAgIGhlaWdodDogdmFyKC0tcm93LWhlaWdodCk7XFxyXFxuXFxyXFxuICAgIC8qIENoZWNrYm94IGFuZCBUYXNrIE5hbWUgaW4gMSByb3cgKi9cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stbGlzdCBzcGFuIHtcXHJcXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1pdGVtOmxhc3QtY2hpbGQge1xcclxcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY2ItY29udGFpbmVyIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcclxcbiAgICBib3JkZXItcmlnaHQ6IHZhcigtLXN0ZC1ib3JkZXIpO1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1jaGVja2JveF0ge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDIpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4udGFzay1uYW1lIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgcGFkZGluZy1sZWZ0OiBtaW4oMTBweCwzJSk7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEFMTCBUQVNLUyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcclxcblxcclxcbiNhZGQtdGFzayB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDZweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxyXFxufVxcclxcblxcclxcbi50YWJsZSxcXHJcXG4udGFibGUgbGkge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYmxlIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiB2YXIoLS1yb3ctaGVpZ2h0KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRiLXJvdyB7XFxyXFxuICAgIC8qIGRpdmlkZSBlYWNoIHJvdyBpbnRvIDQgY29sdW1ucyAqL1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMCU7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogdmFyKC0tcm93LWhlaWdodCkgcmVwZWF0KDIsIG1pbm1heCgxMjhweCwgM2ZyKSkgbWlubWF4KDkwcHgsIDJmcik7XFxyXFxuICAgIFxcclxcbiAgICAvKiByb3cgc3R5bGluZyArIGJvcmRlciAqL1xcclxcbiAgICBoZWlnaHQ6IHZhcigtLXJvdy1oZWlnaHQpO1xcclxcbiAgICBib3JkZXI6IHZhcigtLXN0ZC1ib3JkZXIpO1xcclxcbiAgICBib3JkZXItdG9wOiBub25lO1xcclxcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50Yi1oZWFkZXIge1xcclxcbiAgICBib3JkZXItdG9wOiB2YXIoLS1zdGQtYm9yZGVyKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVlbVxcclxcbn1cXHJcXG5cXHJcXG4udGItcm93LWl0ZW0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBib3JkZXItcmlnaHQ6IHZhcigtLXN0ZC1ib3JkZXIpO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayxcXHJcXG4uZHVlLWRhdGUsXFxyXFxuLnByaW9yaXR5IHtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbi8qIE1lZGlhIFF1ZXJpZXMgdG8gaGlkZSBzaWRlYmFyIHdoZW4gcGFnZSBpcyBzbWFsbCAqL1xcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ODAwcHgpIHtcXHJcXG4gICAgLnNpZGViYXIge1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubWFpbi1jb250ZW50IHtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKipcclxuICogU2NyaXB0IGRlZGljYXRlZCB0byBmdW5jdGlvbnMgZm9yIGNyZWF0aW5nL2RlYWxpbmcgd2l0aCBET00gZWxlbWVudHNcclxuICovXHJcblxyXG5cclxuY29uc3QgdGFza3NUYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFibGVcIik7XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBjcmVhdGVUYXNrRE9NID0gKHRhc2spID0+IHtcclxuICAgIGNvbnN0IHRhc2tJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIHRhc2tJdGVtLmNsYXNzTmFtZSA9IFwidGItcm93XCI7XHJcblxyXG4gICAgY29uc3QgY2JDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNiQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0Yi1yb3ctaXRlbVwiKTtcclxuICAgIGNiQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjYi1jb250YWluZXJcIik7XHJcblxyXG4gICAgY29uc3QgY2IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgY2IudHlwZSA9IFwiY2hlY2tib3hcIjtcclxuICAgIGNiQ29udGFpbmVyLmFwcGVuZENoaWxkKGNiKTtcclxuXHJcbiAgICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGFza05hbWUuY2xhc3NMaXN0LmFkZChcInRiLXJvdy1pdGVtXCIpO1xyXG4gICAgdGFza05hbWUuY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XHJcbiAgICB0YXNrTmFtZS50ZXh0Q29udGVudCA9IHRhc2submFtZTtcclxuXHJcbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoXCJ0Yi1yb3ctaXRlbVwiKTtcclxuICAgIGR1ZURhdGUuY2xhc3NMaXN0LmFkZChcImR1ZS1kYXRlXCIpO1xyXG4gICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IHRhc2suZHVlRGF0ZTtcclxuXHJcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInRiLXJvdy1pdGVtXCIpO1xyXG4gICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5XCIpO1xyXG4gICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSB0YXNrLnByaW9yaXR5O1xyXG5cclxuICAgIHRhc2tJdGVtLmFwcGVuZENoaWxkKGNiQ29udGFpbmVyKTtcclxuICAgIHRhc2tJdGVtLmFwcGVuZENoaWxkKHRhc2tOYW1lKTtcclxuICAgIHRhc2tJdGVtLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xyXG4gICAgdGFza0l0ZW0uYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xyXG5cclxuICAgIHJldHVybiB0YXNrSXRlbTtcclxufVxyXG5cclxuXHJcbmNvbnN0IGRpc3BsYXlDb250cm9sbGVyID0gKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIC8qID09PT09PT09PT09PT09PSBTaWRlYmFyIFRhYiBTd2l0Y2hpbmcgZnVuY3Rpb25zID09PT09PT09PT09PT09PSAqL1xyXG4gICAgbGV0IGFjdGl2ZUluZGV4ID0gMTtcclxuICAgIGNvbnN0IHNpZGViYXJOYXZMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYtbGlzdCBhJyk7XHJcbiAgICBjb25zdCBtYWluQ29udGVudFBncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250ZW50XCIpLmNoaWxkcmVuO1xyXG4gICAgXHJcbiAgICBjb25zdCByZW1vdmVBY3RpdmUgPSAoKSA9PiB7XHJcbiAgICAgICAgc2lkZWJhck5hdkxpbmtzW2FjdGl2ZUluZGV4XS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIG1haW5Db250ZW50UGdzW2FjdGl2ZUluZGV4XS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1ha2VBY3RpdmUgPSAoKSA9PiB7XHJcbiAgICAgICAgc2lkZWJhck5hdkxpbmtzW2FjdGl2ZUluZGV4XS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIG1haW5Db250ZW50UGdzW2FjdGl2ZUluZGV4XS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoYW5nZUFjdGl2ZVRhYiA9IChuZXdJbmRleCkgPT4ge1xyXG4gICAgICAgIHJlbW92ZUFjdGl2ZSgpO1xyXG4gICAgICAgIGFjdGl2ZUluZGV4ID0gbmV3SW5kZXg7XHJcbiAgICAgICAgbWFrZUFjdGl2ZSgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBEaXNwbGF5IHBhZ2Ugd2l0aCBpbmRleCA9PT0gMCBvbiBwYWdlIGxvYWQgXHJcbiAgICB3aW5kb3cub25sb2FkID0gbWFrZUFjdGl2ZSgpO1xyXG5cclxuXHJcbiAgICAvKiBSZW5kZXIgVGFzayBCb2FyZCBQYWdlICovXHJcbiAgICBjb25zdCByZW5kZXJUYXNrQm9hcmQgPSAoYWxsVGFza3MpID0+IHtcclxuICAgICAgICB0YXNrc1RhYmxlLnJlcGxhY2VDaGlsZHJlbih0YXNrc1RhYmxlLmZpcnN0RWxlbWVudENoaWxkKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbFRhc2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFsbFRhc2tzW2ldKTtcclxuICAgICAgICAgICAgdGFza3NUYWJsZS5hcHBlbmRDaGlsZChjcmVhdGVUYXNrRE9NKGFsbFRhc2tzW2ldKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7Y2hhbmdlQWN0aXZlVGFiLCByZW5kZXJUYXNrQm9hcmR9XHJcbn0pKCk7XHJcblxyXG5cclxuZXhwb3J0IHtkaXNwbGF5Q29udHJvbGxlcn07IiwiY29uc3QgUFJJT1JJVFkgPSAoZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zdCBVTkRFRklORUQgPSAtMTtcclxuICAgIGNvbnN0IExPVyA9IDA7XHJcbiAgICBjb25zdCBNRUQgPSAxO1xyXG4gICAgY29uc3QgSElHSCA9IDI7XHJcblxyXG4gICAgcmV0dXJuIHtVTkRFRklORUQsIExPVywgTUVELCBISUdIfTtcclxuXHJcbn0pKCk7XHJcblxyXG5jb25zdCBTVEFUVVMgPSAoZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zdCBOT1RfU1RBUlRFRCA9IFwiTlNcIjtcclxuICAgIGNvbnN0IElOX1BST0dSRVNTID0gXCJJU1wiO1xyXG4gICAgY29uc3QgRE9ORSA9IFwiRFwiO1xyXG5cclxuICAgIHJldHVybiB7Tk9UX1NUQVJURUQsIElOX1BST0dSRVNTLCBET05FfTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCB7UFJJT1JJVFksIFNUQVRVU307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgeyBQUklPUklUWSwgU1RBVFVTIH0gZnJvbSAnLi9nbG9iYWxfdmFyLmpzJztcclxuaW1wb3J0IHsgZGlzcGxheUNvbnRyb2xsZXIgfSBmcm9tICcuL2RvbS5qcyc7XHJcblxyXG5jb25zdCBzaWRlYmFyTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXYtbGlzdFwiKTtcclxuY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXRhc2sgYnV0dG9uXCIpO1xyXG5cclxuYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICB0YXNrTWFuYWdlci5jcmVhdGVUYXNrKFwiVEhpcyBpcyBBTk9USEVSIHRhc2sgbmFtZVwiLCBcImR1ZSBkYXRlXCIsIFBSSU9SSVRZLkhJR0gpO1xyXG4gICAgZGlzcGxheUNvbnRyb2xsZXIucmVuZGVyVGFza0JvYXJkKHRhc2tNYW5hZ2VyLmFsbFRhc2tzKTtcclxufSlcclxuXHJcbi8qIE1hbmFnZSBhbGwgdGFza3MgKi9cclxuY29uc3QgdGFza01hbmFnZXIgPSAoZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zdCBhbGxUYXNrcyA9IFtdO1xyXG5cclxuICAgIC8qIENyZWF0ZSBuZXcgdGFzayBvYmplY3QgYW5kIGFkZCB0byBhbGxUYXNrcyBhcnJheSAqL1xyXG4gICAgY29uc3QgY3JlYXRlVGFzayA9IChuYW1lLCBkdWVEYXRlLCBwcmlvcml0eT1QUklPUklUWS5VTkRFRklORUQpID0+IHtcclxuICAgICAgICBsZXQgc3RhdHVzID0gU1RBVFVTLk5PVF9TVEFSVEVEO1xyXG4gICAgICAgIGFsbFRhc2tzLnB1c2goe25hbWUsIGR1ZURhdGUsIHByaW9yaXR5LCBzdGF0dXN9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBEZWxldGUgdGFzayBvYmplY3QgZnJvbSBhbGxUYXNrcyBhcnJheSAqL1xyXG4gICAgY29uc3QgZGVsZXRlVGFzayA9ICh0YXNrTnVtKSA9PiB7XHJcbiAgICAgICAgYWxsVGFza3Muc3BsaWNlKHRhc2tOdW0sIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIFNldCBwcmlvcml0eSBvZiB0YXNrIG9iamVjdCAqL1xyXG4gICAgY29uc3Qgc2V0UHJpb3JpdHkgPSAodGFzaywgcHJpb3JpdHkpID0+IHtcclxuICAgICAgICB0YXNrLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICB9XHJcblxyXG4gICAgLyogU2V0IHN0YXR1cyBvZiB0YXNrIG9iamVjdCAtIChOb3QgU3RhcnRlZCwgSW4gUHJvZ3Jlc3MsIERvbmUpICovXHJcbiAgICBjb25zdCBzZXRTdGF0dXMgPSAodGFzaywgc3RhdHVzKSA9PiB7XHJcbiAgICAgICAgdGFzay5zdGF0dXMgPSBzdGF0dXM7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtjcmVhdGVUYXNrLCBkZWxldGVUYXNrLCBzZXRQcmlvcml0eSwgc2V0U3RhdHVzLCBhbGxUYXNrc307XHJcblxyXG59KSgpO1xyXG5cclxuXHJcbi8qIE1hbmFnZSBhbGwgcHJvamVjdHMgKi9cclxuY29uc3QgcHJvamVjdE1hbmFnZXIgPSAoZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zdCBhbGxQcm9qZWN0cyA9IFtdO1xyXG5cclxuICAgIGNvbnN0IGNyZWF0ZVByb2plY3QgPSAobmFtZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhc2tzQXJyYXkgPSBbXTtcclxuICAgICAgICBhbGxQcm9qZWN0cy5wdXNoKHtuYW1lLCB0YXNrc0FycmF5fSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtjcmVhdGVQcm9qZWN0LCBhbGxQcm9qZWN0c307XHJcblxyXG59KSgpO1xyXG5cclxuXHJcblxyXG5zaWRlYmFyTmF2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XHJcbiAgICBpZiAoZS50YXJnZXQudGFnTmFtZSAhPT0gJ0EnKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbmV3QWN0aXZlSW5kZXggPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2luZGV4Jyk7XHJcbiAgICBkaXNwbGF5Q29udHJvbGxlci5jaGFuZ2VBY3RpdmVUYWIobmV3QWN0aXZlSW5kZXgpO1xyXG59KVxyXG5cclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9