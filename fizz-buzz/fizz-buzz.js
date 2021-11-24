/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    x = [...Array(n).keys()];
    x.shift()
    x.push(n)
    
    return x.map(fizzy)
};

function fizzy(n) {
    if (n % 3 == 0 && n % 5 == 0) {return 'FizzBuzz'}
    else if (n % 3 == 0) {return 'Fizz'}
    else if (n % 5 == 0) {return 'Buzz'}
    else {return String(n)}
}