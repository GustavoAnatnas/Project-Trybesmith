import express from 'express';
import ProductRouter from './routes/productsRoute';
import UserRouter from './routes/usersRoute';

const app = express();

app.use(express.json());

app.use('/products', ProductRouter);

app.use('/users', UserRouter);

export default app;
