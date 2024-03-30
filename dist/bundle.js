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

.management {
    margin-top: 250px;
}

.management ul {
    margin: 0;
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

.tasks-container {
    min-width: fit-content;
}

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
    grid-template-columns: var(--row-height) minmax(128px, 3fr) minmax(128px, 2fr) minmax(96px, 1fr) var(--row-height);
    
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

.delete-btn {
    display: flex;
    justify-content: center;
    align-items: center;
}

.delete-btn button {
    background-color: white;
}

.delete-btn button:hover {
    color: rgb(117, 117, 117);
}



/* Media Queries to hide sidebar when page is small */
@media screen and (max-width:800px) {
    .sidebar {
        display: none;
    }

    .main-content {
        margin-left: 0;
    }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n    --sidebar-width: 300px;\r\n    --row-height: 48px;\r\n    --std-border: 1px solid black;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n\r\n/* Everything in Sidebar */\r\n\r\n.sidebar {\r\n    background-color: black;\r\n    \r\n    /* Fixed on left side */\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    \r\n    height: 100%;\r\n    width: var(--sidebar-width);\r\n\r\n\r\n\r\n    --sidebar-padding-left: 32px;\r\n    --sidebar-font-size: 16px;\r\n    --sidebar-accented-color: #fff;\r\n\r\n    font-size: var(--sidebar-font-size);\r\n    color: var(--sidebar-accented-color);\r\n}\r\n\r\n.profile-container {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 32px;\r\n\r\n    margin-top: 16px;\r\n    padding-left: 64px;\r\n\r\n}\r\n\r\n.pfp-container {\r\n    width: 50px;\r\n    height: 50px;\r\n    background-color: var(--sidebar-accented-color);\r\n    border-radius: 100%;\r\n\r\n    /* Centre image using flexbox */\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.pfp-container img {\r\n    max-width: 90%;\r\n    max-height: 90%;\r\n    border-radius: 100%;\r\n}\r\n\r\n\r\n.sidebar ul {\r\n    list-style-type: none;\r\n    padding: 0;\r\n}\r\n\r\n.nav-list {\r\n    margin-top: 64px;\r\n}\r\n\r\n.nav-list li {\r\n    height: 48px;\r\n}\r\n\r\n.nav-list a {\r\n    max-width: 100%;\r\n    height: 100%;\r\n    \r\n    padding-left: var(--sidebar-padding-left);\r\n    \r\n    /* Vertically center text */\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.management {\r\n    margin-top: 250px;\r\n}\r\n\r\n.management ul {\r\n    margin: 0;\r\n}\r\n\r\n.management ul li {\r\n    padding-left: var(--sidebar-padding-left);\r\n    height: 32px;\r\n}\r\n\r\n.sidebar a {\r\n    text-decoration: none;\r\n    color: var(--sidebar-accented-color);\r\n}\r\n\r\n.nav-list a:hover, \r\na.active{\r\n    background-color: var(--sidebar-accented-color);\r\n    color: black;\r\n}\r\n\r\n/* Main content */\r\n\r\n.main-content {\r\n    margin-left: var(--sidebar-width);\r\n}\r\n\r\n.main-content .active {\r\n    /* Only show active content */\r\n    display: block;\r\n}\r\n\r\n.all-projects {\r\n    display: none;\r\n}\r\n\r\n.all-tasks {\r\n    display: none;\r\n}\r\n\r\n.finished-projects {\r\n    display: none;\r\n}\r\n\r\n.finished-tasks {\r\n    display: none;\r\n}\r\n\r\n\r\n.title-container {\r\n    font-size: 64px;\r\n    font-weight: 700;\r\n    margin-top: 32px;\r\n    height: 80px;\r\n\r\n    margin-left: 3%;\r\n\r\n    /* title underline */\r\n    width: fit-content;\r\n    height: fit-content;\r\n    border-bottom: 4px solid black;\r\n    padding-right: 24px;\r\n\r\n}\r\n\r\n.projects-container,\r\n.tasks-container {\r\n    margin: 36px clamp(8px, 10%, 96px);\r\n}\r\n\r\n.project {\r\n    margin-top: 16px;\r\n    \r\n    display: grid;\r\n    grid-template-rows: var(--row-height) 1fr;\r\n    grid-template-columns: 2fr 1fr;\r\n\r\n    border: var(--std-border);\r\n\r\n}\r\n\r\n.proj-name-container {\r\n    /* styling for the \"table\" */\r\n    grid-area: 1 / 1 / 2 / 3;\r\n    border-bottom: var(--std-border);\r\n    \r\n    font-weight: 700;\r\n    font-size: 1.5em;\r\n    padding-left: 8px;\r\n\r\n    /* vertically centre project's name */\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.task-list {\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style-type: none;\r\n\r\n    grid-area: 2 / 1 / -1 / 2;\r\n\r\n    display: grid;\r\n    grid-row: 1fr;\r\n    grid-template-columns: 1fr;\r\n\r\n    border-right: var(--std-border);\r\n\r\n\r\n}\r\n\r\n.proj-note {\r\n    grid-area: 2 / 2 / -1 / 3;\r\n\r\n}\r\n\r\n.task-item {\r\n    border-bottom: var(--std-border);\r\n    height: var(--row-height);\r\n\r\n    /* Checkbox and Task Name in 1 row */\r\n    display: flex;\r\n}\r\n\r\n.task-list span {\r\n    height: inherit;\r\n}\r\n\r\n.task-item:last-child {\r\n    border-bottom: none;\r\n}\r\n\r\n.cb-container {\r\n    height: 100%;\r\n    aspect-ratio: 1 / 1;\r\n    border-right: var(--std-border);\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\ninput[type=checkbox] {\r\n    transform: scale(2);\r\n}\r\n\r\n\r\n.task-name {\r\n    display: flex;\r\n    align-items: center;\r\n\r\n    padding-left: min(10px,3%);\r\n}\r\n\r\n\r\n\r\n/* -------------------------- ALL TASKS -------------------------- */\r\n\r\n.tasks-container {\r\n    min-width: fit-content;\r\n}\r\n\r\n#add-task {\r\n    margin-bottom: 6px;\r\n    display: flex;\r\n    justify-content: end;\r\n}\r\n\r\n\r\n.table,\r\n.table li {\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style-type: none;\r\n}\r\n\r\n.table {\r\n    display: grid;\r\n    grid-template-rows: var(--row-height);\r\n}\r\n\r\n.tb-row {\r\n    /* divide each row into 4 columns */\r\n    display: grid;\r\n    grid-template-rows: 100%;\r\n    grid-template-columns: var(--row-height) minmax(128px, 3fr) minmax(128px, 2fr) minmax(96px, 1fr) var(--row-height);\r\n    \r\n    /* row styling + border */\r\n    height: var(--row-height);\r\n    border: var(--std-border);\r\n    border-top: none;\r\n    border-right: none;\r\n}\r\n\r\n.tb-header {\r\n    border-top: var(--std-border);\r\n    font-weight: 700;\r\n    font-size: 1.5em\r\n}\r\n\r\n.tb-row-item {\r\n    display: flex;\r\n    align-items: center;\r\n    border-right: var(--std-border);\r\n}\r\n\r\n.task,\r\n.due-date,\r\n.priority {\r\n    padding-left: 8px;\r\n}\r\n\r\n.delete-btn {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.delete-btn button {\r\n    background-color: white;\r\n}\r\n\r\n.delete-btn button:hover {\r\n    color: rgb(117, 117, 117);\r\n}\r\n\r\n\r\n\r\n/* Media Queries to hide sidebar when page is small */\r\n@media screen and (max-width:800px) {\r\n    .sidebar {\r\n        display: none;\r\n    }\r\n\r\n    .main-content {\r\n        margin-left: 0;\r\n    }\r\n}"],"sourceRoot":""}]);
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
/* harmony export */   createPrioritySelect: () => (/* binding */ createPrioritySelect),
/* harmony export */   displayController: () => (/* binding */ displayController),
/* harmony export */   tasksTable: () => (/* binding */ tasksTable)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/script/task.js");
/**
 * Script dedicated to functions for creating/manipulating DOM elements
 */




const tasksTable = document.querySelector(".table");


function getPriorityString(value) {
    if (value == _task__WEBPACK_IMPORTED_MODULE_0__.PRIORITY.HIGH) {
        return "High";
    }
    else if (value == _task__WEBPACK_IMPORTED_MODULE_0__.PRIORITY.MED) {
        return "Medium";
    }
    else if (value == _task__WEBPACK_IMPORTED_MODULE_0__.PRIORITY.LOW) {
        return "Low";
    }
    else {
        return "";
    }
}


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
    priority.textContent = getPriorityString(task.priority);

    const deleteBtn = document.createElement('div');
    deleteBtn.classList.add("tb-row-item");
    deleteBtn.classList.add("delete-btn");

    const btn = document.createElement('button');
    

    const icon = document.createElement('i');
    icon.className = "material-icons";
    icon.textContent = "delete";
    btn.appendChild(icon);
    deleteBtn.appendChild(btn);

    taskItem.appendChild(cbContainer);
    taskItem.appendChild(taskName);
    taskItem.appendChild(dueDate);
    taskItem.appendChild(priority);
    taskItem.appendChild(deleteBtn);

    return taskItem;
}


const createPrioritySelect = () => {
    const select = document.createElement("select");

    const op0 = document.createElement("option")
    op0.value = _task__WEBPACK_IMPORTED_MODULE_0__.PRIORITY.UNDEFINED;
    op0.innerHTML = "--";

    const op1 = document.createElement("option")
    op1.value = _task__WEBPACK_IMPORTED_MODULE_0__.PRIORITY.LOW;
    op1.innerHTML = "Low";

    const op2 = document.createElement("option")
    op2.value = _task__WEBPACK_IMPORTED_MODULE_0__.PRIORITY.MED;
    op2.innerHTML = "Medium";

    const op3 = document.createElement("option")
    op3.value = _task__WEBPACK_IMPORTED_MODULE_0__.PRIORITY.HIGH;
    op3.innerHTML = "High";

    select.appendChild(op0)
    select.appendChild(op1);
    select.appendChild(op2);
    select.appendChild(op3);

    return select;
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

    /* Render Task Board Page */
    const renderTaskBoard = (allTasks) => {
        tasksTable.replaceChildren(tasksTable.firstElementChild);
        for (let i = 0; i < allTasks.length; i++) {
            tasksTable.appendChild(createTaskDOM(allTasks[i]));
        }
    }

    return {changeActiveTab, renderTaskBoard}
})();







/***/ }),

