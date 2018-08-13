# androidStudio开发汇总

## 平时遇到的一些问题

### 搭建环境遇到的问题（没问题可跳过）
1. 安装完成android studio后看下SDK的安装目录有没有`platform-tools`文件夹，如果没有，说明这个并没有安装成功，其他插件同理。

解决办法：
有些插件国内下载不了，可以配置http代理。
修改Android SDK manager界面中`tools>options`然后修改成这样`HTTP Proxy ：mirrors.neusoft.edu.cn` 和` HTTP Proxy Port:80`
注意：地址可能会失效，可以百度一个新的试试
![SdkManager](img/SdkManager.png)