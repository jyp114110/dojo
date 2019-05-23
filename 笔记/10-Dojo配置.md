# 10-Dojo配置dojoConfig



- dojoConfig 用于设置一些在 Dojo 运行时的选项和默认的行为方式
- 首先要定义 dojoConfig 设置一些属性，然后加载 dojo.js。 如果这个过程反过来，那 dojoConfig 的配置则无效。

````html
<script>
    var dojoConfig = {
        has:{
          'dojo-firebug':true  
        },
        parseOnLoad:false,
        foo:'bar',
        asyc:true,
        aliases:[
            ['ready':'dojo/domReady'],
            ['registry':'dijit/registry'],
            ['dialog','dijit/Dialog'],
            ['parser','dojo.parser']
        ],
        // baseUrl:'widgets',
        packages:[
            {name:'js',location:'/js'}
        ],
        locale: location.search.match(/locale=([\w\-]+)/) ? RegExp.$1 : "en-us"
    }
</script>
````

### (一) has 

- 用来设置一些 Dojo 支持系统的特性。

```js
has:{
    'dojo-firebug':true, // 加载 Dojo 版的 Firebug 调试环境。如果浏览器没有自带调试工具，可以用这个
    'dojo-debug-messages': true//显示调试信息，针对于一些废弃的或测试中的功能特性在运行时的信息   
}
```

### (二) packages

- 提供包名及其路径

```js
packages:[{
    name:'myapp',
    location:'/js/myapp'
}]

// 配合 baseUrl:'widgets' 解决第三方组件的引入路径问题
```

### (三) aliases

- 设置别名

```js
aliases:[
    // [aliasesName,tureName]
    ['cookie','dojo/cookie']
]
```

### (四) async

- 是否异步加载

```js
async:true/false/lengacyAsync
```

### (五) parseOnLoad

- 是否在 DOM 和所有初始化完成后 dojo.parser 解析页面

```js
parseOnLoad:true/false
```

### (六) locale

- 本地化与国际化

```js
locale: location.search.match(/locale=([\w\-]+)/) ? RegExp.$1 : "en-us"
```









