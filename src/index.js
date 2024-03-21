import app from './app';
import express from 'express';

// Directorio Publico
app.use(express.static('public'));

// Lectura y parseo del body
app.use(express.json());

// Escuchar peticiones
app.listen(app.get('port'), () => {
    console.log(`Servidor corriendo en puerto`, app.get('port'));
});

