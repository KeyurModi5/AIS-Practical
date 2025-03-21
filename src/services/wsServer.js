const WebSocket = require("ws");

const initWebSocket = (server) => {
  const wss = new WebSocket.Server({ server });

  wss.on("connection", (ws) => {
    console.log("🔌 New WebSocket connection");

    ws.on("message", (message) => {
      console.log("Received:", message);
      const processed = message.toString().toUpperCase();
      ws.send(`Processed: ${processed}`);
    });

    ws.send("👋 Connected to WebSocket server!");
  });

  return wss;
};

module.exports = initWebSocket;
