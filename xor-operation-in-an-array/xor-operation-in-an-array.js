/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    return [...Array(n)].reduce((acc, curr, index)=>{num = start + index * 2;
                                                    return num ^ acc}, 0)
};