var selfDividingNumbers = function(left, right) {
    arr = []
    for (let i = left; i < right+1; i++)
    {
        if (i % 10 === 0) {continue}
        test = String(i).split(''); add = true
        for (let j = 0; j < test.length; j++)
        {if (i % Number(test[j]) !== 0) {add = false; break}}
        if (add) {arr.push(i)}
    }
    return arr
};