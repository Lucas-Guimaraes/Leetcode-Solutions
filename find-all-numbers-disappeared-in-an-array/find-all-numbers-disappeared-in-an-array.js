/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    nums = nums.sort(function(a,b) {return a-b})
    missing = []
    for (let i = 1; i < nums.length+1; i++)
    {
        if (nums.indexOf(i) === -1)
        {missing.push(i)}
    }
    return missing
};