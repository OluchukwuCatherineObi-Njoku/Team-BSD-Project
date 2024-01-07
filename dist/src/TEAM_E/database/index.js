"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const in_memory_1 = __importDefault(require("./in_memory")); // Adjust the path and name as per your file structure
const production_1 = __importDefault(require("./production"));
const Db = process.env['AWS_REGION'] ? production_1.default : in_memory_1.default;
exports.default = Db;
//# sourceMappingURL=index.js.map