(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{169:function(t,e,n){"use strict";n.r(e);var i=n(0),a=Object(i.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),n("p",[t._v("box-sizing: content-box|border-box|inherit;")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),n("p",[t._v("BFC全称 Block Formatting Context，译为块级格式化上下文。\n表现原则: 内部子元素再怎么翻江倒海，都不会影响外部的元素。")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),n("p",[t._v("优点: 兼容性好")]),t._v(" "),n("p",[t._v("缺点: 需要提前知道元素的尺寸。如果不知道元素尺寸，这个时候就需要JS获取了")]),t._v(" "),t._m(14),t._v(" "),t._m(15),n("p",[t._v("优点：无论绝对定位元素的尺寸是多少，它都是水平垂直居中显示的")]),t._v(" "),n("p",[t._v("缺点：就是兼容性问题")]),t._v(" "),t._m(16),t._v(" "),t._m(17),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._m(21),t._v(" "),t._m(22),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._m(26),t._v(" "),n("p",[t._v("参考: "),n("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("阮一峰的网络日志"),n("OutboundLink")],1)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"css-基础"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css-基础","aria-hidden":"true"}},[this._v("#")]),this._v(" CSS 基础")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"清除浮动的方式有哪些？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#清除浮动的方式有哪些？","aria-hidden":"true"}},[this._v("#")]),this._v(" 清除浮动的方式有哪些？")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ol",[n("li",[t._v("父级 "),n("code",[t._v("div")]),t._v(" 设置 height")]),t._v(" "),n("li",[t._v("结尾加空 "),n("code",[t._v("div")]),t._v(" 元素设置clear:both")]),t._v(" "),n("li",[t._v("父级"),n("code",[t._v("div")]),t._v("添加伪元素 ::after, 设置clear: both")]),t._v(" "),n("li",[t._v("父级"),n("code",[t._v("div")]),t._v("定义overflow:hidden 或者 overflow: auto")]),t._v(" "),n("li",[t._v("父级"),n("code",[t._v("div")]),t._v("也浮动，需要定义宽度")]),t._v(" "),n("li",[t._v("父级"),n("code",[t._v("div")]),t._v("定义display:table")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"box-sizing常用的属性有哪些？分别有什么作用？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#box-sizing常用的属性有哪些？分别有什么作用？","aria-hidden":"true"}},[this._v("#")]),this._v(" box-sizing常用的属性有哪些？分别有什么作用？")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("content-box: 标准盒模型, 宽度盒高度只应用到元素内容, "),e("code",[this._v("padding和border不包含")]),this._v("在尺寸内。")]),this._v(" "),e("li",[this._v("border-box: ie盒模型, 也叫怪异盒模型, 宽度和高度包含了"),e("code",[this._v("元素内容、padding 和 border")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"对bfc规范的理解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#对bfc规范的理解","aria-hidden":"true"}},[this._v("#")]),this._v(" 对bfc规范的理解")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"触发bfc条件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#触发bfc条件","aria-hidden":"true"}},[this._v("#")]),this._v(" 触发BFC条件")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ol",[n("li",[n("code",[t._v("<html>")]),t._v(" 根元素")]),t._v(" "),n("li",[t._v("float 的值不为 none")]),t._v(" "),n("li",[t._v("overflow 的值为 auto、scroll 或 hidden")]),t._v(" "),n("li",[t._v("display 的值为 table-cell、table-caption 和 inline-block 中的任何一个")]),t._v(" "),n("li",[t._v("position 的值不为 relative 和 static")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("只要元素符合上面的任意一个条件，就无需使用 clear: both 属性去清除浮动的影响，因此不要见到一个 "),e("code",[this._v("<div>")]),this._v(" 元素就加个类似 .clearfix 的类名，否则只能暴露薄弱的css基本功")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"bfc解决哪些问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bfc解决哪些问题","aria-hidden":"true"}},[this._v("#")]),this._v(" BFC解决哪些问题")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("解决浮动元素令父元素高度塌陷的问题")]),this._v(" "),e("li",[this._v("解决自适应布局的问题")]),this._v(" "),e("li",[this._v("外边距垂直方向重合问题")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"css实现水平垂直居中"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css实现水平垂直居中","aria-hidden":"true"}},[this._v("#")]),this._v(" css实现水平垂直居中")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("绝对定位元素的居中实现")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v(".center-vertical{\n    width: 100px;\n    height: 100px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    margin-top: -50px; /*高度的一半*/\n    margin-left: -50px; /宽度的一半*/\n}\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"2"}},[e("li",[this._v("使用 transform中的translate实现")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v(".content{\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate( -50%, -50%);\n}\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"3"}},[e("li",[this._v("margin: auto 实现")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v(".center-vertical{\n    width: 100px;\n    height: 100px;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    margin: auto;\n}\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("注意: 上下左右均为 0 位置绝对定位。margin: auto;")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"4"}},[e("li",[this._v("flex 布局实现")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v(".wrapper{\n    display: flex;\n    align-items: center; /*定义body的元素垂直居中*/\n    justify-content: center; /*定义body的元素水平居中*/\n}\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"5"}},[e("li",[this._v("display:table实现")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('// css部分\n.parent{\n    width: 300px;\n    height: 300px;\n    text-align: center;\n    display: table;\n}\n.son{\n    display: table-cell;\n    vertical-align: middle;\n}\n\n// html部分\n\n<div class="parent">\n    <div class="son">nihaosssss</div>\n</div>\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("table 布局只能让行内元素水平垂直居中")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"6"}},[e("li",[this._v("relative 水平垂直居中")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <meta http-equiv="X-UA-Compatible" content="ie=edge">\n    <title>实现水平垂直居中==相对定位实现</title>\n    <style>\n    html,body{\n        width: 100%;\n        height: 100%;\n        margin: 0;\n        padding: 0;\n    }\n    .content{\n        width: 300px;\n        height: 300px;\n        background: orange;\n        margin: 0 auto;/*水平居中*/\n        position: relative;/*设置position*/\n        top: 50%; /*百分比相对于父级尺寸计算！！！！*/\n        /*margin-top: -150px;*/    /*第一种：margin-top*/\n        transform: translateY(-50%);/*第二种：transform：转换*/\n    }\n    </style>\n</head>\n<body>\n    <div class="content"></div>\n</body>\n</html>\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"flex布局"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flex布局","aria-hidden":"true"}},[this._v("#")]),this._v(" flex布局")])}],!1,null,null,null);e.default=a.exports}}]);