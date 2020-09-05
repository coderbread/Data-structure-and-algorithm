# Promise的理解和使用

### 1.Promise是什么

##### 1.1 Promise的概念

抽象表达：

​	Promise是Javascript中异步编程的新解决方式。

​	tips:	旧的解决方式是 => ”纯回调形式“。

具体表达：

​	（1）语法层面：Promise是一个构造函数。

​	（2）功能层面：Promise对象用来封装一个异步操作并可以获取其结果数据。

##### 1.2 Promise的状态改变

初始状态：pending。

成功状态：pending => resolved。

失败状态：pending => rejected。

​	tips: 	一个Promise对象只能改变一次状态，只有成功或者失败状态。

​				无论成功或者失败，都会有一个结果数据。

​				成功的结果数据一般称为Value/data，失败的结果数据一般称为Reason。

##### 1.3 Promise的基本流程（图示）

<img src="/Users/Peanut/Desktop/Promise流程图.jpg" alt="Promise流程图" style="zoom: 67%;" />

##### 1.4 Promise的基本使用

见测试代码 / 01.Promise的基本使用.js。



### 2. 为什么要使用Promise

##### 2.1 灵活地指定回调函数

纯回调形式：往往要在启动异步任务之前去定义回调函数。

Promise：根据Promise实例对象的状态，分别指定对应的回调函数，无论异步任务执行到哪一步。

##### 2.2 链式调用，优化回调地狱

回调地狱：回调函数嵌套，

`doSomething(function(result){`

  	`doSecondThing(result, function(newResult){`

   		 `doThirdThing(newResult, function(finalResult){`

​    			  `console.log(finalResult)`

  		  `}, failureCallback3)`

​	  `}, failureCallback2)`

`}, failureCallback1)`

Promise解决方案：

`doSomething()`

`.then(function(result){`

  	`return doSecondThing(result)`

`})`

`.then(function(newResult){`

  	`return doThirdThing(newResult)`

`})`

`.then(function(finalResult){`

  	`console.log(finalResult)`

`})`

`.catch(failureCallback)`

##### 2.3 ES7的async/await:回调地狱的终极解决方案

`async function request(){`

​	`try{`

​		`const result = await doSomething()`

​		`const newResult =  await doSecondThing(result)`

​		`const finalResult = await doThirdThing(newResult)`

​		`console.log(finalResult)`

​	`}catch(error){`

​		`failureCallback(error)`

​	`}`

`}`

### 3. 如何使用Promise

##### 3.1 Promise APi

见 02.Promise APi的使用.js

###### （01） Promise构造函数

​		语法：Promise(excutor){}

​		excutor函数：同步执行（resolve, reject）=> { }

​		resolve函数：内部定义成功时我们调用的函数 value => { }

​		reject函数：内部定义失败时我们调用的函数 reason => { }

​		说明：excutor会在Promise内部立即同步回调，异步操作在执行器里执行。

###### （02） Promise.all()

​		处理多个promise对象，类似 ’与‘ 的思想

###### （03） Promise.prototype.allSettled()

###### （04） Promise.any()

###### （05） Promise.prototype.catch()

​		onRejected函数：失败的回调函数（reason）=>{}

​		说明：then(undefined, onRejected)

###### （06） Promise.prototype.finally()

###### （07） Promise.prototype.then()

​		语法：（onResolved, onRejected） => { }

​		onResolved函数：成功的回调函数（value）=>{}

​		onRejected函数：失败的回调函数（reason）=>{}

​		说明：函数执行完，返回一个新的promise对象，以便链式调用。

###### （08） Promise.race()

​		处理多个promise对象，类似 ’或‘ 的思想

###### （09） Promise.reject()

​		reason：返回失败的promise对象

###### （10） Promise.resolve()

​		value：返回成功的promise对象