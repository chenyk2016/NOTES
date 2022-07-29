
## 查看服务器信息

```bash
# 查看系统内核：
uname

# 查看操作系统的版本(redhat)：
cat /etc/redhat-release


```


## linux 命令
```py
# 查看进程
ps -ef|grep tomcat

# 关闭进程
kill -9 #进程名称#

# 启动
bin目录下》
sh start.sh

# 查看日志
tail -f catalina.out

# 服务器远程上传文件
scp root@134.70.64.154:/home/boncapp/sjtb.zip ./

# 移动到当前目录
mv /home/boncapp/libr ./

```

## yum

安装git

  yum install git



## tar压缩解压缩

```
# 压缩 gz
tar -cvf test.tar ./test/

# 解压 gz
tar -xzvf test.tar


# 压缩
tar -cvf test.tar ./test/

# 解压
tar -xvf test.tar
```

## 防火墙

```bash
systemctl start firewalld  # 开启防火墙
systemctl stop firewalld   # 关闭防火墙
systemctl status firewalld # 查看防火墙开启状态，显示running则是正在运行
firewall-cmd --reload      # 重启防火墙，永久打开端口需要reload一下

# 添加开启端口，--permanent表示永久打开，不加是临时打开重启之后失效
firewall-cmd --permanent --zone=public --add-port=8888/tcp

# 查看防火墙，添加的端口也可以看到
firewall-cmd --list-all

```

## 系统运行情况

```bash

# 内存使用
free
# total:总计物理内存的大小
# used:已使用多大
# free:可用有多少
# shared:多个进程共享的内存总额
# buff/cached:磁盘缓存的大小

# 显示实时 process 的动态
top
# PID：进程的ID　　
# USER：进程所有
# PR：进程的优先级别，越小越优先被执
# VIRT：进程占用的虚拟内
# RES：进程占用的物理内
# SHR：进程使用的共享内
# S：进程的状态,S表示休眠，R表示正在运行，Z表示僵死状态，N表示该进程优先值为负
# %CPU：进程占用CPU的使用
# %MEM：进程使用的物理内存和总内存的百分
# TIME+：该进程启动后占用的总的CPU时间，即占用CPU使用时间的累加值
# COMMAND：进程启动命令名称


```
