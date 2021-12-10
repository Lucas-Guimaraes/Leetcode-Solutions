var luckyNumbers  = function(matrix) {
    const arrayColumn = (arr, n) => arr.map(x => x[n]); lucky = []
    
    for (let i = 0; i < matrix.length; i++)
    {
        temp = Math.min(...matrix[i])
        tempIdx = matrix[i].indexOf(temp)
        if (Math.max(...arrayColumn(matrix, tempIdx)) === temp) {lucky.push(temp)}
    }
    return lucky
};