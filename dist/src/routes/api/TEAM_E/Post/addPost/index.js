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
  Api to add a post to the database
  
  Accepts in req.body the following:
  title: string - title of the post
  description: string - text of the post
  image: string - image of the post

  Must have at least one of [title, description, image]

  On success: status code 201
  On failure: status code 400

  Method: Post
  Route: /team_e/post
*/
exports.default = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const new_post = req.body;
    if (!new_post.title && !new_post.description && !new_post.image) {
        logger_1.default.error('Could not add a new post, must provide at least one of [title, description, image] to add a post!');
        return res
            .status(400)
            .send('Must provide at least one of [title, description, image] to add a post');
    }
    if (new_post.title && typeof new_post.title != 'string') {
        logger_1.default.error('Could not add a new post, title is not a string');
        return res.status(400).send('Title must be string');
    }
    if (new_post.description && typeof new_post.description != 'string') {
        logger_1.default.error('Could not add a new post, description is not a string');
        return res.status(400).send('Description must be string');
    }
    if (new_post.image && typeof new_post.image != 'string') {
        logger_1.default.error('Could not add a new post, image is not a string');
        return res.status(400).send('Image must be string');
    }
    try {
        const db = new database_1.default();
        yield db.addPost(new_post.title, new_post.description, new_post.image);
        logger_1.default.info(`Added a new post with title: [${new_post.title}]`);
        return res.status(201).send('Added post');
    }
    catch (err) {
        const error = err;
        logger_1.default.error(`Could not add new post: ${error.message}`);
        return res.status(400).send(error.message);
    }
});
//# sourceMappingURL=index.js.map