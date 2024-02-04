const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    }, 

    password:{
        type:String,
        required:true
    },

   role:{
    type:Number,
    Default:0
   }
   
});

module.exports = mongoose.model("users", userSchema);