// 一些公用的函数



/**
 * 环形进度条
* @param  {Object} opt   [配置项（参考def）]
 */
function progressRender( opt ) {
	if ( !opt.el ) {
		console.error( "请输入一个canvas对象" )
	}
	var def = {
		length: 100, // 圆环的直径
		r: 10, // 条的宽度
		percent: 100, // 进度
		downColor: "#ccc", // 底色
		upColor: "red", // 圆环颜色
		desc: '', // 下面的文字
		textColor: "#000", // 百分比文字颜色
		descColor: "#ccc" // 描述文字颜色
	};
	$.extend(def, opt);

	var canvas = def.el;
	var context = canvas.getContext("2d");
	canvas.width = def.length;
	canvas.height = def.length;
	var i = 0;
	var interval = setInterval(function() {
		i++;
		myRender(context, def.length, def.r, i, def.percent);
		if (i >= def.percent) {
			clearInterval(interval);
		}
	}, 10);

	function myRender(context, length, r, i, percent ) {
		context.clearRect(0, 0, length, length);

		// 底圆
		context.beginPath();
		context.lineWidth = r;
		context.strokeStyle = def.downColor;
		context.arc(length / 2, length / 2, length / 2-r , 0, 2 * Math.PI);
		context.stroke();
		context.closePath();

		// 进度
		context.beginPath();
		var gradient = context.createLinearGradient(length, 0, 0, 0);
		gradient.addColorStop("0", def.upColor);
		gradient.addColorStop("1.0", def.upColor);
		context.strokeStyle = gradient;
		context.lineWidth = r;
		context.arc(length / 2, length / 2, length / 2 - r, -0.5 * Math.PI, -0.5 * Math.PI + i * 0.02 * Math.PI, false);
		context.stroke();
		
		// 进度文字
		context.beginPath();
		context.font = "normal " + (length / 1.5 - 2.5 * r) / 2 *0.8 + "px 微软雅黑";
		context.fillStyle = def.textColor;
		var text = percent + "%";
		textwidth = context.measureText(text).width;
		if (this.textheight == null) {
			var div = document.createElement("div");
			document.body.appendChild(div);
			div.innerHTML = text ;
			div.style.fontSize = ((length / 2 - 2.5 * r) / 2) + "px";
			this.textheight = div.offsetHeight;
			div.parentNode.removeChild(div);
		}
		textheight = this.textheight;
		context.fillText(text, (length - textwidth) / 2, length / 2 + textheight / 4  );
		context.fill();

		// 描述文字
		context.textAlign = "left";
		context.fillStyle = def.descColor;
		context.font = "normal " + (length / 1.5 - 2.5 * r) / 2 * 0.6 + "px 微软雅黑";
		text = def.desc;
		if (this.textheight == null) {
			var div = document.createElement("div");
			document.body.appendChild(div);
			div.innerHTML = text ;
			div.style.fontSize = ((length / 2 - 2.5 * r) / 2) + "px";
			this.textheight = div.offsetHeight;
			div.parentNode.removeChild(div);
		}
		textwidth = context.measureText(text).width;
		context.fillText( text, (length - textwidth) / 2, length / 2 + textheight / 4 + textheight + 5 );
		context.closePath();
	}
}


//刷新页面时获取url参数
function GetRequest() {
	var url = location.search; //获取url中"?"符后的字串
	var theRequest = new Object();
	if (url.indexOf("?") != -1) {
		var str = url.substr(1);
		strs = str.split("&");
		for(var i = 0; i < strs.length; i ++) {
			theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
		}
	}
	return theRequest;
}

/**
 * 降()中的内容分隔取出()
 * @param  {str}
 * @return {name, unit}
 */
function separateUnit( str ){
	
	var value01 = '';
	var value02 = '';

	if ( str && str.indexOf('(') != -1 ) {
		value01 = str.slice(0, str.indexOf('(') );
		value02 = str.slice(str.indexOf('(')+1, str.indexOf(')', str.indexOf('(') ));
	}

	return {
		name: value01,
		unit: value02
	}
}

/**
 * 获取对象的多层键值, 支持对象和数据, 获取不到返回''
 * @param  {[obj]} obj [获取值的对象]
 * @param  {[type]} str [获取的路径字符串]
 * @return {[type]}     [description]
 */
function getVal( obj, str, noStr ){
	if ( !obj ) {
		return noStr || '';
	}
	var arr = str.replace(/^\[/, '').replace('[', '.').replace(']', '').split('.');
	var res = noStr || '';
	_isObj(obj, arr );
	return res;
	// 循环需要遍历的键
	function _isObj(obj, arr ){
		
		if ( !obj[arr[0] ] ) {
			return '';
		}else if( arr.length === 1 ){
			res = obj[arr[0]] ;
			// console.log( res )
		}else{
			var first = arr.shift();
			_isObj(obj[first], arr );
		}
	}
}

// 
// $('.fixd-tip')hide();

// 当前日期
function getNowDate (separate){
	var nowDate = new Date() ;
	var nowDateStr =  nowDate.getFullYear()+ separate +(nowDate.getMonth()+1)+ separate +nowDate.getDate();
}

// 更改导航标题
function changePageTitle( title ){
	$('title').html(title);
	if ( boncAppEngine.webNavigation.setNaviagtionTitle ) {
		boncAppEngine.webNavigation.setNaviagtionTitle( {
			navigationTitle: title
		} )
	}
}