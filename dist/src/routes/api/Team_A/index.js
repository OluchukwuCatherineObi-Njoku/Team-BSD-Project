"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const team_a_health_check_1 = __importDefault(require("./team_a_health_check"));
const router = express_1.default.Router();
//   The route: /team_a/team_a_health_check
router.get('/team_a_health_check', team_a_health_check_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map