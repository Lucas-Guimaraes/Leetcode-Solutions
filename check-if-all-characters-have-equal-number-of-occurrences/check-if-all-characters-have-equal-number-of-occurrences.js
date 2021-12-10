
var areOccurrencesEqual = function(s) {
    x = new RegExp(s[0], "g"); y = s[0]
    var count = (s.match(x) || []).length;
    for (let i = 1; i < s.length; i++)
    {   if (y.includes(s[i])) {continue}
        else {x = new RegExp(s[i], "g"); y+=s[i]
        if ((s.match(x) || []).length != count) {return false}}}
    return true
};