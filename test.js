function sum(a,b,c,d){
	console.log(a*b*c*d);
}
function curry(fn, args) {
  let argsArr = args || [];
  return function() {
    let nowArgs = argsArr.concat([...arguments]);
    if(nowArgs.length < fn.length) {
      return curry(fn, nowArgs);
    } else {
      return fn.apply(this, nowArgs);
    }
  }
}
var currySum = curry(sum);
sum(1,2,3,4);
currySum(1)(2)(3)(4);

