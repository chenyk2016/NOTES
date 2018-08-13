# npm
    // 更新npm
    npm install npm@latest -g
    npm -v

    // 查看安装的包
    npm list -g
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

### 设置淘宝镜像

    npm config set registry https://registry.npm.taobao.org --global
    npm config set disturl https://npm.taobao.org/dist --global

    npm config set registry http://registry.npmjs.org
    

### mac npm install 错误处理

    rm -rf node_modules
    npm cache clean --force
    npm install

不行再加一个开启权限的

    sudo -s
