import app from './app';
import { getConnection } from './database/connection';
import express from 'express';

// Directorio Publico
app.use(express.static('public'));

// Lectura y parseo del body
app.use(express.json());

// // Rutas
// // TODO: auth // crear, login, renew
// app.use('/api/auth', require('./routes/auth'));
// // TODO: CRUD: Eventos

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
app.listen(app.get('port'), () => {
    console.log(`Servidor corriendo en puerto`, app.get('port'));
});

