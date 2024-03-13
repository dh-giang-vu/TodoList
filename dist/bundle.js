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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,6BAA6B;AACjC;;AAEA;IACI,SAAS;IACT,UAAU;AACd;;;;;AAKA,0BAA0B;;AAE1B;IACI,uBAAuB;;IAEvB,uBAAuB;IACvB,eAAe;IACf,MAAM;IACN,OAAO;;IAEP,YAAY;IACZ,2BAA2B;;;;IAI3B,4BAA4B;IAC5B,yBAAyB;IACzB,8BAA8B;;IAE9B,mCAAmC;IACnC,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;;IAET,gBAAgB;IAChB,kBAAkB;;AAEtB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,+CAA+C;IAC/C,mBAAmB;;IAEnB,+BAA+B;IAC/B,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,eAAe;IACf,mBAAmB;AACvB;;;AAGA;IACI,qBAAqB;IACrB,UAAU;AACd;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,YAAY;;IAEZ,yCAAyC;;IAEzC,2BAA2B;IAC3B,aAAa;IACb,mBAAmB;AACvB;;;AAGA;IACI,kBAAkB;IAClB,SAAS;IACT,YAAY;AAChB;;AAEA;IACI,yCAAyC;IACzC,YAAY;AAChB;;AAEA;IACI,qBAAqB;IACrB,oCAAoC;AACxC;;AAEA;;IAEI,+CAA+C;IAC/C,YAAY;AAChB;;AAEA,iBAAiB;;AAEjB;IACI,iCAAiC;AACrC;;AAEA;IACI,6BAA6B;IAC7B,cAAc;AAClB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;;AAGA;IACI,eAAe;IACf,gBAAgB;IAChB,gBAAgB;IAChB,YAAY;;IAEZ,eAAe;;IAEf,oBAAoB;IACpB,kBAAkB;IAClB,mBAAmB;IACnB,8BAA8B;IAC9B,mBAAmB;;AAEvB;;AAEA;;IAEI,kCAAkC;AACtC;;AAEA;IACI,gBAAgB;;IAEhB,aAAa;IACb,yCAAyC;IACzC,8BAA8B;;IAE9B,yBAAyB;;AAE7B;;AAEA;IACI,4BAA4B;IAC5B,wBAAwB;IACxB,gCAAgC;;IAEhC,gBAAgB;IAChB,gBAAgB;IAChB,iBAAiB;;IAEjB,qCAAqC;IACrC,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,SAAS;IACT,UAAU;IACV,qBAAqB;;IAErB,yBAAyB;;IAEzB,aAAa;IACb,aAAa;IACb,0BAA0B;;IAE1B,+BAA+B;;;AAGnC;;AAEA;IACI,yBAAyB;;AAE7B;;AAEA;IACI,gCAAgC;IAChC,yBAAyB;;IAEzB,oCAAoC;IACpC,aAAa;AACjB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,+BAA+B;;IAE/B,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,mBAAmB;AACvB;;;AAGA;IACI,aAAa;IACb,mBAAmB;;IAEnB,0BAA0B;AAC9B;;;;AAIA,oEAAoE;;;;AAIpE;;IAEI,SAAS;IACT,UAAU;IACV,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,qCAAqC;AACzC;;AAEA;IACI,mCAAmC;IACnC,aAAa;IACb,wBAAwB;IACxB,wFAAwF;;IAExF,yBAAyB;IACzB,yBAAyB;IACzB,yBAAyB;IACzB,gBAAgB;AACpB;;AAEA;IACI,6BAA6B;IAC7B,gBAAgB;IAChB;AACJ;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,+BAA+B;AACnC;;AAEA;;;IAGI,iBAAiB;AACrB;;;;;AAKA,qDAAqD;AACrD;IACI;QACI,aAAa;IACjB;;IAEA;QACI,cAAc;IAClB;AACJ","sourcesContent":[":root {\r\n    --sidebar-width: 300px;\r\n    --row-height: 48px;\r\n    --std-border: 1px solid black;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n\r\n\r\n\r\n/* Everything in Sidebar */\r\n\r\n.sidebar {\r\n    background-color: black;\r\n    \r\n    /* Fixed on left side */\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    \r\n    height: 100%;\r\n    width: var(--sidebar-width);\r\n\r\n\r\n\r\n    --sidebar-padding-left: 32px;\r\n    --sidebar-font-size: 16px;\r\n    --sidebar-accented-color: #fff;\r\n\r\n    font-size: var(--sidebar-font-size);\r\n    color: var(--sidebar-accented-color);\r\n}\r\n\r\n.profile-container {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 32px;\r\n\r\n    margin-top: 16px;\r\n    padding-left: 64px;\r\n\r\n}\r\n\r\n.pfp-container {\r\n    width: 50px;\r\n    height: 50px;\r\n    background-color: var(--sidebar-accented-color);\r\n    border-radius: 100%;\r\n\r\n    /* Centre image using flexbox */\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.pfp-container img {\r\n    max-width: 90%;\r\n    max-height: 90%;\r\n    border-radius: 100%;\r\n}\r\n\r\n\r\n.sidebar ul {\r\n    list-style-type: none;\r\n    padding: 0;\r\n}\r\n\r\n.nav-list {\r\n    margin-top: 64px;\r\n}\r\n\r\n.nav-list li {\r\n    height: 48px;\r\n}\r\n\r\n.nav-list a {\r\n    max-width: 100%;\r\n    height: 100%;\r\n    \r\n    padding-left: var(--sidebar-padding-left);\r\n    \r\n    /* Vertically center text */\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n\r\n.management ul {\r\n    position: absolute;\r\n    margin: 0;\r\n    bottom: 64px;\r\n}\r\n\r\n.management ul li {\r\n    padding-left: var(--sidebar-padding-left);\r\n    height: 32px;\r\n}\r\n\r\n.sidebar a {\r\n    text-decoration: none;\r\n    color: var(--sidebar-accented-color);\r\n}\r\n\r\n.nav-list a:hover, \r\na.active{\r\n    background-color: var(--sidebar-accented-color);\r\n    color: black;\r\n}\r\n\r\n/* Main content */\r\n\r\n.main-content {\r\n    margin-left: var(--sidebar-width);\r\n}\r\n\r\n.main-content .active {\r\n    /* Only show active content */\r\n    display: block;\r\n}\r\n\r\n.all-projects {\r\n    display: none;\r\n}\r\n\r\n.all-tasks {\r\n    display: none;\r\n}\r\n\r\n.finished-projects {\r\n    display: none;\r\n}\r\n\r\n.finished-tasks {\r\n    display: none;\r\n}\r\n\r\n\r\n.title-container {\r\n    font-size: 64px;\r\n    font-weight: 700;\r\n    margin-top: 32px;\r\n    height: 80px;\r\n\r\n    margin-left: 3%;\r\n\r\n    /* title underline */\r\n    width: fit-content;\r\n    height: fit-content;\r\n    border-bottom: 4px solid black;\r\n    padding-right: 24px;\r\n\r\n}\r\n\r\n.projects-container,\r\n.tasks-container {\r\n    margin: 36px clamp(8px, 10%, 96px);\r\n}\r\n\r\n.project {\r\n    margin-top: 16px;\r\n    \r\n    display: grid;\r\n    grid-template-rows: var(--row-height) 1fr;\r\n    grid-template-columns: 2fr 1fr;\r\n\r\n    border: var(--std-border);\r\n\r\n}\r\n\r\n.proj-name-container {\r\n    /* styling for the \"table\" */\r\n    grid-area: 1 / 1 / 2 / 3;\r\n    border-bottom: var(--std-border);\r\n    \r\n    font-weight: 700;\r\n    font-size: 1.5em;\r\n    padding-left: 8px;\r\n\r\n    /* vertically centre project's name */\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.task-list {\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style-type: none;\r\n\r\n    grid-area: 2 / 1 / -1 / 2;\r\n\r\n    display: grid;\r\n    grid-row: 1fr;\r\n    grid-template-columns: 1fr;\r\n\r\n    border-right: var(--std-border);\r\n\r\n\r\n}\r\n\r\n.proj-note {\r\n    grid-area: 2 / 2 / -1 / 3;\r\n\r\n}\r\n\r\n.task-item {\r\n    border-bottom: var(--std-border);\r\n    height: var(--row-height);\r\n\r\n    /* Checkbox and Task Name in 1 row */\r\n    display: flex;\r\n}\r\n\r\n.task-list span {\r\n    height: inherit;\r\n}\r\n\r\n.task-item:last-child {\r\n    border-bottom: none;\r\n}\r\n\r\n.cb-container {\r\n    height: 100%;\r\n    aspect-ratio: 1 / 1;\r\n    border-right: var(--std-border);\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\ninput[type=checkbox] {\r\n    transform: scale(2);\r\n}\r\n\r\n\r\n.task-name {\r\n    display: flex;\r\n    align-items: center;\r\n\r\n    padding-left: min(10px,3%);\r\n}\r\n\r\n\r\n\r\n/* -------------------------- ALL TASKS -------------------------- */\r\n\r\n\r\n\r\n.table,\r\n.table li {\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style-type: none;\r\n}\r\n\r\n.table {\r\n    display: grid;\r\n    grid-template-rows: var(--row-height);\r\n}\r\n\r\n.tb-row {\r\n    /* divide each row into 4 columns */\r\n    display: grid;\r\n    grid-template-rows: 100%;\r\n    grid-template-columns: var(--row-height) repeat(2, minmax(128px, 3fr)) minmax(90px, 2fr);\r\n    \r\n    /* row styling + border */\r\n    height: var(--row-height);\r\n    border: var(--std-border);\r\n    border-top: none;\r\n}\r\n\r\n.tb-header {\r\n    border-top: var(--std-border);\r\n    font-weight: 700;\r\n    font-size: 1.5em\r\n}\r\n\r\n.tb-row-item {\r\n    display: flex;\r\n    align-items: center;\r\n    border-right: var(--std-border);\r\n}\r\n\r\n.task,\r\n.due-date,\r\n.priority {\r\n    padding-left: 8px;\r\n}\r\n\r\n\r\n\r\n\r\n/* Media Queries to hide sidebar when page is small */\r\n@media screen and (max-width:800px) {\r\n    .sidebar {\r\n        display: none;\r\n    }\r\n\r\n    .main-content {\r\n        margin-left: 0;\r\n    }\r\n}"],"sourceRoot":""}]);
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



const sidebarNav = document.querySelector(".nav-list");

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




const displayController = (function() {
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

    return {changeActiveTab}
})();








sidebarNav.addEventListener("click", function(e) {
    if (e.target.tagName !== 'A') {
        return;
    }
    const newActiveIndex = e.target.getAttribute('index');
    displayController.changeActiveTab(newActiveIndex);
})



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxTQUFTLGFBQWEsTUFBTSxhQUFhLGFBQWEsV0FBVyxVQUFVLFdBQVcsVUFBVSxlQUFlLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsWUFBWSxZQUFZLGNBQWMsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGNBQWMsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksUUFBUSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxXQUFXLGFBQWEsYUFBYSxXQUFXLFlBQVksUUFBUSxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLE9BQU8sYUFBYSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsY0FBYyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssYUFBYSxXQUFXLFlBQVksY0FBYyxjQUFjLE9BQU8sS0FBSyxZQUFZLGFBQWEsY0FBYyxhQUFhLGFBQWEsY0FBYyxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLGFBQWEsY0FBYyxXQUFXLFVBQVUsYUFBYSxlQUFlLE9BQU8sS0FBSyxhQUFhLE9BQU8sS0FBSyxZQUFZLGNBQWMsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksY0FBYyxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxRQUFRLEtBQUssVUFBVSxhQUFhLGFBQWEsU0FBUyxlQUFlLE9BQU8sVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxP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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0L2dsb2JhbF92YXIuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xyXG4gICAgLS1zaWRlYmFyLXdpZHRoOiAzMDBweDtcclxuICAgIC0tcm93LWhlaWdodDogNDhweDtcclxuICAgIC0tc3RkLWJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8qIEV2ZXJ5dGhpbmcgaW4gU2lkZWJhciAqL1xyXG5cclxuLnNpZGViYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBcclxuICAgIC8qIEZpeGVkIG9uIGxlZnQgc2lkZSAqL1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIFxyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IHZhcigtLXNpZGViYXItd2lkdGgpO1xyXG5cclxuXHJcblxyXG4gICAgLS1zaWRlYmFyLXBhZGRpbmctbGVmdDogMzJweDtcclxuICAgIC0tc2lkZWJhci1mb250LXNpemU6IDE2cHg7XHJcbiAgICAtLXNpZGViYXItYWNjZW50ZWQtY29sb3I6ICNmZmY7XHJcblxyXG4gICAgZm9udC1zaXplOiB2YXIoLS1zaWRlYmFyLWZvbnQtc2l6ZSk7XHJcbiAgICBjb2xvcjogdmFyKC0tc2lkZWJhci1hY2NlbnRlZC1jb2xvcik7XHJcbn1cclxuXHJcbi5wcm9maWxlLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZ2FwOiAzMnB4O1xyXG5cclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDY0cHg7XHJcblxyXG59XHJcblxyXG4ucGZwLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItYWNjZW50ZWQtY29sb3IpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuXHJcbiAgICAvKiBDZW50cmUgaW1hZ2UgdXNpbmcgZmxleGJveCAqL1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnBmcC1jb250YWluZXIgaW1nIHtcclxuICAgIG1heC13aWR0aDogOTAlO1xyXG4gICAgbWF4LWhlaWdodDogOTAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxufVxyXG5cclxuXHJcbi5zaWRlYmFyIHVsIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5uYXYtbGlzdCB7XHJcbiAgICBtYXJnaW4tdG9wOiA2NHB4O1xyXG59XHJcblxyXG4ubmF2LWxpc3QgbGkge1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG59XHJcblxyXG4ubmF2LWxpc3QgYSB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBcclxuICAgIHBhZGRpbmctbGVmdDogdmFyKC0tc2lkZWJhci1wYWRkaW5nLWxlZnQpO1xyXG4gICAgXHJcbiAgICAvKiBWZXJ0aWNhbGx5IGNlbnRlciB0ZXh0ICovXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi5tYW5hZ2VtZW50IHVsIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJvdHRvbTogNjRweDtcclxufVxyXG5cclxuLm1hbmFnZW1lbnQgdWwgbGkge1xyXG4gICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1zaWRlYmFyLXBhZGRpbmctbGVmdCk7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbn1cclxuXHJcbi5zaWRlYmFyIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IHZhcigtLXNpZGViYXItYWNjZW50ZWQtY29sb3IpO1xyXG59XHJcblxyXG4ubmF2LWxpc3QgYTpob3ZlciwgXHJcbmEuYWN0aXZle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1hY2NlbnRlZC1jb2xvcik7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi8qIE1haW4gY29udGVudCAqL1xyXG5cclxuLm1haW4tY29udGVudCB7XHJcbiAgICBtYXJnaW4tbGVmdDogdmFyKC0tc2lkZWJhci13aWR0aCk7XHJcbn1cclxuXHJcbi5tYWluLWNvbnRlbnQgLmFjdGl2ZSB7XHJcbiAgICAvKiBPbmx5IHNob3cgYWN0aXZlIGNvbnRlbnQgKi9cclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uYWxsLXByb2plY3RzIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5hbGwtdGFza3Mge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmZpbmlzaGVkLXByb2plY3RzIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5maW5pc2hlZC10YXNrcyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5cclxuLnRpdGxlLWNvbnRhaW5lciB7XHJcbiAgICBmb250LXNpemU6IDY0cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbWFyZ2luLXRvcDogMzJweDtcclxuICAgIGhlaWdodDogODBweDtcclxuXHJcbiAgICBtYXJnaW4tbGVmdDogMyU7XHJcblxyXG4gICAgLyogdGl0bGUgdW5kZXJsaW5lICovXHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIGJsYWNrO1xyXG4gICAgcGFkZGluZy1yaWdodDogMjRweDtcclxuXHJcbn1cclxuXHJcbi5wcm9qZWN0cy1jb250YWluZXIsXHJcbi50YXNrcy1jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiAzNnB4IGNsYW1wKDhweCwgMTAlLCA5NnB4KTtcclxufVxyXG5cclxuLnByb2plY3Qge1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgIFxyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogdmFyKC0tcm93LWhlaWdodCkgMWZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xyXG5cclxuICAgIGJvcmRlcjogdmFyKC0tc3RkLWJvcmRlcik7XHJcblxyXG59XHJcblxyXG4ucHJvai1uYW1lLWNvbnRhaW5lciB7XHJcbiAgICAvKiBzdHlsaW5nIGZvciB0aGUgXCJ0YWJsZVwiICovXHJcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDM7XHJcbiAgICBib3JkZXItYm90dG9tOiB2YXIoLS1zdGQtYm9yZGVyKTtcclxuICAgIFxyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuXHJcbiAgICAvKiB2ZXJ0aWNhbGx5IGNlbnRyZSBwcm9qZWN0J3MgbmFtZSAqL1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50YXNrLWxpc3Qge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuXHJcbiAgICBncmlkLWFyZWE6IDIgLyAxIC8gLTEgLyAyO1xyXG5cclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXJvdzogMWZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcblxyXG4gICAgYm9yZGVyLXJpZ2h0OiB2YXIoLS1zdGQtYm9yZGVyKTtcclxuXHJcblxyXG59XHJcblxyXG4ucHJvai1ub3RlIHtcclxuICAgIGdyaWQtYXJlYTogMiAvIDIgLyAtMSAvIDM7XHJcblxyXG59XHJcblxyXG4udGFzay1pdGVtIHtcclxuICAgIGJvcmRlci1ib3R0b206IHZhcigtLXN0ZC1ib3JkZXIpO1xyXG4gICAgaGVpZ2h0OiB2YXIoLS1yb3ctaGVpZ2h0KTtcclxuXHJcbiAgICAvKiBDaGVja2JveCBhbmQgVGFzayBOYW1lIGluIDEgcm93ICovXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4udGFzay1saXN0IHNwYW4ge1xyXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xyXG59XHJcblxyXG4udGFzay1pdGVtOmxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxufVxyXG5cclxuLmNiLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiB2YXIoLS1zdGQtYm9yZGVyKTtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPWNoZWNrYm94XSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDIpO1xyXG59XHJcblxyXG5cclxuLnRhc2stbmFtZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBwYWRkaW5nLWxlZnQ6IG1pbigxMHB4LDMlKTtcclxufVxyXG5cclxuXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBBTEwgVEFTS1MgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcblxyXG5cclxuLnRhYmxlLFxyXG4udGFibGUgbGkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG5cclxuLnRhYmxlIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHZhcigtLXJvdy1oZWlnaHQpO1xyXG59XHJcblxyXG4udGItcm93IHtcclxuICAgIC8qIGRpdmlkZSBlYWNoIHJvdyBpbnRvIDQgY29sdW1ucyAqL1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwJTtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogdmFyKC0tcm93LWhlaWdodCkgcmVwZWF0KDIsIG1pbm1heCgxMjhweCwgM2ZyKSkgbWlubWF4KDkwcHgsIDJmcik7XHJcbiAgICBcclxuICAgIC8qIHJvdyBzdHlsaW5nICsgYm9yZGVyICovXHJcbiAgICBoZWlnaHQ6IHZhcigtLXJvdy1oZWlnaHQpO1xyXG4gICAgYm9yZGVyOiB2YXIoLS1zdGQtYm9yZGVyKTtcclxuICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbn1cclxuXHJcbi50Yi1oZWFkZXIge1xyXG4gICAgYm9yZGVyLXRvcDogdmFyKC0tc3RkLWJvcmRlcik7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiAxLjVlbVxyXG59XHJcblxyXG4udGItcm93LWl0ZW0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmlnaHQ6IHZhcigtLXN0ZC1ib3JkZXIpO1xyXG59XHJcblxyXG4udGFzayxcclxuLmR1ZS1kYXRlLFxyXG4ucHJpb3JpdHkge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8qIE1lZGlhIFF1ZXJpZXMgdG8gaGlkZSBzaWRlYmFyIHdoZW4gcGFnZSBpcyBzbWFsbCAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjgwMHB4KSB7XHJcbiAgICAuc2lkZWJhciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAubWFpbi1jb250ZW50IHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIH1cclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJz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OUI7Ozs7QUFJQSxvRUFBb0U7Ozs7QUFJcEU7O0lBRUksU0FBUztJQUNULFVBQVU7SUFDVixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsd0ZBQXdGOztJQUV4Rix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsZ0JBQWdCO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLCtCQUErQjtBQUNuQzs7QUFFQTs7O0lBR0ksaUJBQWlCO0FBQ3JCOzs7OztBQUtBLHFEQUFxRDtBQUNyRDtJQUNJO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAgIC0tc2lkZWJhci13aWR0aDogMzAwcHg7XFxyXFxuICAgIC0tcm93LWhlaWdodDogNDhweDtcXHJcXG4gICAgLS1zdGQtYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbi8qIEV2ZXJ5dGhpbmcgaW4gU2lkZWJhciAqL1xcclxcblxcclxcbi5zaWRlYmFyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIFxcclxcbiAgICAvKiBGaXhlZCBvbiBsZWZ0IHNpZGUgKi9cXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIFxcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiB2YXIoLS1zaWRlYmFyLXdpZHRoKTtcXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4gICAgLS1zaWRlYmFyLXBhZGRpbmctbGVmdDogMzJweDtcXHJcXG4gICAgLS1zaWRlYmFyLWZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgLS1zaWRlYmFyLWFjY2VudGVkLWNvbG9yOiAjZmZmO1xcclxcblxcclxcbiAgICBmb250LXNpemU6IHZhcigtLXNpZGViYXItZm9udC1zaXplKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXNpZGViYXItYWNjZW50ZWQtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZmlsZS1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAzMnB4O1xcclxcblxcclxcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDY0cHg7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5wZnAtY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDUwcHg7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1hY2NlbnRlZC1jb2xvcik7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxyXFxuXFxyXFxuICAgIC8qIENlbnRyZSBpbWFnZSB1c2luZyBmbGV4Ym94ICovXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucGZwLWNvbnRhaW5lciBpbWcge1xcclxcbiAgICBtYXgtd2lkdGg6IDkwJTtcXHJcXG4gICAgbWF4LWhlaWdodDogOTAlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uc2lkZWJhciB1bCB7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saXN0IHtcXHJcXG4gICAgbWFyZ2luLXRvcDogNjRweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saXN0IGxpIHtcXHJcXG4gICAgaGVpZ2h0OiA0OHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpc3QgYSB7XFxyXFxuICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1zaWRlYmFyLXBhZGRpbmctbGVmdCk7XFxyXFxuICAgIFxcclxcbiAgICAvKiBWZXJ0aWNhbGx5IGNlbnRlciB0ZXh0ICovXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5tYW5hZ2VtZW50IHVsIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGJvdHRvbTogNjRweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1hbmFnZW1lbnQgdWwgbGkge1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLXNpZGViYXItcGFkZGluZy1sZWZ0KTtcXHJcXG4gICAgaGVpZ2h0OiAzMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhciBhIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBjb2xvcjogdmFyKC0tc2lkZWJhci1hY2NlbnRlZC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGlzdCBhOmhvdmVyLCBcXHJcXG5hLmFjdGl2ZXtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1hY2NlbnRlZC1jb2xvcik7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLyogTWFpbiBjb250ZW50ICovXFxyXFxuXFxyXFxuLm1haW4tY29udGVudCB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiB2YXIoLS1zaWRlYmFyLXdpZHRoKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tY29udGVudCAuYWN0aXZlIHtcXHJcXG4gICAgLyogT25seSBzaG93IGFjdGl2ZSBjb250ZW50ICovXFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4uYWxsLXByb2plY3RzIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFsbC10YXNrcyB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5maW5pc2hlZC1wcm9qZWN0cyB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5maW5pc2hlZC10YXNrcyB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcblxcclxcbi50aXRsZS1jb250YWluZXIge1xcclxcbiAgICBmb250LXNpemU6IDY0cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIG1hcmdpbi10b3A6IDMycHg7XFxyXFxuICAgIGhlaWdodDogODBweDtcXHJcXG5cXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xcclxcblxcclxcbiAgICAvKiB0aXRsZSB1bmRlcmxpbmUgKi9cXHJcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgYmxhY2s7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDI0cHg7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cy1jb250YWluZXIsXFxyXFxuLnRhc2tzLWNvbnRhaW5lciB7XFxyXFxuICAgIG1hcmdpbjogMzZweCBjbGFtcCg4cHgsIDEwJSwgOTZweCk7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0IHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTZweDtcXHJcXG4gICAgXFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogdmFyKC0tcm93LWhlaWdodCkgMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XFxyXFxuXFxyXFxuICAgIGJvcmRlcjogdmFyKC0tc3RkLWJvcmRlcik7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5wcm9qLW5hbWUtY29udGFpbmVyIHtcXHJcXG4gICAgLyogc3R5bGluZyBmb3IgdGhlIFxcXCJ0YWJsZVxcXCIgKi9cXHJcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAzO1xcclxcbiAgICBib3JkZXItYm90dG9tOiB2YXIoLS1zdGQtYm9yZGVyKTtcXHJcXG4gICAgXFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xcclxcblxcclxcbiAgICAvKiB2ZXJ0aWNhbGx5IGNlbnRyZSBwcm9qZWN0J3MgbmFtZSAqL1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1saXN0IHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuXFxyXFxuICAgIGdyaWQtYXJlYTogMiAvIDEgLyAtMSAvIDI7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtcm93OiAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcblxcclxcbiAgICBib3JkZXItcmlnaHQ6IHZhcigtLXN0ZC1ib3JkZXIpO1xcclxcblxcclxcblxcclxcbn1cXHJcXG5cXHJcXG4ucHJvai1ub3RlIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMiAvIC0xIC8gMztcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLnRhc2staXRlbSB7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IHZhcigtLXN0ZC1ib3JkZXIpO1xcclxcbiAgICBoZWlnaHQ6IHZhcigtLXJvdy1oZWlnaHQpO1xcclxcblxcclxcbiAgICAvKiBDaGVja2JveCBhbmQgVGFzayBOYW1lIGluIDEgcm93ICovXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWxpc3Qgc3BhbiB7XFxyXFxuICAgIGhlaWdodDogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2staXRlbTpsYXN0LWNoaWxkIHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNiLWNvbnRhaW5lciB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXHJcXG4gICAgYm9yZGVyLXJpZ2h0OiB2YXIoLS1zdGQtYm9yZGVyKTtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9Y2hlY2tib3hdIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgyKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnRhc2stbmFtZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIHBhZGRpbmctbGVmdDogbWluKDEwcHgsMyUpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBBTEwgVEFTS1MgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4udGFibGUsXFxyXFxuLnRhYmxlIGxpIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50YWJsZSB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogdmFyKC0tcm93LWhlaWdodCk7XFxyXFxufVxcclxcblxcclxcbi50Yi1yb3cge1xcclxcbiAgICAvKiBkaXZpZGUgZWFjaCByb3cgaW50byA0IGNvbHVtbnMgKi9cXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDAlO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHZhcigtLXJvdy1oZWlnaHQpIHJlcGVhdCgyLCBtaW5tYXgoMTI4cHgsIDNmcikpIG1pbm1heCg5MHB4LCAyZnIpO1xcclxcbiAgICBcXHJcXG4gICAgLyogcm93IHN0eWxpbmcgKyBib3JkZXIgKi9cXHJcXG4gICAgaGVpZ2h0OiB2YXIoLS1yb3ctaGVpZ2h0KTtcXHJcXG4gICAgYm9yZGVyOiB2YXIoLS1zdGQtYm9yZGVyKTtcXHJcXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRiLWhlYWRlciB7XFxyXFxuICAgIGJvcmRlci10b3A6IHZhcigtLXN0ZC1ib3JkZXIpO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBmb250LXNpemU6IDEuNWVtXFxyXFxufVxcclxcblxcclxcbi50Yi1yb3ctaXRlbSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlci1yaWdodDogdmFyKC0tc3RkLWJvcmRlcik7XFxyXFxufVxcclxcblxcclxcbi50YXNrLFxcclxcbi5kdWUtZGF0ZSxcXHJcXG4ucHJpb3JpdHkge1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyogTWVkaWEgUXVlcmllcyB0byBoaWRlIHNpZGViYXIgd2hlbiBwYWdlIGlzIHNtYWxsICovXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo4MDBweCkge1xcclxcbiAgICAuc2lkZWJhciB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5tYWluLWNvbnRlbnQge1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IFBSSU9SSVRZID0gKGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc3QgVU5ERUZJTkVEID0gLTE7XHJcbiAgICBjb25zdCBMT1cgPSAwO1xyXG4gICAgY29uc3QgTUVEID0gMTtcclxuICAgIGNvbnN0IEhJR0ggPSAyO1xyXG5cclxuICAgIHJldHVybiB7VU5ERUZJTkVELCBMT1csIE1FRCwgSElHSH07XHJcblxyXG59KSgpO1xyXG5cclxuY29uc3QgU1RBVFVTID0gKGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc3QgTk9UX1NUQVJURUQgPSBcIk5TXCI7XHJcbiAgICBjb25zdCBJTl9QUk9HUkVTUyA9IFwiSVNcIjtcclxuICAgIGNvbnN0IERPTkUgPSBcIkRcIjtcclxuXHJcbiAgICByZXR1cm4ge05PVF9TVEFSVEVELCBJTl9QUk9HUkVTUywgRE9ORX07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQge1BSSU9SSVRZLCBTVEFUVVN9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi4vc3R5bGUuY3NzJ1xyXG5pbXBvcnQge1BSSU9SSVRZLCBTVEFUVVN9IGZyb20gJy4vZ2xvYmFsX3Zhci5qcydcclxuXHJcbmNvbnN0IHNpZGViYXJOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdi1saXN0XCIpO1xyXG5cclxuLyogTWFuYWdlIGFsbCB0YXNrcyAqL1xyXG5jb25zdCB0YXNrTWFuYWdlciA9IChmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IGFsbFRhc2tzID0gW107XHJcblxyXG4gICAgLyogQ3JlYXRlIG5ldyB0YXNrIG9iamVjdCBhbmQgYWRkIHRvIGFsbFRhc2tzIGFycmF5ICovXHJcbiAgICBjb25zdCBjcmVhdGVUYXNrID0gKG5hbWUsIGR1ZURhdGUsIHByaW9yaXR5PVBSSU9SSVRZLlVOREVGSU5FRCkgPT4ge1xyXG4gICAgICAgIGxldCBzdGF0dXMgPSBTVEFUVVMuTk9UX1NUQVJURUQ7XHJcbiAgICAgICAgYWxsVGFza3MucHVzaCh7bmFtZSwgZHVlRGF0ZSwgcHJpb3JpdHksIHN0YXR1c30pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIERlbGV0ZSB0YXNrIG9iamVjdCBmcm9tIGFsbFRhc2tzIGFycmF5ICovXHJcbiAgICBjb25zdCBkZWxldGVUYXNrID0gKHRhc2tOdW0pID0+IHtcclxuICAgICAgICBhbGxUYXNrcy5zcGxpY2UodGFza051bSwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyogU2V0IHByaW9yaXR5IG9mIHRhc2sgb2JqZWN0ICovXHJcbiAgICBjb25zdCBzZXRQcmlvcml0eSA9ICh0YXNrLCBwcmlvcml0eSkgPT4ge1xyXG4gICAgICAgIHRhc2sucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBTZXQgc3RhdHVzIG9mIHRhc2sgb2JqZWN0IC0gKE5vdCBTdGFydGVkLCBJbiBQcm9ncmVzcywgRG9uZSkgKi9cclxuICAgIGNvbnN0IHNldFN0YXR1cyA9ICh0YXNrLCBzdGF0dXMpID0+IHtcclxuICAgICAgICB0YXNrLnN0YXR1cyA9IHN0YXR1cztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge2NyZWF0ZVRhc2ssIGRlbGV0ZVRhc2ssIHNldFByaW9yaXR5LCBzZXRTdGF0dXMsIGFsbFRhc2tzfTtcclxuXHJcbn0pKCk7XHJcblxyXG5cclxuLyogTWFuYWdlIGFsbCBwcm9qZWN0cyAqL1xyXG5jb25zdCBwcm9qZWN0TWFuYWdlciA9IChmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IGFsbFByb2plY3RzID0gW107XHJcblxyXG4gICAgY29uc3QgY3JlYXRlUHJvamVjdCA9IChuYW1lKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFza3NBcnJheSA9IFtdO1xyXG4gICAgICAgIGFsbFByb2plY3RzLnB1c2goe25hbWUsIHRhc2tzQXJyYXl9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge2NyZWF0ZVByb2plY3QsIGFsbFByb2plY3RzfTtcclxuXHJcbn0pKCk7XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBkaXNwbGF5Q29udHJvbGxlciA9IChmdW5jdGlvbigpIHtcclxuICAgIGxldCBhY3RpdmVJbmRleCA9IDE7XHJcbiAgICBjb25zdCBzaWRlYmFyTmF2TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2LWxpc3QgYScpO1xyXG4gICAgY29uc3QgbWFpbkNvbnRlbnRQZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGVudFwiKS5jaGlsZHJlbjtcclxuICAgIFxyXG4gICAgY29uc3QgcmVtb3ZlQWN0aXZlID0gKCkgPT4ge1xyXG4gICAgICAgIHNpZGViYXJOYXZMaW5rc1thY3RpdmVJbmRleF0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgICBtYWluQ29udGVudFBnc1thY3RpdmVJbmRleF0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtYWtlQWN0aXZlID0gKCkgPT4ge1xyXG4gICAgICAgIHNpZGViYXJOYXZMaW5rc1thY3RpdmVJbmRleF0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgICAgICBtYWluQ29udGVudFBnc1thY3RpdmVJbmRleF0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjaGFuZ2VBY3RpdmVUYWIgPSAobmV3SW5kZXgpID0+IHtcclxuICAgICAgICByZW1vdmVBY3RpdmUoKTtcclxuICAgICAgICBhY3RpdmVJbmRleCA9IG5ld0luZGV4O1xyXG4gICAgICAgIG1ha2VBY3RpdmUoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gRGlzcGxheSBwYWdlIHdpdGggaW5kZXggPT09IDAgb24gcGFnZSBsb2FkIFxyXG4gICAgd2luZG93Lm9ubG9hZCA9IG1ha2VBY3RpdmUoKTtcclxuXHJcbiAgICByZXR1cm4ge2NoYW5nZUFjdGl2ZVRhYn1cclxufSkoKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5zaWRlYmFyTmF2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XHJcbiAgICBpZiAoZS50YXJnZXQudGFnTmFtZSAhPT0gJ0EnKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbmV3QWN0aXZlSW5kZXggPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2luZGV4Jyk7XHJcbiAgICBkaXNwbGF5Q29udHJvbGxlci5jaGFuZ2VBY3RpdmVUYWIobmV3QWN0aXZlSW5kZXgpO1xyXG59KVxyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==