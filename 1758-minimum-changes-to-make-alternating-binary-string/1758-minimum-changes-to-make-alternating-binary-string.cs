public class Solution {
    public int MinOperations(string s) {
        int count = 0;
        for (int i = 1; i<s.Length;i++)
        {
            if (s[0]=='0') {
                if(i%2==0&&s[i]!= '0') {count++;}
                if(i%2!=0&&s[i]!='1') {count++;}
            } else {
                if(i%2==0&&s[i]!= '1') {count++;}
                if(i%2!=0&&s[i]!='0') {count++;}
            }
        }
        return Math.Min(count, s.Length-count);
    }
}