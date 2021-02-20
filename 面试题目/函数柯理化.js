//1.实现一个函数功能：sum(1,2,3,4…n)转化为 sum(1)(2)(3)(4)…(n)
function curry(fn, args) {
  let argsArr = args || [];
  return function() {
    let nowArgs = argsArr.concat([...arguments]);
    if(nowArgs.length < fn.length) {
      curry(fn, nowArgs);
    } else {
      fn.apply(this, nowArgs);
    }
  }
}

// 实现一个add方法，使计算结果能够满足如下预期：
/**
 add(1)(2)(3) = 6;
 add(1, 2, 3)(4) = 10;
 add(1)(2)(3)(4)(5) = 15;
*/
function add() {
  var args = [...arguments];
  var fn = function () {
    var nowArgs = args.concat([...arguments]);
    return fn;
  }
  fn.toString = () => [...args].reduce((a,b) => {
    return a + b;
  })
  return fn;
}