/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    s = s.split('').filter(a => a === ')' || a === '(')
    max = 0, depth = 0
    for (let i = 0; i < s.length; i++)
    {
        if (s[i] === '(') {depth++}
        else if (s[i] === ')') {depth--}
        if (depth > max) {max = depth}
    }
    return max
};