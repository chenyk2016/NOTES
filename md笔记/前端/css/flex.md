# flex

## 容器属性
~~~js
    flex-direction  || 主轴方向
    // row | row-reverse | column | column-reverse

    flex-wrap       || 换行方式
    // nowrap | wrap | wrap-reverse;

    flex-flow       || 主轴方向 和 换行方式简写

    justify-content || 主轴对齐方式(间隔方式) 
    //flex-start | flex-end | center | space-between | space-around;

    align-items     || 项目在交叉轴上的对齐
    // flex-start|flex-end|center|space-between|space-around|initial|inherit

    align-content   || 多轴的对齐方式
    //flex-start | flex-end | center | space-between | space-around | stretch
~~~

## 项目属性
~~~js
    order       || 排列顺序，越小越靠前
    flex-grow   || 方大比例，默认为0，即如果存在剩余空间，也不放大。
    flex-shrink || 缩小比例，默认为1，即如果空间不足，该项目将缩小。
    flex-basis  || length | auto 占据的主轴空间，可以设置像素值
    flex        || flex-grow, flex-shrink 和 flex-basis的简写
    align-self  || 允许单个项目有与其他项目不一样的对齐方式
    // auto | flex-start | flex-end | center | baseline | stretch
~~~

## 应用
1. 文字自动换行
    方法1： item设置属性：`flex-shrink: 1; `;
    方法2： item设置属性`flex-basis`(不为auto即可)

2. 上不固定，下方滚动。
    方法1： 

## 疑问
__1. flex的滚动条有性能问题？？？__


