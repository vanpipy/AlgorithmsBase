'use strict';

/*
 * Merge sort.
 *
 * @processing
 * [20,19,18,17,16,15,14,13,12,11,10]
 * [0,1,2,3,4,5,6,7,8,9,10] - indexs
 *
 * [0,1] - sort
 * [2,3] - sort
 * [4,5] - sort
 * [6,7] - sort
 * [8,9] - sort
 * [10] - sort
 *       |
 *       V
 * [ [0,1], [2,3] ] -> [0,1,2,3] - sorted
 * [ [4,5], [6,7] ] -> [4,5,6,7] - sorted
 * [ [8,9], [10] ] -> [8,9,10] - sorted
 *       |
 *       V
 * [ [0,1,2,3], [4,5,6,7] ] -> [0,1,2,3,4,5,6,7] - sorted
 * [ [8,9,10] ] -> [1,2,3,4,5,6,7] - sorted
 *       |
 *       V
 * [ [0,1,2,3,4,5,6,7], [8,9,10] ] -> [0,1,2,3,4,5,6,7,8,9,10] - sorted
 */

var result;

function main (array) {
    return array && array.length ? mergeSort(array) : array;
}

function mergeSort (array) {
    result = array;
    split(array.map((d, i) => i), divisible(array.length, 2));
    return result;
}

function split (originalArrayIndexs, halfIndex) {
    if (originalArrayIndexs.length > 1) {
        const leftIndexs = originalArrayIndexs.slice(0, halfIndex);
        const rightIndexs = originalArrayIndexs.slice(halfIndex, originalArrayIndexs.length);

        split(leftIndexs, divisible(leftIndexs.length, 2));
        split(rightIndexs, divisible(rightIndexs.length, 2));

        merge(leftIndexs.map(d => result[d]), rightIndexs.map(d => result[d]), leftIndexs[0]);
    }
}

function merge (left, right, startIndex) {
    let i = 0, j = 0, k = startIndex;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result[k] = left[i];
            i++;
        } else {
            result[k] = right[j];
            j++;
        }
        k++;
    }

    while (i < left.length) {
        result[k] = left[i];
        i++;
        k++;
    }

    while (j < right.length) {
        result[k] = right[j];
        j++;
        k++;
    }
}

function divisible (x, y) {
    return Math.floor(x / y);
}

module.exports = main;
