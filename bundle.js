(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>s});var r=t(601),a=t.n(r),i=t(314),o=t.n(i)()(a());o.push([n.id,":root {\n    --sidebar-width: 300px;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n}\n\n\n/* Everything in Sidebar */\n\n.sidebar {\n    background-color: black;\n    \n    /* Fixed on left side */\n    position: fixed;\n    top: 0;\n    left: 0;\n    \n    height: 100%;\n    width: var(--sidebar-width);\n\n\n\n    --sidebar-padding-left: 32px;\n    --sidebar-font-size: 16px;\n    --sidebar-accented-color: #fff;\n\n    font-size: var(--sidebar-font-size);\n    color: var(--sidebar-accented-color);\n}\n\n.profile-container {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 32px;\n\n    margin-top: 16px;\n    padding-left: 64px;\n\n}\n\n.pfp-container {\n    width: 50px;\n    height: 50px;\n    background-color: var(--sidebar-accented-color);\n    border-radius: 100%;\n\n    /* Centre image using flexbox */\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.pfp-container img {\n    max-width: 90%;\n    max-height: 90%;\n    border-radius: 100%;\n}\n\n\n.sidebar ul {\n    list-style-type: none;\n    padding: 0;\n}\n\n.nav-list {\n    margin-top: 64px;\n}\n\n.nav-list li {\n    height: 48px;\n}\n\n.nav-list a {\n    max-width: 100%;\n    height: 100%;\n    \n    padding-left: var(--sidebar-padding-left);\n    \n    /* Vertically center text */\n    display: flex;\n    align-items: center;\n}\n\n\n.management ul {\n    position: absolute;\n    margin: 0;\n    bottom: 64px;\n}\n\n.management ul li {\n    padding-left: var(--sidebar-padding-left);\n    height: 32px;\n}\n\n.sidebar a {\n    text-decoration: none;\n    color: var(--sidebar-accented-color);\n}\n\n.nav-list a:hover, \na.active{\n    background-color: var(--sidebar-accented-color);\n    color: black;\n}\n\n/* Main content */\n\n.main-content {\n    margin-left: var(--sidebar-width);\n    padding-left: 32px;\n    padding-right: 32px;\n}\n\n.main-content .active {\n    /* Only show active content */\n    display: block;\n}\n\n.all-projects {\n    display: none;\n}\n\n.all-tasks {\n    display: none;\n}\n\n.finished-projects {\n    display: none;\n}\n\n.finished-tasks {\n    display: none;\n}\n\n\n.title-container {\n    font-size: 64px;\n    font-weight: 700;\n    margin-top: 32px;\n    height: 80px;\n\n    /* title underline */\n    width: fit-content;\n    border-bottom: 4px solid black;\n    padding-right: 24px;\n}\n\n.projects-container{\n    margin: 32px 128px;\n    min-height: 70vh;\n}\n\n.project {\n    margin-top: 16px;\n    \n    display: grid;\n    grid-template-rows: 32px 1fr;\n    grid-template-columns: 2fr 1fr;\n\n    --std-proj-border: 1px solid black;\n    border: var(--std-proj-border);\n\n}\n\n.header {\n    grid-area: 1 / 1 / 2 / 3;\n    border-bottom: var(--std-proj-border);\n}\n\n.task-list {\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n\n    grid-area: 2 / 1 / -1 / 2;\n\n    display: grid;\n    grid-row: 1fr;\n    grid-template-columns: 1fr;\n\n    border-right: var(--std-proj-border);\n\n\n}\n\n.proj-note {\n    grid-area: 2 / 2 / -1 / 3;\n\n}\n\n\n.task-list li {\n    border-bottom: var(--std-proj-border);\n}\n\n.task-list li:last-child {\n    border-bottom: none;\n}\n\n.cb-container {\n    border-right: var(--std-proj-border);\n}",""]);const s=o},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,a,i){"string"==typeof n&&(n=[[null,n,void 0]]);var o={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(o[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&o[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),e.push(l))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},o=[],s=0;s<n.length;s++){var c=n[s],d=r.base?c[0]+r.base:c[0],l=i[d]||0,p="".concat(d," ").concat(l);i[d]=l+1;var u=t(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var v=a(f,r);r.byIndex=s,e.splice(s,0,{identifier:p,updater:v,references:1})}o.push(p)}return o}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var i=r(n=n||[],a=a||{});return function(n){n=n||[];for(var o=0;o<i.length;o++){var s=t(i[o]);e[s].references--}for(var c=r(n,a),d=0;d<i.length;d++){var l=t(i[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=c}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var a=e[r];if(void 0!==a)return a.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(72),e=t.n(n),r=t(825),a=t.n(r),i=t(659),o=t.n(i),s=t(56),c=t.n(s),d=t(540),l=t.n(d),p=t(113),u=t.n(p),f=t(208),v={};v.styleTagTransform=u(),v.setAttributes=c(),v.insert=o().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=l(),e()(f.A,v),f.A&&f.A.locals&&f.A.locals;const g=document.querySelector(".nav-list"),m=function(){let n=0;const e=document.querySelectorAll(".nav-list a"),t=document.querySelector(".main-content").children,r=()=>{e[n].classList.add("active"),t[n].classList.add("active")};return window.onload=r(),{changeActiveTab:a=>{e[n].classList.remove("active"),t[n].classList.remove("active"),n=a,r()}}}();g.addEventListener("click",(function(n){if("A"!==n.target.tagName)return;const e=n.target.getAttribute("index");m.changeActiveTab(e)}))})()})();