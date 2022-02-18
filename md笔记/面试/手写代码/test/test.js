
/**
 *
 * @param {object | null} obj
 */
function create(obj) {
  p = Object(obj)
  const res = new Object({})
  Object.setPrototypeOf(res, p)
  return res
}

// window.a = {name: 'a'}

// window.b = Object.create(a)

// window.c = {name: 'c'}

// window.d = create(c)


// console.log(a, b, c, d);

/**
 * instanceof
 * @param {*} a
 * @param {*} b
 */
function instance(a, b) {
  if(typeof a !== Object) return false;

  if(a === null) {
    return false
  }

  const proto = Object.getPrototypeOf(a)
  if(b.prototype && b.prototype === proto) {
    return true
  }

  return instance(proto, b)
}

// a = {}
// console.log(a instanceof Object,  instance(a, Object) );
// console.log(null instanceof Object, instance(null, Object) );
// console.log(1 instanceof Object, instance(1, Object) );


/**
 * 防抖
 * 函数防抖是指在事件被触发 n 秒后再执行回调，如果在这 n 秒内事件又被触发，则重新计时
 * 1. 这可以使用在一些点击请求的事件上，避免因为用户的多次点击向后端发送多次请求。
 * 2. 页面resize事件
 *
 * @param {*} cb
 * @param {*} time
 * @returns
 */
function debounce(cb, time = 0) {
  let timer = null

  return function _debounce() {
    let content = this
    let args = arguments

    if(timer) {
      clearTimeout(timer)
      timer = null
    }
    timer = setTimeout(() => {
      fn.apply(content, args);
    }, time)
  }
}

// const debounceFn = debounce(()=> {
//   console.log(123)
// }, 2000)

// debounceFn()

// setTimeout(() => {
//   console.log(1);
//   debounceFn()
// }, 1000)

/**
 *
 * 节流函数
 * 固定时间内，执行一次，期间其他方法忽略
 * 节流可以使用在 scroll 函数的事件监听上，通过事件节流来降低事件调用的频率。
 * 例如输入框的搜索功能
 *
 * @param {*} fn
 * @param {*} timeout
 * @returns
 */
function throttle(fn, duration = 0) {
  let preT

  return function () {
    const context = this
    const args = arguments
    const currentT = Date.now()

    if (!preT || currentT - preT >= duration) {
      preT = currentT
      fn.apply(context, args)
    }
  }
}

// const throttleFn = throttle(() => {
//   console.log(1);
// }, 100)

// throttleFn()
// throttleFn()
// throttleFn()

// setTimeout(() => {
//   console.log(2);
//   throttleFn()
// }, 2000)


/**
 * 获取数据类型
 * @param {*} any
 * @returns str
 */
function getType(any) {
  return Object.prototype.toString.call(any).match(/\[object (.*)\]/)[1].toLowerCase()
}

// console.log( getType(1) );
// console.log( getType([]) );
// console.log( getType(function() {}) );

/**
 * myBind
 * eg: myBind(thisArg, arg1, arg2, ...)
 *
 * 1. 处理预置参数和调用参数
 * 2. 处理new的调用
 *
 *
 * @param {*} fn
 * @param {*} thisArg
 * @returns
 */
Function.prototype.myBind = function(thisArg) {
  const fn = this
  const preArgs = Array.from(arguments).slice(1)

  return function Fn() {
    // 处理new调用的情况，测试不改变this
    const context = this instanceof Fn ? this : thisArg
    // 合并参数
    const args = preArgs.concat(Array.from(arguments))

    fn.apply(context, args)
  }
}

// function sayName(pre, newP) {
//   console.log(pre, this.name, newP);
// }

// const fn = sayName.myBind({ name: '小明' }, 123)

// new fn(444)
// fn(333)

/**
 * 将fn柯里化(参数可多次调用传递)
 *
 * @param {*} fn
 * @returns
 */
function carry(fn) {
  const paramsL = fn.length
  let args = []
  return function carryFn() {
    const context = this

    args = args.concat(Array.from(arguments))
    if(args.length >= paramsL) {
      return fn.apply(context, args)
    }
    return carryFn
  }
}

// const carryInst = carry((a, b, c) => {
//   return a + b +c
// })
// console.log( carryInst(1)(2)(3) );

/**
 * clone 浅拷贝
 * @param {*} data
 * @returns
 */
function clone(data) {
  const type = Object.prototype.toString.call(data).match(/\[object (.*)\]/)[1].toLowerCase()

  let res
  if (type === 'array') {
    res = data.map(v => v)
  } else if (type === 'object' ) {
    res = Object.assign({}, data)
  } else {
    res = data
  }
  return res
}

// window.a = {a: 1}
// window.b = [1,2,{b: 1}]
// window.cloneA = clone(a)
// window.cloneb = clone(b)

// console.log( cloneA, cloneB );

