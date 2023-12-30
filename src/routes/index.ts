import Express from 'express';
import healthcheck from './healthcheck';
import TEAM_A from './api/Team_A';
import TEAM_B from './api/Team_B';
import TEAM_C from './api/Team_C';
import TEAM_D from './api/Team_D';
import TEAM_E from './api/TEAM_E';
const router = Express.Router();

router.get('/', healthcheck);
router.use('/team_a', TEAM_A);
router.use('/team_b', TEAM_B);
router.use('/team_c', TEAM_C);
router.use('/team_d', TEAM_D);
router.use('/team_e', TEAM_E);

export default router;
