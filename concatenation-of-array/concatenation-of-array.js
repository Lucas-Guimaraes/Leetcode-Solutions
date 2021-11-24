/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    n = [...nums]
    n = nums.concat(n)
    return n
};