/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    t = nums.indexOf(target)
    if (t > -1) {return t}
    else {
        if (target > Math.max(...nums)) {return nums.length}
        else
        {
            nums = nums.filter(function (cur) {return cur < target})
            
            return nums.length
        }
    }
};
