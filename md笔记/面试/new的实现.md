# new的实现

## new 会进行如下操作

1. 创建一个空的简单JavaScript对象（即{}）；
2. 为步骤1新创建的对象添加属性__proto__，将该属性链接至构造函数的原型对象 ；
3. 将步骤1新创建的对象作为this的上下文 ；
4. 如果该函数没有返回对象，则返回this。

## 写一个

```javascript
function objectFactory (Con, ...args) {
  const obj = new Object()
  Object.setPrototypeOf(obj, Con.prototype) // obj.__proto__ = supClass.prototype
  let result = Con.apply(obj, args)
  return result instanceof Object ? result : obj;
}
```
