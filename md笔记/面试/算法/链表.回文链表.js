import { createListNode } from './class/ListNode.js'

// https://leetcode-cn.com/problems/palindrome-linked-list/submissions/

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
// var func1 = function(head) {
//     // 1. 创建一个数组，把节点放进去，然后判断数组
//     // 循环节点判断 arr[i] === arr[arr.length - 1 - i]
//     // 循环生效条件 i < arr.length / 2

//   let arr = [];
//   let current = head

//   if(head === null) {
//     return false
//   }
//   while (current !== null) {
//     arr.push(current.val)
//     current = current.next
//   }

//   for(let i = 0;  i < arr.length / 2;  i++) {
//       if(arr[i] !== arr[arr.length -1 -i]) {
//           return false
//       }
//   }

//   return true
// };

// var func2 = function(head) {
//   // 2. 递归访问链表
//   // 递归访问到最后一个节点，
//   // 用一个外部指针 正向移动
//   // 思路实现要点：
//   // 递归利用的是栈的思路，会一层层入栈到最后一个节点，然后一层层返回上层处理
//   // 先写访问节点的函数，然后在递归结束条件中写实现条件。
//   // 在递归函数的上面写边界条件的判断

//   // 时间复杂度O(n) n次处理节点
//   // 空间复杂度O(n) n层栈


//   let preNode = head
//   return checkNode(head)

//   function checkNode(node) {
//     if(node === null) {
//       return false
//     }

//     let preOk = true;

//     // 递归
//     if (node.next) {
//       preOk = checkNode(node.next)
//     }
//     if (preOk) {
//       const flag = preNode && (node.val === preNode.val)

//       if(flag) {
//         preNode = preNode.next
//       } else {
//         preNode = null
//       };

//       return flag
//     }

//     return false
//   }
// };






var func3 = function(head) {
  /**
   *
   *
   *
   */

  if(head === null) {
    return true
  }

  const endOfFirstHalf = (head) => {
      let fast = head;
      let slow = head;
      while (fast.next !== null && fast.next.next !== null) {
          fast = fast.next.next;
          slow = slow.next;
      }
      return slow;

  }

  function reverseList (node) {
    let pre = null
    let current = node

    while (current) {
      const next = current.next
      current.next = pre
      pre = current
      current = next
    }
    return pre
  }

  const firstHalfEnd = endOfFirstHalf(head)
  const secondHalfStart = reverseList(firstHalfEnd.next)

  let p1 = head, p2 = secondHalfStart
  let result = true
  while (result && p2 !== null) {
    if(p1.val !== p2.val) {
      result = false
    }
    p1 = p1.next
    p2 = p2.next
  }

  return result
};

// 测试用例
const isPalindrome = func3
 isPalindrome( createListNode([1]) )
