public class Solution {
    public void SortColors(int[] nums) {
        int zero = 0;
        int one = 0;
        int two = 0;
        
        for (int i = 0; i < nums.Length; i++)
        {
            if (nums[i] == 0) zero++;
            if (nums[i] == 1) one++;
            if (nums[i] == 2) two++;
        }
        
        for (int i = 0; i < zero; i++) {nums[i] = 0;}
        for (int i = zero; i < zero+one; i++) {nums[i] = 1;}
        for (int i = zero+one; i < nums.Length; i++) {nums[i] = 2;}
    }
}