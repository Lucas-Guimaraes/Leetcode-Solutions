/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function(n) {
    count =0
    for (let i = 1; i <= n; i++)
    {
        if (n % i == 0) {count += 1}
        if (count > 3) {return false} 
    }
    
    return count == 3
};