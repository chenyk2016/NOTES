## 1. 下载地址

https://www.androiddevtools.cn/
>注意， 下载正式版 不要从别的平台下载，可能会有病毒

## 2. 创建项目

[创建项目](https://www.runoob.com/w3cnote/android-tutorial-android-studio.html)

## 3. 项目设置
1. 自带默认签名文件位置
![临时签名](./img/qianming.png)

2. debug包位置
![测试包](./img/testapk.png)

3. 新增模块
  无

4. 删除模块
  1. 打开`Modules Settings `
    ![删除1](./img/module-delete1.png)
  2. 删除模块
    ![删除2](./img/module-delete2.png)
  3. 回到目录 > 右键 > 删除文件
    ![删除3](./img/module-delete3.png)

5. 签名打包

  签名后的包可以直接安装

  1. 签名
  ![签名1](./img/signed.png)
  2. 新增签名
  ![新增签名](./img/signed-new.png)
  3. 打包
  ![打包](./img/signed.png)
  4. 打包目录位置
  ![打包](./img/release-apk.png)

6. 配置gradle方式打包
见 [gradle生成apk](./gradle生成apk.docx) 文件


## 4. 安卓连接模拟器
模拟器可以选择【夜神模拟器】或者【木木模拟器】

- 夜神模拟器，

 命令行运行以下命令
```
adb connect  127.0.0.1:62001
```

- mumu模拟器

  命令行运行以下命令

  首先关闭服务
  ```
  adb kill-server
  ```
  再启动服务
  ```
  adb start-server
  ```

## 5. 模拟器运行项目

1. 点击运行按钮
![运行](./img/start1.png)
2. 选择模拟器
![选择模拟器](./img/start2.png)
3. 等待程序运行，打开模拟器，可以看到安装的APP
![运行结果](./img/start-res.png)
