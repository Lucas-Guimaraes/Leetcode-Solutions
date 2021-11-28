/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    return num < 10 ? num : num - Math.floor(num/9) * 9 || 9
};