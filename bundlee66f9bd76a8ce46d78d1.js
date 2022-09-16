/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// Preloader\nvar preloader = document.querySelector(\".preload\");\nwindow.addEventListener(\"load\", function () {\n  setTimeout(function () {\n    preloader.classList.add(\"hide-loader\");\n  }, 3000);\n}); // Scroll\n\nvar allSections = document.querySelectorAll(\"section[id]\");\n\nvar handleScroll = function handleScroll() {\n  var scrollY = window.pageYOffset;\n  allSections.forEach(function (current) {\n    var sectionHeight = current.offsetHeight;\n    var sectionTop = current.getBoundingClientRect().top + window.pageYOffset - 50;\n    var sectionId = current.getAttribute(\"id\");\n\n    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {\n      document.querySelector(\"a[href=\\\"#\".concat(sectionId, \"\\\"]\")).classList.add(\"current\");\n    } else {\n      document.querySelector(\"a[href=\\\"#\".concat(sectionId, \"\\\"]\")).classList.remove(\"current\");\n    }\n  });\n};\n\nwindow.addEventListener('scroll', handleScroll); //Get Date\n\nvar date = new Date();\nvar year = date.getFullYear();\nvar footer = document.querySelector(\".closing\");\nfooter.textContent = \"\\u24B8 Regan Muthomi | \".concat(year); //Form Input\n\nvar contactForm = document.querySelector(\"#contact-form\");\nvar response = document.querySelector(\".response\");\ncontactForm.addEventListener(\"submit\", function (e) {\n  e.preventDefault();\n  e.target.name.value = \"\";\n  e.target.email.value = \"\";\n  e.target.message.value = \"\";\n  response.textContent = \"Thank you for contacting me.\";\n}); //Mobile Nav\n\nvar hamburger = document.querySelector(\".hamburger\");\nvar menuItems = document.querySelector(\".menu-items\");\nhamburger.addEventListener(\"click\", function () {\n  hamburger.classList.toggle(\"open\");\n  menuItems.classList.contains(\"show-menu\") ? menuItems.classList.remove(\"show-menu\") : menuItems.classList.add(\"show-menu\");\n}); //Close Menu when link is clisked\n\nvar itemsLinks = document.querySelectorAll(\".item\");\nitemsLinks.forEach(function (link) {\n  link.addEventListener(\"click\", function () {\n    menuItems.classList.remove(\"show-menu\");\n    hamburger.classList.remove(\"open\");\n  });\n});\n\n//# sourceURL=webpack://portfolio/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;