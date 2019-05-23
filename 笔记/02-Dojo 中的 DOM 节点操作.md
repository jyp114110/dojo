# 02-Dojo 中的 DOM 节点操作

https://mojianpo.iteye.com/blog/1564428

## 一、查找节点

- id

```js
dojo.byId('id') // 相当于 js 中 document.getElementById('id')
```

- query

```js
dojo.query('name') // 相当于 js 中 document.querySelectorAll('name')
```

## 二、创建节点

```js
dojo.create(str,attribute,refNode,position)
// str : 标签名
// attribute：属性  是个对象 {innerHTML:'Hello DOJO',}
// refNode： 参考 DOM 节点
// position : 所在位置
```

**positon** 有七个取值

> 1、null： 新创建的元素将作为 refNode 的 **子元素**，且添加到 refNode 中 **最后** 的位置
>
> 2、before：新创建的元素将作为 refNode 的 **兄弟元素**， 且添加到 refNode 的 **前边**
>
> 3、after：新创建的元素将作为 refNode 的兄弟元素，且添加到 fefNode 的 **后边**
>
> 4、only : 新创建的元素将 **替代** 父元素[refNode] 内 **所有的 子元素**，添加到 refNode  内部
>
> 5、replace： 新创建的元素 将  直接 替换 父元素[refNode]
>
> 6、first：新创建的元素 将作为 refNode 的 **子元素**，并添加到 所有子元素的 **最前边**
>
> 7、last： 新创建的元素 将作为 refNode 的**子元素**，并添加到 所有子元素的 **最后边**

**示例：**

```js
/*---------------创建元素节点--------------*/
	dojo.create("li", {
		id:"demo",
		className:"deLeGemo",
		innerHTML:"create node",
		style:{
			"color":"red",
			"fontWeight":"bold"
		}
	}, refNode, "before");
```

## 三、删除节点

- 1、清空节点（删除自身所有的**子节点**）

```js
dojo.empty(node)
```

- 2、删除节点（删除**自身及其内部所有子节点**）

```js
dojo.destroy(node)
```

## 四、节点的样式及类名操作

- style
- addClass
- removeClass
- toggleClass

```js
//建议不要尝试给dojo.byId()获取的元素使用链式写法.. 会囧的..
dojo.query(".demo").style("color","red").removeClass("fontStyle").addClass("layoutStyle");
	dojo.query(".demo").style({color:"red",fontWeight:"bold"}).removeClass("fontStyle").addClass("layoutStyle").toggleClass('fontWeight');
 
	var node = dojo.byId("node");
	dojo.addClass(node, "className");
```

