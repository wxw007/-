# CSS 面试题

### 清除浮动的方式有哪些？

1. 父级 `div` 设置 height
2. 结尾加空 `div` 元素设置clear:both
3. 父级`div`添加伪元素 ::after, 设置clear: both
4. 父级`div`定义overflow:hidden 或者 overflow: auto
5. 父级`div`也浮动，需要定义宽度
6. 父级`div`定义display:table

### box-sizing常用的属性有哪些？分别有什么作用？
box-sizing: content-box|border-box|inherit;

- content-box: 标准盒模型, 宽度盒高度只应用到元素内容, `padding和border不包含`在尺寸内。
- border-box: ie盒模型, 也叫怪异盒模型, 宽度和高度包含了`元素内容、padding 和 border`
