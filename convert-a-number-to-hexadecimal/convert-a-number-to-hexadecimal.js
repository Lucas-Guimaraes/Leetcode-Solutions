/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    if (num == 0) {return '0'}
    
    arr = []
    
    if (num < 0) {
        num = num + (2**32)
    }
    
    while (num > 0)
    {
        remainder = num % 16
        arr.unshift(hexObj[remainder])
        num = Math.floor(num / 16)
    }
    return arr.join('')
};

function hex2bin(hex){
    return ("00000000" + (parseInt(hex, 16)).toString(2)).substr(-8);
}

hexObj = {0: '0',
        1: '1',
         2: '2',
         3: '3',
         4: '4',
         5: '5',
         6: '6',
         7: '7',
         8: '8',
         9: '9',
         10: 'a',
         11: 'b',
         12: 'c',
         13: 'd',
         14: 'e',
         15: 'f'}