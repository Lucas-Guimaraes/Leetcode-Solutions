public class Solution {
    public int MaxScore(string s) {
        int maxl = 0;
        int maxr = 0;
        for (int i = 1; i < s.Length; i++)
        {
            int templ = s.Substring(0, i).Count(f => f == '0');
            int tempr = s.Substring(i).Count(f => f == '1');
            if (templ+tempr > maxl+maxr)
            {
                maxl = templ; 
                maxr = tempr;
            }
        }
        return maxl + maxr;
    }
}