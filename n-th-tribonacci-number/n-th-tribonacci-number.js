/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    if (n === 1) {return 1}
    if (n === 2) {return 1}
    let base = {0:0,1:1,2:1};
    fin = 0
    
    for (let i = 3; i < n+1; i++)
    {
        fin = base[0]+base[1]+base[2]
        base[0] = base[1]
        base[1] = base[2]
        base[2] = fin
    }
    
    return fin
};