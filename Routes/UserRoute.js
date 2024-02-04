const express = require('express');
const { createUser, loginUser } = require('../Controllers/UserControllers');
const { userMiddleware, adminMiddleware } = require('../UsermiddleWare');
// const { userMiddleware, adminMiddleware, userMiddleware } = require('../UsermiddleWare');


const router = express.Router();

router.post('/create/user', createUser);

router.post('/login/user', loginUser);

// router.get('/check', userMiddleware, adminMiddleware, (req,res)=>{ 
//     res.send({message:'success'})
// })

router.get('/private/route', userMiddleware, (req,res)=>{
    return res.send({message:'ok'})
});

router.get('/admin/route', userMiddleware, adminMiddleware, (req,res)=>{
    res.send({success:'ok'})
})


module.exports = router;