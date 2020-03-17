# 浏览器相关

### 介绍一下你对浏览器内核的理解
浏览器内核主要分为2部分: 渲染引擎和JS引擎。
1. 渲染引擎: 负责取得网页的内容（HTML、XML、图像等等）、整理讯息（例如加入CSS等），以及计算网页的显示方式，然后会输出至显示器或打印机。浏览器的内核的不同对于网页的语法解释会有不同，所以渲染的效果也不相同
2. JS引擎：解析和执行javascript来实现网页的动态效果。
> 最开始渲染引擎和JS引擎并没有区分的很明确，后来JS引擎越来越独立，内核就倾向于只指渲染引擎

### 浏览器中输入url到网页显示，整个过程发生了什么
1. 域名解析
2. 发起tcp三次握手
3. 建立tcp连接之后发起htttp请求
4. 服务器端响应http请求，浏览器得到html代码
5. 浏览器器解析html代码，并请求html代码中的资源
6. 浏览器对页面进行渲染呈现给用户

### cookie, localStorage和sessionStorage的区别
- 基本概念
  - cookie: cookie非常小，它的大小限制在4kb左右，它的主要用于保存登陆信息
  - localStorage: 是HTML5标准中新加入的技术，存储不会因为页面关闭而丢失
  - sessionStorage: 是HTML5标准中新加入的技术，存储随着页面关闭而丢失

- 三者区别
  - 数据上的生命周期的不同
    - cookie 一般由服务器生成，可设置失效时间，如果在浏览器端生成cookie，默认是关闭后失效
    - localStorage 除非被永久清除，否则永久保存
    - sessionStorage 仅在当前会话会有效，关闭页面或浏览器后被清除

  - 存放数据的大小不同
    - cookie 一般为4kb
    - localStorage 一般为5MB
    - sessionStorage 一般为5MB

  - 与服务器端通信不同
    - cookie 每次都会携带HTTP头中，如果使用cookie保存过多数据会带来性能问题
    - localStorage 仅在客户端（即浏览器）中保存，不参与和服务器的通信
    - sessionStorage 仅在客户端（即浏览器）中保存，不参与和服务器的通信

  - 易用性
    - cookie 需要程序员自己来封装，原生的cookie接口不够友好
    - localStorage 原生接口可以接受，可以封装来对Object和Array有更好的支持
    - sessionStorage 原生接口可以接受，可以封装来对Object和Array有更好的支持