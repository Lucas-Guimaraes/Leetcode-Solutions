var minTimeToType = function(word) {
    letters = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9,
              'j': 10, 'k': 11, 'l': 12, 'm': 13, 'n': 14, 'o': 15, 'p': 16, 'q': 17,
              'r': 18, 's': 19, 't': 20, 'u': 21, 'v': 22, 'w': 23, 'x': 24, 'y': 25,
              'z': 26}
    total = letters[word[0]] < 14 ? letters[word[0]]-1 : 26-letters[word[0]]+1
    for (i = 0; i < word.length-1; i++)
    {
        console.log(total)
        diff = Math.abs(letters[word[i]] - letters[word[i+1]])
        
        total += diff < 13 ? diff : (26-diff)
    }
    return total + word.length
};