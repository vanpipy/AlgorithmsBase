'use strict';

//It also equal to [0] * 26.
const letterArray = 'abcdefghijklmnopqrstuvwxyz'.split('').map(d => 0);
const startCode = 'a'.charCodeAt();

//:: string, string -> boolean
function main (x, y) {
    x = x.split('');
    y = y.split('');

    const arrX = replace(x, letterArray.slice());
    const arrY = replace(y, letterArray.slice());

    return compare(arrX, arrY);
}

//:: (array, array) -> array
function replace (origin, blank) {
    origin.map(o => {
        blank[o.charCodeAt() - startCode] = o;
    });

    return blank;
}

//:: array, array -> boolean
function compare (x, y) {
    let i = 0, result = true;

    while (i < x.length) {
        if (x[i] === y[i]) {
            i += 1;
        } else {
            result = false;
            break;
        }
    }

    return result;
}

const rs = main('Hello bitch', 'lloeH bchit');
console.info(rs);

module.exports = main;
