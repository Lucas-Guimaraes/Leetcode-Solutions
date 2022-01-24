var countNegatives = function(grid) {
    total = 0
    for (let i = 0; i < grid.length; i++)
    {
        total += grid[i].filter((n) => n <= -1).length
    }
    return total
};