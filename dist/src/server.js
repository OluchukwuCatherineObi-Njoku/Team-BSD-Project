"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const stoppable_1 = __importDefault(require("stoppable"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const body_parser_1 = __importDefault(require("body-parser"));
const logger_1 = __importDefault(require("./logger"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
exports.app = app;
// Middleware for security headers
app.use((0, helmet_1.default)());
// Cross origin resource sharing
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json()); // for parsing application/json
app.use(body_parser_1.default.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(routes_1.default);
const port = 8080;
const server = (0, stoppable_1.default)(app.listen(port, () => {
    logger_1.default.info(`Example app listening at http://localhost:${port}`);
}));
process.on('SIGINT', () => {
    logger_1.default.info('Received SIGINT. Shutting down gracefully...');
    server.stop(() => {
        logger_1.default.info('Server stopped.');
    });
});
process.on('SIGTERM', () => {
    logger_1.default.info('Received SIGTERM. Shutting down gracefully...');
    server.stop(() => {
        logger_1.default.info('Server stopped.');
    });
});
//# sourceMappingURL=server.js.map