// 90%

package solvings

const ubyteLen = 128

func lengthOfLongestSubstring(s string) int {
	var has [ubyteLen]bool

	max := 0
	for winOffset, idx := 0, 0; idx < len(s); idx++ {

		for has[s[idx]] {
			has[s[winOffset]] = false
			winOffset++
		}

		has[s[idx]] = true

		if sum := idx-winOffset+1; sum > max {
			max = sum
		}
	}

	return max
}
