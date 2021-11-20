/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    len = digits.length-1
    if (digits[len] != 9) {digits[len]+=1
                                return digits}
    else
    {
        addAOne = true
        for (let i = digits.length-1; i > -1; i--)
        {
            console.log(i)
            if (digits[i] != 9) {digits[i] += 1 
                                 i = -1
                                addAOne = false
                                break}
            else {digits[i]=0}
        }
        if (addAOne) {digits.unshift(1)}
        return digits
    }
};