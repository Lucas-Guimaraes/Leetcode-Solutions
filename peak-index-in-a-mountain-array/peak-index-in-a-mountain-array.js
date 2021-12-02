/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    r = [...arr]
    r = r.sort(function(a,b){return a-b})
    r = r[r.length-1]
    return arr.indexOf(r)
};