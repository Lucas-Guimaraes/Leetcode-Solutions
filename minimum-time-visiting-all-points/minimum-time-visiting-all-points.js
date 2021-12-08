var minTimeToVisitAllPoints = function(points) {
    seconds = 0; x1 = points[0][0]; y1 = points[0][1]; points.shift()
    while (points.length > 0) {
        x2 = points[0][0]; y2 = points[0][1]
        seconds += Math.max(Math.abs(x2-x1), Math.abs(y2-y1))
        x1 = x2; y1 = y2; points.shift()
    }
    return seconds
};