// Init environment variables
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import morgan from 'morgan';
import path from 'path';
import userController from './controllers/User';
import initDatabase from './database/init';

const app = express();
const port = process.env.PORT || 3001;

(async () => {
  // --- Database ---
  await initDatabase();

  // --- Middleware ----
  const clientBuildPath = path.join(__dirname, '../client/build');
  app.use(express.static(clientBuildPath));
  app.use(express.json()); // for parsing application/json
  // Use morgan middleware for logging
  app.use(morgan('dev'));

  // --- Routes ---
  // User API endpoints
  app.post('/api/users', userController.create);
  app.get('/api/users', userController.get);
  app.get('/api/users/:id', userController.getOne);
  app.put('/api/users/:id', userController.update);
  app.delete('/api/users/:id', userController.delete);

  // All remaining requests return the React app, so it can handle routing.
  app.get('/*', (req: express.Request, res: express.Response) => {
    res.sendFile(path.join(clientBuildPath, 'index.html'));
  });

  // --- Start the server ---
  const server = app.listen(port, () =>
    console.log(`Server listening on port ${port}!`),
  );

  server.keepAliveTimeout = 120 * 1000;
  server.headersTimeout = 120 * 1000;
})();
