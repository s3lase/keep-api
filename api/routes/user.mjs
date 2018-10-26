import express from 'express';
import userController from '../controllers/user';

const router = express.Router();

// router.get('/', (req, res) => {});

router.post('/', (req, res) => {
  const { user } = req.body.user;
  userController.createUser(user)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// router.delete('/', (req, res) => {});

// router.put('/', (req, res) => {});

export default router;
