const http = require('http');

const PORT = process.env.PORT || 3000;
const COUNT = process.env.COUNT || 1;

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('OK');
    return;
  }

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`Hello from Kubernetes 🚀 Count: ${COUNT}\n`);
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
