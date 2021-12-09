var halvesAreAlike = function(s) {
    s1 = s.substring(0, s.length/2); s2 = s.substring(s.length/2)
    return (s1.match(/[aeiou]/gi) || []).length === (s2.match(/[aeiou]/gi) || []).length
};