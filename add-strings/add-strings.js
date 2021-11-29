/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    return conversion(num1, num2)
};

function conversion(x, y) {
    numDict = {"0": 0, "1": 1, "2": 2, "3": 3, "4": 4,
              "5": 5, "6": 6, "7": 7, "8": 8, "9": 9}
    
    if (x.length === 1 && y.length === 1) {return String(numDict[x[0]] + numDict[y[0]])}
    carry = 0, i = x.length-1, j = y.length-1
    lst = []
    while (i >= 0 || j >= 0)
    {
        n = 0, o = 0
        if (i >= 0) {n = numDict[x[i]], i--}
        if (j >= 0) {o = numDict[y[j]], j--}
        
        a = n+o+carry
        carry = Math.floor(a/10)
        a = a%10
        lst.push(String(a))
    }
    if (carry !== 0) {lst.push(carry)}
    return lst.reverse().join('')
}