## 快捷键

跳转到某一行 `ctrl+g`

## 插件

| 介绍 | 名称 | 快捷键   |
| :------------- | :------------- |
| ATOM的汉化插件      | <a href="#simplified-chinese-menu">simplified-chinese-menu</a> |
| ATOM设置git同步     |  <a href="#sync-settings">sync-settings</a>    |
| 命令行插件     |  platformio-atom-ide-terminal    |
| js语法校验     |  linter-eslint   |


### sync-settings

准备:
1. Personal access tokens
2. gist id

使用:
```
# 备份
backup

# 更新
restore
```
## 配置

### 显示隐藏文件
tree


### emmit 支持vue jsx
keymap 中添加: 

然后重启

```
'atom-text-editor[data-grammar="text html vue"]:not([mini])':
    'tab': 'emmet:expand-abbreviation-with-tab'
    
'atom-text-editor[data-grammar="source js jsx"]:not([mini])':
    'tab': 'emmet:expand-abbreviation-with-tab'

```
