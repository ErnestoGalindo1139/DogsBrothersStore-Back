import { getConnection, queries, sql } from "../database"

export const getCategories = async (req, res) => {

    try {
        
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllCategories); 
        res.json(result.recordset);
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }


}
