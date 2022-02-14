public class Solution {

    
    public IList<bool> CheckArithmeticSubarrays(int[] nums, int[] l, int[] r) {
        
        var boolList = new List<bool>();
        
        for (int i = 0; i < l.Length; i++)
        {
            
            int[] arr = new int[r[i] - l[i] + 1];
            int k = 0;
            for (int j = l[i]; j <= r[i]; j ++)
            {
                arr[k] = nums[j];
                k ++;
            }
            
            Array.Sort(arr);
            int diff = arr[1]-arr[0] ;
            bool cur = true;
            for (int j = 2; j < arr.Length; j++)
            {
                if (arr[j]-arr[j-1] != diff) {cur = false; break;}
            }
            boolList.Add(cur);
            
        }
        
        return boolList;
    }
}

