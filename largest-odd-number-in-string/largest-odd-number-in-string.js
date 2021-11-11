/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    split = num.split('')
    
    if (parseInt(num[num.length-1]) % 2 === 1) {
        console.log('test')
        return num}
    if (!split.some(test)) {return ""}
    
    for(let i=num.length-1; i>0; i--){
        if (parseInt(num[i-1])%2!==0){
            return num.substr(0,i)
        }
    }
};

function test(t) {
    return "13579".includes(t)
}