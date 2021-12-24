
# webpack性能优化

> 参考+摘抄: [webpack性能优化](https://segmentfault.com/a/1190000015883378#articleHeader14>)
> 参考： [使用webpack进行web性能优化](https://juejin.im/post/5b976f4b5188255c865e0240#heading-0)
> [2020年了,再不会webpack敲得代码就不香了(近万字实战)](https://juejin.cn/post/6844904031240863758#heading-1)
## 核心概念

- tree shaking TODO
  - Tree-shaking 是语法敏感的

### lodash 优化

1. 使用`lodash-es`

2. 您必须使用类似`import foo from 'lodash/foo'`。
`import { foo } from 'lodash'`, `import _ from 'lodash'`不会是Tree-shaking生效。

## 一、优化构建速度

Webpack在启动后会根据Entry配置的入口出发，递归地解析所依赖的文件。这个过程分为搜索文件和把匹配的文件进行分析、转化的两个过程，因此可以从这两个角度来进行优化配置。

### 1. 缩小文件搜索范围

#### resolve

字段告诉webpack怎么去搜索文件，所以首先要重视resolve字段的配置

##### resolve.modules 避免避免层层查找

设置 `resolve.modules:[path.resolve(__dirname, 'node_modules')]`避免避免层层查找。

resolve.modules告诉webpack去哪些目录下寻找第三方模块。
默认值为['node_modules']，
会依次查找./node_modules、../node_modules、../../node_modules。

##### resolve.mainFields 减少入口文件的搜索步骤

> [参考](<https://www.jianshu.com/p/ace0c01e8965>)

设置`resolve.mainFields:['main']`

`resolve.mainFields`定义从`package.json`检索第三方模块入口字段。

resolve.mainFields和target配置有关
target为web或者webworker时，值是["browser", "module", "main"]
当target为其它情况时(一般情况)，值是["module", "main"]

##### resolve.alias 避免库内解析

庞大的第三方模块设置 `resolve.alias`

使webpack直接使用库的min文件，避免库内解析
如对于react：

```json
resolve.alias:{
    'react':patch.resolve(__dirname, './node_modules/react/dist/react.min.js')
}
```

这样会影响Tree-Shaking，适合对整体性比较强的库使用，如果是像lodash这类工具类的比较分散的库，比较适合Tree-Shaking，避免使用这种方式。

##### 合理配置 resolve.extensions 减少文件查找

默认值: `extensions:['.js', '.json']`,

当导入语句没带文件后缀时，Webpack会根据extensions定义的后缀列表进行文件查找，所以：

- 列表值尽量少
- 频率高的文件类型的后缀写在前面
- 源码中的导入语句尽可能的写上文件后缀，如require(./data)要写成require(./data.json)

#### module.noParse 设置不解析文件

可以用来排除对非模块化库文件的解析如jQuery、ChartJS、lodash，另外如果使用resolve.alias配置了react.min.js，则也应该排除解析，因为react.min.js经过构建，已经是可以直接运行在浏览器的、非模块化的文件了。noParse值可以是RegExp、[RegExp]、function

`noParse:[/jquery|chartjs|lodash/, /react\.min\.js$/]`

#### 配置loader时，通过test、exclude、include缩小搜索范围

### 2. 使用DllPlugin拆分bundles，提升构建速度

> 也就是将node_modules下的部分包，单独拆出来，
> 可能类似于rend

DllPlugin动态链接库插件，其原理是把网页依赖的基础模块抽离出来打包到dll文件中，当需要导入的模块存在于某个dll中时，这个模块不再被打包，而是去dll中获取。
**为什么会提升构建速度呢？** 原因在于dll中大多包含的是常用的第三方模块，如react、react-dom，所以只要这些模块版本不升级，就只需被编译一次。我认为这样做和配置resolve.alias和module.noParse的效果有异曲同工的效果。

1. 新建一个`webpack.dll.js` 并运行`webpack --config webpack.dll.js`

```js
const webpack = require('webpack');
const path = require('path');
module.exports = {
    entry: {
        react: ['react', 'react-dom']
    },
    output: {
        filename: 'dll_[name].js',
        library: "[name]_[hash]",
        path: path.resolve(__dirname, 'dist/site')
    },
    plugins: [
        new webpack.DllPlugin({
            context: __dirname,
            path: path.join(__dirname, 'dist/site', '[name]-mainfest.json'),
            name: '[name]_[hash]'
        }),
    ]
}
```

2. 在新建webpack.config.js引用

```javascript
plugins: [
  new webpack.DllReferencePlugin({
      // 描述 react 动态链接库的文件内容
      manifest: require('./dist/site/react-mainfest.json'),
  })
]
```

### 3. 使用HappyPack开启多进程Loader转换

### 4. 开启多进程压缩JS文件

webpack5自带 terser-webpack-plugin 的开箱配置，
但是想要自定义配置，或者使用webpack4，还是需要install `terser-webpack-plugin`

```javascript
new TerserPlugin({
  parallel: true, // 多线程
}),
```

### 5. 使用缓存 TODO

1. babel-loader cacheDirectory
2. webpack的 catch

## 二、优化开发体验

### 1. 合理设置watch

ignored: 设置不监听的目录，排除node_modules后可以显著减少Webpack消耗的内存

aggregateTimeout: 文件变动后多久发起构建，避免文件更新太快而造成的频繁编译以至卡死，越大越好

poll: 通过向系统轮询文件是否变化来判断文件是否改变，poll为每秒询问次数，越小越好

```javascript
module.exports = {
  watch: true, // 开启watch文件监听
  watchOptions: {
    ignored: [/node_modules/],
    aggregateTimeout: 200,
    poll: 1000,
  },
};
```

## 三、优化输出质量-压缩文件体积

### 1. 区分环境--减小生产环境代码体积

设置 `mode: 'production'`

- 许多第三方库中也有大量的根据开发环境判断的if else代码
- 构建也需要根据不同环境输出不同的代码

### 2.  压缩代码-JS、ES、CSS

js

```javascript
module.exports = {
  //...
  optimization: {
    minimize: false,

    minimizer: [
      new TerserJSPlugin({
        parallel: 4, // 开启多进程 默认os.cpus().length - 1
        terserOptions: {
          compress: {
            drop_console: true, // 删除console
            drop_debugger: true, // 删除 debugger
            reduce_vars: true,  //提取使用多次但没定义的静态值到变量
          },
          output: {
            comments: false, //删除所有注释
          }
        }
      }),
      // new OptimizeCSSAssetsPlugin({}),
    ],
  },
};
```

#### css

1. css-minimizer-webpack-plugin 优化和压缩css, 删除重复项目。

```javascript

// 提取css到额外的文件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// 优化 压缩
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /.s?css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  optimization: {
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`,
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};
```

2. 将多个 css 合并成一个

```javascript
module.exports = {
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
          priority: 20,
        }
      }
    }
  }
}
```

TODO

### 3. 使用Tree Shaking剔除未使用的代码

## 四、优化输出质量--加速网络请求

- 使用CDN加速静态资源加载
- 多页面应用提取页面间公共代码，以利用缓存
- 分割代码以按需加载