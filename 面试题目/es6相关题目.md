# 箭头函数
+ 适用场景: 适用于那些本来需要匿名函数的地方
+ 不适用场景: 所有可能会涉及到this使用的场景，arguments属性使用的场景,不能作为构造函数调用，因为他没有constructor属性


# Set,Map,WeakSet,WeakMap
+ Set类似与数组，但是Set类型的对象内不能有重复的值
+ Map对象中的键值可以是任意值
+ WeakSet和WeakMap不是可迭代对象，不能循环，如果引用数据被垃圾收集，则无法访问数据、

# ES5的继承和ES6的继承的区别(即class相关的一些问题)
## 主要考class和function区别？
+ class声明会提升但不会初始化，类似于let会进入暂时性死区
+ class声明内部会启用严格模式
+ class声明内部的所有方法都是不可枚举的,且没有prototype,不能使用new调用
+ 必须使用new来调用class
+ 用class声明的类可以直接通过__proto__属性找到父类
+ class可以继承内置对象