public class Solution {
    public int LongestPalindrome(string s) {
        string uniq = new String(s.Distinct().ToArray());
        int total = 0;
        
        for (int i = 0; i < uniq.Length; i++)
        {
            int temp = s.Count(c => c == uniq[i]);
            total += temp % 2 == 0 ? temp : temp-1;
        }
        return total == s.Length ? total : total+1;
    }
}

