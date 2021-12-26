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
var reverseKGroup = function(head, k) {
    // 1. 分治
    // 获取K个节点，反转
    // 返回结束后的下一个节点
    // 直到无法获取k个分组

    // 返回 ps //开始节点 pe // 结束节点
    function reverse(start, k) {
        let index = 1
        let p = start
        let pre = null
        while(index <= k) {
            const pNext = p.next
            p.next = pre
            pre = p
            p = pNext
            index++
        }


        // console.log([pre, start])
        return [pre, start]
    }


    let p1 = head
    let pGroupPre = null
    let index = 0
    let newHead = null
    let pre = null
    while(p1) {
        pre = p1
        p1 = p1.next

        index++

        if(index % k === 0) {

            const start = (pGroupPre && pGroupPre.next) || head;
            const [ps, pe] = reverse(start, k)

            if(pGroupPre !== null) {
                // 连接上组
                pGroupPre.next = ps
            } else {
                // 第一个组，更换head
                newHead = ps
            }
            // 连接下组
            pe.next = p1


            // 每一组更换结束，更新下一组的pre起点
            pGroupPre = pe
        }
    }

    return newHead
};