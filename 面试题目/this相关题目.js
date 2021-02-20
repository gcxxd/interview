/**
 * new绑定,this指向创建的新对象
 * 显示绑定, call,apply,bind
 * 隐式绑定，通过上下文来绑定
 * 默认绑定，严格模式this=undefined,非严格模式
 */

 //第一题
var length = 10;

function fn () {
    console.log(this.length);
}
 
var obj = {
    length: 5,
    method: function (fn) {
        fn(); //这里实际上调用的是在最外层作用域中的fn,10
        arguments[0](); //argumnets[0]是fn,arguments.fn(),2
    }
};
 
obj.method(fn, 1);


//第二题
window.val = 1;
 
var obj = {
    val: 2,
    dbl: function () {
        this.val *= 2; 
        val *= 2;       
        console.log('val:', val);
        console.log('this.val:', this.val);
    }
};

 // 说出下面的输出结果
 obj.dbl(); //val= 2 this.val = 4
 var func = obj.dbl;
 func(); //val = 8, 8  