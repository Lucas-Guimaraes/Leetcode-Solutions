/**
 * @param {string} s
 * @return {string}
 */
var reformat = function(s) {
    a = s.replace(/\D/g,''), b = s.replace(/[^a-z]/g, '')
    aLen = a.length, bLen = b.length, str=''
    if (Math.abs(aLen - bLen) > 1) {return ""}
    if (aLen > bLen) {temp = a, a = b, b = temp, aLen = a.length, bLen=b.length}
    
    for (let i=0;i<aLen;i++) {str+=b[i]+a[i]}
    if (bLen > aLen) {str += b[bLen-1]}
    return str
};