'use strict';

class BinaryTree {
    constructor(value, left, right) {
        this.root = value;
        this.left = left;
        this.right = right;
    }

    appendChild(node, key) {
        if (key === 'left' || key === 'right') {
            this[key] = node;
        } else {
            if (this.left) {
                this.right = node;
            } else {
                this.left = node;
            }
        }
    }

    getChild(key) {
        return this[key ? key : 'left'];
    }
}

module.exports = BinaryTree;
