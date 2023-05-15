# npm包本地调试方案

https://github.com/wclr/yalc

``````BASH
# 本地发布
yalc publish

# 本地发布-并更新依赖这个资源的仓库
yalc publish --push

# 使用的地方，添加仓库
yalc add my-package

#更新使用的仓库资源
yalc push

#更新yalc依赖资源，不加包名，更新所有
yalc update ma-package

```
