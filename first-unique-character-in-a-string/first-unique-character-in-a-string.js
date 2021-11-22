/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    uniq = makeUnique(s)
    for (let i = 0; i < uniq.length; i++)
    {
        if (s.match(new RegExp(uniq[i], "g")).length === 1) {return s.indexOf(uniq[i])}
    }
        
    return -1
};

function makeUnique(str) {
  return String.prototype.concat(...new Set(str))
}