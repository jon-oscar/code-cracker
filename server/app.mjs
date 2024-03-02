import express from "express";
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type("html").send("<h1>Hello world</h1>"));

const server = app.listen(port, () =>
  console.log(`Server listening on port ${port}!`)
);

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;
