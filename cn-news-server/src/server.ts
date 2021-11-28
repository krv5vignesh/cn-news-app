import express, { Express } from 'express';
import routes from './routes/news';

const app: Express = express();

// Swagger configuration
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "News API",
      version: "1.0.0",
      description:
        "News API endpoints",
    },
    servers: [
      {
        url: "http://localhost:3001/",
      },
    ],
  },
  apis: ["./routes/news.ts"],
};

const specs = swaggerJsdoc(options);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs)
);


// API configuration
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

app.use((req, res, next) => {
  const error = new Error('Not found');
  return res.status(404).json({
      message: error.message
  });
});

const PORT = 3001;
app.listen(PORT, () => console.log(`The server is running on port ${PORT}`));