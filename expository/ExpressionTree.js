'use strict';

const BinaryTree = require('./BinaryTree');

class ExpressionTree extends BinaryTree {
    setParent(node) {
        this.parent = node;
    }

    getParent() {
        return this.parent;
    }
}

module.exports = ExpressionTree;
