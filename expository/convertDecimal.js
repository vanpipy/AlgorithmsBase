'use strict';

const GROUP = '0123456789ABCDEF';

function convertNumber (number, base) {
    return convertIter(number, 0, base, []);
}

function convertIter (origin, remainder, divisor, result) {
    return Math.floor(origin) > 0 ?
            convertIter( Math.floor(origin / divisor), origin % divisor, divisor, result.concat(GROUP[Math.floor(origin % divisor)])) :
            read(result);
}

function read (reversionArray) {
    let result = '';
    while (reversionArray.length) {
        result += reversionArray.pop();
    }
    return result;
}

module.exports = convertNumber;
