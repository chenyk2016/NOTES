# VUE 配置信息

## 开发模式服务器代理 proxy
    confid > index.js > dev
    proxyTable: {
        // proxy all requests starting with /api to jsonplaceholder
        '/api': {
            target: 'http://jsonplaceholder.typicode.com',
            changeOrigin: true,
            pathRewrite: {
                '^/api': ''
            }
        }
    }

## 关闭代码压缩
* html
    `build.units.js html-webpack-plugin`
*  css
    `build.webpack.prod.conf > OptimizeCSSPlugin`
* js
    ~~~node
    build.webpack.prod.conf > UglifyJsPlugin

    new UglifyJsPlugin({
      uglifyOptions: {
        // ecma: 8,
        // warnings: false,
        // parse: {...options},
        // compress: {...options},
        mangle: {
          // ...options,
          keep_classnames: false,
          keep_fnames: true,
          toplevel: true,
          // properties: {
          //   // mangle property options
          // }
        },
        output: {
          comments: false,
          beautify: true,
        },
        // toplevel: false,
        // nameCache: null,
        // ie8: false,
        // keep_classnames: undefined,
        // keep_fnames: false,
        // safari10: false,
        compress: {
          warnings: false
        }
      },
      sourceMap: config.build.productionSourceMap,
      parallel: true
    }),
    ~~~


## vue-axios Post 方式无法发送参数
原因：默认情况下，axios将JavaScript对象序列化为JSON。要以application/x-www-form-urlencoded格式发送数据，需要转换格式。

    // 1.引入 [qs](https://github.com/ljharb/qs) 查询字符串解析和字符串化库
    var qs = require('qs');
    axios.post('/foo', qs.stringify({ 'bar': 123 }));
    // 2.请求头需要制定编码格式, 不指定的话 java 后台解析时解析不到
    headers: {
        'Content-Type' = 'application/x-www-form-urlencoded; charset=utf-8'
    }

详细看：[官方解释](https://github.com/axios/axios/blob/master/README.md#using-applicationx-www-form-urlencoded-format)

## 语法检查
1. 关闭语法检查
build > webpack.base.config.js

    ```js
        {
            test: /\.(js|vue)$/,
            loader: 'eslint-loader',
            enforce: 'pre',
            include: [resolve('src'), resolve('test')],
            options: {
              formatter: require('eslint-friendly-formatter')
            }
        },
    ```



