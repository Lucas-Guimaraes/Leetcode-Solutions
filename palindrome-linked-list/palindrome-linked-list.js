var isPalindrome = function(head) {
    p = []
    current = head
    while (current)
    {p.push(current.val)
    current = current.next}
    console.log(p)
    return JSON.stringify(p) === JSON.stringify(p.reverse())
};