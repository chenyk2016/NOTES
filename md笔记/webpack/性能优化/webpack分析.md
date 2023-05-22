

## 编译速度分析 peed-measure-webpack5-plugin

### 安装

```bash
npm install speed-measure-webpack5-plugin -D
```

### 配置

```bash
const SpeedMeasureWebpack5Plugin = require('speed-measure-webpack5-plugin')
const smwp = new SpeedMeasureWebpack5Plugin()

# 使用smwp.wrap()将对象包裹起来

smwp.wrap(webpackConfig)
```

## 文件体积进行监控分析 webpack-bundle-analyzer
