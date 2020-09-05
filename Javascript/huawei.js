//Javascript V8  牛客代码示例

//readline()返回 -> 输入的参数,通常都为字符串
// while (line = readline()) {
//   let lines = line.split(' ');
//   let a = parseInt(lines[0]);
//   let b = parseInt(lines[1]);
//   function add(m, n) {
//     return m + n;
//   }
//   print('这里是输出的内容');
// }

//计算字符串最后一个单词的长度，单词以空格隔开。
function lastWordLength(str) {
  let _arr = str.split(' ')
  return _arr[_arr.length - 1].length
}

//计算特定字母在字符串中出现的此数，不计算大小写
function countLetterInString(s, a) {
  let str = s.toLowerCase()
  let x = a.toLowerCase()
  let count = 0
  for (let i = 0; i < str.length; i++) {
    if (x === str[i]) {
      count++
    }
  }
  return count
}

//明明的随机数 （数组去重加排序）
function uniqueSort(arr) {
  return [...new Set(arr)].sort((a, b) => a - b)
}

//字符串分割 给定一个字符串数组，按长度为8拆分每个字符串后输出到新的字符串数组，长度不是8整数倍的字符串请在后面补数字0，空字符串不处理。
function splitString8(arr) {
  const res = []
  for (let i = 0; i < arr.length; i++) {
    let str = arr[i]
    const len = str.length
    if (len % 8 !== 0) {
      str = arr[i] + '00000000'
    }
    while (str.length > 8) {
      res.push(str.substring(0, 8))
      str = str.substring(8)
    }
  }
  return res
}

//进制转化 16 -> 10
//parseInt(str, radix)  radix进制 => 10进制  返回数字
//num.toString(radix)   10进制 => radix进制  返回字符串
function transform16To10(str) {
  return parseInt(str, 16).toString()
}

//找出所有质数因子，并以如下形式输出  180 => '2 2 3 3 5'
function primeFactor(num) {
  let res = ''
  let len = num / 2 + 1
  for (let i = 2; i < len; i++) {
    while (num % i === 0) {
      res += (i + ' ')
      num = num / i
    }
  }
  return res
}

//四舍五入
Math.round(1.2)

//合并表记录 ['0 2', '0 1', '1 2'] => '0 3' /n '1 2'
function mergeRecord(arr) {
  let obj = {}
  for (let i = 0; i < arr.length; i++) {
    let key = arr[i][0]
    let value = parseInt(arr[i][2])
    if (key in obj) {
      obj[key] += value
    } else {
      obj[key] = value
    }
  }
  let newArr = Object.keys(obj).sort((a, b) => a - b)
  for (let i = 0; i < newArr.length; i++) {
    console.log(newArr[i] + ' ' + obj[newArr[i]])
  }
}

//翻转 提取不重复的整数  9876673 => 37689
function reverseAndUnique(num) {
  let str = num + '',
    len = str.length,
    res = '',
    dic = []
  for (let i = len - 1; i >= 0; i--) {
    if (!dic.includes(str[i])) {
      res += str[i]
      dic.push(str[i])
    }
  }
  return res
}

//字符个数统计 ，计算字符串中含有的不同字符的个数 注意:ASCII码范围在（0 ~ 127）
//str.charCodeAt(index) ： index为索引，默认为0，返回值为索引的ascii码
//String.fromCharCode(num) ： num为ascii码，返回值为ascii码对应的字符
function countUniqueChar(str) {
  return new Set([...str]).size
}

//数字颠倒
function reverseNum(Num) {
  return [...(100 + '')].reverse().join('')
}

//字符串反转
function reverseStr(str) {
  return [...str].reverse().join('')
}

//句子翻转
function reverseSentence(stc) {
  return stc.split(' ').reverse().join(' ')
}

//字串的连接最长路径查找 : 按字典序排序 ['dca', 'ssaa', 'abs']
function sortStrByDictionary(arr) {
  return arr.sort()
}

//求int型数据在内存中存储时1的个数 10进制转2进制，然后算出1的格式
function countInBinary(num) {
  let binaryString = num.toString(2)
  let count = 0
  console.log(binaryString)
  for (let i = 0; i < binaryString.length; i++) {
    if (binaryString[i] === '1') {
      count++
    }
  }
  return count
}

//购物单,背包问题，动态规划


