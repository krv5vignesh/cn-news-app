import express from 'express';
import newsController from '../controllers/news';

const router = express.Router();

router.get('/headlines', newsController.getHeadlines);
router.get('/search/:searchTerm', newsController.searchAllNews);
router.get('/search/uk/:searchTerm', newsController.searchNewsFromUK);

export default router;