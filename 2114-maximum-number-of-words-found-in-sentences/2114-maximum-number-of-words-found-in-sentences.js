var mostWordsFound = function(sentences) {
   for (let i = max = 0; i < sentences.length; i++)
   {
       sentences[i].split(' ').length > max ? max = sentences[i].split(' ').length : max = max
   }
    return max
};