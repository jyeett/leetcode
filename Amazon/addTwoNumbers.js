// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single digit.
// Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    let node = new ListNode()
    let curr = node
    let carry = 0
    while (l1 || l2 || carry) {
        let v1 = l1 ? l1.val : 0
        let v2 = l2 ? l2.val : 0
        let val = v1 + v2 + carry
        carry = Math.floor(val / 10)
        val = val % 10
        curr.next = new ListNode(val)
        
        curr = curr.next
        l1 = l1 ? l1.next : null
        l2 = l2 ? l2.next : null
    }
    return node.next
};