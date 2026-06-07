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
     * @return {boolean}
     */
    hasCycle(head: ListNode | null): boolean {
        const weakSet = new WeakSet()

        while (head) {
            if (weakSet.has(head)) return true

            weakSet.add(head)
            head = head.next
        }

        return false
    }
}