/**
 * 深拷贝
 * @param {any} data
 * @returns
 */
function cloneDeep(data) {
 const type = Object.prototype.toString.call(data).match(/\[object (.*)\]/)[1].toLowerCase()

  let res
  if (type === 'array') {
    res = data.map(v => cloneDeep(v))
  } else if (type === 'object' ) {
    res = {}
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        res[key] = cloneDeep(data[key])
      }
    }
  } else {
    res = data
  }
  return res
}

// window.a = {a: 1}
// window.b = [1,2,{b: 1}]
// window.cloneA = cloneDeep(a)
// window.cloneB = cloneDeep(b)
// console.log(cloneA, cloneB );

/**
 *
 * 日期格式化
 *
 * @param {Date} date
 * @param {str} format
 * @returns
 */
function dateFormat(date, format) {
  const isDate = Object.prototype.toString.call(date).match(/\[object (.*)\]/)[1].toLowerCase() === 'date'
  if (!isDate) {
    throw new Error('第一参数必须为date对象')
  }

  const dateObj = {}
  dateObj.yyyy = date.getFullYear()
  dateObj.m = date.getMonth() + 1
  dateObj.MM = `0${dateObj.m}`.slice(-2)
  dateObj.dd = date.getDate()

  return format.replace(/[yyyy|m|MM|dd]+/g, ($) => {
    return dateObj[$]
  })
}

// console.log( dateFormat(new Date('2020-12-01'), 'yyyy/MM/dd') );  // 2020/12/01
// console.log( dateFormat(new Date('2020-04-01'), 'yyyy/MM/dd') );  // 2020/04/01
// console.log( dateFormat(new Date('2020-04-01'), 'yyyy年MM月dd日')  );  //  2020年04月01日

/**
 * 交换变量的值
 */
function exchangeValue() {
  let a = 1, b = 2
  [a, b] = [b, a]
}


function randomArray(arr) {
  const randomArr = []
  const _arr = arr.map((v, i) => i)

  for(let i = arr.length - 1; i >= 0; i--) {
    let index = _arr.splice([ Math.floor(Math.random() * ( i + 1 ) ) ], 1)[0]
    randomArr.push( arr[index] )
  };

  return randomArr
}

// console.log( randomArray([1,2,3,4,5]) );
// console.log( randomArray([5,4,3,2,1]) );

/**
 * 数组展开
 * @param {*} arr
 * @param {*} grade
 * @param {*} currentGrade
 * @returns
 */
function expendArr (arr, grade = 1, currentGrade = 1) {
  let resArr = []
  const isEnd = currentGrade === grade

  arr.forEach(v => {
    if (!isEnd && Array.isArray(v)) {
      resArr = resArr.concat( expendArr(v, grade, currentGrade + 1) )
    } else {
      resArr.push( v )
    }
  })

  return resArr
}

// console.log( expendArr([1,2,[3,4],[[5,6]]], 3) );

/**
 * 数组去重
 * @param {arr} arr
 */
function uniqueArr (arr) {
  const newArr = []
  arr.forEach(v => {
    if(!newArr.includes(v)) {
      newArr.push(v)
    }
  })
  return newArr
}

// console.log( uniqueArr( [1,2,3,4,5,5,1] ) );


String.prototype.reverse = function () {
  const str = this
  let l = str.length - 1
  let newStr = ''

  while (l >= 0) {
    newStr += str.slice(l, l + 1)
    l -= 1
  }

  return newStr
}

// console.log( '12345'.reverse() );

function numFormat(num) {
  return `${num}`.replace(/\B(?=(\d{3})+\b)/g, ',')
}

// console.log( numFormat('123456789.12345') );

/**
 * 大数相加
 *
 * 拆分成数组，每一位相加
 *
 * @param {bigInt} a
 * @param {bigInt} b
 * @returns sumStr
 */
function bigNumPlus(a, b) {
  let res = '', temp = ''
  a = a.split('')
  b = b.split('')

  while(a.length || b.length || temp) {
    temp += +(a.pop() || 0) + +(b.pop() || 0)
    res = temp.toString().slice(-1) + res
    // 进位
    temp = temp > 9
  }

  return res
}

// console.log( bigNumPlus('111', '2') );

/**
 * 数组对象转换成tree
 *
 * @param {*} arr
 *
 * time: 11:30 -> 11:52
 */
function treeObj(arr) {
  const res = []
  const map = {}
  arr.forEach((item) => {
    map[item.id] = item
  })

  arr.forEach(item => {
    const parent = map[item.pid]
    if (parent) {
      (parent.children || (parent.children = [])).push(item)
    } else {
      res.push(item)
    }
  })

  return res;
}

// // 转换前：
source = [{
            id: 1,
            pid: 0,
            name: 'body'
          }, {
            id: 2,
            pid: 1,
            name: 'title'
          }, {
            id: 3,
            pid: 2,
            name: 'div'
          }]
