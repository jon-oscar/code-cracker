import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 3001;

const clientBuildPath = path.join(__dirname, "../client/build");

app.use(express.static(clientBuildPath));

app.get("/api/test", (req, res) => {
  res.json({ message: "Hello from server!" });
});
app.get("/*", function (req, res) {
  res.sendFile(path.join(clientBuildPath, "index.html"));
});

const server = app.listen(port, () =>
  console.log(`Server listening on port ${port}!`)
);

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;
