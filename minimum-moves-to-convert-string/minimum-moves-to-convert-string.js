/**
 * @param {string} s
 * @return {number}
 */
var minimumMoves = function(s) {
    count = 0
    for (let i = 0; i < s.length;)
    {
        if (s[i] === "X") {count += 1, i += 3}
        else {i += 1}
    }
    return count
};