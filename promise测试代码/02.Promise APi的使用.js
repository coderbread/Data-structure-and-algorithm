//生成一个成功值为1的promise对象
const p1 = new Promise(function(resolve, reject){
  resolve(1)
})

//生成一个成功值为2的promise对象
const p2 = Promise.resolve(2)

//生成一个失败值为3的promise对象
const p3 = Promise.reject(3)

p1.then(function(value){
  console.log(value)
})

p2.then((value) => {
  console.log(value)
})

// p3.then(null, (reason) => {
//   console.log(reason)
// })
p3.catch((reason) => {
  console.log(reason)
})

const pAll1 = Promise.all([p1, p2, p3])
pAll1.then(
  function(values){
    console.log(values)
  },
  function(reason){
    console.log(reason)
  }
)

const pAll2= Promise.all([p1, p2])
pAll2.then(
  function (values) {
    console.log(values)
  },
  function (reason) {
    console.log(reason)
  }
)

const pRace1 = Promise.race([p1, p2, p3])
pRace1.then(
  function (value) {
    console.log(value)
  },
  function (reason) {
    console.log(reason)
  }
)