"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Must import jest functions every time you want to use them
const globals_1 = require("@jest/globals");
// Import whatever it is that you're testing
const printuser_1 = __importDefault(require("../../src/printuser"));
(0, globals_1.describe)('Some description for test cases', () => {
    (0, globals_1.test)('adds 1 + 2 to equal 3', () => {
        const user = {
            name: 'Majd',
            age: 40,
        };
        (0, globals_1.expect)((0, printuser_1.default)(user)).toBe(true);
        // must declare type
        //printuser(10);
    });
});
//# sourceMappingURL=printuser.test.js.map