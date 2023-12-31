import Express from 'express';
import team_e_health_check from './team_e_health_check';
import addPost from './Post/addPost';
import getPostById from './Post/getPost/byId';
import getPostByTitle from './Post/getPost/byTitle';
import updatePost from './Post/editPost';
import deletePostById from './Post/deletePost/byId';
import deletePostByTitle from './Post/deletePost/byTitle';
import deletePost from './Post/deletePost/byPost';

const router = Express.Router();

router.get('/team_e_health_check', team_e_health_check);

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
router.post('/post', addPost);

/*
  Api to get a post from the database via id
  
  Query parameters:
  id: number - the id of the post

  On success: status code 200
  On failure: status code 400

  Method: Get
  Route: /team_e/post/id
*/
router.get('/post/id', getPostById);

/*
  Api to get a post from the database via title
  
  Query parameters:
  title: string - the title of the post

  On success: status code 200
  On failure: status code 400

  Method: Get
  Route: /team_e/post/title
*/
router.get('/post/title', getPostByTitle);

/*
  Api to edit a post in the database

  req.body:
  The new post to replace the old one, must contain id and one of the following [title, description, image]

  On success: status code 200
  On failure: status code 400

  Method: Put
  Route: /team_e/post
*/
router.put('/post', updatePost);

/*
  Api to get a delete from the database via id
  
  Query parameters:
  id: number - the id of the post

  On success: status code 200
  On failure: status code 400

  Method: Delete
  Route: /team_e/post/id
*/
router.delete('/post/id', deletePostById);

/*
  Api to get a delete a post from the database via title
  
  Query parameters:
  title: string - the title of the post

  On success: status code 200
  On failure: status code 400

  Method: Get
  Route: /team_e/post/title
*/
router.delete('/post/title', deletePostByTitle);

/*
  Api to delete a post in the database

  req.body:
  The post to be deleted, must contain id and one of the following [title, description, image]

  On success: status code 200
  On failure: status code 400

  Method: Put
  Route: /team_e/post
*/
router.delete('/post', deletePost);

export default router;
