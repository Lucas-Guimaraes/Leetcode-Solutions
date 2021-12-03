/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    x = []
    for (let i = 0; i < nums.length; i++)
    {
        if (i != nums.lastIndexOf(nums[i])) {x.push(nums[i])}
    }
    return x
};