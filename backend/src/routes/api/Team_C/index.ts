import Express from 'express';
import team_c_health_check from './team_c_health_check';

const router = Express.Router();

router.get('/team_c_health_check', team_c_health_check);

export default router;
