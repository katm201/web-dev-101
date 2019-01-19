const express = require('express');
const url = require('url');

const storage = require('./storage');

const router = express.Router();

const headers = {
    'access-control-allow-origin': '*',
    'access-control-allow-methods': 'GET, OPTIONS, POST',
    'access-control-allow-headers': 'content-type, accept',
    'access-control-max-age': 10, // Seconds
};

const sendResponse = function(response, { data, statusCode, contentType }) {
    statusCode = statusCode || 200;
    headers['content-type'] = contentType || 'application/json';
    response.writeHead(statusCode, headers);
    response.write(data);
    response.end();
};

router.get('/storage', function(request, response) {
    const strings = storage.getStrings();
    const data = JSON.stringify(strings);
    sendResponse(response, { data });
});

router.post('/storage', function(request, response) {
    const route = request.url;
    const { query } = url.parse(route);
    storage.addString(query);
    sendResponse(response, { data: 'ok', statusCode: 201 });
});

router.get('*', function(request, response) {
    sendResponse(response, { data: 'Not Found', statusCode: 404 });
});

module.exports = router;
