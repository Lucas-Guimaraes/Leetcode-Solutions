/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function(nums) {
    //Edge case 1 - more than one duplicate
    if (new Set(nums).size < nums.length-1) {return false}
    
    //Edge case 2 - list is already sorted
    if (compString(nums)) {return true}
    
    //Edge case 3 - only two items in list
    if (nums.length === 2) {return true}
    
    i = 1
    sortIncrease = false
    curMax = 0
    while (i < nums.length)
    {
        
        if (nums[i-1] >= nums[i])
            {
                console.log(nums[i])
                if (nums[i-1] >= nums[i+1]) {nums.splice(i-1, 1)}
                else {nums.splice(i, 1)}
                sortIncrease = true
                if (new Set(nums).size < nums.length) {return false}
            }
        else {i++}
        console.log(nums)
        if (sortIncrease){i=1001}
    }
    return compString(nums)
}

function compString(l){
    s = [...l].sort(function (a,b){return a-b})
    return s.toString() === l.toString()
}