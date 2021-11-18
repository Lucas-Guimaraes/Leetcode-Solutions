/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    //I can be placed before V (5) and X (10) to make 4 and 9. 
    //X can be placed before L (50) and C (100) to make 40 and 90. 
    //C can be placed before D (500) and M (1000) to make 400 and 900.
    
    minusI = false, minusX = false, minusC = false
    mapRoman = {'I': 1,
               'V': 5,
               'X': 10,
               'L': 50,
               'C': 100,
               'D': 500,
               'M': 1000}
    total = 0
    
    for (let i = s.length-1; i > -1; i--)
    {
        c = s[i]
        if (c === 'V' || c === 'X') {minusI = true}
        if (c === 'L' || c === 'C') {minusX = true}
        if (c === 'D' || c === 'M') {minusC = true}
        
        if ((minusI && c == 'I') || (minusX && c == 'X') || (minusC && c == 'C')) {total -= mapRoman[c]}
        else {total += mapRoman[c]}
    }
    return total
};