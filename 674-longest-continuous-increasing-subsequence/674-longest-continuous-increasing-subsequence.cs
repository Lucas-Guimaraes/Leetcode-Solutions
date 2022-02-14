public class Solution {
    public int FindLengthOfLCIS(int[] nums) {
        int max = 1; int cur = 1;
        for (int i = 1; i < nums.Length; i++)
        {
            if (nums[i] > nums[i-1]) {cur++;}
            else {max = cur > max ? cur : max; cur = 1;} 
        }
        return cur > max ? cur : max;
    }
}