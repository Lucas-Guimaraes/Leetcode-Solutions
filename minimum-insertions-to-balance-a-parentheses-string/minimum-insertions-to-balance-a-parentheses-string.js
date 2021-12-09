var minInsertions = function(s) {
    l = 0; r = 0
    
    for (let i = 0; i < s.length; i++)
    {
        if (s[i] === '(') {l++; continue}
        l > 0 ? l-- : r++
        s[i+1] === ')' ? i++ : r++
    }
    return r + (l*2)
};