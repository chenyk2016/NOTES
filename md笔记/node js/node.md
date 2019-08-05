# 1. 命令

~~~node
    node -v ：node版本
    npm install --save-dev webpack  ：文件夹中安装webpack
    npm init  :自动创建package.json

    webpack {entry file/入口文件} {destination for bundled file/存放bundle.js的地方}
~~~


# 一些记录
`__dirname`是node.js中的一个全局变量，它指向当前执行脚本所在的目录。

npm的start是一个特殊的脚本名称，
它的特殊性表现在，在命令行中使用npm start就可以执行相关命令，
如果对应的此脚本名称不是start，想要在命令行中运行时，
需要这样用npm run {script name}如npm run build，


### 升级node
装个node版本管理工具n

    npm i -g n

```
# 升级到指定的版本
n 版本号 如 n 10.0.0

# 安装最近的稳定版本
n stable

# 安装最新的版本
n latest
```
