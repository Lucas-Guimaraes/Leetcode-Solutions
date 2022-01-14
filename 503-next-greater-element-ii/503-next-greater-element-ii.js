var nextGreaterElements = function(nums) {
    arr = []; n = nums.length
    for (let i = 0; i < n; i++)
    {
        j = i===n-1? 0 : i+1; skip = false
        while (j !== i) {
            if (nums[j] > nums[i]) {arr.push(nums[j]); skip = true; break}
            j++; if (j >= n) {j = 0}
        }
        if (!skip) {arr.push(-1)}
    }
    return arr
};