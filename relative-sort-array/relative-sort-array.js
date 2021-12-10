var relativeSortArray = function(arr1, arr2) {
    arr1.sort((a,b) => a-b)
    for (let i = arr2.length-1; i >= 0; i--)
    {
        for (let j = 0; j < arr1.length; j++)
        {
            if (arr1[j] === arr2[i])
            {arr1.unshift(arr1.splice(j, 1))}
        }
    }
    return arr1
};