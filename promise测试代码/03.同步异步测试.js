
const p1 = new Promise(function (resolve, reject) {
  console.log('1--------1')
  resolve(1)
})
p1.then(function (value) {
  console.log(value)
})
console.log('2-------2')