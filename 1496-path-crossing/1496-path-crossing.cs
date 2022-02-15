public class Solution {
    public bool IsPathCrossing(string path) {
        int x = 0; int y = 0;
        List<string> paths = new List<string>();    
        paths.Add("0 0");
        for (int i = 0; i < path.Length; i++)
        {
            if (path[i] == 'N') x++;
            else if (path[i] == 'S') x--;
            else if (path[i] == 'E') y++;
            else if (path[i] == 'W') y--;
            
            string temp = x.ToString() + " " + y.ToString();
            
            Console.WriteLine(temp);
            
            if (paths.IndexOf(temp) > -1) {return true;}
            else {paths.Add(temp);}
        }
        return false;
    }
}