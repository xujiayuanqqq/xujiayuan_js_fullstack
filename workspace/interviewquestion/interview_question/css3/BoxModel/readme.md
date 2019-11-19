css盒模型面试问题
1. 基本概念： content、padding、margin
content就是内容区域， padding是内边距， margin是外边距，width和height则要根据什么模型决定

2. 标准盒模型、IE盒模型的区别
在标准盒子模型中，width和height指的是内容的宽度和高度。增加内边距、边框和外边距不会影响内容区域的尺寸，但是会增加元素框的总尺寸。
不管padding和border是多少，标准盒模型的内容content区域总是那么大，变大的只是整个元素区域
IE盒模型中，width和height指的是内容区域+border+padding的宽度和高度。
padding或border每增加一寸，IE盒模型的内容区域content宽高就会少一寸，也就是说元素整体不会变化，而是在压榨内容content区域

3. css如何设置这两种模型(如何设置某个盒子为其中一个模型)
设置当前盒子为 标准盒模型(默认)
box-sizing:content-box
设置当前盒子为IE盒模型
box-sizing: border-box 

4. JS如何设置、获取盒模型对应的宽和高
方式一：通过DOM节点的style样式获取
    <div id="box1" style="width: 100px;">123</div>
    <div id="box2">456</div>
    <script>
        var box1 = document.getElementById('box1');
        console.log(box1.style.width);
    </script>
缺点：只能获取行内样式，不能获取内嵌的样式外链的样式，有局限性

方式二(通用型)
    <div id="box1" style="width: 100px;">123</div>
    <div id="box2">456</div>
    <script>
        var box1 = document.getElementById('box1');
        console.log(box1.style.width);
        var box1 = document.getElementById('box1');
        console.log(window.getComputedStyle(box1).width);
    </script>
这种方式能兼容Chrome、火狐。是通用型方式

方式三(IE独有的)
        var box2 = document.getElementById('box2');
        console.log(box2.currentStyle().width);
和方法二相同，但这种方式只有IE独有。获取到的是运行完之后的宽高(三种css样式都可以获取)

方式四
    <div id="box1" style="width: 100px;">123</div>
    <div id="box2">456</div>
    <script>
        var box1 = document.getElementById('box1');
        console.log(box1.style.width);
        var box1 = document.getElementById('box1');
        console.log(window.getComputedStyle(box1).width);
        var box2 = document.getElementById('box2');
        console.log(box2.getBoundingClientRect().width);
    </script>
这种方式获得到的宽度是内容content+padding+border
此api的作用是：获取一个元素的绝对位置。绝对位置是视窗viewport左上角的绝对位置。
此api可以拿到四个属性：letf、top、width、height
四种方式的区别，通用性


5. 根据盒模型解释边距重叠
margin塌陷/margin重叠
只有在标准文档流中，而且是竖直方向的margin不叠加，只取较大的值作为margin

其他情况比如说， 标准文档流的水平方向的margin是可以叠加的，即水平方向没有塌陷现象， 如果不在标准流，比如盒子都浮动了，那么两个盒子之间是没有margin重叠的现象的。
兄弟元素之间
在竖直方向的margin不叠加，以较大的为准

子元素和父元素之间
父元素和子元素在竖直方向上共一个margin，margin塌陷
margin属性本质上是描述兄弟之间的距离，最好不要用margin表达父子之间的距离
如果要表达父子之间的距离，我们一定要善于使用父亲的padding而不是儿子的margin
6. BFC(边距重叠解决方案) 或IFC (Inline Formatting Context)
Block Formatting Context 块级格式化上下文

BFC的布局规则
- 内部的Box会在垂直方向，一个接一个地放置
- Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠
- 每个元素的margin-box的左边，与包含border-box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。
- BFC的区域不会与float box重叠
当容器有足够的剩余空间容纳BFC的宽度时，所有浏览器都会将BFC放置在浮动元素所在行的剩余空间内
当BFC的宽度大于容器剩余宽度时，最新版本的浏览器中只有firefox会在同一行显示，其他浏览器均换行。
- BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，外面的元素也不会影响到容器里面的子元素。
- 计算BFC的高度时，浮动元素也参与计算

哪些元素会生成BFC
- 根元素
- float属性不为none
- position为absolute或fixed
- display为inline-block,table-cell,table-caption,flex,inline-flex
- overflow不为visible(overflow: hidden)
