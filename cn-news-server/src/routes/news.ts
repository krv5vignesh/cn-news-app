import express from 'express';
import newsController from '../controllers/news';

const router = express.Router();

router.get('/headlines', newsController.getHeadlines);

export default router;