[按照官方装各种东西](https://reactnative.cn/docs/0.51/getting-started.html#content)

注意: 0.59以上需要 CocoaPods，用以下方法现装好CocoaPods 环境。
1.  先把 https://github.com/CocoaPods/Specs 仓库下载下来。
2. `cd ~/.cocoapods/repos`
3. 将master.zip文件，放在该目录下。

⚠️注意2: iOS RN 0.45以上版本所需的第三方编译库(boost等)
http://bbs.reactnative.cn/topic/4301/ios-rn-0-45%E4%BB%A5%E4%B8%8A%E7%89%88%E6%9C%AC%E6%89%80%E9%9C%80%E7%9A%84%E7%AC%AC%E4%B8%89%E6%96%B9%E7%BC%96%E8%AF%91%E5%BA%93-boost%E7%AD%89

⚠️注意3: 去ios/目录下执行`pod install`

	react-native run-ios

正常跑起来，出现了一个空的模拟器。。。
然后就没有然后了。
按照官方用xCOde查看报错信息。
