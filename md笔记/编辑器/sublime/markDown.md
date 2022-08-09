# markDownEditing

## 使用

| 项目               | 使用                          |
| :----------------- | :---------------------------- |
| 配对               | ``                            |
| 列表               | * - + 1                       |
| 大段引用1111111111 | >或多个                       |
| 标题               | #                             |
| 代码块             | 换行+缩进                     |
| [TOC]              | 生成目录                      |
| img1               | ![]()                         |
| img引用            | ![avatar][doge] [doge]:imgsrc |

文末存储字符串语法：

## 键绑定

~~~note
	在Windows / Linux的   描述
	CtrlAltV    创建或粘贴剪贴板的内容作为选定文本的内联链接。
	CtrlAltR    创建或粘贴剪贴板的内容作为参考链接。
	ShiftWinK   将剪贴板的内容创建或粘贴为选定文本上的嵌入图像。
	AltB AltI   这些必然要大胆和斜体。他们在有和没有选择的情况下工作。如果没有选择，他们只会转换光标下的单词。如果选择已经是粗体/斜体，这些键绑定将取消选择/单元化选择。

	Ctrl1...6   这些将为标题添加相应数量的哈希标记。以空行和选定的文本与上述标题工具配合使用。如果您选择整个现有标题，则当前的散列标记将被删除并替换为您请求的标题级别。该命令尊重mde.match_header_hashes偏好设置。

	AltShift6   插入一个脚注。
	ShiftTab    折叠/展开当前部分。
	CtrlShiftTab    将所有部分折叠在某个级别的标题下。
	CtrlAltShiftPageUp CtrlAltShiftPageDown 转到相同或更高级别的上一个/下一个标题

	CtrlShiftPageUp CtrlShiftPageDown   转到上一个/下一个标题
	CtrlShiftH  打开主页
	CtrlShiftD  在光标下打开维基页面
	CtrlShiftJ  今天打开杂志页面
	CtrlShiftB  列出返回链接
~~~


# 插件

## Markdown Preview

	md 文档预览，可配合`liveLoading`使用

## Markdown Table Formatter

	创建格式化的table
	Ctrl+Alt+Shift+T

## Table Editor

	使用：设置语法为 table editor

## 其他

* 创建可折叠块：https://facelessuser.github.io/pymdown-extensions/