var busyStudent = function(startTime, endTime, queryTime) {
    total = 0
    for (let i = 0; i < startTime.length; i++)
    {
        if (startTime[i] <= queryTime && queryTime <= endTime[i])
        {
            total++
        }
    }
    return total
};