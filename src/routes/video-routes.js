import express from 'express';
import { getVideo, createVideo, updateVideo, deleteVideo } from '../controller/video-controller.js'


const router = express.Router();

router.get('/videos', getVideo);
router.post('/videos', createVideo);
router.put('/videos/:id', updateVideo);
router.delete('/videos/:id', deleteVideo);

export default router;