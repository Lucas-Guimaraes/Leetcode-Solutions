/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    nums = nums.sort(function(a,b){return a-b})
    n = nums.length
    x = nums[n-1], y = nums[n-2], z = nums[n-3]
    a = nums[0], b = nums[1], c = nums[2]
    return Math.max(x*y*z, a*b*c, x*a*b)
};