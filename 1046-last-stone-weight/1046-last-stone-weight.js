var lastStoneWeight = function(stones) {
    while (stones.length > 1)
    {
        first = Math.max(...stones)
        firstIdx = stones.indexOf(first)
        stones.splice(firstIdx, 1);
        
        second = Math.max(...stones)
        secondIdx = stones.indexOf(second)
        stones.splice(secondIdx, 1);
        
        x = first-second
        
        if (x > 0) {stones.push(x)}
    }
    return stones.length === 1 ? stones[0] : 0
};