/***/ "./src/script/persistence.js":
/*!***********************************!*\
  !*** ./src/script/persistence.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   storageManager: () => (/* binding */ storageManager)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/script/task.js");


const storageManager = (function() {
    const saveData = () => {
        /**
         * localStorage can't translate this into JSON immediately
         */
        localStorage.setItem("allTasks", JSON.stringify(_task__WEBPACK_IMPORTED_MODULE_0__.taskManager.allTasks));
    }

    const getData = () => {
        const tasks = JSON.parse(localStorage.getItem("allTasks")); 
        return tasks;
    }

    return {saveData, getData}
})();



/***/ }),

/***/ "./src/script/task.js":
/*!****************************!*\
  !*** ./src/script/task.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PRIORITY: () => (/* binding */ PRIORITY),
/* harmony export */   STATUS: () => (/* binding */ STATUS),
/* harmony export */   taskManager: () => (/* binding */ taskManager)
/* harmony export */ });
/**
 * Script dedicated for managing all tasks
 */


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




/* Manage all tasks */
const taskManager = (function() {
    const allTasks = [];

    /* For testing if we're deleting/modifying correct task */
    let count = 0;

    /* Create new task object and add to allTasks array */
    const createTask = (name="", dueDate=count, priority=PRIORITY.UNDEFINED) => {
        let status = STATUS.NOT_STARTED;
        allTasks.push({name, dueDate, priority, status});
        
        /* For testing */
        count += 1;
    }

    const loadTask = (taskObj) => {
        allTasks.push(taskObj);
    }

    /* Delete task object from allTasks array */
    const deleteTask = (taskNum) => {
        allTasks.splice(taskNum, 1);
    }

    const setName = (taskNum, newName) => {
        allTasks[taskNum].name = newName;
    }

    const setDate = (taskNum, newDate) => {
        allTasks[taskNum].dueDate = newDate;
    }

    /* Set priority of task object */
    const setPriority = (taskNum, priority) => {
        allTasks[taskNum].priority = priority;
    }

    /* Set status of task object - (Not Started, In Progress, Done) */
    const setStatus = (task, status) => {
        task.status = status;
    }

    return {createTask, deleteTask, setName, setDate, setPriority, setStatus, allTasks, loadTask};

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
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./src/script/dom.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task.js */ "./src/script/task.js");
/* harmony import */ var _persistence_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./persistence.js */ "./src/script/persistence.js");






const sidebarNav = document.querySelector(".nav-list");
const addTaskBtn = document.querySelector("#add-task button");



window.onload = () => {
    // On load show the "All Tasks" Tab
    _dom_js__WEBPACK_IMPORTED_MODULE_1__.displayController.changeActiveTab(1);
    const objects = _persistence_js__WEBPACK_IMPORTED_MODULE_3__.storageManager.getData();

    /**
     * If user had no saved tasks, create a default task,
     * else load tasks that user have previously created into
     * taskManager
     */
    if (objects.length === 0) {
        _task_js__WEBPACK_IMPORTED_MODULE_2__.taskManager.createTask("A default task", "due date");
    }
    else {
        for (const obj of objects) {
            _task_js__WEBPACK_IMPORTED_MODULE_2__.taskManager.loadTask(obj);
        }
    }
    // Update display
    _dom_js__WEBPACK_IMPORTED_MODULE_1__.displayController.renderTaskBoard(_task_js__WEBPACK_IMPORTED_MODULE_2__.taskManager.allTasks);
}

sidebarNav.addEventListener("click", function(e) {
    if (e.target.tagName !== 'A') {
        return;
    }
    const newActiveIndex = e.target.getAttribute('index');
    _dom_js__WEBPACK_IMPORTED_MODULE_1__.displayController.changeActiveTab(newActiveIndex);
});


addTaskBtn.addEventListener("click", function() {
    _task_js__WEBPACK_IMPORTED_MODULE_2__.taskManager.createTask();
    _dom_js__WEBPACK_IMPORTED_MODULE_1__.displayController.renderTaskBoard(_task_js__WEBPACK_IMPORTED_MODULE_2__.taskManager.allTasks);

    /* 
     * Creating a new task immediately focus on the new task name's input field 
     * Note: clicking add button add a new task
     *  => guaranteed to always have at least 1 task in table when this happen
     *  => we won't accidentally select the header
    */
    const allTasksDOM = document.querySelectorAll(".task");
    const last = allTasksDOM[allTasksDOM.length-1];
    handleTaskInputClick(last);
});


/* Listen to all click events in task table */
_dom_js__WEBPACK_IMPORTED_MODULE_1__.tasksTable.addEventListener("click", (e) => {
    const domElem = e.target;

    /* Case when table header was clicked */
    if (domElem.parentElement.classList.contains("tb-header")) {
        // Do nothing
        return;
    }

    /* Handle case when  delete button was pressed */
    if (domElem.tagName === "BUTTON" || domElem.tagName === "I") {
        handleDeleteBtnClick(domElem);
        return;
    }

    if (domElem.classList.contains("task")) {
        handleTaskInputClick(domElem);
    }

    if (domElem.classList.contains("due-date")) {
        handleTaskInputClick(domElem, "date");
    }

    if (domElem.classList.contains("priority")) {
        handlePriorityInputClick(domElem);
    }

});


/* 
 * Return the position of a task in taskManager given its dom element 
 * or one of its child node
*/
function fetchTaskNum(domElem) {
    const allRows = document.querySelectorAll(".tb-row:not(.tb-header)")

    for (let i = 0; i < allRows.length; i++) {
        if (allRows[i].contains(domElem)) {
            return i;
        }
    }

    return null;
}

/* Delete corresponding task from taskManager & update display */
function handleDeleteBtnClick(domElem) {
    const taskNum = fetchTaskNum(domElem);
    _task_js__WEBPACK_IMPORTED_MODULE_2__.taskManager.deleteTask(taskNum);
    _dom_js__WEBPACK_IMPORTED_MODULE_1__.displayController.renderTaskBoard(_task_js__WEBPACK_IMPORTED_MODULE_2__.taskManager.allTasks);
}

/* Allow user to edit task name by clicking on the div with that task name */
function handleTaskInputClick(domElem, type="text") {
    // Create new text input field
    const inputField = document.createElement("input");
    inputField.type = type;
    inputField.value = domElem.textContent;
    
    // Replace div with input field
    const parent = domElem.parentElement;
    parent.replaceChild(inputField, domElem);

    // Immediately focus to allow typing
    inputField.focus();

    // Input field lose focus when enter key pressed
    inputField.addEventListener("keypress", (e) => {
        if (e.code == "Enter") {
            inputField.blur();
        }
    })

    // When input field is not focused -> save its value as the new task name
    inputField.addEventListener("blur", () => 
        saveTask(domElem, inputField, parent, type));
}


