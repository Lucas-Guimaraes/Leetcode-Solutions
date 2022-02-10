public class Solution {
    public int MaxCount(int m, int n, int[][] ops) {
        int mMin = m;
        int nMin = n;
        
        foreach (var op in ops)
        {
            int a = op[0];
            int b = op[1];
            
            mMin = Math.Min(a, mMin);
            nMin = Math.Min(b, nMin);
        }
        
        return mMin * nMin;
    }
}