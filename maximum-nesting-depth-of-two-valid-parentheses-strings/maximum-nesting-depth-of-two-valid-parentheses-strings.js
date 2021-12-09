var maxDepthAfterSplit = function(seq) {
    l = 0; r = 0, arr = []
    for (let i = 0; i < seq.length; i++)
    {
        if (seq[i] === '(') { 
            if (l <= r) {l++; arr.push(0)}
            else {r++; arr.push(1)}}
        else {
            if (l > r) {l--; arr.push(0)}
            else {r--; arr.push(1)}}
    }
    return arr
};