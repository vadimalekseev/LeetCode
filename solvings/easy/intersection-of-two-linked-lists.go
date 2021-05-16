package solvings

type ListNode struct {
	Val  int
	Next *ListNode
}

func getIntersectionNode(headA, headB *ListNode) *ListNode {
	nums := map[*ListNode]int{}

	for headA != nil {
		nums[headA]++

		headA = headA.Next
	}

	for headB != nil {
		if nums[headB] > 0 {
			return headB
		}

		headB = headB.Next
	}

	return nil
}
