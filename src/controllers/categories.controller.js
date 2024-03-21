import { getConnection, queries } from "../database"

export const getCategories = async (req, res) => {
    try {
        // Obtener la conexión
        const connection = await getConnection();
        
        // Ejecutar la consulta
        const [rows, fields] = await connection.execute(queries.getAllCategories);
        
        res.json(rows);
        
    } catch (error) {
        console.error('Error al ejecutar la consulta:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }


}
