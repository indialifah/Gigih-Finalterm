import mongoose from "mongoose";

export const dbConnect = (mongo_url) => {
    
    mongoose.connect(mongo_url, {
        socketTimeoutMS: 1000,
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    const database = mongoose.connection;

    database.on('error', (error) => {
        console.log(error);
    });

    database.once('connected', () => {
        console.log('Database Connected Successfully');
    })
} 