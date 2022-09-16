/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/manageImages.js":
/*!*****************************!*\
  !*** ./src/manageImages.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.css */ \"./src/styles/styles.css\");\n/* harmony import */ var _assets_my_potrait_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/my_potrait.png */ \"./src/assets/my_potrait.png\");\n/* harmony import */ var _assets_python_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/python.png */ \"./src/assets/python.png\");\n/* harmony import */ var _assets_javascript_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/javascript.png */ \"./src/assets/javascript.png\");\n/* harmony import */ var _assets_react_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/react.png */ \"./src/assets/react.png\");\n/* harmony import */ var _assets_node_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/node.png */ \"./src/assets/node.png\");\n/* harmony import */ var _assets_flask_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/flask.png */ \"./src/assets/flask.png\");\n/* harmony import */ var _assets_mongodb_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/mongodb.png */ \"./src/assets/mongodb.png\");\n/* harmony import */ var _assets_html_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/html.png */ \"./src/assets/html.png\");\n/* harmony import */ var _assets_css_ico_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/css-ico.png */ \"./src/assets/css-ico.png\");\n/* harmony import */ var _assets_webpack_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/webpack.png */ \"./src/assets/webpack.png\");\n/* harmony import */ var _assets_express_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/express.png */ \"./src/assets/express.png\");\n/* harmony import */ var _assets_api_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/api.png */ \"./src/assets/api.png\");\n/* harmony import */ var _assets_sql_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/sql.png */ \"./src/assets/sql.png\");\n/* harmony import */ var _assets_git_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assets/git.png */ \"./src/assets/git.png\");\n/* harmony import */ var _assets_github_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./assets/github.png */ \"./src/assets/github.png\");\n/* harmony import */ var _assets_open_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./assets/open.png */ \"./src/assets/open.png\");\n/* harmony import */ var _assets_cart_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./assets/cart.png */ \"./src/assets/cart.png\");\n/* harmony import */ var _assets_weather_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./assets/weather.png */ \"./src/assets/weather.png\");\n/* harmony import */ var _assets_todo_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./assets/todo.png */ \"./src/assets/todo.png\");\n/* harmony import */ var _assets_cv_gen_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./assets/cv-gen.png */ \"./src/assets/cv-gen.png\");\n/* harmony import */ var _assets_keep_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./assets/keep.png */ \"./src/assets/keep.png\");\n/* harmony import */ var _assets_linkedin_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./assets/linkedin.png */ \"./src/assets/linkedin.png\");\n/* harmony import */ var _assets_twitter_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./assets/twitter.png */ \"./src/assets/twitter.png\");\n/* harmony import */ var _assets_github_b_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./assets/github-b.png */ \"./src/assets/github-b.png\");\n/* harmony import */ var _assets_loader_gif__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./assets/loader.gif */ \"./src/assets/loader.gif\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n //Intro\n\nvar image = document.querySelector(\".my-potrait\");\nvar bioImg = document.querySelector(\".bio-img\"); //About\n\nvar pythonSkill = document.querySelector(\".python-img\");\nvar jsSkill = document.querySelector(\".js-img\");\nvar reactSkill = document.querySelector(\".react-img\");\nvar nodeSkill = document.querySelector(\".node-img\");\nvar flaskSkill = document.querySelector(\".flask-img\");\nvar mongoSkill = document.querySelector(\".mongo-img\");\nvar htmlSkill = document.querySelector(\".html-img\");\nvar cssSkill = document.querySelector(\".css-img\");\nvar expressSkill = document.querySelector(\".express-img\");\nvar sqlSkill = document.querySelector(\".sql-img\");\nvar apiSkill = document.querySelector(\".api-img\");\nvar gitSkill = document.querySelector(\".git-img\");\nvar webpackSkill = document.querySelector(\".webpack-img\");\nvar repoLink = document.querySelectorAll(\".repo-img\");\nvar liveLink = document.querySelectorAll(\".live-img\"); //Projects\n\nvar cartImage = document.querySelector(\".cart-img\");\nvar weatherImage = document.querySelector(\".weather-img\");\nvar todoImage = document.querySelector(\".todo-img\");\nvar cvImage = document.querySelector(\".cv-img\");\nvar keepImg = document.querySelector(\".keep-img\");\nvar moreLink = document.querySelector(\".more-link\"); //Footer\n\nvar linkedIn = document.querySelector(\".linkedin\");\nvar twitter = document.querySelector(\".twitter\");\nvar githubSocial = document.querySelector(\".github-social\"); //loader\n\nvar loaderGif = document.querySelector(\".gif-loader\");\n\nvar images = function images() {\n  //Projects\n  cartImage.src = _assets_cart_png__WEBPACK_IMPORTED_MODULE_17__;\n  weatherImage.src = _assets_weather_png__WEBPACK_IMPORTED_MODULE_18__;\n  todoImage.src = _assets_todo_png__WEBPACK_IMPORTED_MODULE_19__;\n  cvImage.src = _assets_cv_gen_png__WEBPACK_IMPORTED_MODULE_20__;\n  keepImg.src = _assets_keep_png__WEBPACK_IMPORTED_MODULE_21__;\n  moreLink.src = _assets_open_png__WEBPACK_IMPORTED_MODULE_16__;\n  repoLink.forEach(function (link) {\n    link.src = _assets_github_png__WEBPACK_IMPORTED_MODULE_15__;\n  });\n  liveLink.forEach(function (link) {\n    link.src = _assets_open_png__WEBPACK_IMPORTED_MODULE_16__;\n  }); //About\n\n  image.src = _assets_my_potrait_png__WEBPACK_IMPORTED_MODULE_1__;\n  bioImg.src = _assets_my_potrait_png__WEBPACK_IMPORTED_MODULE_1__;\n  pythonSkill.src = _assets_python_png__WEBPACK_IMPORTED_MODULE_2__;\n  jsSkill.src = _assets_javascript_png__WEBPACK_IMPORTED_MODULE_3__;\n  reactSkill.src = _assets_react_png__WEBPACK_IMPORTED_MODULE_4__;\n  nodeSkill.src = _assets_node_png__WEBPACK_IMPORTED_MODULE_5__;\n  flaskSkill.src = _assets_flask_png__WEBPACK_IMPORTED_MODULE_6__;\n  mongoSkill.src = _assets_mongodb_png__WEBPACK_IMPORTED_MODULE_7__;\n  htmlSkill.src = _assets_html_png__WEBPACK_IMPORTED_MODULE_8__;\n  cssSkill.src = _assets_css_ico_png__WEBPACK_IMPORTED_MODULE_9__;\n  expressSkill.src = _assets_express_png__WEBPACK_IMPORTED_MODULE_11__;\n  sqlSkill.src = _assets_sql_png__WEBPACK_IMPORTED_MODULE_13__;\n  apiSkill.src = _assets_api_png__WEBPACK_IMPORTED_MODULE_12__;\n  gitSkill.src = _assets_git_png__WEBPACK_IMPORTED_MODULE_14__;\n  webpackSkill.src = _assets_webpack_png__WEBPACK_IMPORTED_MODULE_10__; //Footer\n\n  linkedIn.src = _assets_linkedin_png__WEBPACK_IMPORTED_MODULE_22__;\n  twitter.src = _assets_twitter_png__WEBPACK_IMPORTED_MODULE_23__;\n  githubSocial.src = _assets_github_b_png__WEBPACK_IMPORTED_MODULE_24__; //Loader\n\n  loaderGif.src = _assets_loader_gif__WEBPACK_IMPORTED_MODULE_25__;\n};\n\nimages();\n\n//# sourceURL=webpack://portfolio/./src/manageImages.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* Meyer CSS Reset */\\r\\nhtml, body, div, span, applet, object, iframe,\\r\\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\\r\\na, abbr, acronym, address, big, cite, code,\\r\\ndel, dfn, em, img, ins, kbd, q, s, samp,\\r\\nsmall, strike, strong, sub, sup, tt, var,\\r\\nb, u, i, center,\\r\\ndl, dt, dd, ol, ul, li,\\r\\nfieldset, form, label, legend,\\r\\ntable, caption, tbody, tfoot, thead, tr, th, td,\\r\\narticle, aside, canvas, details, embed, \\r\\nfigure, figcaption, footer, header, hgroup, \\r\\nmenu, nav, output, ruby, section, summary,\\r\\ntime, mark, audio, video {\\r\\n\\tmargin: 0;\\r\\n\\tpadding: 0;\\r\\n\\tborder: 0;\\r\\n\\tfont-size: 100%;\\r\\n\\tfont: inherit;\\r\\n\\tvertical-align: baseline;\\r\\n}\\r\\n/* HTML5 display-role reset for older browsers */\\r\\narticle, aside, details, figcaption, figure, \\r\\nfooter, header, hgroup, menu, nav, section {\\r\\n\\tdisplay: block;\\r\\n}\\r\\nbody {\\r\\n\\tline-height: 1;\\r\\n}\\r\\nol, ul {\\r\\n\\tlist-style: none;\\r\\n}\\r\\nblockquote, q {\\r\\n\\tquotes: none;\\r\\n}\\r\\nblockquote:before, blockquote:after,\\r\\nq:before, q:after {\\r\\n\\tcontent: '';\\r\\n\\tcontent: none;\\r\\n}\\r\\ntable {\\r\\n\\tborder-collapse: collapse;\\r\\n\\tborder-spacing: 0;\\r\\n}\\r\\n* {\\r\\n    box-sizing: border-box;\\r\\n}\\r\\n:root {\\r\\n    --themecolor: #f2b447;\\r\\n    --primary-font: 'Nunito Sans', sans-serif;\\r\\n}\\r\\nbody {\\r\\n    color: rgb(204, 204, 204);\\r\\n    background-color: #000;\\r\\n    font-family: var(--primary-font);\\r\\n    -webkit-tap-highlight-color: transparent !important;\\r\\n}\\r\\n.preload {\\r\\n    position: fixed;\\r\\n    width: 100%;\\r\\n    height: 100vh;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    background-color: #000;\\r\\n    z-index: 10;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n}\\r\\n.preload .gif-loader {\\r\\n    width: 300px;\\r\\n    height: 200px;\\r\\n}\\r\\n.hide-loader {\\r\\n    width: 0;\\r\\n    height: 0;\\r\\n    z-index: -1;\\r\\n    opacity: 0;\\r\\n}\\r\\n.main-page {\\r\\n    position: relative;\\r\\n    width: 100%;\\r\\n    height: auto;\\r\\n}\\r\\n.nav-bar {\\r\\n    position: sticky;\\r\\n    top: 0;\\r\\n    background-color: rgba(0, 0, 0, 0.9);\\r\\n    width: 100%;\\r\\n    height: 80px;\\r\\n    margin-bottom: 16px;\\r\\n    z-index: 2;\\r\\n}\\r\\n.nav-inner {\\r\\n    width: 90%;\\r\\n    height: 95%;\\r\\n    margin: 0 auto;\\r\\n    display: flex;\\r\\n    justify-content: space-between;\\r\\n    align-items: center;\\r\\n}\\r\\n.hamburger {\\r\\n    display: none;\\r\\n}\\r\\n.logo {\\r\\n    position: relative;\\r\\n    padding: 6px;\\r\\n}\\r\\n.logo::after {\\r\\n    content: \\\"\\\";\\r\\n    position: absolute;\\r\\n    width: 48px;\\r\\n    background-color: var(--themecolor);\\r\\n    height: 3px;\\r\\n    left: 50%;\\r\\n    top: 100%;\\r\\n    transform: translateX(-50%);\\r\\n    transition: all 0.3s ease-in-out;\\r\\n}\\r\\n.logo:hover::after {\\r\\n    width: 64px;\\r\\n}\\r\\n.logo-link {\\r\\n    text-decoration: none;\\r\\n    color: rgb(204, 204, 204);\\r\\n    font-size: 1.3rem;\\r\\n}\\r\\n.lname, .fname {\\r\\n    color: var(--themecolor);\\r\\n}\\r\\n.menu-items {\\r\\n    position: relative;\\r\\n    display: flex;\\r\\n    justify-content: space-between;\\r\\n    align-items: center;\\r\\n    width: 300px;\\r\\n    height: 100%;\\r\\n}\\r\\n.menu-items .item {\\r\\n    position: relative;\\r\\n    display: block;\\r\\n    text-decoration: none;\\r\\n    color: rgb(204, 204, 204);\\r\\n    font-size: 1.2rem;\\r\\n    height: 100%;\\r\\n    padding: 12px;\\r\\n}\\r\\n.menu-items .item.current {\\r\\n    color: var(--themecolor);\\r\\n}\\r\\n.menu-items .item::after {\\r\\n    content: \\\"\\\";\\r\\n    position: absolute;\\r\\n    width: 0;\\r\\n    height: 3px;\\r\\n    left: 0;\\r\\n    top: 100%;\\r\\n    background-color: var(--themecolor);\\r\\n    transition: all 0.2s ease-out;\\r\\n    transform-origin: left;\\r\\n}\\r\\n.menu-items .item:hover::after {\\r\\n    width: 100%;\\r\\n}\\r\\n\\r\\n/* Intro Section */\\r\\n.intro {\\r\\n    position: relative;\\r\\n    width: 90%;\\r\\n    max-height: calc(100vh - 64px);\\r\\n    margin: 0 auto;\\r\\n    display: grid;\\r\\n    grid-template-columns: repeat(2, 1fr);\\r\\n    gap: 32px;\\r\\n}\\r\\n.salutation {\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    justify-content: center;\\r\\n}\\r\\n.salutation > h3 {\\r\\n    font-size: 2rem;\\r\\n    font-weight: 900;\\r\\n    padding: 0 0 20px;\\r\\n}\\r\\n.salutation > h1 {\\r\\n    font-size: 3rem;\\r\\n    font-weight: 900;\\r\\n    padding: 0 0 20px;\\r\\n}\\r\\n.salutation > button {\\r\\n    position: relative;\\r\\n    width: max-content;\\r\\n    font-size: 1.2rem;\\r\\n    font-weight: 600;\\r\\n    padding: 12px 20px;\\r\\n    background-color: var(--themecolor);\\r\\n    border-radius: 24px;\\r\\n    cursor: pointer;\\r\\n    transition: all 0.3s ease-in;\\r\\n}\\r\\n.salutation > button > a {\\r\\n    text-decoration: none;\\r\\n    color:rgb(44, 44, 44);\\r\\n}\\r\\n.salutation > button:hover {\\r\\n    background-color: rgb(204, 204, 204);\\r\\n    scale: 1.05;\\r\\n}\\r\\n.image {\\r\\n    position: relative;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n}\\r\\n.image > img {\\r\\n    max-width: 100%;\\r\\n    max-height: 100%;\\r\\n    object-fit: cover;\\r\\n    border-radius: 32px;\\r\\n}\\r\\nhr {\\r\\n    margin: 32px auto 0;\\r\\n    border: none;\\r\\n    border-top: 24px dotted rgb(59, 59, 59);\\r\\n    list-style: disc;\\r\\n    width: 160px;\\r\\n}\\r\\n/* ABOUT SECTION */\\r\\n.about-section {\\r\\n    position: relative;\\r\\n    width: 90%;\\r\\n    margin: 64px auto 32px;\\r\\n}\\r\\nsection > h2 {\\r\\n    position: relative;\\r\\n    font-size: 3.5rem;\\r\\n    font-weight: 900;\\r\\n    color: #fff;\\r\\n    text-align: center;\\r\\n    width: max-content;\\r\\n    margin: 32px auto;\\r\\n}\\r\\nsection > h2::after {\\r\\n    content: \\\"\\\";\\r\\n    position: absolute;\\r\\n    width: 100px;\\r\\n    height: 1px;\\r\\n    background-color: rgb(103, 103, 103);\\r\\n    left: calc(100% + 16px);\\r\\n    top: 50%;\\r\\n}\\r\\nsection > h2::before {\\r\\n    content: \\\"\\\";\\r\\n    position: absolute;\\r\\n    width: 100px;\\r\\n    height: 1px;\\r\\n    background-color: rgb(103, 103, 103);\\r\\n    right: calc(100% + 16px);\\r\\n    top: 50%;\\r\\n}\\r\\n.about-me {\\r\\n    position: relative;\\r\\n    display: grid;\\r\\n    grid-template-columns: repeat(2, 1fr);\\r\\n    margin: 48px 0 32px;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    padding: 16px 0;\\r\\n    gap: 32px;\\r\\n}\\r\\n.bio {\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    flex-direction: column;\\r\\n    gap: 32px;\\r\\n}\\r\\n.bio-img-container {\\r\\n    width: 100%;\\r\\n    height: auto;\\r\\n    text-align: center;\\r\\n}\\r\\n.bio-img-container .bio-img {\\r\\n    width: 150px;\\r\\n    height: 150px;\\r\\n    border-radius: 100%;\\r\\n}\\r\\n.description {\\r\\n    width: 100%;\\r\\n    font-size: 1.2rem;\\r\\n    line-height: 1.2;\\r\\n}\\r\\n.skills-section {\\r\\n    width: 100%;\\r\\n    max-height: 100%;\\r\\n    display: grid;\\r\\n    grid-template-columns: repeat(3, 1fr);\\r\\n    grid-template-columns: repeat(4, 1fr);\\r\\n    grid-auto-rows: 1fr;\\r\\n    gap: 8px;\\r\\n}\\r\\n.skill {\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    flex-direction: column;\\r\\n    width: 100%;\\r\\n    max-height: 100%;\\r\\n    gap: 4px;\\r\\n}\\r\\n.skill:hover {\\r\\n    background: rgb(0,0,0);\\r\\n    background: linear-gradient(157deg, rgba(0,0,0,1) 70%, rgb(87, 87, 87) 100%);\\r\\n}\\r\\n\\r\\n/*  PROJECT SECTIONS */\\r\\n.projects-section {\\r\\n    position: relative;\\r\\n    width: 90%;\\r\\n    height: auto;\\r\\n    margin: 32px auto;\\r\\n    padding: 16px 0;\\r\\n}\\r\\n.all-projects {\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    display: grid;\\r\\n    grid-template-columns: 1fr;\\r\\n    grid-template-rows: repeat(5, 450px);\\r\\n    grid-auto-rows: 450px;\\r\\n    gap: 32px;\\r\\n}\\r\\n.project {\\r\\n    position: relative;\\r\\n    width: 100%;\\r\\n    max-height: 100%;\\r\\n    overflow: hidden;\\r\\n    display: grid;\\r\\n    grid-template-columns: 3fr 2fr;\\r\\n    grid-template-rows: 1fr;\\r\\n    gap: 32px;\\r\\n    padding: 32px 0;\\r\\n}\\r\\n.more {\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    width: 250px;\\r\\n    height: 48px;\\r\\n    gap: 12px;\\r\\n    text-decoration: none;\\r\\n    color: var(--themecolor);\\r\\n    font-size: 1.5rem;\\r\\n    font-weight: 700;\\r\\n    margin: 32px auto;\\r\\n    border: 1px solid var(--themecolor);\\r\\n    border-radius: 32px;\\r\\n    transition: all 0.3s ease-in-out;\\r\\n}\\r\\n.more:hover {\\r\\n    scale: 1.05;\\r\\n    scale: 0.95;\\r\\n    background-color: var(--themecolor);\\r\\n    color: black;\\r\\n}\\r\\n.more img {\\r\\n    width: 32px;\\r\\n    height: 32px;\\r\\n}\\r\\n\\r\\n.project .project-banner {\\r\\n    position: relative;\\r\\n    width: 100%;\\r\\n    max-height: 100%;\\r\\n    border: 0.1px solid rgb(39, 39, 39);\\r\\n}\\r\\n.project-banner > img {\\r\\n    left: 0;\\r\\n    top: 0;\\r\\n    max-width: 100%;\\r\\n    height: 100%;\\r\\n    z-index: 3;\\r\\n}\\r\\n.project .project-info {\\r\\n    position: relative;\\r\\n    max-width: 100%;\\r\\n    max-height: 100%;\\r\\n    transition: all 0.3s linear;\\r\\n}\\r\\n.project-info > h3 { \\r\\n    font-size: 2rem;\\r\\n    font-weight: 600;\\r\\n    color: var(--themecolor);\\r\\n    margin: 0 0 8px;\\r\\n}\\r\\n.tools {\\r\\n    max-width: 100%;\\r\\n    height: auto;\\r\\n    display: flex;\\r\\n    justify-content: flex-start;\\r\\n    align-items: center;\\r\\n    flex-wrap: wrap;\\r\\n    font-size: 1.2rem;\\r\\n    font-weight: 700;\\r\\n    color: #fff;\\r\\n    margin: 0 0 16px;\\r\\n    padding: 0 0 8px;\\r\\n    border-bottom: 0.1px solid rgb(39, 39, 39);\\r\\n}\\r\\n.tools h4 {\\r\\n    padding: 0 12px 0 0;\\r\\n    border-right: 1px solid var(--themecolor);\\r\\n    margin-right: 12px;\\r\\n}\\r\\n.project-info > p {\\r\\n    width: 40ch;\\r\\n    font-size: 1.1rem;\\r\\n    line-height: 1.2;\\r\\n    margin: 0 0 32px; \\r\\n}\\r\\n.project-info button {\\r\\n    padding: 8px 16px;\\r\\n    background-color: #000;\\r\\n    border: 2px solid var(--themecolor);\\r\\n    border-radius: 32px;\\r\\n    font-size: 1rem;\\r\\n    font-weight: 600;\\r\\n    display: inline-flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    gap: 8px;\\r\\n    margin: 0 32px 0 0;\\r\\n    cursor: pointer;\\r\\n    transition: all 0.2s ease-in-out;\\r\\n}\\r\\n.project-info button > a {\\r\\n    text-decoration: none;\\r\\n    color: var(--themecolor);\\r\\n}\\r\\n.project-info button:hover {\\r\\n    scale: 0.95;\\r\\n    background-color: var(--themecolor);\\r\\n}\\r\\n.project-info .repo-link {\\r\\n    border: 2px solid rgb(204, 204, 204);\\r\\n}\\r\\n.project-info .repo-link a {\\r\\n    color:rgb(204, 204, 204);\\r\\n}\\r\\n.project-info .repo-link:hover {\\r\\n    background-color: rgb(204, 204, 204);\\r\\n}\\r\\n.project-info button:hover a {\\r\\n    color: black;\\r\\n}\\r\\n.project-info img {\\r\\n    width: 24px;\\r\\n    height: 24px;\\r\\n}\\r\\n/* CONTACT SECTION */\\r\\n.contact-section {\\r\\n    position: relative;\\r\\n    width: 90%;\\r\\n    height: auto;\\r\\n    margin: 32px auto;\\r\\n    padding: 16px 0;\\r\\n}\\r\\n.contact-container {\\r\\n    width: 50%;\\r\\n    margin: 0 auto;\\r\\n    padding: 16px;\\r\\n}\\r\\n.contact-container > p {\\r\\n    font-size: 1.1rem;\\r\\n}\\r\\n.contact-container .contact-form {\\r\\n    width: 100%;\\r\\n    height: 250px;\\r\\n    margin: 32px 0 0;\\r\\n}\\r\\n.contact-form .form-field {\\r\\n    width: 100%;\\r\\n    margin: 12px 0;\\r\\n}\\r\\n.form-field input {\\r\\n    width: 100%;\\r\\n    height: 36px;\\r\\n    background-color: rgb(60, 60, 60);\\r\\n    color: rgb(204, 204, 204);\\r\\n    font-size: 1.2rem;\\r\\n    border: 1px solid #000;\\r\\n    padding: 8px;\\r\\n}\\r\\n.form-field input:focus, .form-field textarea:focus {\\r\\n    border-radius: 0;\\r\\n    outline: none;\\r\\n    border: 1px solid rgb(103, 103, 103);\\r\\n}\\r\\n.form-field textarea {\\r\\n    width: 100%;\\r\\n    height: 80px;\\r\\n    resize: none;\\r\\n    background-color: rgb(60, 60, 60);\\r\\n    color: rgb(204, 204, 204);\\r\\n    border: 1px solid #000;\\r\\n    padding: 8px;\\r\\n}\\r\\n.form-field input::placeholder, .form-field textarea::placeholder {\\r\\n    font-size: 1rem;\\r\\n    font-family: var(--primary-font);\\r\\n    color:rgb(204, 204, 204);\\r\\n}\\r\\n.contact-form button {\\r\\n    padding: 8px 16px;\\r\\n    font-size: 1.2rem;\\r\\n    font-weight: 400;\\r\\n    background-color: var(--themecolor);\\r\\n}\\r\\n.response {\\r\\n    width: max-content;\\r\\n    margin: 16px 0;\\r\\n    color: green;\\r\\n}\\r\\n.footer-section {\\r\\n    position: relative;\\r\\n    background-color: rgb(31, 31, 31);\\r\\n    width: 100%;\\r\\n    height: 200px;\\r\\n    margin: 48px auto 0;\\r\\n    display: flex;\\r\\n    justify-content: space-between;\\r\\n    align-items: center;\\r\\n    flex-direction: column;\\r\\n    padding: 32px 0 12px;\\r\\n}\\r\\n.footer-section img {\\r\\n    width: 64px;\\r\\n    height: 64px;\\r\\n    border-radius: 100%;\\r\\n    transition: all 0.2s ease-in-out;\\r\\n}\\r\\n.footer-section img:hover {\\r\\n    scale: 1.05;\\r\\n}\\r\\n.footer-section .socials {\\r\\n    width: 50%;\\r\\n    height: 64px;\\r\\n    display: flex;\\r\\n    justify-content: space-between;\\r\\n}\\r\\n.footer-section .closing {\\r\\n    color: var(--themecolor);\\r\\n}\\r\\n\\r\\n@media (max-width: 820px) {\\r\\n    .main-page {\\r\\n        padding: 0 8px;\\r\\n        overflow-x: hidden;\\r\\n    }\\r\\n    .nav-bar {\\r\\n        position: fixed;\\r\\n        left: 50%;\\r\\n        transform: translateX(-50%);\\r\\n        width: 95%;\\r\\n        height: 96px;\\r\\n    }\\r\\n    .nav-inner {\\r\\n        border-bottom: .05px solid rgb(87, 87, 87);\\r\\n    }\\r\\n    .menu-items {\\r\\n        position: absolute;\\r\\n        width: 55%;\\r\\n        height: 70vh;\\r\\n        left: 110%;\\r\\n        top: 0;\\r\\n        background-color: rgb(204, 204, 204);\\r\\n        flex-direction: column;\\r\\n        padding: 100px 0;\\r\\n        transition: all 0.3s ease-in-out;\\r\\n    }\\r\\n    .menu-items.show-menu {\\r\\n        left: 50%;\\r\\n    }\\r\\n    .menu-items .item {\\r\\n        color:rgb(0, 0, 0);\\r\\n        font-weight: 700;\\r\\n        font-size: 1.5rem;\\r\\n    }\\r\\n    .hamburger {\\r\\n        position: absolute;\\r\\n        width: 48px;\\r\\n        height: 40px;\\r\\n        display: flex;\\r\\n        justify-content: space-evenly;\\r\\n        flex-direction: column;\\r\\n        align-items: flex-end;\\r\\n        z-index: 6;\\r\\n        right: 16px;\\r\\n    }\\r\\n    .hamburger .line {\\r\\n        width: 80%;\\r\\n        margin: 0 auto;\\r\\n        height: 4px;\\r\\n        background-color:rgb(204, 204, 204);\\r\\n    }\\r\\n    .hamburger.open .three {\\r\\n        display: none;\\r\\n    }\\r\\n    .hamburger.open .one {\\r\\n        transform: rotate(45deg) translateY(5px) translateX(5px);\\r\\n        background-color: black;\\r\\n    }\\r\\n    .hamburger.open .two {\\r\\n        transform: rotate(-45deg) translateY(-5px) translateX(3px);\\r\\n        background-color: black;\\r\\n    }\\r\\n    /* Intro */\\r\\n    .intro {\\r\\n        width: 95%;\\r\\n        min-height: 100vh;\\r\\n        grid-template-columns: repeat(1, 1fr);\\r\\n        margin: 0 auto;\\r\\n    }\\r\\n    .salutation {\\r\\n        align-items: center;\\r\\n    }\\r\\n    section > h2 {\\r\\n        font-size: 3rem;\\r\\n    }\\r\\n    \\r\\n    .image {\\r\\n        display: none;\\r\\n    }\\r\\n\\r\\n    /* ABOUT */\\r\\n    .about-section {\\r\\n        width: 95%;\\r\\n        margin: 0 auto 32px;\\r\\n    }\\r\\n    .about-me {\\r\\n        grid-template-columns: repeat(1, 1fr);\\r\\n        margin: 48px 0 32px;\\r\\n        gap: 48px;\\r\\n        width: 100%;\\r\\n    }\\r\\n    .bio-img-container .bio-img {\\r\\n        width: 200px;\\r\\n        height: 200px;\\r\\n    }\\r\\n    .description {\\r\\n        font-size: 1.5rem;\\r\\n    }\\r\\n    .skills-section {\\r\\n        grid-template-columns: repeat(4, 1fr);\\r\\n        grid-template-columns: repeat(3, 1fr);\\r\\n        gap: 32px;\\r\\n    }\\r\\n    .skill {\\r\\n        font-size: 1.2rem;\\r\\n    }\\r\\n\\r\\n    /* PROJECTS */\\r\\n    .projects-section {\\r\\n        width: 95%;\\r\\n    }\\r\\n    .more {\\r\\n        display: flex;\\r\\n        justify-content: center;\\r\\n        align-items: center;\\r\\n        width: 250px;\\r\\n        height: 48px;\\r\\n        gap: 12px;\\r\\n        text-decoration: none;\\r\\n        color: var(--themecolor);\\r\\n        font-size: 1.5rem;\\r\\n        font-weight: 700;\\r\\n        margin: 64px auto 0;\\r\\n        border: 1px solid var(--themecolor);\\r\\n        border-radius: 32px;\\r\\n        transition: all 0.3s ease-in-out;\\r\\n    }\\r\\n    .all-projects {\\r\\n        grid-template-rows: repeat(5, auto);\\r\\n        grid-auto-rows: auto;\\r\\n        gap: 80px;\\r\\n        margin: 32px 0 0;\\r\\n    }\\r\\n    .project {\\r\\n        grid-template-columns: 1fr;\\r\\n        gap: 24px;\\r\\n        padding: 0;\\r\\n    }\\r\\n    .tools {\\r\\n        margin: 0 0 8px;\\r\\n        font-size: 1.1rem;\\r\\n    }\\r\\n    \\r\\n    .project-info > p {\\r\\n        width: 60ch;\\r\\n    }\\r\\n    /* CONTACT */\\r\\n    .contact-section {\\r\\n        width: 95%;\\r\\n    }\\r\\n    .contact-container {\\r\\n        width: 80%;\\r\\n    }\\r\\n    /* FOOTER */\\r\\n    .footer-section img {\\r\\n        width: 48px;\\r\\n        height: 48px;\\r\\n    }\\r\\n    .footer-section .socials {\\r\\n        width: 70%;\\r\\n        align-items: center;\\r\\n    }\\r\\n}\\r\\n@media (max-width: 480px) {\\r\\n    /* Nav */\\r\\n    .nav-bar {\\r\\n        height: 80px;\\r\\n    }\\r\\n    .nav-inner {\\r\\n        border-bottom: .05px solid rgb(87, 87, 87);\\r\\n        width: 100%;\\r\\n    }\\r\\n    .logo-link {\\r\\n        font-size: 1.1rem;\\r\\n    }\\r\\n    .hamburger {\\r\\n        width: 40px;\\r\\n        height: 32px;\\r\\n        right: 0;\\r\\n    }\\r\\n    .menu-items .item {\\r\\n        font-size: 1.2rem;\\r\\n    } \\r\\n    /* Introduction */\\r\\n    .salutation > h3 {\\r\\n        font-size: 1.2rem;\\r\\n        font-weight: 600;\\r\\n        padding: 0 0 20px;\\r\\n    }\\r\\n    .salutation > h1 {\\r\\n        font-size: 1.5rem;\\r\\n        font-weight: 700;\\r\\n        padding: 0 0 20px;\\r\\n    }\\r\\n    /* About */\\r\\n    .description {\\r\\n        font-size: 1.2rem;\\r\\n    }\\r\\n    .skill {\\r\\n        font-size: 1rem;\\r\\n    }\\r\\n    /* Projects */\\r\\n    .project-info > p {\\r\\n        width: 100%;\\r\\n    }\\r\\n    .tools {\\r\\n        font-size: 1rem;\\r\\n    }\\r\\n    /* CONTACT */\\r\\n    .contact-container {\\r\\n        width: 100%;\\r\\n    }\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://portfolio/./src/styles/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://portfolio/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://portfolio/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://portfolio/./src/styles/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://portfolio/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://portfolio/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://portfolio/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://portfolio/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://portfolio/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://portfolio/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/assets/api.png":
