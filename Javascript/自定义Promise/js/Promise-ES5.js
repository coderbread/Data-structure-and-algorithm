(function(window){
  var PENDING = 'PENDING'
  var RESOLVED = 'RESOLVED'
  var REJECTED = 'REJECTED'
  function Promise(excutor){
    this.status = PENDING
    this.value = undefined
    this.callbacks = [] //保存回调函数, 每个数组元素的结构为{onResolved(){}, onRejected(){}}

    var self = this

    function resolve(value){
      // 判断状态，如果不为pending，结束执行
      if(self.status !== PENDING) return
      //改变状态resolved
      self.status = RESOLVED
      //改变值
      self.value = value
      //如果有待执行的回调函数，立即异步执行回调函数onResolved
      if(self.callbacks.length){
        setTimeout(function(){
          self.callbacks.forEach(function (item) {
            item.onResolved(value)
          })
        })
      }
    }
    function reject(reason) {
      // 判断状态，如果不为pending，结束执行
      if (self.status !== PENDING) return
      //改变状态rejected
      self.status = REJECTED
      //改变值
      self.value = reason
      //如果有待执行的回调函数，立即异步执行回调函数onRejected
      if (self.callbacks.length) {
        setTimeout(function () {
          self.callbacks.forEach(function (item) {
            item.onRejected(reason)
          })
        })
      }
    }
    try {
      excutor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }

  Promise.prototype.then = function(onResolved, onRejected){
    //当前状态为pending，将回调函数保存起来,(观察订阅模式)
    if(this.status === PENDING){
      this.callbacks.push({
        onResolved,
        onRejected
      })
    }else if(this.status === RESOLVED){
      setTimeout(() => {
        onResolved(this.value)
      })
    }else{
      setTimeout(() => {
        onRejected(this.value)
      })
    }
  }

  Promise.prototype.catch = function (onRejected) {

  }

  Promise.resolve = function(value){

  }

  Promise.reject = function (reason) {

  }

  // 返回一个promise对象，当传入的所有promise都成功，才会返回成功状态
  Promise.all = function (promises) {

  }
  
  // 返回一个promise对象，其结果由第一个完成的promise决定
  Promise.race = function (promises) {

  }
  window.Promise = Promise
}(window))
