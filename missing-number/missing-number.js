/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    
    nums = nums.sort(function(a,b) {return a-b})
    numlength = nums.length
    for (let i = 1; i < numlength; i++)
    {
        if (nums[i] != nums[i-1]+1)
        {
            return nums[i]-1
        }
    }
    return nums.includes(0) ? numlength : 0
};