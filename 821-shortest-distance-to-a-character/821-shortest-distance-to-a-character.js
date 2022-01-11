var shortestToChar = function(s, c) {
    const answer = Array(s.length).fill(Infinity);
    let l = Infinity, r = Infinity;
    
    for (let first = 0; first < s.length; first++)
    {
        const last = s.length-1-first;
        l = s[first] === c ? 0:l+1
        r = s[last] === c ? 0:r+1
        
        answer[first] = Math.min(answer[first], l)
        answer[last] = Math.min(answer[last], r)
    }
    
    return answer
};