"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/apollo.ts":
/*!***********************!*\
  !*** ./src/apollo.ts ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initializeApollo\": function() { return /* binding */ initializeApollo; },\n/* harmony export */   \"useApollo\": function() { return /* binding */ useApollo; }\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _s = $RefreshSig$();\n\n\n\nvar apolloClient;\n\nfunction createIsomorphicLink() {\n  if (false) { var schema, SchemaLink; } else {\n    var _require = __webpack_require__(/*! @apollo/client/link/http */ \"./node_modules/@apollo/client/link/http/index.js\"),\n        HttpLink = _require.HttpLink;\n\n    return new HttpLink({\n      uri: \"http://localhost:3000/api/graphql\"\n    });\n  }\n}\n\nfunction createApolloClient() {\n  console.log(createIsomorphicLink());\n  return new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloClient({\n    ssrMode: false,\n    link: createIsomorphicLink(),\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.InMemoryCache()\n  });\n}\n\nfunction initializeApollo() {\n  var _apolloClient2, _apolloClient3;\n\n  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n\n  var _apolloClient = (_apolloClient2 = apolloClient) !== null && _apolloClient2 !== void 0 ? _apolloClient2 : createApolloClient();\n\n  if (initialState) {\n    _apolloClient.cache.restore(initialState);\n  }\n\n  if (false) {}\n  apolloClient = (_apolloClient3 = apolloClient) !== null && _apolloClient3 !== void 0 ? _apolloClient3 : _apolloClient;\n  return apolloClient;\n}\nfunction useApollo(initialState) {\n  _s();\n\n  var store = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {\n    return initializeApollo(initialState);\n  }, [initialState]);\n  return store;\n}\n\n_s(useApollo, \"K8ucUnUnAgJZGJWAL9Ze8IHCmoQ=\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBvbGxvLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFLQTtBQUVBLElBQUlHLFlBQUo7O0FBQ0EsU0FBU0Msb0JBQVQsR0FBZ0M7QUFDOUIsYUFBaUMsMkJBQWpDLE1BTU87QUFBQSxtQkFDZ0JJLG1CQUFPLENBQUMsa0ZBQUQsQ0FEdkI7QUFBQSxRQUNHRSxRQURILFlBQ0dBLFFBREg7O0FBRUwsV0FBTyxJQUFJQSxRQUFKLENBQWE7QUFBRUMsTUFBQUEsR0FBRyxFQUFFO0FBQVAsS0FBYixDQUFQO0FBQ0Q7QUFDRjs7QUFFRCxTQUFTQyxrQkFBVCxHQUE4QjtBQUM1QlAsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLG9CQUFvQixFQUFoQztBQUNBLFNBQU8sSUFBSUosd0RBQUosQ0FBaUI7QUFDdEJhLElBQUFBLE9BQU8sT0FEZTtBQUV0QkMsSUFBQUEsSUFBSSxFQUFFVixvQkFBb0IsRUFGSjtBQUd0QlcsSUFBQUEsS0FBSyxFQUFFLElBQUlkLHlEQUFKO0FBSGUsR0FBakIsQ0FBUDtBQUtEOztBQUNNLFNBQVNlLGdCQUFULEdBQW9EO0FBQUE7O0FBQUEsTUFBMUJDLFlBQTBCLHVFQUFOLElBQU07O0FBQ3pELE1BQU1DLGFBQWEscUJBQUdmLFlBQUgsMkRBQW1CUyxrQkFBa0IsRUFBeEQ7O0FBQ0EsTUFBSUssWUFBSixFQUFrQjtBQUNoQkMsSUFBQUEsYUFBYSxDQUFDSCxLQUFkLENBQW9CSSxPQUFwQixDQUE0QkYsWUFBNUI7QUFDRDs7QUFFRCxhQUFpQztBQUNqQ2QsRUFBQUEsWUFBWSxxQkFBR0EsWUFBSCwyREFBbUJlLGFBQS9CO0FBQ0EsU0FBT2YsWUFBUDtBQUNEO0FBQ00sU0FBU2lCLFNBQVQsQ0FBbUJILFlBQW5CLEVBQXNDO0FBQUE7O0FBQzNDLE1BQU1JLEtBQUssR0FBR25CLDhDQUFPLENBQUM7QUFBQSxXQUFNYyxnQkFBZ0IsQ0FBQ0MsWUFBRCxDQUF0QjtBQUFBLEdBQUQsRUFBdUMsQ0FBQ0EsWUFBRCxDQUF2QyxDQUFyQjtBQUNBLFNBQU9JLEtBQVA7QUFDRDs7R0FIZUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2Fwb2xsby50cz9kZTE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFwb2xsb0NsaWVudCxcbiAgSW5NZW1vcnlDYWNoZSxcbiAgTm9ybWFsaXplZENhY2hlT2JqZWN0LFxufSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCB7IHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcblxubGV0IGFwb2xsb0NsaWVudDogQXBvbGxvQ2xpZW50PE5vcm1hbGl6ZWRDYWNoZU9iamVjdD47XG5mdW5jdGlvbiBjcmVhdGVJc29tb3JwaGljTGluaygpIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zb2xlLmxvZygnc2VydmVyJyk7XG4gICAgY29uc3QgU2NoZW1hTGluayA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudC9saW5rL3NjaGVtYVwiKTtcbiAgICBjb25zdCBzY2hlbWEgPSByZXF1aXJlKFwiLi9zY2hlbWFcIik7XG5cbiAgICByZXR1cm4gbmV3IFNjaGVtYUxpbmsoeyBzY2hlbWEgfSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgeyBIdHRwTGluayB9ID0gcmVxdWlyZShcIkBhcG9sbG8vY2xpZW50L2xpbmsvaHR0cFwiKTtcbiAgICByZXR1cm4gbmV3IEh0dHBMaW5rKHsgdXJpOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvZ3JhcGhxbFwiIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFwb2xsb0NsaWVudCgpIHtcbiAgY29uc29sZS5sb2coY3JlYXRlSXNvbW9ycGhpY0xpbmsoKSk7XG4gIHJldHVybiBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgICBzc3JNb2RlOiB0eXBlb2Ygd2luZG93ID09PSB1bmRlZmluZWQsXG4gICAgbGluazogY3JlYXRlSXNvbW9ycGhpY0xpbmsoKSxcbiAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKVxufSlcbn1cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplQXBvbGxvKGluaXRpYWxTdGF0ZTogYW55ID0gbnVsbCkge1xuICBjb25zdCBfYXBvbGxvQ2xpZW50ID0gYXBvbGxvQ2xpZW50ID8/IGNyZWF0ZUFwb2xsb0NsaWVudCgpO1xuICBpZiAoaW5pdGlhbFN0YXRlKSB7XG4gICAgX2Fwb2xsb0NsaWVudC5jYWNoZS5yZXN0b3JlKGluaXRpYWxTdGF0ZSk7XG4gIH1cblxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gdW5kZWZpbmVkKSByZXR1cm4gX2Fwb2xsb0NsaWVudDtcbiAgYXBvbGxvQ2xpZW50ID0gYXBvbGxvQ2xpZW50ID8/IF9hcG9sbG9DbGllbnQ7XG4gIHJldHVybiBhcG9sbG9DbGllbnQ7XG59XG5leHBvcnQgZnVuY3Rpb24gdXNlQXBvbGxvKGluaXRpYWxTdGF0ZTogYW55KSB7XG4gIGNvbnN0IHN0b3JlID0gdXNlTWVtbygoKSA9PiBpbml0aWFsaXplQXBvbGxvKGluaXRpYWxTdGF0ZSksIFtpbml0aWFsU3RhdGVdKTtcbiAgcmV0dXJuIHN0b3JlO1xufVxuIl0sIm5hbWVzIjpbIkFwb2xsb0NsaWVudCIsIkluTWVtb3J5Q2FjaGUiLCJ1c2VNZW1vIiwiYXBvbGxvQ2xpZW50IiwiY3JlYXRlSXNvbW9ycGhpY0xpbmsiLCJjb25zb2xlIiwibG9nIiwiU2NoZW1hTGluayIsInJlcXVpcmUiLCJzY2hlbWEiLCJIdHRwTGluayIsInVyaSIsImNyZWF0ZUFwb2xsb0NsaWVudCIsInNzck1vZGUiLCJsaW5rIiwiY2FjaGUiLCJpbml0aWFsaXplQXBvbGxvIiwiaW5pdGlhbFN0YXRlIiwiX2Fwb2xsb0NsaWVudCIsInJlc3RvcmUiLCJ1c2VBcG9sbG8iLCJzdG9yZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/apollo.ts\n");

/***/ })

});