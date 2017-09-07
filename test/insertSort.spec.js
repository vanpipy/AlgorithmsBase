'use strict';

import insertSort from '../expository/insertSort';
import { expect } from 'chai';

function generateRandomList (size) {
    let result = [], i = 0;
    while (i < size) {
        result.push( Math.random() );
    }
    return result;
}

describe('Insert sort', () => {
    it('should be sorted successfully', () => {
        const arr = [7,6,5,4,3,2,1];
        expect(insertSort(arr).join('')).to.equal([1,2,3,4,5,6,7].join(''));
    });

    it('should be return original input when the input is empty array or not array', () => {
        expect(JSON.stringify(insertSort([]))).to.equal('[]');
        expect(JSON.stringify(insertSort({}))).to.equal('{}');
        expect(insertSort('')).to.equal('');
        expect(JSON.stringify(insertSort(null))).to.equal('null');
        expect(JSON.stringify(insertSort(undefined))).to.equal(undefined);
    });

    it('should be sorted as ascending list always', () => {
        const list = [92, 10, 100, 2, 0, 299, 78, 8992, 92, 34, 20, 12, 29, 59, 69, 43];
        expect(insertSort(list)[list.length - 1]).to.equal(Math.max.apply(this, list));
    });
});
