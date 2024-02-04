
const userModel = require('../Models/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const createUser = async(req,res)=>{
    try {
        const {username, email, password, role} = req.body;
        if(!username || !email || !password) {
            return res.status(404).send({
                success:false,
                msg:'all fields require'
            })
        }
        const salt = await bcrypt.genSalt(10);
        const hashpass = await bcrypt.hash(password,salt);
        const user = new userModel({username, email, password:hashpass, role});
        const newUser = await user.save();
        return res.status(201).send({
            success:true,
            msg:'user created',
            newUser
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


const loginUser = async(req,res)=>{
    try {
        const user = {email, password} = req.body;
        const loginuser = await userModel.findOne({email});
       
        if(!loginuser){
            return res.status(404).send({
                success:false,
                msg:'please login'
            })
        }
        const matchPassword = await bcrypt.compare(password,loginuser.password);
        if(!matchPassword){
            return res.status(404).send({
                success:false,
                msg:'password not match !'
            })
        }

        jwt.sign({_id:loginuser._id}, process.env.SECRETKEY, {expiresIn:"3d"}, (err,token)=>{
            if(err){
                console.log(err) 
            }else{
                return res.status(201).send({
                    success:true,
                    msg:'login successfully ',
                    loginuser,
                    token:token
                })
            }
        })

        
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success:false,
            msg:'internal server error !',
            error
        })
    }
}


module.exports = {createUser, loginUser}