package solvings

func runningSum(nums []int) []int {
	result := make([]int, len(nums))
	sum := 0
	for idx := 0; idx < len(nums); idx++ {
		sum += nums[idx]
		result[idx] = sum
	}

	return result
}
