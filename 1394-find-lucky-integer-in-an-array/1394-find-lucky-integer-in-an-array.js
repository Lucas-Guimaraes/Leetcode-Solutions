var findLucky = function(arr) {
    uniq = Array.from(new Set(arr))
    uniq.sort((a,b) => b-a)
    for (let i = 0; i < uniq.length; i++)
    {
        if (getOccurrence(arr, uniq[i]) === uniq[i]) {return uniq[i]}
    }
    return - 1
};

function getOccurrence(array, value) {
    return array.filter((v) => (v === value)).length;
}