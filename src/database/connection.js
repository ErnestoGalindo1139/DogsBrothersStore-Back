import sql from 'mssql';
import config from '../config';

const dbSettings = {
    user: config.dbUser,
    password: config.dbPassword,
    server: config.dbServer,
    database: config.dbDatabase,
    options: {
        encrypt: true,
        trustServerCertificate: true, // Establecer en true para desactivar la verificación del certificado
    },
}

export async function getConnection() {
    try {
        const pool = await sql.connect(dbSettings);
        console.log('Conexión establecida correctamente');
        return pool;
    } catch (error) {
        console.error('Error en la conexión:', error);
        throw error;
    }
};

export { sql };