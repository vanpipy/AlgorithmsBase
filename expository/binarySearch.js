'use strict';

//TODO: The list need ascend order, from low to high.

function main (list, item) {
    if (list.length) {
        return binaryIter(list, Math.floor(list.length / 2), item);
    } else {
        return false;
    }
}

function binaryIter (array, middle, item) {
    if (array.length > 2) {
        if (item === array[middle - 1]) {
            return true;
        } else if (item < array[middle - 1]) {
            array = array.slice(0, middle);
            return binaryIter(array, Math.floor(array.length / 2), item);
        } else {
            array = array.slice(middle, array.length);
            return binaryIter(array, Math.floor(array.length / 2), item);
        }
    } else {
        return item == array[0] || item == array[1];
    }
}

module.exports = main;
