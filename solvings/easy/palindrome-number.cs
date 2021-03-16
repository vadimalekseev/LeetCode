public class Solution
{
    public bool IsPalindrome(int x)
    {
        var xchars = x.ToString().ToCharArray();
        for (int i = 0; i < (int)(xchars.Length / 2); i++)
            if (xchars[i] != xchars[xchars.Length - i - 1])
                return false;
        return true;
    }
}
