
//大O表示法(粗略估计程序的执行效率，基于数据越来越大)
// 常数级 O(1)：赋值，return， 判断语句等等
// 对数级 0(log(2)N)： 二分查找
// 线性级 O(N)： for循环
// 次方级 O(N^2)： for多重循环
// 指数级 O(2^N)




//斐波那契数列问题、一步两步走台阶、一页两页翻书
//f(N) = f(N - 1) + f(N - 2)
function fibonacci(n) {
  if (n === 1 || n === 2) return n
  return fibonacci(n - 1) + fibonacci(n - 2)
}

//优化一： 不递归，创建一个缓存数组，时间复杂度：O(N)
function fibonacciOpt1(n) {
  //创建有n+1个元素的缓存数组（n+1是因为arr[n]是第n+1个元素）
  let arr = new Array(n + 1).fill(0)
  arr[1] = 1
  arr[2] = 2
  for (let i = 3; i < n + 1; i++) {
    arr[i] = arr[i - 1] + arr[i - 2]
  }
  return arr[n]
}

//优化二： 依然递归(依然是缓存的思想),时间复杂度：O(N)
let cache = {}
function fibonacciOpt2(n) {
  //如果缓存中没有第n项的值，那就调用_fib递归函数
  if (!cache.hasOwnProperty(n)) {
    //计算结果放进缓存
    cache[n] = _fib(n)
  }
  function _fib(n) {
    if (n === 1 || n === 2) return n
    //在计算fibonacciOpt2(n - 1)的时候，
    //依次把_fib(1)、_fib(2)、_fib(3）..._fib(n-1)的计算结果以cache[key] = value的形式放进了缓存中
    return fibonacciOpt2(n - 1) + fibonacciOpt2(n - 2)
  }
  return cache[n]
}





//二分查找 时间复杂度：O(log(2)N)
//查找一个数，是否在顺序排列的数组中 [1,2,3,4][1,2,3,4,5]
function binarySearch(array, t) {
  let left = 0;
  let right = array.length - 1

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (array[mid] === t) {
      return true
    } else if (array[mid] < t) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return false
}

//递归版本
function recuisiveBinarySearch(arr, t, left, right) {

  //当二分最后的，结束递归
  if (left < right) {
    let mid = Math.floor((left + right) / 2)
    console.log([left, arr[left]], [mid, arr[mid]], [right, arr[right]])
    if (arr[mid] === t) {
      return mid
    } else if (arr[mid] < t) {
      //如果查找到了，return返回值，结束递归
      return recuisiveBinarySearch(arr, t, mid + 1, right)
    } else {
      return recuisiveBinarySearch(arr, t, left, mid - 1)
    }
  }

  return -1
}

//链表  信息域 + 指针域
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

//遍历链表
function traverseListNode(node1) {
  let tmp = node1
  while (tmp) {
    console.log(tmp.val)
    tmp = tmp.next
  }
}

//递归版本
function traverseListNode_recursion(head) {
  if (head) {
    console.log(head.val)
    traverseListNode_recursion(head.next)
  }
}

//经典链表题， 翻转单向链表
function reverseLinkedList(head) {
  let dummy = head
  let tmp = dummy
  while (head !== null && head.next !== null) {
    dummy = head.next
    head.next = dummy.next
    dummy.next = tmp
    tmp = dummy
  }
  return dummy
}


//快速排序
function quickSort(arr) {
  if (arr.length <= 1) return arr
  let mid = parseInt((arr.length - 1) / 2)
  let midItem = arr.splice(mid, 1)[0] //二分思想，找到中间位置的值
  let leftArr = [], rightArr = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < midItem) {
      leftArr.push(arr[i])
    } else {
      rightArr.push(arr[i])
    }
  }
  return quickSort(leftArr).concat(midItem, quickSort(rightArr))
}

//冒泡排序
function bubbleSort(arr) {
  let len = arr.length
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp
      }
    }
  }
  return arr
}

var maxArea = function (height) {
  let i = 0,
    j = height.length - 1,
    max = 0,
    square;
  while (i < j) {
    if (height[i] > height[j]) {
      square = height[j] * (j - i)
      j--
    } else {
      square = height[i] * (j - i)
      i++
    }
    max = Math.max(max, square)
  }
  return max
};
//广度遍历树， 用队列结构 shift
//深度遍历树， 用栈结构 pop

//树节点
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let root = new TreeNode(10)
root.left = new TreeNode(4)
root.right = new TreeNode(22)
root.left.left = new TreeNode(2)
root.left.right = new TreeNode(7)
root.right.left = new TreeNode(15)
root.right.right = new TreeNode(40)
root.left.right.left = new TreeNode(5)
root.left.right.right = new TreeNode(8)

//         10
//       /    \
//      4     22
//     / \   /  \
//   2    7 15  40
//       / \
//      5   8

//前序遍历
function preOrderWalk(node) {
  if (node) {
    console.log(node.val)
    preOrderWalk(node.left)
    preOrderWalk(node.right)
  }
}


//中序遍历
// 定义:
//   1. 中序遍历左子树
//   2. 遍历根节点
//   3. 中序遍历右子树
const midOrderWalk = (node) => {
  if (node) {
    midOrderWalk(node.left)
    console.log(node.val)
    midOrderWalk(node.right)
  }
}


//后序遍历
// 定义:
//   1. 后序遍历左子树
//   3. 后序遍历右子树
//   2. 遍历根节点
const postOrderWalk = (node) => {
  if (node) {
    postOrderWalk(node.left)
    postOrderWalk(node.right)
    console.log(node.val)
  }
}


//如果一棵二叉树的前序遍历为'ABCDEFG',中序遍历为'CDBAEGF',确定这棵树
// preOrder: A BCD EFG
// midOrder: CDB A EGF
// 			A
// 		 / \
// 	 BCD EFG
// preOrder: B CD        preOrder: E FG
// midOrder: CD B        midOrder: E GF
// 			B											E
// 		 /                       \
// 	  CD 											 FG 
// preOrder: B CD        preOrder: E FG
// midOrder: CD B        midOrder: E GF
// 			C											F
// 		   \                   /
// 	      D									G	

//代码实现
let preStr = 'ABCDEFG'
let midStr = 'CDBAEGF'
function buildTreeFromOrder(preStr, midStr) {
  if (preStr.length === 0) return null
  if (preStr.length === 1) return new TreeNode(preStr[0])
  let root = new TreeNode(preStr[0])
  let idx = midStr.indexOf(root.val)
  root.left = buildTreeFromOrder(preStr.slice(1, idx + 1), midStr.slice(0, idx))
  root.right = buildTreeFromOrder(preStr.slice(idx + 1, preStr.length), midStr.slice(idx + 1, midStr.length))
  return root
}

//找到二叉树最左边的节点
const findLeftNode = function (root) {
  const queue = []
  const result = []
  if (root) queue.push(root)
  while (queue.length > 0) {
    const tmp = []
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      const item = queue.shift()
      tmp.push(item.val)
      if (item.left) queue.push(item.left)
      if (item.right) queue.push(item.right)
    }
    result.push(tmp)
  }
  return result.map(x => x[0])
}

console.log(findLeftNode(root))
