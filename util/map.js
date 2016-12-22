'use strict';

function map (array, todo) {
    let i = 0;
    let len = array.length;
    let _array = Array(len);

    while (i < len) {
        _array[i] = todo(array[i], i);

        i += 1;
    }

    return _array;
}

export default map;
