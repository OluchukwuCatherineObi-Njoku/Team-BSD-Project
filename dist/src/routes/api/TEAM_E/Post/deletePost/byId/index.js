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
  Api to get a delete from the database via id
  
  Query parameters:
  id: number - the id of the post

  On success: status code 200
  On failure: status code 400

  Method: Delete
  Route: /team_e/post/id
*/
exports.default = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.query;
    if (!id || typeof id != 'string') {
        logger_1.default.error('Could not delete post, must provide an id number via query parameter to delete the post');
        return res.status(400).send('Must provide an id via query parameter to delete the post.');
    }
    const parsedId = parseInt(id, 10);
    if (isNaN(parsedId)) {
        logger_1.default.error('Could not delete post, id is not a number');
        return res.status(400).send('id must be a number');
    }
    try {
        const db = new database_1.default();
        logger_1.default.info(`Deleted post with id : [${parsedId}]`);
        yield db.deletePostByID(parsedId);
        return res.status(200).send(`Post with id [${parsedId}] has been deleted.`);
    }
    catch (err) {
        const error = err;
        logger_1.default.error(`Could not delete post: ${error.message}`);
        return res.status(404).send(error.message);
    }
});
//# sourceMappingURL=index.js.map