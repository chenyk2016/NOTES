# glab gitlab命令行工具

> 同github的gh

## 安装

```bash
brew install glab
```

## 文档

> glab: https://glab.readthedocs.io/en/latest
> gh: https://cli.github.com/manual/gh_pr

## 使用

```bash
glab mr [list, create, close, reopen, delete, ...]
glab issue [list, create, close, reopen, delete, ...]
glab pipeline [list, delete, ci status, ci view, ...]
glab release
glab repo
glab label
glab alias

glab ... --help 查看帮助
```

## 使用示例

### 创建PR

glab mr create  -b develop -t [title]

-m 移除源分支

### 列出所有PR

glab mr list

### 同意PR

glab (mr merge) | accept [ID] -y

## alias 使用

### pr

- glab pr
- glab prl
- glab prm
- glab prdiff

  glab alias set pr 'mr create  --target-branch "$1"  --title "$2"'

  glab alias set prl 'mr list'

  glab alias set prm 'mr merge "$1"'

  glab alias set prdiff 'mr diff "$1"'
