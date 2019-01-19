const express = require('express');
const path = require('path');
const router = require('./router');

const app = express();

app.use(express.static(path.join(__dirname, '..', 'client')));

app.use('/', router);

const port = 3000;
const ip = '127.0.0.1';

app.listen(port);
console.log(`Listening on http://${ip}:${port}`);
