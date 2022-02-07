public class Solution {
    public string ReformatNumber(string number) {
        string r = number.Replace(" ", "").Replace("-", "");
        StringBuilder n = new StringBuilder(r);
        StringBuilder phone = new StringBuilder();
        
       
        while (n.Length > 0)
        {
            if (n.Length > 4)
            {
                phone.Append(n.ToString(0, 3) + "-");
                n.Remove(0, 3);
            }
            
            else if (n.Length == 4)
            {
                phone.Append(n.ToString(0, 2) + "-" + n.ToString(2, 2));
                n.Clear();
            }
            
            else
            {
                phone.Append(n);
                n.Clear();
            }
            
        }
        
        return phone.ToString();
    }
}