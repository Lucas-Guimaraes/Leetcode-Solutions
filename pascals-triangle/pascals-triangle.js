/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (numRows === 1) {return [[1]]}
    if (numRows === 2) {return [[1], [1, 1]]}
    
    r = [[1], [1, 1], [1, 2, 1]]
    if (numRows === 3) {return r}
    
    for (let i = 3; i < numRows; i++)
    {
        temp = [1]
        for (let j = 0; j < i-1; j++)
        {
            temp.push(r[i-1][j] + r[i-1][j+1])
        }
        temp.push(1)
        r.push(temp)
        
    }
    return r
};