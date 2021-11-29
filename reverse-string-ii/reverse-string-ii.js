/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    if (k >= s.length) {return s.split('').reverse().join('')}
    if (k === 1) {return s}
    x = 0
    y = k
    c = ''
    while (y/2 < s.length)
        {a = s.slice(x, y).split('').reverse().join('')
        b = s.slice(y, y+k)
        c+=a+b
        y += k*2, x += k*2
        }
    return c
};