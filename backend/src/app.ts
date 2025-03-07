import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import cors from 'cors';
import path from 'path';
import router from './product/product.route';


const app = express();
app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
 
mongoose.connect(`${process.env.DB_ADDRESS}`);

app.use('/product', router);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(process.env.PORT, () => {
    console.log(`App listening on port ${process.env.PORT}`)
});