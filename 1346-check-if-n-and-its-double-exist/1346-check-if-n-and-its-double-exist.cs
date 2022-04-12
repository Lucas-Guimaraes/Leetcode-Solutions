public class Solution {
    public bool CheckIfExist(int[] arr) {
        for (int i = 0; i < arr.Length; i++) 
        {
          for (int j = 1; j < arr.Length; j++)
          {
              if (i == j) {break;}
              if (arr[i] * 2 == arr[j] || arr[j] * 2 == arr[i]) {return true;}
          }
        }
        return false;
    }
}