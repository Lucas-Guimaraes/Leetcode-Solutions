/**
 * @param {string} sentence
 * @return {string}
 */

var toGoatLatin = function(sentence) {
    vowels = ['a','e','i','o','u']
    let startWithVowel = word => vowels.includes(word[0].toLowerCase())
    sentence = sentence.split(' ').map((word, i) => startWithVowel(word, i)  ? word + 'ma' + 'a'.repeat(i + 1)
  : word.substr(1) + word[0] + 'ma' + 'a'.repeat(i + 1)
    ).join(' ')
    return sentence
};