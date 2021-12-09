var decodeString = function(s) {
    m = []
    cur = ['']
    cur_m = ''
    
    for (let c = 0; c < s.length; c++) {
        if ("0123456789".includes(s[c])) {cur_m += s[c]}
        else if ("abcdefghijklmnopqrstuvwxyz".includes(s[c])){cur[cur.length-1] += s[c]}
        else if (s[c] === '[') {m.push(Number(cur_m)); cur.push(''); cur_m = ''}
        else {cur[cur.length-2] += cur[cur.length-1].repeat(m[m.length-1])
            cur.pop()
            m.pop()}
    }
    return cur[cur.length-1]
};