//坐标移动
function coordinateMove(str) {
  let arr = str.split(';')
  let x = 0
  let y = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] && /^[ASDW]\d+$/.test(arr[i])) {
      let dic = arr[i][0]
      let n = arr[i].substring(1) - 0
      switch (dic) {
        case 'A':
          x = x - n
          break
        case 'D':
          x = x + n
          break
        case 'W':
          y = y + n
          break
        case 'S':
          y = y - n
          break
      }
    }
  }
  return x + ', ' + y
}

// 识别有效的IP地址和掩码并进行分类统计

// 简单错误记录

// 密码验证合格程序
function checkPassword(str) {
  if (str.length <= 8) {
    return 'NG'
  }
  let count = 0
  if (/[a-z]+/.test(str)) {
    count++
  }
  if (/[A-Z]+/.test(str)) {
    count++
  }
  if (/[0-9]+/.test(str)) {
    count++
  }
  if (/[^A-Za-z0-9]+/.test(str)) {
    count++
  }
  if (count < 3) {
    return 'NG'
  }
  let arr = []
  for (let i = 0; i < str.length - 2; i++) {
    arr.push(str.substr(i, 3))
  }
  let len = arr.length

  if (new Set(arr).size === len) {
    return 'OK'
  } else {
    return 'NG'
  }
}

function transformPassword(str) {
  let res = ''
  for (let i = 0; i < str.length; i++) {
    let s = str[i]
    if (/[a-z]/.test(s)) {
      if ('abc'.indexOf(s) != -1) {
        res += 2
      } else if ('def'.indexOf(s) != -1) {
        res += 3
      } else if ('ghi'.indexOf(s) != -1) {
        res += 4
      } else if ('jkl'.indexOf(s) != -1) {
        res += 5
      } else if ('mno'.indexOf(s) != -1) {
        res += 6
      } else if ('pqrs'.indexOf(s) != -1) {
        res += 7
      } else if ('tuv'.indexOf(s) != -1) {
        res += 8
      } else {
        res += 9
      }
    } else if (/[A-Z]/.test(s)) {
      if (s === 'Z') {
        res += 'a'
      } else {
        res += String.fromCharCode(s.toLowerCase().charCodeAt() + 1)
      }
    } else {
      res += s
    }
  }
  return res
}

//换汽水 3个汽水空瓶可以换1瓶汽水(两个空瓶可暂借一瓶汽水) => 整除二

//删除字符串中出现次数最少的字符  aabbccc => ccc
function deleteLeastWord(str) {
  let dict = {}
  let len = str.length
  for (let i = 0; i < len; i++) {
    if (dict[str[i]]) {
      dict[str[i]]++
    } else {
      dict[str[i]] = 1
    }
  }
  let arr = Object.keys(dict)
  let minNum = Math.min(...Object.values(dict))
  for (let i = 0; i < arr.length; i++) {
    if (dict[arr[i]] === minNum) {
      str = str.replace(new RegExp(arr[i], "g"), '')
    }
  }
  return str
}

//合唱队 递增子序列 动态规划


//数据分类处理
// I '15 123 456 786 453 46 7 5 3 665 453456 745 456 786 453 123' 
// R '5 6 3 6 3 0'
// => 30 ||3^ 6^ |0 123 |3 453 |7 3 |9 453456 |13 453 |14 123|| 6 7 1 456 2 786 4 46 8 665 9 453456 11 456 12 786
function classifyData(str1, str2) {
  let arr1 = str1.trim().split(' ')
  let arr2 = str2.trim().split(' ')
  let numI = parseInt(arr1.shift())
  let numR = parseInt(arr2.shift())
  let R = [...new Set(arr2)].sort((a, b) => a - b)
  let I = arr1
  numR = R.length
  let res = ''
  for (let i = 0; i < numR; i++) {
    let cache = {}
    let count = 0
    for (let j = 0; j < numI; j++) {
      if (I[j].indexOf(R[i]) !== -1) {
        // console.log(j, I[j])
        if (Object.keys(cache).length === 0) {
          cache[R[i]] = ''
        }
        cache[R[i]] += (j + ' ' + I[j] + ' ')
        count++
      }
    }
    if (Object.keys(cache).length !== 0) {
      res = res + R[i] + ' ' + count + ' ' + cache[R[i]]
    }
  }
  return res.trim().split(' ').length + ' ' + res.trim()
}

