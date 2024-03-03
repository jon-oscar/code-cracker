import express from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 3001;

const clientBuildPath = path.join(__dirname, '../client/build');

app.use(express.static(clientBuildPath));

app.get('/api/test', (req: express.Request, res: express.Response) => {
  res.json({
    message: 'Hello from server!',
  });
});
app.get('/*', (req: express.Request, res: express.Response) => {
  res.sendFile(path.join(clientBuildPath, 'index.html'));
});

const server = app.listen(port, () =>
  console.log(`Server listening on port ${port}!`),
);

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;
