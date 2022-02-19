public class Solution {
    public bool IsPowerOfTwo(int n) {
        if (n <= 0) return false;
        
        int count = 0;
        
        while (n > 0)
        {
            if (n%2 == 1) count++;
            n = n / 2;
        }
        
        return count == 1;
    }
}