/* 
 * Helper function: save value from input field to task manager
 * and swap out DOM element (back to being a div)
*/
function saveTask(domElem, inputField, parent, type) {
    // Swap out DOM element
    const newValue = inputField.value;
    domElem.textContent = newValue;
    parent.replaceChild(domElem, inputField);
    
    // Save new value to taskManager
    const taskNum = fetchTaskNum(domElem);

    if (type == "text") {
        _task_js__WEBPACK_IMPORTED_MODULE_2__.taskManager.setName(taskNum, newValue);
    }
    else if (type == "date") {
        _task_js__WEBPACK_IMPORTED_MODULE_2__.taskManager.setDate(taskNum, newValue);
    }
    else {
        _task_js__WEBPACK_IMPORTED_MODULE_2__.taskManager.setPriority(taskNum, newValue);
    }

    _dom_js__WEBPACK_IMPORTED_MODULE_1__.displayController.renderTaskBoard(_task_js__WEBPACK_IMPORTED_MODULE_2__.taskManager.allTasks);
}


function handlePriorityInputClick(domElem) {
    const inputField = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.createPrioritySelect)();    
    // Replace div with input field
    const parent = domElem.parentElement;
    parent.replaceChild(inputField, domElem)

    // Focus to allow select to blur when user click outside
    inputField.focus()
    
    // blur when new value selected
    inputField.addEventListener("change", () => {
        inputField.blur();
    })
    // save task when select is blurred
    inputField.addEventListener("blur", () => {
        if (inputField.value == _task_js__WEBPACK_IMPORTED_MODULE_2__.PRIORITY.UNDEFINED && domElem.textContent != "") {
            if (domElem.textContent == "High") {
                inputField.value = _task_js__WEBPACK_IMPORTED_MODULE_2__.PRIORITY.HIGH;
            }
            else if (domElem.textContent == "Medium") {
                inputField.value = _task_js__WEBPACK_IMPORTED_MODULE_2__.PRIORITY.MED;
            }
            else {
                inputField.value = _task_js__WEBPACK_IMPORTED_MODULE_2__.PRIORITY.LOW;
            }
        }
        saveTask(domElem, inputField, parent, "priority");
    })
}


