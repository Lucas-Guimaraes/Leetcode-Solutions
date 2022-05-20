public class Solution {
    public int PrefixCount(string[] words, string pref) {
        int count = 0;
        Console.WriteLine(words.Length);
        for (int i = 0; i < words.Length; i++)
        {
            if (words[i].Length < pref.Length) continue;
            if (words[i].Substring(0, pref.Length) == pref) count++;
        }
        return count;
    }
}