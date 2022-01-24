var minimumAbsDifference = function(arr) {
    arr = arr.sort((a,b) => a-b)
    min = Infinity; final = []
    for (let i = 1; i < arr.length; i++)
    {
        if (Math.abs(arr[i-1] - arr[i]) < min)
        {
            final = []
            final.push([arr[i-1], arr[i]])
            min = Math.abs(arr[i-1] - arr[i])
        }
        else if (Math.abs(arr[i-1] - arr[i]) == min)
        {
            final.push([arr[i-1], arr[i]])
        }
    }
    return final
};