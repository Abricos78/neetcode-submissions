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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {
        if (!list1) return list2
        if (!list2) return list1

        let list = new ListNode()
        let newListNode = list

        if (list1.val <= list2.val) {
            newListNode.val = list1.val
            list1 = list1.next
        } else {
            newListNode.val = list2.val
            list2 = list2.next
        }

        while (list1 || list2) {
            const node = new ListNode()
            newListNode.next = node
            newListNode = node

            if (!list1) {
                node.val = list2.val
                list2 = list2.next

                continue
            }

            if (!list2) {
                node.val = list1.val
                list1 = list1.next

                continue
            }

            if (list1.val <= list2.val) {
                node.val = list1.val
                list1 = list1.next

                continue
            } else {
                node.val = list2.val
                list2 = list2.next

                continue
            }
        }

        return list
    }
}
