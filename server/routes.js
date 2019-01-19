const url = require('url');

const storage = require('./storage');

const serveError = function() {
    return { statusCode: 404, data: 'Not Found' };
}

const routes = function(route, method) {
    const { pathname, query } = url.parse(route);
    const baseRoute = '/' + pathname.substring(1).split('/')[0];
    const routeDictionary = {
        '/storage': {
            'GET': () => storage.getStrings(),
            'POST': () => storage.addString(query),
        },
        error: serveError,
    };

    const exists = routeDictionary[baseRoute] && routeDictionary[baseRoute][method];

    const handler = exists ? routeDictionary[baseRoute][method] : routeDictionary.error;

    return handler(route);
}

module.exports = routes;
