package solvings

func numberOfSteps(num int) int {
	steps := 0

	for num != 0 {
		if isEven(num) {
			steps++
			num /= 2
		} else {
			steps++
			num--
		}
	}

	return steps
}

func isEven(num int) bool {
	return num%2 == 0
}
