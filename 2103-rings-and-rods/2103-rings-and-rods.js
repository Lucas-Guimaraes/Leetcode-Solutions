var countPoints = function(rings) {
    points = 0
    for (let i = 0; i < 10; i++)
    {
        x = String(i)
        if (rings.includes('R'+x) && rings.includes('G'+x) && rings.includes('B'+x)) {points++}
    }
    return points
};