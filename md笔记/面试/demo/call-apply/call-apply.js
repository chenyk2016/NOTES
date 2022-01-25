
/**
 *
 * @param {*} content
 * @returns
 */
function cCall(content) {
  const fn = this
  content = Object(content) || window
  content.fn = fn
  // es6
  // const res = content.fn(...arguments)

  // es3 解决参数不定的问题
  let params = []
  for(let i = 1; i < arguments.length; i++) {
    params.push('arguments[' + i + ']')
  };
  const res = eval('content.fn(' + params + ')')

  delete content.fn
  return res
}

/**
 *
 * @param {*} content
 */
function cApply(content, arr) {
  const fn = this
  arr = arr || []
  content = Object(content) || window
  content.fn = fn
  // es6
  // const res = content.fn(...arr)

  // es3 解决参数不定的问题
  let params = []
  for(let i = 0; i < arr.length; i++) {
    params.push('arr[' + i + ']')
  };
  console.log(params);
  const res = eval('content.fn(' + params + ')')

  delete content.fn
  return res
}

Function.prototype.cCall = cCall
Function.prototype.cApply = cApply

const person1 = {
  name: '小明'
}

const person2 = {
  name: '二明'
}

function sayName(arg1, arg2) {
  console.log(arguments);
  console.log(this.name, arg1, arg2)
}

sayName.call('person1', '11', 22)
sayName.cCall('person1', '11', 22)
sayName.apply(person1, [1,2], 3)
sayName.cApply(person1, [1,2])
sayName.call(person2)
