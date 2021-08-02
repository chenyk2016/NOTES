# 命令行工具auto jump

在终端的文件夹跳转非常麻烦, 需要敲长长的路径.
alias 别名也不是很方便。
autojump 是通过记录进入过的目录到数据库来实现的, 所以必须是曾经进入过的目录才能跳转.

## 安装 macos
```
brew install autojump
```

## 使用

`j foo` 跳转到一个包含foo字符串的目录：
`jc foo` 跳转到一个包含foo字符串目录的子目录
`jo foo` 在终端直接打开包含foo字符串目录的文件管理器