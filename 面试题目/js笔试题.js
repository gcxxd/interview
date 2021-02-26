//第一题
['1', '2', '3'].map(parseInt); // 1， nan, nan
/**
 * 考点: parseInt(string, radix/基数) 2 <= radix <= 36
 * map((item, index, arr) => {}),即parseInt(item, index)
 */
/**
 * script start
 * async1 start
 * promise1
 * promise3
 * promise2
 * script end
 * async1 end
 * promise2
 * settimeout
 */

//异步/事件循环面试题   
//关键点： async函数中在await之前的代码是立即执行的,,遇到await时，会将await跟的表达式执行一遍
async function async1() {
  console.log('async1 start');
  await async2();
  console.log('async1 end');
}
async function async2() {
  console.log('async2');
}
console.log('script start');
setTimeout(function() {
  console.log('setTimeout');
}, 0)
async1();
new Promise(function(resolve) {
  console.log('promise1');
  resolve();
}).then(function() {
  console.log('promise2');
});
console.log('script end');

 //js实现深拷贝函数
 function deepClone(obj) {
   let objClone = Array.isArray(obj) ? [] : {};
   if(obj && typeof obj === 'object') {
    for(key in obj) {
      if(obj.hasOwnProperty(key)) {
        //判断obj子元素是否为对象，如果是，递归复制
        if(obj[key] && typeof obj[key] === 'object') {
          objClone[key] = deepClone(obj[key]);
        } else {
          //如果不是，简单复制
          objClone[key] = obj[key];
        }
      }
    }
   }
   return objClone;
 }

 //手写一个new函数
 function myNew(fn, args) {
  //  let obj = {};
  //  Object.setPrototypeOf(obj, fn.prototype);
  let obj = Object.create(fn.proptotype);
  let result = fn.apply(obj, [...args]);
   if(typeof result === 'object') {
     return result;
   } else {
     return obj;
   }
 }

//改造下面的代码，使之输出0 - 9，写出你能想到的所有解法。
for (var i = 0; i< 10; i++){
	setTimeout(() => {
		console.log(i);
    }, 1000)
}
// var改let
