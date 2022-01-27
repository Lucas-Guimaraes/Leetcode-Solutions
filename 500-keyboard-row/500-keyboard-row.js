var findWords = function(words) {
    const row1 = new Set("qwertyuiop");
    const row2 = new Set("asdfghjkl");
    const row3 = new Set("zxcvbnm");
    
    i = 0
    while (i < words.length)
    {
        if (canBeTyped(words[i], row1) || canBeTyped(words[i], row2) || canBeTyped(words[i], row3)) {i++}
        else {words.splice(i, 1)}
    }
    return words
};

function canBeTyped(word, row) {
    for (let i = 0; i < word.length; i++)
    {
        if (!row.has(word[i].toLowerCase())) {return false}
    }
    return true
}