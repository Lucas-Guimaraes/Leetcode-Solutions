/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if (n === 1) {return true}
    if (n < 3) {return false}
    
    let places = Math.floor(Math.log10(n)+1)
    
    return (3 ** (places*2) === n || 3 ** ((places*2)-1) === n)
};