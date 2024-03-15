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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n    --sidebar-width: 300px;\r\n    --row-height: 48px;\r\n    --std-border: 1px solid black;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n\r\n\r\n\r\n/* Everything in Sidebar */\r\n\r\n.sidebar {\r\n    background-color: black;\r\n    \r\n    /* Fixed on left side */\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    \r\n    height: 100%;\r\n    width: var(--sidebar-width);\r\n\r\n\r\n\r\n    --sidebar-padding-left: 32px;\r\n    --sidebar-font-size: 16px;\r\n    --sidebar-accented-color: #fff;\r\n\r\n    font-size: var(--sidebar-font-size);\r\n    color: var(--sidebar-accented-color);\r\n}\r\n\r\n.profile-container {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 32px;\r\n\r\n    margin-top: 16px;\r\n    padding-left: 64px;\r\n\r\n}\r\n\r\n.pfp-container {\r\n    width: 50px;\r\n    height: 50px;\r\n    background-color: var(--sidebar-accented-color);\r\n    border-radius: 100%;\r\n\r\n    /* Centre image using flexbox */\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.pfp-container img {\r\n    max-width: 90%;\r\n    max-height: 90%;\r\n    border-radius: 100%;\r\n}\r\n\r\n\r\n.sidebar ul {\r\n    list-style-type: none;\r\n    padding: 0;\r\n}\r\n\r\n.nav-list {\r\n    margin-top: 64px;\r\n}\r\n\r\n.nav-list li {\r\n    height: 48px;\r\n}\r\n\r\n.nav-list a {\r\n    max-width: 100%;\r\n    height: 100%;\r\n    \r\n    padding-left: var(--sidebar-padding-left);\r\n    \r\n    /* Vertically center text */\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n\r\n.management ul {\r\n    position: absolute;\r\n    margin: 0;\r\n    bottom: 64px;\r\n}\r\n\r\n.management ul li {\r\n    padding-left: var(--sidebar-padding-left);\r\n    height: 32px;\r\n}\r\n\r\n.sidebar a {\r\n    text-decoration: none;\r\n    color: var(--sidebar-accented-color);\r\n}\r\n\r\n.nav-list a:hover, \r\na.active{\r\n    background-color: var(--sidebar-accented-color);\r\n    color: black;\r\n}\r\n\r\n/* Main content */\r\n\r\n.main-content {\r\n    margin-left: var(--sidebar-width);\r\n}\r\n\r\n.main-content .active {\r\n    /* Only show active content */\r\n    display: block;\r\n}\r\n\r\n.all-projects {\r\n    display: none;\r\n}\r\n\r\n.all-tasks {\r\n    display: none;\r\n}\r\n\r\n.finished-projects {\r\n    display: none;\r\n}\r\n\r\n.finished-tasks {\r\n    display: none;\r\n}\r\n\r\n\r\n.title-container {\r\n    font-size: 64px;\r\n    font-weight: 700;\r\n    margin-top: 32px;\r\n    height: 80px;\r\n\r\n    margin-left: 3%;\r\n\r\n    /* title underline */\r\n    width: fit-content;\r\n    height: fit-content;\r\n    border-bottom: 4px solid black;\r\n    padding-right: 24px;\r\n\r\n}\r\n\r\n.projects-container,\r\n.tasks-container {\r\n    margin: 36px clamp(8px, 10%, 96px);\r\n}\r\n\r\n.project {\r\n    margin-top: 16px;\r\n    \r\n    display: grid;\r\n    grid-template-rows: var(--row-height) 1fr;\r\n    grid-template-columns: 2fr 1fr;\r\n\r\n    border: var(--std-border);\r\n\r\n}\r\n\r\n.proj-name-container {\r\n    /* styling for the \"table\" */\r\n    grid-area: 1 / 1 / 2 / 3;\r\n    border-bottom: var(--std-border);\r\n    \r\n    font-weight: 700;\r\n    font-size: 1.5em;\r\n    padding-left: 8px;\r\n\r\n    /* vertically centre project's name */\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.task-list {\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style-type: none;\r\n\r\n    grid-area: 2 / 1 / -1 / 2;\r\n\r\n    display: grid;\r\n    grid-row: 1fr;\r\n    grid-template-columns: 1fr;\r\n\r\n    border-right: var(--std-border);\r\n\r\n\r\n}\r\n\r\n.proj-note {\r\n    grid-area: 2 / 2 / -1 / 3;\r\n\r\n}\r\n\r\n.task-item {\r\n    border-bottom: var(--std-border);\r\n    height: var(--row-height);\r\n\r\n    /* Checkbox and Task Name in 1 row */\r\n    display: flex;\r\n}\r\n\r\n.task-list span {\r\n    height: inherit;\r\n}\r\n\r\n.task-item:last-child {\r\n    border-bottom: none;\r\n}\r\n\r\n.cb-container {\r\n    height: 100%;\r\n    aspect-ratio: 1 / 1;\r\n    border-right: var(--std-border);\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\ninput[type=checkbox] {\r\n    transform: scale(2);\r\n}\r\n\r\n\r\n.task-name {\r\n    display: flex;\r\n    align-items: center;\r\n\r\n    padding-left: min(10px,3%);\r\n}\r\n\r\n\r\n\r\n/* -------------------------- ALL TASKS -------------------------- */\r\n\r\n.tasks-container {\r\n    min-width: fit-content;\r\n}\r\n\r\n#add-task {\r\n    margin-bottom: 6px;\r\n    display: flex;\r\n    justify-content: end;\r\n}\r\n\r\n\r\n.table,\r\n.table li {\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style-type: none;\r\n}\r\n\r\n.table {\r\n    display: grid;\r\n    grid-template-rows: var(--row-height);\r\n}\r\n\r\n.tb-row {\r\n    /* divide each row into 4 columns */\r\n    display: grid;\r\n    grid-template-rows: 100%;\r\n    grid-template-columns: var(--row-height) minmax(128px, 3fr) minmax(128px, 2fr) minmax(96px, 1fr) var(--row-height);\r\n    \r\n    /* row styling + border */\r\n    height: var(--row-height);\r\n    border: var(--std-border);\r\n    border-top: none;\r\n    border-right: none;\r\n}\r\n\r\n.tb-header {\r\n    border-top: var(--std-border);\r\n    font-weight: 700;\r\n    font-size: 1.5em\r\n}\r\n\r\n.tb-row-item {\r\n    display: flex;\r\n    align-items: center;\r\n    border-right: var(--std-border);\r\n}\r\n\r\n.task,\r\n.due-date,\r\n.priority {\r\n    padding-left: 8px;\r\n}\r\n\r\n.delete-btn {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.delete-btn button {\r\n    background-color: white;\r\n}\r\n\r\n.delete-btn button:hover {\r\n    color: rgb(117, 117, 117);\r\n}\r\n\r\n\r\n\r\n/* Media Queries to hide sidebar when page is small */\r\n@media screen and (max-width:800px) {\r\n    .sidebar {\r\n        display: none;\r\n    }\r\n\r\n    .main-content {\r\n        margin-left: 0;\r\n    }\r\n}"],"sourceRoot":""}]);
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

/*
function getPriorityString(value) {
    console.log(value);
    switch(value) {
        case PRIORITY.UNDEFINED:
            return "--";
        case PRIORITY.LOW:
            return "Low";
        case PRIORITY.MED:
            return "Medium";
        case PRIORITY.HIGH:
            return "High";
        default:
            console.log("ERROR: getPriorityString");
    }

    return null;

}
*/

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

    return {createTask, deleteTask, setName, setDate, setPriority, setStatus, allTasks};

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





const sidebarNav = document.querySelector(".nav-list");
const addTaskBtn = document.querySelector("#add-task button");


window.onload = () => {
    _dom_js__WEBPACK_IMPORTED_MODULE_1__.displayController.changeActiveTab(1);
    _task_js__WEBPACK_IMPORTED_MODULE_2__.taskManager.createTask("A default task", "due date");
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
}


function handlePriorityInputClick(domElem) {
    const inputField = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.createPrioritySelect)();    
    // Replace div with input field
    const parent = domElem.parentElement;
    parent.replaceChild(inputField, domElem);
    //
    inputField.addEventListener("change", () => {
        saveTask(domElem, inputField, parent, "priority");
    })
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsU0FBUyxhQUFhLE1BQU0sYUFBYSxhQUFhLFdBQVcsVUFBVSxXQUFXLFVBQVUsZUFBZSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFlBQVksWUFBWSxjQUFjLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxjQUFjLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFFBQVEsS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsV0FBVyxhQUFhLGFBQWEsV0FBVyxZQUFZLFFBQVEsS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxPQUFPLGFBQWEsTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsUUFBUSxLQUFLLFVBQVUsWUFBWSxhQUFhLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGNBQWMsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLGFBQWEsV0FBVyxZQUFZLGNBQWMsY0FBYyxPQUFPLEtBQUssWUFBWSxhQUFhLGNBQWMsYUFBYSxhQUFhLGNBQWMsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxhQUFhLGNBQWMsV0FBVyxVQUFVLGFBQWEsZUFBZSxPQUFPLEtBQUssYUFBYSxPQUFPLEtBQUssWUFBWSxjQUFjLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGNBQWMsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksUUFBUSxLQUFLLFVBQVUsYUFBYSxhQUFhLFNBQVMsYUFBYSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZ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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaURBQVc7QUFDbkI7QUFDQTtBQUNBLFFBQVEsaURBQVc7QUFDbkI7QUFDQTtBQUNBLFFBQVEsaURBQVc7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw2REFBb0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdC9kb20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdC90YXNrLmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHQvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcclxuICAgIC0tc2lkZWJhci13aWR0aDogMzAwcHg7XHJcbiAgICAtLXJvdy1oZWlnaHQ6IDQ4cHg7XHJcbiAgICAtLXN0ZC1ib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4vKiBFdmVyeXRoaW5nIGluIFNpZGViYXIgKi9cclxuXHJcbi5zaWRlYmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgXHJcbiAgICAvKiBGaXhlZCBvbiBsZWZ0IHNpZGUgKi9cclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiB2YXIoLS1zaWRlYmFyLXdpZHRoKTtcclxuXHJcblxyXG5cclxuICAgIC0tc2lkZWJhci1wYWRkaW5nLWxlZnQ6IDMycHg7XHJcbiAgICAtLXNpZGViYXItZm9udC1zaXplOiAxNnB4O1xyXG4gICAgLS1zaWRlYmFyLWFjY2VudGVkLWNvbG9yOiAjZmZmO1xyXG5cclxuICAgIGZvbnQtc2l6ZTogdmFyKC0tc2lkZWJhci1mb250LXNpemUpO1xyXG4gICAgY29sb3I6IHZhcigtLXNpZGViYXItYWNjZW50ZWQtY29sb3IpO1xyXG59XHJcblxyXG4ucHJvZmlsZS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGdhcDogMzJweDtcclxuXHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA2NHB4O1xyXG5cclxufVxyXG5cclxuLnBmcC1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWFjY2VudGVkLWNvbG9yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcblxyXG4gICAgLyogQ2VudHJlIGltYWdlIHVzaW5nIGZsZXhib3ggKi9cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wZnAtY29udGFpbmVyIGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDkwJTtcclxuICAgIG1heC1oZWlnaHQ6IDkwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbn1cclxuXHJcblxyXG4uc2lkZWJhciB1bCB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4ubmF2LWxpc3Qge1xyXG4gICAgbWFyZ2luLXRvcDogNjRweDtcclxufVxyXG5cclxuLm5hdi1saXN0IGxpIHtcclxuICAgIGhlaWdodDogNDhweDtcclxufVxyXG5cclxuLm5hdi1saXN0IGEge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgXHJcbiAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLXNpZGViYXItcGFkZGluZy1sZWZ0KTtcclxuICAgIFxyXG4gICAgLyogVmVydGljYWxseSBjZW50ZXIgdGV4dCAqL1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4ubWFuYWdlbWVudCB1bCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBib3R0b206IDY0cHg7XHJcbn1cclxuXHJcbi5tYW5hZ2VtZW50IHVsIGxpIHtcclxuICAgIHBhZGRpbmctbGVmdDogdmFyKC0tc2lkZWJhci1wYWRkaW5nLWxlZnQpO1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG59XHJcblxyXG4uc2lkZWJhciBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiB2YXIoLS1zaWRlYmFyLWFjY2VudGVkLWNvbG9yKTtcclxufVxyXG5cclxuLm5hdi1saXN0IGE6aG92ZXIsIFxyXG5hLmFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItYWNjZW50ZWQtY29sb3IpO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4vKiBNYWluIGNvbnRlbnQgKi9cclxuXHJcbi5tYWluLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IHZhcigtLXNpZGViYXItd2lkdGgpO1xyXG59XHJcblxyXG4ubWFpbi1jb250ZW50IC5hY3RpdmUge1xyXG4gICAgLyogT25seSBzaG93IGFjdGl2ZSBjb250ZW50ICovXHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmFsbC1wcm9qZWN0cyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uYWxsLXRhc2tzIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5maW5pc2hlZC1wcm9qZWN0cyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uZmluaXNoZWQtdGFza3Mge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuXHJcbi50aXRsZS1jb250YWluZXIge1xyXG4gICAgZm9udC1zaXplOiA2NHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIG1hcmdpbi10b3A6IDMycHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcblxyXG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xyXG5cclxuICAgIC8qIHRpdGxlIHVuZGVybGluZSAqL1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCBibGFjaztcclxuICAgIHBhZGRpbmctcmlnaHQ6IDI0cHg7XHJcblxyXG59XHJcblxyXG4ucHJvamVjdHMtY29udGFpbmVyLFxyXG4udGFza3MtY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogMzZweCBjbGFtcCg4cHgsIDEwJSwgOTZweCk7XHJcbn1cclxuXHJcbi5wcm9qZWN0IHtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICBcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHZhcigtLXJvdy1oZWlnaHQpIDFmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcclxuXHJcbiAgICBib3JkZXI6IHZhcigtLXN0ZC1ib3JkZXIpO1xyXG5cclxufVxyXG5cclxuLnByb2otbmFtZS1jb250YWluZXIge1xyXG4gICAgLyogc3R5bGluZyBmb3IgdGhlIFwidGFibGVcIiAqL1xyXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAzO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogdmFyKC0tc3RkLWJvcmRlcik7XHJcbiAgICBcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcblxyXG4gICAgLyogdmVydGljYWxseSBjZW50cmUgcHJvamVjdCdzIG5hbWUgKi9cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4udGFzay1saXN0IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcblxyXG4gICAgZ3JpZC1hcmVhOiAyIC8gMSAvIC0xIC8gMjtcclxuXHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC1yb3c6IDFmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG5cclxuICAgIGJvcmRlci1yaWdodDogdmFyKC0tc3RkLWJvcmRlcik7XHJcblxyXG5cclxufVxyXG5cclxuLnByb2otbm90ZSB7XHJcbiAgICBncmlkLWFyZWE6IDIgLyAyIC8gLTEgLyAzO1xyXG5cclxufVxyXG5cclxuLnRhc2staXRlbSB7XHJcbiAgICBib3JkZXItYm90dG9tOiB2YXIoLS1zdGQtYm9yZGVyKTtcclxuICAgIGhlaWdodDogdmFyKC0tcm93LWhlaWdodCk7XHJcblxyXG4gICAgLyogQ2hlY2tib3ggYW5kIFRhc2sgTmFtZSBpbiAxIHJvdyAqL1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLnRhc2stbGlzdCBzcGFuIHtcclxuICAgIGhlaWdodDogaW5oZXJpdDtcclxufVxyXG5cclxuLnRhc2staXRlbTpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbn1cclxuXHJcbi5jYi1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcclxuICAgIGJvcmRlci1yaWdodDogdmFyKC0tc3RkLWJvcmRlcik7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1jaGVja2JveF0ge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgyKTtcclxufVxyXG5cclxuXHJcbi50YXNrLW5hbWUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgcGFkZGluZy1sZWZ0OiBtaW4oMTBweCwzJSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gQUxMIFRBU0tTIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4udGFza3MtY29udGFpbmVyIHtcclxuICAgIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XHJcbn1cclxuXHJcbiNhZGQtdGFzayB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XHJcbn1cclxuXHJcblxyXG4udGFibGUsXHJcbi50YWJsZSBsaSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcblxyXG4udGFibGUge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogdmFyKC0tcm93LWhlaWdodCk7XHJcbn1cclxuXHJcbi50Yi1yb3cge1xyXG4gICAgLyogZGl2aWRlIGVhY2ggcm93IGludG8gNCBjb2x1bW5zICovXHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDAlO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiB2YXIoLS1yb3ctaGVpZ2h0KSBtaW5tYXgoMTI4cHgsIDNmcikgbWlubWF4KDEyOHB4LCAyZnIpIG1pbm1heCg5NnB4LCAxZnIpIHZhcigtLXJvdy1oZWlnaHQpO1xyXG4gICAgXHJcbiAgICAvKiByb3cgc3R5bGluZyArIGJvcmRlciAqL1xyXG4gICAgaGVpZ2h0OiB2YXIoLS1yb3ctaGVpZ2h0KTtcclxuICAgIGJvcmRlcjogdmFyKC0tc3RkLWJvcmRlcik7XHJcbiAgICBib3JkZXItdG9wOiBub25lO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG59XHJcblxyXG4udGItaGVhZGVyIHtcclxuICAgIGJvcmRlci10b3A6IHZhcigtLXN0ZC1ib3JkZXIpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW1cclxufVxyXG5cclxuLnRiLXJvdy1pdGVtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiB2YXIoLS1zdGQtYm9yZGVyKTtcclxufVxyXG5cclxuLnRhc2ssXHJcbi5kdWUtZGF0ZSxcclxuLnByaW9yaXR5IHtcclxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG59XHJcblxyXG4uZGVsZXRlLWJ0biB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZGVsZXRlLWJ0biBidXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5kZWxldGUtYnRuIGJ1dHRvbjpob3ZlciB7XHJcbiAgICBjb2xvcjogcmdiKDExNywgMTE3LCAxMTcpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qIE1lZGlhIFF1ZXJpZXMgdG8gaGlkZSBzaWRlYmFyIHdoZW4gcGFnZSBpcyBzbWFsbCAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjgwMHB4KSB7XHJcbiAgICAuc2lkZWJhciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAubWFpbi1jb250ZW50IHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIH1cclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDs7Ozs7QUFLQSwwQkFBMEI7O0FBRTFCO0lBQ0ksdUJBQXVCOztJQUV2Qix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPOztJQUVQLFlBQVk7SUFDWiwyQkFBMkI7Ozs7SUFJM0IsNEJBQTRCO0lBQzVCLHlCQUF5QjtJQUN6Qiw4QkFBOEI7O0lBRTlC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QTtJQUNJLDZCQUE2QjtJQUM3QixnQkFBZ0I7SUFDaEI7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsK0JBQStCO0FBQ25DOztBQUVBOzs7SUFHSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7OztBQUlBLHFEQUFxRDtBQUNyRDtJQUNJO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAgIC0tc2lkZWJhci13aWR0aDogMzAwcHg7XFxyXFxuICAgIC0tcm93LWhlaWdodDogNDhweDtcXHJcXG4gICAgLS1zdGQtYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbi8qIEV2ZXJ5dGhpbmcgaW4gU2lkZWJhciAqL1xcclxcblxcclxcbi5zaWRlYmFyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIFxcclxcbiAgICAvKiBGaXhlZCBvbiBsZWZ0IHNpZGUgKi9cXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIFxcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiB2YXIoLS1zaWRlYmFyLXdpZHRoKTtcXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4gICAgLS1zaWRlYmFyLXBhZGRpbmctbGVmdDogMzJweDtcXHJcXG4gICAgLS1zaWRlYmFyLWZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgLS1zaWRlYmFyLWFjY2VudGVkLWNvbG9yOiAjZmZmO1xcclxcblxcclxcbiAgICBmb250LXNpemU6IHZhcigtLXNpZGViYXItZm9udC1zaXplKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXNpZGViYXItYWNjZW50ZWQtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZmlsZS1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAzMnB4O1xcclxcblxcclxcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDY0cHg7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5wZnAtY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDUwcHg7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1hY2NlbnRlZC1jb2xvcik7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxyXFxuXFxyXFxuICAgIC8qIENlbnRyZSBpbWFnZSB1c2luZyBmbGV4Ym94ICovXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucGZwLWNvbnRhaW5lciBpbWcge1xcclxcbiAgICBtYXgtd2lkdGg6IDkwJTtcXHJcXG4gICAgbWF4LWhlaWdodDogOTAlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uc2lkZWJhciB1bCB7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saXN0IHtcXHJcXG4gICAgbWFyZ2luLXRvcDogNjRweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saXN0IGxpIHtcXHJcXG4gICAgaGVpZ2h0OiA0OHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpc3QgYSB7XFxyXFxuICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1zaWRlYmFyLXBhZGRpbmctbGVmdCk7XFxyXFxuICAgIFxcclxcbiAgICAvKiBWZXJ0aWNhbGx5IGNlbnRlciB0ZXh0ICovXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5tYW5hZ2VtZW50IHVsIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGJvdHRvbTogNjRweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1hbmFnZW1lbnQgdWwgbGkge1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLXNpZGViYXItcGFkZGluZy1sZWZ0KTtcXHJcXG4gICAgaGVpZ2h0OiAzMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhciBhIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBjb2xvcjogdmFyKC0tc2lkZWJhci1hY2NlbnRlZC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGlzdCBhOmhvdmVyLCBcXHJcXG5hLmFjdGl2ZXtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1hY2NlbnRlZC1jb2xvcik7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLyogTWFpbiBjb250ZW50ICovXFxyXFxuXFxyXFxuLm1haW4tY29udGVudCB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiB2YXIoLS1zaWRlYmFyLXdpZHRoKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tY29udGVudCAuYWN0aXZlIHtcXHJcXG4gICAgLyogT25seSBzaG93IGFjdGl2ZSBjb250ZW50ICovXFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4uYWxsLXByb2plY3RzIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFsbC10YXNrcyB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5maW5pc2hlZC1wcm9qZWN0cyB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5maW5pc2hlZC10YXNrcyB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcblxcclxcbi50aXRsZS1jb250YWluZXIge1xcclxcbiAgICBmb250LXNpemU6IDY0cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIG1hcmdpbi10b3A6IDMycHg7XFxyXFxuICAgIGhlaWdodDogODBweDtcXHJcXG5cXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xcclxcblxcclxcbiAgICAvKiB0aXRsZSB1bmRlcmxpbmUgKi9cXHJcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgYmxhY2s7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDI0cHg7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cy1jb250YWluZXIsXFxyXFxuLnRhc2tzLWNvbnRhaW5lciB7XFxyXFxuICAgIG1hcmdpbjogMzZweCBjbGFtcCg4cHgsIDEwJSwgOTZweCk7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0IHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTZweDtcXHJcXG4gICAgXFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogdmFyKC0tcm93LWhlaWdodCkgMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XFxyXFxuXFxyXFxuICAgIGJvcmRlcjogdmFyKC0tc3RkLWJvcmRlcik7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5wcm9qLW5hbWUtY29udGFpbmVyIHtcXHJcXG4gICAgLyogc3R5bGluZyBmb3IgdGhlIFxcXCJ0YWJsZVxcXCIgKi9cXHJcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAzO1xcclxcbiAgICBib3JkZXItYm90dG9tOiB2YXIoLS1zdGQtYm9yZGVyKTtcXHJcXG4gICAgXFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xcclxcblxcclxcbiAgICAvKiB2ZXJ0aWNhbGx5IGNlbnRyZSBwcm9qZWN0J3MgbmFtZSAqL1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1saXN0IHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuXFxyXFxuICAgIGdyaWQtYXJlYTogMiAvIDEgLyAtMSAvIDI7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtcm93OiAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcblxcclxcbiAgICBib3JkZXItcmlnaHQ6IHZhcigtLXN0ZC1ib3JkZXIpO1xcclxcblxcclxcblxcclxcbn1cXHJcXG5cXHJcXG4ucHJvai1ub3RlIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMiAvIC0xIC8gMztcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLnRhc2staXRlbSB7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IHZhcigtLXN0ZC1ib3JkZXIpO1xcclxcbiAgICBoZWlnaHQ6IHZhcigtLXJvdy1oZWlnaHQpO1xcclxcblxcclxcbiAgICAvKiBDaGVja2JveCBhbmQgVGFzayBOYW1lIGluIDEgcm93ICovXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWxpc3Qgc3BhbiB7XFxyXFxuICAgIGhlaWdodDogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2staXRlbTpsYXN0LWNoaWxkIHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNiLWNvbnRhaW5lciB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXHJcXG4gICAgYm9yZGVyLXJpZ2h0OiB2YXIoLS1zdGQtYm9yZGVyKTtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9Y2hlY2tib3hdIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgyKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnRhc2stbmFtZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIHBhZGRpbmctbGVmdDogbWluKDEwcHgsMyUpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBBTEwgVEFTS1MgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXHJcXG5cXHJcXG4udGFza3MtY29udGFpbmVyIHtcXHJcXG4gICAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC10YXNrIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnRhYmxlLFxcclxcbi50YWJsZSBsaSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udGFibGUge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHZhcigtLXJvdy1oZWlnaHQpO1xcclxcbn1cXHJcXG5cXHJcXG4udGItcm93IHtcXHJcXG4gICAgLyogZGl2aWRlIGVhY2ggcm93IGludG8gNCBjb2x1bW5zICovXFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwJTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiB2YXIoLS1yb3ctaGVpZ2h0KSBtaW5tYXgoMTI4cHgsIDNmcikgbWlubWF4KDEyOHB4LCAyZnIpIG1pbm1heCg5NnB4LCAxZnIpIHZhcigtLXJvdy1oZWlnaHQpO1xcclxcbiAgICBcXHJcXG4gICAgLyogcm93IHN0eWxpbmcgKyBib3JkZXIgKi9cXHJcXG4gICAgaGVpZ2h0OiB2YXIoLS1yb3ctaGVpZ2h0KTtcXHJcXG4gICAgYm9yZGVyOiB2YXIoLS1zdGQtYm9yZGVyKTtcXHJcXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udGItaGVhZGVyIHtcXHJcXG4gICAgYm9yZGVyLXRvcDogdmFyKC0tc3RkLWJvcmRlcik7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41ZW1cXHJcXG59XFxyXFxuXFxyXFxuLnRiLXJvdy1pdGVtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyLXJpZ2h0OiB2YXIoLS1zdGQtYm9yZGVyKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2ssXFxyXFxuLmR1ZS1kYXRlLFxcclxcbi5wcmlvcml0eSB7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlLWJ0biB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlLWJ0biBidXR0b24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZS1idG4gYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6IHJnYigxMTcsIDExNywgMTE3KTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyogTWVkaWEgUXVlcmllcyB0byBoaWRlIHNpZGViYXIgd2hlbiBwYWdlIGlzIHNtYWxsICovXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo4MDBweCkge1xcclxcbiAgICAuc2lkZWJhciB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5tYWluLWNvbnRlbnQge1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qKlxyXG4gKiBTY3JpcHQgZGVkaWNhdGVkIHRvIGZ1bmN0aW9ucyBmb3IgY3JlYXRpbmcvbWFuaXB1bGF0aW5nIERPTSBlbGVtZW50c1xyXG4gKi9cclxuXHJcbmltcG9ydCB7IFBSSU9SSVRZIH0gZnJvbSBcIi4vdGFza1wiO1xyXG5cclxuXHJcbmNvbnN0IHRhc2tzVGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhYmxlXCIpO1xyXG5cclxuLypcclxuZnVuY3Rpb24gZ2V0UHJpb3JpdHlTdHJpbmcodmFsdWUpIHtcclxuICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgIHN3aXRjaCh2YWx1ZSkge1xyXG4gICAgICAgIGNhc2UgUFJJT1JJVFkuVU5ERUZJTkVEOlxyXG4gICAgICAgICAgICByZXR1cm4gXCItLVwiO1xyXG4gICAgICAgIGNhc2UgUFJJT1JJVFkuTE9XOlxyXG4gICAgICAgICAgICByZXR1cm4gXCJMb3dcIjtcclxuICAgICAgICBjYXNlIFBSSU9SSVRZLk1FRDpcclxuICAgICAgICAgICAgcmV0dXJuIFwiTWVkaXVtXCI7XHJcbiAgICAgICAgY2FzZSBQUklPUklUWS5ISUdIOlxyXG4gICAgICAgICAgICByZXR1cm4gXCJIaWdoXCI7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFUlJPUjogZ2V0UHJpb3JpdHlTdHJpbmdcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcblxyXG59XHJcbiovXHJcblxyXG5jb25zdCBjcmVhdGVUYXNrRE9NID0gKHRhc2spID0+IHtcclxuICAgIGNvbnN0IHRhc2tJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIHRhc2tJdGVtLmNsYXNzTmFtZSA9IFwidGItcm93XCI7XHJcblxyXG4gICAgY29uc3QgY2JDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNiQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0Yi1yb3ctaXRlbVwiKTtcclxuICAgIGNiQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjYi1jb250YWluZXJcIik7XHJcblxyXG4gICAgY29uc3QgY2IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgY2IudHlwZSA9IFwiY2hlY2tib3hcIjtcclxuICAgIGNiQ29udGFpbmVyLmFwcGVuZENoaWxkKGNiKTtcclxuXHJcbiAgICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGFza05hbWUuY2xhc3NMaXN0LmFkZChcInRiLXJvdy1pdGVtXCIpO1xyXG4gICAgdGFza05hbWUuY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XHJcbiAgICB0YXNrTmFtZS50ZXh0Q29udGVudCA9IHRhc2submFtZTtcclxuXHJcbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoXCJ0Yi1yb3ctaXRlbVwiKTtcclxuICAgIGR1ZURhdGUuY2xhc3NMaXN0LmFkZChcImR1ZS1kYXRlXCIpO1xyXG4gICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IHRhc2suZHVlRGF0ZTtcclxuXHJcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInRiLXJvdy1pdGVtXCIpO1xyXG4gICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5XCIpO1xyXG4gICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSB0YXNrLnByaW9yaXR5O1xyXG5cclxuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJ0Yi1yb3ctaXRlbVwiKTtcclxuICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLWJ0blwiKTtcclxuXHJcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIFxyXG5cclxuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICBpY29uLmNsYXNzTmFtZSA9IFwibWF0ZXJpYWwtaWNvbnNcIjtcclxuICAgIGljb24udGV4dENvbnRlbnQgPSBcImRlbGV0ZVwiO1xyXG4gICAgYnRuLmFwcGVuZENoaWxkKGljb24pO1xyXG4gICAgZGVsZXRlQnRuLmFwcGVuZENoaWxkKGJ0bik7XHJcblxyXG4gICAgdGFza0l0ZW0uYXBwZW5kQ2hpbGQoY2JDb250YWluZXIpO1xyXG4gICAgdGFza0l0ZW0uYXBwZW5kQ2hpbGQodGFza05hbWUpO1xyXG4gICAgdGFza0l0ZW0uYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XHJcbiAgICB0YXNrSXRlbS5hcHBlbmRDaGlsZChwcmlvcml0eSk7XHJcbiAgICB0YXNrSXRlbS5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xyXG5cclxuICAgIHJldHVybiB0YXNrSXRlbTtcclxufVxyXG5cclxuXHJcbmNvbnN0IGNyZWF0ZVByaW9yaXR5U2VsZWN0ID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcclxuXHJcbiAgICBjb25zdCBvcDAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpXHJcbiAgICBvcDAudmFsdWUgPSBQUklPUklUWS5VTkRFRklORUQ7XHJcbiAgICBvcDAuaW5uZXJIVE1MID0gXCItLVwiO1xyXG5cclxuICAgIGNvbnN0IG9wMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIilcclxuICAgIG9wMS52YWx1ZSA9IFBSSU9SSVRZLkxPVztcclxuICAgIG9wMS5pbm5lckhUTUwgPSBcIkxvd1wiO1xyXG5cclxuICAgIGNvbnN0IG9wMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIilcclxuICAgIG9wMi52YWx1ZSA9IFBSSU9SSVRZLk1FRDtcclxuICAgIG9wMi5pbm5lckhUTUwgPSBcIk1lZGl1bVwiO1xyXG5cclxuICAgIGNvbnN0IG9wMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIilcclxuICAgIG9wMy52YWx1ZSA9IFBSSU9SSVRZLkhJR0g7XHJcbiAgICBvcDMuaW5uZXJIVE1MID0gXCJIaWdoXCI7XHJcblxyXG4gICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wMClcclxuICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcDEpO1xyXG4gICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wMik7XHJcbiAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3AzKTtcclxuXHJcbiAgICByZXR1cm4gc2VsZWN0O1xyXG59XHJcblxyXG5cclxuY29uc3QgZGlzcGxheUNvbnRyb2xsZXIgPSAoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgLyogPT09PT09PT09PT09PT09IFNpZGViYXIgVGFiIFN3aXRjaGluZyBmdW5jdGlvbnMgPT09PT09PT09PT09PT09ICovXHJcbiAgICBsZXQgYWN0aXZlSW5kZXggPSAxO1xyXG4gICAgY29uc3Qgc2lkZWJhck5hdkxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdi1saXN0IGEnKTtcclxuICAgIGNvbnN0IG1haW5Db250ZW50UGdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRlbnRcIikuY2hpbGRyZW47XHJcbiAgICBcclxuICAgIGNvbnN0IHJlbW92ZUFjdGl2ZSA9ICgpID0+IHtcclxuICAgICAgICBzaWRlYmFyTmF2TGlua3NbYWN0aXZlSW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgbWFpbkNvbnRlbnRQZ3NbYWN0aXZlSW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbWFrZUFjdGl2ZSA9ICgpID0+IHtcclxuICAgICAgICBzaWRlYmFyTmF2TGlua3NbYWN0aXZlSW5kZXhdLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgbWFpbkNvbnRlbnRQZ3NbYWN0aXZlSW5kZXhdLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2hhbmdlQWN0aXZlVGFiID0gKG5ld0luZGV4KSA9PiB7XHJcbiAgICAgICAgcmVtb3ZlQWN0aXZlKCk7XHJcbiAgICAgICAgYWN0aXZlSW5kZXggPSBuZXdJbmRleDtcclxuICAgICAgICBtYWtlQWN0aXZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyogUmVuZGVyIFRhc2sgQm9hcmQgUGFnZSAqL1xyXG4gICAgY29uc3QgcmVuZGVyVGFza0JvYXJkID0gKGFsbFRhc2tzKSA9PiB7XHJcbiAgICAgICAgdGFza3NUYWJsZS5yZXBsYWNlQ2hpbGRyZW4odGFza3NUYWJsZS5maXJzdEVsZW1lbnRDaGlsZCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxUYXNrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0YXNrc1RhYmxlLmFwcGVuZENoaWxkKGNyZWF0ZVRhc2tET00oYWxsVGFza3NbaV0pKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtjaGFuZ2VBY3RpdmVUYWIsIHJlbmRlclRhc2tCb2FyZH1cclxufSkoKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQge2Rpc3BsYXlDb250cm9sbGVyLCB0YXNrc1RhYmxlLCBjcmVhdGVQcmlvcml0eVNlbGVjdH07IiwiLyoqXHJcbiAqIFNjcmlwdCBkZWRpY2F0ZWQgZm9yIG1hbmFnaW5nIGFsbCB0YXNrc1xyXG4gKi9cclxuXHJcblxyXG5jb25zdCBQUklPUklUWSA9IChmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IFVOREVGSU5FRCA9IC0xO1xyXG4gICAgY29uc3QgTE9XID0gMDtcclxuICAgIGNvbnN0IE1FRCA9IDE7XHJcbiAgICBjb25zdCBISUdIID0gMjtcclxuXHJcbiAgICByZXR1cm4ge1VOREVGSU5FRCwgTE9XLCBNRUQsIEhJR0h9O1xyXG5cclxufSkoKTtcclxuXHJcbmNvbnN0IFNUQVRVUyA9IChmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IE5PVF9TVEFSVEVEID0gXCJOU1wiO1xyXG4gICAgY29uc3QgSU5fUFJPR1JFU1MgPSBcIklTXCI7XHJcbiAgICBjb25zdCBET05FID0gXCJEXCI7XHJcblxyXG4gICAgcmV0dXJuIHtOT1RfU1RBUlRFRCwgSU5fUFJPR1JFU1MsIERPTkV9O1xyXG59KSgpO1xyXG5cclxuXHJcblxyXG5cclxuLyogTWFuYWdlIGFsbCB0YXNrcyAqL1xyXG5jb25zdCB0YXNrTWFuYWdlciA9IChmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IGFsbFRhc2tzID0gW107XHJcblxyXG4gICAgLyogRm9yIHRlc3RpbmcgaWYgd2UncmUgZGVsZXRpbmcvbW9kaWZ5aW5nIGNvcnJlY3QgdGFzayAqL1xyXG4gICAgbGV0IGNvdW50ID0gMDtcclxuXHJcbiAgICAvKiBDcmVhdGUgbmV3IHRhc2sgb2JqZWN0IGFuZCBhZGQgdG8gYWxsVGFza3MgYXJyYXkgKi9cclxuICAgIGNvbnN0IGNyZWF0ZVRhc2sgPSAobmFtZT1cIlwiLCBkdWVEYXRlPWNvdW50LCBwcmlvcml0eT1QUklPUklUWS5VTkRFRklORUQpID0+IHtcclxuICAgICAgICBsZXQgc3RhdHVzID0gU1RBVFVTLk5PVF9TVEFSVEVEO1xyXG4gICAgICAgIGFsbFRhc2tzLnB1c2goe25hbWUsIGR1ZURhdGUsIHByaW9yaXR5LCBzdGF0dXN9KTtcclxuICAgICAgICBcclxuICAgICAgICAvKiBGb3IgdGVzdGluZyAqL1xyXG4gICAgICAgIGNvdW50ICs9IDE7XHJcbiAgICB9XHJcblxyXG4gICAgLyogRGVsZXRlIHRhc2sgb2JqZWN0IGZyb20gYWxsVGFza3MgYXJyYXkgKi9cclxuICAgIGNvbnN0IGRlbGV0ZVRhc2sgPSAodGFza051bSkgPT4ge1xyXG4gICAgICAgIGFsbFRhc2tzLnNwbGljZSh0YXNrTnVtLCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZXROYW1lID0gKHRhc2tOdW0sIG5ld05hbWUpID0+IHtcclxuICAgICAgICBhbGxUYXNrc1t0YXNrTnVtXS5uYW1lID0gbmV3TmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZXREYXRlID0gKHRhc2tOdW0sIG5ld0RhdGUpID0+IHtcclxuICAgICAgICBhbGxUYXNrc1t0YXNrTnVtXS5kdWVEYXRlID0gbmV3RGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBTZXQgcHJpb3JpdHkgb2YgdGFzayBvYmplY3QgKi9cclxuICAgIGNvbnN0IHNldFByaW9yaXR5ID0gKHRhc2tOdW0sIHByaW9yaXR5KSA9PiB7XHJcbiAgICAgICAgYWxsVGFza3NbdGFza051bV0ucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBTZXQgc3RhdHVzIG9mIHRhc2sgb2JqZWN0IC0gKE5vdCBTdGFydGVkLCBJbiBQcm9ncmVzcywgRG9uZSkgKi9cclxuICAgIGNvbnN0IHNldFN0YXR1cyA9ICh0YXNrLCBzdGF0dXMpID0+IHtcclxuICAgICAgICB0YXNrLnN0YXR1cyA9IHN0YXR1cztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge2NyZWF0ZVRhc2ssIGRlbGV0ZVRhc2ssIHNldE5hbWUsIHNldERhdGUsIHNldFByaW9yaXR5LCBzZXRTdGF0dXMsIGFsbFRhc2tzfTtcclxuXHJcbn0pKCk7XHJcblxyXG5cclxuZXhwb3J0IHtQUklPUklUWSwgU1RBVFVTLCB0YXNrTWFuYWdlcn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuLi9zdHlsZS5jc3MnO1xyXG5cclxuaW1wb3J0IHsgY3JlYXRlUHJpb3JpdHlTZWxlY3QsIGRpc3BsYXlDb250cm9sbGVyLCB0YXNrc1RhYmxlIH0gZnJvbSAnLi9kb20uanMnO1xyXG5pbXBvcnQgeyB0YXNrTWFuYWdlciB9IGZyb20gJy4vdGFzay5qcyc7XHJcblxyXG5jb25zdCBzaWRlYmFyTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXYtbGlzdFwiKTtcclxuY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXRhc2sgYnV0dG9uXCIpO1xyXG5cclxuXHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICBkaXNwbGF5Q29udHJvbGxlci5jaGFuZ2VBY3RpdmVUYWIoMSk7XHJcbiAgICB0YXNrTWFuYWdlci5jcmVhdGVUYXNrKFwiQSBkZWZhdWx0IHRhc2tcIiwgXCJkdWUgZGF0ZVwiKTtcclxuICAgIGRpc3BsYXlDb250cm9sbGVyLnJlbmRlclRhc2tCb2FyZCh0YXNrTWFuYWdlci5hbGxUYXNrcyk7XHJcbn1cclxuXHJcbnNpZGViYXJOYXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgIGlmIChlLnRhcmdldC50YWdOYW1lICE9PSAnQScpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBuZXdBY3RpdmVJbmRleCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaW5kZXgnKTtcclxuICAgIGRpc3BsYXlDb250cm9sbGVyLmNoYW5nZUFjdGl2ZVRhYihuZXdBY3RpdmVJbmRleCk7XHJcbn0pO1xyXG5cclxuXHJcbmFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgdGFza01hbmFnZXIuY3JlYXRlVGFzaygpO1xyXG4gICAgZGlzcGxheUNvbnRyb2xsZXIucmVuZGVyVGFza0JvYXJkKHRhc2tNYW5hZ2VyLmFsbFRhc2tzKTtcclxuICAgIFxyXG4gICAgLyogXHJcbiAgICAgKiBDcmVhdGluZyBhIG5ldyB0YXNrIGltbWVkaWF0ZWx5IGZvY3VzIG9uIHRoZSBuZXcgdGFzayBuYW1lJ3MgaW5wdXQgZmllbGQgXHJcbiAgICAgKiBOb3RlOiBjbGlja2luZyBhZGQgYnV0dG9uIGFkZCBhIG5ldyB0YXNrXHJcbiAgICAgKiAgPT4gZ3VhcmFudGVlZCB0byBhbHdheXMgaGF2ZSBhdCBsZWFzdCAxIHRhc2sgaW4gdGFibGUgd2hlbiB0aGlzIGhhcHBlblxyXG4gICAgICogID0+IHdlIHdvbid0IGFjY2lkZW50YWxseSBzZWxlY3QgdGhlIGhlYWRlclxyXG4gICAgKi9cclxuICAgIGNvbnN0IGFsbFRhc2tzRE9NID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrXCIpO1xyXG4gICAgY29uc3QgbGFzdCA9IGFsbFRhc2tzRE9NW2FsbFRhc2tzRE9NLmxlbmd0aC0xXTtcclxuICAgIGhhbmRsZVRhc2tJbnB1dENsaWNrKGxhc3QpO1xyXG59KTtcclxuXHJcblxyXG4vKiBMaXN0ZW4gdG8gYWxsIGNsaWNrIGV2ZW50cyBpbiB0YXNrIHRhYmxlICovXHJcbnRhc2tzVGFibGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBjb25zdCBkb21FbGVtID0gZS50YXJnZXQ7XHJcblxyXG4gICAgLyogQ2FzZSB3aGVuIHRhYmxlIGhlYWRlciB3YXMgY2xpY2tlZCAqL1xyXG4gICAgaWYgKGRvbUVsZW0ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0Yi1oZWFkZXJcIikpIHtcclxuICAgICAgICAvLyBEbyBub3RoaW5nXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIEhhbmRsZSBjYXNlIHdoZW4gIGRlbGV0ZSBidXR0b24gd2FzIHByZXNzZWQgKi9cclxuICAgIGlmIChkb21FbGVtLnRhZ05hbWUgPT09IFwiQlVUVE9OXCIgfHwgZG9tRWxlbS50YWdOYW1lID09PSBcIklcIikge1xyXG4gICAgICAgIGhhbmRsZURlbGV0ZUJ0bkNsaWNrKGRvbUVsZW0pO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZG9tRWxlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJ0YXNrXCIpKSB7XHJcbiAgICAgICAgaGFuZGxlVGFza0lucHV0Q2xpY2soZG9tRWxlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRvbUVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiZHVlLWRhdGVcIikpIHtcclxuICAgICAgICBoYW5kbGVUYXNrSW5wdXRDbGljayhkb21FbGVtLCBcImRhdGVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRvbUVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwicHJpb3JpdHlcIikpIHtcclxuICAgICAgICBoYW5kbGVQcmlvcml0eUlucHV0Q2xpY2soZG9tRWxlbSk7XHJcbiAgICB9XHJcblxyXG59KTtcclxuXHJcblxyXG4vKiBcclxuICogUmV0dXJuIHRoZSBwb3NpdGlvbiBvZiBhIHRhc2sgaW4gdGFza01hbmFnZXIgZ2l2ZW4gaXRzIGRvbSBlbGVtZW50IFxyXG4gKiBvciBvbmUgb2YgaXRzIGNoaWxkIG5vZGVcclxuKi9cclxuZnVuY3Rpb24gZmV0Y2hUYXNrTnVtKGRvbUVsZW0pIHtcclxuICAgIGNvbnN0IGFsbFJvd3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRiLXJvdzpub3QoLnRiLWhlYWRlcilcIilcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbFJvd3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoYWxsUm93c1tpXS5jb250YWlucyhkb21FbGVtKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbi8qIERlbGV0ZSBjb3JyZXNwb25kaW5nIHRhc2sgZnJvbSB0YXNrTWFuYWdlciAmIHVwZGF0ZSBkaXNwbGF5ICovXHJcbmZ1bmN0aW9uIGhhbmRsZURlbGV0ZUJ0bkNsaWNrKGRvbUVsZW0pIHtcclxuICAgIGNvbnN0IHRhc2tOdW0gPSBmZXRjaFRhc2tOdW0oZG9tRWxlbSk7XHJcbiAgICB0YXNrTWFuYWdlci5kZWxldGVUYXNrKHRhc2tOdW0pO1xyXG4gICAgZGlzcGxheUNvbnRyb2xsZXIucmVuZGVyVGFza0JvYXJkKHRhc2tNYW5hZ2VyLmFsbFRhc2tzKTtcclxufVxyXG5cclxuLyogQWxsb3cgdXNlciB0byBlZGl0IHRhc2sgbmFtZSBieSBjbGlja2luZyBvbiB0aGUgZGl2IHdpdGggdGhhdCB0YXNrIG5hbWUgKi9cclxuZnVuY3Rpb24gaGFuZGxlVGFza0lucHV0Q2xpY2soZG9tRWxlbSwgdHlwZT1cInRleHRcIikge1xyXG4gICAgLy8gQ3JlYXRlIG5ldyB0ZXh0IGlucHV0IGZpZWxkXHJcbiAgICBjb25zdCBpbnB1dEZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgaW5wdXRGaWVsZC50eXBlID0gdHlwZTtcclxuICAgIGlucHV0RmllbGQudmFsdWUgPSBkb21FbGVtLnRleHRDb250ZW50O1xyXG4gICAgXHJcbiAgICAvLyBSZXBsYWNlIGRpdiB3aXRoIGlucHV0IGZpZWxkXHJcbiAgICBjb25zdCBwYXJlbnQgPSBkb21FbGVtLnBhcmVudEVsZW1lbnQ7XHJcbiAgICBwYXJlbnQucmVwbGFjZUNoaWxkKGlucHV0RmllbGQsIGRvbUVsZW0pO1xyXG5cclxuICAgIC8vIEltbWVkaWF0ZWx5IGZvY3VzIHRvIGFsbG93IHR5cGluZ1xyXG4gICAgaW5wdXRGaWVsZC5mb2N1cygpO1xyXG5cclxuICAgIC8vIElucHV0IGZpZWxkIGxvc2UgZm9jdXMgd2hlbiBlbnRlciBrZXkgcHJlc3NlZFxyXG4gICAgaW5wdXRGaWVsZC5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgKGUpID0+IHtcclxuICAgICAgICBpZiAoZS5jb2RlID09IFwiRW50ZXJcIikge1xyXG4gICAgICAgICAgICBpbnB1dEZpZWxkLmJsdXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIC8vIFdoZW4gaW5wdXQgZmllbGQgaXMgbm90IGZvY3VzZWQgLT4gc2F2ZSBpdHMgdmFsdWUgYXMgdGhlIG5ldyB0YXNrIG5hbWVcclxuICAgIGlucHV0RmllbGQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgKCkgPT4gXHJcbiAgICAgICAgc2F2ZVRhc2soZG9tRWxlbSwgaW5wdXRGaWVsZCwgcGFyZW50LCB0eXBlKSk7XHJcbn1cclxuXHJcblxyXG4vKiBcclxuICogSGVscGVyIGZ1bmN0aW9uOiBzYXZlIHZhbHVlIGZyb20gaW5wdXQgZmllbGQgdG8gdGFzayBtYW5hZ2VyXHJcbiAqIGFuZCBzd2FwIG91dCBET00gZWxlbWVudCAoYmFjayB0byBiZWluZyBhIGRpdilcclxuKi9cclxuZnVuY3Rpb24gc2F2ZVRhc2soZG9tRWxlbSwgaW5wdXRGaWVsZCwgcGFyZW50LCB0eXBlKSB7XHJcbiAgICAvLyBTd2FwIG91dCBET00gZWxlbWVudFxyXG4gICAgY29uc3QgbmV3VmFsdWUgPSBpbnB1dEZpZWxkLnZhbHVlO1xyXG4gICAgZG9tRWxlbS50ZXh0Q29udGVudCA9IG5ld1ZhbHVlO1xyXG4gICAgcGFyZW50LnJlcGxhY2VDaGlsZChkb21FbGVtLCBpbnB1dEZpZWxkKTtcclxuICAgIFxyXG4gICAgLy8gU2F2ZSBuZXcgdmFsdWUgdG8gdGFza01hbmFnZXJcclxuICAgIGNvbnN0IHRhc2tOdW0gPSBmZXRjaFRhc2tOdW0oZG9tRWxlbSk7XHJcblxyXG4gICAgaWYgKHR5cGUgPT0gXCJ0ZXh0XCIpIHtcclxuICAgICAgICB0YXNrTWFuYWdlci5zZXROYW1lKHRhc2tOdW0sIG5ld1ZhbHVlKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHR5cGUgPT0gXCJkYXRlXCIpIHtcclxuICAgICAgICB0YXNrTWFuYWdlci5zZXREYXRlKHRhc2tOdW0sIG5ld1ZhbHVlKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRhc2tNYW5hZ2VyLnNldFByaW9yaXR5KHRhc2tOdW0sIG5ld1ZhbHVlKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZVByaW9yaXR5SW5wdXRDbGljayhkb21FbGVtKSB7XHJcbiAgICBjb25zdCBpbnB1dEZpZWxkID0gY3JlYXRlUHJpb3JpdHlTZWxlY3QoKTsgICAgXHJcbiAgICAvLyBSZXBsYWNlIGRpdiB3aXRoIGlucHV0IGZpZWxkXHJcbiAgICBjb25zdCBwYXJlbnQgPSBkb21FbGVtLnBhcmVudEVsZW1lbnQ7XHJcbiAgICBwYXJlbnQucmVwbGFjZUNoaWxkKGlucHV0RmllbGQsIGRvbUVsZW0pO1xyXG4gICAgLy9cclxuICAgIGlucHV0RmllbGQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgc2F2ZVRhc2soZG9tRWxlbSwgaW5wdXRGaWVsZCwgcGFyZW50LCBcInByaW9yaXR5XCIpO1xyXG4gICAgfSlcclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==