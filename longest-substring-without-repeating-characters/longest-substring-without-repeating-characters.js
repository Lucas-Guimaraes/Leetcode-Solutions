/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s === "") {return 0}
    if (s.length===1 || new Set(s).size ===1) {return 1}
    if (isUnique(s)) {return s.length}
    

    i = 0, k = 2, max = 0, count = 1, noUniq = false
    
    while (count < s.length)
    {
        temp = s.substring(i, k)
        if (isUnique(temp)) {
            count += 1
            max = temp.length
            k = count+1, i = 0
            continue
        }
        if (k === s.length)
        {
            break
        }
        k++, i++
    }
    return max
        
};

function isUnique(str) {
  return new Set(str).size == str.length;
}
