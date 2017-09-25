'use strict';

import quickSort from '../expository/quickSort';
import { expect } from 'chai';

describe('QuickSort', () => {
    it('should be quick sort successfully', () => {
        const arr = [-10,-19,10,9,7,6,4,3,2,1,0];
        expect(quickSort(arr).join()).to.be.equal([-19,-10,0,1,2,3,4,6,7,9,10].join());
        expect(quickSort('')).to.be.equal('');
        expect(quickSort(undefined)).to.be.equal(undefined);
    });
});
