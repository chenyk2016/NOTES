
## 文件位置



## 命令

php --ini 查看php.ini位置

pecl php 依赖管理


## 安装yaf

直接通过 pecl 命令来进行 Yaf 安装，安装成功后会自动配置php.ini文件，不需要手动加载yaf.so

```
pecl install yaf
```

注意⚠️：
如果安装过程中报`mkdir()`失败，去手动看下上级目录是否存在，不存在自己建一下。

安装路径：
`/usr/local/Cellar/php@7.2/7.2.34_1/pecl/20170718/yaf.so`

安装完成后使用命令来检查安装是否成功

```
php --ri yaf
```

### Uncaught Error: Class 'Yaf\Application' not found in

`php -m` 查看已经加载yaf
`php -i | grep yaf` 已经开启，并没有打开yaf.use_namespace

最后定位在php.ini上

`php --ini` 查看php.ini文件位置

添加如下：

```
yaf.use_spl_autoload = On
yaf.environ = "develop"
yaf.use_namespace = On
```

重启php-fpm
```
sudo brew services restart php-fpm
```