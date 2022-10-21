"use strict";exports.id="src_app_message_message_schema_ts",exports.ids=["src_app_message_message_schema_ts"],exports.modules={"./src/app/message/message.schema.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"schema\": () => (/* binding */ schema)\n/* harmony export */ });\n/**\n * messageCreateSchema\n * validate request create data message\n * Sample Data like this\n * {\n *      name: 'Muchammad Ilham',\n *      division: 'System Development',\n *      title: 'Senior'\n * }\n */ const schema = {\n    $async: true,\n    required: [\n        'name',\n        'division'\n    ],\n    allOf: [\n        {\n            properties: {\n                name: {\n                    type: 'string'\n                },\n                division: {\n                    type: 'string'\n                },\n                title: {\n                    type: 'string'\n                }\n            },\n            additionalProperties: false\n        }\n    ],\n    errorMessage: {\n        type: 'data should be an object',\n        properties: {\n            name: 'name should be string',\n            division: 'division should be string'\n        },\n        _: 'data should have properties \"name\" and \"division\"'\n    }\n};\n\n\n//# sourceURL=webpack://nodejs-rabbitmq-producer/./src/app/message/message.schema.ts?")}};