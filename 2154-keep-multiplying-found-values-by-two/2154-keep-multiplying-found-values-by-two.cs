public class Solution {
    public int FindFinalValue(int[] nums, int original) {
        while (Array.IndexOf(nums, original) > -1)
        {
            original = original * 2;
        }
        return original;
    }
}