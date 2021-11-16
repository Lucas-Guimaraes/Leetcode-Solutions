/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map = new Map()
    divide = nums.length / 2
    for (let num of nums)
    {
        if (num in map) {map[num] += 1}
        else {map[num] = 1}
        
        if (map[num] > divide) {return num}
    }
};

