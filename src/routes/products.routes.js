import { Router } from "express";
import { addProductoCarritoCompras, createNewProduct, deleteProductById, getActiveProducts, getCarritoCompras, getInactiveProducts, getProductById, getProducts, getTotalProducts, updateProductById } from "../controllers/products.controller";

const router = Router();

router.get('/products', getProducts);
router.get('/products/:id_producto', getProductById);
router.get('/a', getTotalProducts);
router.get('/active-products', getActiveProducts);
router.get('/inactive-products', getInactiveProducts);
router.post('/products', createNewProduct);
router.put('/products/:id_producto', updateProductById);
router.delete('/products/:id_producto', deleteProductById);

// CarritoCompras
router.post('/carritoCompras', addProductoCarritoCompras);
router.get('/carritoCompras', getCarritoCompras);

export default router