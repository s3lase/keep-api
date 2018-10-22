import express from 'express';
const router = express.Router();

router.get('/',(req,res)=>{
  res.send("THIS IS THE API INDEX")
})

export default router;