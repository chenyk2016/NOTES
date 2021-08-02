## linux 命令
```bash
# 查看进程
# 结果含义 UID PID PPID C STIME TTY TIME CMD
ps -ef|grep [servername]

# 查看进程-运行信息
top -p pid

# 查看端口占用情况
lsof -i:端口


# 关闭进程
kill -9 #进程名称PID#

# 启动
bin目录下》
sh start.sh

# 查看日志
tail -f catalina.out

# 服务器远程上传文件
scp root@134.70.64.154:/home/boncapp/sjtb.zip ./

# # 请求数据


# 下载文件

wget path

# 移动到当前目录
mv /home/boncapp/libr ./

```

## yum

安装git

  yum install git



## tar压缩解压缩

```bash
# 压缩 gz
tar -cvf test.tar ./test/

# 解压 gz
tar -xzvf test.tar


# 压缩
tar -cvf test.tar ./test/

# 解压
tar -xvf test.tar
```


## 网络

统计服务器上网络 运行情况

```bash
netstat -nat | awk 'FNR>2{print $NF}' | sort | uniq -c
```

状态说明:

```bash
LISTEN:       侦听来自远方的TCP端口的连接请求;
SYN-SENT:     在发送连接请求后等待匹配的连接请求;
SYN-RECEIVED: 在收到和发送一个连接请求后等待对方对连接请求的确认;
ESTABLISHED:  代表一个打开的连接;
FIN-WAIT-1:   等待远程TCP连接中断请求, 或先前的连接中断请求的确认;
FIN-WAIT-2:   从远程TCP等待连接中断请求;
CLOSE-WAIT:   等待从本地用户发来的连接中断请求;
CLOSING:      等待远程TCP对连接中断的确认;
LAST-ACK:     等待原来的发向远程TCP的连接中断请求的确认;
TIME-WAIT:    等待足够的时间以确保远程TCP接收到连接中断请求的确认;
CLOSE:        没有任何连接状态;
```