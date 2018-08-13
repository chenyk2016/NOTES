
# 操作

1. 安装淘宝镜像

    ~~~node
    	npm install -g cnpm --registry=https://registry.npm.taobao.org
    ~~~
2. 创建文件夹

    ~~~node
    	md webpack-demo && cd webpack-demo
    ~~~
3. 创建文件

    ~~~node
    	cd.>filename  
    ~~~
4. 创建项目

    ~~~node
    	npm init
    ~~~
5. 安装依赖

    ~~~node
    	npm install [--save][--save-dev] <name>
    ~~~

# loader

## 1. css引入

    ~~~node
    	npm install --save-dev style-loader css-loader
    ~~~
## 2. css资源引入

    ~~~node
    	npm install --save-dev file-loader
    ~~~

## 3. html资源引入

	npm i -D html-loader
		{
		  test: /\.(html)$/,
		  use: {
		    loader: 'html-loader',
		    options: {
		      attrs: [':data-src']
		    }
		  }
		}

## 4. url-loader 

	(作用相当于file-loader,当文件小于限制时，可以返回一个 DataURL。)
	npm install --save-dev url-loader
		{
			test: /\.(png|jpg|gif)$/,
			use: [
			  {
			    loader: 'url-loader',
			    options: {
			      limit: 8192
			    }
			  }
			]
		}



# 插件========================
## 1. 模板html

    npm install --save-dev html-webpack-plugin

## 2. 分离css

    npm install --save-dev extract-text-webpack-plugin
    
    配置：
	const ExtractTextPlugin = require('extract-text-webpack-plugin');
	rules: [
		{
			test: /\.css$/,
			use: extractCSS.extract([ 'css-loader', 'postcss-loader' ])
		},
		{
			test: /\.less$/i,
			use: extractLESS.extract([ 'css-loader', 'less-loader' ])
		},
	]
	plugins: [
	    new ExtractTextPlugin("styles.css"),
	]

## 3. 清理dist文件夹

    npm install clean-webpack-plugin --save-dev

## 4. 开启服务器

    npm install --save-dev webpack-dev-server
    devServer: {
    	contentBase: './dist'
    },

## 5. 开发模式服务器代理 proxy


# 文件分析
***
文章：
	* [文章-编译统计信息生成](https://www.cnblogs.com/libin-1/p/7027164.html)
		演示：<img src="./img/webpack-bundle-analyzer.gif" alt="" width="400px" height="400px">

配置：
	1. Webpack Stats JSON 分析文件
	
插件：
	1. webpack-bundle-analyzer
