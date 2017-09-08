'use strict';

/*
 * Shell sort
 *
 * Gap is the important meaning of shell sort. Choose `i` items apart to create a sublist,
 * and sort the sublist first. Shell sort improves on the insertion sort, as we know,
 * the insertion sort has O(n) ~ O(n^2) time spending. Make sublist to get the O(n) always,
 * Diminishing increment is that the reason shell sort improved, the result is O(lgn)*O(n).
 */

function main (unorderedArray) {
    /*
     * The gap can be many value, but it should be suitable for a list.
     * Half or third part of the list will be better to begin.
     */
    const gap = divisible(unorderedArray.length, 2);
    return unorderedArray && unorderedArray.length ? shellSort(unorderedArray, gap, 0) : unorderedArray;
}

function shellSort (array, gap, startIndex) {
    if (gap > 0) {
        if (startIndex + gap < array.length) {
            return shellSort(sort(array, startIndex, gap), gap, startIndex + 1);
        } else {
            return shellSort(array, divisible(gap, 2), 0);
        }
    } else {
        return array;
    }
}

function sort (array, index, gap) {
    if (index + gap < array.length) {
        return insertSort(array, index, index + gap, gap);
    } else {
        return array;
    }
}

function insertSort (array, orderedEndIndex, unorderedStartIndex, gap) {
    if (unorderedStartIndex < array.length && array[orderedEndIndex] > array[unorderedStartIndex]) {
        return insertSort(insert(array, orderedEndIndex, unorderedStartIndex, gap), orderedEndIndex + gap, unorderedStartIndex + gap, gap);
    } else {
        return array;
    }
}

function insert (array, partAIndex, partBIndex, gap) {
    if (partAIndex >= 0 && array[partAIndex] > array[partBIndex]) {
        const temp = array[partBIndex];
        array[partBIndex] = array[partAIndex];
        array[partAIndex] = temp;
        return insert(array, partAIndex - gap, partBIndex - gap, gap);
    } else {
        return array;
    }
}

function divisible (x, y) {
    return Math.floor(x / y);
}

module.exports = main;
