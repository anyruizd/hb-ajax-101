/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Button_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_DataRetriever_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_CardsController_js__ = __webpack_require__(3);




const URL = 'https://jsonplaceholder.typicode.com/posts/'
const cardsController = new __WEBPACK_IMPORTED_MODULE_2__components_CardsController_js__["a" /* default */](document.querySelector('.card-controller'))
const b = new __WEBPACK_IMPORTED_MODULE_0__components_Button_js__["a" /* Button */] (document.querySelector('.btn'), () => {
    __WEBPACK_IMPORTED_MODULE_1__components_DataRetriever_js__["a" /* default */].get(URL, (data) => {
        cardsController.build(data)
    })
})

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Button {
    constructor (node, callback) {
        this.node = node
        this.callback = callback
        this.bindEvent()
    }

    bindEvent () {
        this.node.addEventListener('click', this.callback)
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Button;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class DataRetriever {
    static get (url, callback) {
    /* var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', (response) => {
        callback (response.currentTarget.response)
    });
    oReq.responseType = 'json'
    oReq.open('GET', url);
    oReq.send();
    } */
    fetch(url)
    .then((response) => {
        return response.json()
    })  
    .then(callback)
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = DataRetriever;



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__InfoCards_js__ = __webpack_require__(4);


class CardsController {
    constructor (node) {
        this.node = node
    }
    build (data) {
        const arr = data.map((item) => {
            return __WEBPACK_IMPORTED_MODULE_0__InfoCards_js__["a" /* default */].getString(item)
        }).join('')
        this.node.innerHTML = arr
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CardsController;
   

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class InfoCards {
    static getString ({title, body}) {
        return (
            `<article>
                <h2>${title}</h2>
                <p>${body}</p>
            </article>`
        )
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = InfoCards;


/***/ })
/******/ ]);