# linux上使用mysql

> 参考： <https://cloud.tencent.com/developer/article/1778484>

## 安装前准备

```bash
#用rpm查看是否安装了MySQL

rpm -qa | grep mysql
# 用ps命令查看是否有MySQL进程
ps -ef | grep mysql

# 卸载mysql
#  普通删除模式
rpm -e mysql

# // 强力删除模式，如果使用上面命令删除时，提示有依赖的其它文件，则用该命令可以对其进行强力删除
rpm -e --nodeps mysql　　

```

## 安装使用

```bash
wget http://repo.mysql.com/mysql-community-release-el6-5.noarch.rpm

# 同目录执行
rpm -ivh mysql-community-release-el6-5.noarch.rpm

# 安装mysql服务器
yum install mysql-community-server

# 启动
systemctl start mysqld

# 连接mysql
mysql -u root -p

# sql 更新密码
use databaseName;
set password for root@localhost = password('123');

# 开机启动
chkconfig mysqld on

# 查看运行状态
service mysqld status
systemctl status mysqld
ps -ef | grep mysql

# 如果需要外网访问MySQL，记得设置开放3306端口：

```


## 开启远程登录

进去mysql: `mysql -s root -p`

```sql
--MySQL查看用户状态，root用户下：
select host,user from mysql.user;

-- 创建用户：
CREATE USER 'jdbc'@'localhost'  IDENTIFIED BY 'jdbc'; -- #本地登录
CREATE USER 'jdbc'@'%'  IDENTIFIED BY 'jdbc'; -- #远程登录

-- 赋权
grant all privileges on *.* to 'jdbc'@'localhost' identified by 'jdbc';
grant all privileges on *.* to 'jdbc'@'%' identified by 'jdbc';

--  #刷新系统权限表
flush privileges;

```
