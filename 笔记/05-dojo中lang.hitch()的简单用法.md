# 05-dojo中lang.hitch()的简单用法

​       函数 上下文环境 这个概念经常会让很多刚接触javascript的开发者感到疑惑，尤其当其和 [this](javascript:void())联系在一起说的时候。例如：JavaScript 中 的 方法 是 在 编译 时 绑定 到类，其中的this在调用方法的时候总是会指向包含此方法的类的实例。另一方面，JavaScript函数的上下文环境不是由函数在哪里定义而决定的，而是由它的调用方式决定的。 

​       Javascript函数被调用的方式一般有两种，作为一个对象的方法被调用和单独调用。当一个方法作为一个方法被函数调用，像 foo.bar()，*this* 会指向调用这个方法的对象（例如：foo）。当一个函数单独调用，像 bar()， this  会指向全局作用域。

 考虑下面的代码，注册了一个回调函数来响应DOM节点的点击事件：

```js
var myObject = {
  stateValue: false,
 
  handleClick: function(event) {
    alert(this.stateValue);
  }
};
 
require([ 'dojo/on' ], function(on) {
  on(someElement, 'click', myObject.handleClick);
});
```

​       这代码看起来非常直观。当 someElement 被点击，myObject.handleClick 会被调用并且会弹出一个框显示`myObject.stateValue`的内容.然而,当用户真正点击这个元素的时候,弹出框显示的却是"undefined"...发生了什么事?

   第一眼看过来, on  就像和 `myObject` and`handleClick 组合在一起了,并且开发者会期待调用它的结果就像``myObject.handleClick()` 调用一样.然而,思考一下下面的等同代码:

```js
var handleClick = myObject.handleClick;
on(someElement, 'click', handleClick);
```

​      实际上,只有 `handleClick` 方法被传递给了 on . 当最终 `handleClick` 被一个点击事件调用的时候,并不会调用  myObjecct.

​       幸运的是,Dojo有一个解决方法来确保一个函数总会被自己所期望的上下文调用:[lang.hitch](javascript:void()).指定一个上下文对象和一个函数,lang.hitch 会根据给定的上下文对象创建一个函数来调用原始的方法,就像`ECMAScript 5 的`[`Function.prototype.bind`](javascript:void())一样(这句话翻译不太准确..).就像`Function.prototype.bind`,`  lang.hitch`允许你去指定额外的参数,这些参数会传递给原始的函数.我们可以利用 lang.hitch 去确保 this 像我们期待的一样去引用myObject的值

```js
require([ 'dojo/on' ], function(on) {
  on(someElement, 'click', lang.hitch(myObject, myObject.handleClick);
});
```

​        与`Function.prototype.bind`不同的是,lang.hitch支持利用函数名作为第二个参数而不是一个函数这一种额外的绑定方法.

```js
require([ 'dojo/on' ], function(on) {
  on(someElement, 'click', lang.hitch(myObject, 'handleClick');
});
```

