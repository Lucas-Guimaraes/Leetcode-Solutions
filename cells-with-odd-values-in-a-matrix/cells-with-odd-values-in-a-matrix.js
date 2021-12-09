var oddCells = function(m, n, indices) {
    rows = Array(m).fill(0)
    cols = Array(n).fill(0)
    for (let [x,y] of indices) {rows[x]++;cols[y]++;}
    rows = rows.filter((x)=>x%2!==0).length
    cols = cols.filter((y)=>y%2!==0).length
    return (rows*n)+(cols*m)-(2*rows*cols)
};