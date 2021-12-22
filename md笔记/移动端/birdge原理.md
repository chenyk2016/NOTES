# webview模式JS和原生交互原理

## 1. js brage

引用其他文章的一段话
[引用原文地址](https://blog.csdn.net/duwen90/article/details/79389545)
>由于H5页面是内嵌到原生应用的WebView组件（一个浏览器内核）中，而手机浏览器Javascript引擎是在一个沙箱环境中运行，因此JavaScript的权限受到严格限制，比如没有本地文件读写权限、不能使用GPS、不能修改系统配置等。所以，如果JavaScript要用到这些受限的能力时，就需要委托原生去实现，原生完成后，再将结果通知JavaScript，因此，JavaScript和原生之间就需要一个通信的桥梁，而这个桥梁本质上就是原生的浏览器组件（我们统一称之为WebView）与Javascript 通信的通道，一般称为 WebView JavaScript Bridge, 为了简单，一般简称为 JS bridge

1. 原生可以向webview注入JS代码，注入已经定义好的JS代码。
2. JS调用注入的API吊起原生方法。
3. 原生可以通过webview执行JS的方法。调用回掉方法通知前端。
![js和原生交互](./前端APP开发/img/appandjs.png)

## h5唤起原生的方式

1. 原生 url scheme

`<protocol>://<domain>/<path>?<query>`

通过创建 iframe, 设置url的形式，传递参数

2. 原生的开发API

不考虑Android4.2以下, iOS7以下:

- Android中,原生通过 addJavascriptInterface开放一个统一的api给JS调用,然后将触发url scheme步骤变为调用这个api,其余步骤不变(相当于以前是url接收参数,现在变为api函数接收参数)
- iOS中,原生通过JavaScriptCore里面的方法来注册一个统一api,其余和Android中一样(这里就不需要主动获取参数了,因为参数可以直接由这个函数统一接收)

3. 微信

通过 location.replace(url) 的方式，改变url的search信息。

有个坏处是页面会刷新。但是目前没找到其他可以实现的方式。

## 原生向H5发消息

1. 原生： 通过 evaluateJavascript 执行js代码
2. 微信： 通过改变url中的hash, 在h5页面中监听hashchange事件, 信息通过hash中的参数传递
   - 不会触发浏览器刷新，是微信比较好的实现方式。