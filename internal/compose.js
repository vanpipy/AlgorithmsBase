'use strict';

function compose () {
    const funsStack = Array.prototype.slice.call(arguments);

    if (funsStack.length > 2) {
        const composed = _compose.apply(this, pop(2, funsStack));
        funsStack.push(composed);

        return compose.apply(this, funsStack);
    } else {
        return _compose.apply(this, pop(2, funsStack));
    }
}

function _compose (f, g) {
    return function (x) {
        return f(g(x));
    }
}

function pop (length, stack) {
    return stack.splice( stack.length - length, length );
}

module.exports = compose;
