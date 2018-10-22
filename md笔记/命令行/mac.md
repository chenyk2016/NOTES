## 系统设置

```bash
 # 此命令显示隐藏文件
 defaults write com.apple.finder AppleShowAllFiles -bool true
 # 此命令关闭显示隐藏文件
 defaults write com.apple.finder AppleShowAllFiles -bool false
```

### .DS_Store
.DS_Store是Mac OS保存文件夹的自定义属性的隐藏文件，如文件的图标位置或背景色，相当于Windows的desktop.ini。
```bash
  # 删除当前目录的.DS_store
  find . -name '*.DS_Store' -type f -delete

  # 删除所有目录的.DS_store
  sudo find / -name “.DS_Store” -depth -exec rm {} \;

  # 禁止.DS_store生成,
  # 执行下面的命令，回车执行，重启Mac即可生效。
  defaults write com.apple.desktopservices DSDontWriteNetworkStores -bool TRUE

  # 恢复.DS_store生成：
  defaults delete com.apple.desktopservices DSDontWriteNetworkStores
```

## mac 命令行

[mac命令大全](https://blog.csdn.net/u013896628/article/details/54377364)



### 文件操作

索引：

| 名称 | 描述 | 参数 |
| :------------- | :------------- | :------------- |
| cp | 复制文件  | -r[递归]   |
| zip | 压缩  | -r[递归] |
| ls   | 显示当前列表  | -a[包含.开头的文件]  |
| ll   | 显示文件列表及详细信息  |   |
|  mkdir  | 生成文件夹  |   |
|rm   |  删除文件或文件夹 | -rf  |
| mv   |  移动文件或文件夹 |   |
|   |   |   |



#### 查看文件/文件夹权限：

    $ ls -l

参考： https://blog.csdn.net/x1876631/article/details/70162009

例如：

    drwxr-xr-x@ 16 ykchen  staff  512  9  4 23:30 apache-tomcat-8.5.34

1. 文件属性，即文件的类型/读/写/执行等权限，共10个字符。
d 表示目录， -表示文件
2. 元信息区域
3. 用户名
4. 用户组
5. fontsize
6. updatetime，即文件的最后修改时间
7. filename，即文件名

#### 修改文件的权限


### 安全操作
| 名称 | 描述 | 参数 | 示例 |
| :------------- | :------------- | :------------- | :------------- |
| chmod     | 文件权限 |  | chmod 777 'filename' |
