## 快捷键

跳转到某一行 `ctrl+g`

## 插件

| 介绍 | 名称 | 快捷键   |
| :------------- | :------------- |
| ATOM的汉化插件      | <a href="#simplified-chinese-menu">simplified-chinese-menu</a> |
| ATOM设置git同步     |  <a href="#sync-settings">sync-settings</a>    |
| 命令行插件     |  platformio-atom-ide-terminal    |
| js语法校验     |  linter-eslint   |

小地图	minimap
汉化	simplified-chinese-menu
时间菜单	tree-view-finder	ctrl+alt+o
代码检查	linter linter-jshint
javascript代码格式化	linter-js-standard
文件图标	file-types和file-types-icon
代码提示	emmet
路径提示	autocomplete-paths autocomplete-modules
代码格式化	atom-beautify	 Crtl + Alt + B 
Jq提示	jquery-snippets
取色器	color-picker
JS提示	atom-ternjs
用于执行命令并显示输出	terminal-panel	Ctrl + `
注释说明	docblockr
JS提示	javascript-snippets
文件图标	file-icons

函数注释doc docblockr https://github.com/nikhilkalige/docblockr

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
