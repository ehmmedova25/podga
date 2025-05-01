import express from 'express';
import { getProducts, postProducts, deleteProducts, updateProducts } from '../controllers/productControllers.js';

const router = express.Router();

router
  .get('/', getProducts)
  .post('/', postProducts)
  .delete('/:id', deleteProducts)
  .put('/:id', updateProducts);

export default router;
