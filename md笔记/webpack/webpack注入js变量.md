

## webpack配置

```js
plugins: [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  }),
]
```

## 使用

```js
console.log(VAR_NAME); // 123
```