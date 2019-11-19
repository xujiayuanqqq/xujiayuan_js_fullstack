# 前端面试题总结

## CSS相关

### 1. 盒模型（content 内容宽度、padding 内边距、border 边框、margin 外边距）  
>
> - 盒模型 box-sizing: content-box(标准盒模型) | border-box(IE盒模型) | inherit;此属性允许以特定的方式定义匹配某个区域的特定元素，可指定盒子模型种类。
> ![盒模型](https://img3.mukewang.com/5b73f4140001253705360289.jpg)  
> - 标准盒模型：宽度 = 内容宽度（content）+
padding + border + margin
> ![标准盒模型](https://img4.mukewang.com/5b73f51e00015f7907740523.jpg)  
> - IE盒模型：宽度 = 内容宽度（content + padding + border） + margin  
> ![IE盒子模型](https://img1.mukewang.com/5b73f53f0001a7ec07610507.jpg)

### 2. css有哪些选择器？选择器的优先级
>
> - id选择器 (#idname)
> - class选择器 (.classname)
> - 标签选择器 (tagname)
> - 相邻选择器(p + h1)
> - 子选择器 (ul>li)
> - 后代选择器(li a)
> - 属性选择器(input[type="radio"])
> - 通配符选择器(*)
> - 伪类选择器(li:nth-child(n))
> - !important > 行内样式(1000) > id选择器(100) > class选择器(10) > 标签选择器(1)或伪类选择器 > 通配符 > 继承 > 默认  
> 1.!important声明的样式优先级最高 如果冲突再进行计算  
> 2 如果优先级相同，则选择最后出现的样式  
> 3.继承得到的样式优先级最低  
> 可继承的属性：color font-size font-family  
> 不可继承的属性：height width padding border margin

### 3. 块级元素与内联元素
>
> - 块级元素：独占一行，默认情况下，其宽度自动填满父元素宽度；可以设置width，height属性；可以设置margin和padding属性；对应与display:block。p div ol ul li h1~h6 form table
>
> - 内联元素：相邻的行内元素会排列在同一行里，直到一行排不下，才会换行，其宽度随元素的内容而变化；行内元素设置width，height属性无效；行内元素起边距作用的只有margin-left、margin-right、padding-left、padding-right，其他属性不会起到边距效果；对应于display:inline。a (input img可设置宽高因为是可替换元素) textarea select object span label(为input进行标记/标注)

### 4. display的属性有哪些
>
> - none 隐藏某个元素，隐藏的元素不占用任何空间，隐藏后，该元素原本的空间也会消失，会引发回流(重排)。常会与visibility: hidden进行比较，两者都是隐藏元素，visibility: hidden隐藏的元素仍需占用与未隐藏时一样的空间，会引发重绘。  display属性设置一个元素如何显示，visibility属性指定一个元素应可见还是隐藏。
> - inline-block 转换为一个同时具有块级元素和内联元素特征的元素，它既能改变宽高，又会独占一行
> - inline 转换为内联元素
> - block 转换为块级元素
> - flex 弹性布局 子元素的float、clear和vertical-align属性将失效
> - grid 网格布局
> - box 该显示样式的新值可将此元素及其直系子代加入弹性框模型中
> - table 元素会作为块级表格来显示，表格前后带有换行符
> - inline-table 元素会作为内联表格来显示，表格前后没有带换行符
> - table-cell 元素会作为一个表格单元格显示
> - tabel-caption 元素会作为一个表格标题显示
> - inherit 从父元素继承display属性值

### 5. position有哪些属性
>
> - static 静态定位 默认值，即没有定位，遵循正常的文档流对象。静态定位的元素不会受到top、bottom、left、right影响
> - relative 相对定位元素的定位是相对其正常位置。移动相对定位元素，但它原本所占的空间不会改变。相对定位元素经常被用来作为绝对定位元素的容器块。
> - absolute 绝对定位的元素的位置相对于最近的已定位父元素，如果元素没有已定位的父元素，那么它的位置相对于`<html>`。absolute定位使元素的位置与文档流无关，因此不占据空间。absolute定位的元素和其他元素重叠。
> - fixed 元素的位置相对于浏览器窗口是固定位置，即使窗口是滚动的它也不会移动 Fixed定位使元素的位置与文档流无关，因此不占据空间。Fixed定位的元素与其他元素重叠。

### 6. float有哪些属性
>
> float属性定义元素在哪个方向浮动。浮动元素会生成一个块级框，而不论它本身是何种元素。如果浮动元素非替换元素，则要指定一个明确的宽度；否则，它们会尽可能的窄。
>
> - left 元素向左浮动
> - right 元素向右浮动
> - none 默认值。元素不浮动，并会显示在其在文本中出现的位置
> - inherit 规定应该从父元素继承float属性的值
>
> clear 属性规定元素的哪一侧不允许其他浮动元素
>
> - left 在左侧不允许浮动元素
> - right 在右侧不允许浮动元素
> - both 在左右两侧不允许浮动元素
> - none 默认值。允许浮动元素出现在两侧
> - inherit 规定应该从父元素继承clear属性的值

### 7. 如何理解BFC，有什么作用，怎么产生
>
>BFC块级格式化上下文，决定了其子元素如何定位，以及与其他元素的相互作用关系和作用
>  
> 如何生成BFC
>
> - 根元素就是一个BFC
> - float的值不为none
> - overflow的值不为visible
> - display的值为inline-block、table-cell、table-caption
> - position的值为absolute或fixed
>
> 约束规则
>
> - 内部元素会在垂直方向上一个接一个的排列
> - 垂直方向相邻的两个元素外边距会产生重叠,外边距为正取最大值，外边距为负取绝对值最大值
> - 每个元素的margin box的左边与包含块border box的左边相接触
> - BFC区域不会与float元素区域重叠
> - 计算BFC的高度时，浮动的子元素也参与计算
> - BFC是页面上的一个隔离的独立容器，容器子元素不会影响到外面的元素
>
> BFC应用
>
> - 防止margin重叠 属于同一个BFC的相邻子元素的外边距会发生重叠，可以使相邻子元素处于独立的BFC中，可以避免产生margin重叠
> - 父元素坍塌 子元素浮动后，父元素没有设置高度，父元素会随子元素的浮动而失去高度。给父元素触发BFC，父元素会重新包裹子元素。在BFC中，浮动元素也参与高度计算

### 8. 为什么会出现浮动，什么时候需要清除浮动，如何清除浮动
>
> - 浮动元素碰到包含它的边框或者浮动元素的边框停留。由于浮动元素脱离文档流，所以文档流的块框表现的就像浮动框不存在一样。浮动元素会漂浮在文档流的块框上。
>
> - 浮动带来的问题
>>
>> 1. 父元素的高度无法被撑开，影响与父元素同级的元素
>>
>> 2. 与浮动元素同级的非浮动元素(内联元素)会跟随其后
>>
>> 3. 若非第一个浮动，则该元素之前的元素也需要浮动，否则会影响页面显示的结构
>
> - 清除浮动的方式
>>
>> 1. 父级div定义height
>>
>> 2. 最后一个浮动元素后加空div标签并添加样式clear:both
>>
>> 3. 包含浮动元素的父标签添加样式overflow:hidden|auto
>> 4. 父级div定义zoom(设置或检索对象的缩放比例)
>

### 9. position跟display、overflow、float这些特性相互叠加后会怎么样
>
> - display属性规定元素应该生成怎样的框的类型
> - position属性规定元素的定位类型
> - float属性是一种布局方式定义元素在哪个方向浮动
>>
>>类似优先级机制：position: absolute|fixed优先级最高有它们在时，float不起作用，display值需要调整。float或者absolute定位的元素只能是块元素或表格
>

### 10. CSS水平垂直居中一系列问题
>
> - 水平居中
