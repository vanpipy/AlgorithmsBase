'use strict';

import mergeSort from '../expository/mergeSort';
import { expect } from 'chai';

function generateArray (start, length, array) {
    if (array.length < length) {
        array.push(start);
        return generateArray(start + 1, length, array);
    } else {
        return array;
    }
}

describe('Merge Sort', () => {
    it('should be sorted successfuly always', () => {
        const result = generateArray(0, 100, []);
        const arr = result.reverse();
        expect(mergeSort(arr).join()).to.equal(result.join());
        expect(mergeSort([]).join()).to.equal([].join());
    });
});
