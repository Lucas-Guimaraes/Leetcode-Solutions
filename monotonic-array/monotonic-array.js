/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    decreasing = false
    increasing = false
    for (let i = 1; i < nums.length; i++)
    {
        if (nums[i] > nums[i-1]) {increasing = true}
        if (nums[i] < nums[i-1]) {decreasing = true}
        if (decreasing & increasing)
        {return false}
    }
    return true
};