import { Router } from "express";
import { createNewProduct, deleteProductById, getProductById, getProducts, getTotalProducts, updateProductById } from "../controllers/products.controller";

const router = Router();

router.get('/products', getProducts);
router.get('/products/:id_producto', getProductById);
router.get('/a', getTotalProducts);
router.post('/products', createNewProduct);
router.put('/products/:id_producto', updateProductById);
router.delete('/products/:id_producto', deleteProductById)

export default router