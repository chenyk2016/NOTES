# 移动端开发笔记

## 1.自适应布局方案
**1. REM**

文字自动缩放

原理: px = rem * (html的font-size)

html设置: 以375屏幕尺寸为基准 下设置字体100px;

26.6667vw = 100 / 375 * 100;

```css
{
  font-size: 26.6667vw;
}
```

如果设计稿正好是375，那么12px的字体设置为0.12rem，12px / 100 = 0.12rem;


> 使用 postcss-pxtorem

如果设计稿尺寸: 750; rootValue = 750 / 375 * 100 = 200
如果设计稿尺寸: 360; rootValue = 360 / 375 * 100 = 96
如果设计稿尺寸: 375; rootValue = 750 / 375 * 100 = 100


postcss-pxtorem": {
  rootValue: 100,
  propList: ["*"],
  unitPrecision: 8,
  replace: false,
}

> pxtorem 另一个使用方法是在文件级启用

安装 postcss-use ，然后在less文件顶部声明。rootValue设置同上。

```less
@use postcss-pxtorem(rootValue: 100);
```


**2. mata缩放**


## js和原声通信

1. 通过url拦截
