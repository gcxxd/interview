/**
 * 
 这两种方式在创建多个对象的时候会产生大量重复代码
 */
//用new + object创建
var obj = new Object();
//对象字面量创建
var obj1 = {};

//工厂模式,解决了重复实例化的代码重复问题，但是创建的对象无法识别的问题
function createPerson(name, age) {
    var obj = new Object();
    obj.name = name;
    obj.age = age;
    return obj;
}
var person1 = createPerson('zgc', 16);

//构造函数模式,有点是可以区分对象的类型，缺点是每个实例都有独自的方法。
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.say = function() {
        console.log(123)
    }
}
var person2 = new Person('zgc', 29);

//原型模式,所有对象都共享定义在其原型上的属性和方法
function Person1(){
}
Person1.prototype.name = 'zgc';
Person1.prototype.say = () => { console.log(123123) };
var person3 = new Person1();

//混合模式，原型+构造函数模式
//所有对象可以共享定义在构造函数原型上的方法，同时每个对象都有着自己的私有属性
function PersonP(name, age) {
    this.name = name;
    this.age = age;
}
PersonP.say = () => { console.log(123) }

//js new操作符做了什么
/**
    1.创建了一个空的对象,{}
    2.将这个空对象的原型指向构造函数的prototype
    3.改变this指向，将空对象作为构造函数的上下文
    4.对构造函数有返回值的判断
    4.1 构造函数有返回值
        如果返回值是基础类型，那么忽略返回值.
        如果返回值是引用数据类型，则使用return的返回，也就是说new 操作符没有生效
    4.2 构造函数没有返回值
*/
