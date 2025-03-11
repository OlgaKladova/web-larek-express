import { Router } from 'express';
import createOrder from '../controllers/order';
import orderRouteValidator from '../middlewares/validations';

const router = Router();

router.post('/', orderRouteValidator, createOrder);

export default router;
