package solvings

import "strconv"

func isPalindrome(x int) bool {
	strx := strconv.Itoa(x)

	l := len(strx)
	for idx := 0; idx < l/2; idx++ {
		if strx[idx] != strx[l-idx-1] {
			return false
		}
	}
	return true
}
