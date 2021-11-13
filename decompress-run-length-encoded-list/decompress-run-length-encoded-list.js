/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    final = []
    for (let i = 0, j = 1; i < nums.length; i+=2, j+=2)
    {
        cur = ('*' + String(nums[j])).repeat(nums[i])

        cur = cur.split('*')
        console.log(cur)
        final.push(...cur)
    }
    return final.filter(check).map(convert)
};

function check(n) {
    return n !== '*'  && n !== ''
}

function convert(n) {
    return Number(n)
}
