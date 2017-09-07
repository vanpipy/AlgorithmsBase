'use strict';

/*
 * Bubble sort
 * It will be generate a ascending order result.
 *
 * [54, 26, 93, 17, 77, 31, 44, 55, 20]
 *                  |
 *                  v
 * [26, 54, 93, 17, 77, 31, 44, 55, 20]
 *                  |
 *                  v
 * [26, 54, 17, 93, 77, 31, 44, 55, 20]
 *                  |
 *                  v
 * [26, 54, 17, 77, 93, 31, 44, 55, 20]
 *
 * @analysis
 * The bubble sort has cost calculated width n^2.
 * it's a large times to be excuted.
 */

function main (unorderedArray) {
    if (unorderedArray.length >= 2) {
        return bubbleSortIter(unorderedArray, unorderedArray.length);
    } else {
        return unorderedArray;
    }
}

function bubbleSortIter (array, orderedIndex) {
    if (orderedIndex > 0) {
        return bubbleSortIter(sort(array, orderedIndex, 1), orderedIndex - 1);
    } else {
        return array;
    }
}

function sort (array, endPoint, index) {
    if (index < endPoint) {
        if (array[index - 1] >= array[index]) {
            const temp = array[index - 1];
            array[index - 1] = array[index];
            array[index] = temp;
        }
        return sort(array, endPoint, index + 1);
    } else {
        return array;
    }
}

main([23,10,2,5,1,33,11,10]);

module.exports = main;
