/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    x=Math.floor(n/2)
    lst = []
    for (let i = 0; i<x; i++)
    {lst.push(i+1)
    lst.push(-(i+1))}
    if (n%2) {lst.push(0)}
    return lst
};