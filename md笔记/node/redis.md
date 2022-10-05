# redis

## mac安装

https://redis.io/docs/getting-started/installation/install-redis-on-mac-os/

```bash
# 在窗口启动
redis-server

# 后台启动
brew services start redis

# 查看启动状态
brew services info redis

# 停止
brew services stop redis

# Connect to Redis
redis-cli
```

## nodejs redis client

https://github.com/redis/node-redis

createClient客户端配置: https://github.com/redis/node-redis/blob/master/docs/client-configuration.md

```bash
npm install redis
```

### nodejs redis报错: `SyntaxError: Unexpected token '.'`

node版本低，需要升级到node14以上。
