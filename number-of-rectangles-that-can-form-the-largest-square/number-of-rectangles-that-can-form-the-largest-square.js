var countGoodRectangles = function(rectangles) {
    obj = {}
    for (let i = 0; i < rectangles.length; i++)
    {
        r = String(Math.min(rectangles[i][0], rectangles[i][1]))
        if (r in obj) {obj[r] += 1}
        else {obj[r] = 1}
    }
    
    var sorted = [];
    for(var key in obj) {
        sorted[sorted.length] = key;
    }
    sorted.sort();
    return obj[sorted[sorted.length-1]]
};

