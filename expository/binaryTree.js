'use strict';

class BinaryTree {
    constructor(value, leftChild, rightChild) {
        this.root = value;

        if (leftChild instanceof BinaryTree) {
            this.leftChild = leftChild;
        }

        if (rightChild instanceof BinaryTree) {
            this.rightChild = rightChild;
        }
    }

    appendChild(node, key) {
        if (node instanceof BinaryTree) {
            if (key === 'leftChild' || key === 'rightChild') {
                this[key] = node;
            } else {
                if (this.leftChild) {
                    this.rightChild = node;
                } else {
                    this.leftChild = node;
                }
            }
        }
    }

    getChild(key) {
        return this[key ? key : 'leftChild'];
    }
}

module.exports = BinaryTree;
