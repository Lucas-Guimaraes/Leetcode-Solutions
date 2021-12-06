/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function(piles) {
    alice = 0, bob = 0
    piles.sort((a,b)=>b-a)
    while (piles.length > 0)
    {
        alice += piles.shift()
        if (piles.length > 0) {bob += piles.shift()}
    }
    return alice > bob
};