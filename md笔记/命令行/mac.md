## 系统设置

defaults write com.apple.finder AppleShowAllFiles -bool true 此命令显示隐藏文件
defaults write com.apple.finder AppleShowAllFiles -bool false 此命令关闭显示隐藏文件

### .DS_Store
.DS_Store是Mac OS保存文件夹的自定义属性的隐藏文件，如文件的图标位置或背景色，相当于Windows的desktop.ini。

1，禁止.DS_store生成：
打开 “终端” ，复制黏贴下面的命令，回车执行，重启Mac即可生效。

  defaults write com.apple.desktopservices DSDontWriteNetworkStores -bool TRUE

2，恢复.DS_store生成：

  defaults delete com.apple.desktopservices DSDontWriteNetworkStores

## mac 命令行

[mac命令大全](https://blog.csdn.net/u013896628/article/details/54377364)



## 文件操作

* cp [参数] 文件地址 目的地址

	参数：
	* -r [递归文件和目录]

* zip [参数] 压缩后名称 压缩的目录

  参数：
  * -r [递归文件和目录]
