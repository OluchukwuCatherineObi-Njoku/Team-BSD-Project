import Express from 'express';
import team_e_health_check from './team_e_health_check';
import addPost from './Post/addPost';
import getPostById from './Post/getPost/byId';
import getPostByTitle from './Post/getPost/byTitle';

const router = Express.Router();

router.get('/team_e_health_check', team_e_health_check);

/*
  Api to add a post to the database
  Must at least have one parameter of [title, description, image]

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

export default router;
