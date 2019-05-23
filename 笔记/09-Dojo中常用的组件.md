# 09-Dojo中常用的组件

## 一、dojo/ready && dojo/domReady

```js
require(['dojo/ready','dojo/domReady!'],function(ready) {
    ready(function(){
        // 代码书写
    })
})

// 注意： domReady 的引入，需要加 感叹号(!);同时，不需要在 function 中 命名
// domReady 引入时少了这个感叹号(!)，并没有等待dom加载完就开始跑函数了，这个时候即使按正确的id也是返回null。
```

#### 二者的区别：

> - domReady是等待所有DOM元素加载完成，再require相关模块；
> - 而ready是等待DOM元素加载以及require的相关模块全部加载完成。
> - 在一些简单应用场景，用dojo/domReady!就行了；如果应用里需要用到一些组件，微件之类的还是用dojo/ready.



## **二、dojo/rquest**

- 处理 ajax，异步请求的

## 三、dojo/on 

- 给 DOM 元素添加事件的



## 四、dojo/dom  && dojo/dom-style

### (一) dojo/dom

​	dojo/dom模块作为一个基础模块，最常用的就是byId方法。除此之外还有isDescendant和setSelectable方法。

- 作用：获取 指定 id 的 DOM 元素

```js
require([
    'dojo/dom',
],function(dom){
    dom.byId(id) // 获取指定 id 的 DOM 元素
})
```

### (二) dojo/dom-style

- 作用： 获取 或 设置 指定 DOM 元素的 样式

```js
require(['dojo/dom-style'],function(domStyle) {
    domStyle.get(node,styleName); // 获取样式
    domStyle.set(node,styleName,value) // 设置样式
})
```

