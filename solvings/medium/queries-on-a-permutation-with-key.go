// 100%

package solvings

func processQueries(queries []int, m int) []int {
	P := sequence(m)
	result := make([]int, 0, m)

	for idx, curr := 0, 0; idx < len(queries); idx++ {
		curr = queries[idx]
		seqIdx := findIdx(P, curr)

		result = append(result, seqIdx)

		moveBack(P, seqIdx)
	}

	return result
}

func sequence(cnt int) []int {
	result := make([]int, cnt)

	for i := 0; i < cnt; i++ {
		result[i] = i + 1
	}

	return result
}

func moveBack(seq []int, targetIdx int) {
	if len(seq) < targetIdx {
		return
	}

	tmp := seq[targetIdx]

	for idx := targetIdx - 1; idx >= 0; idx-- {
		seq[idx+1] = seq[idx]
	}

	seq[0] = tmp
}

func findIdx(arr []int, item int) int {
	for idx, curr := range arr {
		if curr == item {
			return idx
		}
	}

	return -1
}
