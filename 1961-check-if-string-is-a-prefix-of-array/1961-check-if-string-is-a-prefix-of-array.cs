public class Solution {
    public bool IsPrefixString(string s, string[] words) {
        
        StringBuilder sb = new StringBuilder("", 50);
        for (int i = 0; i < words.Length; i++)
        {
            sb.Append(words[i]);
            Console.WriteLine(sb);
            if (sb.Length > s.Length) {break;}
            if (sb.ToString() == s) {return true;}
        }
        
        return false;
    }
}