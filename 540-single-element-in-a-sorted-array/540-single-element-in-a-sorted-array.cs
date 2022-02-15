public class Solution {
    public int SingleNonDuplicate(int[] nums) {
        if (nums.Length == 1) return nums[0];
        
        int i = 0;
        int j = nums.Length-1;
        
        while (i-2 < j) {
            
            if (nums[i] != nums[i+1]) return nums[i+1] != nums[i+2] ? nums[i+1] : nums[i];
            if (nums[j] != nums[j-1]) return nums[j-1] != nums[j-2] ? nums[j-1] : nums[j];
            
            i+=2;
            j-=2;
        }
        return nums[0];
    }
}