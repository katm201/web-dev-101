const strings = [];

const addString = function(string) {
    strings.push(string);
    return { statusCode: 201, data: 'ok' };
}

const getStrings = function() {
    return { data: JSON.stringify(strings) };
}

module.exports = { addString, getStrings };
