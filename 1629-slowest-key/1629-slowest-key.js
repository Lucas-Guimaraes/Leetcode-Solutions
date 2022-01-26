var slowestKey = function(releaseTimes, keysPressed) {
    max = releaseTimes[0]; maxLet = keysPressed[0]
    for (let i = 1; i < releaseTimes.length; i++)
    {
        if (releaseTimes[i]-releaseTimes[i-1] > max) {max = releaseTimes[i]-releaseTimes[i-1]; maxLet = keysPressed[i]}
        else if (releaseTimes[i]-releaseTimes[i-1] == max) {maxLet = keysPressed[i] > maxLet ? keysPressed[i] : maxLet}
    }
    return maxLet
};