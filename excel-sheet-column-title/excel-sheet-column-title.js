/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    col = ''
    letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    while (columnNumber > 0)
    {
        temp = (columnNumber-1)%26
        col = letters[temp] + col
        columnNumber = Math.floor((columnNumber-temp-1) / 26)
    }
    return col
};

