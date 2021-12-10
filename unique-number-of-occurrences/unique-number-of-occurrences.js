/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let map = {}

    for(let val of arr) {
        if(!map[val]) {
            map[val] = 1
        } else {
            map[val]++
        }
    }

    o = Object.values(map)
    p = new Set(o).size
    
    return o.length === p
};