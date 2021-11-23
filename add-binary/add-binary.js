/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let carry = 0;
    res = []
    let l1 = a.length, l2 = b.length
    for (let i=l1-1, j=l2-1; 0 <= i || 0 <= j; --i,--j)
    {
        
        let c = 0 <= i ? Number(a[i]) : 0
        let d = 0 <= j ? Number(b[j]) : 0
        
        if (String(c) === 'NaN') {c = 0}
        if (String(d) === 'NaN') {d = 0}
        
        res.push(String((c+d+carry) % 2))
        carry = 1 < c  + d + carry;
    }
    
    if (carry){
        res.push(String(1))
    }
    return res.reverse().join('')
};