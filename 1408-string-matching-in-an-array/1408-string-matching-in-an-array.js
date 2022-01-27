var stringMatching = function(words) {
    uniq = []
    for (let i = 0; i < words.length; i++)
    {
        for (let j = 0; j < words.length; j++)
        {
            if (i === j) {continue}
            if (words[j].includes(words[i])) {uniq.push(words[i]); break}
        }
    }
    return uniq
};