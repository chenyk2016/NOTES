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
