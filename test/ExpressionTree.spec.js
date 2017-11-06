'use strict';

import ExpressionTree from '../expository/ExpressionTree';
import { expect } from 'chai';

describe('ExpressionTree', () => {
    it('should be have parent attribute', () => {
        const a = new ExpressionTree('a');
        const b = new ExpressionTree('b');
        b.setParent(a);
        a.appendChild(b);
        expect(a.getChild().getParent()).to.equal(a);
    });
});
