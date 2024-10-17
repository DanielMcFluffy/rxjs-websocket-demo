const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8000 });

wss.on('connection', (ws) => {
  console.log('Client connected');

  ws.on('message', (message) => {
    try {
      const parsedMessage = JSON.parse(message);
      console.log('Received:', parsedMessage);

      ws.send(JSON.stringify({ response: `${parsedMessage}` }));
    } catch (error) {
      console.error('Error parsing message:', error);

      ws.send(JSON.stringify({ error: 'Invalid JSON format' }));
    }
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});
