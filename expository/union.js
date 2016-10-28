'use strict';

class UnionFinder {
    constructor(array) {
        this.sourceArray = array;
    }

    // unionvalueequaled :: (int, int) -> function
    unionValueEqualed(prevIndex, nextIndex) {
        return (sourceElment) => sourceElment === this.sourceArray[nextIndex] ? 
                                    this.sourceArray[prevIndex] : sourceElment;
    }

    // union :: (int, int) -> array
    union(p, q) {
        return this.sourceArray = this.sourceArray.map( this.unionValueEqualed(p, q) );
    }

    // connect :: (int, int) -> boolean
    connect(p, q) {
        return this.sourceArray[p] === this.sourceArray[q];
    }

    getSource() {
        return this.sourceArray;
    }
}

export default UnionFinder;