// // 转换为:
// tree = [{
//           id: 1,
//           pid: 0,
//           name: 'body',
//           children: [{
//             id: 2,
//             pid: 1,
//             name: 'title',
//             children: [{
//               id: 3,
//               pid: 1,
//               name: 'div'
//             }]
//           }
//         }]

// console.log( treeObj(source) );


/**
 * 解析url query参数成对象
 * @param {*} url
 * @returns obj
 */
function parseUrl(url) {
  const obj = {}

  const queryMatch = url.match(/\?([^?#]+)/)
  const queryStr = queryMatch ? queryMatch[1] : ''

  queryStr.replace(/([^&=]+)(=([^&=]+))?/g, ($, $1, $2, $3) => {
    console.log($, $1, $2, $3);
    let key = $1
    let value = $3 === undefined ? true : $3

    // 重复的key转变成数组
    if (obj.hasOwnProperty(key)) {
      obj[key] = [].concat(obj[key], value)
    } else {
      obj[key] = value
    }
  })

  return obj
}

// console.log( parseUrl('https://juejin.cn/post/6946136940164939813?a=1&a=2&b=2&c=name&c=aaa') );

// 循环打印红黄绿
// 红灯 3s 亮一次，绿灯 1s 亮一次，黄灯 2s 亮一次；如何让三个灯不断交替重复亮灯？

async function run() {
  async function delay(time) {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, time);
    })
  }

  await delay(3000)
  console.log('红灯');
  await delay(1000)
  console.log('绿灯');
  await delay(2000)
  console.log('黄灯');
  run()
}
// run()

// 2. 实现每隔一秒打印 1,2,3,4

function print(v) {
  setTimeout(() => {
    console.log(v);
    if(v < 4) {
      print(v + 1)
    }
  }, 1000);
}

// print(1)

// 有30个小孩儿，编号从1-30，围成一圈依此报数，1、2、3 数到 3 的小孩儿退出这个圈， 然后下一个小孩 重新报数 1、2、3，问最后剩下的那个小孩儿的编号是多少?

function run (len = 30) {
  // 给小孩编号
  let children = Array(30).fill('').map((v, i) => i+1);
  console.log(children);
  let num = 1
  while(children.length > 1) {
    let rest = []
    children.forEach(code => {
      if(num !== 3) {
        rest.push(code)
        num++
      } else {
        num = 1
      }
    })

    console.log(rest);

    children = rest
  }

  return children[0]
}

// console.log( run() );

// 实现发布订阅模式

class EventCenter{
  handlers = {}

  addEventListener(type, handler) {
    this.handlers[type] = (this.handlers[type] || []).concat(handler)
  }

  dispatch(type, params) {
    const actions = this.handlers[type]
    if (actions) {
      actions.forEach((handler) => {
        handler(params)
      })
    }
  }

  removeEventListener(type, handler) {
    const handlers = this.handlers[type]
    if (!handlers) return;

    if(handler) {
      handlers.forEach((v, index) => {
        if (v === handler) {
          handlers.splice(index, 1)
        }
      })
    } else {
      handlers = []
    }
  }
}

// 查出出现频率最高的词 11:10 -
function findMostWord(str) {
  const words = str.match(/[a-zA-Z]+/g)
  const uniqueWord = new Set(words)
  let max = 0
  let maxWord = ''

  uniqueWord.forEach(word => {
    const reg = new RegExp(`\\b${word}\\b`, 'g')
    const match = str.match(reg)

    if (max < match.length) {
      max = match.length
      maxWord = word
    }
  })

  return maxWord
}

// console.log( findMostWord('a a,a b asdc asdasd') );

// 实现双向数据绑定
function dataBind() {
  const obj = {}
  let input = document.getElementById('input')

  Object.defineProperty(obj, 'value', {
    configurable: true,
    enumerable: true,
    get() {

    },
    set(v) {
      obj.value = v
      input.value = v
    }
  })

  input.addEventListener('input', (e) => {
    obj.value = e.target.value
  })
}

// 实现简单路由
class Router {
  constructor(props) {
    this.routes = {}
    this.currentHash = ''
    this.beforeEach = props.beforeEach || function () {}

    let freshRoute = this.freshRoute.bind(this)
    window.addEventListener('load', freshRoute, false)
    window.addEventListener('hashchange', freshRoute, false)
  }



  add(path, cb) {
    this.routes[path] = cb
  }

  freshRoute() {
    this.currentHash = location.hash.slice(1) || '/'

    const cb = this.routes[this.currentHash]

    this._beforeEach(this.currentHash)

    cb && cb()
  }

  _beforeEach(currentHash) {
    this.beforeEach(currentHash)
  }

  push(path) {
    history.pushState({}, null, '#' + path)
    this.freshRoute()
  }
}

// const route = new Router({
//   beforeEach(currentHash) {
//     console.log(currentHash);
//   }
// })
