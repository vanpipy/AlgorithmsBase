'use strict';

import convertNumber from '../expository/convertDecimal';
import { expect } from 'chai';

describe('Convert number from decimal', () => {
    it('should be convert the number to binary', () => {
        expect(convertNumber(16, 2)).to.equal('10000');
        expect(convertNumber(24, 2)).to.equal('11000');
        expect(convertNumber(160, 2)).to.equal('10100000');
    });

    it('should be convert the number to octal', () => {
        expect(convertNumber(16, 8)).to.equal('20');
        expect(convertNumber(24, 8)).to.equal('30');
        expect(convertNumber(160, 8)).to.equal('240');
    });

    it('should be convert the number to hexadecimal', () => {
        expect(convertNumber(16, 16)).to.equal('10');
        expect(convertNumber(24, 16)).to.equal('18');
        expect(convertNumber(160, 16)).to.equal('A0');
        expect(convertNumber(3200, 16)).to.equal('C80');
    });
});
