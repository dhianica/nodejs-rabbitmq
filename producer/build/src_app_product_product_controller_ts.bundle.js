"use strict";exports.id="src_app_product_product_controller_ts",exports.ids=["src_app_product_product_controller_ts"],exports.modules={"./src/app/product/product.controller.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass ProductController {\r\n    constructor() {\r\n        this.posts = [\r\n            {\r\n                name: 'Marcin',\r\n                author: 'Dolor sit amet',\r\n                title: 'Lorem Ipsum'\r\n            }\r\n        ];\r\n        this.getAllProducts = (req, res) => {\r\n            res.send(this.posts);\r\n        };\r\n        this.createAProduct = (req, res) => {\r\n            const post = req.body;\r\n            this.posts.push(post);\r\n            res.send(post);\r\n        };\r\n    }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new ProductController());\r\n\n\n//# sourceURL=webpack://typescript-first-app/./src/app/product/product.controller.ts?")}}