public class Solution {
    public int[] ConstructRectangle(int area) {
        int square = (int)Math.Sqrt(area);
        for (int i = square; i > 0; i--)
        {
            if (area % i == 0) {return new int[] { area / i, i };}
        }
        return new int[] { area, 1 };
    }
}