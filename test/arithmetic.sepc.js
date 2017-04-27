'use strict';

import arithmetic from '../expository/arithmetic.js';
import { expect } from 'chai';

describe('Arithmetic', () => {
    it('should convert infix to postfix expression', () => {
        let infix = 'a+b+c';
        expect(arithmetic(infix)).to.equal('ab+c+');

        infix = 'a + b + c';
        expect(arithmetic(infix)).to.equal('ab+c+');

        infix = 'a+ b + c';
        expect(arithmetic(infix)).to.equal('ab+c+');

        infix = 'a +b+ c';
        expect(arithmetic(infix)).to.equal('ab+c+');

        infix = 'a + b +c';
        expect(arithmetic(infix)).to.equal('ab+c+');

        infix = 'a + b * c';
        expect(arithmetic(infix)).to.equal('abc*+');

        infix = '(a + b) * c';
        expect(arithmetic(infix)).to.equal('ab+c*');

        infix = '(a + b) * c / (d - e)';
        expect(arithmetic(infix)).to.equal('ab+c*de-/');
    });
});
