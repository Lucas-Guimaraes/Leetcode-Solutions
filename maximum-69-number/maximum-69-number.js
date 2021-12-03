/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    stringNum = String(num)
    numCount = stringNum.length-1
    idxOf6 = stringNum.indexOf('6')
    if (idxOf6 === -1) {return num}
    else {num += (10 ** (numCount-idxOf6)) * 3
         return num}
};