/*!****************************!*\
  !*** ./src/assets/api.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e849302c953d585495d5.png\";\n\n//# sourceURL=webpack://portfolio/./src/assets/api.png?");

/***/ }),

/***/ "./src/assets/cart.png":
/*!*****************************!*\
  !*** ./src/assets/cart.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4e395257f077b77d322b.png\";\n\n//# sourceURL=webpack://portfolio/./src/assets/cart.png?");

/***/ }),

/***/ "./src/assets/css-ico.png":
/*!********************************!*\
  !*** ./src/assets/css-ico.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fa095f034bb9858f9864.png\";\n\n//# sourceURL=webpack://portfolio/./src/assets/css-ico.png?");

/***/ }),

/***/ "./src/assets/cv-gen.png":
/*!*******************************!*\
  !*** ./src/assets/cv-gen.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bdcedf5fff14ab31f771.png\";\n\n//# sourceURL=webpack://portfolio/./src/assets/cv-gen.png?");

/***/ }),

/***/ "./src/assets/express.png":
/*!********************************!*\
  !*** ./src/assets/express.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1d0c3057b88879fb0a7e.png\";\n\n//# sourceURL=webpack://portfolio/./src/assets/express.png?");

/***/ }),

/***/ "./src/assets/flask.png":
/*!******************************!*\
  !*** ./src/assets/flask.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fff2d729732b4aec3d24.png\";\n\n//# sourceURL=webpack://portfolio/./src/assets/flask.png?");

/***/ }),

