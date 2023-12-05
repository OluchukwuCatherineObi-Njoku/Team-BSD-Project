import Express from 'express';
import team_a_health_check from './team_a_health_check';

const router = Express.Router();

router.get('/team_a_health_check', team_a_health_check);

export default router;
