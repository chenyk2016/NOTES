# npm
    // 更新npm
    npm install npm@latest -g
    npm -v

    // 查看安装的包
    npm list -g --depth 0
    // 初始化一个项目
    npm init
    // 安装依赖
    npm install <package_name>
    --save和--save-dev

    // 卸载
    npm uninstall

    // 检查过时版本
    npm outdated

    // 更新
    npm update <package>
    npm update <package> -g

    // 清空缓存
    npm cache clear
    npm cache clean --force

    // 查看某个库的信息
    npm view iview versions

    // 安装包指定版本
    npm install iview@1.1.1

    // 查看配置
    npm config ls -l

### 设置镜像

    // 设置淘宝镜像
    npm config set registry https://registry.npm.taobao.org --global
    npm config set disturl https://npm.taobao.org/dist --global

    // 查看设置
    npm config get registry
    npm config get disturl


    npm config set registry https://www.npmjs.org

    //删除
    npm config delete registry
    npm config delete disturl

### mac npm install 错误处理

    rm -rf node_modules
    npm cache clean --force
    npm install

不行再加一个开启权限的

    sudo -s

### npm别名

    npm install 别名@npm:包名@版本号

    npm install vue2@npm:vue@^2.6.14

### yarn 别名

    yarn install 别名@yarn:包名@版本号

    yarn install vue2@yarn:vue@^2.6.14