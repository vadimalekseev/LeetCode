
package solvings

type ListNode struct {
	Val  int
	Next *ListNode
}

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
	l1Curr := l1
	l2Curr := l2
	carryover := 0

	addRes, remainder := addNodes(l1Curr, l2Curr, carryover)
	carryover = remainder
	l1Curr = l1Curr.Next
	l2Curr = l2Curr.Next

	result := addRes
	resultLastNode := result
	for l1Curr != nil || l2Curr != nil {

		addRes, remainder = addNodes(l1Curr, l2Curr, carryover)
		carryover = remainder

		resultLastNode.Next = addRes
		resultLastNode = resultLastNode.Next

		if l1Curr != nil {
			l1Curr = l1Curr.Next
		}
		if l2Curr != nil {
			l2Curr = l2Curr.Next
		}
	}

	if carryover != 0 {
		transfNode := new(ListNode)
		transfNode.Val = carryover
		resultLastNode.Next = transfNode
	}

	return result
}

func bitwisAddition(a, b int) (sum, carryover int) {
	total := a + b

	if total >= 10 {
		sum = total - 10
		carryover = 1
	} else {
		sum = total
		carryover = 0
	}

	return
}

func addNodes(a, b *ListNode, carryover int) (res *ListNode, remainder int) {
	aVal := 0
	if a != nil {
		aVal = a.Val
	}
	bVal := 0
	if b != nil {
		bVal = b.Val
	}

	s, remainder := bitwisAddition(aVal+carryover, bVal)

	res = new(ListNode)
	res.Val = s

	return
}
