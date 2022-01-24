var diStringMatch = function(s) {
    perm = new Array(s.length+1)
    low = 0; high = s.length; i = 0;
    
    while (i < s.length)
    {
        if (s[i] === 'I') {perm[i++] = low++}
        else {perm[i++] = high--}
    }
    perm[s.length] = high
    return perm
};