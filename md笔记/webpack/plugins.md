# plugins

## html 模版

  HtmlWebpackPlugin

  npm install --save-dev html-webpack-plugin

## 将css提取到单独的文件

  mini-css-extract-plugin

  ExtractTextPlugin 是webpack4之前用的。

  模块打包js和css会独立打包

## 将css公共模块提取出来

## 压缩js

  UglifyJsPlugin 压缩js

  ExtractTextPlugin 是webpack4之前用的。

  模块打包js和css会独立打包

## 静态文件复制

  CopyWebpackPlugin

## 清理dist文件夹

  npm install clean-webpack-plugin --save-dev

## 开启服务器

  npm install --save-dev webpack-dev-server

  devServer: {
  	contentBase: './dist'
  }

## 6. 第三方文件依赖单独打包

  DllPlugin 和 DllReferencePlugin

## 首屏渲染 prerender-spa-plugin

  在构建时就生成页面首屏 html 的一个 webpack 插件

## 组件库按需加载 babel-plugin-import

npm install babel-plugin-import --save-dev

普通webpack .babelrc配置

```js
"plugins": [
  ["import",
    {
      "libraryName": "antd",
      "libraryDirectory": "lib",
      "style": true, // 默认less, 也可使用"css"
    },
  "antd"],
]
```

create-react-app 中配置

```javascript
plugins: [
  [require.resolve('babel-plugin-import'), { "libraryName": "antd", "style": "css"}],
]
```
