/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    if (numbers.length == 2) {return [1, 2]}
    for (let i = 0; i < numbers.length; i++)
    {
        for (let x = i+1; x < numbers.length; x++)
        {
            if (numbers[i] + numbers[x] == target) {return [i+1, x+1]}
        }
    }
};