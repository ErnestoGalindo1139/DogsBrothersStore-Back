import { Router } from "express";
import { createNewProduct, deleteProductById, getActiveProducts, getInactiveProducts, getProductById, getProducts, getTotalProducts, updateProductById } from "../controllers/products.controller";

const router = Router();

router.get('/products', getProducts);
router.get('/products/:id_producto', getProductById);
router.get('/total-products', getTotalProducts);
router.get('/active-products', getActiveProducts);
router.get('/inactive-products', getInactiveProducts);
router.post('/products', createNewProduct);
router.put('/products/:id_producto', updateProductById);
router.delete('/products/:id_producto', deleteProductById)

export default router