//字符串排序 
// A Famous Saying: Much Ado About Nothing (2012/8).
// => A aaAAbc dFgghh: iimM nNn oooos Sttuuuy (2012/8).
function sortString(str) {
  let len = str.length
  let res = new Array(len)
  let char = []
  for (let i = 0; i < len; i++) {
    if (/[a-zA-Z]/.test(str[i])) { //是字母放到char中
      char.push(str[i])
    } else { //不是字母放到res中
      res[i] = str[i]
    }
  }
  char.sort((a, b) => a.toLowerCase().charCodeAt() - b.toLowerCase().charCodeAt())
  for (let i = 0; i < len; i++) {
    if (!res[i]) {
      res[i] = char[0]
      char.shift()
    }
  }
  return res.join('')
}

// 【中级】单词倒排
function reverseWord2(str) {
  let arr = str.trim().split(/[^a-zA-Z]+/)
  return arr.reverse().join(' ').trim()
}

// 找出最长的子回文字符串 的长度
function longestPalindrome(str) {
  let palindromeStr = "" //记录最长回文串
  let tempPalindrome = "" //记录当前回文串
  for (let i = 0; i < str.length; i++) {      //i记录当前遍历字符串的开始位置，循环依次向后遍历
    //每次新的一轮开始时，将临时记录回文串的变量清空
    tempPalindrome = ""
    for (let j = i; j < str.length; j++) {  //每次开始循环是以当前i所在的下标位置为开始遍历字符串的起始位置，直到遍历到结束位置
      //逐个增加字符串的长度
      tempPalindrome += str[j];
      if (isPalindrome(tempPalindrome) && tempPalindrome.length > palindromeStr.length) {  //将当前的字符串传入isPalindrome进行回文判断，如果是回文串，则判断当前回文串长度是否大于之前记录的最长回文串的长度，如果大于之前的回文串，则更新之前的记录即可    
        palindromeStr = tempPalindrome
      }
    }
  }
  return palindromeStr.length
  //判断是否为回文串
  function isPalindrome(s) {
    let rev = s.split('').reverse().join('')
    return rev === s;
  }
}
//动态规划
var longestPalindrome2 = function (s) {
  let len = s.length;
  let res = s[0];
  for (let i = 0; i < len; i++) {
    let j = 1;
    let tmpStr1 = '';
    let tmpStr2 = '';
    if (s[i] === s[i + 1] && s[i + 1]) {
      const doubleStr = `${s[i]}${s[i + 1]}`;
      res = res.length > doubleStr.length ? res : doubleStr;
    }
    tmpStr1 = s[i];
    // 判断 ada 类型(奇数长度)回文
    while (s[i - j] === s[i + j] && s[i - j] && s[i + j]) {
      tmpStr1 = s[i - j] + tmpStr1 + s[i + j];
      j++;
    }
    // 判断 aaaa 类型(偶数长度)回文
    j = 1;
    while (s[i - j] === s[i + j - 1] && s[i - j] && s[i + j - 1]) {
      tmpStr2 = s[i - j] + tmpStr2 + s[i + j - 1];
      j++;
    }
    const tmpStr = tmpStr1.length > tmpStr2.length ? tmpStr1 : tmpStr2;
    res = res.length > tmpStr.length ? res : tmpStr;
  }
  return res.length;
}

//整数与IP地址间的转换
function transformIntToIP(str) {
  //判断IP地址还是整数
  const re = /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/;//正则表达式 
  let res = ''
  if (re.test(str)) {
    let arr = str.split('.')
    for (let i = 0; i < arr.length; i++) {
      let item = '00000000' + parseInt(arr[i]).toString(2)
      res += item.substring(item.length - 8)
    }
    res = parseInt(res, 2)
  } else {
    let binaryNum = parseInt(str).toString(2)
    let polishLen = 8 - binaryNum.length % 8
    binaryNum = new Array(polishLen + 1).join('0') + binaryNum
    let arr = []
    for (let i = 0; i < binaryNum.length; i += 8) {
      arr.push(parseInt(binaryNum.substr(i, 8), 2))
    }
    res = arr.join('.')
  }
  return res
}

