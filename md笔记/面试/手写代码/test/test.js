
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


function parseUrl(url) {
  const obj = {}
  url.replace(/[?|#](?=(([^(?|#)=&]+)(=([^&#]+))?)*)/g, ($, key, $2, value, $4) => {
    let _key = key
    let _value = value === undefined ? true : value

    // if (/\[\d+\]/.test(key)) {
    //   const keyMatch = _key.match(/([^\[\]]+)/g)
    //   if(keyMatch) {
    //     _key = keyMatch[0]
    //     index = keyMatch[1]
    //   }
    //   (obj[_key] || (obj[_key] = []))[index] = _value
    // }

    if (obj.hasOwnProperty(_key)) {
      obj[_key] = [].concat(obj[_key], _value)
    } else {
      obj[_key] = _value
    }
  })

  return obj
}

console.log( parseUrl('https://juejin.cn/post/6946136940164939813#heading-48?a.a=1&b=2&c=name&c=aaa') );