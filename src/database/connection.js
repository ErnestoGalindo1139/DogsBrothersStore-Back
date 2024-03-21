import mysql from 'mysql2/promise'; // Importa mysql2 en su modo promesa
import config from '../config';

const dbSettings = {
    user: config.dbUser,
    password: config.dbPassword,
    host: config.dbServer,
    database: config.dbDatabase,
}

export async function getConnection() {

    try {
        const connection = await mysql.createConnection(dbSettings);
        console.log('Conexión establecida correctamente');
        return connection;
    } catch (error) {
        console.error('Error en la conexión:', error);
        throw error;
    }
};

export { mysql };