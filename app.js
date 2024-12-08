import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import createCarRoute from './routes/createCar.js';
dotenv.config();
const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

const mongoURI = process.env.MONGO_URI;

if (!mongoURI) {
    console.error('MONGO_URI is not defined in environment variables.');
    process.exit(1); // Exit the process if the MONGO_URI is missing
}

//connect to MongoDB
async function main(){
    try{    await mongoose.connect(mongoURI);
        console.log('Connected to MongoDB Atlas');
    }catch(error){
        console.error('MongoDB connection error:',error);
        process.exit(1);
    }
}
main();
app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}/`);
    
})

app.use('/api/Cars', createCarRoute); 
