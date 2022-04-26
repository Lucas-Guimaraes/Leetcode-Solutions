public class Solution {
    public bool DivideArray(int[] nums) {
        int[] map = new int[501];
        
        for(int i = 0; i < nums.Length; i++){
            map[nums[i]]++;
        }
        
        for(int i = 1; i < map.Length; i++){
            if (map[i] % 2 == 1) {return false;}
        }
        return true;
    }
}