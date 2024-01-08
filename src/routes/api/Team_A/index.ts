// import Express from 'express';
// import team_a_health_check from './team_a_health_check';

// const router = Express.Router();

// //   The route: /team_a/team_a_health_check
// router.get('/team_a_health_check', team_a_health_check);

// export default router;

import Express from 'express';
import team_a_health_check from './team_a_health_check';
import addClub from '../Team_A/Club/addClub'
import getClubById from '../Team_A/Club/getClub/byId'
import getClubByName from '../Team_A/Club/getClub/byName'
import getClubSubStr from '../Team_A/Club/getClub/bySubStr'
import getAllClubs from '../Team_A/Club/getClub/byAll'
import updateClub from '../Team_A/Club/editClubInfo'
import deleteClubById from '../Team_A/Club/deleteClub/byId'
import deleteClubByName from '../Team_A/Club/deleteClub/byName'
import deleteClub from '../Team_A/Club/deleteClub/byClub'


const router = Express.Router();

router.get('/team_a_health_check', team_a_health_check);

/*
  Api to add a club to the database
  
  Accepts in req.body the following:
  name: string - name of the club
  about_club: string - text of the club
  image: string - image of the club

  Must have a name

  On success: status code 201
  On failure: status code 400

  Method: Post
  Route: /team_a/club
*/
router.post('/club', addClub);

/*
  Api to get a club from the database via id
  
  Query parameters:
  id: number - the id of the club

  On success: status code 200
  On failure: status code 400

  Method: Get
  Route: /team_a/club/id
*/
router.get('/club/id', getClubById);

/*
  Api to get a club from the database via name
  
  Query parameters:
  name: string - the name of the club

  On success: status code 200
  On failure: status code 400

  Method: Get
  Route: /team_a/club/name
*/
router.get('/club/name', getClubByName);

/*
  Api to get a club from the database via name substring
  
  Query parameters:
  nameSubStr: string - the name substring of the club

  On success: status code 200
  On failure: status code 400

  Method: Get
  Route: /team_a/club/nameSubStr
*/
router.get('/club/nameSubStr', getClubSubStr);

/*
  Api to get all clubs from the database
  
  Query parameters:

  On success: status code 200
  On failure: status code 400

  Method: Get
  Route: /team_a/club/
*/
router.get('/club', getAllClubs);

/*
  Api to edit a club in the database

  req.body:
  The new club to replace the old one, must contain id and name

  On success: status code 200
  On failure: status code 400

  Method: Put
  Route: /team_a/club
*/
router.put('/club', updateClub);

/*
  Api to get a delete from the database via id
  
  Query parameters:
  id: number - the id of the club

  On success: status code 200
  On failure: status code 400

  Method: Delete
  Route: /team_a/club/id
*/
router.delete('/club/id', deleteClubById);

/*
  Api to get a delete a club from the database via name
  
  Query parameters:
  name: string - the name of the post

  On success: status code 200
  On failure: status code 400

  Method: Get
  Route: /team_a/club/name
*/
router.delete('/club/name', deleteClubByName);

/*
  Api to delete a club in the database

  req.body:
  The club to be deleted, must contain id and name

  On success: status code 200
  On failure: status code 400

  Method: Put
  Route: /team_a/club
*/
router.delete('/club', deleteClub);

export default router;
