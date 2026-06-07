/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
        if (!head) return null

        let newList = new ListNode(head.val, null)
        head = head.next
       while (head) {
            const node = new ListNode(head.val, newList)
            head = head.next
            newList = node
       }

       return newList
    }
}
