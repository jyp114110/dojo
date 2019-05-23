# 07-Dojo面向对象编程

## 一、类的声明与继承 `declare`

- dojo 类的声明：类是创建对象的对象
- dojo 在实例化类时，可以不用`()`，
  - 即 `var p = new Person  `即可。
  - 而常规实例化需要`() `调用，`var p = new Person()`

**基本语法**

```js
  dojo.declare(className,superClass,props)
/**
 className : 类的名称
superClass: 指定父类的类型。如果不存在，可以为null。由于 Dojo 中 支持多类继承，因此 superClass可以是一个包含所有父类的数组。
props: 是一个对象，其中包含该类的所有字段以及方法。在props中可以定义定类一个特殊函数， constructor 在该类型被实例化的时候会被自动调用到，相当于构造函数。
*/
```

### (一)  类的声明

```js
 dojo.declare('People', null, {
        name: 'zs',
        age: 18,
        constructor: function(name, age) {
          this.name = name
          this.age = age
        }
      })
	  console.log(new People) // {name:undefined,age:undefined}
      var p = new People('ls', 18)
      console.log(p) // {name:'ls',age:18}
    </script>
```

### (二) 类的继承

**示例**

- 先定义  **人** 这个类
- 在定义 **学生** 这个类

```js
// 人
dojo.declare('People',null,{
	name:'unknown name',
    action:function(){
        //doing something
        console.log(2)
    },
    constructor:function(name){
        this.name = name
    }
})


// 学生
dojo.declare('Student',People,{
    school:'unknown',
    action:function(){
     	console.log(1)
    },
    constructor:function(name,school){
        this.school = school
    }
})
// 学生 继承 人
 var s = new Student('jack', 'Harvad')
 console.log(s) // {name:'jack',school:'Harvad'} 
 s.action() // 1  // 注意：action 方法 是在 _proto_ 原型链上的方法
```

### (三) 定义静态域

​	传统的面向对象语言都直接在语言层面上支持静态域的概念。例如 Java，其静态域包括今天类型的字段及方法。静态类型的字段由所有的实例共享，而静态方法可以由类型直接调用，故其不能直接访问非静态字段（只能先产生实例，再通过实例访问字段）。

​	JavaScript中并没有直接支持静态域的这个概念，但是可以通过模拟的方式来实现静态域的效果。

​	下面一个示例展示了 Dojo 中如何定义静态域：

````js
dojo.declare('Foo',null,{
    staticFields:{num:0},
    add:function(){
        this.staticFields.num++
    }
})
var fn1 = new Foo()
var fn2 = new Foo()
console.log(fn1.staticFields.num) // 0                           
fn1.add()
fn2.add()
console.log(fn1.staticFields.num) // 2

````

### (四) 调用父类方法

- 利用 `constructor`  在该类型实例化时会被自动调用的特性，实现父类方法被调用。

````js
dojo.declare('Foo',null,{
    constructor:function(){
        console.log('foo')
    }
});
dojo.declare('Bar',Foo,{
    constructor:function(){
        console.log('bar')
    }
})
var b = new Bar // 自动调用，打印 foo bar
````

### (五) 定义扩展 `extend`

- `extend` 对类型进行扩展，**增加**原先没有的**新属性(方法)**。
- 当然也可以用来添加重命名的属性，不过这样会有一定的风险**替换掉**原先已经定义的属性。

```js
dojo.declare('A',null,{
    fn1:function(){
        console.log('fn1')
    }
})

A.extend({
    fn1:function(){
        console.log('fn2')
    },
    fn2:function(){
        console.log('fn3')
    }
})

var a = new A ;
a.fn1() // fn2
a.fn2() // fn3
```



### 