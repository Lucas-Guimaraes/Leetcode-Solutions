/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function(s) {
    x = s.split(' ')
    max = 0
    
    for (let i = 0; i < x.length; i++)
    {
        y = parseInt(x[i])
        if (!isNaN(y))
        {
            if (y <= max) {return false}
            else {max = y}
        }
    }
    return true
};