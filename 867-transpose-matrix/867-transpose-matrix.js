var transpose = function(matrix) {
    matrixTranspose = []
    for (let c = 0; c < matrix[0].length; c++)
    {
        colArr = []
        for (let r = 0; r < matrix.length; r++)
        {
            colArr.push(matrix[r][c])
        }
        matrixTranspose.push(colArr)
    }
    return matrixTranspose
};