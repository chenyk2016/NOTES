# Http

- <https://vue3js.cn/interview/http/HTTP_HTTPS.html>
- https代理的实现
  - 自定义证书，所以需要客户端自己认证。
    - IOS允许使用自定义证书，
    - 安卓高版本应用可以自定‘【义设置不允许使用自定义证书，此时就无法实现https的代理
  - 和客户端通过自己的证书通信
  - 和服务端用服务端的证书通信
  - 这样就可以拦截https和解析请求了
- https和http怎么实现安全性的 (TODO 理解的不是很透彻)
  - <https://vue3js.cn/interview/http/HTTPS.html>
  - 对称加密：采用协商的密钥对数据加密
  - 非对称加密：实现身份认证和密钥协商
  - 摘要算法：验证信息的完整性
  - 数字签名：身份验证
- 三次握手
  - 客服端发送
  - 服务端接收，测试客服端接收能力
  - 客户端接受，发送信号。
- 四次挥手
  - 客户端，我要断开了
  - 服务端，收到，我确认下，发给你的数据处理完了没
  - 服务端，我处理完了，可以关闭
  - 客户端，我关闭了，服务端收到之后，关闭

## https

- http
  - HTTP + tcp + ip
- https
  - http + SSL|TLS + tcp + ip
  - 设计原理
    - 对成加密加密性能高
    - 非对称加密安全
    - 摘要算法保证数据完成
    - 证书保证公钥的可信

https数据传输过程:

- 客户端发起请求
- 服务端收到，并返回证书证书和加密算法
- 客户端收到证书，
  - 验证证书有效性
  - 利用数字签名验证数据没被修改
  - 生成对称密钥发送给服务端
  - 后续就可以愉快的用秘钥加密数据传输了

## websocket

websocket 和http有部分交集

只是tcp连接建立之后就不断开了。

## http和https的区别

1. http数据是明文传输的
2. http默认端口80，https默认443
3. HTTPS 由于需要设计加密以及多次握手，性能方面不如 HTTP。 **多次握手？？**
4. HTTPS需要SSL，SSL 证书需要钱，功能越强大的证书费用越高

## http1.0、1.1、2.0的区别

### http1.0

每次请求都需要与服务器建立一个TCP连接
如果需要建立长连接，需要设置一个非标准的Connection字段 Connection: keep-alive

### http1.1

http1.1，默认支持长连接（Connection: keep-alive），即在一个TCP连接上可以传送多个HTTP请求和响应，减少了建立和关闭连接的消耗和延迟

- 引入了更多的缓存控制策略，如If-Unmodified-Since, If-Match, If-None-Match等缓存头来控制缓存策略
- 引入host，实现了在一台WEB服务器上可以在同一个IP地址和端口号上使用不同的主机名来创建多个虚拟WEB站点
- 引入range，允许值请求资源某个部分

### http2.0

- 多路复用
  - http1并发多个请求，必须使用多个 TCP 链接，而且一个域名下TCP限制到了6-8个
  - 一个TCP链接可以承载任意数量的请求
  - 而且不用按照顺序一一对应，这样就避免了”队头堵塞”
- 二进制分帧
  - 相对HTTP 1.x 使用的文本格式，二进制解析起来更高效
- 首部压缩
  - 客户端和服务器端使用“首部表”来跟踪和存储之前发送的键－值对
  - 而且只发送差异数据，而不是全部发送，从而减少头部的信息量
- 服务器推送
  - <https://www.ruanyifeng.com/blog/2018/03/http2_server_push.html>
  - 服务器主动推送文件到客户端

## http缓存

分为强缓存和协商缓存

- 强缓存浏览器返回状态码200
  - Cache-Control
    - no-store（强缓存/协商缓存都不使用）
    - no-cache（强缓存不使用，使用协商缓存）
    - public （中间代理｜post等请求也可以被缓存）post可缓存待验证，实践下来不会缓存
    - private (中间代理、CDN 等不能缓存此响应)
    - max-age=<seconds> 最大缓存周期
    - s-maxage=<seconds> 覆盖max-age或者Expires头，但是仅适用于共享缓存(比如各个代理)，私有缓存会忽略它。
    - max-stale[=<seconds>] 愿意接受过期资源
  - Expires
    - 过期时间
- 协商缓存状态码304
  - ETag/If-None-Match (响应头/请求头)
    - 跟随资源变化
  - Last-Modified/If-Modified-Since (响应头/请求头)
    - 文件最后修改时间
      - 如果文件修改时间频繁变化，但是内容不变时，使用etag更好

关闭所有缓存:

`Cache-Control: no-store;`

关闭强制缓存，协商缓存可以生效:

`Cache-Control: no-cache;`


优先级是: Cache-Control > Expires > ETag/If-None-Match = Last-Modified/If-Modified-Since

get不可以使用强缓存，post请求不会使用任何缓存

## OSI七层协议

## TCP/IP协议

- 应用层
- 传输层
- 网络层
- 接口层

## DNS

## CDN