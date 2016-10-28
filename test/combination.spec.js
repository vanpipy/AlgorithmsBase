'use strict';

import combination from '../expository/combination.js';
import { expect } from 'chai';

const testArray = [1, 2, 3];

describe('Combination', () => {
    it('Should be all valid combination', () => {
        expect( combination(testArray).length ).to.equal(7);
    });
});
