import express from 'express';
import {createProduct, getProductByVideoId} from '../controllers/Product.js';

const router = express.Router();

router.post('/product', createProduct);
router.get('/videos/:video_id/product', getProductByVideoId);

export default router;