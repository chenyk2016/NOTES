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
SET PASSWORD=PASSWORD('mysql');

4 判断列是否存在
select table_name,column_name,column_comment,column_type,column_key from information_schema.Columns where table_name='表名'




```

### 创建表

```sql
create Table user_stock(code char(10) COMMENT '股票代码',short_name char(20) COMMENT '股票简称',add_price char(10) COMMENT '现价(元)',add_pe char(10) COMMENT 'PE',current_situation varchar(300) COMMENT '现状分析\n（营收，营收利润，亏损原因。）',support_point varchar(300) COMMENT '后续支撑点',value_grade char(4) COMMENT '股票评分等级\n（股票的优质程度）',buy_grade char(20) COMMENT '买入评级\n（风险和价格）',price_around varchar(20) COMMENT '买卖价格区间\n（低买高卖）(PE)',trades char(20) COMMENT '行业',main_business varchar(300) COMMENT '主营业务',main_customer varchar(300) COMMENT '主要客户')
```
