'use strict';

const weights = { '+': 1, '-': 1, '*': 2, '/': 2, '(': 3, ')': 3 };

/**
 * Flow as below:
 *
 * string ------> result
 *          |       ^
 *          v       |
 *      symbolstack -
 *
 */
function main (infixString) {
    return iter(infixString, 0, [], [], 0);
}

function iter (infixString, stringIndex, resultStack, symbolStack, stackIndex) {
    if (infixString.length === stringIndex) {
        while (symbolStack.length) {
            resultStack.push( symbolStack.pop() );
        }

        return resultStack.join('');
    } else {
        compare(isCharacter, infixString[stringIndex])(resultLoader(resultStack), symbolLoader(symbolStack, resultStack));
        return iter(infixString, stringIndex + 1, resultStack, symbolStack, stackIndex);
    }
}

//:: function -> function -> any
function compare (condition, currentString) {
    condition = condition(currentString);
    return (resolve, reject) => {
        return condition ? resolve(currentString) : reject(currentString);
    }
}

function isCharacter (string) {
    return weights[string] === undefined;
}

function resultLoader (stack) {
    return (string) => {
        stack.push(string);
    }
}

function symbolLoader (stack, result) {
    return (string) => {
        if (stack.length > 0) {
            const current = weights[string];
            const lastest = weights[ stack[stack.length - 1] ];

            if (current > lastest) {
                stack.push(string);
            } else {
                result.push( stack.pop() );
                stack.push(string);
            }
        } else {
            stack.push(string);
        }
    }
}

module.exports = main;
