import express from 'express';
import userController from '../controllers/user';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post("/login",(req,res)=>{
  const email = req.body.email;
  const password = req.body.password;
  userController.findUser(email,password).then(data=>{
  if(data){
    console.log(`this is the user we have found ${data}`)
    const token = jwt.sign({id:data._id},config.secret,{
      expiresIn:86400 //expires in 24 hours
    });
    res.status(200).send({auth:true,token:token});
  }
  res.status(200).send({auth:false,token:null});
  }).catch(err=>{
    console.log(`an error occured...`+err)
    //respond with an error message
  });
});

// router.post("/register",(req,res)=>{
//  const user = req.body.user;
//  userController.createUser(user).then(data=>{
//    console.log(data)
//  });
// });


export default router;