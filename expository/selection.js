'use strict';

/*
 * n -> [1,2,3...];
 * x -> [1, n];
 * y -> [n - x, n];
 *
 * 1. x = n
 * 2. y = n - y
 *
 */

function min (array, index, minValue, minIndex) {
  if (array.length === index) {
    return {
      min: minValue,
      minIndex: minIndex
    };
  } else {
    if (array[index + 1] < minValue) {
      minValue = array[index + 1];
      minIndex = index + 1;
    }
    return min(array, index + 1, minValue, minIndex);
  }
}

function outerIter (array, startIndex) {
  const next = startIndex + 1;

  if (startIndex === array.length) {
    return array;
  } else {
    const arrayTomin = array.slice(next);
    const rs = min(arrayTomin, 0, arrayTomin[0], 0);
    const _min = rs.min;
    const _minIndex = rs.minIndex;

    if (_min < array[startIndex]) {
      const temp = array[startIndex];
      array[startIndex] = _min;
      array[_minIndex + next] = temp;
    }
    return outerIter(array, next);
  }
}

function main (array) {
  const arrayCopy = array.slice();
  return outerIter(arrayCopy, 0);
}

export default main;
