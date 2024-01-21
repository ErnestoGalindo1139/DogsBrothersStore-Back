import config from './config';
import express from 'express';
import productsRoutes from './routes/products.routes'

const app = express();
console.log(config);

// settings
app.set('port', config.port);
console.log(`puerto ${config.port}`);

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(productsRoutes);


export default app;
