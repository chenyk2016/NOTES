# 自己搭一个gitlab服务器

> 参考链接
> <https://ken.io/note/centos7-gitlab-install-tutorial>
> <https://about.gitlab.com/install/>

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

#配置首页地址（大约在第15行）, 也可以用IP代替域名
external_url 'http://47.110.249.94'

```

## 运行

```bash
sudo gitlab-ctl stop --停止服务
sudo gitlab-ctl reconfigure --启动服务
sudo gitlab-ctl start --启动所有gitlab组件
```