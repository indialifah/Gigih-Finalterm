import express from 'express';
import { createVideo, getVideoById, getAllVideos } from '../controllers/Video.js';

const router = express.Router();

router.post('/videos', createVideo);
router.get('/videos/:id', getVideoById);
router.get('/videos', getAllVideos);

export default router;