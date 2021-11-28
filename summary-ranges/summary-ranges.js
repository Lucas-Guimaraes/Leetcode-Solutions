/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    nLength = nums.length
    
    if (nLength === 1) {return [String(nums[0])]}
    
    low = nums[0]
    high = null
    lst = []
    for (let i = 1; i < nLength; i++)
    {
        
        if (nums[i] === nums[i-1]+1) {high = nums[i]}
        else {
            if (high === null) {lst.push(String(low))}
            else {lst.push(`${low}->${high}`)}
            low = nums[i]
            high = null
        }
        if (i === nLength-1){
            
            if (high === null) {lst.push(String(low))}
            else {lst.push(`${low}->${high}`)}
            console.log(lst)
        }
    }
    return lst
    
};