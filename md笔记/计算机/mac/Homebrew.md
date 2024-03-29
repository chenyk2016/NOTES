# Homebrew

mac 软件包管理器

![官网](https://brew.sh/index_zh-cn)

注意: 安装之后，先执行下`brew doctor`, 诊断下brew的安装情况

## 使用brew查询软件

  $ brew search /wge*/

wge*/是个正则表达式， 需要包含在/中

## brew 命令

  brew doctor brew 的自我诊断
  brew list           列出已安装的软件
  brew update     更新brew
  brew home       用浏览器打开brew的官方网站
  brew info         显示软件信息
  brew deps        显示包依赖
  brew list --formula   显示已安装的依赖包

  brew --prefix 【package】 查看安装信息

  brew uninstall [package] 卸载
  brew autoremove // remove all the unused dependencies:

## brew和brew cask有什么区别

<https://www.zhihu.com/question/22624898>

## 问题

### 执行 brew install 命令长时间卡在 Updating Homebrew 的解决方法

- 使用镜像源
- 按一次ctrl+c 取消update , 等一秒就会安装包

https://learnku.com/articles/18908


## brew 阿里云镜像加速

> https://learnku.com/cs/wikis/39228
