"use strict";exports.id="src_app_employee_employee_routing_ts",exports.ids=["src_app_employee_employee_routing_ts"],exports.modules={"./src/app/core/route.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schema */ "./src/app/core/schema.ts");\n\n\nclass Route extends _schema__WEBPACK_IMPORTED_MODULE_1__["default"] {\n    get(path, ...params) {\n        if (this.useMiddleware) {\n            this.router.get(path, this.validate(this.schemaName), params);\n        } else {\n            this.router.get(path, params);\n        }\n    }\n    post(path, ...params) {\n        if (this.useMiddleware) {\n            this.router.post(path, this.validate(this.schemaName), params);\n        } else {\n            this.router.post(path, params);\n        }\n    }\n    delete(path, ...params) {\n        if (this.useMiddleware) {\n            this.router.delete(path, this.validate(this.schemaName), params);\n        } else {\n            this.router.delete(path, params);\n        }\n    }\n    put(path, ...params) {\n        if (this.useMiddleware) {\n            this.router.put(path, this.validate(this.schemaName), params);\n        } else {\n            this.router.put(path, params);\n        }\n    }\n    options(path, ...params) {\n        if (this.useMiddleware) {\n            this.router.options(path, this.validate(this.schemaName), params);\n        } else {\n            this.router.options(path, params);\n        }\n    }\n    constructor(schemaName, useMiddleware = true){\n        super();\n        this.router = express__WEBPACK_IMPORTED_MODULE_0__.Router();\n        this.schemaName = schemaName;\n        this.useMiddleware = useMiddleware;\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Route);\n\n\n//# sourceURL=webpack://typescript-first-app/./src/app/core/route.ts?')},"./src/app/employee/employee.controller.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// import EmployeeService from './employee.service';\nclass EmployeeController {\n    constructor(){\n        this.posts = [\n            {\n                name: 'Muchammad Ilham',\n                division: 'System Development',\n                title: 'Senior'\n            }\n        ];\n        this.getAllEmployees = (req, res, next)=>{\n            try {\n                res.send(this.posts);\n            } catch (error) {\n                next();\n            }\n        };\n        this.createAEmployee = (req, res)=>{\n            const post = req.body;\n            this.posts.push(post);\n            res.send(post);\n        };\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new EmployeeController());\n\n\n//# sourceURL=webpack://typescript-first-app/./src/app/employee/employee.controller.ts?")},"./src/app/employee/employee.routing.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _core_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/route */ "./src/app/core/route.ts");\n/* harmony import */ var _employee_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employee.controller */ "./src/app/employee/employee.controller.ts");\n\n\nclass EmployeeRouter extends _core_route__WEBPACK_IMPORTED_MODULE_0__["default"] {\n    constructor(schemaName){\n        super(schemaName);\n        this.controller = _employee_controller__WEBPACK_IMPORTED_MODULE_1__["default"];\n        this.get(\'/\', this.controller.getAllEmployees);\n        this.post(\'/\', this.controller.createAEmployee);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmployeeRouter);\n\n\n//# sourceURL=webpack://typescript-first-app/./src/app/employee/employee.routing.ts?')}};