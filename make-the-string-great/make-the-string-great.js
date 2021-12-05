/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    stack = []
    for (let i = 0; i < s.length; i++)
    {
        if (stack.length === 0){stack.push(s[i]); continue}
        
        last = stack[stack.length-1]
        cur = s[i]
        if (last === cur.toUpperCase() || cur === last.toUpperCase())
        {
            if (last !== cur) {stack.pop(); continue}
        }
        stack.push(cur)
    }
    return stack.join('')
};