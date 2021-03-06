
/**
 * 特点：

父类新增原型方法/原型属性，子类都能访问到
简单，易于实现
缺点：

无法实现多继承
来自原型对象的所有属性被所有实例共享
创建子类实例时，无法向父类构造函数传参
要想为子类新增属性和方法，必须要在Student.prototype = new Person() 之后执行，不能放到构造器中
 */
//原型链继承,关键在于子类型的原型是父类型的一个实例,子类将父类所有的私有属性和公有方法都作为子类的共有属性和公有方法。
//实际上就是子类的不同实例访问的是父类中同一份属性。
function Person(name, age) {
    this.name = name;
    this.arr = [1,2,3];
    this.setName = () => {};
}
Person.prototype.setAge = () => {};
function Student(price) {
    this.price = price;
}

Student.prototype = new Person();
Student.prototype.constructor = Student
var s1 = new Student(0);

//借用构造函数继承
/**
 * 
特点：

解决了原型链继承中子类实例共享父类引用属性的问题
创建子类实例时，可以向父类传递参数
可以实现多继承(call多个父类对象)
缺点：

实例并不是父类的实例，只是子类的实例
只能继承父类的实例属性和方法，不能继承原型属性和方法
无法实现函数复用，每个子类都有父类实例函数的副本，影响性能
 */
function Person(name, age) {
    this.name = name;
    this.arr = [1,2,3];
    this.setName = () => {};
}
Person.prototype.setAge = () => {};
function Student(name, age, price) {
    Person.call(this, name, age);
    this.price = price;
}
var s2 = new Student('zgc',1,1);

//原型链+构造函数继承
/**
 * 
优点：

可以继承实例属性/方法，也可以继承原型属性/方法
不存在引用属性共享问题
可传参
函数可复用
缺点：

调用了两次父类构造函数，生成了两份实例 */
function Person(name, age) {
    this.name = name;
    this.arr = [1,2,3];
    this.setName = () => {};
}
Person.prototype.setAge = () => {};

function Student(name, age, price) {
    Person.call(this, name, age);
    this.price = price;
}

Student.prototype = new Person();
Student.prototype.constructor = Student;
var s3 = new Student('zgc',1,1);

//组合继承优化
//核心就在于将组合继承中子类原型等于父类实例的行为改为子类原型指向父类原型
function Person(name, age) {
    this.name = name;
    this.arr = [1,2,3];
    this.setName = () => {};
}
Person.prototype.setAge = () => {};

function Student(name, age, price) {
    Person.call(this, name, age);
    this.price = price;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
var s4 = new Student('zgc',1,1);

//es6 class继承
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    say() {

    }
}

class Student extends Person {
    constructor(name, age, price) {
        super(name, age);
        this.price = price;
    }
    setPrice() {

    }
}
