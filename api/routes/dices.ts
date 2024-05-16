import { Router } from 'express';
import { playDices } from '../controllers/dices';
import { authenticateToken } from '../middleware/auth';

const router = Router();

router.get('/', authenticateToken, playDices);

export default router;