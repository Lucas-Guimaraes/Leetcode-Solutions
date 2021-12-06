var buildArray = function(target, n) {
    final = []
    for (let i = 1; i < target[target.length-1]+1; i++)
    {
        final.push("Push")
        if (!target.includes(i)) {final.push("Pop")}
    }
    return final
};