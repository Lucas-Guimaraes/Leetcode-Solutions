/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    return s.split('').sort((x,y)=>order.indexOf(x) - order.indexOf(y)).join('')
};