/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    
    lCount = moves.split("L").length - 1
    rCount = moves.split("R").length - 1
    uCount = moves.split("U").length - 1
    dCount = moves.split("D").length - 1
    return uCount === dCount && rCount ===lCount
};