function sortaaa(str) {
  let res = [...str].sort(function (a, b) {
    return a.charCodeAt() - b.charCodeAt()
  })
  return res.join('')
}

//根据密钥加密
function encryptByKey(key, str) {
  //chars是密钥对应的字母表，arrayforkey是对应key的数组，res是要返回的结果
  let chars = {}
  let arrayforkey = []
  let res = ''
  //经过下面的循环，arrayforkey前面几个是密匙的字母(可先转为大写)
  for (let i = 0; i < key.length; i++) {
    let item = key[i].toUpperCase()
    if (arrayforkey.indexOf(item) === -1) {
      arrayforkey.push(item)
    }
  }
  //剩下的字母，填充到arrayforkey里面。
  for (let i = 65; i < 91; i++) {
    let item = String.fromCharCode(i)
    if (arrayforkey.indexOf(item) === -1) {
      arrayforkey.push(item)
    }
  }
  //制作完备字典chars
  for (let i = 0; i < 26; i++) {
    let index = String.fromCharCode(65 + i)
    chars[index] = arrayforkey[i]
  }
  // 将输入加密。
  for (let i = 0; i < str.length; i++) {
    if (/[a-z]/.test(str[i])) {
      res += chars[str[i].toUpperCase()].toLowerCase()
    } else {
      res += chars[str[i]]
    }
  }
  return res
}


//生兔子,每三个月生一只,每只兔子只能生一次
//1 1 1 2 3 5 8 13 21 34斐波那契数列
//次方 Math.pow(2, 3); 2的立方
//开方 Math.sqrt(9); 9 开方，返回结果3
function rabbit(n) {
  //创建有n+1个元素的缓存数组（n为月份，n+1是因为arr[n]是第n+1个元素）
  let arr = new Array(n + 1).fill(0)
  arr[1] = 1
  arr[2] = 1
  arr[3] = 2
  for (let i = 4; i < n + 1; i++) {
    arr[i] = arr[i - 1] + arr[i - 2]
  }
  return arr[n]
}

// 判断两个IP是否属于同一子网
function checkSubnet(s) {
  let expIP = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/
  let expMask = /^(254|252|248|240|224|192|128|0)\.0\.0\.0|255\.(254|252|248|240|224|192|128|0)\.0\.0|255\.255\.(254|252|248|240|224|192|128|0)\.0|255\.255\.255\.(254|252|248|240|224|192|128|0)$/
  let _arr = s.split(' ')
  let mask = _arr[0]
  let ip1 = _arr[1]
  let ip2 = _arr[2]
  if (!(expIP.test(ip1) && expIP.test(ip2) && expMask.test(mask))) return 1
  //按位与运算
}

//称砝码
function computeWeights(n, weightArray, numArray) {
  //放不同砝码重量的数组[1kg, 2kg]
  //放不同砝码个数的数组[2个， 1个]
  //当能放1种砝码的时候，此时i = 0, 依次放第一种砝码0个，1个，2个...numList[0]个，并依次和集合中的现有重量相加，放入集合
  //当能放2种砝码的时候，此时i = 1, 依次放第2种砝码0个，1个，2个...numList[1]个，并依次和集合中的现有重量相加，放入集合
  //当能放n + 1种砝码的时候，此时i = n, 依次放第n种砝码0个，1个，2个...numList[n]个，并依次和集合中的现有重量相加，放入集合
  let set = new Set([0])
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < numArray[i]; j++) {
      for (let k of [...set]) { //注意将set快照
        set.add(k + weightArray[i])
      }
    }
  }
  return [set, set.size]
}

function numberToEnglish(num) {
  const to19 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  const tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  const bigTens = ['thousand', 'million', 'billion']
  function recursiveChange(n) {
    if (n < 20) return to19[n]
    if (n < 100) return tens[parseInt(n / 10) - 2] + ' ' + to19[n % 10]
    if (n < 1000) return to19[parseInt(n / 100)] + ' hundred and ' + recursiveChange(n % 100)
    for (const i in bigTens) {
      if (n < Math.pow(1000, i + 2)) {
        return recursiveChange(parseInt(n / Math.pow(1000, i + 1))) + ' ' + bigTens[i] + ' ' + recursiveChange(n % Math.pow(1000, i + 1))
      }
    }
  }
  let res = recursiveChange(num)
  if (num > 0) {
    res = res.replace(/and zero/g, '')
    res = res.replace(/ zero/g, '')
  }
  return res
}

