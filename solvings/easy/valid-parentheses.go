package solvings

func isValid(s string) bool {
	open := []rune{'(', '{', '['}
	clos := []rune{')', '}', ']'}

	arr := []rune{}
	for _, r := range s {
		if ok, _ := contains(open, r); ok {
			arr = append(arr, r)
			continue
		}

		if ok, idx := contains(clos, r); ok {
			if len(arr) == 0 || arr[len(arr)-1] != open[idx] {
				return false
			}

			arr = arr[:len(arr)-1]
		}
	}

	return len(arr) == 0
}

func contains(runes []rune, item rune) (bool, int) {
	for idx, r := range runes {
		if r == item {
			return true, idx
		}
	}

	return false, -1
}
