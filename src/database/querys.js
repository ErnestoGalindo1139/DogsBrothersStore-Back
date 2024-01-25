export const queries = {
    getAllProducts: "SELECT * FROM productos",
    addNewProduct: "INSERT INTO productos (nombre_producto, descripcion_producto, precio_producto, cantidad_producto, url_producto, id_categoria) VALUES (@nombre_producto, @descripcion_producto, @precio_producto, @cantidad_producto, @url_producto, @id_categoria)",
    getProductById: "SELECT * FROM productos WHERE id_producto = @id_producto",
    deleteProduct: "DELETE FROM productos WHERE id_producto = @id_producto",
    getTotalProducts: "SELECT COUNT(*) FROM productos",
    updateProductById: "UPDATE productos SET nombre_producto = @nombre_producto, descripcion_producto = @descripcion_producto, precio_producto = @precio_producto, cantidad_producto = @cantidad_producto, url_producto = @url_producto, id_categoria = @id_categoria WHERE id_producto = @id_producto",
    getAllCategories: "SELECT * FROM categorias ORDER BY nombre_categoria"
}