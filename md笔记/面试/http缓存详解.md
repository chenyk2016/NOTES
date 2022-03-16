## http缓存

分为强缓存和协商缓存

- 强缓存浏览器返回状态码200
- 协商缓存状态吗304

关闭缓存:

Catch-Control: no-store;

### 强缓存

#### Cache-Control

缓存请求指令:

```
Cache-Control: max-age=<seconds>
Cache-Control: max-stale[=<seconds>]
Cache-Control: min-fresh=<seconds>
Cache-control: no-cache
Cache-control: no-store
Cache-control: no-transform
Cache-control: only-if-cached
```

缓存响应指令:

```
Cache-control: must-revalidate
Cache-control: no-cache
Cache-control: no-store
Cache-control: no-transform
Cache-control: public
Cache-control: private
Cache-control: proxy-revalidate
Cache-Control: max-age=<seconds>
Cache-control: s-maxage=<seconds>
```

可缓存性:
