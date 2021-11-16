/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    sLst = s.split(""), tLst = t.split("")
    sCount = 1, tCount = 1
    numSLst = [], numTLst = []
    arrSLst = [], arrTLst = []
    
    for (let i = 0; i < s.length; i++)
    {
        if (arrSLst.includes(sLst[i])) {numSLst.push(numSLst[sLst.indexOf(sLst[i])])}
        else (arrSLst.push(sLst[i]), numSLst.push(sCount), sCount += 1)
        
        if (arrTLst.includes(tLst[i])) {numTLst.push(numTLst[tLst.indexOf(tLst[i])])}
        else (arrTLst.push(tLst[i]), numTLst.push(tCount), tCount += 1)
        
        if (numSLst[i] !== numTLst[i]) {return false}
    }
    
    return equals(numSLst, numTLst)
};

const equals = (a, b) =>
  a.length === b.length &&
  a.every((v, i) => v === b[i]);