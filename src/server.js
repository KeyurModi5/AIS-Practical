require("dotenv").config();
const express = require("express");
const http = require("http");
require("./config/connection");
const errorHandler = require("./helpers/error");
const rootRoutes = require("./routes/index");

const initWebSocket = require("./services/wsServer");

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json({ limit: "10kb" }));
app.use(rootRoutes);
app.use(errorHandler);
server.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);

// Initialize WebSocket server
initWebSocket(server);
