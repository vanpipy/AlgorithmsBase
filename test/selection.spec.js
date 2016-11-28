'use strict';

import selectionSort from '../expository/selection.js';
import { expect } from 'chai';

const testArray = [5,4,3,2,1];

describe('selection sort', () => {
  it('Should be sort order by not larger.', () => {
    const result = selectionSort(testArray);
    expect( result[0] ).to.equal(1);
    expect( result[3] ).to.equal(4);
    expect( result[4] ).to.equal(5);
  });
});
