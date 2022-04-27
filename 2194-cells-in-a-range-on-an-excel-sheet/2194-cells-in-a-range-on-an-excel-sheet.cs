public class Solution {
    public IList<string> CellsInRange(string s) {
        var result = new List<string>();
        string alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        int start = Convert.ToInt16(s[1]);
        int end = Convert.ToInt16(s[4]);
        int idxStart = alphabet.IndexOf(s[0]);
        int idxEnd = alphabet.IndexOf(s[3]);
    
        
        for (int i = idxStart; i <= idxEnd; i++)
        {
            for (int j = start; j <= end; j++)
            {
                result.Add($"{(char)alphabet[i]}{(char)j}");
            }
        }
        
        return result;
            
    }
}