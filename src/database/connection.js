import sql from 'mssql';

const dbSettings = {
    user: 'admin',
    password: 'perroshermanos',
    server: 'dogsbrothersstore.cp02w6yq6pw9.us-east-2.rds.amazonaws.com',
    database: 'DogsBrothersStore',
    options: {
        encrypt: true,
        trustServerCertificate: true, // Establecer en true para desactivar la verificación del certificado
    },
}

async function getConnection() {
    try {
        const pool = await sql.connect(dbSettings);
        console.log('Conexión establecida correctamente');
        return pool;
    } catch (error) {
        console.error('Error en la conexión:', error);
        throw error;
    }
}

getConnection();
