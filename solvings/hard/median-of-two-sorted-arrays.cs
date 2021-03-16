public class Solution
{
    public double FindMedianSortedArrays(int[] nums1, int[] nums2)
    {
        var mergedArrays = MergeSortedArrays(nums1, nums2);

        return ComputeMedian(mergedArrays);
    }

    int[] MergeSortedArrays(int[] arr1, int[] arr2)
    {
        var arraysLength = arr1.Length + arr2.Length;
        var result = new int[arraysLength];

        arr1.CopyTo(result, 0);
        arr2.CopyTo(result,arr1.Length);

        Array.Sort(result);
        return result;
    }

    double ComputeMedian(int[] arr)
    {
        if (arr.Length % 2 == 1)
            return arr[arr.Length / 2];
        return 0.5 * (arr[arr.Length / 2 - 1] + arr[arr.Length / 2]);
    }
}
