
const mongoose = require('mongoose');

const connect = ()=>{
    mongoose.connect('mongodb+srv://romanreins488:jb8giht3Spcx16GL@cluster0.fs6kazv.mongodb.net/Petrol-pump').then(()=>{
        console.log('Connection Successfull')
    }).catch((err)=>{
        console.log(err)
    })
};


module.exports = connect;