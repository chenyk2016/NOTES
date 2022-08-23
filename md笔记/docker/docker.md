# docker 学习文档

- docker是一个隔离的服务。
- docker的每个服务类似于一个独立的服务器
- docker内部运行的环境和外部是隔离的，一些端口和配置文件等，可以通过映射到本地文件夹。

## 学习资源

[阮一峰，docker入门](http://www.ruanyifeng.com/blog/2018/02/docker-tutorial.html)
> 新版的docker有变化，更多的以docker官方的文档为准

## 命令行参数含义

```bash
# 示例：
sudo docker run -d \
    --hostname xxxx.xxxx.xx \
    --name gitlab \
    --restart always \
    --publish 30001:22 --publish 30000:80 --publish 30002:443 \
    --volume $HOME/gitlab/data:/var/opt/gitlab \
    --volume $HOME/gitlab/logs:/var/log/gitlab \
    --volume $HOME/gitlab/config:/etc/gitlab \
    gitlab/gitlab-ce

# -d：后台运行
# -p：将容器内部端口向外映射
# --name：命名容器名称
# --volume：将容器内数据文件夹或者日志、配置等文件夹挂载到宿主机指定目录
# --restart 重启信息
```

## 命令

```bash
# 1 验证docker是否安装成攻
docker version
# 或者
docker info

# 进入到某个容器的bash界面，类似于一个独立的服务器
sudo docker exec -it <app-name> /bin/bash
```

## 容器bash命令

```bash
# 重新配置
gitlab-ctl reconfigure

```

## 启动docker

```bash
service docker start

```
