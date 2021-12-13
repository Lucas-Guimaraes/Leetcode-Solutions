var isValid = function(s) {
    while (s != '')
    {
        x = s.indexOf('abc')
        if (x === -1) {return false}
        s = s.replace('abc', '')
    }
    return true
};