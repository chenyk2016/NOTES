import { createListNode } from './class/ListNode.js'
// https://leetcode-cn.com/problems/linked-list-cycle/solution/

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
    // 新建一个对象，key已经访问的节点指针,value是索引位置

};


const demo = createListNode([3, 2, 0, -4])

demo.next.next.next.next = demo.next // -4指向2

console.log( hasCycle(demo) );