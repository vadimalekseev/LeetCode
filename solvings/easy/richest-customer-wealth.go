func maximumWealth(accounts [][]int) int {
	m := 0
	for _, a := range accounts {
		m = max(sum(a), m)
	}

	return m
}

func sum(s []int) int {
	sum := 0
	for _, item := range s {
		sum += item
	}

	return sum
}

func max(a, b int) int {
	if a > b {
		return a
	}

	return b
}
