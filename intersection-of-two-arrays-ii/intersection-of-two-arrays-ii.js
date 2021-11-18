/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let map = {};
    const arr = [];
	
    for(let i of nums1){
      map[i] = map[i]+1 || 1;
    }
    
    for (let j of nums2)
    {
        if (map[j] > 0)
        {
            arr.push(j)
            map[j] -= 1
        }
    }
    return arr
};