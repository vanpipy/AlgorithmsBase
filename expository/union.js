'use strict';

// addIndex :: array -> array
function addIndex (array) {
    return array.map(arr => ({
        number: arr,
        index: -1
    }));
}

class UnionFinder {
    constructor(array) {
        this.sourceArray = addIndex(array);
        this.allArrays = [];

        console.log(this.getSource());
        console.log(this.getSourceIndex());
    }

    // union :: (int, int) -> undefined
    union(p, q) {
        const index = this.allArrays.length;
        const all = this.allArrays;

        p = this.sourceArray[p];
        q = this.sourceArray[q];

        if (p.index === -1 && q.index === -1) {
            p.index = index;
            q.index = index;
            p.number = q.number;
            this.allArrays.push([p, q]);
        } else if (p.index === -1 && q.index != -1) {
            p.index = q.index;
            p.number = q.number;
            this.allArrays[q.index].push(p);
        } else if (p.index != -1 && q.index === -1) {
            q.index = p.index;
            q.number = p.number;
            this.allArrays[p.index].push(q);
        } else if (p.index != -1 && q.index != -1) {
            all[p.index] = all[p.index].map(each => ({
                number: q.number, index: q.index
            }));
        }
    }

    // connect :: (int, int) -> boolean
    connect(p, q) {
        return this.sourceArray[p] === this.sourceArray[q];
    }

    getSourceIndex() {
        return this.allArrays;
    }

    getSource() {
        return this.sourceArray.map(d => d.number);
    }
}

export default UnionFinder;
