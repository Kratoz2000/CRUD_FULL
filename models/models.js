const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstname:String,
    lastname:String,
    age:Number
});


const userModel =mongoose.model("userModel",userSchema);

module.exports =[userSchema,userModel]
