public class Solution {
    public int[] SortByBits(int[] arr) {
        Array.Sort(arr, (a, b) => {
            var abits = GetOneBits(a);
            var bbits = GetOneBits(b);
            
            if (abits == bbits)
            {
                return a.CompareTo(b);
            } else {
                return abits.CompareTo(bbits);
            }
        });
        return arr;
    }
    
    public int GetOneBits(int num) {
        int ans = 0;
        while (num > 0) {
            if ((num&1) != 0) {
                ans++;
            }
            num >>= 1;
        }
        return ans;
    }
}