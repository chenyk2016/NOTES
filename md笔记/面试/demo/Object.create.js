
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