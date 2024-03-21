const nombreCategorias = "CASE WHEN id_categoria = 1 THEN 'Celulares' WHEN id_categoria = 2 THEN 'Laptops' WHEN id_categoria = 3 THEN 'Accesorios' WHEN id_categoria = 4 THEN 'Computadoras' WHEN id_categoria = 5 THEN 'Componentes' END AS categoria_producto"

export const queries = {

    // Products
    getAllProducts: `SELECT *, ${nombreCategorias} FROM productos`,
    getProductById: "SELECT * FROM productos WHERE id_producto = @id_producto",
    getTotalProducts: "SELECT COUNT(*) FROM productos",
    getActiveProducts: `SELECT *, ${nombreCategorias} FROM productos WHERE activo_producto = 1`,
    getInactiveProducts: `SELECT *, ${nombreCategorias} FROM productos WHERE activo_producto = 0`,
    addNewProduct: "INSERT INTO productos (nombre_producto, descripcion_producto, precio_producto, cantidad_producto, url_producto, id_categoria) VALUES (@nombre_producto, @descripcion_producto, @precio_producto, @cantidad_producto, @url_producto, @id_categoria)",
    deleteProduct: "DELETE FROM productos WHERE id_producto = @id_producto",
    updateProductById: "UPDATE productos SET nombre_producto = @nombre_producto, descripcion_producto = @descripcion_producto, precio_producto = @precio_producto, cantidad_producto = @cantidad_producto, url_producto = @url_producto, id_categoria = @id_categoria WHERE id_producto = @id_producto",
    
    // Categories
    getAllCategories: "SELECT * FROM categorias ORDER BY nombre_categoria",

    // Users
    addNewUser: "INSERT INTO usuarios (nombre_completo, apellido_paterno, apellido_materno, correo_electronico, nombre_usuario, contrasena, numero_celular) VALUES (@nombre_completo, @apellido_paterno, @apellido_materno, @correo_electronico, @nombre_usuario, @contrasena, @numero_celular)",
    getAllUsers: "SELECT * FROM usuarios",
    getUserByEmail: "SELECT * FROM usuarios WHERE correo_electronico = @correo_electronico",

    // Carrito de Compras
    addProductoCarritoCompras: '',
    getCarritoCompras: '',
}