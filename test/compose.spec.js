'use strict';

import compose from '../internal/compose';
import { expect } from 'chai';

describe('Compose', () => {
    it('should be composing two functions to one', () => {
        const a = () => {};
        const b = () => {};
        expect(typeof compose(b, a)).to.equal('function');
    });

    it('should be composed with correct result', () => {
        const a = x => x + 'a';
        const b = x => x + 'b';
        const c = x => x + 'c';
        const r = compose(a, b, c);
        expect(r('d')).to.equal('dcba');
    });
});
