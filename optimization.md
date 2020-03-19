# 性能优化

### 异步加载script,提高前端性能(defer和async属性的区别)
> 原文链接：https://blog.csdn.net/qq_19644471/article/details/81949680
#### 异步加载script的好处
为了加快首屏响应速度,前端会采用代码切割、按需加载等方式优化性能。异步加载script也是一种前端优化的手段。

就好比如果我的页面其中一个功能需要打开地图,但是地图的js插件包是非常大的,而如果用户不用地图功能的时候,我们当然不能再给它加载js地图包,白白让他多花等待时间岂不是很冤枉!于是我们可以动态插入script,当用户点击了某个按钮的时候,再新建script标签,引入地图js资源。



#### 异步加载script的方式
1. 按需加载js
```
getMap.onclick = function(){
    //获得需要插入的位置
    var oDiv = document.getElementById('div');
    //异步创建script
    var script = document.createElement('script');

    script.src = 'https://map.baidu.com/...'

    oDiv.appendChild(script);
}

```

2. script标签加上defer或async
   - 没有defer或async属性，浏览器会立即加载并执行相应的脚本。也就是说在渲染script标签之后的文档之前，不等待后续加载的文档元素，读到就开始加载和执行，此举会阻塞后续文档的加载
   - 有了async属性，表示后续文档的加载和渲染与js脚本的加载和执行是并行进行的，即异步执行
   - 有了defer属性，加载后续文档的过程和js脚本的加载(此时仅加载不执行)是并行进行的(异步)，js脚本的执行需要等到文档所有元素解析完成之后，DOMContentLoaded事件触发执行之前。
   > 1. defer和async在网络加载过程是一致的，都是异步执行的 
     2. 两者的区别在于脚本加载完成之后何时执行，可以看出defer更符合大多数场景对应用脚本加载和执行的要求
     3. 如果存在多个有defer属性的脚本，那么它们是按照加载顺序执行脚本的；而对于async，它的加载和执行是紧紧挨着的，无论声明顺序如何，只要加载完成就立刻执行，它对于应用脚本用处不大，因为它完全不考虑依赖。

3. 通过 ajax 去获取 js 代码，然后通过 eval 执行

4. 创建并插入 iframe，让它异步执行 js
```
var iframe = document.createElement('iframe'); 
document.body.appendChild(iframe); 
var doc = iframe.contentWindow.document; 
doc.open().write('<body οnlοad="insertJS()">'); 
doc.close();
```