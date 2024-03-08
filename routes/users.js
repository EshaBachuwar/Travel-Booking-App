import express from 'express';
import {
  deleteUser,
  getAUser,
  getAllUsers,
  updateUser,
} from '../controllers/user.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

// router.get('/checkauthentication', verifyToken, (req, res, next) => {
//   res.send('hello user');
// });
// router.get('/checkuser/:id', verifyUser, (req, res, next) => {
//   res.send('hello user');
// });
// router.get('/checkadmin/:id', verifyAdmin, (req, res, next) => {
//   res.send('hello admin');
// });

//update
router.put('/:id', verifyUser, updateUser);

//delete
router.delete('/:id', verifyUser, deleteUser);

//get
router.get('/:id', verifyUser, getAUser);

//get all
router.get('/', verifyAdmin, getAllUsers);

export default router;
