/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    if (nums.length == 1) {return nums[0]}
    nums = nums.sort(function (a,b) {return b-a})
    for (let i = nums.length-1; i > -1; i--)
    {
        if (nums.indexOf(nums[i]) === i)
        {
            return nums[i]
        }
        else
        {
            i = nums.indexOf(nums[i])    
        }
    }
};
