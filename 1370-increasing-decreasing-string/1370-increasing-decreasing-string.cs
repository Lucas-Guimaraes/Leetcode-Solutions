public class Solution {
    public string SortString(string s) {
	int[] freq = new int[26];

	foreach (char a in s)
	{
		freq[a - 'a']++;
	}

	StringBuilder sb = new StringBuilder();

	int count = s.Length;

	while (count > 0)
	{
		// smallest
		for (int i = 0; i < 26; i++)
		{
			if (freq[i] > 0)
			{
				sb.Append((char)(i + 'a'));
				freq[i]--;
				count--;
			}
		}

		// largest
		for (int i = 25; i >= 0; i--)
		{
			if (freq[i] > 0)
			{
				sb.Append((char)(i + 'a'));
				freq[i]--;
				count--;
			}
		}
	}

	return sb.ToString();
    }
}