/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    n = ((n >>> 0).toString(2)).split('').reverse().join('')
    i = 32-n.length
    while (i > 0)
    {
        n+='0', i--
    }
    return parseInt(n, 2)
};

