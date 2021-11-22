/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    if (n === 2) {return false}
    x = String(n), previously = []
    while (true)
    {
        if (x === '1') {return true}
        x = x.split('').map(toSquared).reduce(getSum, 0)
        
        x = String(x)
        if (previously.includes(x)) {return false}
        previously.push(x)

    }
    
};

function toSquared(n) {return Number(n) ** 2}
function getSum(total, num) {return total + Math.round(num)}