/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function(word1, word2) {
  
    str = word1 + word2
    str = str.split("")
    str = new Set(str);
    str = [...str].join("");
    count = 0
    for (let i = 0; i < str.length; i++)
    {
        pattern = new RegExp(str[i],"g")
        a = (word1.match(pattern) || []).length;
        b = (word2.match(pattern) || []).length;
        count = Math.max(a,b) - Math.min(a,b)
        if (count > 3 && a !== b) {return false}
    }
    return true
};