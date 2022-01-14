var minCostToMoveChips = function(position) {
    odd = even = 0
    for (let i = 0; i < position.length; i++)
    {if (position[i] % 2 === 0) {even++}
    else {odd++}}
    return Math.min(odd, even)
};