import express from 'express';
import Hotel from '../models/Hotel.js';
import {
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  getAHotel,
  getAllHotels,
  getHotelRooms,
  updateHotel,
} from '../controllers/hotel.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();
//post
router.post('/', verifyAdmin, createHotel);

//update
router.put('/:id', verifyAdmin, updateHotel);

//delete
router.delete('/:id', verifyAdmin, deleteHotel);

//get
router.get('/find/:id', getAHotel);

//get all
router.get('/', getAllHotels);
router.get('/countByCity', countByCity);
router.get('/countByType', countByType);
router.get('/room/:id', getHotelRooms);

export default router;
