public class Solution {
    public int TotalMoney(int n) {
        int result = 0;
        int currentMoney = 1;
        int mondayMoney = 1;
        
        for (int currentDay = 0; currentDay < n; currentDay++)
        {
            if (currentDay % 7 == 0)
            {
                currentMoney = mondayMoney;
                mondayMoney++;
            }
            result += currentMoney++;
            
        }
        return result;
    }
}