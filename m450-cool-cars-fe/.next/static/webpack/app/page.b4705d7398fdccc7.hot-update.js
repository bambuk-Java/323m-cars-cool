"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.js":
/*!*************************!*\
  !*** ./src/app/page.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_carform_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/carform/page */ \"(app-pages-browser)/./src/app/carform/page.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const [cars, setCars] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    function buttonHandler() {\n        fetch(\"http://localhost:8080/cars\").then((response)=>response.json()).then((data)=>setCars(data));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"App\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"My Frontend - The very beginning\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gianf\\\\Documents\\\\Schule\\\\BBW\\\\M323\\\\CoolCars\\\\m450-cool-cars-fe\\\\src\\\\app\\\\page.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: buttonHandler,\n                children: \"load cars\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gianf\\\\Documents\\\\Schule\\\\BBW\\\\M323\\\\CoolCars\\\\m450-cool-cars-fe\\\\src\\\\app\\\\page.js\",\n                lineNumber: 20,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gianf\\\\Documents\\\\Schule\\\\BBW\\\\M323\\\\CoolCars\\\\m450-cool-cars-fe\\\\src\\\\app\\\\page.js\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: cars.map((car)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: car.brand + \" \" + car.model + \" (\" + car.horsePower + \")\"\n                    }, car.id, false, {\n                        fileName: \"C:\\\\Users\\\\gianf\\\\Documents\\\\Schule\\\\BBW\\\\M323\\\\CoolCars\\\\m450-cool-cars-fe\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 24,\n                        columnNumber: 13\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gianf\\\\Documents\\\\Schule\\\\BBW\\\\M323\\\\CoolCars\\\\m450-cool-cars-fe\\\\src\\\\app\\\\page.js\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: [\n                                        \"Brand\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                    value: \"asc\",\n                                                    children: \"Aufsteigend\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\gianf\\\\Documents\\\\Schule\\\\BBW\\\\M323\\\\CoolCars\\\\m450-cool-cars-fe\\\\src\\\\app\\\\page.js\",\n                                                    lineNumber: 35,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                    value: \"desc\",\n                                                    children: \"Absteigend\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\gianf\\\\Documents\\\\Schule\\\\BBW\\\\M323\\\\CoolCars\\\\m450-cool-cars-fe\\\\src\\\\app\\\\page.js\",\n                                                    lineNumber: 36,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\gianf\\\\Documents\\\\Schule\\\\BBW\\\\M323\\\\CoolCars\\\\m450-cool-cars-fe\\\\src\\\\app\\\\page.js\",\n                                            lineNumber: 34,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\gianf\\\\Documents\\\\Schule\\\\BBW\\\\M323\\\\CoolCars\\\\m450-cool-cars-fe\\\\src\\\\app\\\\page.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: [\n                                        \"Model\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                    value: \"asc\",\n                                                    children: \"Aufsteigend\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\gianf\\\\Documents\\\\Schule\\\\BBW\\\\M323\\\\CoolCars\\\\m450-cool-cars-fe\\\\src\\\\app\\\\page.js\",\n                                                    lineNumber: 42,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                    value: \"desc\",\n                                                    children: \"Absteigend\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\gianf\\\\Documents\\\\Schule\\\\BBW\\\\M323\\\\CoolCars\\\\m450-cool-cars-fe\\\\src\\\\app\\\\page.js\",\n                                                    lineNumber: 43,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\gianf\\\\Documents\\\\Schule\\\\BBW\\\\M323\\\\CoolCars\\\\m450-cool-cars-fe\\\\src\\\\app\\\\page.js\",\n                                            lineNumber: 41,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\gianf\\\\Documents\\\\Schule\\\\BBW\\\\M323\\\\CoolCars\\\\m450-cool-cars-fe\\\\src\\\\app\\\\page.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: [\n                                        \"Horsepower\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                    value: \"asc\",\n                                                    children: \"Aufsteigend\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\gianf\\\\Documents\\\\Schule\\\\BBW\\\\M323\\\\CoolCars\\\\m450-cool-cars-fe\\\\src\\\\app\\\\page.js\",\n                                                    lineNumber: 49,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                    value: \"desc\",\n                                                    children: \"Absteigend\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\gianf\\\\Documents\\\\Schule\\\\BBW\\\\M323\\\\CoolCars\\\\m450-cool-cars-fe\\\\src\\\\app\\\\page.js\",\n                                                    lineNumber: 50,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\gianf\\\\Documents\\\\Schule\\\\BBW\\\\M323\\\\CoolCars\\\\m450-cool-cars-fe\\\\src\\\\app\\\\page.js\",\n                                            lineNumber: 48,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\gianf\\\\Documents\\\\Schule\\\\BBW\\\\M323\\\\CoolCars\\\\m450-cool-cars-fe\\\\src\\\\app\\\\page.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\gianf\\\\Documents\\\\Schule\\\\BBW\\\\M323\\\\CoolCars\\\\m450-cool-cars-fe\\\\src\\\\app\\\\page.js\",\n                            lineNumber: 31,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gianf\\\\Documents\\\\Schule\\\\BBW\\\\M323\\\\CoolCars\\\\m450-cool-cars-fe\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: cars.map((car)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\gianf\\\\Documents\\\\Schule\\\\BBW\\\\M323\\\\CoolCars\\\\m450-cool-cars-fe\\\\src\\\\app\\\\page.js\",\n                                lineNumber: 57,\n                                columnNumber: 17\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gianf\\\\Documents\\\\Schule\\\\BBW\\\\M323\\\\CoolCars\\\\m450-cool-cars-fe\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 55,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\gianf\\\\Documents\\\\Schule\\\\BBW\\\\M323\\\\CoolCars\\\\m450-cool-cars-fe\\\\src\\\\app\\\\page.js\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                href: \"/carform\",\n                children: \"add a new car\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gianf\\\\Documents\\\\Schule\\\\BBW\\\\M323\\\\CoolCars\\\\m450-cool-cars-fe\\\\src\\\\app\\\\page.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\gianf\\\\Documents\\\\Schule\\\\BBW\\\\M323\\\\CoolCars\\\\m450-cool-cars-fe\\\\src\\\\app\\\\page.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"SbbgPvtmlEuAK5fVh8Mwc2/uV5Y=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUUrQjtBQUNVO0FBQ1o7QUFHZCxTQUFTRzs7SUFDdEIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdMLCtDQUFRQSxDQUFDLEVBQUU7SUFFbkMsU0FBU007UUFDUEMsTUFBTSw4QkFDSEMsSUFBSSxDQUFDQyxDQUFBQSxXQUFZQSxTQUFTQyxJQUFJLElBQzlCRixJQUFJLENBQUNHLENBQUFBLE9BQVFOLFFBQVFNO0lBQzFCO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNGLDhEQUFDQztnQkFBT0MsU0FBU1Y7MEJBQWU7Ozs7OzswQkFDaEMsOERBQUNXOzs7OzswQkFDRCw4REFBQ0M7MEJBQ0dkLEtBQUtlLEdBQUcsQ0FBQ0MsQ0FBQUEsb0JBQ1QsOERBQUNDO2tDQUNJRCxJQUFJRSxLQUFLLEdBQUcsTUFBTUYsSUFBSUcsS0FBSyxHQUFHLE9BQU9ILElBQUlJLFVBQVUsR0FBRzt1QkFEbERKLElBQUlLLEVBQUU7Ozs7Ozs7Ozs7MEJBS25CLDhEQUFDQzs7a0NBQ0MsOERBQUNDO2tDQUNDLDRFQUFDQzs7OENBQ0MsOERBQUNDOzt3Q0FBRztzREFFRiw4REFBQ0M7OzhEQUNDLDhEQUFDQztvREFBT0MsT0FBTTs4REFBTTs7Ozs7OzhEQUNwQiw4REFBQ0Q7b0RBQU9DLE9BQU07OERBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FHekIsOERBQUNIOzt3Q0FBRztzREFFRiw4REFBQ0M7OzhEQUNDLDhEQUFDQztvREFBT0MsT0FBTTs4REFBTTs7Ozs7OzhEQUNwQiw4REFBQ0Q7b0RBQU9DLE9BQU07OERBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FHekIsOERBQUNIOzt3Q0FBRztzREFFRiw4REFBQ0M7OzhEQUNDLDhEQUFDQztvREFBT0MsT0FBTTs4REFBTTs7Ozs7OzhEQUNwQiw4REFBQ0Q7b0RBQU9DLE9BQU07OERBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUs3Qiw4REFBQ0M7a0NBQ0U3QixLQUFLZSxHQUFHLENBQUNDLENBQUFBLG9CQUNOLDhEQUFDUTs7Ozs7Ozs7Ozs7Ozs7OzswQkFNWCw4REFBQzFCLGlEQUFJQTtnQkFBQ2dDLE1BQUs7MEJBQVc7Ozs7Ozs7Ozs7OztBQUc1QjtHQTFEd0IvQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UuanM/MmIzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5cclxuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDYXJGb3JtIGZyb20gXCJAL2FwcC9jYXJmb3JtL3BhZ2VcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgW2NhcnMsIHNldENhcnNdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gIGZ1bmN0aW9uIGJ1dHRvbkhhbmRsZXIoKSB7XHJcbiAgICBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9jYXJzXCIpXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4oZGF0YSA9PiBzZXRDYXJzKGRhdGEpKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XHJcbiAgICAgIDxoMT5NeSBGcm9udGVuZCAtIFRoZSB2ZXJ5IGJlZ2lubmluZzwvaDE+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtidXR0b25IYW5kbGVyfT5sb2FkIGNhcnM8L2J1dHRvbj5cclxuICAgICAgICA8YnIvPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIHsgY2Fycy5tYXAoY2FyID0+XHJcbiAgICAgICAgICAgIDxsaSBrZXk9e2Nhci5pZH0+XHJcbiAgICAgICAgICAgICAgICB7Y2FyLmJyYW5kICsgXCIgXCIgKyBjYXIubW9kZWwgKyBcIiAoXCIgKyBjYXIuaG9yc2VQb3dlciArIFwiKVwifVxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgIDx0aD5cclxuICAgICAgICAgICAgICAgIEJyYW5kXHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYXNjXCI+QXVmc3RlaWdlbmQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImRlc2NcIj5BYnN0ZWlnZW5kPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5cclxuICAgICAgICAgICAgICAgIE1vZGVsXHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYXNjXCI+QXVmc3RlaWdlbmQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImRlc2NcIj5BYnN0ZWlnZW5kPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5cclxuICAgICAgICAgICAgICAgIEhvcnNlcG93ZXJcclxuICAgICAgICAgICAgICAgIDxzZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJhc2NcIj5BdWZzdGVpZ2VuZDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZGVzY1wiPkFic3RlaWdlbmQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICB7Y2Fycy5tYXAoY2FyID0+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICAgPExpbmsgaHJlZj1cIi9jYXJmb3JtXCI+YWRkIGEgbmV3IGNhcjwvTGluaz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJDYXJGb3JtIiwiTGluayIsIkhvbWUiLCJjYXJzIiwic2V0Q2FycyIsImJ1dHRvbkhhbmRsZXIiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJidXR0b24iLCJvbkNsaWNrIiwiYnIiLCJ1bCIsIm1hcCIsImNhciIsImxpIiwiYnJhbmQiLCJtb2RlbCIsImhvcnNlUG93ZXIiLCJpZCIsInRhYmxlIiwidGhlYWQiLCJ0ciIsInRoIiwic2VsZWN0Iiwib3B0aW9uIiwidmFsdWUiLCJ0Ym9keSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});