/***/ "./src/assets/git.png":
/*!****************************!*\
  !*** ./src/assets/git.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b9d0da1dba1e42bba819.png\";\n\n//# sourceURL=webpack://portfolio/./src/assets/git.png?");

/***/ }),

/***/ "./src/assets/github-b.png":
/*!*********************************!*\
  !*** ./src/assets/github-b.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f3e588dcb0f6015280e3.png\";\n\n//# sourceURL=webpack://portfolio/./src/assets/github-b.png?");

/***/ }),

/***/ "./src/assets/github.png":
/*!*******************************!*\
  !*** ./src/assets/github.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d44220b54dbd24c89603.png\";\n\n//# sourceURL=webpack://portfolio/./src/assets/github.png?");

/***/ }),

/***/ "./src/assets/html.png":
/*!*****************************!*\
  !*** ./src/assets/html.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fb36d4274d32a2d24ff6.png\";\n\n//# sourceURL=webpack://portfolio/./src/assets/html.png?");

/***/ }),

/***/ "./src/assets/javascript.png":
/*!***********************************!*\
  !*** ./src/assets/javascript.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6f2542e11ce79bd88aa8.png\";\n\n//# sourceURL=webpack://portfolio/./src/assets/javascript.png?");

/***/ }),

/***/ "./src/assets/keep.png":
/*!*****************************!*\
  !*** ./src/assets/keep.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"57e29925e17b0f0e523e.png\";\n\n//# sourceURL=webpack://portfolio/./src/assets/keep.png?");

/***/ }),

