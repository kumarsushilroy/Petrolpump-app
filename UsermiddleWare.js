const jwt = require("jsonwebtoken");
const userModel = require('./Models/UserModel');

const userMiddleware = async(req,res,next)=>{
    const token = req.headers['authorization'].split(' ')[1];
    if(!token){
        return res.status(401).send({
            success:false,
            msg:'please provide token' 
        })
    }else{
        jwt.verify(token, process.env.SECRETKEY, (err, decode)=>{
            if(err){
                return res.status(401).send({
                    success:false,
                    msg:'error while verifying token !',
                    err
                })
            }else{
                req.loginuser = decode,
                console.log(decode) 
                next();
            }
        })
      }
    };




    const adminMiddleware = async(req,res,next)=>{  
    
        try {
         
          const user = await userModel.findById(req.loginuser._id);  
          console.log(user);
          if(user.role!=1){
             return res.status(401).send({message:'unauthorised admin access !'});
          }else{
             next(); 
          }
         
        } catch (error) {
          console.log(error),
           res.status(500).send({
             success:false,
             msg:'error',
             error
          })
        }
        
         
     }

module.exports = {userMiddleware, adminMiddleware};