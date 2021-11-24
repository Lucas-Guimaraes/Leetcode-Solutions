/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    ss = [...s]
    const arr = ['a','e','i','o','u','A','I','E','O','U'];
    i = 0, j = ss.length-1
    while (i < j)
    {
        console.log(i, j)
        let found1 = arr.includes(ss[i]);
        let found2 = arr.includes(ss[j]);
        if (found1 && found2) {temp=ss[i],ss[i]=ss[j],ss[j]=temp,j--,i++}
        else if (found1 && !found2) {j--;}
        else if (!found1 && found2) {i++;}
        else {j--,i++}
    }
    return ss.join('')
};