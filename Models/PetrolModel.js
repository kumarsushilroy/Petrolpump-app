
const mongoose = require('mongoose');

const petrolSchema = new mongoose.Schema({
    customername:{
        type:String,
        required:true
    }, 

    petrolamount:{
        type:Number,
        required:true
    },

    quantity:{
        type:Number
    },

    
    fueltype:{
        type:String,
        required:true
    }
}, {timestamps:true})


module.exports = mongoose.model('report', petrolSchema)