/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    max = Math.max.apply(null, nums)
    nums.splice(nums.indexOf(max), 1)
    secondMax = Math.max.apply(null, nums);
    
    min = Math.min.apply(null, nums)
    nums.splice(nums.indexOf(min), 1)
    secondMin = Math.min.apply(null, nums);
    
    return (max * secondMax) - (min * secondMin)
};