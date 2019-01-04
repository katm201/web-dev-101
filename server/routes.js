const fs = require('fs');
const path = require('path');

const serveError = function() {
    return { statusCode: 404, data: 'Not Found' };
}

const sendOptions = function() {
    return {};
}

const sendFiles = function(route) {
    const [, directory, filename] = route.split('/');
    const filetype = filename.split('.')[1];
    const type = filetype === 'js' ? 'javascript' : filetype;
    const filepath = path.join(__dirname, '..', 'client', directory, filename);
    const data = fs.readFileSync(filepath, 'utf8');
    return { data, contentType: `text/${type}` };
}

const routes = function(route, method) {
    const baseRoute = '/' + route.substring(1).split('/')[0];
    const routeDictionary = {
        '/': {
            'GET': () => sendFiles('/./index.html'),
            'OPTIONS': sendOptions,
        },
        '/assets': {
            'GET': sendFiles,
        },
        '/scripts': {
            'GET': sendFiles,
        },
        error: serveError,
    };

    const exists = routeDictionary[baseRoute] && routeDictionary[baseRoute][method];

    const handler = exists ? routeDictionary[baseRoute][method] : routeDictionary.error;

    return handler(route);
}

module.exports = routes;
