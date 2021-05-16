import (
	"fmt"
)

func intersection(nums1 []int, nums2 []int) []int {
	nums := map[int]bool{}

	for _, num := range nums1 {
		nums[num] = true
	}

	nums1 = nums1[:0]
	for _, num := range nums2 {
		if nums[num] {
			nums1 = append(nums1, num)
			nums[num] = false
		}
	}

	return nums1
}
