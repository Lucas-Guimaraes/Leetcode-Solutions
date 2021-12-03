/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    return singles(nums)
};

function singles(array) {
  for (var index = 0, single = []; index < array.length; index++) {
    if (array.indexOf(array[index], array.indexOf(array[index]) + 1) == -1)
      single.push(array[index]);
  };
  return single;
};