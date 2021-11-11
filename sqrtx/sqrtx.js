/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x === 1 || x === 0) {return x}
    count = 2
    while (count * count <= x) {
        count++
    }
    return count-1
};