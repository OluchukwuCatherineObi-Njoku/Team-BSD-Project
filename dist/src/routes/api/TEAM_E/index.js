"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const team_e_health_check_1 = __importDefault(require("./team_e_health_check"));
const addPost_1 = __importDefault(require("./Post/addPost"));
const byId_1 = __importDefault(require("./Post/getPost/byId"));
const byTitle_1 = __importDefault(require("./Post/getPost/byTitle"));
const editPost_1 = __importDefault(require("./Post/editPost"));
const byId_2 = __importDefault(require("./Post/deletePost/byId"));
const byTitle_2 = __importDefault(require("./Post/deletePost/byTitle"));
const byPost_1 = __importDefault(require("./Post/deletePost/byPost"));
const router = express_1.default.Router();
router.get('/team_e_health_check', team_e_health_check_1.default);
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
router.post('/post', addPost_1.default);
/*
  Api to get a post from the database via id
  
  Query parameters:
  id: number - the id of the post

  On success: status code 200
  On failure: status code 400

  Method: Get
  Route: /team_e/post/id
*/
router.get('/post/id', byId_1.default);
/*
  Api to get a post from the database via title
  
  Query parameters:
  title: string - the title of the post

  On success: status code 200
  On failure: status code 400

  Method: Get
  Route: /team_e/post/title
*/
router.get('/post/title', byTitle_1.default);
/*
  Api to edit a post in the database

  req.body:
  The new post to replace the old one, must contain id and one of the following [title, description, image]

  On success: status code 200
  On failure: status code 400

  Method: Put
  Route: /team_e/post
*/
router.put('/post', editPost_1.default);
/*
  Api to get a delete from the database via id
  
  Query parameters:
  id: number - the id of the post

  On success: status code 200
  On failure: status code 400

  Method: Delete
  Route: /team_e/post/id
*/
router.delete('/post/id', byId_2.default);
/*
  Api to get a delete a post from the database via title
  
  Query parameters:
  title: string - the title of the post

  On success: status code 200
  On failure: status code 400

  Method: Get
  Route: /team_e/post/title
*/
router.delete('/post/title', byTitle_2.default);
/*
  Api to delete a post in the database

  req.body:
  The post to be deleted, must contain id and one of the following [title, description, image]

  On success: status code 200
  On failure: status code 400

  Method: Put
  Route: /team_e/post
*/
router.delete('/post', byPost_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map