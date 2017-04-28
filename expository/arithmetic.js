'use strict';

//F means frozen and T means thaw.
const weights = { '+': 1, '-': 1, '*': 2, '/': 2, '(': 'F', ')': 'T' };
let frozen = false, frozenIndex = 0;

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
    //FIXME: The implementation is't natural and its logic out of the Flow, so please fix it.
    if (infixString.length === stringIndex) {
        while (symbolStack.length) {
            resultStack.push( symbolStack.pop() );
        }

        return resultStack.join('');
    } else {
        if (infixString[stringIndex] !== ' ') {
            compare(isCharacter, infixString[stringIndex])(resultLoader(resultStack), symbolLoader(symbolStack, resultStack));
        }
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
        //Diff '(a + b) * 10' to 'a + b * 10'.
        if (string === '(') {
            frozen = true;
            frozenIndex = stack.length;
            return;
        }

        if (string === ')') {
            frozen = false;
            result.push( stack.pop() );
            return;
        }

        if (frozen) {
            if (stack.length > frozenIndex) {
                result.push( stack.pop() );
                stack.push(string);
            } else {
                stack.push(string);
            }

            return;
        }

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
