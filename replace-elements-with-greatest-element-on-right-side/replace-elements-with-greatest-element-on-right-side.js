var replaceElements = function(arr) {
    final = [-1]
    if (arr.length === 1) {return final}
    for (let i = arr.length-2; i >= 0; i--)
    {
        final.unshift(Math.max(arr[i+1],...final))
    }
    return final
};