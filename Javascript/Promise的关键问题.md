## Promise的几个关键问题

##### 1. 如何改变promise的状态？

​	resolve(), reject(), throw

##### 2. 一个promise对象指定多个回调函数，都会调用吗？

​	会。只要状态改变，绑定在状态上的回调函数都会执行

##### 3. 改变promise状态和指定回调函数，谁先谁后的顺序问题？

​	（1）异步改变promise状态的情况：先指定回调函数，保存起来；然后改变promise状态（同时指定数据）

​	（2）同步改变promise状态的情况（去掉延时器）：先改变promise状态（同时指定数据），然后指定回调函数，并异步执行

​	注意点：.then是同步的    .then内部的函数是异步的

##### 4. Promise.then()返回的新Promise的结果状态由决定？

​	由.then（）指定的回调函数的执行结果决定

​	（1）如果抛出异常，新promise变为rejected状态，reason为抛出的异常值

​	（2）如果返回的是非promise的任意值（return "字符串"），新promise变为resolved状态，value为返回的"字符串"

​	（3）如果返回的是另一个新的promise结果，那么按照原来的规则执行

##### 5. Promise如何串联多个操作任务？

​	.then().then().then().catch()

##### 6. 异常穿透

##### 7. 中断Promise链