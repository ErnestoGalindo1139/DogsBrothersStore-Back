export const queries = {
    getAllProducts: "SELECT * FROM productos",
    addNewProduct: "INSERT INTO productos (nombre_producto, descripcion, precio, cantidad, id_categoria) VALUES (@nombre_producto, @descripcion, @precio, @cantidad, @id_categoria)",
    getProductById: "SELECT * FROM productos WHERE id_producto = @id_producto",
    deleteProduct: "DELETE FROM productos WHERE id_producto = @id_producto",
    getTotalProducts: "SELECT COUNT(*) FROM productos",
    updateProductById: "UPDATE productos SET nombre_producto = @nombre_producto, descripcion = @descripcion, precio = @precio, cantidad = @cantidad, id_categoria = @id_categoria WHERE id_producto = @id_producto"
}