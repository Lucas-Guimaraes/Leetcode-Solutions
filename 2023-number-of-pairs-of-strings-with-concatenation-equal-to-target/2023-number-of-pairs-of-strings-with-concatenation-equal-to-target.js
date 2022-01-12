var numOfPairs = function(nums, target) {
    total = 0
    for (let i = 0; i < nums.length; i++)
    {
        for (let j = i+1; j < nums.length; j++)
        {
            if (nums[i] + nums[j] === target) {total += 1}
            if (nums[j] + nums[i] === target) {total += 1}
        }
    }
    return total
};