var scoreOfParentheses = function(s) {
    score = 0; stack = []
    
    for (let c of s)
    {
        if (c === '(') {stack.push(score)
                       score = 0}
        else {score = stack.pop() + Math.max(score * 2, 1)}
    }
    return score
};