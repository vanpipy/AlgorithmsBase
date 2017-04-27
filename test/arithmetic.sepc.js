'use strict';

import arithmetic from '../expository/arithmetic.js';
import { expect } from 'chai';

describe('Arithmetic', () => {
    it('should convert infix to postfix expression', () => {
        const infix = 'a+b+c';
        expect(arithmetic(infix)).to.equal('ab+c+');
    });
});
