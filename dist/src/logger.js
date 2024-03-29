"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/logger.js
const pino_1 = __importDefault(require("pino"));
// Use `info` as our standard log level if not specified
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const options = { level: process.env['LOG_LEVEL'] || 'info' };
// If we're doing `debug` logging, make the logs easier to read
// Remove if using pino-colada
if (options.level === 'debug') {
    // https://github.com/pinojs/pino-pretty
    options.transport = {
        target: 'pino-pretty',
        options: {
            colorize: true,
        },
    };
}
// Create and export a Pino Logger instance:
// https://getpino.io/#/docs/api?id=logger
exports.default = (0, pino_1.default)(options);
//# sourceMappingURL=logger.js.map