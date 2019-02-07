const routes = require('./routes');

const headers = {
    'access-control-allow-origin': '*',
    'access-control-allow-methods': 'GET, OPTIONS',
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

const requestHandler = function(request, response) {
    const { method, url } = request;
    console.log(`Serving request type ${method} for url ${url}`);

    sendResponse(response, routes(url, request.method));
}

module.exports = requestHandler;
