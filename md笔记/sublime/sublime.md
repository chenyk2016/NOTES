[]
# sublime text

## 配置
1.添加项目时忽略文件夹
	`"folder_exclude_patterns": ["node_modules"],`
2.点击esc无法编辑（进入comment模式）;
	```node
	"ignored_packages":
	[
	"Vintage"
	]
	```
3.更改包位置
	删除默认位置安装包，目录下创建Data文件夹。


## snipptes
**scopes list**
	```node
		Here is a list of scopes to use in Sublime Text 2 snippets

		ActionScript: source.actionscript.2
		AppleScript: source.applescript
		ASP: source.asp
		Batch FIle: source.dosbatch
		C#: source.cs
		C++: source.c++
		Clojure: source.clojure
		CoffeeScript: source.coffee
		CSS: source.css
		D: source.d
		Diff: source.diff
		Erlang: source.erlang
		Go: source.go
		GraphViz: source.dot
		Groovy: source.groovy
		Haskell: source.haskell
		HTML: text.html(.basic)
		JSP: text.html.jsp
		Java: source.java
		Java Properties: source.java-props
		Java Doc: text.html.javadoc
		JSON: source.json
		Javascript: source.js
		BibTex: source.bibtex
		Latex Log: text.log.latex
		Latex Memoir: text.tex.latex.memoir
		Latex: text.tex.latex
		LESS: source.css.less
		TeX: text.tex
		Lisp: source.lisp
		Lua: source.lua
		MakeFile: source.makefile
		Markdown: text.html.markdown
		Multi Markdown: text.html.markdown.multimarkdown
		Matlab: source.matlab
		Objective-C: source.objc
		Objective-C++: source.objc++
		OCaml campl4: source.camlp4.ocaml
		OCaml: source.ocaml
		OCamllex: source.ocamllex
		Perl: source.perl
		PHP: source.php
		Regular Expression(python): source.regexp.python
		Python: source.python
		R Console: source.r-console
		R: source.r
		Ruby on Rails: source.ruby.rails
		Ruby HAML: text.haml
		SQL(Ruby): source.sql.ruby
		Regular Expression: source.regexp
		RestructuredText: text.restructuredtext
		Ruby: source.ruby
		SASS: source.sass
		Scala: source.scala
		Shell Script: source.shell
		SQL: source.sql
		Stylus: source.stylus
		TCL: source.tcl
		HTML(TCL): text.html.tcl
		Plain text: text.plain
		Textile: text.html.textile
		XML: text.xml
		XSL: text.xml.xsl
		YAML: source.yaml
	```


<br>

-------
## 插件

<h5>Trailing spaces</h5>

功能：检测并一键去除代码中多余的空格

简介：还在纠结代码中有多余的空格而显得代码不规范？或是有处女座情节？次插件帮你实现发现多余空格、一键删除空格、保存时自动删除多余空格，让你的代码规范清爽起来

使用：安装插件并重启，即可自动提示多余空格。一键删除多余空格：CTRL+SHITF+T（需配置），更多配置请点击标题。快捷键配置：在Preferences / Key Bindings – User加上代码（数组内）

<h5>IMESupport</h5>

功能：sublime中文输入法

简介：还在纠结 Sublime Text 中文输入法不能跟随光标吗？试试「IMESupport 」这个插件吧！目前只支持 Windows，在搜索等界面不能很好的跟随光标。


<h5>package syncing</h5>

功能：代码同步

简介：将配置文件导出到本地文件夹








## 遇到过的问题

1. sublime插入图片带宽和高
~~~js
def insert_dimensions(self, edit, scope, w, h):
改为：
def insert_dimensions(self, edit, scope):
~~~

