import { createListNode } from './class/ListNode.js'


const endOfFirstHalf = (head) => {
  console.log("输入", head);
    let fast = head;
    let slow = head;
    while (fast.next !== null && fast.next.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
    }
   console.log("输出", slow);
    return slow;

}

endOfFirstHalf( createListNode([1]) )
endOfFirstHalf( createListNode([1, 2]) )
endOfFirstHalf( createListNode([1, 2, 3]) )
