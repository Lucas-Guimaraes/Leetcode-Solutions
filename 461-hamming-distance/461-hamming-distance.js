var hammingDistance = function(x, y) {
    return (x^y).toString(2).match(/1/g)?(x^y).toString(2).match(/1/g).length:0
};