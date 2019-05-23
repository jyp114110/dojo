

# Dojo

地址：[https://dojotoolkit.org/download/]

[https://dojo.io/tutorials/000_local_installation/]



## 使用方式

- Dojo 引入：

  - 方式一：

  ```js
   <script src="http://ajax.googleapis.com/ajax/libs/dojo/1.6.1/dojo/dojo.js" type="text/javascript"></script>
  ```

  ​

  - 方式二：

  ```js
   <script src="http://ajax.googleapis.com/ajax/libs/dojo/1.6.1/dojo/dojo.xd.js" type="text/javascript"></script>
  ```

```html
<html>
<head>
    <title>Exploring Dojo</title>
</head>
<body>
<h1>Exploring Dojo</h1>
<div id="message">This is a DIV element with id attribute message.</div>
<ul id="list">
    <li>This is the first item in a list</li>
    <li class="highlight">This is the second item in a list</li>
    <li>This is the third item in a list</li>
</ul>
 <script src="http://ajax.googleapis.com/ajax/libs/dojo/1.6.1/dojo/dojo.xd.js" type="text/javascript"></script>
<script>
dojo.addOnLoad(function() {
    dojo.create(
        "div",
        {
            "innerHTML": "Hello, World!"
        },
        dojo.body()
    );
});
</script>
</body>
</html>
```

- 准备函数

```js
/*---------------使用dojo的方法--------------*/
dojo.ready(function(){
	//一坨一坨的代码.
});
 
```

## 一、实用函数

​	DOM实用函数通过提供根据ID寻找条目的能力或者使用CSS3选择器，使得使用DOM中的元素比较容易。还有一些其他功能，可以创建和销毁元素，以及操作现有元素内容。

### (一) dojo.byId

​	`dojo.byId`函数可以通过id属性选择一个DOM节点。

该函数式标准 JavaScript `document.getELementById`函数的一个别名。

```js
// 获取 id = main 的元素内容
dojo.byId('main').innerHTML
```

### (二)dojo.create

​	`dojo.create`函数可以创建、操作和安置DOM元素。

````js
dojo.create(
    'div', // nodeType
          
     { // 配置
         "innerHTML":"HEOLL DOJO" ,
          "class":"className",
           "id":"id"  
     },
     dojo.body() // 放置的地方
)
````

### (三)dojo.fadeOut

`fadeOut` 淡出   `fadeIn`淡入

```js
 dojo.fadeOut({
        node: dojo.byId('main'),
        duration: 600
      }).play()
```

### (四)dojo.query 

​	查找指定元素。 相当于JS 中的 `document.querySelectorAll`

```js
dojo.query("#list li").forEach(function(item){
    console.log(item.innerHTML)
})
```

​	`dojo.body` 函数只返回文档的 `<body>` 元素，`dojo.body` 的一个引用，以及文档对象本身。`dojo.create` 让您可以快速创建一个新元素、定义它的属性、然后将它放在 DOM 中。



## 二、数组和NodeLists

### (一)dojo.forEach

 	数组遍历

```js
dojo.forEach(array,function(item,index){
    
})
```

````js
var list = ['my','name','is','Joe']
dojo.forEach(list,function(item,index){
 	console.log((i+1)+'---'+item)            
 })

````

### (二)dojo.indexOf

​	`dojo.indexOf`函数可以判断一个数组中找出具体一个值得位置。返回的是**下标**；查询不到返回 `-1`

```js
dojo.indexOf(arr,searchValue)
```

```js
var list = ['my','name','is','Joe']
dojo.indexOf(list,'name') // 1
```

### (三)dojo.filter

​	`dojo.filter`数组过滤器，返回一个新数组。

```js
var filterList = dojo.filter(arr,function(item,index){
	return item
})
```

```js
var list = ['my','name','is','Joe']
var filterList = dojo.filter(list,function(item.index){
	return item != "is"
})
```

## 三、事件处理

### (一)DOM事件处理

​	将函数附加到DOM对象的第一个方法是使用`dojo.connect`函数。

```js
dojo.connect(DOM,'on+事件名称',callback)
```

```js
var message = dojo.byId('message')
dojo.connect(message,'onclick',function(){
	console.log(message.innerHTML)
})
```

#### 1、附加事件到数组元素上

```js
dojo.query('#list li').forEach(function(item){
    dojo.connect(item,'onclick',function(){
        dojo.style(item,{
            fontWeight:'bold'
		})
    })
})
```

​	Dojo支持一种更加简洁的方式编写这段代码。不需要使用`forEach`对整个数组进行迭代，使用NodeList.connect 快捷函数即可完成。

```js
dojo.query('#list li').onclick(function(e){
    dojo.style(e.target,{
        fontWeight:'bold'
	})
})
```

### 2、连接函数到其他函数

​	**(1)不使用 dojo.connect 将函数连接到其他函数**

```js
function toogleImage(){
    // Code to show / hide Loading image goes here
}

function callAjax() {
    toggleImage();
    //Code to call Ajax function goes here
}
 
function handleResponse() {
    //Code to handle Ajax response goes here
    toggleImage();
}
```

​	**(2)使用 dojo.connect 连接函数到其他函数**  （无效）

```js
dojo.connect(触发函数,被触发函数)
```

```js
function toogleImage(){
    // Code to show / hide Loading image goes here
}

function callAjax() {
   // toggleImage();
    //Code to call Ajax function goes here
}
 
function handleResponse() {
    //Code to handle Ajax response goes here
   // toggleImage();
}
// 使用 connect 连接函数
dojo.connect(callAjax,toggleImage)
dojo.connect(handleResponse,toggleImage)
```

## 四、发布和订阅主题

​	Dojo事件处理值得注意的一点是发布和订阅主题的能力。这使得Dojo组件可以彼此交互，即使它们没有意识到彼此存在。

​	假如有一个名为printName的主题，它绑定了一个message对象包含一个人的姓和名。您可以有一个订阅这个主题的组件，在任何时候当另一个组件使用一个人的名字发布到该主题时，这将会将这个名字打印到控制台。

```js
// 订阅
dojo.subscribe('printName',function(msg){
       console.log("The person's name is: "+msg.first_name+" "+msg.last_name);
})

// 发布
dojo.publish('printName',[
    {
        first_name:'Joe',
        last_name:'Lennon'
    }
])
```

## 五、使用dojo.xhr 增强 Ajax

​	创建 Ajax 驱动的 web 应用程序通常是通过创建 XmlHttpRequest(XHR)对象完成的，这将向指定的URL发出一个HTTP请求，传递一个请求头部和正文斌定义回调函数，来定义当返回一个成功响应正文或一个HTTP失败响应时应该完成什么操作。

### (一)提供如下4个函数：

> - xhrGet
> - xhrPost
> - xhrPut
> - xhrDelete

​	所有这些函数都遵守相同的语法：接受一个属性配置对象作为参数。在这些对象中可以定义想要发出的Ajax请求的各个方面。

### (二)配置选项

- **url**
- **handleAs**：定义响应的处理格式，默认值是 text。但是 json、JavaScrip t、xml等一些其他选项也可以用。
- **form**：<form>元素的一个引用或者字符串ID表示。form中的每个字段的值都将被当做请求主体发送。
- **content**：一个对象。包含想要传递给请求体中的资源的参数。如果两者都提供，这个对象将与从form属性中获取的值混合在一起。
- **load**： 回调函数。当 Ajax请求返回一个成功响应信息时，执行此函数。
- **error**：回调函数。当 Ajax请求失败时，该函数将被调用。
- **handle**：该函数允许您将加载和错误回调函数合并到一个函数中（如果您确实不关心请求结果是成功或是出现错误，这将非常有用）。

```js
dojo.xhrGet({
    url: "data.json",
    handleAs: "json",
    load: function(data) {
       console.log(data)
    }
})
```

