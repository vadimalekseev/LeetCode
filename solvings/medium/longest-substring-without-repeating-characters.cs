public class Solution
{
    public int LengthOfLongestSubstring(string s)
    {
        var max = 0;
        var letters = new HashSet<char>();
        for (var i = 0; i < s.Length; i++)
        {
            letters.Clear();
            for (int j = i; j < s.Length; j++)
            {
                var currLetter = s[j];
                if (!letters.Contains(currLetter))
                {
                    letters.Add(currLetter);
                    continue;
                }

                break;
            }
            max = Math.Max(max, letters.Count);
        }

        return max;
    }
}
