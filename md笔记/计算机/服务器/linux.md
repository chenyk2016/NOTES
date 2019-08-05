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
