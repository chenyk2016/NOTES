
## babel
```
{
  "presets": [
      ["@babel/preset-env", {
        "loose": false,
        "modules": "commonjs",
        "spec": true,
        "targets": { // 支持的浏览器, 可以放在 package.json 里面
            "browsers": [
                "last 3 Chrome versions",
                "last 3 Firefox versions",
                "Safari >= 10",
                "Explorer >= 11",
                "Edge >= 12",
                "iOS >= 10",
                "Android >= 6"
            ]
        },
        "useBuiltIns": "usage", // 此选项配置如何@babel/preset-env处理polyfill。 不是很懂？？
        "debug": false
      }]
  ],
  "plugins": [
    "@babel/transform-runtime",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-object-rest-spread",
    "babel-plugin-dynamic-import-webpack",
  ],
  "comments": false
}

```

### babel-preset

### @babel/preset-env
根据配置编译对应环境

### babel plugins
dynamic-import-node 支持异步import()

@babel/transform-runtime 一个插件，可重新使用Babel注入的帮助程序代码以节省代码大小。
@babel/plugin-proposal-object-rest-spread 结构赋值
