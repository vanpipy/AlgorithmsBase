'use strict';

import UnionFinder from '../expository/union.js';
import { expect } from 'chai';

const testArray = [0,1,2,3,4,5,6,7,8,9];
const uf = new UnionFinder(testArray);

describe('Union Finder', () => {
    it('Should be have two equaled value', () => {
        uf.union(0, 2);

        const values = uf.getSource();
        expect(values[0] === values[2]).to.equal(true);
    });
});
