public class Solution {
    public int[] GetNoZeroIntegers(int n) {
        for (int a = 1; a < n; a++)
        {
            int b = n-a;
            string s = b.ToString();
            string t = a.ToString();
            if (CheckZero(s) && CheckZero(t)) {int[] res = {a, b}; return res;}
        }
        int[] u = {n, n}; return u;
    }
    
    public bool CheckZero(string str)
    {
        for (int i = 0; i < str.Length; i++)
        {
            if (str[i] == '0') return false;
        }
        return true;
    }
}