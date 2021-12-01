/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    s = s.split('')
    if (s.join('') === s.reverse().join('')) {return true}
    
    palin1 = []
    palin2 = []
    for (let i = 0, j = s.length-1; i < Math.ceil(s.length/2); i++, j--)
    {
        console.log(i, j)
        if (s[i] != s[j]) {palin1 = [...s]
                           palin2 = [...s]
                           palin1.splice(i, 1), palin2.splice(j, 1)
                           break
                          }
        
    }
    console.log(palin1, palin2, s)
    return palin1.join('') === palin1.reverse().join('') || palin2.join('') === palin2.reverse().join('')
};