/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    ransomUniq = makeUnique(ransomNote)
    for (let i = 0; i < ransomUniq.length; i++)    
    {
        ranLen = (ransomNote.match(new RegExp(ransomUniq[i], "g")) || []).length 
        magLen = (magazine.match(new RegExp(ransomUniq[i], "g")) || []).length
        
        if (magLen < ranLen) {return false}
    }
    return true
};

function makeUnique(str) {
  return String.prototype.concat(...new Set(str))
}