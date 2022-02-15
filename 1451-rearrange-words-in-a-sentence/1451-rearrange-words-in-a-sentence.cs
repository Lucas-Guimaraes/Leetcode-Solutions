public class Solution {
    public string ArrangeWords(string text) {
        string[] words = text.Split(" ");
        
        string[] sorted = words
                .OrderBy(x => x.Length)
                .ToArray();

        string sentence = String.Join(" ", sorted);
        string res = sentence.Substring(0, 1).ToUpper() + sentence.Substring(1).ToLower();
        
        return res;
    }
}