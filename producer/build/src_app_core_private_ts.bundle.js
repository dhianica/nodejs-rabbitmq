"use strict";exports.id="src_app_core_private_ts",exports.ids=["src_app_core_private_ts"],exports.modules={"./src/app/core/private.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var amqplib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! amqplib */ \"amqplib\");\n/* harmony import */ var amqplib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(amqplib__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/**\r\n * @var {Promise<AMQPMessageBroker>}\r\n */ let instance;\n/**\r\n * Broker for async messaging\r\n */ class AMQPMessageBroker {\n    /**\r\n   * Initialize connection to rabbitMQ\r\n   */ async init() {\n        if (!this.connection && !this.channel) {\n            this.connection = await amqplib__WEBPACK_IMPORTED_MODULE_0__.connect(process.env.RABBITMQ_URL || 'amqp://localhost');\n            this.channel = await this.connection.createChannel();\n        }\n        return this;\n    }\n    /**\r\n   * Send message to queue\r\n   * @param {String} queue Queue name\r\n   * @param {Object} msg Message as Buffer\r\n   */ async send(queue, msg) {\n        if (!this.connection && !this.channel) {\n            await this.init();\n        }\n        if (!queue) {\n            throw new Error();\n        }\n        if (!msg) {\n            msg = '';\n        }\n        await this.channel?.assertQueue(queue, {\n            durable: true\n        });\n        this.channel?.sendToQueue(queue, Buffer.from(msg, 'utf-8'));\n    }\n    /**\r\n   * @param {String} queue Queue name\r\n   * @param {Function} handler Handler that will be invoked with given message and acknowledge function (msg, ack)\r\n   */ async subscribe(queue, handler) {\n        if (!this.connection && !this.channel) {\n            await this.init();\n        }\n        if (!queue) {\n            throw new Error('Must declared the Queue!');\n        }\n        if (this.queues[queue]) {\n            const existingHandler = lodash__WEBPACK_IMPORTED_MODULE_1__.find(this.queues[queue], (h)=>{\n                return h === handler;\n            });\n            if (existingHandler) {\n                return await this.unsubscribe(queue, existingHandler);\n            }\n            this.queues[queue].push(handler);\n            return await this.unsubscribe(queue, handler);\n        }\n        await this.channel?.assertQueue(queue, {\n            durable: true\n        });\n        this.queues[queue] = [\n            handler\n        ];\n        this.channel?.consume(queue, async (msg)=>{\n            const ack = lodash__WEBPACK_IMPORTED_MODULE_1__.once(()=>{\n                return this.channel?.ack(msg);\n            });\n            this.queues[queue].forEach((h)=>{\n                return h(msg, ack);\n            });\n        });\n        return await this.unsubscribe(queue, handler);\n    }\n    async unsubscribe(queue, handler) {\n        if (!queue) {\n            throw new Error('Must declared the Queue!');\n        }\n        lodash__WEBPACK_IMPORTED_MODULE_1__.pull(this.queues[queue], handler);\n    }\n    constructor(){\n        this.queues = [];\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AMQPMessageBroker);\n\n\n//# sourceURL=webpack://typescript-first-app/./src/app/core/private.ts?")}};