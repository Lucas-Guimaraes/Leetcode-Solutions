/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function(lowLimit, highLimit) {
    var list = [];
    for (var i = lowLimit; i <= highLimit; i++) {
        list.push(String(i).split(''));
    }
    ballsObj = {}
    highestVal = 1
    for (var i = 0; i < list.length; i++)
    {
        t = list[i].reduce(totalN)
        if (!(t in ballsObj)) {ballsObj[t] = 1 }
        else {ballsObj[t] += 1
             highestVal = Math.max(ballsObj[t], highestVal)}
    }
    console.log(ballsObj)
    return highestVal
};

function totalN(t, n) {
    return parseInt(t) + parseInt(n)
}