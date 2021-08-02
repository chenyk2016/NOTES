# mysql命令

## mysql启动关闭操作
```
# 启动：
sudo /usr/local/mysql/support-files/mysql.server start

# 关闭
sudo /usr/local/mysql/support-files/mysql.server stop

# 重启
sudo /usr/local/mysql/support-files/mysql.server restart

# 进入mysql（要求输入mysql登录密码）
mysql -u root -p

# 退出mysql
exit

# 版本号
mysql --version

#
```

## mysql命令
```
# 查看数据库端口
show global variables like 'port';

1 数据库简单操作
（1）创建数据库：create database 数据库名称
（2）查看数据库：show databases;
（3）删除数据库：drop database 数据库名称
（4）打开数据库：use 数据库名称

2 mysql数据表简单操作
（1）显示某个数据库中的所有表：show tables;
（2）显示数据表的结构：desc 表名;
（3）创建数据表：create tabel 表名(字段名称 字段类型, ……);
（4）添加新列：alter table 列名 add 字段名称 字段类型;
（5）删除数据表：drop table 表名;
（6）复制表：create table 新表名 like 被复制表名;

3 修改密码

1. SET PASSWORD=PASSWORD('mysql');

2. ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';

```
