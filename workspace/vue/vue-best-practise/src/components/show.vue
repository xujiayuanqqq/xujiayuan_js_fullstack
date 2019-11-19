<template>
  <div>
    {{ html }}
  </div>
</template>

<script>
// import Bus from '@/common/bus.js'
export default {
  data () {
    return {
      html: '还没有点击'
    }
  },
  created () {
    // Bus.$on('getTarget', index => {
    //   this.html = `第${index}个元素被点击了`
    // })
    this.$on('global:getTarget', index => {
      this.html = `第${index}个元素被点击`
    })
  }
}
// eventBus 解决兄弟组件间事件传递的问题 本质是订阅发布者模式 摆脱了父组件 vue实例 实例对象本身有发布者$emit 订阅者$on事件
// vux 也可以解决这个问题，但一般用于中大型项目中
</script>

<style>

</style>
