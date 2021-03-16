public class Solution
{
    public int[] RunningSum(int[] nums)
    {
        var sum = nums[0];
        var result = new int[nums.Length];
        result[0] = sum;

        for (int i = 1; i < nums.Length; i++)
        {
            sum += nums[i];
            result[i] = sum;
        }
        return result;
    }
}
