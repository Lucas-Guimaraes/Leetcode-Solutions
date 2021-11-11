/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {
    
    
    
    nums = nums.join('')
    
    if (k == 0) {return true}
    if (!nums.includes('1')) {return true}
    if (nums.includes('11')) {return false}
    
    begin1 = nums.indexOf("1")
    end1 = nums.lastIndexOf("1")
    
    nums = nums.slice(begin1, end1)
    console.log(nums)
    nums = nums.split('1')
    
    let testBlank = (x) => '' != x
    
    nums = nums.filter(testBlank)
    for (let x = 0; x < nums.length; x++)
    {
        if (nums[x].length < k) {return false}
    }
    return true
};