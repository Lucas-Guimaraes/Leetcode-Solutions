/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    nums = nums.map(square)
    return nums.sort(function(a, b) {return a-b})
};

let square = n => n ** 2