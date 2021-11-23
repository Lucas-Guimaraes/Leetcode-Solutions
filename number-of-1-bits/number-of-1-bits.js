/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    n = ((n >>> 0).toString(2)).split('').join('')
    i = 32-n.length
    while (i > 0)
    {
        n+='0', i--
    }
    
    return String(n).split('').filter(check1).length
};
//.filter(check1).length

function check1(n){
    return n === '1'
}