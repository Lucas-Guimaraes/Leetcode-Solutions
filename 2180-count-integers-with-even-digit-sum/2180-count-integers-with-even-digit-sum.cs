public class Solution {
    public int CountEven(int num) {
        int total = 0;
        
        for (int i = 1; i <= num; i++)
        {
            if (CheckEven(i)) total++;
        }
        
        return total;
    }
    
    public bool CheckEven(int n) {
        string s = n.ToString();
        int t = 0;
        
        for (int i = 0; i < s.Length; i++)
        {
            t += s[i];
        }
        
        return t % 2 == 0;
    }
}