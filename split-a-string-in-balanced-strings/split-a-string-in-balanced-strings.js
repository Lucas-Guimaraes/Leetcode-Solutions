var balancedStringSplit = function(s) {
    LCount = 0; RCount = 0; total = 0
    for (let i = 0; i < s.length; i++)
    {
        if (s[i] === 'L') {LCount++}
        if (s[i] === 'R') {RCount++}
        if (LCount === RCount) {total++}
    }
    return total
};