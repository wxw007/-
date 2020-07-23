# 多个容器滚动同步

## 背景
在实际工作中，会遇到一种场景，多个容器需要同步滚动--也就是滚动其中一个，另外几个容器也会同步的滚动以保证这几个容器所显示的内容都是相关的。
例如：
- markdown编辑器--左边编辑，右边预览
- 同一个月的多个报表(每一天为一行)--把其中一个报表滚动到20日，另外几个报表也会滚动到20日的数据

![示意图](https://img-blog.csdn.net/20171221175252440?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvRGVlcExpZXM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

## 例子
以下的内容，都会以 2 个容器为例

```
// 容器1
<div id="left"></div>

// 容器2
<div id="right"></div>
```

## 常规解决

分别给这两个容器绑定滚动事件

```
// 获取 dom
var left = document.getElementBy('left');
var right = document.getElementBy('right');

// 绑定事件
left.addEventListener('scroll', function(){
    box.scrollTop = right.scrollTop
})

right.addEventListener('scroll', function(){
    box.scrollTop = box1.scrollTop
})
```

以上确实能实现两个容器同步滚动，并且拉动滚动条滚动效果也是正常，但是**当我们用鼠标滚轮进行滚动的时候，会发现非常难以滑动，像是被什么东西卡住一样**

**原因： 当左边滚动的时候，触发了左边的滚动事件，于是右边跟随滚动，但是与此同时右边的跟随滚动也是滚动，于是也触发了右边的滚动，于是左边也要跟随右边滚动…然后就进入了一个类似于相互触发的情况，所以就会发现滚动得很吃力。**

## 解决思路

由于卡顿产生的原因是因为左右两边的滚动事件一直互相触发，所以我们只要保证在当前滚动的容器触发事件，而另外一个联动的容器不触发事件就好了。主要分以下两步

1. 确定当前哪个是主动滚动

滚动的时候，需要我们鼠标停留在上面，所以用mouseover事件可以确定当前的容器。

2. 在绑定事件之前先移除其他容器的事件，防止相互触发，所以整个滚动过程中，始终只有鼠标停留的容器有事件监听，其余容器是没有事件的。

```
function combinedScroll() {

    // 获取元素
  var left = document.getElementById('left');
  var right = document.getElementById('right')

  // 绑定左边的滚动事件
  function bindEventLeft() {
      removeEventRight() //关键点-先解绑右边
      left.addEventListener('scroll', leftScroll)
  }
  // 绑定右边的滚动事件
  function bindEventRight() {
      removeEventLeft() //关键点-先解绑左边
      right.addEventListener('scroll', rightScroll)
  }

//   解绑左边的滚动事件
  function removeEventLeft() {
      left.removeEventListener('scroll', leftScroll)
  }

//   解绑右边的滚动事件

  function removeEventRight() {
      right.removeEventListener('scroll', rightScroll)
  }

  // 左边滚动时候，右边同步
  function leftScroll() {
      var a = left.scrollTop;
      right.scrollTop = a
  }

  // 右边滚动时候，左边同步
  function rightScroll() {
      var a = right.scrollTop;
      left.scrollTop = a
  }
  left.addEventListener('mouseover', bindEventLeft)
  right.addEventListener('mouseover', bindEventRight)
}

// 调用
combinedScroll()
```

## 结束语
在实际场景中，可能有时候不只有2个容器，这时候我们可以对函数进行改写和封装。

参考: https://blog.csdn.net/DeepLies/article/details/78854032