//将数字按每三位一截取放入数组
function splitNumberByThree(num) {
  let str = num + ''
  let arr = []
  let count = str.length % 3
  if (count === 1) {
    str = '00' + str
  } else if (count === 2) {
    str = '0' + str
  }
  for (let i = 0; i < str.length; i += 3) {
    let item = str.substr(i, 3)
    if (i === 0) {
      item = (item - 0).toString()
    }
    arr.push(item)
  }
  return arr
}

//二维数组走迷宫

//字符串的最大漂亮度
function computeLargestBeauty(line) {
  let str = line.toLowerCase()
  let dict = {}
  let res = 0
  for (let i = 0; i < str.length; i++) {
    if (dict[str[i]]) {
      dict[str[i]]++
    } else {
      dict[str[i]] = 1
    }
  }
  let arr = Object.keys(dict).sort((a, b) => dict[b] - dict[a])
  for (let i = 0; i < arr.length; i++) {
    res += dict[arr[i]] * (26 - i)
  }
  return res
}

//字符串按字节数截取，汉字不够不截取
// /[u4E00-u9FA5]/汉字正则
function sliceString(str, n) {
  let res = ''
  let i = 0
  let j = 0
  while (i < n) {
    if ((i === (n - 1)) && (/[\u4E00-\u9FA5]/.test(str[j]))) {
      i += 2
      break
    }
    if (/[\u4E00-\u9FA5]/.test(str[j])) {
      i += 2
    } else {
      i += 1
    }
    res += str[j]
    j++
  }
  return res
}

//检测完全数 除了自身以外的约数 相加等于本身  如 28 = 1 + 2 + 4 + 7 + 14
function checkPerfectNumber(num) {
  let arr = []
  for (let i = 1; i <= num / 2; i++) {
    num % i === 0 && arr.push(i)
  }
  if (arr.reduce((pre, cur) => pre + cur) === num) return true
  return false
}

function abc(num) {
  let res = []
  for (let i = 2; i <= num; i++) {
    if (checkPerfectNumber(i)) {
      res.push(i)
    }
  }
  return res
}

//24点运算
function computeFor24() {
  function solution(input) {
    switch (input) {
      case '4 2 K A':
        console.log('K-A*4/2');
        return;
      case 'A K J 8':
        console.log('A+K-J*8');
        return;
      case 'A 8 8 4':
        console.log('A*8*4-8');
        return;
      case 'Q 3 J 8':
        console.log('Q-J*3*8');
        return;
      case 'A J K 6':
        console.log('J*K+A/6');
        return;
      case 'J 2 9 2':
        console.log('J+2+9+2');
        return;
    }
    if (/joker/gi.test(input)) {
      console.log('ERROR');
      return;
    }
    const inputs = input.split(/\s/);
    const transform = (c) => {
      const mapper = {
        A: 1,
        J: 11,
        Q: 12,
        K: 13,
      };
      return mapper[c] ? mapper[c] : +c;
    };

    const dfs = (first, other, recorder) => {
      const otherLength = other.length;
      if (otherLength === 0) {
        if (first === 24) {
          console.log(recorder.join(''));
        }
        return first === 24;
      }
      for (let i = 0; i < otherLength; i++) {
        const n = transform(other[i]);
        let copy = [...other];
        copy.splice(i, 1);
        if (dfs(first + n, copy, [...recorder, '+', other[i]])) {
          return true;
        }
        if (dfs(first * n, copy, [...recorder, '*', other[i]])) {
          return true;
        }
        if (dfs(first - n, copy, [...recorder, '-', other[i]])) {
          return true;
        }
        if (n !== 0) {
          if (dfs(first / n, copy, [...recorder, '/', other[i]])) {
            return true;
          }
        }
      }
    };
    for (let i = 0; i < 4; i++) {
      let copy = [...inputs];
      copy.splice(i, 1);
      const e = transform(inputs[i]);
      if (dfs(e, copy, [e])) {
        return;
      }
    }
    console.log('NONE');
  }
  while ((input = readline())) {
    solution(input);
  }
}

//七进制计算
function addBy7(str1, str2) {
  let res = parseInt(str1, 7) + parseInt(str2, 7)
  return res.toString(7)
}

