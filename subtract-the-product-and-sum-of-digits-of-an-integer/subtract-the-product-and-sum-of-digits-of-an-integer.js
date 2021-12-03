/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    prod = n.toString().split('').map((item) => parseInt(item)).reduce((a, b) => a * b);
    sum = n.toString().split('').map((item) => parseInt(item)).reduce((a, b) => a+b)
    return prod-sum
};