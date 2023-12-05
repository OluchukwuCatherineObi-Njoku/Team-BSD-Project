import Express from 'express';
import team_b_health_check from './team_b_health_check';

const router = Express.Router();

router.get('/team_b_health_check', team_b_health_check);

export default router;
