/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    bc = (text.match(/b/g)||[]).length
    ac = (text.match(/a/g)||[]).length
    lc = Math.floor((text.match(/l/g)||[]).length / 2)
    oc = Math.floor((text.match(/o/g)||[]).length / 2)
    nc = (text.match(/n/g)||[]).length
    return Math.min(...[bc,ac,lc,oc,nc])
};