'use strict';

import bubbleSort from '../expository/bubbleSort';
import { expect } from 'chai';

const MAX = 100;
var testArray = [], i = MAX;
var counterTestArray = testArray.reverse();

for (; i >= 0; i--) {
    testArray.push(i);
}

describe('bubbleSort', () => {
    it('shoule be get ascending result', () => {
        const arr = [23,10,2,5,1,33,11,10];
        expect(bubbleSort(arr).join('')).to.equal([1,2,5,10,10,11,23,33].join(''));
    });

    it('shoule be get ascending result always', () => {
        expect(bubbleSort(testArray).join('')).to.equal(counterTestArray.join(''));
    });
})
