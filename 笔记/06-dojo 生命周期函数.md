# 06-dojo 生命周期函数

​	组件生命周期指的是某一个组件从创建到销毁的存续阶段。理解在各个阶段被调用的函数，这些函数有助于自定义组件或继承组件的功能扩展。

- constructor()

构造函数，在使用 new 操作符时被调用，发生在参数被混合进组件实例之前，主要用于 **状态、属性的初始化**。

- postMixInProperties()  自定义属性

使用自定义属性。如果在你的 widget 里面需要自定义属性。该函数会在该组件对应**DOM 节点创建之前被调用**。可以通过参数传入一个包含各种属性的 JavaScript 对象，这些属性被混合到 dijit 组件中，可以通过 this 调用。当混合完成后，在创建dijit 组件之前，还可以加入自己的业务。

- buildRendering() 创建其外观

该方法用来创建 dijit 组件的用户界面，即 DOM 节点。 该方法完成的时候， **this.domNode 指向的是刚创建的 DOM 节点**。

- postCreate() 快速创建

被自定义组件使用的一个函数。当 DOM 节点创建完成后，此方法被调用。需要注意的是，这个时候组件的DOM节点还没有被添加到当前页面的文档树。一般用来添加组件相关的业务逻辑。

- startup()  如要创建一个孩子widget

建立一个父组件后，还需要添加若干子组件（这里的子组件不是表示继承关系，而是表示包含关系），并希望全部加载后一起展现时，就可以调用该函数。

- destroy()



