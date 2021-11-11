/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    s = s.split(' ')
    
    s.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length-1))
    return s.map(sub).join(' ')
};

function sub(s){
    return s.slice(0, -1)
}