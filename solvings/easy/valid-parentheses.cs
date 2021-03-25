public class Solution
{
    public bool IsValid(string value)
    {
        if (string.IsNullOrEmpty(value)) return true;

        var stack = new Stack<char>();

        var openBackets = new[] { '(', '{', '[' };
        var closeBackets = new[] { ')', '}', ']' };
        foreach (var currentLetter in value)
        {
            if (openBackets.Contains(currentLetter))
            {
                stack.Push(currentLetter);
                continue;
            }

            if (stack.Count == 0) return false;

            var openBacketIdx = GetIdxOf(closeBackets, currentLetter);
            var lastBacket = stack.Peek();

            if (lastBacket != openBackets[openBacketIdx]) return false;

            stack.Pop();
        }

        return stack.Count == 0;
    }

    int GetIdxOf(char[] items, char item)
    {
        for (var i = 0; i < items.Length; i++)
            if (items[i] == item) return i;

        return -1;
    }
}
