/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    k = 2
    for (let i = 0, j = 1; i < nums.length; j++)
    {
        if (nums[i] + nums[j] == target) {return [i, j]}
        if (j === nums.length) {j=k-1, k++, i++}
    }
};