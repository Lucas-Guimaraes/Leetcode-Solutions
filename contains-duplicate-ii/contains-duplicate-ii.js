/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    map = new Map()
    let diffIndex
    for (let i in nums)
    {
        if (map.has(nums[i]))
        {
            diffIndex = i-map.get(nums[i])
            if (diffIndex <= k)
            {
                return true
            }
        }
        map.set(nums[i], i)
    }
    return false
    
};
