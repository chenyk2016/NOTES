
# 自己搭一个gitlab服务器-docker版

- 设备: mac pro
- docker版本: 20.10.11

## 参考文档，以官方为准

官方教程: <https://docs.gitlab.com/ee/install/docker.html>

清华大学计算机动力研究室: <http://comdyn.hy.tsinghua.edu.cn/from-web/mac-os/570-docker-gitlat>

gitlab和gitlab-runner的入门介绍(翻墙) <https://embeddedinventor.com/gitlab-a-complete-beginners-guide/>

## 1. 安装docker

[安装docker](../docker/docker.md)

## 2. 下载gitlab-ce

`docker pull gitlab/gitlab-ce`

默认下载latest版本

gitlab-ce 社区版
gitlab-ee 企业版

## 3. 运行命令

```bash
sudo docker run -d \
    --hostname localhost \
    --name gitlab \
    --restart always \
    --publish 22:22 --publish 80:80 --publish 443:443 \
    --volume $HOME/gitlab/data:/var/opt/gitlab \
    --volume $HOME/gitlab/logs:/var/log/gitlab \
    --volume $HOME/gitlab/config:/etc/gitlab \
    gitlab/gitlab-ce

# -d：后台运行
# -p：将容器内部端口向外映射
# --name：命名容器名称
# --volume：将容器内数据文件夹或者日志、配置等文件夹挂载到宿主机指定目录
```

## 获取gitlab root密码

```bash
sudo docker exec -it gitlab grep 'Password:' /etc/gitlab/initial_root_password
```

## 4. 结束

现在打开`localhost`输入用户名(root)/密码就可以访问了。


## TODO

安装gitlab-runner<https://docs.gitlab.com/runner/install/docker.html>