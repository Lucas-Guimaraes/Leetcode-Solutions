var findTheWinner = function(n, k) {
    queue = []
    for (let i = 1; i <= n; i++) {queue.push(i)}
    console.log(queue)
    while (queue.length > 1)
    {
        delCount = k-1
        while (delCount > 0) {queue.push(queue.shift()); delCount--}
        queue.shift()
    }
    return queue[0]
};