var reverseOnlyLetters = function(s) {
    l = 0; r = s.length-1, list = s.split('')
    while (l < r)
    {
        leftCheck = asciiChecker(s, l)
        rightCheck = asciiChecker(s, r)
        if (!leftCheck) {l++}
        if (!rightCheck) {r--}
        if (leftCheck && rightCheck) {
            var tmp = list[r];
            list[r] = list[l];
            list[l] = tmp; l++; r--}
    }
    return list.join('')
};
    
asciiChecker = (text, num) => (65 <= text.charCodeAt(num) &&  text.charCodeAt(num) <= 90) || (97 <= text.charCodeAt(num) &&  text.charCodeAt(num) <= 122)