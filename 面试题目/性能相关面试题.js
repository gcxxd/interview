/**
 * 防抖
 * 对于短时间内连续触发的事件，在给定期限内，事件处理函数只执行一次
 */
function debouce(fn, delay) {
  let that = this;
  return function() {
    clearTimeout(fn.id);
    fn.id = setTimeout(function() {
      fn.apply(that, delay);  
    }, delay);
  }
}

/**
 * 节流
 * 函数在执行一次后暂时失效，等待给定期限过去后在此激活
 */
function throttle(fn, delay) {
  var valid = true;
  return function() {
    if(!valid) {
      return false;
    }
    valid = false;
    setTimeout(function() {
      fn();
      valid = true;
    }, delay)
  }
}