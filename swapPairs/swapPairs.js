/**
 * @param {ListNode} head
 * @return {ListNode}
 */
/**
 * 
 * {Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)
Example 1:
Input: head = [1,2,3,4]
Output: [2,1,4,3]} head 
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var swapPairs = function (head) {
  let bool = false;
  var node1 = head;
  var node2 = head.next;
  while (node1 !== null) {
    if (node2.next === null) break;
    if (!bool) {
      var temp = node1.val;
      node1.val = node2.val;
      node2.val = temp;
      bool = !bool;
    }
    node1 = node1.next;
  }
  return head;
};

var print = function (head) {
  var temp = head;
  while (temp !== null) {
    console.log(head.val);
    temp = temp.next;
  }
};
var l = new ListNode(1);
// l.next = new ListNode(2);
// l.next.next = new ListNode(3);
// l.next.next.next = new ListNode(4);
l = swapPairs(l);
print(l);
