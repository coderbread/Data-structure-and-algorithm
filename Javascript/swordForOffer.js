//1. 二维数组的数字查找
function searchIn2Dimen(target, array) {
  // write code here
  let i = 0
  let j = array[0].length - 1
  while (i < array.length && j >= 0) {
    if (target > array[i][j]) {
      i++
    } else if (target < array[i][j]) {
      j--
    } else return true
  }
  return false
}

//2. 替换空格为20%
function replaceSpace(str) {
  return str.replace(/\s/g, '20%')
}

//3. 从尾到头打印链表
class ListNode {
  constructor(val) {
    this.val = val
    this.next = null
  }
}
let node1 = new ListNode(1)
let node2 = new ListNode(2)
let node3 = new ListNode(3)
node1.next = node2
node2.next = node3
function printListFromTailToHead(node) {
  let result = []
  while (node) {
    result.push(node.val)
    node = node.next
  }
  return result.reverse()
}
function printListFromTailToHead_递归(node) {
  if (node.next) {
    printListFromTailToHead_递归(node.next)
  }
  console.log(node.val)
}

//4. 根据前序遍历和中序遍历序列(元素都不同)，重建二叉树
function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}
let preStr = 'ABCDEFG'
let midStr = 'CDBAEGF'
function reConstructBinaryTree(pre, vin) {
  if (pre.length === 0) return
  if (pre.length === 1) return new TreeNode(pre[0])
  let root = new TreeNode(pre[0])
  let idx = vin.indexOf(pre[0])
  root.left = reConstructBinaryTree(pre.slice(1, idx + 1), vin.slice(0, idx))
  root.right = reConstructBinaryTree(pre.slice(idx + 1, pre.length), vin.slice(idx + 1, vin.length))
  return root
}

//5. 用两个栈实现队列
let inStack = []
let outStack = []
function _unshift(item) {
  inStack.push(item)
  return inStack.length
}
function _shift() {
  if (!outStack.length) {
    while (inStack.length) {
      outStack.push(inStack.pop())
    }
  }
  return outStack.pop()
}
_unshift(3)
_unshift(1)
_unshift(2)
_unshift(4)
console.log(_shift())
