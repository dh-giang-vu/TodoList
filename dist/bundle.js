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
        localStorage.setItem("allTasks", JSON.stringify(_task__WEBPACK_IMPORTED_MODULE_0__.taskManager.allTasks))
    }

    return {saveData}
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
/* harmony import */ var _persistence_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./persistence.js */ "./src/script/persistence.js");






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
    
    _persistence_js__WEBPACK_IMPORTED_MODULE_3__.storageManager.saveData()

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
    parent.replaceChild(inputField, domElem)

    // Focus to allow select to blur when user click outside
    inputField.focus()
    // blur when new value selected
    inputField.addEventListener("change", () => {
        inputField.blur();
    })
    // save task when select is blurred
    inputField.addEventListener("blur", () => {
        saveTask(domElem, inputField, parent, "priority");
    })
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsU0FBUyxhQUFhLE1BQU0sYUFBYSxhQUFhLFdBQVcsVUFBVSxXQUFXLFVBQVUsZUFBZSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFlBQVksWUFBWSxjQUFjLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxjQUFjLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFFBQVEsS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsV0FBVyxhQUFhLGFBQWEsV0FBVyxZQUFZLFFBQVEsS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxPQUFPLGFBQWEsTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsUUFBUSxLQUFLLFVBQVUsWUFBWSxhQUFhLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGNBQWMsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLGFBQWEsV0FBVyxZQUFZLGNBQWMsY0FBYyxPQUFPLEtBQUssWUFBWSxhQUFhLGNBQWMsYUFBYSxhQUFhLGNBQWMsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxhQUFhLGNBQWMsV0FBVyxVQUFVLGFBQWEsZUFBZSxPQUFPLEtBQUssYUFBYSxPQUFPLEtBQUssWUFBWSxjQUFjLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGNBQWMsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksUUFBUSxLQUFLLFVBQVUsYUFBYSxhQUFhLFNBQVMsYUFBYSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZ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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlEQUFXO0FBQ2YsSUFBSSxzREFBaUIsaUJBQWlCLGlEQUFXO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlEQUFXO0FBQ25CO0FBQ0E7QUFDQSxRQUFRLGlEQUFXO0FBQ25CO0FBQ0E7QUFDQSxRQUFRLGlEQUFXO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsNkRBQW9CO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0L2RvbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0L3BlcnNpc3RlbmNlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHQvdGFzay5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0L2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XHJcbiAgICAtLXNpZGViYXItd2lkdGg6IDMwMHB4O1xyXG4gICAgLS1yb3ctaGVpZ2h0OiA0OHB4O1xyXG4gICAgLS1zdGQtYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLyogRXZlcnl0aGluZyBpbiBTaWRlYmFyICovXHJcblxyXG4uc2lkZWJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIFxyXG4gICAgLyogRml4ZWQgb24gbGVmdCBzaWRlICovXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgXHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogdmFyKC0tc2lkZWJhci13aWR0aCk7XHJcblxyXG5cclxuXHJcbiAgICAtLXNpZGViYXItcGFkZGluZy1sZWZ0OiAzMnB4O1xyXG4gICAgLS1zaWRlYmFyLWZvbnQtc2l6ZTogMTZweDtcclxuICAgIC0tc2lkZWJhci1hY2NlbnRlZC1jb2xvcjogI2ZmZjtcclxuXHJcbiAgICBmb250LXNpemU6IHZhcigtLXNpZGViYXItZm9udC1zaXplKTtcclxuICAgIGNvbG9yOiB2YXIoLS1zaWRlYmFyLWFjY2VudGVkLWNvbG9yKTtcclxufVxyXG5cclxuLnByb2ZpbGUtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBnYXA6IDMycHg7XHJcblxyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgIHBhZGRpbmctbGVmdDogNjRweDtcclxuXHJcbn1cclxuXHJcbi5wZnAtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1hY2NlbnRlZC1jb2xvcik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG5cclxuICAgIC8qIENlbnRyZSBpbWFnZSB1c2luZyBmbGV4Ym94ICovXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ucGZwLWNvbnRhaW5lciBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiA5MCU7XHJcbiAgICBtYXgtaGVpZ2h0OiA5MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG59XHJcblxyXG5cclxuLnNpZGViYXIgdWwge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLm5hdi1saXN0IHtcclxuICAgIG1hcmdpbi10b3A6IDY0cHg7XHJcbn1cclxuXHJcbi5uYXYtbGlzdCBsaSB7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbn1cclxuXHJcbi5uYXYtbGlzdCBhIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIFxyXG4gICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1zaWRlYmFyLXBhZGRpbmctbGVmdCk7XHJcbiAgICBcclxuICAgIC8qIFZlcnRpY2FsbHkgY2VudGVyIHRleHQgKi9cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLm1hbmFnZW1lbnQgdWwge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYm90dG9tOiA2NHB4O1xyXG59XHJcblxyXG4ubWFuYWdlbWVudCB1bCBsaSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLXNpZGViYXItcGFkZGluZy1sZWZ0KTtcclxuICAgIGhlaWdodDogMzJweDtcclxufVxyXG5cclxuLnNpZGViYXIgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogdmFyKC0tc2lkZWJhci1hY2NlbnRlZC1jb2xvcik7XHJcbn1cclxuXHJcbi5uYXYtbGlzdCBhOmhvdmVyLCBcclxuYS5hY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWFjY2VudGVkLWNvbG9yKTtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLyogTWFpbiBjb250ZW50ICovXHJcblxyXG4ubWFpbi1jb250ZW50IHtcclxuICAgIG1hcmdpbi1sZWZ0OiB2YXIoLS1zaWRlYmFyLXdpZHRoKTtcclxufVxyXG5cclxuLm1haW4tY29udGVudCAuYWN0aXZlIHtcclxuICAgIC8qIE9ubHkgc2hvdyBhY3RpdmUgY29udGVudCAqL1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5hbGwtcHJvamVjdHMge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmFsbC10YXNrcyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uZmluaXNoZWQtcHJvamVjdHMge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmZpbmlzaGVkLXRhc2tzIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcblxyXG4udGl0bGUtY29udGFpbmVyIHtcclxuICAgIGZvbnQtc2l6ZTogNjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG5cclxuICAgIG1hcmdpbi1sZWZ0OiAzJTtcclxuXHJcbiAgICAvKiB0aXRsZSB1bmRlcmxpbmUgKi9cclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgYmxhY2s7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xyXG5cclxufVxyXG5cclxuLnByb2plY3RzLWNvbnRhaW5lcixcclxuLnRhc2tzLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDM2cHggY2xhbXAoOHB4LCAxMCUsIDk2cHgpO1xyXG59XHJcblxyXG4ucHJvamVjdCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgXHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiB2YXIoLS1yb3ctaGVpZ2h0KSAxZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XHJcblxyXG4gICAgYm9yZGVyOiB2YXIoLS1zdGQtYm9yZGVyKTtcclxuXHJcbn1cclxuXHJcbi5wcm9qLW5hbWUtY29udGFpbmVyIHtcclxuICAgIC8qIHN0eWxpbmcgZm9yIHRoZSBcInRhYmxlXCIgKi9cclxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMztcclxuICAgIGJvcmRlci1ib3R0b206IHZhcigtLXN0ZC1ib3JkZXIpO1xyXG4gICAgXHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG5cclxuICAgIC8qIHZlcnRpY2FsbHkgY2VudHJlIHByb2plY3QncyBuYW1lICovXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnRhc2stbGlzdCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG5cclxuICAgIGdyaWQtYXJlYTogMiAvIDEgLyAtMSAvIDI7XHJcblxyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtcm93OiAxZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuXHJcbiAgICBib3JkZXItcmlnaHQ6IHZhcigtLXN0ZC1ib3JkZXIpO1xyXG5cclxuXHJcbn1cclxuXHJcbi5wcm9qLW5vdGUge1xyXG4gICAgZ3JpZC1hcmVhOiAyIC8gMiAvIC0xIC8gMztcclxuXHJcbn1cclxuXHJcbi50YXNrLWl0ZW0ge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogdmFyKC0tc3RkLWJvcmRlcik7XHJcbiAgICBoZWlnaHQ6IHZhcigtLXJvdy1oZWlnaHQpO1xyXG5cclxuICAgIC8qIENoZWNrYm94IGFuZCBUYXNrIE5hbWUgaW4gMSByb3cgKi9cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi50YXNrLWxpc3Qgc3BhbiB7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi50YXNrLWl0ZW06bGFzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG59XHJcblxyXG4uY2ItY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XHJcbiAgICBib3JkZXItcmlnaHQ6IHZhcigtLXN0ZC1ib3JkZXIpO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9Y2hlY2tib3hdIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMik7XHJcbn1cclxuXHJcblxyXG4udGFzay1uYW1lIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIHBhZGRpbmctbGVmdDogbWluKDEwcHgsMyUpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEFMTCBUQVNLUyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuLnRhc2tzLWNvbnRhaW5lciB7XHJcbiAgICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xyXG59XHJcblxyXG4jYWRkLXRhc2sge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xyXG59XHJcblxyXG5cclxuLnRhYmxlLFxyXG4udGFibGUgbGkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG5cclxuLnRhYmxlIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHZhcigtLXJvdy1oZWlnaHQpO1xyXG59XHJcblxyXG4udGItcm93IHtcclxuICAgIC8qIGRpdmlkZSBlYWNoIHJvdyBpbnRvIDQgY29sdW1ucyAqL1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwJTtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogdmFyKC0tcm93LWhlaWdodCkgbWlubWF4KDEyOHB4LCAzZnIpIG1pbm1heCgxMjhweCwgMmZyKSBtaW5tYXgoOTZweCwgMWZyKSB2YXIoLS1yb3ctaGVpZ2h0KTtcclxuICAgIFxyXG4gICAgLyogcm93IHN0eWxpbmcgKyBib3JkZXIgKi9cclxuICAgIGhlaWdodDogdmFyKC0tcm93LWhlaWdodCk7XHJcbiAgICBib3JkZXI6IHZhcigtLXN0ZC1ib3JkZXIpO1xyXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcclxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxufVxyXG5cclxuLnRiLWhlYWRlciB7XHJcbiAgICBib3JkZXItdG9wOiB2YXIoLS1zdGQtYm9yZGVyKTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDEuNWVtXHJcbn1cclxuXHJcbi50Yi1yb3ctaXRlbSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlci1yaWdodDogdmFyKC0tc3RkLWJvcmRlcik7XHJcbn1cclxuXHJcbi50YXNrLFxyXG4uZHVlLWRhdGUsXHJcbi5wcmlvcml0eSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxufVxyXG5cclxuLmRlbGV0ZS1idG4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmRlbGV0ZS1idG4gYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZGVsZXRlLWJ0biBidXR0b246aG92ZXIge1xyXG4gICAgY29sb3I6IHJnYigxMTcsIDExNywgMTE3KTtcclxufVxyXG5cclxuXHJcblxyXG4vKiBNZWRpYSBRdWVyaWVzIHRvIGhpZGUgc2lkZWJhciB3aGVuIHBhZ2UgaXMgc21hbGwgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo4MDBweCkge1xyXG4gICAgLnNpZGViYXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLm1haW4tY29udGVudCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICB9XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxz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QW9CO0FBQ3hCOzs7QUFHQTs7SUFFSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsYUFBYTtJQUNiLHdCQUF3QjtJQUN4QixrSEFBa0g7O0lBRWxILHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsZ0JBQWdCO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLCtCQUErQjtBQUNuQzs7QUFFQTs7O0lBR0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7Ozs7QUFJQSxxREFBcUQ7QUFDckQ7SUFDSTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgICAtLXNpZGViYXItd2lkdGg6IDMwMHB4O1xcclxcbiAgICAtLXJvdy1oZWlnaHQ6IDQ4cHg7XFxyXFxuICAgIC0tc3RkLWJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiBFdmVyeXRoaW5nIGluIFNpZGViYXIgKi9cXHJcXG5cXHJcXG4uc2lkZWJhciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICBcXHJcXG4gICAgLyogRml4ZWQgb24gbGVmdCBzaWRlICovXFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICBcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogdmFyKC0tc2lkZWJhci13aWR0aCk7XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuICAgIC0tc2lkZWJhci1wYWRkaW5nLWxlZnQ6IDMycHg7XFxyXFxuICAgIC0tc2lkZWJhci1mb250LXNpemU6IDE2cHg7XFxyXFxuICAgIC0tc2lkZWJhci1hY2NlbnRlZC1jb2xvcjogI2ZmZjtcXHJcXG5cXHJcXG4gICAgZm9udC1zaXplOiB2YXIoLS1zaWRlYmFyLWZvbnQtc2l6ZSk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1zaWRlYmFyLWFjY2VudGVkLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2ZpbGUtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMzJweDtcXHJcXG5cXHJcXG4gICAgbWFyZ2luLXRvcDogMTZweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA2NHB4O1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4ucGZwLWNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiA1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItYWNjZW50ZWQtY29sb3IpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcclxcblxcclxcbiAgICAvKiBDZW50cmUgaW1hZ2UgdXNpbmcgZmxleGJveCAqL1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBmcC1jb250YWluZXIgaW1nIHtcXHJcXG4gICAgbWF4LXdpZHRoOiA5MCU7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDkwJTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnNpZGViYXIgdWwge1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGlzdCB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDY0cHg7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGlzdCBsaSB7XFxyXFxuICAgIGhlaWdodDogNDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saXN0IGEge1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgXFxyXFxuICAgIHBhZGRpbmctbGVmdDogdmFyKC0tc2lkZWJhci1wYWRkaW5nLWxlZnQpO1xcclxcbiAgICBcXHJcXG4gICAgLyogVmVydGljYWxseSBjZW50ZXIgdGV4dCAqL1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ubWFuYWdlbWVudCB1bCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBib3R0b206IDY0cHg7XFxyXFxufVxcclxcblxcclxcbi5tYW5hZ2VtZW50IHVsIGxpIHtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1zaWRlYmFyLXBhZGRpbmctbGVmdCk7XFxyXFxuICAgIGhlaWdodDogMzJweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXIgYSB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXNpZGViYXItYWNjZW50ZWQtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpc3QgYTpob3ZlciwgXFxyXFxuYS5hY3RpdmV7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItYWNjZW50ZWQtY29sb3IpO1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi8qIE1haW4gY29udGVudCAqL1xcclxcblxcclxcbi5tYWluLWNvbnRlbnQge1xcclxcbiAgICBtYXJnaW4tbGVmdDogdmFyKC0tc2lkZWJhci13aWR0aCk7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWNvbnRlbnQgLmFjdGl2ZSB7XFxyXFxuICAgIC8qIE9ubHkgc2hvdyBhY3RpdmUgY29udGVudCAqL1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLmFsbC1wcm9qZWN0cyB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5hbGwtdGFza3Mge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZmluaXNoZWQtcHJvamVjdHMge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZmluaXNoZWQtdGFza3Mge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4udGl0bGUtY29udGFpbmVyIHtcXHJcXG4gICAgZm9udC1zaXplOiA2NHB4O1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xcclxcbiAgICBoZWlnaHQ6IDgwcHg7XFxyXFxuXFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAzJTtcXHJcXG5cXHJcXG4gICAgLyogdGl0bGUgdW5kZXJsaW5lICovXFxyXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHMtY29udGFpbmVyLFxcclxcbi50YXNrcy1jb250YWluZXIge1xcclxcbiAgICBtYXJnaW46IDM2cHggY2xhbXAoOHB4LCAxMCUsIDk2cHgpO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdCB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDE2cHg7XFxyXFxuICAgIFxcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHZhcigtLXJvdy1oZWlnaHQpIDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xcclxcblxcclxcbiAgICBib3JkZXI6IHZhcigtLXN0ZC1ib3JkZXIpO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4ucHJvai1uYW1lLWNvbnRhaW5lciB7XFxyXFxuICAgIC8qIHN0eWxpbmcgZm9yIHRoZSBcXFwidGFibGVcXFwiICovXFxyXFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMztcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogdmFyKC0tc3RkLWJvcmRlcik7XFxyXFxuICAgIFxcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBmb250LXNpemU6IDEuNWVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcXHJcXG5cXHJcXG4gICAgLyogdmVydGljYWxseSBjZW50cmUgcHJvamVjdCdzIG5hbWUgKi9cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stbGlzdCB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcblxcclxcbiAgICBncmlkLWFyZWE6IDIgLyAxIC8gLTEgLyAyO1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXJvdzogMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG5cXHJcXG4gICAgYm9yZGVyLXJpZ2h0OiB2YXIoLS1zdGQtYm9yZGVyKTtcXHJcXG5cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLnByb2otbm90ZSB7XFxyXFxuICAgIGdyaWQtYXJlYTogMiAvIDIgLyAtMSAvIDM7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi50YXNrLWl0ZW0ge1xcclxcbiAgICBib3JkZXItYm90dG9tOiB2YXIoLS1zdGQtYm9yZGVyKTtcXHJcXG4gICAgaGVpZ2h0OiB2YXIoLS1yb3ctaGVpZ2h0KTtcXHJcXG5cXHJcXG4gICAgLyogQ2hlY2tib3ggYW5kIFRhc2sgTmFtZSBpbiAxIHJvdyAqL1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1saXN0IHNwYW4ge1xcclxcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWl0ZW06bGFzdC1jaGlsZCB7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jYi1jb250YWluZXIge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxyXFxuICAgIGJvcmRlci1yaWdodDogdmFyKC0tc3RkLWJvcmRlcik7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPWNoZWNrYm94XSB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMik7XFxyXFxufVxcclxcblxcclxcblxcclxcbi50YXNrLW5hbWUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICBwYWRkaW5nLWxlZnQ6IG1pbigxMHB4LDMlKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gQUxMIFRBU0tTIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxyXFxuXFxyXFxuLnRhc2tzLWNvbnRhaW5lciB7XFxyXFxuICAgIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxufVxcclxcblxcclxcbiNhZGQtdGFzayB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDZweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxyXFxufVxcclxcblxcclxcblxcclxcbi50YWJsZSxcXHJcXG4udGFibGUgbGkge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYmxlIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiB2YXIoLS1yb3ctaGVpZ2h0KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRiLXJvdyB7XFxyXFxuICAgIC8qIGRpdmlkZSBlYWNoIHJvdyBpbnRvIDQgY29sdW1ucyAqL1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMCU7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogdmFyKC0tcm93LWhlaWdodCkgbWlubWF4KDEyOHB4LCAzZnIpIG1pbm1heCgxMjhweCwgMmZyKSBtaW5tYXgoOTZweCwgMWZyKSB2YXIoLS1yb3ctaGVpZ2h0KTtcXHJcXG4gICAgXFxyXFxuICAgIC8qIHJvdyBzdHlsaW5nICsgYm9yZGVyICovXFxyXFxuICAgIGhlaWdodDogdmFyKC0tcm93LWhlaWdodCk7XFxyXFxuICAgIGJvcmRlcjogdmFyKC0tc3RkLWJvcmRlcik7XFxyXFxuICAgIGJvcmRlci10b3A6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRiLWhlYWRlciB7XFxyXFxuICAgIGJvcmRlci10b3A6IHZhcigtLXN0ZC1ib3JkZXIpO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBmb250LXNpemU6IDEuNWVtXFxyXFxufVxcclxcblxcclxcbi50Yi1yb3ctaXRlbSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlci1yaWdodDogdmFyKC0tc3RkLWJvcmRlcik7XFxyXFxufVxcclxcblxcclxcbi50YXNrLFxcclxcbi5kdWUtZGF0ZSxcXHJcXG4ucHJpb3JpdHkge1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZS1idG4ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZS1idG4gYnV0dG9uIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5kZWxldGUtYnRuIGJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiByZ2IoMTE3LCAxMTcsIDExNyk7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qIE1lZGlhIFF1ZXJpZXMgdG8gaGlkZSBzaWRlYmFyIHdoZW4gcGFnZSBpcyBzbWFsbCAqL1xcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ODAwcHgpIHtcXHJcXG4gICAgLnNpZGViYXIge1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubWFpbi1jb250ZW50IHtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKipcclxuICogU2NyaXB0IGRlZGljYXRlZCB0byBmdW5jdGlvbnMgZm9yIGNyZWF0aW5nL21hbmlwdWxhdGluZyBET00gZWxlbWVudHNcclxuICovXHJcblxyXG5pbXBvcnQgeyBQUklPUklUWSB9IGZyb20gXCIuL3Rhc2tcIjtcclxuXHJcblxyXG5jb25zdCB0YXNrc1RhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YWJsZVwiKTtcclxuXHJcbi8qXHJcbmZ1bmN0aW9uIGdldFByaW9yaXR5U3RyaW5nKHZhbHVlKSB7XHJcbiAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICBzd2l0Y2godmFsdWUpIHtcclxuICAgICAgICBjYXNlIFBSSU9SSVRZLlVOREVGSU5FRDpcclxuICAgICAgICAgICAgcmV0dXJuIFwiLS1cIjtcclxuICAgICAgICBjYXNlIFBSSU9SSVRZLkxPVzpcclxuICAgICAgICAgICAgcmV0dXJuIFwiTG93XCI7XHJcbiAgICAgICAgY2FzZSBQUklPUklUWS5NRUQ6XHJcbiAgICAgICAgICAgIHJldHVybiBcIk1lZGl1bVwiO1xyXG4gICAgICAgIGNhc2UgUFJJT1JJVFkuSElHSDpcclxuICAgICAgICAgICAgcmV0dXJuIFwiSGlnaFwiO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRVJST1I6IGdldFByaW9yaXR5U3RyaW5nXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG5cclxufVxyXG4qL1xyXG5cclxuY29uc3QgY3JlYXRlVGFza0RPTSA9ICh0YXNrKSA9PiB7XHJcbiAgICBjb25zdCB0YXNrSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICB0YXNrSXRlbS5jbGFzc05hbWUgPSBcInRiLXJvd1wiO1xyXG5cclxuICAgIGNvbnN0IGNiQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjYkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGItcm93LWl0ZW1cIik7XHJcbiAgICBjYkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY2ItY29udGFpbmVyXCIpO1xyXG5cclxuICAgIGNvbnN0IGNiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGNiLnR5cGUgPSBcImNoZWNrYm94XCI7XHJcbiAgICBjYkNvbnRhaW5lci5hcHBlbmRDaGlsZChjYik7XHJcblxyXG4gICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRhc2tOYW1lLmNsYXNzTGlzdC5hZGQoXCJ0Yi1yb3ctaXRlbVwiKTtcclxuICAgIHRhc2tOYW1lLmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xyXG4gICAgdGFza05hbWUudGV4dENvbnRlbnQgPSB0YXNrLm5hbWU7XHJcblxyXG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKFwidGItcm93LWl0ZW1cIik7XHJcbiAgICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoXCJkdWUtZGF0ZVwiKTtcclxuICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSB0YXNrLmR1ZURhdGU7XHJcblxyXG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJ0Yi1yb3ctaXRlbVwiKTtcclxuICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eVwiKTtcclxuICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gdGFzay5wcmlvcml0eTtcclxuXHJcbiAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKFwidGItcm93LWl0ZW1cIik7XHJcbiAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1idG5cIik7XHJcblxyXG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gICAgaWNvbi5jbGFzc05hbWUgPSBcIm1hdGVyaWFsLWljb25zXCI7XHJcbiAgICBpY29uLnRleHRDb250ZW50ID0gXCJkZWxldGVcIjtcclxuICAgIGJ0bi5hcHBlbmRDaGlsZChpY29uKTtcclxuICAgIGRlbGV0ZUJ0bi5hcHBlbmRDaGlsZChidG4pO1xyXG5cclxuICAgIHRhc2tJdGVtLmFwcGVuZENoaWxkKGNiQ29udGFpbmVyKTtcclxuICAgIHRhc2tJdGVtLmFwcGVuZENoaWxkKHRhc2tOYW1lKTtcclxuICAgIHRhc2tJdGVtLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xyXG4gICAgdGFza0l0ZW0uYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xyXG4gICAgdGFza0l0ZW0uYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcclxuXHJcbiAgICByZXR1cm4gdGFza0l0ZW07XHJcbn1cclxuXHJcblxyXG5jb25zdCBjcmVhdGVQcmlvcml0eVNlbGVjdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XHJcblxyXG4gICAgY29uc3Qgb3AwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKVxyXG4gICAgb3AwLnZhbHVlID0gUFJJT1JJVFkuVU5ERUZJTkVEO1xyXG4gICAgb3AwLmlubmVySFRNTCA9IFwiLS1cIjtcclxuXHJcbiAgICBjb25zdCBvcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpXHJcbiAgICBvcDEudmFsdWUgPSBQUklPUklUWS5MT1c7XHJcbiAgICBvcDEuaW5uZXJIVE1MID0gXCJMb3dcIjtcclxuXHJcbiAgICBjb25zdCBvcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpXHJcbiAgICBvcDIudmFsdWUgPSBQUklPUklUWS5NRUQ7XHJcbiAgICBvcDIuaW5uZXJIVE1MID0gXCJNZWRpdW1cIjtcclxuXHJcbiAgICBjb25zdCBvcDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpXHJcbiAgICBvcDMudmFsdWUgPSBQUklPUklUWS5ISUdIO1xyXG4gICAgb3AzLmlubmVySFRNTCA9IFwiSGlnaFwiO1xyXG5cclxuICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcDApXHJcbiAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3AxKTtcclxuICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcDIpO1xyXG4gICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wMyk7XHJcblxyXG4gICAgcmV0dXJuIHNlbGVjdDtcclxufVxyXG5cclxuXHJcbmNvbnN0IGRpc3BsYXlDb250cm9sbGVyID0gKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIC8qID09PT09PT09PT09PT09PSBTaWRlYmFyIFRhYiBTd2l0Y2hpbmcgZnVuY3Rpb25zID09PT09PT09PT09PT09PSAqL1xyXG4gICAgbGV0IGFjdGl2ZUluZGV4ID0gMTtcclxuICAgIGNvbnN0IHNpZGViYXJOYXZMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYtbGlzdCBhJyk7XHJcbiAgICBjb25zdCBtYWluQ29udGVudFBncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250ZW50XCIpLmNoaWxkcmVuO1xyXG4gICAgXHJcbiAgICBjb25zdCByZW1vdmVBY3RpdmUgPSAoKSA9PiB7XHJcbiAgICAgICAgc2lkZWJhck5hdkxpbmtzW2FjdGl2ZUluZGV4XS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIG1haW5Db250ZW50UGdzW2FjdGl2ZUluZGV4XS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1ha2VBY3RpdmUgPSAoKSA9PiB7XHJcbiAgICAgICAgc2lkZWJhck5hdkxpbmtzW2FjdGl2ZUluZGV4XS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIG1haW5Db250ZW50UGdzW2FjdGl2ZUluZGV4XS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoYW5nZUFjdGl2ZVRhYiA9IChuZXdJbmRleCkgPT4ge1xyXG4gICAgICAgIHJlbW92ZUFjdGl2ZSgpO1xyXG4gICAgICAgIGFjdGl2ZUluZGV4ID0gbmV3SW5kZXg7XHJcbiAgICAgICAgbWFrZUFjdGl2ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIFJlbmRlciBUYXNrIEJvYXJkIFBhZ2UgKi9cclxuICAgIGNvbnN0IHJlbmRlclRhc2tCb2FyZCA9IChhbGxUYXNrcykgPT4ge1xyXG4gICAgICAgIHRhc2tzVGFibGUucmVwbGFjZUNoaWxkcmVuKHRhc2tzVGFibGUuZmlyc3RFbGVtZW50Q2hpbGQpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsVGFza3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGFza3NUYWJsZS5hcHBlbmRDaGlsZChjcmVhdGVUYXNrRE9NKGFsbFRhc2tzW2ldKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7Y2hhbmdlQWN0aXZlVGFiLCByZW5kZXJUYXNrQm9hcmR9XHJcbn0pKCk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IHtkaXNwbGF5Q29udHJvbGxlciwgdGFza3NUYWJsZSwgY3JlYXRlUHJpb3JpdHlTZWxlY3R9OyIsImltcG9ydCB7IHRhc2tNYW5hZ2VyIH0gZnJvbSBcIi4vdGFza1wiO1xyXG5cclxuY29uc3Qgc3RvcmFnZU1hbmFnZXIgPSAoZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zdCBzYXZlRGF0YSA9ICgpID0+IHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBsb2NhbFN0b3JhZ2UgY2FuJ3QgdHJhbnNsYXRlIHRoaXMgaW50byBKU09OIGltbWVkaWF0ZWx5XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhbGxUYXNrc1wiLCBKU09OLnN0cmluZ2lmeSh0YXNrTWFuYWdlci5hbGxUYXNrcykpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtzYXZlRGF0YX1cclxufSkoKTtcclxuXHJcbmV4cG9ydCB7c3RvcmFnZU1hbmFnZXJ9IiwiLyoqXHJcbiAqIFNjcmlwdCBkZWRpY2F0ZWQgZm9yIG1hbmFnaW5nIGFsbCB0YXNrc1xyXG4gKi9cclxuXHJcblxyXG5jb25zdCBQUklPUklUWSA9IChmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IFVOREVGSU5FRCA9IC0xO1xyXG4gICAgY29uc3QgTE9XID0gMDtcclxuICAgIGNvbnN0IE1FRCA9IDE7XHJcbiAgICBjb25zdCBISUdIID0gMjtcclxuXHJcbiAgICByZXR1cm4ge1VOREVGSU5FRCwgTE9XLCBNRUQsIEhJR0h9O1xyXG5cclxufSkoKTtcclxuXHJcbmNvbnN0IFNUQVRVUyA9IChmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IE5PVF9TVEFSVEVEID0gXCJOU1wiO1xyXG4gICAgY29uc3QgSU5fUFJPR1JFU1MgPSBcIklTXCI7XHJcbiAgICBjb25zdCBET05FID0gXCJEXCI7XHJcblxyXG4gICAgcmV0dXJuIHtOT1RfU1RBUlRFRCwgSU5fUFJPR1JFU1MsIERPTkV9O1xyXG59KSgpO1xyXG5cclxuXHJcblxyXG5cclxuLyogTWFuYWdlIGFsbCB0YXNrcyAqL1xyXG5jb25zdCB0YXNrTWFuYWdlciA9IChmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IGFsbFRhc2tzID0gW107XHJcblxyXG4gICAgLyogRm9yIHRlc3RpbmcgaWYgd2UncmUgZGVsZXRpbmcvbW9kaWZ5aW5nIGNvcnJlY3QgdGFzayAqL1xyXG4gICAgbGV0IGNvdW50ID0gMDtcclxuXHJcbiAgICAvKiBDcmVhdGUgbmV3IHRhc2sgb2JqZWN0IGFuZCBhZGQgdG8gYWxsVGFza3MgYXJyYXkgKi9cclxuICAgIGNvbnN0IGNyZWF0ZVRhc2sgPSAobmFtZT1cIlwiLCBkdWVEYXRlPWNvdW50LCBwcmlvcml0eT1QUklPUklUWS5VTkRFRklORUQpID0+IHtcclxuICAgICAgICBsZXQgc3RhdHVzID0gU1RBVFVTLk5PVF9TVEFSVEVEO1xyXG4gICAgICAgIGFsbFRhc2tzLnB1c2goe25hbWUsIGR1ZURhdGUsIHByaW9yaXR5LCBzdGF0dXN9KTtcclxuICAgICAgICBcclxuICAgICAgICAvKiBGb3IgdGVzdGluZyAqL1xyXG4gICAgICAgIGNvdW50ICs9IDE7XHJcbiAgICB9XHJcblxyXG4gICAgLyogRGVsZXRlIHRhc2sgb2JqZWN0IGZyb20gYWxsVGFza3MgYXJyYXkgKi9cclxuICAgIGNvbnN0IGRlbGV0ZVRhc2sgPSAodGFza051bSkgPT4ge1xyXG4gICAgICAgIGFsbFRhc2tzLnNwbGljZSh0YXNrTnVtLCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZXROYW1lID0gKHRhc2tOdW0sIG5ld05hbWUpID0+IHtcclxuICAgICAgICBhbGxUYXNrc1t0YXNrTnVtXS5uYW1lID0gbmV3TmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZXREYXRlID0gKHRhc2tOdW0sIG5ld0RhdGUpID0+IHtcclxuICAgICAgICBhbGxUYXNrc1t0YXNrTnVtXS5kdWVEYXRlID0gbmV3RGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBTZXQgcHJpb3JpdHkgb2YgdGFzayBvYmplY3QgKi9cclxuICAgIGNvbnN0IHNldFByaW9yaXR5ID0gKHRhc2tOdW0sIHByaW9yaXR5KSA9PiB7XHJcbiAgICAgICAgYWxsVGFza3NbdGFza051bV0ucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBTZXQgc3RhdHVzIG9mIHRhc2sgb2JqZWN0IC0gKE5vdCBTdGFydGVkLCBJbiBQcm9ncmVzcywgRG9uZSkgKi9cclxuICAgIGNvbnN0IHNldFN0YXR1cyA9ICh0YXNrLCBzdGF0dXMpID0+IHtcclxuICAgICAgICB0YXNrLnN0YXR1cyA9IHN0YXR1cztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge2NyZWF0ZVRhc2ssIGRlbGV0ZVRhc2ssIHNldE5hbWUsIHNldERhdGUsIHNldFByaW9yaXR5LCBzZXRTdGF0dXMsIGFsbFRhc2tzfTtcclxuXHJcbn0pKCk7XHJcblxyXG5cclxuZXhwb3J0IHtQUklPUklUWSwgU1RBVFVTLCB0YXNrTWFuYWdlcn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuLi9zdHlsZS5jc3MnO1xyXG5cclxuaW1wb3J0IHsgY3JlYXRlUHJpb3JpdHlTZWxlY3QsIGRpc3BsYXlDb250cm9sbGVyLCB0YXNrc1RhYmxlIH0gZnJvbSAnLi9kb20uanMnO1xyXG5pbXBvcnQgeyB0YXNrTWFuYWdlciB9IGZyb20gJy4vdGFzay5qcyc7XHJcbmltcG9ydCB7IHN0b3JhZ2VNYW5hZ2VyIH0gZnJvbSAnLi9wZXJzaXN0ZW5jZS5qcyc7XHJcblxyXG5jb25zdCBzaWRlYmFyTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXYtbGlzdFwiKTtcclxuY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXRhc2sgYnV0dG9uXCIpO1xyXG5cclxuXHJcblxyXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xyXG4gICAgZGlzcGxheUNvbnRyb2xsZXIuY2hhbmdlQWN0aXZlVGFiKDEpO1xyXG4gICAgdGFza01hbmFnZXIuY3JlYXRlVGFzayhcIkEgZGVmYXVsdCB0YXNrXCIsIFwiZHVlIGRhdGVcIik7XHJcbiAgICBkaXNwbGF5Q29udHJvbGxlci5yZW5kZXJUYXNrQm9hcmQodGFza01hbmFnZXIuYWxsVGFza3MpO1xyXG59XHJcblxyXG5zaWRlYmFyTmF2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XHJcbiAgICBpZiAoZS50YXJnZXQudGFnTmFtZSAhPT0gJ0EnKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbmV3QWN0aXZlSW5kZXggPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2luZGV4Jyk7XHJcbiAgICBkaXNwbGF5Q29udHJvbGxlci5jaGFuZ2VBY3RpdmVUYWIobmV3QWN0aXZlSW5kZXgpO1xyXG59KTtcclxuXHJcblxyXG5hZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgIHRhc2tNYW5hZ2VyLmNyZWF0ZVRhc2soKTtcclxuICAgIGRpc3BsYXlDb250cm9sbGVyLnJlbmRlclRhc2tCb2FyZCh0YXNrTWFuYWdlci5hbGxUYXNrcyk7XHJcbiAgICBcclxuICAgIHN0b3JhZ2VNYW5hZ2VyLnNhdmVEYXRhKClcclxuXHJcbiAgICAvKiBcclxuICAgICAqIENyZWF0aW5nIGEgbmV3IHRhc2sgaW1tZWRpYXRlbHkgZm9jdXMgb24gdGhlIG5ldyB0YXNrIG5hbWUncyBpbnB1dCBmaWVsZCBcclxuICAgICAqIE5vdGU6IGNsaWNraW5nIGFkZCBidXR0b24gYWRkIGEgbmV3IHRhc2tcclxuICAgICAqICA9PiBndWFyYW50ZWVkIHRvIGFsd2F5cyBoYXZlIGF0IGxlYXN0IDEgdGFzayBpbiB0YWJsZSB3aGVuIHRoaXMgaGFwcGVuXHJcbiAgICAgKiAgPT4gd2Ugd29uJ3QgYWNjaWRlbnRhbGx5IHNlbGVjdCB0aGUgaGVhZGVyXHJcbiAgICAqL1xyXG4gICAgY29uc3QgYWxsVGFza3NET00gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2tcIik7XHJcbiAgICBjb25zdCBsYXN0ID0gYWxsVGFza3NET01bYWxsVGFza3NET00ubGVuZ3RoLTFdO1xyXG4gICAgaGFuZGxlVGFza0lucHV0Q2xpY2sobGFzdCk7XHJcbn0pO1xyXG5cclxuXHJcbi8qIExpc3RlbiB0byBhbGwgY2xpY2sgZXZlbnRzIGluIHRhc2sgdGFibGUgKi9cclxudGFza3NUYWJsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIGNvbnN0IGRvbUVsZW0gPSBlLnRhcmdldDtcclxuXHJcbiAgICAvKiBDYXNlIHdoZW4gdGFibGUgaGVhZGVyIHdhcyBjbGlja2VkICovXHJcbiAgICBpZiAoZG9tRWxlbS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcInRiLWhlYWRlclwiKSkge1xyXG4gICAgICAgIC8vIERvIG5vdGhpbmdcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLyogSGFuZGxlIGNhc2Ugd2hlbiAgZGVsZXRlIGJ1dHRvbiB3YXMgcHJlc3NlZCAqL1xyXG4gICAgaWYgKGRvbUVsZW0udGFnTmFtZSA9PT0gXCJCVVRUT05cIiB8fCBkb21FbGVtLnRhZ05hbWUgPT09IFwiSVwiKSB7XHJcbiAgICAgICAgaGFuZGxlRGVsZXRlQnRuQ2xpY2soZG9tRWxlbSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkb21FbGVtLmNsYXNzTGlzdC5jb250YWlucyhcInRhc2tcIikpIHtcclxuICAgICAgICBoYW5kbGVUYXNrSW5wdXRDbGljayhkb21FbGVtKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZG9tRWxlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJkdWUtZGF0ZVwiKSkge1xyXG4gICAgICAgIGhhbmRsZVRhc2tJbnB1dENsaWNrKGRvbUVsZW0sIFwiZGF0ZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZG9tRWxlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJwcmlvcml0eVwiKSkge1xyXG4gICAgICAgIGhhbmRsZVByaW9yaXR5SW5wdXRDbGljayhkb21FbGVtKTtcclxuICAgIH1cclxuXHJcbn0pO1xyXG5cclxuXHJcbi8qIFxyXG4gKiBSZXR1cm4gdGhlIHBvc2l0aW9uIG9mIGEgdGFzayBpbiB0YXNrTWFuYWdlciBnaXZlbiBpdHMgZG9tIGVsZW1lbnQgXHJcbiAqIG9yIG9uZSBvZiBpdHMgY2hpbGQgbm9kZVxyXG4qL1xyXG5mdW5jdGlvbiBmZXRjaFRhc2tOdW0oZG9tRWxlbSkge1xyXG4gICAgY29uc3QgYWxsUm93cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGItcm93Om5vdCgudGItaGVhZGVyKVwiKVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsUm93cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChhbGxSb3dzW2ldLmNvbnRhaW5zKGRvbUVsZW0pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuLyogRGVsZXRlIGNvcnJlc3BvbmRpbmcgdGFzayBmcm9tIHRhc2tNYW5hZ2VyICYgdXBkYXRlIGRpc3BsYXkgKi9cclxuZnVuY3Rpb24gaGFuZGxlRGVsZXRlQnRuQ2xpY2soZG9tRWxlbSkge1xyXG4gICAgY29uc3QgdGFza051bSA9IGZldGNoVGFza051bShkb21FbGVtKTtcclxuICAgIHRhc2tNYW5hZ2VyLmRlbGV0ZVRhc2sodGFza051bSk7XHJcbiAgICBkaXNwbGF5Q29udHJvbGxlci5yZW5kZXJUYXNrQm9hcmQodGFza01hbmFnZXIuYWxsVGFza3MpO1xyXG59XHJcblxyXG4vKiBBbGxvdyB1c2VyIHRvIGVkaXQgdGFzayBuYW1lIGJ5IGNsaWNraW5nIG9uIHRoZSBkaXYgd2l0aCB0aGF0IHRhc2sgbmFtZSAqL1xyXG5mdW5jdGlvbiBoYW5kbGVUYXNrSW5wdXRDbGljayhkb21FbGVtLCB0eXBlPVwidGV4dFwiKSB7XHJcbiAgICAvLyBDcmVhdGUgbmV3IHRleHQgaW5wdXQgZmllbGRcclxuICAgIGNvbnN0IGlucHV0RmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBpbnB1dEZpZWxkLnR5cGUgPSB0eXBlO1xyXG4gICAgaW5wdXRGaWVsZC52YWx1ZSA9IGRvbUVsZW0udGV4dENvbnRlbnQ7XHJcbiAgICBcclxuICAgIC8vIFJlcGxhY2UgZGl2IHdpdGggaW5wdXQgZmllbGRcclxuICAgIGNvbnN0IHBhcmVudCA9IGRvbUVsZW0ucGFyZW50RWxlbWVudDtcclxuICAgIHBhcmVudC5yZXBsYWNlQ2hpbGQoaW5wdXRGaWVsZCwgZG9tRWxlbSk7XHJcblxyXG4gICAgLy8gSW1tZWRpYXRlbHkgZm9jdXMgdG8gYWxsb3cgdHlwaW5nXHJcbiAgICBpbnB1dEZpZWxkLmZvY3VzKCk7XHJcblxyXG4gICAgLy8gSW5wdXQgZmllbGQgbG9zZSBmb2N1cyB3aGVuIGVudGVyIGtleSBwcmVzc2VkXHJcbiAgICBpbnB1dEZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLmNvZGUgPT0gXCJFbnRlclwiKSB7XHJcbiAgICAgICAgICAgIGlucHV0RmllbGQuYmx1cigpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgLy8gV2hlbiBpbnB1dCBmaWVsZCBpcyBub3QgZm9jdXNlZCAtPiBzYXZlIGl0cyB2YWx1ZSBhcyB0aGUgbmV3IHRhc2sgbmFtZVxyXG4gICAgaW5wdXRGaWVsZC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCAoKSA9PiBcclxuICAgICAgICBzYXZlVGFzayhkb21FbGVtLCBpbnB1dEZpZWxkLCBwYXJlbnQsIHR5cGUpKTtcclxufVxyXG5cclxuXHJcbi8qIFxyXG4gKiBIZWxwZXIgZnVuY3Rpb246IHNhdmUgdmFsdWUgZnJvbSBpbnB1dCBmaWVsZCB0byB0YXNrIG1hbmFnZXJcclxuICogYW5kIHN3YXAgb3V0IERPTSBlbGVtZW50IChiYWNrIHRvIGJlaW5nIGEgZGl2KVxyXG4qL1xyXG5mdW5jdGlvbiBzYXZlVGFzayhkb21FbGVtLCBpbnB1dEZpZWxkLCBwYXJlbnQsIHR5cGUpIHtcclxuICAgIC8vIFN3YXAgb3V0IERPTSBlbGVtZW50XHJcbiAgICBjb25zdCBuZXdWYWx1ZSA9IGlucHV0RmllbGQudmFsdWU7XHJcbiAgICBkb21FbGVtLnRleHRDb250ZW50ID0gbmV3VmFsdWU7XHJcbiAgICBwYXJlbnQucmVwbGFjZUNoaWxkKGRvbUVsZW0sIGlucHV0RmllbGQpO1xyXG4gICAgXHJcbiAgICAvLyBTYXZlIG5ldyB2YWx1ZSB0byB0YXNrTWFuYWdlclxyXG4gICAgY29uc3QgdGFza051bSA9IGZldGNoVGFza051bShkb21FbGVtKTtcclxuXHJcbiAgICBpZiAodHlwZSA9PSBcInRleHRcIikge1xyXG4gICAgICAgIHRhc2tNYW5hZ2VyLnNldE5hbWUodGFza051bSwgbmV3VmFsdWUpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodHlwZSA9PSBcImRhdGVcIikge1xyXG4gICAgICAgIHRhc2tNYW5hZ2VyLnNldERhdGUodGFza051bSwgbmV3VmFsdWUpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdGFza01hbmFnZXIuc2V0UHJpb3JpdHkodGFza051bSwgbmV3VmFsdWUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gaGFuZGxlUHJpb3JpdHlJbnB1dENsaWNrKGRvbUVsZW0pIHtcclxuICAgIGNvbnN0IGlucHV0RmllbGQgPSBjcmVhdGVQcmlvcml0eVNlbGVjdCgpOyAgICBcclxuICAgIC8vIFJlcGxhY2UgZGl2IHdpdGggaW5wdXQgZmllbGRcclxuICAgIGNvbnN0IHBhcmVudCA9IGRvbUVsZW0ucGFyZW50RWxlbWVudDtcclxuICAgIHBhcmVudC5yZXBsYWNlQ2hpbGQoaW5wdXRGaWVsZCwgZG9tRWxlbSlcclxuXHJcbiAgICAvLyBGb2N1cyB0byBhbGxvdyBzZWxlY3QgdG8gYmx1ciB3aGVuIHVzZXIgY2xpY2sgb3V0c2lkZVxyXG4gICAgaW5wdXRGaWVsZC5mb2N1cygpXHJcbiAgICAvLyBibHVyIHdoZW4gbmV3IHZhbHVlIHNlbGVjdGVkXHJcbiAgICBpbnB1dEZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xyXG4gICAgICAgIGlucHV0RmllbGQuYmx1cigpO1xyXG4gICAgfSlcclxuICAgIC8vIHNhdmUgdGFzayB3aGVuIHNlbGVjdCBpcyBibHVycmVkXHJcbiAgICBpbnB1dEZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsICgpID0+IHtcclxuICAgICAgICBzYXZlVGFzayhkb21FbGVtLCBpbnB1dEZpZWxkLCBwYXJlbnQsIFwicHJpb3JpdHlcIik7XHJcbiAgICB9KVxyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9