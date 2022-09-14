import express from 'express';
import ProductRouter from './routes/productsRoute';
import UserRouter from './routes/usersRoute';
import OrderRouter from './routes/ordersRoute';

const app = express();

app.use(express.json());

app.use('/products', ProductRouter);

app.use('/users', UserRouter);

app.use('/orders', OrderRouter);

export default app;
