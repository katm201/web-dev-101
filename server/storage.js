const fs = require('fs');
const path = require('path');

const addString = function(string) {
    const text = fs.readFileSync(path.join(__dirname, 'strings.txt'), 'utf8');
    fs.writeFileSync(path.join(__dirname, 'strings.txt'), text + '\n' + string, 'utf8');
    return { statusCode: 201, data: 'ok' };
}

const getStrings = function() {
    const text = fs.readFileSync(path.join(__dirname, 'strings.txt'), 'utf8');
    const strings = text.split('\n');
    return { data: JSON.stringify(strings) };
}

module.exports = { addString, getStrings };
