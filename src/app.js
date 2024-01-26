import config from './config';
import express from 'express';
import productsRoutes from './routes/products.routes'
import categoriesRoutes from './routes/categories.routes'
import usersRoutes from './routes/users.routes'

const app = express();
console.log(config);

// Habilitar CORS para todas las rutas
const cors = require('cors');
app.use(cors());

// settings
app.set('port', config.port);
console.log(`puerto ${config.port}`);

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(productsRoutes);
app.use(categoriesRoutes);
app.use(usersRoutes);


export default app;

