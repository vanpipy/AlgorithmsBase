'use strict';

function curry (Fn) {
    return rebuild(Fn, [], Fn.length);
}

function rebuild (originalFn, validParams, validParamsLength) {
    return function () {
        const params = Array.prototype.slice.call(arguments);

        if (validParamsLength - params.length > 0) {
            return rebuild(originalFn, validParams.concat(params), validParamsLength - params.length);
        } else {
            return originalFn.apply(this, validParams.concat(params));
        }
    };
}

module.exports = curry;
