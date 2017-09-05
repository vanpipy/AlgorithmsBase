'use strict';

import binarySearch from '../expository/binarySearch';
import { expect } from 'chai';

const MAX = 1000;
var testArray = [], i = 0;

for (; i < MAX; i++) {
    testArray.push(i);
}

describe('binarySearch', () => {
    it('should be contain the search item', () => {
        expect(binarySearch([1,2,3,4,5,6], 1)).to.equal(true);
        expect(binarySearch([1,2,3,4,5,6], 2)).to.equal(true);
        expect(binarySearch([1,2,3,4,5,6], 3)).to.equal(true);
        expect(binarySearch([1,2,3,4,5,6], 4)).to.equal(true);
        expect(binarySearch([1,2,3,4,5,6], 5)).to.equal(true);
        expect(binarySearch([1,2,3,4,5,6], 6)).to.equal(true);
    });

    it('should be not contain the search item', () => {
        expect(binarySearch([1,2,3,4,5,6], 9)).to.equal(false);
        expect(binarySearch([1,2,3,4,5,6], 99)).to.equal(false);
        expect(binarySearch([1,2,3,4,5,6], 999)).to.equal(false);
        expect(binarySearch([1,2,3,4,5,6], 9999)).to.equal(false);
        expect(binarySearch([1,2,3,4,5,6], 99999)).to.equal(false);
        expect(binarySearch([1,2,3,4,5,6], 999999)).to.equal(false);
    });

    it('should be contain something in large original test array', () => {
        expect(binarySearch(testArray, 0)).to.equal(true);
        expect(binarySearch(testArray, 9)).to.equal(true);
        expect(binarySearch(testArray, 99)).to.equal(true);
        expect(binarySearch(testArray, 999)).to.equal(true);
        expect(binarySearch(testArray, 1)).to.equal(true);
        expect(binarySearch(testArray, 11)).to.equal(true);
        expect(binarySearch(testArray, 111)).to.equal(true);
        expect(binarySearch(testArray, 1000)).to.equal(false);
        expect(binarySearch(testArray, -1)).to.equal(false);
        expect(binarySearch(testArray, -9)).to.equal(false);
        expect(binarySearch(testArray, -99)).to.equal(false);
        expect(binarySearch(testArray, -999)).to.equal(false);
    });
});
