/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function(s) {
    if (s === '1') {return true}
    if ((s.match(/1/g) || []).length === 1) {return true}
    s = s.replace(/0{1,}/, 'x')
    s = s.split('x')
    s = s.filter(f)
    console.log(s)
    return s.length === 1   
};

let f = (x) => x.length > 0
