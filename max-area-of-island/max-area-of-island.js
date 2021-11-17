/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let res = 0;
    //Check all the cells
        //If a 1 is found apply DFS and make that Island water
        //Return the size of that Island
    let BFS = (row,col) => {
        if (row >= grid.length || row < 0) {return 0}
        if (col >= grid[0].length || col < 0) {return 0}
        
        if (grid[row][col] === 1) {grid[row][col] = 0}
        else {return 0}
        
        return BFS(row+1,col)+BFS(row-1,col)+BFS(row,col+1)+BFS(row,col-1)+1
        
    }
    
    for(let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1)
            {
                res = Math.max(BFS(i,j), res)
            }
        }
    }
    
    return res;
};