/***/ "./src/assets/linkedin.png":
/*!*********************************!*\
  !*** ./src/assets/linkedin.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"585bd5b02a01f47a98ec.png\";\n\n//# sourceURL=webpack://portfolio/./src/assets/linkedin.png?");

/***/ }),

/***/ "./src/assets/loader.gif":
/*!*******************************!*\
  !*** ./src/assets/loader.gif ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8d2d8bb706ab5c58e809.gif\";\n\n//# sourceURL=webpack://portfolio/./src/assets/loader.gif?");

/***/ }),

/***/ "./src/assets/mongodb.png":
/*!********************************!*\
  !*** ./src/assets/mongodb.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a1aa0edd4cbd4503162b.png\";\n\n//# sourceURL=webpack://portfolio/./src/assets/mongodb.png?");

/***/ }),

/***/ "./src/assets/my_potrait.png":
/*!***********************************!*\
  !*** ./src/assets/my_potrait.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"267c35cbff5a61c331fb.png\";\n\n//# sourceURL=webpack://portfolio/./src/assets/my_potrait.png?");

/***/ }),

/***/ "./src/assets/node.png":
/*!*****************************!*\
  !*** ./src/assets/node.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"746a9b48f7896eb1c79f.png\";\n\n//# sourceURL=webpack://portfolio/./src/assets/node.png?");

/***/ }),

