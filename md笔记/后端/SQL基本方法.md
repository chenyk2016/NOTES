## SQL方法

####  nal()
    * nal(表达式1, 表达式2)
        表达式1为空时，执行表达式2
    * nal(表达式1, 表达式2, 表达式3)
        表达式1为空时，执行表达式3，不为空时执行3

####  data函数
    * to_char
    * to_data
####  TRIM ( [ [位置] [要移除的字串] FROM ] 字串)
####  ROUND(column_name,decimals) 函数用于把数值字段舍入为指定的小数位数。
####  sum()
####  group by
####  as
####  decode() 条件赋值
    decode(列名, 条件1, 结果1, 条件2, 结果2 ... )
    decode(列名, 条件1, 结果1, 结果2 )
####  with ... as a  select ... from a
#### replace('data', '要被替换的字符' , '替换的字符')
    



#### sql判断是否要取最大账期和
    ~~~SQL
    decode( #acctDate#,'', (select max(t.month_id||t.day_id) from  NDM.DM_APP_MB_PRED_INCOME_D t),#acctDate#  )
    ~~~

#### 正式库数据导入测试库
    insert into   PM.pm_jx_lev2_ser_actual 
    select * from PM.pm_jx_lev2_ser_actual@TO_JFPM T WHERE t.acct_month='201709'

#### 复制表（+用户赋权）
    create table  ndm.DM_APP_MB_CHARGE_FLUX_D as
    select * from  ndm.DM_APP_MB_CHARGE_FLUX_D@TO_JFPM;

    grant all on  ndm.DM_APP_MB_CHARGE_FLUX_D  to kepler_bae;

#### 操作表数据
    选择之后添加`for update`
    更新之后注意：一定要提交，不然会锁表

#### 删除表
    drop  table 用户.表明 ;

~~~sql
    --删除数据
    delete tableName;
~~~


