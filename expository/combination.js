'use strict';

// Combinations :: array -> array === [solid, change, iterations];
function main (combinationArray) {

    function combination (array) {
        let combinationCache = '';
        let allCombinations = [];

        for (let i = 0, l = array.length; i < l; i++) {
            allCombinations.push([array[i]]);
        }

        for (let i = 0, l = array.length; i < l; i++) {
            let valueLeft = array.slice(0, i);
            let valueMiddle = array.slice(i, i + 1);
            let valueRight = array.slice(i + 1);

            for (let k = 0, j = valueRight.length; k < j; k++) {
                allCombinations.push([].concat(valueLeft, valueMiddle, valueRight[k]));
            }

            while (valueMiddle = valueRight.shift()) {
                for (let k = 0, j = valueRight.length; k < j; k++) {
                    allCombinations.push([].concat(valueLeft, valueMiddle, valueRight[k]));
                }
            }
        } 

        return allCombinations;
    }
    
    return combination(combinationArray);
}

export default main;
