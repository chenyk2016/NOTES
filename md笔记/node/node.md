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


## node版本管理

### mac node版本管理工具n

mac装个node版本管理工具n

    npm i -g n

```
# 升级到指定的版本
n 版本号 如 n 10.0.0

# 安装最近的稳定版本
n stable

# 安装最新的版本
n latest
```

### windows node版本管理工具nvm-windows

安装: https://github.com/coreybutler/nvm-windows/releases

```bash
# 当前版本
nvm current

# 设置node镜像
nvm node_mirror https://npmmirror.com/mirrors/node/

# 设置npm镜像
nvm npm_mirror https://npmmirror.com/mirrors/npm/

# 安装node
nvm install <version>

# 使用node
mvm use <version>
```

## 调试node项目

https://code.visualstudio.com/docs/nodejs/nodejs-debugging


## 看node包资源查找路径

cmd进入node命令模式

输入`module.paths`

## 获取node的安装路径

npm config get prefix

### 常见问题 为什么全局安装的node包不能被require？

><https://www.jianshu.com/p/b437e125597e?utm_campaign=maleskine&utm_content=note&utm_medium=seo_notes&utm_source=recommendation>

全局安装的node_modules的位置十分复杂，不是在根目录内，而是根目录的另一个分支的子目录中，这样的话，系统无法是找到的。
