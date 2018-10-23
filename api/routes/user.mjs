import express from 'express';
const router = express.Router();
import userController  from '../controllers/user'

router.get('/',(req,res)=>{

})

router.post("/",(req,res)=>{
  const user =   req.body.user;
  userController.createUser(user).then(data=>{
    console.log(JSON.stringify(data))
  }).catch(err=>{
    console.log(`an error occured while`)
  });
});

router.delete("/",(req,res)=>{

});

router.put("/",(req,res)=>{

})

export default router;