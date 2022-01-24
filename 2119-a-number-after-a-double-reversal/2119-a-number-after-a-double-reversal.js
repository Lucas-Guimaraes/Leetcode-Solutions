var isSameAfterReversals = function(num) {
    n = Number(String(num).split('').reverse().join(''))
    n = Number(String(n).split('').reverse().join(''))
    return n == num
};