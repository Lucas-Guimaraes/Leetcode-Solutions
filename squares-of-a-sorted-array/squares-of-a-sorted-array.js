/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  return nums.map(power).sort(function(a,b) {return a-b})
};

function power(num) {
    return num ** 2
}