var largestNumber = function(nums) {
    
    nums.sort((a,b)=> Number(String(b) + String(a)) - Number(String(a)+String(b)) )
    nums = nums.join("").replace(/^0+(?!$)/g, "")
    return nums;
};