## 初始化

```js
const session = require("express-session")
let RedisStore = require("connect-redis")(session)

// redis@v4
const { createClient } = require("redis")
let redisClient = createClient({ legacyMode: true })
redisClient.connect().catch(console.error)

// // redis@v3
// const { createClient } = require("redis")
// let redisClient = createClient()

// // ioredis
// const Redis = require("ioredis")
// let redisClient = new Redis()

app.use(
  session({
    store: new RedisStore({ client: redisClient }),
    saveUninitialized: false,
    secret: "keyboard cat",
    resave: false,
  })
)
```

## 设置

```js
export function login (req, res) {
  const { username, password } = req.query;

  if (username && password === "123") {
    // 设置session
    req.session.username = username;
    if (req.session.view) {
      req.session.view++;
    } else {
      req.session.view = 1;
    }
    req.session.save(); // 保存数据，即使服务重启也能恢复
    res.send('登录成功');
  } else {
    res.send('用户名或密码错误');
  }
}

export function logout (req, res) {
  // 清除session
  req.session.destroy(() => {
    res.send("登出成功");
  });
}


```

## 鉴权

```javascript
export function auth(req, res, next) {
  if (!req.session.username) {
    return next(new Error("oh no")) // handle error
  }
  if (req.session.view) {
    req.session.view++;
  } else {
    req.session.view = 1;
  }
  next() // otherwise continue
}
```