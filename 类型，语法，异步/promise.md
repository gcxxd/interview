# Promise
> 如果我们不把程序的continuation传给第三方，而是第三方给我们提供了解其任务何时结束的能力，然后由我们自己的代码来决定下一步做什么，这种范式就被称为Promise。
> 从外部看，由于promise封装了依赖于时间的状态（即等待底层值的完成或拒绝）。所以promise本身是与时间无关的，因此promise可以按照可预测的方式组成（组合），而不用关心时序或底层的结果。

# Promise的最重要概念
> Promise一旦决议，此时它就变成了不变值，可以根据需求多次查看（访问？）。可以把这个Promise安全的传递给第三方,它不会再被修改。
> Promise只会被决议一次，接受第一次决议，所有通过then注册的回调函数也只会被调用一次。
> Promise最多只有一个决议值(完成或拒绝),如果没有用任何值显示决议，那么这个值就是undefined
> 另一个角度：一种在异步任务中作为两个或更多步骤的流程控制机制,时序上的this-then-that。

##  promise对象
> new Promise(function() {  })，中传入的函数会立即执行，他有两个参数，resolve和reject这些是promise的决议函数
> 如果向Promise.resolve()传递一个非Promise,非thenable的立即值，就会得到一个用这个值填充的Promise。此外，如果传入一个非Promise但是thenable的值而且展开过程会持续到提取出一个具体的非类 Promise 的最终值。
> Promise.resolve()提供了一个可信任的Promise封装工具，如果用Promise.resolve为函数的返回值做一层封装，可以把函数的调用规范定义为一个良好的异步任务。
```
Promise.resolve( foo( 42 ) )
.then( function(v){
 console.log( v );
} ); 
```

## 具有then方法的鸭子类型(根据一个值的形态(即具有哪些属性)来对这个值的类型做出一些假定，这种类型检查一般称作鸭子类型)
> 识别Promise(或行为类似于Promise的)就是定义某种称为thenable的东西，将其定义为任何具有then方法的对象或函数。这样的值就是Promise一致的thenable

## 错误用法
> 永远都不应该依赖于不同Promise间回调的顺序和调度


## 链式流
> 使链式流程控制可行的 Promise 固有特性
+ 调用Promise的then会自动创建一个新的Promise对象从调用返回
+ 在完成或拒绝处理函数内部，如果返回一个值或抛出一个异常，新返回的Promise就相应的决议。
+ 如果完成或拒绝处理函数返回一个Promise,它将会被展开,这样一来不管他的决议值是什么，都会成为当前then返回的连接Promise的决议值。

## Promise API概述

### new Promise()构造器
> 必须提供一个函数回调，这个函数接受两个函数回调以支持Promise的决议，resolve,reject。如果传给resolve的是一个非Promise，非thenable的立即值，那么这个Promise就会用这个值完成，反之这个值会被递归展开，这个Promise会取其最终决议值或状态

### 

## Promise.race([])
> 接受一个数组（可以是Promise, thenable,立即值）,只要有一个Promise决议完成，Promise.race()就会完成，任何一个Promise拒绝，他就会为拒绝。永远不能传递一个空数组

