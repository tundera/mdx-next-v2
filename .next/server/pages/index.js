module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.mdx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.mdx":
/*!*************************!*\
  !*** ./pages/index.mdx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MDXContent; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mdx-js/react */ \"@mdx-js/react\");\n/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/philip.johnston/Tundera/projects/mdx/mdx-next-v2/pages/index.mdx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n/* @jsx mdx */\n\nconst makeShortcode = name => function MDXDefaultShortcode(props) {\n  console.warn(\"Component \" + name + \" was not imported, exported, or provided by MDXProvider as global scope\");\n  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(\"div\", _extends({}, props, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 10\n    }\n  }));\n};\n\nconst SubmitButton = makeShortcode(\"SubmitButton\");\nconst MDXLayout = \"wrapper\";\nfunction MDXContent(_ref) {\n  let {\n    components\n  } = _ref,\n      props = _objectWithoutProperties(_ref, [\"components\"]);\n\n  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(MDXLayout, _extends({}, props, {\n    components: components,\n    mdxType: \"MDXLayout\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 10\n    }\n  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 5\n    }\n  }, `👋 Hello, world`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 5\n    }\n  }, `This is MDX!`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(SubmitButton, {\n    mdxType: \"SubmitButton\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 5\n    }\n  }));\n}\n;\nMDXContent.isMDXComponent = true;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5tZHg/YzQ0OCJdLCJuYW1lcyI6WyJtYWtlU2hvcnRjb2RlIiwibmFtZSIsIk1EWERlZmF1bHRTaG9ydGNvZGUiLCJwcm9wcyIsImNvbnNvbGUiLCJ3YXJuIiwiU3VibWl0QnV0dG9uIiwiTURYTGF5b3V0IiwiTURYQ29udGVudCIsImNvbXBvbmVudHMiLCJpc01EWENvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBOztBQUdBLE1BQU1BLGFBQWEsR0FBR0MsSUFBSSxJQUFJLFNBQVNDLG1CQUFULENBQTZCQyxLQUE3QixFQUFvQztBQUNoRUMsU0FBTyxDQUFDQyxJQUFSLENBQWEsZUFBZUosSUFBZixHQUFzQix5RUFBbkM7QUFDQSxTQUFPLDhFQUFTRSxLQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUDtBQUNELENBSEQ7O0FBSUEsTUFBTUcsWUFBWSxHQUFHTixhQUFhLENBQUMsY0FBRCxDQUFsQztBQUNBLE1BQU1PLFNBQVMsR0FBRyxTQUFsQjtBQUNlLFNBQVNDLFVBQVQsT0FHWjtBQUFBLE1BSGdDO0FBQ2pDQztBQURpQyxHQUdoQztBQUFBLE1BREVOLEtBQ0Y7O0FBQ0QsU0FBTywwREFBQyxTQUFELGVBQWVBLEtBQWY7QUFBc0IsY0FBVSxFQUFFTSxVQUFsQztBQUE4QyxXQUFPLEVBQUMsV0FBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUNMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTSxpQkFBTixDQURLLEVBRUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLLGNBQUwsQ0FGSyxFQUdMLDBEQUFDLFlBQUQ7QUFBYyxXQUFPLEVBQUMsY0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhLLENBQVA7QUFLRDtBQUVEO0FBQ0FELFVBQVUsQ0FBQ0UsY0FBWCxHQUE0QixJQUE1QiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4Lm1keC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbWR4IH0gZnJvbSAnQG1keC1qcy9yZWFjdCdcblxuLyogQGpzeCBtZHggKi9cblxuXG5jb25zdCBtYWtlU2hvcnRjb2RlID0gbmFtZSA9PiBmdW5jdGlvbiBNRFhEZWZhdWx0U2hvcnRjb2RlKHByb3BzKSB7XG4gIGNvbnNvbGUud2FybihcIkNvbXBvbmVudCBcIiArIG5hbWUgKyBcIiB3YXMgbm90IGltcG9ydGVkLCBleHBvcnRlZCwgb3IgcHJvdmlkZWQgYnkgTURYUHJvdmlkZXIgYXMgZ2xvYmFsIHNjb3BlXCIpXG4gIHJldHVybiA8ZGl2IHsuLi5wcm9wc30vPlxufTtcbmNvbnN0IFN1Ym1pdEJ1dHRvbiA9IG1ha2VTaG9ydGNvZGUoXCJTdWJtaXRCdXR0b25cIik7XG5jb25zdCBNRFhMYXlvdXQgPSBcIndyYXBwZXJcIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTURYQ29udGVudCh7XG4gIGNvbXBvbmVudHMsXG4gIC4uLnByb3BzXG59KSB7XG4gIHJldHVybiA8TURYTGF5b3V0IHsuLi5wcm9wc30gY29tcG9uZW50cz17Y29tcG9uZW50c30gbWR4VHlwZT1cIk1EWExheW91dFwiPlxuICAgIDxoMT57YPCfkYsgSGVsbG8sIHdvcmxkYH08L2gxPlxuICAgIDxwPntgVGhpcyBpcyBNRFghYH08L3A+XG4gICAgPFN1Ym1pdEJ1dHRvbiBtZHhUeXBlPVwiU3VibWl0QnV0dG9uXCIgLz5cbiAgPC9NRFhMYXlvdXQ+O1xufVxuXG47XG5NRFhDb250ZW50LmlzTURYQ29tcG9uZW50ID0gdHJ1ZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.mdx\n");

/***/ }),

/***/ "@mdx-js/react":
/*!********************************!*\
  !*** external "@mdx-js/react" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@mdx-js/react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWR4LWpzL3JlYWN0XCI/M2UxMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAbWR4LWpzL3JlYWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1keC1qcy9yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@mdx-js/react\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });