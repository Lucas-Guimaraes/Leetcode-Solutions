/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
    regex = /([a-z])\1\1+/g
    s = s.replaceAll(regex,function(x) {return x.substring(0,2)})
    return s
};