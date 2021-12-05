var smallerNumbersThanCurrent = function(nums) {
    arr = []
    for (let i = 0; i < nums.length; i++)
    {
        arr.push(0)
        for (let j = 0; j < nums.length; j++)
        {
            if (i === j) {continue;}
            if (nums[i] > nums[j]) {arr[i] += 1}
        }
    }
    return arr
};