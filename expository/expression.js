'use strict';

const ExpressionTree = require('./ExpressionTree');

/*
 * Expression parser
 *
 * expression is the string include "+,-,*,/,(,)".
 *
 * @eaxmple
 * a + b * (d - e) / f + g
 *
 *     +
 *    / \
 *   +   g
 *  / \
 * a   /
 *    / \
 *   *   f
 *  / \
 * b   -
 *    / \
 *   d   e
 */
var originTree = new ExpressionTree();

function main (expression) {
    return expressionIter(originTree, 0, expression);
}

function expressionIter (context, index, expression) {
    if (index < expression.length) {
        const string = expression[index];
        if (string === '/' || string === '*') {
            const nodeForReplacing = new ExpressionTree();
            nodeForReplacing.appendChild(context.getChild('right'));
            nodeForReplacing.root = string;
            nodeForReplacing.setParent(context);
            context.appendChild(nodeForReplacing);
            return expressionIter(nodeForReplacing, index + 1, expression);
        } else if (string === '(') {
            const node = new ExpressionTree();
            node.setParent(context);
            context.appendChild(node);
            return expressionIter(node, index + 1, expression);
        } else if (string === ')') {
            return expressionIter(context.getParent(), index + 1, expression);
        } else if (string === '+' || string === '-') {
            if (context.root) {
                const node = new ExpressionTree();
                originTree.setParent(node);
                node.appendChild(originTree);
                node.root = string;
                originTree = node;
                return expressionIter(node, index + 1, expression);
            } else {
                context.root = string;
                return expressionIter(context, index + 1, expression);
            }
        } else if (string !== ' ') {
            context.appendChild(string);
            return expressionIter(context, index + 1, expression);
        } else {
            return expressionIter(context, index + 1, expression);
        }
    } else {
        return originTree;
    }
}

module.exports = main;
