# 08-Dojo常用的内置函数

## 一、Require 函数

- require 函数的作用主要是 **引入** 模块 和 组件

**示例**：

- 老用法

```js
dojo.require('dijit.form.Button')
```

- 新用法

```js
require(
    ['dijit/form/Button',
     'dojox/layout/ContentParse',
     ...],function(Button,ContentParse,...){
         // 处理函数
     })
```

- **注意事项（非常重要）**：

  - dojo 在 `require` 模块时，会 **默认** 从 最外层的`dojo` 文件夹 开始查找。如果查找不到，就会报错。
  - 解决办法

  ```html

  <!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
  <head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
      <title></title>  
      <script >
          // 解决办法，设置 config
          var dojoConfig = { baseUrl: "itfanr/", packages:[{name:"test",location:"test"}]};
      </script>
      <script src="dojo/dojo/dojo.js"></script>
      <script >
   
          require(
         ["dojo/ready", "test/person"], // 从 dojo 文件下的 包 开始查找
         function (ready, person) {
             ready(function () {
                 var id = "selected_text";
                 var person1 = new person("小明");
                 alert(person1.name);
             });
         });
         
      </script>   
  </head>
  <body>
      <h1 id="selected_text">Hello</h1>
     
  </body>
  </html>

  ```

  ​

  ​

## 二、 Define 函数

- 作用： 是定义一个模块（module）。这个模块可以被 `require`  引用，引用之后就可以使用 `define` 里面的东西。

**示例**

```js
// 定义模块
define(['dojo/dom'],function(dom){
    return {
        setRed：function(id){
            dom.byId(id).style.color = 'red'
        }
    }
})
// 引入该模块，并使用
require(['dojo/ready'
         ,'test/util'],function(ready,util){
    ready(function){
        var id = "selected_text";
        util.setRed(id)
    }
})
```



## 三、Request 函数

-  作用：处理 ajax ，异步通信
- 基本语法：

```js
request(URL,Option)
```

- dojo/request 函数（以及该模块下所有的发送请求的函数）的参数，包含一个 URL 地址，以及一个 Option 配置对象。Option 参数对象是可省略的。让我们看看 Option 中的常用配置参数：

> - method ： 设置请求方法，默认是 GET。（dojo/request/script 会忽略这个参数）
> - query： 形式如 key = value 的键值对。或者如 { key  : 'value' }的对象。包含了所有 的query参数。
> - data：字符串或对象（会被 dojo/io-query.objectToQuery串行化成字符串），表示需要发送的数据（GET 和 DELET 请求会忽略这个参数）。
> - handleAs ： 表示如何处理服务器端响应的字符串。默认是 'text'，其他可能的值包括 'json','javscript',以及'xml'。
> - headers : 形式如 {'Header-Name':'value'} 的对象，包含请求所需要的各种头部属性。
> - timeout : 表示等待多少毫秒算超时的整数。一旦超时将取消请求，并调用 '拒绝 reject 函数' 所返回的 Promise 对象。

- dojo/request 所返回的 Promise 对象 具有一个普通 Promise 没有的附加属性：**response**。这个属性本身也是一个 Promise，它将提供一个对象来更详细地描述这次响应：

> - url： 发送请求的最终 URL (加上了 query 字符串)
> - options：请求相关的参数
> - text：响应中数据的字符串表示
> - data ： 对响应数据进行处理后返回的数据（如果 handleAs 参数制定了有效的解析方式）
> - getHeader（headerName）： 用于获取请求头部参数的函数。如果某个 provider没有提供头部信息，这个函数将返回 null。

**示例**

```js
  request
        .get(
          'getTime', //请求地址
          {
            query: (this.id = 'successbtn'),
            handleAs: 'json' //返回的是json数据
          }
        )
        .then(
          function(data) {
            //发送请求成功后的操作
            alert('获取成功' + data.data)
            //发送请求失败后的操作
          },
          function(error) {
            alert('获取失败' + error)
          }
        )
```

## 四、On 函数

- 事件绑定函数
- 基本语法

```js
on(targetElement,'event',function(params){
    // 事件处理程序
})
```

**示例**

```js
on(myButton, "click", function(evt){
   domStyle.set(myDiv,"backgroundColor", "blue");
});
```











