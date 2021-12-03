/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    digits = parseInt(s) || 0;
    if (digits < -2147483648) {return -2147483648}
    if (digits > 2147483647) {return 2147483647}
    return digits
};