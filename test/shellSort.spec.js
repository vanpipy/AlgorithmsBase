'use strict';

import shellSort from '../expository/shellSort';
import { expect } from 'chai';

const MAX = 1000;
let i = 0, result = [];

for (; i < MAX; i++) {
    result.unshift(i);
}

describe('shellSort', () => {
    it('should be sorted successfully', () => {
        const arr = [20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0];
        expect(shellSort(arr).join()).to.equal([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].join());
    });

    it('should be run without exception', () => {
        const empty = [];
        expect(shellSort(empty).join()).to.equal(empty.join());
        let onlyOne = [1];
        expect(shellSort(onlyOne).join()).to.equal(onlyOne.join());
        onlyOne = [9.9999];
        expect(shellSort(onlyOne).join()).to.equal(onlyOne.join());
    });

    it('should be sorted thousand number successfully', () => {
        expect(shellSort(result).join()).to.equal(result.join());
    })
});
