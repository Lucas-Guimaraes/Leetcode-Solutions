/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    sCount = 0, tCount = 0
    while (sCount < s.length && tCount < t.length)
    {
        if (s[sCount] === t[tCount]) {sCount++}
        tCount++
    }
    return sCount === s.length
};