# vue

## 安装
>
### vue-cli

    npm install --global vue-cli
    // 创建一个基于 webpack 模板的新项目
    vue init webpack my-project
    // 安装依赖，走你
    cd my-project
    npm install
    npm run dev

### vue-axios

    npm install --save-dev axios vue-axios
    //  引入
    import Vue from 'vue'
    import axios from 'axios'
    import VueAxios from 'vue-axios'
    Vue.use(VueAxios, axios)

### mint-ui

    npm i mint-ui -S


## 项目问题
### 配置
* [开发模式服务器代理 proxy](./config/开发模式服务器代理 proxy)
* [关闭代码压缩](./config/关闭代码压缩)
* [vue-axios Post 方式无法发送参数](./config/vue-axios Post 方式无法发送参数)
* [语法检查](./config/语法检查)
* 多项目入口

### 问题
* 低版本浏览器不支持Promise
    - 引入babel-polyfill
    ~~~bash
    npm install --save babel-polyfill
    import 'babel-polyfill';
    ~~~
    
* `<keep-alive include='a'></keep-alive>`筛选的是组件名称。不是路由的 



### 错误
<h5>1.Cannot find module 'ansi-styles'</h5>
**【原因】**安装依赖失败或安装过程中中断，就会出现这种情况
**【解决办法】**删除 node_module 文件， 重新安装依赖。

<h5>2.LCalendar时间日期选择插件</h5>
在魅族6pro里的Webview下， 无法滑动
**报错信息：**

    Ignored attempt to cancel a touchstart event with cancelable=false, for example because scrolling is in progress and cannot be interrupted.

**原因:**
猜测应给是：绑定的元素的高度高于父级，虽然父元素有 `overflow: hidden` 但还是无法阻止 scrolling，所以会出现以上报错信息。

**解决办法：**
应该将点击和滑动事件，绑定到`date_mm`元素的父级上

    var date_yy = _self.gearDate.querySelector(".date_yy").parentElement;
    var date_mm = _self.gearDate.querySelector(".date_mm").parentElement;


### 如何构建高复用组件
**1. 组件内部最好不要使用声明周期钩子函数**
组件复用时可能面对各种各样的应用场景，在组件的生命周期钩子函数中绑定事件，容易导致触发不稳定（有时触发，有时不触发）。
比如以下场景：
* 1. 组件引入时需要用`keep-alive`包含，以保存组件状态，但是又想每次加载组件时都执行某个函数。
    例如：一个筛选组件，希望跳转回页面是，组件保存状态。
    **如何保存组件状态：**
* 2. 

**2. 如何保存组件状态**
*  组件名称不变

**3. 页面应和url关联， 断开与其他页面之间的关联。**