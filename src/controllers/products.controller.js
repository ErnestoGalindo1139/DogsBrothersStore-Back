import { getConnection, queries, mysql } from "../database"

export const getProducts = async (req, res) => {

    try {
        // Obtener la conexión
        const connection = await getConnection();
        
        // Ejecutar la consulta
        const [rows, fields] = await connection.execute(queries.getAllProducts);
        
        // Enviar los resultados como respuesta
        res.json(rows);
    } catch (error) {
        console.error('Error al obtener productos:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }


}

export const createNewProduct = async (req, res) => {

    const { nombre_producto, descripcion_producto, precio_producto, url_producto, folder_producto, id_categoria } = req.body;
    let { cantidad_producto } = req.body;

    if (nombre_producto == null || descripcion_producto == null || precio_producto == null || id_categoria == null || url_producto == null || folder_producto == null ) {
        return res.status(400).json({msg: 'Bad Request. Llena todos los campos'});
    }
    
    if (cantidad_producto == null) {
        cantidad_producto = 0;
    }
    
    console.log(req.body);
    try {
        
        // Obtener la conexión
        const connection = await getConnection();

        // Ejecutar la consulta para insertar un nuevo producto
        await connection.execute(
            queries.addNewProduct,
            [nombre_producto, descripcion_producto, precio_producto, cantidad_producto, id_categoria, url_producto]
        );

        console.log({nombre_producto, descripcion_producto, precio_producto, cantidad_producto, id_categoria, url_producto});
        
        res.status(201).json({msg: 'Producto creado exitosamente'});

    } catch (error) {
        console.error('Error al crear nuevo producto:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
    

}

export const getProductById = async (req, res) => {
    const { id_producto } = req.params;

    try {
        // Obtener la conexión
        const connection = await getConnection();

        // Ejecutar la consulta para obtener el producto por su ID
        const [rows, fields] = await connection.execute(
            queries.getProductById,
            [id_producto]
        );

        // Enviar el resultado como respuesta
        res.json(rows[0]);
    } catch (error) {
        console.error('Error al obtener producto por ID:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

export const getActiveProducts = async (req, res) => {

    try {
        // Obtener la conexión
        const connection = await getConnection();

        // Ejecutar la consulta para obtener los productos activos
        const [rows, fields] = await connection.execute(
            queries.getActiveProducts
        );

        // Enviar los resultados como respuesta
        res.json(rows);
    } catch (error) {
        console.error('Error al obtener productos activos:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

export const getInactiveProducts = async (req, res) => {

    try {
        // Obtener la conexión
        const connection = await getConnection();

        // Ejecutar la consulta para obtener los productos inactivos
        const [rows, fields] = await connection.execute(
            queries.getInactiveProducts
        );

        // Enviar los resultados como respuesta
        res.json(rows);
    } catch (error) {
        console.error('Error al obtener productos inactivos:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

export const deleteProductById = async (req, res) => {
    const { id_producto } = req.params;

    try {
        // Obtener la conexión
        const connection = await getConnection();

        // Ejecutar la consulta para eliminar el producto por su ID
        await connection.execute(
            queries.deleteProduct,
            [id_producto]
        );

        res.sendStatus(204);
    } catch (error) {
        console.error('Error al eliminar producto por ID:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

export const getTotalProducts = async (req, res) => {

    try {
        // Obtener la conexión
        const connection = await getConnection();

        // Ejecutar la consulta para obtener el total de productos
        const [rows, fields] = await connection.execute(
            queries.getTotalProducts
        );

        // Enviar los resultados como respuesta
        res.json(rows);
    } catch (error) {
        console.error('Error al obtener el total de productos:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

export const updateProductById = async (req, res) => {

    const { nombre_producto, descripcion_producto, cantidad_producto, url_producto, precio_producto, id_categoria } = req.body;
    const { id_producto } = req.params;

    try {
        // Obtener la conexión
        const connection = await getConnection();

        // Ejecutar la consulta para actualizar el producto por su ID
        await connection.execute(
            queries.updateProductById,
            [nombre_producto, descripcion_producto, precio_producto, cantidad_producto, id_categoria, url_producto, id_producto]
        );

        res.json({nombre_producto, descripcion_producto, precio_producto, cantidad_producto, id_categoria});
    } catch (error) {
        console.error('Error al actualizar producto por ID:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
    
};

export const addProductoCarritoCompras = async (req, res) => {
    try {
        // Obtener la conexión
        const connection = await getConnection();

        // Ejecutar la consulta para obtener el carrito de compras
        const [rows, fields] = await connection.execute(
            queries.getCarritoCompras
        );

        // Enviar los resultados como respuesta
        res.json(rows);
    } catch (error) {
        console.error('Error al obtener el carrito de compras:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

export const getCarritoCompras = async (req, res) => {
    try {
        // Obtener la conexión
        const connection = await getConnection();

        // Ejecutar la consulta para obtener el carrito de compras
        const [rows, fields] = await connection.execute(
            queries.getCarritoCompras
        );

        // Enviar los resultados como respuesta
        res.json(rows);
    } catch (error) {
        console.error('Error al obtener el carrito de compras:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}
