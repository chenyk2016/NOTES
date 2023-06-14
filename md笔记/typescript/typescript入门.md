# TypeScript入门


书籍: <http://martsforever-snapshot.gitee.io/typescript-book-chinese/project/compilationContext.html#%E7%BC%96%E8%AF%91%E9%80%89%E9%A1%B9>

官网: <https://www.typescriptlang.org/>

比较全面: <https://juejin.cn/post/7018805943710253086#heading-114>

[TypeScript 入门教程](https://juejin.cn/post/6844904182843965453#heading-15)

[React + TypeScript 默认 Props 的处理]([https:/@/link](https://www.cnblogs.com/Wayou/p/react_typescript_default_props.html))

[采用策略模式书写ts友好的react组件](https://juejin.cn/post/7044753804427788318)

[ts报错处理办法](https://juejin.cn/post/6844903892094812173)

## 关闭检查

```js
// @ts-ignore # 忽略下一行
// @ts-nocheck # 忽略整个文件
```

## 使用

```js
// 全局定义
declare global {
  interface Window {
    MSV: any;
  }

  const a: any;
}


declare module 'axios' {
  interface a {

  }
}
```