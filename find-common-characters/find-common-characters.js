/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    
    smallest = words.reduce(function(a, b) {
    return a.length <= b.length ? a : b;
  })
    
    letters = smallest.split('')    
    commonLetters = []
    let mapCount = {}
    
    for (let letter of letters)
    {
        mapCount[letter] = mapCount[letter]+1 || 1;
        console.log(letter)
        pattern = new RegExp(letter, 'g')
        x = words.filter(function(ele) {return (ele.match(pattern) || []).length >= mapCount[letter]})
        if (x.length === words.length) {commonLetters.push(letter)}
    }
    
    return commonLetters
};