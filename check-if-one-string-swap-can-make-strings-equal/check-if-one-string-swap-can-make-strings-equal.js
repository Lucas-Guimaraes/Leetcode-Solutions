/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    if (s1 === s2) {return true}
    diff = 0
    for (let i = 0; i < s1.length; i++)
    {
        if (!s2.includes(s1[i]) || !s1.includes(s2[i])) {return false}
        if (s1[i] !== s2[i]) {diff++}
        if (diff === 3) {return false} 
    }
    return diff === 2
};