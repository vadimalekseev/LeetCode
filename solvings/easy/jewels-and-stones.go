package solvings

func numJewelsInStones(jewels string, stones string) int {
	jwls := map[rune]bool{}

	for _, r := range jewels {
		jwls[r] = true
	}

	cnt := 0
	for _, s := range stones {
		if jwls[s] {
			cnt++
		}
	}

	return cnt
}
