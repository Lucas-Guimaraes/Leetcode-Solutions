public class Solution {
    public int TitleToNumber(string columnTitle) {
        int res = 0;
        
        for (int i = 0; i < columnTitle.Length; i++){
            res += ((int) Math.Pow(26, columnTitle.Length - i - 1)) * (columnTitle[i] - '@');
        }
        return res;
    }
}