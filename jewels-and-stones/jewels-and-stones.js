var numJewelsInStones = function(jewels, stones) {
    jewels = jewels.split('')
    return stones.split('').filter(s=>jewels.includes(s)).length
};