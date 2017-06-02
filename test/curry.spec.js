'use strict';

import curry from '../internal/curry';
import { expect } from 'chai';

describe('Curry', () => {
    it('should be called like common function.', () => {
        const test = curry(x => x);
        expect(test(1)).to.equal(1);
    });

    it('should be equality via all kinds of caller', () => {
        const test = curry((x, y) => x + y);
        const result = test(1);
        expect(test(2, 4)).to.equal(6);
        expect(result(2)).to.equal(3);
        expect(test(1, 2)).to.equal(result(2));

        const more = curry((x, y, z) => x + y + z);
        const rs = more(2);
        expect(more(2, 3, 4)).to.equal(rs(3, 4));
    });
});
