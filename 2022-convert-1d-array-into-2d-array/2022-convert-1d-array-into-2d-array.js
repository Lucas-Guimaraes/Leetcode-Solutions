var construct2DArray = function(original, m, n) {
    arr = []; k = 0
    if (m*n != original.length) {return []}
    for (let i = 0; i < m; i++)
    {
        col = []
        for (let j = 0; j < n; j++)
        {
            col.push(original[k])
            k++
        }
        arr.push(col)
    }
    return arr
};