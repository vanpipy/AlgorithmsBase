'use strict';

function qSort (array) {
    let left = 1, right = array.length - 1;

    const pivot = array[0];

    do {
        if (array[left] > pivot) {
            while (array[right] > array[left]) {
                right -= 1;
            }

            exchange(array, left, right);
        }

        left += 1;
    } while (left < right);

    exchange(array, 0, left - 1);

    return array;
}

function split () {

}

function exchange (originArray, leftMark, rightMark) {
    const temp = originArray[leftMark];
    originArray[leftMark] = originArray[rightMark];
    originArray[rightMark] = temp;
}

const arr = [40,4,56,7,32,42,10,2,100];

console.log(arr);
console.log(qSort(arr));

//export default qSort;
