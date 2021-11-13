/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function(words) {
    cluster = words.join('')
    uniq = findUnique(cluster)
    
    for (let i = 0; i < uniq.length; i++)
    {
        n = countInstances(cluster, uniq[i])
        
        if (n % words.length != 0 || n < words.length)
        {return false}
    }
    
    return true
};

function findUnique(str){
  let uniq = "";
  for(let i = 0; i < str.length; i++){
    if(uniq.includes(str[i]) === false){
      uniq += str[i]
    }
  }
  return uniq;
}

function countInstances(string, word) {
   return string.split(word).length - 1;
}