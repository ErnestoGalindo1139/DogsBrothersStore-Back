import { getConnection, queries, mysql } from "../database"

export const getUsers = async (req, res) => {

    try {
        // Obtener la conexión
        const connection = await getConnection();
        // Ejecutar la consulta
        const [rows, fields] = await connection.execute(queries.getAllUsers);
        
        // Enviar los resultados como respuesta
        res.json(rows);
        
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }


}

export const createNewUser = async (req, res) => {

    const { nombre_completo, apellido_paterno, apellido_materno, correo_electronico, nombre_usuario, contrasena, numero_celular } = req.body;

    console.log(req.body);

    if (!nombre_completo || !apellido_paterno || !apellido_materno || !correo_electronico || !nombre_usuario || !contrasena || !numero_celular) {
        return res.status(400).json({msg: 'Bad Request. Llena todos los campos'});
    }
    
    try {
        // Obtener la conexión
        const connection = await getConnection();

        // Ejecutar la consulta para insertar un nuevo usuario
        await connection.execute(
            queries.addNewUser,
            [nombre_completo, apellido_paterno, apellido_materno, correo_electronico, nombre_usuario, contrasena, numero_celular]
        );

        console.log({nombre_completo, apellido_paterno, apellido_materno, correo_electronico, nombre_usuario, contrasena, numero_celular});
        
        res.status(201).json({msg: 'Usuario creado exitosamente'});

    } catch (error) {
        res.status(500);
        res.send(error.message);
        console.log(error.message);
    }
    

}

export const getUserByEmail = async (req, res) => {
    const { correo_electronico } = req.params;

    try {
        // Obtener la conexión
        const connection = await getConnection();

        // Ejecutar la consulta para obtener el usuario por correo electrónico
        const [rows, fields] = await connection.execute(
            queries.getUserByEmail,
            [correo_electronico]
        );

        if (rows.length === 0) {
            return res.status(404).json({msg: 'Usuario no encontrado'});
        }

        // Enviar el resultado como respuesta
        res.json(rows[0]);
    } catch (error) {
        console.error('Error al obtener usuario por correo electrónico:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};