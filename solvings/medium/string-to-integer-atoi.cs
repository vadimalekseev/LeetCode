public class Solution
{
    public int MyAtoi(string s)
    {
        s = s.TrimStart();
        if (s.Length == 0) return 0;
        var numChars = new[] { '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' };

        var isNegative = s[0] == '-';
        var isPositive = s[0] == '+';
        var nums = new List<char>(s.Length);
        for (var i = isNegative || isPositive ? 1 : 0; i < s.Length; i++)
        {
            if (numChars.Contains(s[i]))
                nums.Add(s[i]);
            else break;
        }

        if (nums.Count == 0) return 0;

        int result;
        var success = int.TryParse(string.Join("", nums), out result);
        if (success) return isNegative ? -result : result;

        return isNegative ? int.MinValue : int.MaxValue;
    }
}
