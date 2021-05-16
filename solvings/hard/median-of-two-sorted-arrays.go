// 98%

package solvings

func findMedianSortedArrays(nums1 []int, nums2 []int) float64 {
	result := append(nums1, nums2...)
	sort.Ints(result)
	return float64(result[len(result)>>1]+result[(len(result)-1)>>1]) * .5
}
