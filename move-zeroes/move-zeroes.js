/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {

    indexes = getAllIndexes(nums, 0)
    console.log(indexes)
    for (let i = 0; i < indexes.length; i++)
    {
        nums.push(nums.splice(indexes[i]-i, 1)[0])
    }
};

function getAllIndexes(arr, val){
    var indexes = [], i = -1;
    while ((i = arr.indexOf(val, i+1)) != -1)    
    {
        indexes.push(i)
    }
    return indexes
}