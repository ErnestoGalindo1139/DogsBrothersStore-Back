import './database/connection';
import { getConnection } from './database/connection';
const express = require('express');
require('dotenv').config();


// Crear el servidor de express
const app = express();

// Directorio Publico
app.use(express.static('public'));

// Lectura y parseo del body
app.use(express.json());

// Rutas
// TODO: auth // crear, login, renew
app.use('/api/auth', require('./routes/auth'));
// TODO: CRUD: Eventos

// Ejemplo de cómo usar la conexión en una ruta
app.get('/api/ejemplo', async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query('SELECT *');
        res.json(result.recordset);
    } catch (error) {
        console.error('Error al ejecutar la consulta:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});


// Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});

