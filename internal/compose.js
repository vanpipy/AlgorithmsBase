'use strict';

/*
 * compose(a, b, c) call order by c -> b -> a
 */
function compose () {
    const funsStack = Array.prototype.slice.call(arguments);

    if (funsStack.length > 2) {
        funsStack.unshift(_compose(funsStack.shift(), funsStack.shift()));
        return compose.apply(this, funsStack);
    } else {
        return _compose.apply(this, funsStack);
    }
}

function _compose (f, g) {
    return function (x) {
        return f(g(x));
    }
}

module.exports = compose;
