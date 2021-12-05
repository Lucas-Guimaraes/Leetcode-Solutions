/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    stack = []
    for (let i = 0; i < ops.length; i++)
    {
        if (i === 0) {stack.push(Number(ops[i])); continue}
        
        prev = stack[stack.length-1]
        curr = ops[i]
        if (curr === "+") {stack.push(prev+stack[stack.length-2])}
        else if (curr === "C") {stack.pop()}
        else if (curr === "D") {stack.push(2 * prev)}
        else {stack.push(Number(curr))}
    }
    console.log(stack)
    return stack.reduce((a,b) => a+b, 0);
};