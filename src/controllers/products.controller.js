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

    const { nombre_producto, descripcion, precio, id_categoria } = req.body;
    let { cantidad } = req.body;

    if (nombre_producto == null || descripcion == null || precio == null || id_categoria == null) {
        return res.status(400).json({msg: 'Bad Request. Llena todos los campos'});
    }

    if (cantidad == null) {
        cantidad = 0;
    }

    try {
        
        const pool = await getConnection();

        await pool
            .request()
            .input("nombre_producto", sql.NVarChar, nombre_producto)
            .input("descripcion", sql.NVarChar, descripcion)
            .input("precio", sql.Decimal, precio)
            .input("cantidad", sql.Int, cantidad)
            .input("id_categoria", sql.Int, id_categoria)
            .query(
                queries.addNewProduct
            )
        res.json({nombre_producto, descripcion, precio, cantidad, id_categoria});

    } catch (error) {
        res.status(500);
        res.send(error.message);
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

    const { nombre_producto, descripcion, cantidad, precio, id_categoria } = req.body;
    const { id_producto } = req.params;

    if (nombre_producto == null || descripcion == null || precio == null || cantidad == null || id_categoria == null) {
        return res.status(400).json({msg: 'Bad Request. Llena todos los campos'});
    }

    const pool = await getConnection();

    const result = await pool
        .request()
        .input("nombre_producto", sql.NVarChar, nombre_producto)
        .input("descripcion", sql.NVarChar, descripcion)
        .input("precio", sql.Decimal, precio)
        .input("cantidad", sql.Int, cantidad)
        .input("id_categoria", sql.Int, id_categoria)
        .input("id_producto", id_producto)
        .query(
            queries.updateProductById
        )

    console.log(result);
    res.json({nombre_producto, descripcion, precio, cantidad, id_categoria});
    
    
};
