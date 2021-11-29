/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
   s = s.replace(/\s\s+/g, ' ');
    return s.trim() === '' ? 0 : s.trim().split(' ').length
};