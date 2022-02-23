public class Solution {
    public int FindKthPositive(int[] arr, int k) {
        int found = 0;
        int x = 1;
        while (found < k)
        {
            if (Array.IndexOf(arr, x) == -1) {found++;}
            if (found < k) {x++;}
        }
        
        return x;
    }
}