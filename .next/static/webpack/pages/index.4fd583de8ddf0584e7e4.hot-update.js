webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.mdx":
/*!*************************!*\
  !*** ./pages/index.mdx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MDXContent; });\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdx-js/react */ \"./node_modules/@mdx-js/react/dist/esm.js\");\n\n\nvar _jsxFileName = \"/Users/philip.johnston/Tundera/projects/mdx/mdx-next-v2/pages/index.mdx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n/* @jsx mdx */\n\nvar makeShortcode = function makeShortcode(name) {\n  return function MDXDefaultShortcode(props) {\n    console.warn(\"Component \" + name + \" was not imported, exported, or provided by MDXProvider as global scope\");\n    return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"div\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, props, {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 10\n      }\n    }));\n  };\n};\n\nvar SubmitButton = makeShortcode(\"SubmitButton\");\n_c = SubmitButton;\nvar MDXLayout = \"wrapper\";\nfunction MDXContent(_ref) {\n  var components = _ref.components,\n      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref, [\"components\"]);\n\n  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(MDXLayout, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, props, {\n    components: components,\n    mdxType: \"MDXLayout\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 10\n    }\n  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 5\n    }\n  }, \"\\uD83D\\uDC4B Hello, world\"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 5\n    }\n  }, \"This is MDX!\"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(SubmitButton, {\n    mdxType: \"SubmitButton\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 5\n    }\n  }));\n}\n_c2 = MDXContent;\n;\nMDXContent.isMDXComponent = true;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"SubmitButton\");\n$RefreshReg$(_c2, \"MDXContent\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgubWR4P2M0NDgiXSwibmFtZXMiOlsibWFrZVNob3J0Y29kZSIsIm5hbWUiLCJNRFhEZWZhdWx0U2hvcnRjb2RlIiwicHJvcHMiLCJjb25zb2xlIiwid2FybiIsIlN1Ym1pdEJ1dHRvbiIsIk1EWExheW91dCIsIk1EWENvbnRlbnQiLCJjb21wb25lbnRzIiwiaXNNRFhDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBOztBQUdBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQUMsSUFBSTtBQUFBLFNBQUksU0FBU0MsbUJBQVQsQ0FBNkJDLEtBQTdCLEVBQW9DO0FBQ2hFQyxXQUFPLENBQUNDLElBQVIsQ0FBYSxlQUFlSixJQUFmLEdBQXNCLHlFQUFuQztBQUNBLFdBQU8sd0pBQVNFLEtBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFQO0FBQ0QsR0FIeUI7QUFBQSxDQUExQjs7QUFJQSxJQUFNRyxZQUFZLEdBQUdOLGFBQWEsQ0FBQyxjQUFELENBQWxDO0tBQU1NLFk7QUFDTixJQUFNQyxTQUFTLEdBQUcsU0FBbEI7QUFDZSxTQUFTQyxVQUFULE9BR1o7QUFBQSxNQUZEQyxVQUVDLFFBRkRBLFVBRUM7QUFBQSxNQURFTixLQUNGOztBQUNELFNBQU8sMERBQUMsU0FBRCx5RkFBZUEsS0FBZjtBQUFzQixjQUFVLEVBQUVNLFVBQWxDO0FBQThDLFdBQU8sRUFBQyxXQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQ0w7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FESyxFQUVMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkssRUFHTCwwREFBQyxZQUFEO0FBQWMsV0FBTyxFQUFDLGNBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFISyxDQUFQO0FBS0Q7TUFUdUJELFU7QUFXeEI7QUFDQUEsVUFBVSxDQUFDRSxjQUFYLEdBQTRCLElBQTVCIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgubWR4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtZHggfSBmcm9tICdAbWR4LWpzL3JlYWN0J1xuXG4vKiBAanN4IG1keCAqL1xuXG5cbmNvbnN0IG1ha2VTaG9ydGNvZGUgPSBuYW1lID0+IGZ1bmN0aW9uIE1EWERlZmF1bHRTaG9ydGNvZGUocHJvcHMpIHtcbiAgY29uc29sZS53YXJuKFwiQ29tcG9uZW50IFwiICsgbmFtZSArIFwiIHdhcyBub3QgaW1wb3J0ZWQsIGV4cG9ydGVkLCBvciBwcm92aWRlZCBieSBNRFhQcm92aWRlciBhcyBnbG9iYWwgc2NvcGVcIilcbiAgcmV0dXJuIDxkaXYgey4uLnByb3BzfS8+XG59O1xuY29uc3QgU3VibWl0QnV0dG9uID0gbWFrZVNob3J0Y29kZShcIlN1Ym1pdEJ1dHRvblwiKTtcbmNvbnN0IE1EWExheW91dCA9IFwid3JhcHBlclwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNRFhDb250ZW50KHtcbiAgY29tcG9uZW50cyxcbiAgLi4ucHJvcHNcbn0pIHtcbiAgcmV0dXJuIDxNRFhMYXlvdXQgey4uLnByb3BzfSBjb21wb25lbnRzPXtjb21wb25lbnRzfSBtZHhUeXBlPVwiTURYTGF5b3V0XCI+XG4gICAgPGgxPntg8J+RiyBIZWxsbywgd29ybGRgfTwvaDE+XG4gICAgPHA+e2BUaGlzIGlzIE1EWCFgfTwvcD5cbiAgICA8U3VibWl0QnV0dG9uIG1keFR5cGU9XCJTdWJtaXRCdXR0b25cIiAvPlxuICA8L01EWExheW91dD47XG59XG5cbjtcbk1EWENvbnRlbnQuaXNNRFhDb21wb25lbnQgPSB0cnVlOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.mdx\n");

/***/ })

})