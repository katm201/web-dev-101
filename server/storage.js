const fs = require('fs');
const path = require('path');
const queryString = require('query-string');

const addString = function(string) {
    const formattedObj = queryString.parse(string);
    const formatted = Object.keys(formattedObj)[0];
    const text = fs.readFileSync(path.join(__dirname, 'strings.txt'), 'utf8');
    fs.writeFileSync(path.join(__dirname, 'strings.txt'), text + '\n' + formatted, 'utf8');
    return { statusCode: 201, data: 'ok' };
}

const getStrings = function() {
    const text = fs.readFileSync(path.join(__dirname, 'strings.txt'), 'utf8');
    return text.split('\n');
}

module.exports = { addString, getStrings };
