const Promise = require('./myPromise')

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(100)
    reject(200)
  });
})

promise.then(
  value => {
    console.log(value)
  },
  reason => {
    console.log(reason)
  }
)