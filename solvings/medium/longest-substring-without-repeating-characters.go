// 4%😁

func lengthOfLongestSubstring(s string) int {
	if s == "" {
		return 0
	}

	max := 1
	set := make(map[byte]bool)

	seqItemsLen := 0
	seqStartIdx := -1
	for idx := 0; idx < len(s); idx++ {
		if set[s[idx]] {
			if max < seqItemsLen {
				max = seqItemsLen
			}
			seqItemsLen = 0
			set = make(map[byte]bool)

			idx = seqStartIdx
			seqStartIdx = -1
			continue
		}
		if seqStartIdx == -1 {
			seqStartIdx = idx
		}

		seqItemsLen++
		set[s[idx]] = true
	}
	if max < seqItemsLen {
		max = seqItemsLen
	}

	return max
}
