'use strict';

import BinaryTree from '../expository/BinaryTree';
import { expect } from 'chai';

describe('BinaryTree', () => {
    it('should be run successfully any way', () => {
        const empty = new BinaryTree(null);
        const string = new BinaryTree('a');
        const number = new BinaryTree(0);
        const object = new BinaryTree({});
        const array = new BinaryTree([]);
        expect(empty instanceof BinaryTree).to.equal(true);
        expect(string instanceof BinaryTree).to.equal(true);
        expect(number instanceof BinaryTree).to.equal(true);
        expect(object instanceof BinaryTree).to.equal(true);
        expect(array instanceof BinaryTree).to.equal(true);
    });

    it('should append child from left to right', () => {
        const a = new BinaryTree('a');
        a.appendChild(new BinaryTree('b'));
        expect(a.getChild('left').root).to.equal('b');
        expect(a.getChild('right')).to.equal(undefined);
        a.appendChild(new BinaryTree('c'));
        expect(a.getChild('left').root).to.equal('b');
        expect(a.getChild('right').root).to.equal('c');
    });

    it('should be replace child node with right defaultly', () => {
        const a = new BinaryTree('a', new BinaryTree('b'));
        a.appendChild(new BinaryTree('c'));
        a.appendChild(new BinaryTree('d'));
        a.appendChild(new BinaryTree('e'));
        expect(a.getChild('left').root).to.equal('b');
        expect(a.getChild('right').root).to.equal('e');
    });

    it('should be replace child node with key', () => {
        const a = new BinaryTree('a', new BinaryTree('b'));
        a.appendChild(new BinaryTree('c'), 'left');
        expect(a.getChild('left').root).to.equal('c');
        a.appendChild(new BinaryTree('d'), 'right');
        expect(a.getChild('right').root).to.equal('d');
        a.appendChild(new BinaryTree('e'), 'right');
        expect(a.getChild('right').root).to.equal('e');
    });

    it('should get child node without error', () => {
        const a = new BinaryTree('a', new BinaryTree('b'), new BinaryTree('c'));
        expect(a.getChild().root).to.equal(a.getChild('left').root);
        expect(a.getChild('right').root).to.equal('c');
    });
});
