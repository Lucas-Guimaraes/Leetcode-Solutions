var shiftGrid = function(grid, k) {
    m = grid.length
    n = grid[0].length
    arr1d = [].concat(...grid); arr2d = []
    for (let i = 0; i < k; i++)
    {
        arr1d.unshift(arr1d.pop())
    }
    for (let i = 0; i < m; i++)
    {
        row = []
        for (let j = 0; j < n; j++)
        {
           row.push(arr1d.shift()) 
        }
        arr2d.push(row)
    }
    return arr2d
};