const Promise = (function(){
  return function(excutor){
    this.status = 'pending'
    this.data = undefined
    this.callbacks = []
  }
}())

Promise.prototype.then = function(onResolved, onRejected){

}

Promise.prototype.catch = function (onRejected) {

}

Promise.resolve = function(value){

}

Promise.reject = function(reason){

}

Promise.all = function(promises){

}

Promise.race = function(promises){

}