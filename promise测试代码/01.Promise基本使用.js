
//创建Promise对象
const promise = new Promise(function(resolve, reject){
  //执行异步操作
  setTimeout(function(){
    const time = Date.now() 
    if(time % 2 == 0 ){
    //成功了，调用resolve(value)
      resolve('当前时间为：' + time)
    }else{
    //失败了，调用reject(reason)
      reject('当前时间为奇数，请求失败！')
    }
  },500)
})

promise.then(
  function(value){//接受到成功状态下返回的value数据
    console.log('请求成功了！', value)
  },
  function(reason){
    console.log('请求失败了！', reason)
  }
)
