import Express from 'express';
import team_d_health_check from './team_d_health_check';

const router = Express.Router();

router.get('/team_d_health_check', team_d_health_check);

export default router;
