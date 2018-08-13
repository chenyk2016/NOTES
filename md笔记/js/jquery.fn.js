/**
 * 弹窗类（用new声明实例）
 * 下一个弹窗弹出时，会删除上一个弹窗
 * 有以下子方法
 * 
 * [loading 加载中弹窗]
 * @param  {[String]} text [提示文字]
 *
 * [warn 警告弹窗]
 * @param  {[String]} text [提示文字]
 * @param  {[Number]} interval [消失时间]
 * 
 * [close 关闭弹窗]
 * @param  {[String]} text [提示文字] 
 * 
 */
(function () {
	function MyPop(){};

	MyPop.prototype = {
		loading: function (text){
			this.close();
			this.model();
			var _text = text || '正在加载...';
			$('body').append(
				'<div class="my_pop_wrap">'+
					'<div class="my_pop_container my_pop_loading">'+
						'<div class="my_pop_text">'+
							_text +
						'</div>'+
					'</div>'+
				'</div>'
			);
		},
		// 膜太层
		model: function (){
			$('body').append('<div class="my_pop_model"></div>');
		},
		close: function (){
			$(".my_pop_wrap").remove();
			$(".my_pop_model").remove();
		},
		warn: function (text, interval){
			var _text = text || '加载出错了！';
			var _interval = interval || 1000;
			var _self = this;
			this.close();
			$('body').append(
				'<div class="my_pop_wrap">'+
					'<div class="my_pop_container my_pop_error">'+
						'<div class="my_pop_text">'+
							_text +
						'</div>'+
					'</div>'+
				'</div>'
			);
			setTimeout(function () {
				_self.close();
			}, _interval);
		}
	};

	window.MyPop = MyPop;
})(window);

var myPop = new MyPop();


$.fn.extend({
	/**
	 * [长按弹窗]
	 * @param  {Function} cb       [触发事件的回调]
	 * @param  {[Number]} interval [长按时间]
	 * @return {[type]}            [description]
	 */
	holdTouch: function (cb, interval) {
		return this.each(function() {
			var timer;
			var _interval = interval || 1000;
			var _this = this;
			$(this).on('touchstart', function(ev) {
				timer = setTimeout(function () {
					cb && cb.call(_this);
				}, _interval);

			}).on('touchend', function(ev) {
				clearInterval( timer );
			}).on('touchmove', function(ev) {
				clearInterval( timer );
			})
		});
	}
});

/**
 * 表格排序
 * @param  {$el}
 * @return {[type]}
 */
function tableSort( $el ){
	$el.find('.order').click(function (ev) {
		if ($(this).hasClass('order_down')) {
			$(this).removeClass('order_down').addClass('order_up').siblings().removeClass('order_down').removeClass('order_up');
			sortFn( $(this).parents('table'), $(this).index() );
		}else {
			$(this).addClass('order_down').removeClass('order_up').siblings().removeClass('order_down').removeClass('order_up');
			sortFn( $(this).parents('table'), $(this).index(), 'desc' );
		}
	});
}

function sortFn( $table, tdI, desc ){
	var tr = $table.find('tr');
	tr = tr.not(tr.eq(0))
	
	var arr = [];
	var	resTr = [];
	tr.each(function (index, ele) {
		if ( $(ele).find('td').length != 0 ) {
			arr.push({
				index: index,
				value: parseFloat( $(ele).find('td').eq(tdI).text().replace(',', '') )
			})
		}
		
	});
			
	arr.sort(function (item1, item2) {
		if (desc === 'desc') {
			return item2.value - item1.value
		}else{
			return item1.value - item2.value
		}
	});
	// console.log( arr )
	arr.forEach( function(item, index) {
		resTr.push( tr.eq(item.index) );
	});

	// console.log(  tr)
	// console.log( resTr )

  tr.remove();
  $table.find('tbody').append( resTr );
}