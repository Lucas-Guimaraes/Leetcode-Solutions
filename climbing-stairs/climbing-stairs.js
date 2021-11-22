/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    n1 = 0, n2 = 1, step = 0, count = 0
    while (count < n) {step = n1+n2, n1 = n2, n2 = step, count++}
    return step
};