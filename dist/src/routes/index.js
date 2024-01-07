"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const healthcheck_1 = __importDefault(require("./healthcheck"));
const Team_A_1 = __importDefault(require("./api/Team_A"));
const Team_B_1 = __importDefault(require("./api/Team_B"));
const Team_C_1 = __importDefault(require("./api/Team_C"));
const Team_D_1 = __importDefault(require("./api/Team_D"));
const TEAM_E_1 = __importDefault(require("./api/TEAM_E"));
const router = express_1.default.Router();
router.get('/', healthcheck_1.default);
router.use('/team_a', Team_A_1.default);
router.use('/team_b', Team_B_1.default);
router.use('/team_c', Team_C_1.default);
router.use('/team_d', Team_D_1.default);
router.use('/team_e', TEAM_E_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map