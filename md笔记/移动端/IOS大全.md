# 1. translate3D 导致横向滚动元素消失。
问题描述：
    见`https://github.com/chenyk2016/app-20180102`;
    横向滚动条元素在屏幕外时，触发带 `-webkit-overflow-scrolling： touch; `属性的元素，会导致当带有滚动条的元素返回时，元素消失，滑动也不出现。
    andriod 不会发生此现象。

分析: 
    应是IOS下为优化性能， translate3D 导致视窗外的元素被剪切掉。

解决： 
    动态触发 `-webkit-overflow-scrolling`的`auto`属性。

    $('body').on('touchend', function(event) {
        $('body').css({'-webkit-overflow-scrolling': 'auto'  });
        setTimeout(function () {
            $('body').css({'-webkit-overflow-scrolling': 'touch'  });
        }, 100);
    });

# 2.