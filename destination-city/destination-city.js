var destCity = function(paths) {
    var start = []; var next = []
    for (let i = 0; i < paths.length; i++) {start.push(paths[i][0]); next.push(paths[i][1])}
    for (let i = 0; i < next.length; i++) {if (!start.includes(next[i])) return next[i]}
};