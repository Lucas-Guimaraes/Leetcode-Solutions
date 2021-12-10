var heightChecker = function(heights) {
    sortedHeights = [...heights]
    sortedHeights = sortedHeights.sort((a,b)=>a-b); total = 0
    console.log(heights, sortedHeights)
    for (let i = 0; i < heights.length; i++){if (heights[i] != sortedHeights[i]) {total++}}
    return total
};