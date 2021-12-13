var maxChunksToSorted = function(arr) {
    stack = []
    for (let i = 0; i < arr.length; i++)
    {
        highest = arr[i];
        while (stack && arr[i] < stack[stack.length-1])
        {
            highest = Math.max(highest, stack.pop())
        }
        stack.push(highest)
    }
    return stack.length
};