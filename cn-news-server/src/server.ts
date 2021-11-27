import http from 'http';
import express, { Express } from 'express';
import routes from './routes/news';

const router: Express = express();
router.use(express.urlencoded({ extended: false }));
router.use(express.urlencoded({ extended: false }));

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With,Content-Type,Accept, Authorization');

  if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'GET');
      return res.status(200).json({});
  }
  next();
});

router.use('/', routes);

// Error handling
router.use((req, res, next) => {
  const error = new Error('Not found');
  return res.status(404).json({
      message: error.message
  });
});

const httpServer = http.createServer(router);
const PORT = 3001;
httpServer.listen(PORT, () => console.log(`The server is running on port ${PORT}`));