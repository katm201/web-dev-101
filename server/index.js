const express = require('express');
const path = require('path');
const router = require('./routes');

const app = express();

// log requests
app.use(function(request, response, next) {
    const { method, url } = request;
    console.log(`Serving request type ${method} for url ${url}`);
    next();
});

// serve static files
app.use(express.static(path.join(__dirname, '..', 'client')));

// router for API
app.use('/', router);

const port = 3000;
const ip = '127.0.0.1';

app.listen(port);
console.log(`Listening on http://${ip}:${port}`);
