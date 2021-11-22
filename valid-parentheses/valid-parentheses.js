/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
/*   map = {'squigglyBracket': 0
         'circleBracket': 0
         'squareBracket': 0}*/
    
    
    last = []
    for (let i = 0; i < s.length; i++)
    {
        
        //Circle test
        if (s[i] === '(')
        {
            last.unshift('circle')
        }
        if (s[i] === ')')
        {
            if (last.length === 0) {return false}
            if (last[0] != 'circle') {return false}
            last.shift()
        }
        
        //Square test
        if (s[i] === '[')
        {
            last.unshift('square')
        }
        if (s[i] === ']')
        {
            if (last.length === 0) {return false}
            if (last[0] != 'square') {return false}
            last.shift()
        }
        
        //Squiggly test
        if (s[i] === '{')
        {
            last.unshift('squiggly')
        }
        if (s[i] === '}')
        {
            if (last.length === 0) {return false}
            if (last[0] != 'squiggly') {return false}
            last.shift()
        }
        
    }
    return last.length === 0
};