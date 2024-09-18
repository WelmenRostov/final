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

/***/ "./js/buttons.js":
/*!***********************!*\
  !*** ./js/buttons.js ***!
  \***********************/
/***/ (() => {

eval("function SwiperRead() {\r\n    let elem = document.querySelector('#swiperWrapper');\r\n    let img = document.querySelector('#swiperImg');\r\n    let p = document.querySelector('#swiperP');\r\n    elem.classList.toggle('mod__wraperopen');\r\n    img.classList.toggle('rotate')\r\n    if (p.innerHTML === 'Показать все') {\r\n        p.innerHTML = 'Скрыть';\r\n        img.style.marginLeft = \"-51px\";\r\n        p.style.paddingLeft = \"0px\";\r\n    } else {\r\n        p.innerHTML = 'Показать все';\r\n        img.style.marginLeft = \"-76px\";\r\n        p.style.paddingLeft = \"0px\";\r\n    }\r\n}\r\n\r\nfunction SwiperTRead() {\r\n    let elem = document.querySelector('#swiperTWrapper');\r\n    let img = document.querySelector('#swiperTImg');\r\n    let p = document.querySelector('#swiperTP');\r\n    elem.classList.toggle('mod__wraperopen');\r\n    img.classList.toggle('rotate')\r\n    if (p.innerHTML === 'Показать все') {\r\n        p.innerHTML = 'Скрыть';\r\n        img.style.marginLeft = \"-51px\";\r\n        p.style.paddingLeft = \"0px\";\r\n    } else {\r\n        p.innerHTML = 'Показать все';\r\n        img.style.marginLeft = \"-76px\";\r\n        p.style.paddingLeft = \"0px\";\r\n    }\r\n}\r\n\r\nfunction ButtonRead() {\r\n    let elem = document.querySelector('#info-text__container');\r\n    let img = document.querySelector('#contentImg');\r\n    let p = document.querySelector('#contentP');\r\n    elem.classList.toggle('mod__text-open');\r\n    img.classList.toggle('rotate')\r\n    if (p.innerHTML === 'Читать далее') {\r\n        p.innerHTML = 'Свернуть';\r\n        img.style.marginLeft = \"-61px\";\r\n        p.style.paddingLeft = \"0px\";\r\n    } else {\r\n        p.innerHTML = 'Читать далее';\r\n        img.style.marginLeft = \"-76px\";\r\n        p.style.paddingLeft = \"0px\";\r\n    }\r\n}\r\n\r\nfunction MenuOn() {\r\n    let elem = document.querySelector('#menuID');\r\n    elem.classList.toggle('menu');\r\n    elem.classList.toggle('open-menu')\r\n}\r\nfunction CallOn() {\r\n    let elem = document.querySelector('#call-sheet');\r\n    elem.classList.toggle('call-sheet__status');\r\n}\r\nfunction CommunicationOn() {\r\n    let elem = document.querySelector('#сommunication-sheet');\r\n    elem.classList.toggle('сommunication-sheet__status');\r\n}\r\n\r\nwindow.CallOn = CallOn;\r\nwindow.CommunicationOn = CommunicationOn;\r\nwindow.MenuOn = MenuOn;\r\nwindow.ButtonRead = ButtonRead;\r\nwindow.SwiperTRead = SwiperTRead;\r\nwindow.SwiperRead = SwiperRead\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./js/buttons.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/buttons.js"]();
/******/ 	
/******/ })()
;