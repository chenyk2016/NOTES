## postcss-loader 允许使用 JS 插件转换样式的工具

## css引入

### 1. style-loader 将css注入dom


### 2. css-loader 解释(interpret) @import 和 url() 并引用合适的loader解析。

>小知识:
是在引用路径的字符串最前面添加上 ~ 符号，如 @import "~@/style/theme";
Webpack 会将以 ~ 符号作为前缀的路径视作依赖模块而去解析，这样 alias 配置就能生效了。
image 等资源文件都可以这样实现。

安装:
```
npm install --save-dev style-loader css-loader
```

配置:
```js
{
  test: /\.css$/,
  use: [
    { loader: 'style-loader/url' },
    {
      loader: 'css-loader',
      options: {
        // modules: true //开启模块化
      }
    }
  ]
}
```

### 3. url-loader

解析css中的资源文件，并提供base64转换功能。

(作用相当于file-loader,当文件小于限制时，可以返回一个 DataURL。)
`npm install --save-dev url-loader`

```js
  {
    test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
    loader: 'url-loader',
    options: {
      limit: 10000
    }
  }
```

### 4. postcss-loader

postcss-loader

```
"last 1 version",
"> 1%",
"maintained node versions",
"not dead"
```

## plugins

autoprefixer 添加供应商前缀
postcss-pxtorem 将px转换成rem。

postcss-sprites 生成图像精灵。

### 5. mini-css-extract-plugin

mini-css-extract-plugin
