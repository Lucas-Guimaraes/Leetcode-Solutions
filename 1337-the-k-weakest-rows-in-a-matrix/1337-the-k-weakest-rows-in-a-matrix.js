var kWeakestRows = function(mat, k) {
    mat2 = [...mat].sort(); result = []; i = 0
    while (k > 0)
    {
        result.push(mat.indexOf(mat2[i])); k--; i++
    }
    return result
};
