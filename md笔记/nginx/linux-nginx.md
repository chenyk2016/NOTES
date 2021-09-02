# nginx 基础

>> 参考：<https://juejin.cn/post/6844904144235413512#heading-8>

看看

```bash
# 看看
yum list | grep nginx

# 安装
yum install nginx

# 查看版本
nginx -v

# 安装位置
rpm -ql nginx

# 设置开机启动
systemctl enable nginx

# 管理
systemctl start nginx    # 启动 Nginx
systemctl stop nginx     # 停止 Nginx
systemctl restart nginx  # 重启 Nginx
systemctl reload nginx   # 重新加载 Nginx，用于修改配置后
systemctl enable nginx   # 设置开机启动 Nginx
systemctl disable nginx  # 关闭开机启动 Nginx
systemctl status nginx   # 查看 Nginx 运行状态

```

## 修改nginx配置
Nginx 的主配置文件是 `/etc/nginx/nginx.conf`