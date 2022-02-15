public class Solution {
    public int[] FindEvenNumbers(int[] digits) {
        
        List<int> numbers = new List<int>();    
        List<int> occur = new List<int>();
        
        occur.Add(digits.Count(s => s == 0));
        occur.Add(digits.Count(s => s == 1));
        occur.Add(digits.Count(s => s == 2));
        occur.Add(digits.Count(s => s == 3));
        occur.Add(digits.Count(s => s == 4));
        occur.Add(digits.Count(s => s == 5));
        occur.Add(digits.Count(s => s == 6));
        occur.Add(digits.Count(s => s == 7));
        occur.Add(digits.Count(s => s == 8));
        occur.Add(digits.Count(s => s == 9));
        
        for (int i = 1; i < 10; i++)
        {
            if (Array.IndexOf(digits, i) == -1) continue;
            for (int j = 0; j < 10; j++)
            {
                if (Array.IndexOf(digits, j)  == -1) continue;
                if (i == j && occur[j] < 2) continue;
                
                for (int k = 0; k < 10; k++)
                {
                    if (Array.IndexOf(digits, k)  == -1) continue;
                    if (k == j && k == i && occur[k] < 3) continue;
                    if (k == i && occur[k] < 2) continue;
                    if (k == j && occur[k] < 2) continue;
                    
                    int temp = Int32.Parse(i.ToString() + j.ToString() + k.ToString());
                    if (temp % 2 == 0) numbers.Add(temp);
                }
            }
        }
        
        int[] evens = numbers.ToArray();
        
        return evens;
    }
}