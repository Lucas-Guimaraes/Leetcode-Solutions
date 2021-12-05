/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    minus = operations.filter(x=> x === "--X" || x === "X--")
    console.log(minus)
    return operations.length - minus.length*2
};