# glab gitlab cli 工具

> 官网: https://glab.readthedocs.io/en/latest/

## glab命令

```bash
  alias
  api
  auth
  check-update
  ci
  completion
  config
  help
  issue
  label
  mr
  release
  repo
  user
  variable
  version
```

## alias 配置

自定义别名，方便快速操作

ci      pipeline ci
co      mr checkout
mrv     mr view
pr      mr create  --target-branch "$1"  --title "$2"
prdiff  mr diff "$1"
prl     mr list
prm     mr merge "$1"


> message中带有$时，需要变成/$ 转译一下
