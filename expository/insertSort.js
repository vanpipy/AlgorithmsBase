'use strict';

/*
 * Insert sort
 *
 * [54, 26, 93, 17, 77, 31, 44, 55, 20]
 *                  |
 *                  V
 * [26, 54, 93, 17, 77, 31, 44, 55, 20]
 *                  |
 *                  V
 * [26, 54, 93, 17, 77, 31, 44, 55, 20]
 *                  |
 *                  V
 * [17, 26, 54, 93, 77, 31, 44, 55, 20]
 *
 * @analysis
 * There is two part for a list, one is unordered and another is ordered.
 * Assuming the first element in list is sorted,
 * and then take the the first element of unorderd part insert into the sorted sublist.
 * Because the insert action has bad situation, it cost O(n) times to insert a node.
 * or O(1) time to insert a node.
 * So the time spending is O(n) to O(n^2).
 */

function main (unorderedArray) {
    return unorderedArray && unorderedArray.length ? insertSort(unorderedArray, 0, 1) : unorderedArray;
}

function insertSort (array, orderedEndIndex, unorderedStartIndex) {
    if (array[unorderedStartIndex] < array[orderedEndIndex] || unorderedStartIndex < array.length) {
        return insertSort(insert(array, orderedEndIndex, unorderedStartIndex), orderedEndIndex + 1, unorderedStartIndex + 1);
    } else {
        return array;
    }
}

function insert (arr, partAIndex, partBIndex) {
    if (arr[partAIndex] > arr[partBIndex]) {
        const temp = arr[partAIndex];
        arr[partAIndex] = arr[partBIndex];
        arr[partBIndex] = temp;
        return insert(arr, partAIndex - 1, partBIndex - 1);
    } else {
        return arr;
    }
}

main([92, 10, 100, 2, 0, 299, 78, 8992, 92, 34, 20, 12, 29, 59, 69, 43])

module.exports = main;
