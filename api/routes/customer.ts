import { Router } from 'express';
import {signUp, getCustomerDetails, userPrices} from '../controllers/customer';
import { authenticateToken } from '../middleware/auth';

const router = Router();

router.post('/register', signUp);

router.get('/getUser', authenticateToken, getCustomerDetails);

router.get('/userPrices', authenticateToken, userPrices);

export default router;