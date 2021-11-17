/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    
    
    while (n > 0)
    {
        nums1.pop()
        nums1.unshift(nums2[0])
        nums2.shift()
        n--
    }
    nums1.sort(function(a,b){return a-b})

};