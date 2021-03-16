public class Solution
{
    public int Reverse(int x)
    {
        var isNegative = x < 0;
        var signAgnosticValue = isNegative ? -x : x;
        var reversedXString = string.Join("", signAgnosticValue.ToString().Reverse());
        int reversedValue;
        var success = int.TryParse(reversedXString, out reversedValue);
        if (success) return isNegative ? -reversedValue : reversedValue;
        return 0;
    }
}
