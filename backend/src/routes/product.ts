import { Router } from 'express';
import { createProduct, getProducts } from '../controllers/product';

const router = Router();

router.post('/', createProduct);
router.get('/', getProducts);

export default router;
