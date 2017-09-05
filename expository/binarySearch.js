'use strict';

//TODO: The list need ascend order, from low to high.

function main (list, item) {
    return binaryIter(list, Math.floor(list.length / 2), item);
}

function binaryIter (array, halfIndex, item) {
    if (array.length > 2) {
        if (item <= array[halfIndex - 1]) {
            array = array.slice(0, halfIndex);
            return binaryIter(array, Math.floor(array.length / 2), item);
        } else {
            array = array.slice(halfIndex, array.length);
            return binaryIter(array, Math.floor(array.length / 2), item);
        }
    } else {
        return item == array[0] || item == array[1];
    }
}

module.exports = main;
