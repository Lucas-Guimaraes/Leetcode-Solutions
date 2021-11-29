/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    if (n === 1 || n === 4) {return true}
    if (n < 4 || n % 2 !== 0) {return false}
    return (Math.log(n) / Math.log(4)) % 1 === 0
};