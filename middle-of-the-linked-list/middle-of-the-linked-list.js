/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let lst = [head];
    let node = head;
    while (node.next) {
        lst.push(node.next)
        node = node.next;
    }
    return lst[Math.floor(lst.length / 2)];
}