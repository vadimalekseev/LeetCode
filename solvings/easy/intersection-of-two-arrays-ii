package solvings

func intersect(nums1 []int, nums2 []int) []int {
	nums := map[int]int{}

	for _, num := range nums1 {
		nums[num]++
	}

	nums1 = nums1[:0]
	for _, num := range nums2 {
		if nums[num] == 0 {
			continue
		}

		nums[num]--
		nums1 = append(nums1, num)
	}

	return nums1
}
