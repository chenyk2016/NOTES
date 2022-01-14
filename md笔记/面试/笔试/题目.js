/**
 *
 * 完成 extend(SubClass, SupClass) 函数， 实现 SubClass 继承 SupClass
 * @param SubClass {Function} 子类
 * @param SupClass {Function} 父类
 * @return {void}
 */



/*
给定一个二叉树，返回所有从根节点到叶子节点的路径。

说明: 叶子节点是指没有子节点的节点。

示例:

输入:

   1
 /   \
2     3
 \
  5

输出: ["1->2->5", "1->3"]

解释: 所有根节点到叶子节点的路径为: 1->2->5, 1->3
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */



// 第三题
// 通过 TypeScript + React Hooks 实现一个 useFetchData
// 在我们的业务中经常会遇到列表或者表格页面，需要支持翻页，加载更多，错误处理，loading 的功能。希望能够实现一个 Hook 来抽象这部分逻辑。

// /api/getlist?page=1&pageSize=10
/*
{
  data: {
    list: [{
      name: 'name',
      id: 'id',
    }],
    total: 23, // 总数，用于翻页和下载更多
  },
  success: true,
  message: 'xxx', // exist when success is false
}
*/
