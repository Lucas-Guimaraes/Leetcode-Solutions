/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.split(' ').map(function(e){return e.split('').reverse().join('')}).join(' ')
    return s
};