# 基础类型
> number, string, boolean, undefined, null, symbol
+ 基础类型检测
> typeof，注意typeof null === object
> object.prototype.toString.call(); 返回[object 所有类型]

# 全局作用域下声明的变量和方法都可以用window对象来访问

# js假值
> undefined, null, '', false, nan, 0, -0

# 说说什么是原型和原型链
> 在js中，每个对象都有一个内置的原型属性。这个属性指向对象的原型，对象的默认原型是Object.prototype。原型链就是说，在Js中，设置或者访问一个对象的属性时，如果在这个对象上没有，那么就会去这个对象的原型对象上去找，原型对象上没有那么就会从原型对象的原型对象上去找，就这样组成了一个原型链，所有原型链的终点是object.prototype.
在js中，所有的函数都有一个prototype属性，这个属性指向函数的原型，函数的原型中同时也有一个constructor属性，指向函数本身。
> 用构造函数的方式声明一个对象时，被声明对象的原型会指向构造函数的prototype。

# es6中map和forEach的区别
> 1.forEach没有返回值，map返回经过处理的新数组.2.forEach()允许callback更改原始数组的元素。map()返回新的数组。

# js的事件捕获和事件冒泡
> 事件捕获是事件由document到目标元素自上而下的触发事件,事件冒泡是自冒泡元素自下而上的触发事件

# var,let,const的区别
+ var定义的变量作用域存在于 整个封闭函数，是全域的，并且不论位于当前作用域的哪里都会提升到作用域的顶部。
+ let定义的变量具有块及作用域，也存在变量提升，但是在声明或初始化之前不允许访问
+ const用于定义常量，必须初始化，具有块级作用域。

# es6暂时死区
> 在用let和const声明变量时，在代码块中不能在let声明之前引用，虽然存在变量提升并且作用域里已经创建了变量，但是还没进行词法绑定。在作用域创建了变量到可以被访问之间的这一段叫暂时性死区。

# js数据在内存中的存储方式
> 内存中分为栈区和堆区，基本数据类型存在栈区，复杂数据类型存在堆区。

# Symbol的作用
> 用于在全局作用域中定义一个不重复的值,基本数据类型

# typeof和instanceof的区别
+ typeof是一元操作符只能判断基础数据类型和复杂数据类型，一般只用来判断变量是否被定义
+ instanceof是二元操作符，一般用法object instanceof constructor,用来检测对象的整条原型链上是否有指向构造函数的对象。应该用来判断自定义对象之间的关系
+ 如果要判断数据类型，则应该用Object.prototype.toString.call();

# 浅拷贝与深拷贝 (待补充深拷贝函数)
+ 深/浅拷贝是相对的，如果对于简单的对象（只有一级属性的），那么Object.assign(), 解构赋值[...a],JSON.parse(JSON.stringfy())都可以实现。
+ 如果要实现彻底的深拷贝，需要编写深拷贝函数

# js中的this指向
> this是在函数运行时绑定的，取决于函数调用时的各种条件
+ new（构造函数）绑定，如果构造函数没有返回一个新对象，那么就绑定到函数对象上，反之绑定到返回的新对象上
+ 显示绑定，用call,apply,bind绑定
+ 隐式绑定，绑定到函数调用栈最顶端的调用对象上
+ 默认绑定，严格模式下无法绑定，为undefined，非严格模式下绑定到全局对象

# call,apply,bind的区别
> call,apply,bind都是用来改变函数内部的this指向的。call和apply都是立即执行，bind则会返回一个函数

# js模块化
## commonjs（node环境服务端）同步加载
> nodejs应用有模块组成，采用commonjs规范。每一个文件就是一个模块，拥有自己独立的作用域和变量/方法。每个模块内部,module变量代表当前模块，modules是一个对象，它的exports属性是对外的接口。加载一个模块实际上就是加载该模块的module.exports属性。用require来加载模块。


## AMD(浏览器环境客户端) 异步加载
> require(['需要加载的模块'], () => { 模块加载完成后的回调函数 })

## es6模块化
> es6也是把一个文件当做一个模块，es6通过import和export来导入/导出模块、
+ export作用是给当前模块对象添加属性
+ import 语句中 '导出的变量名' as '别名'  方式可以设置别名
