const http = require('http');
const router = require('./router');

const port = 3000;
const ip = '127.0.0.1';

const server = http.createServer(router);
console.log(`Listening on http://${ip}:${port}`);
server.listen(port, ip);
