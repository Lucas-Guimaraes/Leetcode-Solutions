public class NumArray {
    
    int[] arr;
    
    public NumArray(int[] nums) {
        arr = nums;
    }
    
    public int SumRange(int left, int right) {
        int total = 0; 
        for (int i = left;  i <= right; i++) {total += arr[i];}
        return total;
    }
}