const express = require('express');
const connect = require('./Connection');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const petrolRoute = require('./Routes/PetrolRoute');
const userRoute = require('./Routes/UserRoute');

const app = express();

const port = process.env.PORT || 4000


// app.get('/get', (req,res)=>{
//     res.send({message:'true'})
// })

// Middlewares
 app.use(express.json());
 app.use(cors());

 app.use(petrolRoute);
 app.use(userRoute);

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
    connect();
})