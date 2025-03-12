import { Router } from 'express';
import { createProduct, getProducts } from '../controllers/product';
import { productValidator } from '../middlewares/validations';

const router = Router();

router.post('/', productValidator, createProduct);
router.get('/', getProducts);

export default router;
