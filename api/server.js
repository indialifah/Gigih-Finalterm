import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

import commentRouter from './routes/Comment.js';
import productRouter from './routes/Product.js';
import videoRouter from './routes/Video.js';
import {dbConnect} from './config/db.config.js';

dotenv.config();

const start = async() => {
    const app = express();

    const db_url = process.env.MONGO_CONNECTION_STRING;
    const port = process.env.PORT || 3000;

    await dbConnect(db_url);


    app.use(bodyParser.json());

    app.use(commentRouter);
    app.use(productRouter);
    app.use(videoRouter);

    app.use(cors());

    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    })
};

start();