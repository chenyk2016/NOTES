
1. 动态链接库DLL
  即把基础模块的代码打包进入动态链接库里，比如常用的react，vue等，当需要导入的模块在动态连接库里的时候，模块不能再次被打包，而是去动态连接库里获取
2. 分离 runtime 和 manifest
  runtime: webpack 用来连接模块化应用程序所需的所有代码。
  manifest: webpack 管理所有所需模块之间的交互。
