/**
 * @param {number} n
 * @return {number}
 */
var rotatedDigits = function(n) {
    res=0
    for (let i = 1; i <= n; i++)
    {
        let j = i.toString()
        if(j.includes("3")||j.includes("4")||j.includes("7")) continue;
        if(j.includes("2")||j.includes("5")||j.includes("6")||j.includes("9")) res++
    }
    return res
};