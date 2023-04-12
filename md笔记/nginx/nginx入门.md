
## 安装
brew install nginx

安装信息

```
Docroot is: /usr/local/var/www

The default port has been set in /usr/local/etc/nginx/nginx.conf to 8080 so that
nginx can run without sudo.

nginx will load all files in /usr/local/etc/nginx/servers/.

To have launchd start nginx now and restart at login:
  brew services start nginx
Or, if you don't want/need a background service you can just run:
  nginx
```

配置文件: `/usr/local/etc/nginx/nginx.conf`


### nginx log使用报错

sudo chown -R www-data:www-data /var/log/nginx;
sudo chmod -R 755 /var/log/nginx;

## 命令
nginx -s stop       快速关闭Nginx，可能不保存相关信息，并迅速终止web服务。
nginx -s quit       平稳关闭Nginx，保存相关信息，有安排的结束web服务。
nginx -s reload     因改变了Nginx相关配置，需要重新加载配置而重载。
nginx -s reopen     重新打开日志文件。
nginx -c filename   为 Nginx 指定一个配置文件，来代替缺省的。
nginx -t            不运行，而仅仅测试配置文件。nginx 将检查配置文件的语法的正确性，并尝试打开配置文件中所引用到的文件。
nginx -v            显示 nginx 的版本。
nginx -V            显示 nginx 的版本，编译器版本和配置参数。

## nginx 获取ip


# 双重代理转发

1. 打开配置

```bash
log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                     '$status $body_bytes_sent "$http_referer" '
                     '"$http_user_agent" "$http_x_forwarded_for"';

```
# proxy_add_x_forwarded_for 会保留变成[ip, preIp, prePreIp]
# X-Real-IP 会被覆盖

2. location增加以下信息

```conf
# node
# https://www.yingsoo.com/news/posts/63235.html
server {
    listen 80;
    server_name i.wp.shtest.ke.com;
    root /Users/chen/work-mt/pt-php-project/service/oms/www;
    index  index.html index.htm index.php;

    # error_log /var/log/nginx/oms.log;
    if (!-e $request_filename) {
        rewrite ^/(.*) /index.php?$1 last;
    }

    location / {
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $http_host;
        proxy_set_header X-Nginx-Proxy true;
        proxy_http_version 1.1;
        proxy_set_header Connection "";

        # rewrite  ^/node/(.*)$  /$1  break;
        # 不需要考虑到负载的，就无需配置upstream节点。
        proxy_pass http://127.0.0.1:9000;
    }
}
```