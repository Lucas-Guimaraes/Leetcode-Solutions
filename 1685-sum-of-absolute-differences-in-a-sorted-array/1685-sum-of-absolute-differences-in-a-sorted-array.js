var getSumAbsoluteDifferences = function(nums) {
    res = []
    sum = nums.reduce((a, b) => a + b)
    len = nums.length
    sumR = 0
    sumL = 0
    for (let i = 0; i < len; i++) {
        cur = nums[i]
        sumL += nums[i]
        sumR = sum - sumL
        next = i + 1
        A = cur * next - sumL
        B = sumR - cur * (len - next)
        res.push(A + B)
    }
    return res
    
};