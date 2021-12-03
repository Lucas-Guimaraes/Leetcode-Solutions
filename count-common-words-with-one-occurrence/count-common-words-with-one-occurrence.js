/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function(words1, words2) {
    a = [... new Set(words1)]
    b = [... new Set(words2)]
    total = 0
    for (let i = 0; i < a.length; i++)
    {
        if (words2.indexOf(a[i]) != -1)
        {if (countOccurrences(words1, a[i]) === 1 && countOccurrences(words2, a[i]) === 1) {total+=1}}
    }
    return total
};

const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
