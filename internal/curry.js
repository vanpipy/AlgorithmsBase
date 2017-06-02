'use strict';

function curry (Fn) {
    return rebuild(Fn, [], Fn.length);
}

function rebuild (originalFn, validParams, validParamsLength) {
    return function () {
        const params = Array.prototype.slice.call(arguments);

        if (validParamsLength > 1) {
            return rebuild(originalFn, validParams.concat(params), validParamsLength - 1);
        } else {
            return originalFn.apply(this, validParams.concat(params));
        }
    };
}

module.exports = curry;
