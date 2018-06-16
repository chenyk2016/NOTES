# 路径问题

1. js引用出错

项目config文件夹里index.js中的 assetsPublicPath ，默认是/，改成你想设置的子目录名称，比如： /weixin/
然后还要配置页面内的路由路径就可以了

2. css引用图片出错（路径变成`/static/img/css/static/...`）
    
    ~~~js
        build > utils

        // Extract CSS when that option is specified
        // (which is the case during production build)
        if (options.extract) {
          return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader',
        publicPath: '../../'
          })
        } else {
          return ['vue-style-loader'].concat(loaders)
        }
    ~~~

3. css 引用不能用`/static/`

4. Html引用图片

    因Html文件未使用预处理器, 需要将路径设置成静态的
    例如: `./static/img/food_icon.png`


5. 引用css路径出错
    `assetsPublicPath`改为`./`
    `config > index.js > build > assetsPublicPath: './'`

6. 配置生产文件目录
    ~~~js
    config > index.js 
    var prodAddr = 'F:/workspace/bonc-x-dss-4.1/app/pages/mobile/actionSh/arrearsForewarn'

    module.exports = {
    build: {
        index: path.resolve(__dirname, prodAddr + '/index.html'),
        assetsRoot: path.resolve(__dirname, prodAddr),
    }
    ~~~