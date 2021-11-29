/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums = nums.sort(function(a,b) {return a-b})
    count = 0
    l = nums.length-2
    while (l > -1)
    {
        count += nums[l], l-=2
    }
    return count
};