/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    inner = '', depth = 0
    for (let i = 0; i < s.length; i++)
    {
        if (s[i] === '(') {depth++}
        if (depth > 1) {inner+=s[i]}
        if (s[i] === ')') {depth--}
        
    }
    return inner
};