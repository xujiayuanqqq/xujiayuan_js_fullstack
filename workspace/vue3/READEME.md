新特性
1. Vue3采用渐进式开发，向下兼容
2. 性能提升（打包大小减少41%、初次渲染快55%、更新快133%、内存使用减少54%）
3. Composition API集合，解决Vue2组件开发问题
4. 新的API加入（Teleprot瞬移组件、Suspense解决异步加载组件问题）
5. 更好的TypeScript支持

setup函数的用法，可以代替Vue2中的date和methods属性，直接把逻辑写在setup中使用就可以
ref函数的使用， 它是一个神奇的函数，要在template中使用的变量，必须用ref包装一下
return出去的数据和方法，在模版中才可以使用，这样可以精准的控制暴漏的变量和方法

reactive()函数优化程序

如何选择ref()和reactive()
都是生成响应式对象
reactive()看起来更规范


vue3.x的生命周期和钩子函数

生命周期 从一个组件诞生到消亡，会经历很多过程，这些过程就叫做生命周期
钩子函数 伴随着生命周期，给用户使用的函数，操控生命周期，主要是操控钩子函数

vue3.x生命周期
setup():开始创建组件之前，在beforeCreate和created之前执行。创建的是data和method
onBeforeMount():组件挂载到节点上之前执行的函数
onMounted():组件挂载完成后执行的函数
onBeforeUpdate():组件更新之前执行的函数
onUpdate():组件更新完成之后执行的函数
onBeforeUnmount():组件卸载之前执行的函数
onUnmounted():组件卸载完成后执行的函数
onActivated():被包含在<keep-alive>中的组件，会多出两个生命周期钩子函数。被激活时执行
onDeactivated():比如从A组件，切换到B组件，A组件消失时执行
onErrorCaptured():当捕获一个来自子孙组件的异常时激活钩子函数
onRenderTracked(): 状态跟踪,跟踪页面是上所有响应式变量和方法的状态，也就是用return返回的值，只要页面有update的情况，就会跟踪，然后生成一个event对象，通过event对象来查找程序的问题所在
onRenderTriggered(): 

vue2------------ vue3
beforeCreate  -> setup
created       -> setup
beforeMount   -> onBeforeMount
mounted       -> onMounted
beforeUpdate  -> onBeforeUpdate
Updated       -> onUpdate
beforeDestroy -> onBeforeUnmount
destroyed     -> onUnmounted
activated     -> onActivated
deactivated   -> onDeactivated
errorCaptured -> onErrorCaptured

Vue3watch的使用和注意事项
Vue2中watch-监听器，用来侦测响应数据变化，并且可以得到newValue新值和oldValue老值

Teleport瞬间移动函数的使用
可以把你写的组件挂载到任何你想挂载的DOM上，很自由很独立

1. Dialog被包裹在其他组件之中，容易被干扰
2. 样式也在其他组件中，容易变得非常混乱
Teleport方法可以把Dialog组件渲染到你任意想渲染的外部Dom上，不必嵌套#app里里，这样就不会互相干扰
可以把Teleport看成一个传送门，把你的组件传送到你需要的地方
teleport组件和其他组件没有任何其他的差异，用起来一样

Suspense-初始异步请求组件
Suspense提供两个template的位置，一个是没有请求回来时显示的内容，一个是全部请求完毕的内容
如果要使用Suspense的话，要返回一个promise对象，而不是原来的那种JSON对象
<Suspense>
  <template #default>
    <AsyncShow />
  </template>
  <template #fallback>
    <h1>Loading......</h1>
  </template>
</Suspense>
Suspense是有两个template插槽，第一个default代表异步请求完成后，显示的模版内容；fallback代表在加载中时，显示的模版内容