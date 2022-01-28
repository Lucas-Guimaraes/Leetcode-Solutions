public class Solution {
    public int[] CountBits(int n) {
        var result = new int[n + 1];
        result[0] = 0;
        
        for (int i = 0; i < result.Length; i++)
        {
            if (i % 2 == 0) {result[i] = result[i/2];}
            else {result[i] = result[i-1] + 1;}
        }
        
        return result;
    }
}