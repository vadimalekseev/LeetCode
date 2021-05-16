package solvings

func smallerNumbersThanCurrent(nums []int) []int {
	cnt := make([]int, len(nums))
	for i, n1 := range nums {
		for j, n2 := range nums {
			if i == j {
				continue
			}

			if n1 == n2 && cnt[j] > 0 {
				cnt[i] = max(cnt[i], cnt[j])
				break
			}

			if n1 > n2 {
				cnt[i]++
			}
		}
	}

	return cnt
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
