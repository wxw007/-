# CSS 基础

## 清除浮动的方式有哪些？

1. 父级 `div` 设置 height
2. 结尾加空 `div` 元素设置clear:both
3. 父级`div`添加伪元素 ::after, 设置clear: both
4. 父级`div`定义overflow:hidden 或者 overflow: auto
5. 父级`div`也浮动，需要定义宽度
6. 父级`div`定义display:table

## box-sizing常用的属性有哪些？分别有什么作用？
box-sizing: content-box|border-box|inherit;

- content-box: 标准盒模型, 宽度盒高度只应用到元素内容, `padding和border不包含`在尺寸内。
- border-box: ie盒模型, 也叫怪异盒模型, 宽度和高度包含了`元素内容、padding 和 border`

## 对bfc规范的理解
BFC全称 Block Formatting Context，译为块级格式化上下文。
表现原则: 内部子元素再怎么翻江倒海，都不会影响外部的元素。

### 触发BFC条件
  1. `<html>` 根元素
  2. float 的值不为 none
  3. overflow 的值为 auto、scroll 或 hidden
  4. display 的值为 table-cell、table-caption 和 inline-block 中的任何一个
  5. position 的值不为 relative 和 static
> 只要元素符合上面的任意一个条件，就无需使用 clear: both 属性去清除浮动的影响，因此不要见到一个 `<div>` 元素就加个类似 .clearfix 的类名，否则只能暴露薄弱的css基本功 

### BFC解决哪些问题
1. 解决浮动元素令父元素高度塌陷的问题
2. 解决自适应布局的问题
3. 外边距垂直方向重合问题


## css实现水平垂直居中
1. 绝对定位元素的居中实现

```
.center-vertical{
    width: 100px;
    height: 100px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -50px; /*高度的一半*/
    margin-left: -50px; /宽度的一半*/
}
```
优点: 兼容性好

缺点: 需要提前知道元素的尺寸。如果不知道元素尺寸，这个时候就需要JS获取了

2. 使用 transform中的translate实现
```
.content{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate( -50%, -50%);
}
```
优点：无论绝对定位元素的尺寸是多少，它都是水平垂直居中显示的

缺点：就是兼容性问题

3. margin: auto 实现
```
.center-vertical{
    width: 100px;
    height: 100px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
}
```
> 注意: 上下左右均为 0 位置绝对定位。margin: auto;

4. flex 布局实现
```
.wrapper{
    display: flex;
    align-items: center; /*定义body的元素垂直居中*/
    justify-content: center; /*定义body的元素水平居中*/
}
```
5. display:table实现
```
// css部分
.parent{
    width: 300px;
    height: 300px;
    text-align: center;
    display: table;
}
.son{
    display: table-cell;
    vertical-align: middle;
}

// html部分

<div class="parent">
    <div class="son">nihaosssss</div>
</div>
```
> table 布局只能让行内元素水平垂直居中

6.  relative 水平垂直居中
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>实现水平垂直居中==相对定位实现</title>
    <style>
    html,body{
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }
    .content{
        width: 300px;
        height: 300px;
        background: orange;
        margin: 0 auto;/*水平居中*/
        position: relative;/*设置position*/
        top: 50%; /*百分比相对于父级尺寸计算！！！！*/
        /*margin-top: -150px;*/    /*第一种：margin-top*/
        transform: translateY(-50%);/*第二种：transform：转换*/
    }
    </style>
</head>
<body>
    <div class="content"></div>
</body>
</html>
```
## flex布局
参考: [阮一峰的网络日志](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)  

