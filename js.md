# js基础

### js数据数据类型
1. 原始类型 **(6个)**
- boolean
- null
- undefined
- string
- number
- symbol

> 原始类型都是按值传递

2. 引用类型
- object

### 判断数据类型
- `typeof` 对于原始类型来说，除了 `null` 都可以显示正确的类型
- `typeof` 对于对象来说，除了函数都会显示 `object`，所以说 `typeof` 并不能准确判断变量到底是什么类型
> `typeof` 只能判断原始类型
- `instanceof`用来判断A是否为B的实例，表达式为：A `instanceof` B，如果A是B的实例，则返回true，否则返回false。`instanceof`检测的是原型，内部机制是通过判断对象的原型链中是否有类型的原型。
> `instanceof` 只能用来判断两个对象是否属于实例关系， 而不能判断一个对象实例具体属于哪种类型。
- `constructor`: ' '.constructor === String
> null 和 undefined 无constructor，这种方法判断不了。 如果自定义对象，开发者重写prototype之后，原有的constructor会丢失。
- `Object.prototype.toString()`   toString()是Object的原型方法，调用该方法，默认返回当前对象的[[Class]]。这是一个内部属性，其格式为[object Xxx],其中Xxx就是对象的类型。对于`Object`对象，直接调用toString()就能返回[object Object],而对于其他对象，则需要通过call、apply来调用才能返回正确的类型信息。
 ```
Object.prototype.toString.call('') // [object String]
 ```
 `Object.prototype.toString()` 是最推荐的

### this

#### 普通函数

```
function foo() {
  console.log(this.a)
}
var a = 1
foo()

const obj = {
  a: 2,
  foo: foo
}
obj.foo()

const c = new foo()
```
- 对于直接调用 foo 来说，不管 foo 函数被放在了什么地方，this 一定是 window
- 对于 obj.foo() 来说，我们只需要记住，谁调用了函数，谁就是 this，所以在这个场景下 foo 函数中的 this 就是 obj 对象
- 对于 new 的方式来说，this 被永远绑定在了 c 上面，不会被任何方式改变 this

#### 箭头函数
```
function a() {
  return () => {
    return () => {
      console.log(this)
    }
  }
}
console.log(a()()())
```
首先箭头函数其实是没有 this 的，箭头函数中的 this 只取决包裹箭头函数的第一个普通函数的 this。在这个例子中，因为包裹箭头函数的第一个普通函数是 a，所以此时的 this 是 window。另外对箭头函数使用 bind 这类函数是无效的。

最后种情况也就是 bind 这些改变上下文的 API 了，对于这些函数来说，this 取决于第一个参数，如果第一个参数为空，那么就是 window。

如果对一个函数进行多次 bind，那么上下文会是什么呢？
```
let a = {}
let fn = function () { console.log(this) }
fn.bind().bind(a)() // => ?
```

不管我们给函数 bind 几次，fn 中的 this 永远由第一次 bind 决定

#### this的优先级
首先，new 的方式优先级最高，接下来是 bind 这些函数，然后是 obj.foo() 这种调用方式，最后是 foo 这种调用方式，同时，箭头函数的 this 一旦被绑定，就不会再被任何方式所改变。

![this流程图](./images/1.jpg)
