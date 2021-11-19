/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    
    if (mat.length*mat[0].length === c*r )
    {
        let temp = []

        for (let arr of mat) {
            for (let elem of arr) {
                temp.push(elem)
            }
        }

        let output = []
        
        for (let i = 0; i < r; i++)
        {
            output.push([])
            for (let j = 0; j < c; j++)
            {
                output[i].push(temp.shift())
            }
        }
        return output
    }
    else {return mat}
    
    newMat = []
    
 
};