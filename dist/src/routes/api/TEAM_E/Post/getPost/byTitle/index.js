"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../../../../../../src/TEAM_E/database"));
const logger_1 = __importDefault(require("../../../../../../../src/logger"));
/*
  Api to get a post from the database via title
  
  Query parameters:
  title: string - the title of the post

  On success: status code 200
  On failure: status code 400

  Method: Get
  Route: /team_e/post/title
*/
exports.default = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title } = req.query;
    if (!title) {
        logger_1.default.error('Could not retrieve post, must provide a title via query parameter to retrieve the post');
        return res.status(400).send('Must provide a title via query parameter to retrieve the post.');
    }
    if (typeof title != 'string') {
        logger_1.default.error('Could not retrieve post, title provided must be of type string');
        return res.status(400).send('Title must be of type string');
    }
    try {
        const db = new database_1.default();
        logger_1.default.error(`Retrieved post with title: [${title}]`);
        return res.status(200).send(yield db.getPostByTitle(title));
    }
    catch (err) {
        const error = err;
        logger_1.default.error(`Could not retrieve post: ${error.message}`);
        return res.status(404).send(error.message);
    }
});
//# sourceMappingURL=index.js.map