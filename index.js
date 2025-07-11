const express= require('express');
const bodyparser = require('body-parser');
const env = require('dotenv').config();
const userRoutes = require('./routes/user.js');
const mongoose = require('mongoose');
const userModel = require('./models/models.js')

const app = express();

const PORT =5000;

mongoose.connect("mongodb://localhost:27017/")//DataBase
.then(()=>{
    console.log("Database Connect Successfully");
    
}).catch((error)=>{
    console.log({error,message:"Database not Connected"});
    
})

app.use(bodyparser.json()); //middleware
app.use('/users',userRoutes)

// server listen:

app.listen(process.env.PORT,()=>{
    console.log(`server listening at http://localhost:${PORT}`);
    
});

// GET_Routes:-
app.get('/',(req,res)=>{
    console.log("test..!");
    res.send('hello from homepage')
    
})


