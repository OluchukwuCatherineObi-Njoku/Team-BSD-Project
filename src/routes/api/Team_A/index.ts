import Express from 'express';
import team_a_health_check from './team_a_health_check';

const router = Express.Router();

//   The route: /team_a/team_a_health_check
router.get('/team_a_health_check', team_a_health_check);

export default router;
