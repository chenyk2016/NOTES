# Homebrew

mac 软件包管理器

	https://brew.sh/index_zh-cn

## 使用brew查询软件

		$ brew search /wge*/

wge*/是个正则表达式， 需要包含在/中

## brew 命令
		brew list           列出已安装的软件
		brew update     更新brew
		brew home       用浏览器打开brew的官方网站
		brew info         显示软件信息
		brew deps        显示包依赖

## brew和brew cask有什么区别

https://www.zhihu.com/question/22624898


## 问题

### 执行 brew install 命令长时间卡在 Updating Homebrew 的解决方法
	- 使用镜像源
	- 按一次ctrl+c 取消update , 等一秒就会安装包

https://learnku.com/articles/18908
