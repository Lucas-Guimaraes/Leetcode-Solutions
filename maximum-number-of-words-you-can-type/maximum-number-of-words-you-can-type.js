/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
    brokenLetters = [...brokenLetters]
    words = text.split(' ');
    words = words.filter(function i(w) {return brokenLetters.every((letter => !w.includes(letter)))})
    console.log(words)
    return words.length
};