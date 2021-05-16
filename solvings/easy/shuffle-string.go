package solvings

func restoreString(s string, indices []int) string {
	result := make([]byte, len(s))

	for idx, num := range indices {
		result[num] = s[idx]
	}

	return string(result)
}
