/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    n = nums.length
    if (new Set(nums).size === n || n<2) {return n}
    
    for (let i = n; 0 < i; i--)
    {
        if (nums.indexOf(nums[i]) !== i)
        {
            nums.splice(i, 1)
        }
    }
    return nums.length
};