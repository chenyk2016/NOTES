# 自己搭一个gitlab服务器

> 参考链接
> <https://ken.io/note/centos7-gitlab-install-tutorial>
> <https://about.gitlab.com/install/>

## 硬件配置

官方推荐的硬件配置为：
- 2 cores CPU
- 8GB RAM

## 环境准备


## 安装

> 部署的是社区版:gitlab-ce，如果要部署商业版可以把关键字替换为：gitlab-ee


```bash
yum list | grep gitlab-ce


# 添加GitLab社区版Package

curl https://packages.gitlab.com/install/repositories/gitlab/gitlab-ce/script.rpm.sh | sudo bash

# 安装GitLab社区版
# 安装下载慢看下一条
yum install -y gitlab-ee

# 如果服务器安装时下载慢，可以把安装时下载文件地址复制下，本地下载，上传到服务器
scp <文件名称> <用户名>@<服务器ip>:<服务器路径>
# 然后
yum install -y  <localFile>

```

### 配置GitLab站点Url

GitLab默认的配置文件路径是 `/etc/gitlab/gitlab.rb`

默认的站点Url配置项是：`external_url 'http://gitlab.example.com'`


```bash
#修改配置文件
sudo vi /etc/gitlab/gitlab.rb

配置首页地址（大约在第15行）, 也可以用IP代替域名

external_url 'http://47.110.249.94'
unicorn['port'] = 8801

```

### 端口配置说明:

参考: <https://www.cxyzjd.com/article/donglynn/74002540>

#### 1. 修改nginx默认端口，从80变为82。

```bash
vi /etc/gitlab/gitlab.rb

nginx['listen_port'] = 82 #默认值即80端口 nginx['listen_port'] = nil
```

```bash
vi /var/opt/gitlab/nginx/conf/gitlab-http.conf
listen *:82; #默认值listen *:80;
```

然后重启gitlab服务 `gitlab-ctl restart`

#### 2. 使用gitlab内置nginx，把修改unicorn的默认端口从8080改为8082。即nginx监听的rails端口，类似php-fpm。

```bash
vi /etc/gitlab/gitlab.rb

unicorn['port'] = 8082 #原值unicorn['port'] = 8080
```

```bash
vi /var/opt/gitlab/gitlab-rails/etc/
listen "127.0.0.1:8082", :tcp_nopush => true
#原值listen "127.0.0.1:8080", :tcp_nopush => true
```


## 运行

```bash
sudo gitlab-ctl stop --停止服务
sudo gitlab-ctl reconfigure --启动服务
sudo gitlab-ctl start --启动所有gitlab组件
```


## 启动失败

1. Mixlib::ShellOut::ShellCommandFailed: Expected process to exit with [0], but received '137'

参考: <https://gitlab.com/gitlab-org/omnibus-gitlab/-/issues/1186>
可能是内存不足

## 完全卸载GitLab

一、停止gitlab

  sudo gitlab-ctl stop

二、卸载gitlab（这块注意了，看看是gitlab-ce版本还是gitlab-ee版本，别写错误了）
  sudo rpm -e gitlab-ce

三、查看gitlab进程

  ps -ef|grep gitlab
  杀掉第一个守护进程(runsvdir -P /opt/gitlab/service log)
  kill -9 4473
  再次查看gitlab进程是否存在

四、删除gitlab文件

  find / -name *gitlab*|xargs rm -rf     # 删除所有包含gitlab的文件及目录

  find / -name gitlab |xargs rm -rf

  删除gitlab-ctl uninstall时自动在root下备份的配置文件（ls /root/gitlab* 看看有没有，有也删除）
