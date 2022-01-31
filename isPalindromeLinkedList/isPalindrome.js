/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var isPalindrome = function (head) {
  while (head !== null) {
    console.log(head.val);
    head = head.next;
  }
};
var l = new ListNode(1);
l.next = new ListNode(2);
l.next.next = new ListNode(2);
l.next.next.next = new ListNode(1);

console.log(isPalindrome(l));
