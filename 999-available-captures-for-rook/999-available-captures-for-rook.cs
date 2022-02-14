public class Solution {
    public int NumRookCaptures(char[][] board) {
        
        int count = 0;
        
        for (int r = 0; r < board.Length; r++)
        {
            for (int c = 0; c < board.Length; c++)
            {
                if (board[r][c] == 'R')
                {
                    //Move Left
                    int tempC = c-1;
                    while (tempC >= 0)
                    {
                        if (board[r][tempC] == 'p') {count++; break;}
                        if (board[r][tempC] == 'B') {break;}
                        tempC--;
                    }
                    
                    //Move Right
                    tempC = c+1;
                    while (tempC <= 7)
                    {
                        if (board[r][tempC] == 'p') {count++; break;}
                        if (board[r][tempC] == 'B') {break;}
                        tempC++;
                    }
                    
                    //Move Up
                    int tempR = r-1;
                    while (tempR >= 0)
                    {
                        if (board[tempR][c] == 'p') {count++; break;}
                        if (board[tempR][c] == 'B') {break;}
                        tempR--;
                    }
                    
                    //Move Down
                    tempR = r+1;
                    while (tempR <= 7)
                    {
                        if (board[tempR][c] == 'p') {count++; break;}
                        if (board[tempR][c] == 'B') {break;}
                        tempR++;
                    }                
                    return count;
                }        
            }
        }
        return count;
    }
}