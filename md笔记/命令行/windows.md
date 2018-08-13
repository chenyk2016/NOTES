# windows DOS（Disk Operating System）系统命令
[DOC]

# DOS基本命令

## net
net管理网络环境、服务、用户、登陆等本地信息。

## Ipconfig
网络配置情况
    
    ipconfig [/all]

## 文件目录操作
配合type命令来查看目录下的文件
进入不同盘 `E:`

| nane1 |      nane2       | nane3 |
| :---- | :--------------- | :---- |
| md    | 创建目录         |       |
| rd    | 删除             |       |
| cd    | 进入             |       |
| tree  | 图形显示文件结构 |       |
| dir   | 显示目录内容     |       |
| XCOPY |  复制文件夹   |  /E[字目录包括空目录] /Y[覆盖不提示]     |

## 磁盘

|     nane1     |     nane2      | nane3 |
| :------------ | :------------- | :---- |
| diskpart      | 进去磁盘操作   |       |
| list disk     | 查看有几块硬盘 |       |
| select disk 0 | 选择磁盘       |       |
| detail disk   | 详情： 分区等  |       |

## 文件操作

| nane1  |    nane2     |                         name3                         |
| :----- | :----------- | ----------------------------------------------------- |
| copy   | 复制         |                                                       |
| del    | 删除         | /s[递归] /f[强制] /q[安全模式] /q[每个文件删除前询问] |
| ren    | 冲命名       |                                                       |
| type   | 显示文本文件 |                                                       |
| attrib | 设置文件属性 | +[添加属性] -[移除属性] H[隐藏] S[系统] R[只读]       |
| xcopy  | 复制         | copy加强版 /s[一个目录下的多个子目录] /E[空目录]      |
| move   | 移动         |                                                       |

type 打开文件 乱码： `chcp 65001` 设置为utf-8

## 系统属性

|   nane1    |   nane2   | nane3 |
| :--------- | :-------- | :---- |
| systeminfo | 系统信息  |       |
| chkdsk     | 检查磁盘  |       |
| time       | 时间      |       |
| date       | 日期      |       |
| ver        | DOS版本号 |       |
| cls        | 清楚      |       |


# DOS网络命令

## ping
TCP/IP协议中最有用的命令， 校验与远程计算机或本地计算机的链接。

## nbtstat
可以用于查询涉及NetBIOS信息的网络计算机

## netstat 
显示活动的TCP的连接、路由表和网络接口信息。


