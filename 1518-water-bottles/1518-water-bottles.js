var numWaterBottles = function(numBottles, numExchange) {
    total = numBottles
    while (numBottles >= numExchange)
    {
        water = Math.floor(numBottles / numExchange)
        total += water
        numBottles = water + (numBottles % numExchange)
    }
    return total
};