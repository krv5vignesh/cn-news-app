import http from 'http';
import express, { Express } from 'express';
import routes from './routes/news';

const app: Express = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With,Content-Type,Accept, Authorization');

  if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'GET');
      return res.status(200).json({});
  }
  next();
});

app.use('/', routes);

// Error handling
app.use((req, res, next) => {
  const error = new Error('Not found');
  return res.status(404).json({
      message: error.message
  });
});

const PORT = 3001;
app.listen(PORT, () => console.log(`The server is running on port ${PORT}`));