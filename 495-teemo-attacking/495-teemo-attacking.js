var findPoisonedDuration = function(timeSeries, duration) {
    count=0
    
    for (let i = 0; i < timeSeries.length; i++)
    {
        if (timeSeries[i+1] && timeSeries[i+1]-timeSeries[i] < duration)
            {count += timeSeries[i+1]-timeSeries[i]}
        else {count += duration}
    }
    
    return count
};