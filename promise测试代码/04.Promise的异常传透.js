new Promise(function(resolve,reject){
  reject(1)
}).then(
  value => {
    console.log(value)
    return 1
  },
  reason => {throw reason}
).then(
  value => {
    console.log(value)
    return 1
  },
  reason => Promise.reject(reason)
).then(
  value => {
    console.log(value)
    return 1
  },
  reason => {
    throw reason
  }
).catch(
  reason => {
    console.log(reason)
  }
)