public class Solution {
    public int FindClosestNumber(int[] nums) {
        Array.Sort(nums);
        int cur = nums[0];
        for (int i = 1; i < nums.Length; i++)
        {
            if (Math.Abs(nums[i]) < Math.Abs(cur)) {cur = nums[i];}
            else if (Math.Abs(nums[i]) == Math.Abs(cur)) {cur = nums[i];}
        }
        return cur;
    }
}