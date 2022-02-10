public class Solution {
    public int SecondHighest(string s) {
        bool hasAppeared = false;
        for (int i = 9; i > -1; i--)
        {
            if (s.IndexOf(i.ToString()) != -1) 
            {if (hasAppeared) {return i;}
            else {hasAppeared = true;}}
        }
        return -1;
    }
}