export const queries = {
    getAllProducts: "SELECT *, CASE WHEN id_categoria = 1 THEN 'Celulares' WHEN id_categoria = 2 THEN 'Laptops' WHEN id_categoria = 3 THEN 'Accesorios' WHEN id_categoria = 4 THEN 'Computadoras' WHEN id_categoria = 5 THEN 'Componentes' END AS categoria_producto FROM productos",
    addNewProduct: "INSERT INTO productos (nombre_producto, descripcion_producto, precio_producto, cantidad_producto, url_producto, id_categoria) VALUES (@nombre_producto, @descripcion_producto, @precio_producto, @cantidad_producto, @url_producto, @id_categoria)",
    getProductById: "SELECT * FROM productos WHERE id_producto = @id_producto",
    deleteProduct: "DELETE FROM productos WHERE id_producto = @id_producto",
    getTotalProducts: "SELECT COUNT(*) FROM productos",
    updateProductById: "UPDATE productos SET nombre_producto = @nombre_producto, descripcion_producto = @descripcion_producto, precio_producto = @precio_producto, cantidad_producto = @cantidad_producto, url_producto = @url_producto, id_categoria = @id_categoria WHERE id_producto = @id_producto",
    getAllCategories: "SELECT * FROM categorias ORDER BY nombre_categoria"
}