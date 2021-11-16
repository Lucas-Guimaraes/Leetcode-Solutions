/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    s1lst = [...s1].sort().join('')
    s2lst = [...s2]
    for (let i = 0, i2 = s1lst.length; i2 < s2.length+1; i++, i2++)
    {
        s2lstTemp = s2lst.slice(i, i2).sort().join('')
        if (s2lstTemp === s1lst) {return true}
    }
    return false
};