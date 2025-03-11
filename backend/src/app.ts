import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
import { errors } from 'celebrate';
import config from './config';
import errorHandler from './middlewares/error-handler';
import productRouter from './routes/product';
import orderRouter from './routes/order';
import { errorLogger, requestLogger } from './middlewares/logger';

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

mongoose.connect(`${config.dbAddress}`);

app.use(requestLogger);

app.use('/product', productRouter);
app.use('/order', orderRouter);

app.use(errorLogger);

app.use(errors());
app.use(errorHandler);

app.use(express.static(path.join(__dirname, 'public')));
app.listen(config.port, () => {
  console.log(`App listening on port ${config.port}`);
});
