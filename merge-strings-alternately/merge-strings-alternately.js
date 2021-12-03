/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    word1 = word1.split('')
    word2 = word2.split('')
    result = ''
    min = Math.min(word1.length, word2.length)
    for (let i = 0; i < min; i++)
    {
        result += word1.shift() + word2.shift()
    }
    if (!word1.length) {result += word2.join('')}
    else if (!word2.length) {result += word1.join('')}
    return result
};