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
const database_1 = __importDefault(require("../../../../../../src/TEAM_E/database"));
const logger_1 = __importDefault(require("../../../../../../src/logger"));
/*
  Api to edit a post in the database

  req.body:
  The new post to replace the old one, must contain id and one of the following [title, description, image]

  On success: status code 200
  On failure: status code 400

  Method: Put
  Route: /team_e/post
*/
exports.default = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const new_post = req.body;
    logger_1.default.info('req.body', new_post);
    if (!new_post.title && !new_post.description && !new_post.image) {
        logger_1.default.error('Could not edit post, updated post provided via req.body must contain at least one of [title, description, image] and an id');
        return res
            .status(400)
            .send('Updated post provided via req.body must contain at least one of [title, description, image].');
    }
    if (new_post.id == undefined) {
        logger_1.default.error('Could not edit post, updated post provided via req.body must contain an id.');
        return res.status(400).send('Updated post provided via req.body must contain an id.');
    }
    if (isNaN(new_post.id)) {
        logger_1.default.error('Could not update post, id provided is not a number');
        return res.status(400).send('id must be a number');
    }
    if (new_post.title && typeof new_post.title != 'string') {
        logger_1.default.error('Could not update post, title provided must be of type string');
        return res.status(400).send('Title must be string');
    }
    if (new_post.description && typeof new_post.description != 'string') {
        logger_1.default.error('Could not update post, description provided must be of type string');
        return res.status(400).send('Description must be string');
    }
    if (new_post.image && typeof new_post.image != 'string') {
        logger_1.default.error('Could not update post, image provided must be of type string');
        return res.status(400).send('Image must be string');
    }
    try {
        const db = new database_1.default();
        yield db.editPost(new_post);
        logger_1.default.info(`Edited post with id: [${new_post.id}]`);
        return res.status(200).send(`Edited post with id: [${new_post.id}]`);
    }
    catch (err) {
        const error = err;
        logger_1.default.error(`Could not update post: ${error.message}`);
        return res.status(404).send(error.message);
    }
});
//# sourceMappingURL=index.js.map