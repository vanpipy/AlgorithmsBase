'use strict';

const expression = require('./expression');

function main (expressionTree, originalExpressString, orderType) {
    return traversals(expressionTree, [], originalExpressString, orderType);
}

function traversals (expressionTree, resultArray, originalExpressString, orderType) {
    if (originalExpressString.length === resultArray.length) {
        return resultArray;
    } else {
        if (orderType === 'prefix') {
            preOrder(expressionTree, resultArray);
        } else if (orderType === 'postfix') {
            postOrder(expressionTree, resultArray);
        }
    }
}

function preOrder (node, result) {
    const root = node.root;
    const left = node.getChild('left');
    const right = node.getChild('right');

    result.push(root);

    if (typeof left === 'string') {
        result.push(left);
    } else {
        preOrder(left, result);
    }

    if (typeof right === 'string') {
        result.push(right);
    } else {
        preOrder(right, result);
    }
}

function postOrder (node, result) {
    const root = node.root;
    const left = node.getChild('left');
    const right = node.getChild('right');

    if (typeof left === 'string') {
        result.push(left);
    } else {
        postOrder(left, result);
    }

    if (typeof right === 'string') {
        result.push(right);
    } else {
        postOrder(right, result);
    }

    result.push(root);
}

module.exports = main;
