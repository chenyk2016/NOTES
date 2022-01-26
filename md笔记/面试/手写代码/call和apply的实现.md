# call和apply的实现

核心:

1. 在指定的this上调用方法。
2. 参数个数不确定(eval的使用)

## call实现

定义:

在指定的this和不定个参数的前提下调用方法，返回执行后的结果

eg: `call(thisArg, arg1, ... , argN)`

```javascript
/**
 * call的实现
 * @param {*} context
 * @returns
 */
function cCall(context) {
  const fn = this
  context = Object(content) || window
  context.fn = fn
  // es6
  // const res = context.fn(...arguments)

  // es3 解决参数不定的问题
  let params = []
  for(let i = 1; i < arguments.length; i++) {
    params.push('arguments[' + i + ']')
  };
  const res = eval('context.fn(' + params + ')')

  delete context.fn
  return res
}
```

## apply实现

与call的区别是，参数是一个array｜array-like object

eg: `apply(thisArg, argsArray)`

```javascript
/**
 * apply实现
 * @param {*} content
 */
function cApply(content, arr) {
  const fn = this
  arr = arr || []
  content = Object(content) || window
  content.fn = fn
  // es6
  // const res = content.fn(...arguments)

  // es3 解决参数不定的问题
  let params = []
  for(let i = 0; i < arr.length; i++) {
    params.push('arr[' + i + ']')
  };
  const res = eval('content.fn(' + params + ')')

  delete content.fn
  return res
}

```