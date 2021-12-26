import { createListNode } from './class/ListNode.js'
// https://leetcode-cn.com/problems/merge-k-sorted-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */


/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {

  // 搜索，
  // 链表插入
  // 下一个节点从上一个的插入的节点位置开始继续搜索。
  //
  // O(n^2)
  function insertNodeList(head1, head2) {

  }

  let newList = lists[0] || null
  for (let i = 1; i < lists.length - 1; i++) {
    newList = insertNodeList(newList, lists[i])
  }
  return newList



  // end
};

const demo = [createListNode([1,4,5]), createListNode([1,3,4]), createListNode([2, 6])]
console.log(  mergeKLists(demo)  );