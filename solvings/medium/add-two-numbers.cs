/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
public class Solution
{
    public ListNode AddTwoNumbers(ListNode l1, ListNode l2)
    {
        var l1Items = GetListNodeValues(l1);
        var l2Items = GetListNodeValues(l2);

        var maxItemsLength = Math.Max(l1Items.Length, l2Items.Length);
        var n1Values = ExtendCollection(l1Items, maxItemsLength);
        var n2values = ExtendCollection(l2Items, maxItemsLength);

        var result = new List<int>();
        var remainder = 0;
        for (var i = 0; i < n1Values.Length; i++)
        {
            var (val, rem) = Add(n1Values[i] + remainder, n2values[i]);
            remainder = rem;
            result.Add(val);
        }
        if (remainder != 0)
            result.Add(remainder);

        var resultListNode = new ListNode(result[0]);
        if (result.Count > 1)
        {

            var curr = new ListNode(result[1]);
            resultListNode.next = curr;

            for (var i = 2; i < result.Count; i++)
            {
                curr.next = new ListNode(result[i]);
                curr = curr.next;
            }
        }

        return resultListNode;
    }

    int[] GetListNodeValues(ListNode l1)
    {
        var values = new List<int>();

        var currentListNodePtr = l1;
        while (true)
        {
            values.Add(currentListNodePtr.val);

            if (currentListNodePtr.next == null)
                break;

            currentListNodePtr = currentListNodePtr.next;
        }

        return values.ToArray();
    }

    (int val, int remainder) Add(int a, int b)
    {
        var sum = a + b;

        var remainder = sum / 10;
        var val = sum % 10;

        return (val, remainder);
    }

    int[] ExtendCollection(int[] values, int length)
    {
        var res = new int[length];
        values.CopyTo(res, 0);
        return res;
    }
}
