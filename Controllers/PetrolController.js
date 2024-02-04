
const petrolModel = require('../Models/PetrolModel');

const addReport = async(req,res)=>{
    try {
        const {customername, fueltype, petrolamount, quantity} = req.body;
        if(!customername || !fueltype || ! petrolamount || !quantity){
            return res.status(401).send({
                success:false,
                msg:'all fields require !'
            })
        }
        const report = new petrolModel({customername, fueltype, petrolamount, quantity});
        const newReport = await report.save();
        return res.status(201).send({
            success:true,
            msg:'report Added ',
            newReport
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            msg:'internal server error !',
            error
        })
    }
};


// get all data
const getReport = async(req,res)=>{
    try {
        const getData = await petrolModel.find({});
        return res.status(201).send({
            success:true,
            msg:'all records found ',
            getData
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            msg:'internal server error !',
            error
        })
    }
}


const singleInfo = async(req,res)=>{
    const id = req.params.id;
   const allInfo = await petrolModel.findById(id);
   res.send({
      allInfo
   })
},

const updateInfo = async(req,res)=>{
    const id = req.params.id;
    const update = await petrolModel.findByIdAndUpdate({_id:id}, req.body, {new:true});
    return res.status(201).send({
        success:true,
        update
    })
}


module.exports = {addReport, getReport, singleInfo, updateInfo};