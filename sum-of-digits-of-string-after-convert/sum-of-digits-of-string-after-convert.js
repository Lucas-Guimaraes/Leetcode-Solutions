/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    a = '', cur = 0
    for (const c of s) a += c.charCodeAt() - 96
    while (k > 0)
    {
        cur = String(a).split('').reduce(myFunc, 0)
        a = String(cur)
        k--
    }
    return cur
};

function myFunc(total, num) {
    return total + Number(num)
}