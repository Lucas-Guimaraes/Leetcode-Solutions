var validateStackSequences = function(pushed, popped) {
    
    stack = []; checking = true; count = 0
    
    for (let i = 0; i < pushed.length; i++)
    {
        stack.push(pushed[i])
        while (stack.length && stack[stack.length-1] === popped[count]) {stack.pop(); count++}
    }
    console.log(stack)
    return stack.length === 0
};