/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 1 || new Set(strs).size === 1) {return strs[0]}
    
    commonPrefix = ''
    letter = 1
    
    while (true){
        check = strs.map(function dice(element){return element.substring(0, letter)})
        checkSize = new Set(check).size
        if (checkSize === 1) {commonPrefix = check[0]}
        else {return commonPrefix}
        letter++
    }
};