function mySort(str) {
  let _arr = str.split(' ')
  //先去重
  let dict = {}
  let arr = []
  for (let i = 0; i < _arr.length; i++) {
    if (!dict[_arr[i].toLowerCase()]) {
      arr.push(_arr[i])
      dict[_arr[i].toLowerCase()] = 1
    }
  }
  arr.sort((item1, item2) => {
    let a = item1.toLowerCase()
    let b = item2.toLowerCase()
    if (a < b) return -1
    return 1
  })

  return arr.join(' ')
}
console.log(mySort('ccc Hello AAA aa World world TTT'))

//数组拍平
let arr = [1, '', [2, 33, [11, 2, [1, 2, 3]], [12, 1], 12], 1]
//reduce版本
//展开一层
let a = arr.reduce((pre, cur) => pre.concat(cur), [])
//展开所有
function _reduceFlat(arr) {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? _reduceFlat(cur) : cur)
  }, [])
}
//完美的 原型链 用some方法
Array.prototype.myFlat = function (n = 1) {
  if (!Number(n) || n < 0 || (parseInt(n) !== n && n !== Infinity)) {
    throw new Error('传入的参数必须为非负整数')
  }
  let res = this
  while (n > 0) {
    if (res.some(x => Array.isArray(x))) {
      res = [].concat.apply([], res)
      n--
    } else break
  }
  return res
}

Array.prototype._flat = function (n = 1) {
  //判断
  if(!Number(n) || n <= 0 || (parseInt(n) !== n && n !== Infinity)) {
    throw new Error('传入的参数必须为正整数')
  }
  let res = this
  while(n > 0){
    if(res.some(item => Array.isArray(item))){
      res = [].concat.apply([], res)
      n--
    } else break
  }
  return res
}




// let n,m
// let firstline = read_line().split(' ')
// n = +firstline[0]
// m = +firstline[1]
// let arr1 = []
// for (let i = 0; i < n; i++) {
//   arr.push(read_line().split(' ').map(x => +x))
// }
// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < m; j++) {
    
    
//   }
// }
let n1 = 5
let m2 = 3
let arr12 = [[28, 35, 38], [4, 76, 72], [96, 80, 81], [70, 64, 86], [1, 93, 19]]

function com(n, m, arr){
  let _arr = []
  let dict = {}
  for (let j = 0; j < m; j++) {
    for (let i = 0; i < n; i++) {
      if(!dict[j] || +arr[i][j] > dict[j]){
        dict[j] = +arr[i][j]
        _arr[j] = i 
      } else if (+arr[i][j] === dict[j]) {
        _arr.push(i)
      }
      
    }
    console.log(dict[j])
  }
  return new Set(_arr).size
}

let arr22 = [2, 1, 5, 2,]
function aaa(arr){
  let a = arr[0]
  let b = arr[1]
  let m = arr[2]
  let x = arr[3]
  let dict = {}
  while (JSON.stringify(a) === "{}" || !dict[(a * x + b) % m]) {
    x = (a * x + b) % m
    dict[x] = 1
    console.log(dict[(a * x + b) % m])
  }
  return Object.keys(dict).length
}

//3 4
//3 1 2
// 数对一共有9个，分别是： (3, 3)(3, 1)(3, 2)(1, 3)(1, 1)(1, 2)(2, 3)(2, 1)(2, 2)
// 按从小到大的排序后：(1, 1)(1, 2)(1, 3)(2, 1)(2, 2)(2, 3)(3, 1)(3, 2)(3, 3)
// 第4个为(2, 1)
let list = ['3 4', '3 1 2' ]
function aaa (arr){
  let first = arr[0].split(' ').map(x => +x)
  let n = first[0]
  let k = first[1]
  let items = arr[1].split(' ').map(x => +x)
  items.sort((a, b) => a - b)
  let p = n
  for (let i = 1; i <= n ; i++) {
    if(k <= p*i){
      return [items[i - 1], items[k - p*(i - 1) - 1]]
    }
  }
}

console.log(new Set([1,2,3]))
class _Set{
  constructor(){
    this.data = {}
  }
  add(item){
    if(!this.data.hasOwnProperty(item)){
      this.data[item] = item
    }
    return this.data
  }
  remove(item) {

  }
}
let set1 = new Set([0])

