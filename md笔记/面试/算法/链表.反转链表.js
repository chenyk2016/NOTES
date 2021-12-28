import { createListNode } from './class/ListNode.js'
// https://leetcode-cn.com/problems/reverse-linked-list/

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
var reverseList1 = function(head) {
  // 理解栈，是存储当前环境的上下文O(n), O(n)
  const newList = null
  if(head === null || head.next === null) {
    return head
  }


  const newHead = reverseList(head.next)
  // 最后一个

  head.next.next = head
  head.next = null

  return newHead
};


var reverseList2 = function(head) {
  // O(n), O(1)
  let current = head
  let pre = null

  while (current) {
    let next = current.next
    current.next = pre
    pre = current
    current = next
  }

  return pre
};

const test1 = createListNode([1,2,3,4])

console.log(reverseList2(test1) ); // [4,3,2,1]