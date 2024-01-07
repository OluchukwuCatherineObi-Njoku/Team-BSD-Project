"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("../../../../../src/logger"));
// This route is a health check for team_a
// Route access: /team_a/team_a_health_check
exports.default = (req, res) => {
    logger_1.default.error('Someone accessed this route');
    res.status(200).send(`From Team A, Health is Good!`);
};
//# sourceMappingURL=index.js.map