/***/ "./src/assets/open.png":
/*!*****************************!*\
  !*** ./src/assets/open.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fee4631d5b0bfaee2e27.png\";\n\n//# sourceURL=webpack://portfolio/./src/assets/open.png?");

/***/ }),

/***/ "./src/assets/python.png":
/*!*******************************!*\
  !*** ./src/assets/python.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"827d24953da67d0a0c3d.png\";\n\n//# sourceURL=webpack://portfolio/./src/assets/python.png?");

/***/ }),

/***/ "./src/assets/react.png":
/*!******************************!*\
  !*** ./src/assets/react.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"61a1404ec0f3a60111dc.png\";\n\n//# sourceURL=webpack://portfolio/./src/assets/react.png?");

/***/ }),

/***/ "./src/assets/sql.png":
/*!****************************!*\
  !*** ./src/assets/sql.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1f4c198b99c5f2d5bf85.png\";\n\n//# sourceURL=webpack://portfolio/./src/assets/sql.png?");

/***/ }),

/***/ "./src/assets/todo.png":
/*!*****************************!*\
  !*** ./src/assets/todo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"602084f9c0b70834a12f.png\";\n\n//# sourceURL=webpack://portfolio/./src/assets/todo.png?");

/***/ }),

/***/ "./src/assets/twitter.png":
/*!********************************!*\
  !*** ./src/assets/twitter.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4c7297c6c2aa56b46ac8.png\";\n\n//# sourceURL=webpack://portfolio/./src/assets/twitter.png?");

/***/ }),

/***/ "./src/assets/weather.png":
/*!********************************!*\
  !*** ./src/assets/weather.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"58cec8215a83067a2a6a.png\";\n\n//# sourceURL=webpack://portfolio/./src/assets/weather.png?");

/***/ }),

/***/ "./src/assets/webpack.png":
/*!********************************!*\
  !*** ./src/assets/webpack.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5e762358e82ff6ab86c6.png\";\n\n//# sourceURL=webpack://portfolio/./src/assets/webpack.png?");

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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/manageImages.js");
/******/ 	
/******/ })()
;