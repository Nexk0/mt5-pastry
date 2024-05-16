import { Router } from 'express';
import { listPastries } from '../controllers/pastries';

const router = Router();

router.get('/list', listPastries);

export default router;