"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Must import jest functions every time you want to use them
const globals_1 = require("@jest/globals");
// Import whatever it is that you're testing
const sum_1 = __importDefault(require("../../src/sum"));
const getname_1 = __importDefault(require("../../src/getname"));
(0, globals_1.describe)('Some description for test cases', () => {
    (0, globals_1.test)('adds 1 + 2 to equal 3', () => {
        (0, globals_1.expect)((0, sum_1.default)(1, 2)).toBe(3);
    });
    (0, globals_1.test)('get name from IPERSON', () => {
        const the_person = {
            name: 'Majd',
            age: 27,
        };
        (0, globals_1.expect)((0, getname_1.default)(the_person)).toBe('Majd');
    });
});
//# sourceMappingURL=sum.test.js.map