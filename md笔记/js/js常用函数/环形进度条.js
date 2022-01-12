
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