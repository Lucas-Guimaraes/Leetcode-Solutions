var checkValidString = function(s) {
    stack = [], extra = []
    for (let i = 0; i < s.length; i++)
    {
        if (s[i] === '(') {stack.push(i)}
        else if (s[i] === '*') {extra.push(i)}
        else {
            if (stack.length > 0) {stack.pop()}
            else if (extra.length > 0) {extra.pop()}
            else {return false}
        }
    }
    while (stack.length > 0 && extra.length > 0)
    {
        if (stack[stack.length-1] > extra[extra.length-1]) {return false}
        stack.pop()
        extra.pop()
    }
    return stack.length === 0
    
};