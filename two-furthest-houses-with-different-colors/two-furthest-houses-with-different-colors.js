var maxDistance = function(colors) {
    leftDiff = true; rightDiff = true
    i = colors.length-1; j = 0; l = 0; r = 0
    while (leftDiff || rightDiff) {
        if (colors[0] !== colors[i] && leftDiff) {leftDiff = false; l = i}; i--;
        if (colors[j] !== colors[colors.length-1] && rightDiff) {rightDiff = false; r = colors.length-1-j}; j++;
    }
    return Math.max(l, r)
};