window.onbeforeunload = () => {
    console.log("reload");
    _persistence_js__WEBPACK_IMPORTED_MODULE_3__.storageManager.saveData();
}




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sYUFBYSxNQUFNLGFBQWEsYUFBYSxXQUFXLFVBQVUsV0FBVyxVQUFVLGVBQWUsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxZQUFZLFlBQVksY0FBYyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksY0FBYyxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxRQUFRLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFdBQVcsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxPQUFPLGFBQWEsTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsUUFBUSxLQUFLLFVBQVUsWUFBWSxhQUFhLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGNBQWMsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLGFBQWEsV0FBVyxZQUFZLGNBQWMsY0FBYyxPQUFPLEtBQUssWUFBWSxhQUFhLGNBQWMsYUFBYSxhQUFhLGNBQWMsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxhQUFhLGNBQWMsV0FBVyxVQUFVLGFBQWEsZUFBZSxPQUFPLEtBQUssYUFBYSxPQUFPLEtBQUssWUFBWSxjQUFjLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGNBQWMsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksUUFBUSxLQUFLLFVBQVUsYUFBYSxhQUFhLFNBQVMsYUFBYSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZ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YnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHQvZG9tLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHQvcGVyc2lzdGVuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdC90YXNrLmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHQvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcclxuICAgIC0tc2lkZWJhci13aWR0aDogMzAwcHg7XHJcbiAgICAtLXJvdy1oZWlnaHQ6IDQ4cHg7XHJcbiAgICAtLXN0ZC1ib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5cclxuLyogRXZlcnl0aGluZyBpbiBTaWRlYmFyICovXHJcblxyXG4uc2lkZWJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIFxyXG4gICAgLyogRml4ZWQgb24gbGVmdCBzaWRlICovXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgXHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogdmFyKC0tc2lkZWJhci13aWR0aCk7XHJcblxyXG5cclxuXHJcbiAgICAtLXNpZGViYXItcGFkZGluZy1sZWZ0OiAzMnB4O1xyXG4gICAgLS1zaWRlYmFyLWZvbnQtc2l6ZTogMTZweDtcclxuICAgIC0tc2lkZWJhci1hY2NlbnRlZC1jb2xvcjogI2ZmZjtcclxuXHJcbiAgICBmb250LXNpemU6IHZhcigtLXNpZGViYXItZm9udC1zaXplKTtcclxuICAgIGNvbG9yOiB2YXIoLS1zaWRlYmFyLWFjY2VudGVkLWNvbG9yKTtcclxufVxyXG5cclxuLnByb2ZpbGUtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBnYXA6IDMycHg7XHJcblxyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgIHBhZGRpbmctbGVmdDogNjRweDtcclxuXHJcbn1cclxuXHJcbi5wZnAtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1hY2NlbnRlZC1jb2xvcik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG5cclxuICAgIC8qIENlbnRyZSBpbWFnZSB1c2luZyBmbGV4Ym94ICovXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ucGZwLWNvbnRhaW5lciBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiA5MCU7XHJcbiAgICBtYXgtaGVpZ2h0OiA5MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG59XHJcblxyXG5cclxuLnNpZGViYXIgdWwge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLm5hdi1saXN0IHtcclxuICAgIG1hcmdpbi10b3A6IDY0cHg7XHJcbn1cclxuXHJcbi5uYXYtbGlzdCBsaSB7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbn1cclxuXHJcbi5uYXYtbGlzdCBhIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIFxyXG4gICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1zaWRlYmFyLXBhZGRpbmctbGVmdCk7XHJcbiAgICBcclxuICAgIC8qIFZlcnRpY2FsbHkgY2VudGVyIHRleHQgKi9cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubWFuYWdlbWVudCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyNTBweDtcclxufVxyXG5cclxuLm1hbmFnZW1lbnQgdWwge1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4ubWFuYWdlbWVudCB1bCBsaSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLXNpZGViYXItcGFkZGluZy1sZWZ0KTtcclxuICAgIGhlaWdodDogMzJweDtcclxufVxyXG5cclxuLnNpZGViYXIgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogdmFyKC0tc2lkZWJhci1hY2NlbnRlZC1jb2xvcik7XHJcbn1cclxuXHJcbi5uYXYtbGlzdCBhOmhvdmVyLCBcclxuYS5hY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWFjY2VudGVkLWNvbG9yKTtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLyogTWFpbiBjb250ZW50ICovXHJcblxyXG4ubWFpbi1jb250ZW50IHtcclxuICAgIG1hcmdpbi1sZWZ0OiB2YXIoLS1zaWRlYmFyLXdpZHRoKTtcclxufVxyXG5cclxuLm1haW4tY29udGVudCAuYWN0aXZlIHtcclxuICAgIC8qIE9ubHkgc2hvdyBhY3RpdmUgY29udGVudCAqL1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5hbGwtcHJvamVjdHMge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmFsbC10YXNrcyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uZmluaXNoZWQtcHJvamVjdHMge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmZpbmlzaGVkLXRhc2tzIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcblxyXG4udGl0bGUtY29udGFpbmVyIHtcclxuICAgIGZvbnQtc2l6ZTogNjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG5cclxuICAgIG1hcmdpbi1sZWZ0OiAzJTtcclxuXHJcbiAgICAvKiB0aXRsZSB1bmRlcmxpbmUgKi9cclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgYmxhY2s7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xyXG5cclxufVxyXG5cclxuLnByb2plY3RzLWNvbnRhaW5lcixcclxuLnRhc2tzLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDM2cHggY2xhbXAoOHB4LCAxMCUsIDk2cHgpO1xyXG59XHJcblxyXG4ucHJvamVjdCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgXHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiB2YXIoLS1yb3ctaGVpZ2h0KSAxZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XHJcblxyXG4gICAgYm9yZGVyOiB2YXIoLS1zdGQtYm9yZGVyKTtcclxuXHJcbn1cclxuXHJcbi5wcm9qLW5hbWUtY29udGFpbmVyIHtcclxuICAgIC8qIHN0eWxpbmcgZm9yIHRoZSBcInRhYmxlXCIgKi9cclxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMztcclxuICAgIGJvcmRlci1ib3R0b206IHZhcigtLXN0ZC1ib3JkZXIpO1xyXG4gICAgXHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG5cclxuICAgIC8qIHZlcnRpY2FsbHkgY2VudHJlIHByb2plY3QncyBuYW1lICovXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnRhc2stbGlzdCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG5cclxuICAgIGdyaWQtYXJlYTogMiAvIDEgLyAtMSAvIDI7XHJcblxyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtcm93OiAxZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuXHJcbiAgICBib3JkZXItcmlnaHQ6IHZhcigtLXN0ZC1ib3JkZXIpO1xyXG5cclxuXHJcbn1cclxuXHJcbi5wcm9qLW5vdGUge1xyXG4gICAgZ3JpZC1hcmVhOiAyIC8gMiAvIC0xIC8gMztcclxuXHJcbn1cclxuXHJcbi50YXNrLWl0ZW0ge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogdmFyKC0tc3RkLWJvcmRlcik7XHJcbiAgICBoZWlnaHQ6IHZhcigtLXJvdy1oZWlnaHQpO1xyXG5cclxuICAgIC8qIENoZWNrYm94IGFuZCBUYXNrIE5hbWUgaW4gMSByb3cgKi9cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi50YXNrLWxpc3Qgc3BhbiB7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi50YXNrLWl0ZW06bGFzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG59XHJcblxyXG4uY2ItY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XHJcbiAgICBib3JkZXItcmlnaHQ6IHZhcigtLXN0ZC1ib3JkZXIpO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9Y2hlY2tib3hdIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMik7XHJcbn1cclxuXHJcblxyXG4udGFzay1uYW1lIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIHBhZGRpbmctbGVmdDogbWluKDEwcHgsMyUpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEFMTCBUQVNLUyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuLnRhc2tzLWNvbnRhaW5lciB7XHJcbiAgICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xyXG59XHJcblxyXG4jYWRkLXRhc2sge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xyXG59XHJcblxyXG5cclxuLnRhYmxlLFxyXG4udGFibGUgbGkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG5cclxuLnRhYmxlIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHZhcigtLXJvdy1oZWlnaHQpO1xyXG59XHJcblxyXG4udGItcm93IHtcclxuICAgIC8qIGRpdmlkZSBlYWNoIHJvdyBpbnRvIDQgY29sdW1ucyAqL1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwJTtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogdmFyKC0tcm93LWhlaWdodCkgbWlubWF4KDEyOHB4LCAzZnIpIG1pbm1heCgxMjhweCwgMmZyKSBtaW5tYXgoOTZweCwgMWZyKSB2YXIoLS1yb3ctaGVpZ2h0KTtcclxuICAgIFxyXG4gICAgLyogcm93IHN0eWxpbmcgKyBib3JkZXIgKi9cclxuICAgIGhlaWdodDogdmFyKC0tcm93LWhlaWdodCk7XHJcbiAgICBib3JkZXI6IHZhcigtLXN0ZC1ib3JkZXIpO1xyXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcclxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxufVxyXG5cclxuLnRiLWhlYWRlciB7XHJcbiAgICBib3JkZXItdG9wOiB2YXIoLS1zdGQtYm9yZGVyKTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDEuNWVtXHJcbn1cclxuXHJcbi50Yi1yb3ctaXRlbSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlci1yaWdodDogdmFyKC0tc3RkLWJvcmRlcik7XHJcbn1cclxuXHJcbi50YXNrLFxyXG4uZHVlLWRhdGUsXHJcbi5wcmlvcml0eSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxufVxyXG5cclxuLmRlbGV0ZS1idG4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmRlbGV0ZS1idG4gYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZGVsZXRlLWJ0biBidXR0b246aG92ZXIge1xyXG4gICAgY29sb3I6IHJnYigxMTcsIDExNywgMTE3KTtcclxufVxyXG5cclxuXHJcblxyXG4vKiBNZWRpYSBRdWVyaWVzIHRvIGhpZGUgc2lkZWJhciB3aGVuIHBhZ2UgaXMgc21hbGwgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo4MDBweCkge1xyXG4gICAgLnNpZGViYXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLm1haW4tY29udGVudCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICB9XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7OztBQUdBLDBCQUEwQjs7QUFFMUI7SUFDSSx1QkFBdUI7O0lBRXZCLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87O0lBRVAsWUFBWTtJQUNaLDJCQUEyQjs7OztJQUkzQiw0QkFBNEI7SUFDNUIseUJBQXlCO0lBQ3pCLDhCQUE4Qjs7SUFFOUIsbUNBQW1DO0lBQ25DLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFNBQVM7O0lBRVQsZ0JBQWdCO0lBQ2hCLGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLCtDQUErQztJQUMvQyxtQkFBbUI7O0lBRW5CLCtCQUErQjtJQUMvQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOzs7QUFHQTtJQUNJLHFCQUFxQjtJQUNyQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FB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d2lkdGg6IDMwMHB4O1xcclxcbiAgICAtLXJvdy1oZWlnaHQ6IDQ4cHg7XFxyXFxuICAgIC0tc3RkLWJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBFdmVyeXRoaW5nIGluIFNpZGViYXIgKi9cXHJcXG5cXHJcXG4uc2lkZWJhciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICBcXHJcXG4gICAgLyogRml4ZWQgb24gbGVmdCBzaWRlICovXFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICBcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogdmFyKC0tc2lkZWJhci13aWR0aCk7XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuICAgIC0tc2lkZWJhci1wYWRkaW5nLWxlZnQ6IDMycHg7XFxyXFxuICAgIC0tc2lkZWJhci1mb250LXNpemU6IDE2cHg7XFxyXFxuICAgIC0tc2lkZWJhci1hY2NlbnRlZC1jb2xvcjogI2ZmZjtcXHJcXG5cXHJcXG4gICAgZm9udC1zaXplOiB2YXIoLS1zaWRlYmFyLWZvbnQtc2l6ZSk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1zaWRlYmFyLWFjY2VudGVkLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2ZpbGUtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMzJweDtcXHJcXG5cXHJcXG4gICAgbWFyZ2luLXRvcDogMTZweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA2NHB4O1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4ucGZwLWNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiA1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItYWNjZW50ZWQtY29sb3IpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcclxcblxcclxcbiAgICAvKiBDZW50cmUgaW1hZ2UgdXNpbmcgZmxleGJveCAqL1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBmcC1jb250YWluZXIgaW1nIHtcXHJcXG4gICAgbWF4LXdpZHRoOiA5MCU7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDkwJTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnNpZGViYXIgdWwge1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGlzdCB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDY0cHg7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGlzdCBsaSB7XFxyXFxuICAgIGhlaWdodDogNDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saXN0IGEge1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgXFxyXFxuICAgIHBhZGRpbmctbGVmdDogdmFyKC0tc2lkZWJhci1wYWRkaW5nLWxlZnQpO1xcclxcbiAgICBcXHJcXG4gICAgLyogVmVydGljYWxseSBjZW50ZXIgdGV4dCAqL1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFuYWdlbWVudCB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDI1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFuYWdlbWVudCB1bCB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1hbmFnZW1lbnQgdWwgbGkge1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLXNpZGViYXItcGFkZGluZy1sZWZ0KTtcXHJcXG4gICAgaGVpZ2h0OiAzMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhciBhIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBjb2xvcjogdmFyKC0tc2lkZWJhci1hY2NlbnRlZC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGlzdCBhOmhvdmVyLCBcXHJcXG5hLmFjdGl2ZXtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1hY2NlbnRlZC1jb2xvcik7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLyogTWFpbiBjb250ZW50ICovXFxyXFxuXFxyXFxuLm1haW4tY29udGVudCB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiB2YXIoLS1zaWRlYmFyLXdpZHRoKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tY29udGVudCAuYWN0aXZlIHtcXHJcXG4gICAgLyogT25seSBzaG93IGFjdGl2ZSBjb250ZW50ICovXFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4uYWxsLXByb2plY3RzIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFsbC10YXNrcyB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5maW5pc2hlZC1wcm9qZWN0cyB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5maW5pc2hlZC10YXNrcyB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcblxcclxcbi50aXRsZS1jb250YWluZXIge1xcclxcbiAgICBmb250LXNpemU6IDY0cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIG1hcmdpbi10b3A6IDMycHg7XFxyXFxuICAgIGhlaWdodDogODBweDtcXHJcXG5cXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xcclxcblxcclxcbiAgICAvKiB0aXRsZSB1bmRlcmxpbmUgKi9cXHJcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgYmxhY2s7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDI0cHg7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cy1jb250YWluZXIsXFxyXFxuLnRhc2tzLWNvbnRhaW5lciB7XFxyXFxuICAgIG1hcmdpbjogMzZweCBjbGFtcCg4cHgsIDEwJSwgOTZweCk7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0IHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTZweDtcXHJcXG4gICAgXFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogdmFyKC0tcm93LWhlaWdodCkgMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XFxyXFxuXFxyXFxuICAgIGJvcmRlcjogdmFyKC0tc3RkLWJvcmRlcik7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5wcm9qLW5hbWUtY29udGFpbmVyIHtcXHJcXG4gICAgLyogc3R5bGluZyBmb3IgdGhlIFxcXCJ0YWJsZVxcXCIgKi9cXHJcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAzO1xcclxcbiAgICBib3JkZXItYm90dG9tOiB2YXIoLS1zdGQtYm9yZGVyKTtcXHJcXG4gICAgXFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xcclxcblxcclxcbiAgICAvKiB2ZXJ0aWNhbGx5IGNlbnRyZSBwcm9qZWN0J3MgbmFtZSAqL1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1saXN0IHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuXFxyXFxuICAgIGdyaWQtYXJlYTogMiAvIDEgLyAtMSAvIDI7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtcm93OiAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcblxcclxcbiAgICBib3JkZXItcmlnaHQ6IHZhcigtLXN0ZC1ib3JkZXIpO1xcclxcblxcclxcblxcclxcbn1cXHJcXG5cXHJcXG4ucHJvai1ub3RlIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMiAvIC0xIC8gMztcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLnRhc2staXRlbSB7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IHZhcigtLXN0ZC1ib3JkZXIpO1xcclxcbiAgICBoZWlnaHQ6IHZhcigtLXJvdy1oZWlnaHQpO1xcclxcblxcclxcbiAgICAvKiBDaGVja2JveCBhbmQgVGFzayBOYW1lIGluIDEgcm93ICovXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWxpc3Qgc3BhbiB7XFxyXFxuICAgIGhlaWdodDogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2staXRlbTpsYXN0LWNoaWxkIHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNiLWNvbnRhaW5lciB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXHJcXG4gICAgYm9yZGVyLXJpZ2h0OiB2YXIoLS1zdGQtYm9yZGVyKTtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9Y2hlY2tib3hdIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgyKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnRhc2stbmFtZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIHBhZGRpbmctbGVmdDogbWluKDEwcHgsMyUpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBBTEwgVEFTS1MgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXHJcXG5cXHJcXG4udGFza3MtY29udGFpbmVyIHtcXHJcXG4gICAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC10YXNrIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnRhYmxlLFxcclxcbi50YWJsZSBsaSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udGFibGUge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHZhcigtLXJvdy1oZWlnaHQpO1xcclxcbn1cXHJcXG5cXHJcXG4udGItcm93IHtcXHJcXG4gICAgLyogZGl2aWRlIGVhY2ggcm93IGludG8gNCBjb2x1bW5zICovXFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwJTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiB2YXIoLS1yb3ctaGVpZ2h0KSBtaW5tYXgoMTI4cHgsIDNmcikgbWlubWF4KDEyOHB4LCAyZnIpIG1pbm1heCg5NnB4LCAxZnIpIHZhcigtLXJvdy1oZWlnaHQpO1xcclxcbiAgICBcXHJcXG4gICAgLyogcm93IHN0eWxpbmcgKyBib3JkZXIgKi9cXHJcXG4gICAgaGVpZ2h0OiB2YXIoLS1yb3ctaGVpZ2h0KTtcXHJcXG4gICAgYm9yZGVyOiB2YXIoLS1zdGQtYm9yZGVyKTtcXHJcXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udGItaGVhZGVyIHtcXHJcXG4gICAgYm9yZGVyLXRvcDogdmFyKC0tc3RkLWJvcmRlcik7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41ZW1cXHJcXG59XFxyXFxuXFxyXFxuLnRiLXJvdy1pdGVtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyLXJpZ2h0OiB2YXIoLS1zdGQtYm9yZGVyKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2ssXFxyXFxuLmR1ZS1kYXRlLFxcclxcbi5wcmlvcml0eSB7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlLWJ0biB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlLWJ0biBidXR0b24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZS1idG4gYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6IHJnYigxMTcsIDExNywgMTE3KTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyogTWVkaWEgUXVlcmllcyB0byBoaWRlIHNpZGViYXIgd2hlbiBwYWdlIGlzIHNtYWxsICovXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo4MDBweCkge1xcclxcbiAgICAuc2lkZWJhciB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5tYWluLWNvbnRlbnQge1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qKlxyXG4gKiBTY3JpcHQgZGVkaWNhdGVkIHRvIGZ1bmN0aW9ucyBmb3IgY3JlYXRpbmcvbWFuaXB1bGF0aW5nIERPTSBlbGVtZW50c1xyXG4gKi9cclxuXHJcbmltcG9ydCB7IFBSSU9SSVRZIH0gZnJvbSBcIi4vdGFza1wiO1xyXG5cclxuXHJcbmNvbnN0IHRhc2tzVGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhYmxlXCIpO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGdldFByaW9yaXR5U3RyaW5nKHZhbHVlKSB7XHJcbiAgICBpZiAodmFsdWUgPT0gUFJJT1JJVFkuSElHSCkge1xyXG4gICAgICAgIHJldHVybiBcIkhpZ2hcIjtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHZhbHVlID09IFBSSU9SSVRZLk1FRCkge1xyXG4gICAgICAgIHJldHVybiBcIk1lZGl1bVwiO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodmFsdWUgPT0gUFJJT1JJVFkuTE9XKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiTG93XCI7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmNvbnN0IGNyZWF0ZVRhc2tET00gPSAodGFzaykgPT4ge1xyXG4gICAgY29uc3QgdGFza0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgdGFza0l0ZW0uY2xhc3NOYW1lID0gXCJ0Yi1yb3dcIjtcclxuXHJcbiAgICBjb25zdCBjYkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2JDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRiLXJvdy1pdGVtXCIpO1xyXG4gICAgY2JDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNiLWNvbnRhaW5lclwiKTtcclxuXHJcbiAgICBjb25zdCBjYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBjYi50eXBlID0gXCJjaGVja2JveFwiO1xyXG4gICAgY2JDb250YWluZXIuYXBwZW5kQ2hpbGQoY2IpO1xyXG5cclxuICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0YXNrTmFtZS5jbGFzc0xpc3QuYWRkKFwidGItcm93LWl0ZW1cIik7XHJcbiAgICB0YXNrTmFtZS5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcclxuICAgIHRhc2tOYW1lLnRleHRDb250ZW50ID0gdGFzay5uYW1lO1xyXG5cclxuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGR1ZURhdGUuY2xhc3NMaXN0LmFkZChcInRiLXJvdy1pdGVtXCIpO1xyXG4gICAgZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKFwiZHVlLWRhdGVcIik7XHJcbiAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gdGFzay5kdWVEYXRlO1xyXG5cclxuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwidGItcm93LWl0ZW1cIik7XHJcbiAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHlcIik7XHJcbiAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9IGdldFByaW9yaXR5U3RyaW5nKHRhc2sucHJpb3JpdHkpO1xyXG5cclxuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJ0Yi1yb3ctaXRlbVwiKTtcclxuICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLWJ0blwiKTtcclxuXHJcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIFxyXG5cclxuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICBpY29uLmNsYXNzTmFtZSA9IFwibWF0ZXJpYWwtaWNvbnNcIjtcclxuICAgIGljb24udGV4dENvbnRlbnQgPSBcImRlbGV0ZVwiO1xyXG4gICAgYnRuLmFwcGVuZENoaWxkKGljb24pO1xyXG4gICAgZGVsZXRlQnRuLmFwcGVuZENoaWxkKGJ0bik7XHJcblxyXG4gICAgdGFza0l0ZW0uYXBwZW5kQ2hpbGQoY2JDb250YWluZXIpO1xyXG4gICAgdGFza0l0ZW0uYXBwZW5kQ2hpbGQodGFza05hbWUpO1xyXG4gICAgdGFza0l0ZW0uYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XHJcbiAgICB0YXNrSXRlbS5hcHBlbmRDaGlsZChwcmlvcml0eSk7XHJcbiAgICB0YXNrSXRlbS5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xyXG5cclxuICAgIHJldHVybiB0YXNrSXRlbTtcclxufVxyXG5cclxuXHJcbmNvbnN0IGNyZWF0ZVByaW9yaXR5U2VsZWN0ID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcclxuXHJcbiAgICBjb25zdCBvcDAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpXHJcbiAgICBvcDAudmFsdWUgPSBQUklPUklUWS5VTkRFRklORUQ7XHJcbiAgICBvcDAuaW5uZXJIVE1MID0gXCItLVwiO1xyXG5cclxuICAgIGNvbnN0IG9wMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIilcclxuICAgIG9wMS52YWx1ZSA9IFBSSU9SSVRZLkxPVztcclxuICAgIG9wMS5pbm5lckhUTUwgPSBcIkxvd1wiO1xyXG5cclxuICAgIGNvbnN0IG9wMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIilcclxuICAgIG9wMi52YWx1ZSA9IFBSSU9SSVRZLk1FRDtcclxuICAgIG9wMi5pbm5lckhUTUwgPSBcIk1lZGl1bVwiO1xyXG5cclxuICAgIGNvbnN0IG9wMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIilcclxuICAgIG9wMy52YWx1ZSA9IFBSSU9SSVRZLkhJR0g7XHJcbiAgICBvcDMuaW5uZXJIVE1MID0gXCJIaWdoXCI7XHJcblxyXG4gICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wMClcclxuICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcDEpO1xyXG4gICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wMik7XHJcbiAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3AzKTtcclxuXHJcbiAgICByZXR1cm4gc2VsZWN0O1xyXG59XHJcblxyXG5cclxuY29uc3QgZGlzcGxheUNvbnRyb2xsZXIgPSAoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgLyogPT09PT09PT09PT09PT09IFNpZGViYXIgVGFiIFN3aXRjaGluZyBmdW5jdGlvbnMgPT09PT09PT09PT09PT09ICovXHJcbiAgICBsZXQgYWN0aXZlSW5kZXggPSAxO1xyXG4gICAgY29uc3Qgc2lkZWJhck5hdkxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdi1saXN0IGEnKTtcclxuICAgIGNvbnN0IG1haW5Db250ZW50UGdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRlbnRcIikuY2hpbGRyZW47XHJcbiAgICBcclxuICAgIGNvbnN0IHJlbW92ZUFjdGl2ZSA9ICgpID0+IHtcclxuICAgICAgICBzaWRlYmFyTmF2TGlua3NbYWN0aXZlSW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgbWFpbkNvbnRlbnRQZ3NbYWN0aXZlSW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbWFrZUFjdGl2ZSA9ICgpID0+IHtcclxuICAgICAgICBzaWRlYmFyTmF2TGlua3NbYWN0aXZlSW5kZXhdLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgbWFpbkNvbnRlbnRQZ3NbYWN0aXZlSW5kZXhdLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2hhbmdlQWN0aXZlVGFiID0gKG5ld0luZGV4KSA9PiB7XHJcbiAgICAgICAgcmVtb3ZlQWN0aXZlKCk7XHJcbiAgICAgICAgYWN0aXZlSW5kZXggPSBuZXdJbmRleDtcclxuICAgICAgICBtYWtlQWN0aXZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyogUmVuZGVyIFRhc2sgQm9hcmQgUGFnZSAqL1xyXG4gICAgY29uc3QgcmVuZGVyVGFza0JvYXJkID0gKGFsbFRhc2tzKSA9PiB7XHJcbiAgICAgICAgdGFza3NUYWJsZS5yZXBsYWNlQ2hpbGRyZW4odGFza3NUYWJsZS5maXJzdEVsZW1lbnRDaGlsZCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxUYXNrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0YXNrc1RhYmxlLmFwcGVuZENoaWxkKGNyZWF0ZVRhc2tET00oYWxsVGFza3NbaV0pKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtjaGFuZ2VBY3RpdmVUYWIsIHJlbmRlclRhc2tCb2FyZH1cclxufSkoKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQge2Rpc3BsYXlDb250cm9sbGVyLCB0YXNrc1RhYmxlLCBjcmVhdGVQcmlvcml0eVNlbGVjdH07IiwiaW1wb3J0IHsgdGFza01hbmFnZXIgfSBmcm9tIFwiLi90YXNrXCI7XHJcblxyXG5jb25zdCBzdG9yYWdlTWFuYWdlciA9IChmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IHNhdmVEYXRhID0gKCkgPT4ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIGxvY2FsU3RvcmFnZSBjYW4ndCB0cmFuc2xhdGUgdGhpcyBpbnRvIEpTT04gaW1tZWRpYXRlbHlcclxuICAgICAgICAgKi9cclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFsbFRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KHRhc2tNYW5hZ2VyLmFsbFRhc2tzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0RGF0YSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB0YXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhbGxUYXNrc1wiKSk7IFxyXG4gICAgICAgIHJldHVybiB0YXNrcztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge3NhdmVEYXRhLCBnZXREYXRhfVxyXG59KSgpO1xyXG5cclxuZXhwb3J0IHtzdG9yYWdlTWFuYWdlcn0iLCIvKipcclxuICogU2NyaXB0IGRlZGljYXRlZCBmb3IgbWFuYWdpbmcgYWxsIHRhc2tzXHJcbiAqL1xyXG5cclxuXHJcbmNvbnN0IFBSSU9SSVRZID0gKGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc3QgVU5ERUZJTkVEID0gLTE7XHJcbiAgICBjb25zdCBMT1cgPSAwO1xyXG4gICAgY29uc3QgTUVEID0gMTtcclxuICAgIGNvbnN0IEhJR0ggPSAyO1xyXG5cclxuICAgIHJldHVybiB7VU5ERUZJTkVELCBMT1csIE1FRCwgSElHSH07XHJcblxyXG59KSgpO1xyXG5cclxuY29uc3QgU1RBVFVTID0gKGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc3QgTk9UX1NUQVJURUQgPSBcIk5TXCI7XHJcbiAgICBjb25zdCBJTl9QUk9HUkVTUyA9IFwiSVNcIjtcclxuICAgIGNvbnN0IERPTkUgPSBcIkRcIjtcclxuXHJcbiAgICByZXR1cm4ge05PVF9TVEFSVEVELCBJTl9QUk9HUkVTUywgRE9ORX07XHJcbn0pKCk7XHJcblxyXG5cclxuXHJcblxyXG4vKiBNYW5hZ2UgYWxsIHRhc2tzICovXHJcbmNvbnN0IHRhc2tNYW5hZ2VyID0gKGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc3QgYWxsVGFza3MgPSBbXTtcclxuXHJcbiAgICAvKiBGb3IgdGVzdGluZyBpZiB3ZSdyZSBkZWxldGluZy9tb2RpZnlpbmcgY29ycmVjdCB0YXNrICovXHJcbiAgICBsZXQgY291bnQgPSAwO1xyXG5cclxuICAgIC8qIENyZWF0ZSBuZXcgdGFzayBvYmplY3QgYW5kIGFkZCB0byBhbGxUYXNrcyBhcnJheSAqL1xyXG4gICAgY29uc3QgY3JlYXRlVGFzayA9IChuYW1lPVwiXCIsIGR1ZURhdGU9Y291bnQsIHByaW9yaXR5PVBSSU9SSVRZLlVOREVGSU5FRCkgPT4ge1xyXG4gICAgICAgIGxldCBzdGF0dXMgPSBTVEFUVVMuTk9UX1NUQVJURUQ7XHJcbiAgICAgICAgYWxsVGFza3MucHVzaCh7bmFtZSwgZHVlRGF0ZSwgcHJpb3JpdHksIHN0YXR1c30pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8qIEZvciB0ZXN0aW5nICovXHJcbiAgICAgICAgY291bnQgKz0gMTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBsb2FkVGFzayA9ICh0YXNrT2JqKSA9PiB7XHJcbiAgICAgICAgYWxsVGFza3MucHVzaCh0YXNrT2JqKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBEZWxldGUgdGFzayBvYmplY3QgZnJvbSBhbGxUYXNrcyBhcnJheSAqL1xyXG4gICAgY29uc3QgZGVsZXRlVGFzayA9ICh0YXNrTnVtKSA9PiB7XHJcbiAgICAgICAgYWxsVGFza3Muc3BsaWNlKHRhc2tOdW0sIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNldE5hbWUgPSAodGFza051bSwgbmV3TmFtZSkgPT4ge1xyXG4gICAgICAgIGFsbFRhc2tzW3Rhc2tOdW1dLm5hbWUgPSBuZXdOYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNldERhdGUgPSAodGFza051bSwgbmV3RGF0ZSkgPT4ge1xyXG4gICAgICAgIGFsbFRhc2tzW3Rhc2tOdW1dLmR1ZURhdGUgPSBuZXdEYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIFNldCBwcmlvcml0eSBvZiB0YXNrIG9iamVjdCAqL1xyXG4gICAgY29uc3Qgc2V0UHJpb3JpdHkgPSAodGFza051bSwgcHJpb3JpdHkpID0+IHtcclxuICAgICAgICBhbGxUYXNrc1t0YXNrTnVtXS5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgfVxyXG5cclxuICAgIC8qIFNldCBzdGF0dXMgb2YgdGFzayBvYmplY3QgLSAoTm90IFN0YXJ0ZWQsIEluIFByb2dyZXNzLCBEb25lKSAqL1xyXG4gICAgY29uc3Qgc2V0U3RhdHVzID0gKHRhc2ssIHN0YXR1cykgPT4ge1xyXG4gICAgICAgIHRhc2suc3RhdHVzID0gc3RhdHVzO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7Y3JlYXRlVGFzaywgZGVsZXRlVGFzaywgc2V0TmFtZSwgc2V0RGF0ZSwgc2V0UHJpb3JpdHksIHNldFN0YXR1cywgYWxsVGFza3MsIGxvYWRUYXNrfTtcclxuXHJcbn0pKCk7XHJcblxyXG5cclxuZXhwb3J0IHtQUklPUklUWSwgU1RBVFVTLCB0YXNrTWFuYWdlcn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuLi9zdHlsZS5jc3MnO1xyXG5cclxuaW1wb3J0IHsgY3JlYXRlUHJpb3JpdHlTZWxlY3QsIGRpc3BsYXlDb250cm9sbGVyLCB0YXNrc1RhYmxlIH0gZnJvbSAnLi9kb20uanMnO1xyXG5pbXBvcnQgeyB0YXNrTWFuYWdlciwgUFJJT1JJVFkgfSBmcm9tICcuL3Rhc2suanMnO1xyXG5pbXBvcnQgeyBzdG9yYWdlTWFuYWdlciB9IGZyb20gJy4vcGVyc2lzdGVuY2UuanMnO1xyXG5cclxuY29uc3Qgc2lkZWJhck5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2LWxpc3RcIik7XHJcbmNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC10YXNrIGJ1dHRvblwiKTtcclxuXHJcblxyXG5cclxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcclxuICAgIC8vIE9uIGxvYWQgc2hvdyB0aGUgXCJBbGwgVGFza3NcIiBUYWJcclxuICAgIGRpc3BsYXlDb250cm9sbGVyLmNoYW5nZUFjdGl2ZVRhYigxKTtcclxuICAgIGNvbnN0IG9iamVjdHMgPSBzdG9yYWdlTWFuYWdlci5nZXREYXRhKCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJZiB1c2VyIGhhZCBubyBzYXZlZCB0YXNrcywgY3JlYXRlIGEgZGVmYXVsdCB0YXNrLFxyXG4gICAgICogZWxzZSBsb2FkIHRhc2tzIHRoYXQgdXNlciBoYXZlIHByZXZpb3VzbHkgY3JlYXRlZCBpbnRvXHJcbiAgICAgKiB0YXNrTWFuYWdlclxyXG4gICAgICovXHJcbiAgICBpZiAob2JqZWN0cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICB0YXNrTWFuYWdlci5jcmVhdGVUYXNrKFwiQSBkZWZhdWx0IHRhc2tcIiwgXCJkdWUgZGF0ZVwiKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGZvciAoY29uc3Qgb2JqIG9mIG9iamVjdHMpIHtcclxuICAgICAgICAgICAgdGFza01hbmFnZXIubG9hZFRhc2sob2JqKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBVcGRhdGUgZGlzcGxheVxyXG4gICAgZGlzcGxheUNvbnRyb2xsZXIucmVuZGVyVGFza0JvYXJkKHRhc2tNYW5hZ2VyLmFsbFRhc2tzKTtcclxufVxyXG5cclxuc2lkZWJhck5hdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgaWYgKGUudGFyZ2V0LnRhZ05hbWUgIT09ICdBJykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IG5ld0FjdGl2ZUluZGV4ID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdpbmRleCcpO1xyXG4gICAgZGlzcGxheUNvbnRyb2xsZXIuY2hhbmdlQWN0aXZlVGFiKG5ld0FjdGl2ZUluZGV4KTtcclxufSk7XHJcblxyXG5cclxuYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICB0YXNrTWFuYWdlci5jcmVhdGVUYXNrKCk7XHJcbiAgICBkaXNwbGF5Q29udHJvbGxlci5yZW5kZXJUYXNrQm9hcmQodGFza01hbmFnZXIuYWxsVGFza3MpO1xyXG5cclxuICAgIC8qIFxyXG4gICAgICogQ3JlYXRpbmcgYSBuZXcgdGFzayBpbW1lZGlhdGVseSBmb2N1cyBvbiB0aGUgbmV3IHRhc2sgbmFtZSdzIGlucHV0IGZpZWxkIFxyXG4gICAgICogTm90ZTogY2xpY2tpbmcgYWRkIGJ1dHRvbiBhZGQgYSBuZXcgdGFza1xyXG4gICAgICogID0+IGd1YXJhbnRlZWQgdG8gYWx3YXlzIGhhdmUgYXQgbGVhc3QgMSB0YXNrIGluIHRhYmxlIHdoZW4gdGhpcyBoYXBwZW5cclxuICAgICAqICA9PiB3ZSB3b24ndCBhY2NpZGVudGFsbHkgc2VsZWN0IHRoZSBoZWFkZXJcclxuICAgICovXHJcbiAgICBjb25zdCBhbGxUYXNrc0RPTSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFza1wiKTtcclxuICAgIGNvbnN0IGxhc3QgPSBhbGxUYXNrc0RPTVthbGxUYXNrc0RPTS5sZW5ndGgtMV07XHJcbiAgICBoYW5kbGVUYXNrSW5wdXRDbGljayhsYXN0KTtcclxufSk7XHJcblxyXG5cclxuLyogTGlzdGVuIHRvIGFsbCBjbGljayBldmVudHMgaW4gdGFzayB0YWJsZSAqL1xyXG50YXNrc1RhYmxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgY29uc3QgZG9tRWxlbSA9IGUudGFyZ2V0O1xyXG5cclxuICAgIC8qIENhc2Ugd2hlbiB0YWJsZSBoZWFkZXIgd2FzIGNsaWNrZWQgKi9cclxuICAgIGlmIChkb21FbGVtLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidGItaGVhZGVyXCIpKSB7XHJcbiAgICAgICAgLy8gRG8gbm90aGluZ1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvKiBIYW5kbGUgY2FzZSB3aGVuICBkZWxldGUgYnV0dG9uIHdhcyBwcmVzc2VkICovXHJcbiAgICBpZiAoZG9tRWxlbS50YWdOYW1lID09PSBcIkJVVFRPTlwiIHx8IGRvbUVsZW0udGFnTmFtZSA9PT0gXCJJXCIpIHtcclxuICAgICAgICBoYW5kbGVEZWxldGVCdG5DbGljayhkb21FbGVtKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRvbUVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwidGFza1wiKSkge1xyXG4gICAgICAgIGhhbmRsZVRhc2tJbnB1dENsaWNrKGRvbUVsZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkb21FbGVtLmNsYXNzTGlzdC5jb250YWlucyhcImR1ZS1kYXRlXCIpKSB7XHJcbiAgICAgICAgaGFuZGxlVGFza0lucHV0Q2xpY2soZG9tRWxlbSwgXCJkYXRlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkb21FbGVtLmNsYXNzTGlzdC5jb250YWlucyhcInByaW9yaXR5XCIpKSB7XHJcbiAgICAgICAgaGFuZGxlUHJpb3JpdHlJbnB1dENsaWNrKGRvbUVsZW0pO1xyXG4gICAgfVxyXG5cclxufSk7XHJcblxyXG5cclxuLyogXHJcbiAqIFJldHVybiB0aGUgcG9zaXRpb24gb2YgYSB0YXNrIGluIHRhc2tNYW5hZ2VyIGdpdmVuIGl0cyBkb20gZWxlbWVudCBcclxuICogb3Igb25lIG9mIGl0cyBjaGlsZCBub2RlXHJcbiovXHJcbmZ1bmN0aW9uIGZldGNoVGFza051bShkb21FbGVtKSB7XHJcbiAgICBjb25zdCBhbGxSb3dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50Yi1yb3c6bm90KC50Yi1oZWFkZXIpXCIpXHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxSb3dzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGFsbFJvd3NbaV0uY29udGFpbnMoZG9tRWxlbSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG59XHJcblxyXG4vKiBEZWxldGUgY29ycmVzcG9uZGluZyB0YXNrIGZyb20gdGFza01hbmFnZXIgJiB1cGRhdGUgZGlzcGxheSAqL1xyXG5mdW5jdGlvbiBoYW5kbGVEZWxldGVCdG5DbGljayhkb21FbGVtKSB7XHJcbiAgICBjb25zdCB0YXNrTnVtID0gZmV0Y2hUYXNrTnVtKGRvbUVsZW0pO1xyXG4gICAgdGFza01hbmFnZXIuZGVsZXRlVGFzayh0YXNrTnVtKTtcclxuICAgIGRpc3BsYXlDb250cm9sbGVyLnJlbmRlclRhc2tCb2FyZCh0YXNrTWFuYWdlci5hbGxUYXNrcyk7XHJcbn1cclxuXHJcbi8qIEFsbG93IHVzZXIgdG8gZWRpdCB0YXNrIG5hbWUgYnkgY2xpY2tpbmcgb24gdGhlIGRpdiB3aXRoIHRoYXQgdGFzayBuYW1lICovXHJcbmZ1bmN0aW9uIGhhbmRsZVRhc2tJbnB1dENsaWNrKGRvbUVsZW0sIHR5cGU9XCJ0ZXh0XCIpIHtcclxuICAgIC8vIENyZWF0ZSBuZXcgdGV4dCBpbnB1dCBmaWVsZFxyXG4gICAgY29uc3QgaW5wdXRGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGlucHV0RmllbGQudHlwZSA9IHR5cGU7XHJcbiAgICBpbnB1dEZpZWxkLnZhbHVlID0gZG9tRWxlbS50ZXh0Q29udGVudDtcclxuICAgIFxyXG4gICAgLy8gUmVwbGFjZSBkaXYgd2l0aCBpbnB1dCBmaWVsZFxyXG4gICAgY29uc3QgcGFyZW50ID0gZG9tRWxlbS5wYXJlbnRFbGVtZW50O1xyXG4gICAgcGFyZW50LnJlcGxhY2VDaGlsZChpbnB1dEZpZWxkLCBkb21FbGVtKTtcclxuXHJcbiAgICAvLyBJbW1lZGlhdGVseSBmb2N1cyB0byBhbGxvdyB0eXBpbmdcclxuICAgIGlucHV0RmllbGQuZm9jdXMoKTtcclxuXHJcbiAgICAvLyBJbnB1dCBmaWVsZCBsb3NlIGZvY3VzIHdoZW4gZW50ZXIga2V5IHByZXNzZWRcclxuICAgIGlucHV0RmllbGQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUuY29kZSA9PSBcIkVudGVyXCIpIHtcclxuICAgICAgICAgICAgaW5wdXRGaWVsZC5ibHVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICAvLyBXaGVuIGlucHV0IGZpZWxkIGlzIG5vdCBmb2N1c2VkIC0+IHNhdmUgaXRzIHZhbHVlIGFzIHRoZSBuZXcgdGFzayBuYW1lXHJcbiAgICBpbnB1dEZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsICgpID0+IFxyXG4gICAgICAgIHNhdmVUYXNrKGRvbUVsZW0sIGlucHV0RmllbGQsIHBhcmVudCwgdHlwZSkpO1xyXG59XHJcblxyXG5cclxuLyogXHJcbiAqIEhlbHBlciBmdW5jdGlvbjogc2F2ZSB2YWx1ZSBmcm9tIGlucHV0IGZpZWxkIHRvIHRhc2sgbWFuYWdlclxyXG4gKiBhbmQgc3dhcCBvdXQgRE9NIGVsZW1lbnQgKGJhY2sgdG8gYmVpbmcgYSBkaXYpXHJcbiovXHJcbmZ1bmN0aW9uIHNhdmVUYXNrKGRvbUVsZW0sIGlucHV0RmllbGQsIHBhcmVudCwgdHlwZSkge1xyXG4gICAgLy8gU3dhcCBvdXQgRE9NIGVsZW1lbnRcclxuICAgIGNvbnN0IG5ld1ZhbHVlID0gaW5wdXRGaWVsZC52YWx1ZTtcclxuICAgIGRvbUVsZW0udGV4dENvbnRlbnQgPSBuZXdWYWx1ZTtcclxuICAgIHBhcmVudC5yZXBsYWNlQ2hpbGQoZG9tRWxlbSwgaW5wdXRGaWVsZCk7XHJcbiAgICBcclxuICAgIC8vIFNhdmUgbmV3IHZhbHVlIHRvIHRhc2tNYW5hZ2VyXHJcbiAgICBjb25zdCB0YXNrTnVtID0gZmV0Y2hUYXNrTnVtKGRvbUVsZW0pO1xyXG5cclxuICAgIGlmICh0eXBlID09IFwidGV4dFwiKSB7XHJcbiAgICAgICAgdGFza01hbmFnZXIuc2V0TmFtZSh0YXNrTnVtLCBuZXdWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0eXBlID09IFwiZGF0ZVwiKSB7XHJcbiAgICAgICAgdGFza01hbmFnZXIuc2V0RGF0ZSh0YXNrTnVtLCBuZXdWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB0YXNrTWFuYWdlci5zZXRQcmlvcml0eSh0YXNrTnVtLCBuZXdWYWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzcGxheUNvbnRyb2xsZXIucmVuZGVyVGFza0JvYXJkKHRhc2tNYW5hZ2VyLmFsbFRhc2tzKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZVByaW9yaXR5SW5wdXRDbGljayhkb21FbGVtKSB7XHJcbiAgICBjb25zdCBpbnB1dEZpZWxkID0gY3JlYXRlUHJpb3JpdHlTZWxlY3QoKTsgICAgXHJcbiAgICAvLyBSZXBsYWNlIGRpdiB3aXRoIGlucHV0IGZpZWxkXHJcbiAgICBjb25zdCBwYXJlbnQgPSBkb21FbGVtLnBhcmVudEVsZW1lbnQ7XHJcbiAgICBwYXJlbnQucmVwbGFjZUNoaWxkKGlucHV0RmllbGQsIGRvbUVsZW0pXHJcblxyXG4gICAgLy8gRm9jdXMgdG8gYWxsb3cgc2VsZWN0IHRvIGJsdXIgd2hlbiB1c2VyIGNsaWNrIG91dHNpZGVcclxuICAgIGlucHV0RmllbGQuZm9jdXMoKVxyXG4gICAgXHJcbiAgICAvLyBibHVyIHdoZW4gbmV3IHZhbHVlIHNlbGVjdGVkXHJcbiAgICBpbnB1dEZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xyXG4gICAgICAgIGlucHV0RmllbGQuYmx1cigpO1xyXG4gICAgfSlcclxuICAgIC8vIHNhdmUgdGFzayB3aGVuIHNlbGVjdCBpcyBibHVycmVkXHJcbiAgICBpbnB1dEZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsICgpID0+IHtcclxuICAgICAgICBpZiAoaW5wdXRGaWVsZC52YWx1ZSA9PSBQUklPUklUWS5VTkRFRklORUQgJiYgZG9tRWxlbS50ZXh0Q29udGVudCAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGlmIChkb21FbGVtLnRleHRDb250ZW50ID09IFwiSGlnaFwiKSB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dEZpZWxkLnZhbHVlID0gUFJJT1JJVFkuSElHSDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChkb21FbGVtLnRleHRDb250ZW50ID09IFwiTWVkaXVtXCIpIHtcclxuICAgICAgICAgICAgICAgIGlucHV0RmllbGQudmFsdWUgPSBQUklPUklUWS5NRUQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dEZpZWxkLnZhbHVlID0gUFJJT1JJVFkuTE9XO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNhdmVUYXNrKGRvbUVsZW0sIGlucHV0RmllbGQsIHBhcmVudCwgXCJwcmlvcml0eVwiKTtcclxuICAgIH0pXHJcbn1cclxuXHJcblxyXG53aW5kb3cub25iZWZvcmV1bmxvYWQgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcInJlbG9hZFwiKTtcclxuICAgIHN0b3JhZ2VNYW5hZ2VyLnNhdmVEYXRhKCk7XHJcbn1cclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9