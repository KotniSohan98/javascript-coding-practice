/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head || !head.next || k === 0) return head;

  // Step 1: Find the length of the list and the tail node
  let length = 1;
  let tail = head;
  while (tail.next) {
    tail = tail.next;
    length++;
  }

  // Step 2: Connect tail to head to make it circular
  tail.next = head;

  // Step 3: Find the new tail: (length - k % length - 1)th node
  // and the new head: (length - k % length)th node
  k = k % length;
  let stepsToNewTail = length - k;
  let newTail = head;
  for (let i = 1; i < stepsToNewTail; i++) {
    newTail = newTail.next;
  }

  let newHead = newTail.next;
  newTail.next = null;

  return newHead;
};
