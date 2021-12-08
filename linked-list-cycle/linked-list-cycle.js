/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (!head) {return false}
    ahead = head
    while (head.next && ahead.next && ahead.next.next){
        head = head.next
        ahead = ahead.next.next
        if (head === ahead) {return true}
    }
    
    return false
};