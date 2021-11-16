/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    n = nums.length
    max = Number.NEGATIVE_INFINITY
    tempMax = 0
    
    for (let i = 0; i < n; i++)
    {
        tempMax = Math.max(nums[i], nums[i] + tempMax)
        if (tempMax > max)
        {
            max = tempMax
        }
    }
    return max
};