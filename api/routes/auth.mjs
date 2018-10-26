import express from 'express';
import jwt from 'jsonwebtoken';
import userController from '../controllers/user';
import config from '../config/config';

const router = express.Router();

router.post('/login', (req, res) => {
  const user = { email: req.body.email, password: req.body.password };
  userController
    .findUser(user.email, user.password)
    .then((data) => {
      if (data) {
        const token = jwt.sign({ id: data.id }, config.secret, {
          expiresIn: 86400, // expires in 24 hours
        });
        res.status(200).send({ auth: true, token });
      }
      res.status(200).send({ auth: false, token: null });
    })
    .catch((err) => {
      console.log(`an error occured... ${err}`);
      // respond with an error message
    });
});

// router.post("/register",(req,res)=>{
//  const user = req.body.user;
//  userController.createUser(user).then(data=>{
//    console.log(data)
//  });
// });

export default router;
