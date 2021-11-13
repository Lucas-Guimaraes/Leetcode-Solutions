/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
    arr = new Array(num_people).fill(0)
    cur = 0
    amt = 1
    
    while (candies > 0)
    {
        if (candies - amt < 1) {arr[cur] += candies}
        else {arr[cur] += amt}
        candies -= amt
        cur += 1, amt += 1
        if (cur == arr.length) {cur = 0}
    }
    return arr
};