var truncateSentence = function(s, k) {
    sArr = s.split(' ')
    str = ''
    for (let i = 0; i < k; i++)
    {
        str += i===k-1 ? sArr[i] : sArr[i] + ' '
    }
    return str
};