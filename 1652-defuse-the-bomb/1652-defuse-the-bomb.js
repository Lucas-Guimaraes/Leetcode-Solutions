var decrypt = function(code, k) {
    //If 0
    if (k === 0) {return Array(code.length).fill(0)}
    
    arr = []; i = 0
    
    //If Positive
    if (k >= 1)
    {
        while (i < code.length)
        {
            j = i; count = 0; cur = 0
            while (count < k)
            {
                j++; count++
                if (j === code.length) {j = 0}
                cur += code[j]
            }
            arr.push(cur); i++
        }
    }
    
    //If Negative
    else if (k < 0)
    {
        while (i < code.length)
        {
            j = i; count = 0; cur = 0
            while (count > k)
            {
                j--; count--
                if (j === -1) {j = code.length-1}
                cur += code[j]
            }
            arr.push(cur); i++
        }
    }
    return arr
};