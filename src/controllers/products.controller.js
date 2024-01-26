import { getConnection, queries, sql } from "../database"

export const getProducts = async (req, res) => {

    try {
        
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllProducts); 
        res.json(result.recordset);
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }


}

export const createNewProduct = async (req, res) => {

    const { nombre_producto, descripcion_producto, precio_producto, url_producto, id_categoria } = req.body;
    let { cantidad_producto } = req.body;

    if (nombre_producto == null || descripcion_producto == null || precio_producto == null || id_categoria == null || url_producto == null) {
        return res.status(400).json({msg: 'Bad Request. Llena todos los campos'});
    }
    
    if (cantidad_producto == null) {
        cantidad_producto = 0;
    }
    
    console.log(req.body);
    try {
        
        const pool = await getConnection();

        await pool
            .request()
            .input("nombre_producto", sql.NVarChar, nombre_producto)
            .input("precio_producto", sql.Decimal, Number(precio_producto))
            .input("cantidad_producto", sql.Int, Number(cantidad_producto))
            .input("descripcion_producto", sql.NVarChar, descripcion_producto)
            .input("id_categoria", sql.Int, Number(id_categoria))
            .input("url_producto", sql.NVarChar, url_producto)
            .query(
                queries.addNewProduct
            )
        console.log({nombre_producto, descripcion_producto, precio_producto, cantidad_producto, url_producto, id_categoria});

    } catch (error) {
        res.status(500);
        res.send(error.message);
        console.log(error.message);
    }
    

}

export const getProductById = async (req, res) => {
    const { id_producto } = req.params;

    const pool = await getConnection();

    const result = await pool
        .request()
        .input("id_producto", id_producto)
        .query(
            queries.getProductById
        )

    res.send(result.recordset[0]);
};

export const getActiveProducts = async (req, res) => {

    const pool = await getConnection();

    const result = await pool
        .request()
        .query(
            queries.getActiveProducts
        )

    res.send(result.recordset);
};

export const getInactiveProducts = async (req, res) => {

    const pool = await getConnection();

    const result = await pool
        .request()
        .query(
            queries.getInactiveProducts
        )

    res.send(result.recordset);
};

export const deleteProductById = async (req, res) => {
    const { id_producto } = req.params;

    const pool = await getConnection();

    const result = await pool
        .request()
        .input("id_producto", id_producto)
        .query(
            queries.deleteProduct
        )

    res.sendStatus(204);
};

export const getTotalProducts = async (req, res) => {

    const pool = await getConnection();

    const result = await pool
        .request()
        .query(
            queries.getTotalProducts
        )

    console.log(result);
    res.json(result.recordset);
};

export const updateProductById = async (req, res) => {

    const { nombre_producto, descripcion_producto, cantidad_producto, url_producto, precio_producto, id_categoria } = req.body;
    const { id_producto } = req.params;
    console.log(id_producto);

    if (nombre_producto == null || descripcion_producto == null || precio_producto == null || cantidad_producto == null || id_categoria == null) {
        return res.status(400).json({msg: 'Bad Request. Llena todos los campos'});
    }

    const pool = await getConnection();

    const result = await pool
        .request()
        .input("nombre_producto", sql.NVarChar, nombre_producto)
        .input("descripcion_producto", sql.NVarChar, descripcion_producto)
        .input("precio_producto", sql.Decimal, precio_producto)
        .input("cantidad_producto", sql.Int, cantidad_producto)
        .input("id_categoria", sql.Int, id_categoria)
        .input("url_producto", sql.NVarChar, url_producto)
        .input("id_producto", id_producto)
        .query(
            queries.updateProductById
        )

    console.log(result);
    res.json({nombre_producto, descripcion_producto, precio_producto, cantidad_producto, id_categoria});
    
    
};
