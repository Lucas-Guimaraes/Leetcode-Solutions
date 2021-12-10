var clumsy = function(n) {
    clum = ''
    for (let i = n; i > 0; i-=4)
    {
        if (i === 3)
        {clum += ` Math.floor(${i} * ${i-1} / ${i-2}) `}
        else if (i === 2)
        {clum += ` ${i} * ${i-1} `}
        else if (i === 1)
        {clum += ` ${i} `}
        else {clum+=` Math.floor(${i} * ${i-1} / ${i-2}) + ${i-3} -`}
    }
    return eval(clum.substring(0, clum.length-1))
};