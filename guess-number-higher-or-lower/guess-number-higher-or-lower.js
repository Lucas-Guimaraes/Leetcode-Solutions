/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    max = 2147483648
    min = 1
    while (guess(n) !== 0)
    {
        cur = guess(n)
        if (cur === -1)
        {
            max = n-1
        }
        else if (cur === 1)
        {
            min = n+1
        }
        console.log(n)
        n = Math.floor(Math.random() * (max-min) + min)
    }
           
    return n
};