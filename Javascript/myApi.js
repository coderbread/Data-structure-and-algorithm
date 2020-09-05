//手写一个bind方法
Function.prototype._bind = function (obj) {
  //兼容性处理，只有方法才能调用_bind
  if ((typeof this) !== 'function') {
    throw new Error('"Function.prototype.bind - what is trying to be bound is not callable"')
  }
  return () => {
    this.apply(obj, Array.prototype.slice.call(arguments, 1))
  }
}


//限制构造函数直接调用，可用new会改变this的指向
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("没有使用new调用此函数");
  }
}
function Point(x, y) {
  //☆☆☆☆☆☆加上这句话☆☆☆☆☆☆☆☆
  _classCallCheck(this, arguments.callee);
  this.x = x;
  this.y = y;
}

var obj = Object.create(Point.prototype)
let 李宁 = 0 && 20
console.log(李宁)