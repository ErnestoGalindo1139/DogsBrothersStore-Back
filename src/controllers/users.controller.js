import { getConnection, queries, sql } from "../database"

export const getUsers = async (req, res) => {

    try {
        
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllUsers); 
        res.json(result.recordset);
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }


}

export const createNewUser = async (req, res) => {

    const { nombre_completo, apellido_paterno, apellido_materno, correo_electronico, nombre_usuario, contrasena, numero_celular } = req.body;

    console.log(req.body);

    if (nombre_completo == null || apellido_paterno == null || apellido_materno == null || correo_electronico == null || nombre_usuario == null || contrasena == null || numero_celular == null ) {
        return res.status(400).json({msg: 'Bad Request. Llena todos los campos'});
    }
    
    try {
        
        const pool = await getConnection();

        await pool
            .request()
            .input("nombre_completo", sql.NVarChar, nombre_completo)
            .input("apellido_paterno", sql.NVarChar, apellido_paterno)
            .input("apellido_materno", sql.NVarChar, apellido_materno)
            .input("correo_electronico", sql.NVarChar, correo_electronico)
            .input("nombre_usuario", sql.NVarChar, nombre_usuario)
            .input("contrasena", sql.NVarChar, contrasena)
            .input("numero_celular", sql.VarChar, numero_celular)
            .query(
                queries.addNewUser
            )
        console.log({nombre_completo, apellido_paterno, apellido_materno, correo_electronico, nombre_usuario, contrasena, numero_celular});

    } catch (error) {
        res.status(500);
        res.send(error.message);
        console.log(error.message);
    }
    

}

export const getUserByEmail = async (req, res) => {
    const { correo_electronico } = req.params;

    const pool = await getConnection();

    const result = await pool
        .request()
        .input("correo_electronico", correo_electronico)
        .query(
            queries.getUserByEmail
        )

    res.send(result.recordset[0]);
};