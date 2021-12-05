/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    peak = false
    if (arr.length <= 2 || arr[1] <= arr[0]) {return false}
    for (let i = 1; i < arr.length; i++)
    {
        if (arr[i] === arr[i-1]) {return false}
        else if (peak) {if (arr[i-1] < arr[i]) {return false}}
        else {if (arr[i-1] > arr[i]) {peak = true; continue}}    
    }
    return peak
};