var preorderTraversal = function(root) {
    if (!root) {return []}
    stack = [root]; result = []
    while (stack.length)
    {
        cur = stack.pop()
        result.push(cur.val)
        if (cur.right) {stack.push(cur.right)}
        if (cur.left) {stack.push(cur.left)}
    }
    return result
};