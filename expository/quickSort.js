'use strict';

/*
 * Quick sort
 *
 * There is some questions - what is the quick sort and different from other sort?
 * Could it be an improvement from other sort?
 *
 * It's some kind like of the insert sort but it's not,
 * the quick sort take a pivotPoint point in list. Sort all less than pivotPoint point before it and greater than povit point after it.
 * And then the pivotPoint value in sorted list called split point, the sorted list split to sub-list and sort the sub-list again.
 *
 * [9,8,7,6,5,4,3,2,1,0] //take the first item as the povit point.
 *          |
 *          V
 * [0,1,2,3,4,9,5,6,7,8]
 *          |
 *          V
 * [ [0,1,2,3,4], [9], [5,6,7,8] ]
 *        |                |
 *        V                V
 * [    [...],    [9],   [...] ]
 *             |
 *             V
 * [0,1,2,3,4,5,6,7,8,9]
 *
 * Also the last point can be choose as the povit point or any other point.
 */
function main (array) {
    return array && array.length > 0 ? quickSortWrap(array) : array;
}

function quickSortWrap (array) {
    quickSort(array, 0, array.length - 1);
    return array;
}

function quickSort (arr, start, end) {
    if (start < end) {
        const point = partition(arr, start, end);
        quickSort(arr, start, point - 1);
        quickSort(arr, point + 1, end);
    }
}

function partition (arr, start, end) {
    const pivot  = arr[end];
    let i = end - 1;

    while (start < i) {
        if (arr[start] > pivot) {
            swap(arr, start, i);
            i -= 1;
        } else {
            start += 1;
        }
    }

    if (arr[start] > pivot) {
        swap(arr, start, end);
    }

    return i;
}

function swap (arr, x, y) {
    const temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
}

module.exports = main;
